const express = require("express");
const router = express.Router();
const blogsController = require("../controllers/blogsController");

// Rutas de blogs
router.get("/", blogsController.getAllBlogs); // Obtener todos los blogs
router.post("/", blogsController.createBlog); // Crear un nuevo blog
router.put("/:id", blogsController.updateBlog); // Actualizar un blog por ID
router.delete("/:id", blogsController.deleteBlog); // Eliminar un blog por ID

module.exports = router;
