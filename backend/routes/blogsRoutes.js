const express = require("express");
const router = express.Router();
const blogsController = require("../controllers/blogsController");

const isAdmin = (req, res, next) => {
  const { rol } = req.body;
  if (rol !== "admin") {
    return res.status(403).json({ error: "Acceso denegado. Solo los usuarios con rol de admin pueden realizar esta acción." });
  }
  next();
};

router.get("/", blogsController.getAllBlogs);
router.post("/", isAdmin, blogsController.createBlog);
router.delete("/:id", isAdmin, blogsController.deleteBlog);
router.delete("/titulo/:titulo", isAdmin, blogsController.deleteBlogByTitle);

module.exports = router;





