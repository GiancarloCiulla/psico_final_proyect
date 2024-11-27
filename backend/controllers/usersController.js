const bcrypt = require('bcrypt'); // Para encriptar contraseñas
const userModel = require('../models/userModel'); // Importar el modelo para interactuar con la base de datos

// Obtener usuarios
const getUsers = async (req, res) => {
  try {
    let users;

    if (req.query.email) {
      // Obtener usuario por email si está en los parámetros
      users = await userModel.getUserByEmail(req.query.email);

      if (!users) {
        return res.status(404).json({ error: 'Usuario no encontrado.' });
      }
    } else {
      // Obtener todos los usuarios
      users = await userModel.getAllUsers();
    }

    // Excluir la contraseña de los resultados por seguridad
    const usersWithoutPasswords = users.map(user => {
      const { contraseña, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    res.status(200).json({ usuarios: usersWithoutPasswords });
  } catch (err) {
    console.error('Error al obtener los usuarios:', err.stack);
    res.status(500).json({ error: 'Error al obtener los usuarios.' });
  }
};

// Crear un usuario
const createUser = async (req, res) => {
  try {
    const { nombre, email, contraseña, rol } = req.body;

    // Encriptar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Llama al método del modelo para insertar el usuario
    const nuevoUsuario = await userModel.createUser({
      nombre,
      email,
      contraseña: hashedPassword,
      rol,
    });

    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el usuario', detalles: error.message });
  }
};

//---------
const deleteUserByEmail = async (req, res) => {
  const { email } = req.body; // Obtener el email del cuerpo de la solicitud

  try {
    // Validar que el email esté presente
    if (!email) {
      return res.status(400).json({ error: "El email es obligatorio para eliminar un usuario." });
    }

    // Llama al modelo para eliminar el usuario
    const deletedUser = await userModel.deleteUserByEmail(email);

    if (!deletedUser) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    res.status(200).json({ message: "Usuario eliminado con éxito.", usuario: deletedUser });
  } catch (err) {
    console.error("Error eliminando usuario:", err.stack);
    res.status(500).json({ error: "Error interno del servidor." });
  }
};


  



//---
// Actualizar un usuario
const updateUser = async (req, res) => {
  const { id } = req.params; // Obtén el ID del usuario de los parámetros de la ruta
  const { nombre, email, contraseña, rol } = req.body; // Obtén los datos a actualizar del body

  try {
    // Validar datos obligatorios
    if (!id || !nombre || !email || !contraseña) {
      return res.status(400).json({ error: "Todos los campos son obligatorios." });
    }

    // Encriptar la contraseña si se proporciona una nueva
    const hashedPassword = await bcrypt.hash(contraseña, 10);

    // Llamar al método del modelo para actualizar el usuario
    const updatedUser = await userModel.updateUser({
      id,
      nombre,
      email,
      contraseña: hashedPassword,
      rol,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    res.status(200).json({ usuario: updatedUser });
  } catch (err) {
    console.error("Error actualizando usuario:", err.stack);
    res.status(500).json({ error: "Error interno del servidor." });
  }
};

module.exports = { getUsers, createUser, updateUser, deleteUserByEmail };
