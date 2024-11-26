// controllers/citasController.js

// Obtener todas las citas
exports.getAllCitas = (req, res) => {
    res.status(200).json({ message: "Todas las citas" });
};

// Crear una nueva cita
exports.createCita = (req, res) => {
    const nuevaCita = req.body;
    res.status(201).json({ message: "Cita creada exitosamente", data: nuevaCita });
};

// Actualizar una cita
exports.updateCita = (req, res) => {
    const { id } = req.params;
    const datosActualizados = req.body;
    res.status(200).json({ message: `Cita con ID ${id} actualizada`, data: datosActualizados });
};

// Eliminar una cita
exports.deleteCita = (req, res) => {
    const { id } = req.params;
    res.status(200).json({ message: `Cita con ID ${id} eliminada` });
};
