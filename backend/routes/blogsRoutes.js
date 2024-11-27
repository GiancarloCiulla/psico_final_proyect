const express = require("express");
const router = express.Router();
const blogsController = require("../controllers/blogsController");

// Middleware para verificar el rol del usuario
const isAdmin = (req, res, next) => {
  const { rol } = req.body; // Supone que el rol se envía en el cuerpo de la solicitud o viene del token
  if (rol !== "admin") {
    return res.status(403).json({ error: "Acceso denegado. Solo los usuarios con rol de admin pueden realizar esta acción." });
  }
  next();
};

// Crear un blog (solo admin)
router.post("/", isAdmin, blogsController.createBlog);

// Eliminar un blog (solo admin)
router.delete("/:id", isAdmin, blogsController.deleteBlog);

module.exports = router;
