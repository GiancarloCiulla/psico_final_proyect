const express = require("express");
const router = express.Router();
const citasController = require("../controllers/citasController");
// Rutas de citas
router.get("/", async (req, res) => {
  try {
    if (typeof citasController.getAllCitas === "function") {
      return await citasController.getAllCitas(req, res); // Obtener todas las citas
    } else {
      res.status(501).json({ error: "La función 'getAllCitas' no está implementada." });
    }
  } catch (err) {
    res.status(500).json({ error: "Error al procesar la solicitud de obtener citas." });
  }
});

router.post("/", citasController.createCita); // Crear una nueva cita
router.put("/:id", citasController.updateCita); // Actualizar una cita por ID
router.delete("/:id", citasController.deleteCita); // Eliminar una cita por ID

module.exports = router;
