const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// Rutas de usuarios
router.get("/", usersController.getUsers); // Obtener todos los usuarios o un usuario por email
router.post("/", usersController.createUser); // Crear un nuevo usuario

// Estas rutas adicionales requieren que definas las funciones correspondientes en el controlador
// Si aún no las tienes, debes crearlas.
router.get("/:id", async (req, res) => {
  res.status(501).json({ error: "Función 'getUserById' no implementada." }); // Ruta no implementada
});
router.put("/:id", async (req, res) => {
  res.status(501).json({ error: "Función 'updateUser' no implementada." }); // Ruta no implementada
});
router.delete("/:id", async (req, res) => {
  res.status(501).json({ error: "Función 'deleteUser' no implementada." }); // Ruta no implementada
});

module.exports = router;






// const express = require("express");
// const router = express.Router();
// const usersController = require("../controllers/usersController");

// // Rutas de usuarios
// router.get("/", usersController.getAllUsers); // Obtener todos los usuarios
// router.get("/:id", usersController.getUserById); // Obtener un usuario por ID
// router.post("/", usersController.createUser); // Crear un nuevo usuario
// router.put("/:id", usersController.updateUser); // Actualizar un usuario por ID
// router.delete("/:id", usersController.deleteUser); // Eliminar un usuario por ID

// module.exports = router;
