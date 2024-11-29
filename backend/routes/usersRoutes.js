const express = require("express");
const router = express.Router(); // Asegúrate de inicializar router aquí
const usersController = require("../controllers/usersController");

// Rutas de usuarios
router.get("/", usersController.getUsers); // Obtener todos los usuarios o un usuario por email
router.post("/", usersController.createUser); // Crear un nuevo usuario
router.delete("/", usersController.deleteUserByEmail); // Eliminar usuario por email

module.exports = router; // Exportar el router correctamente



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
