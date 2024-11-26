const userModel = require('../models/userModel'); // Importación del modelo

// Crear un nuevo usuario
const createUser = async (req, res) => {
  const { nombre, email, contraseña, rol } = req.body;

  try {
    // Validar campos requeridos
    if (!nombre || !email || !contraseña) {
      return res.status(400).json({ error: 'Todos los campos (nombre, email, contraseña) son obligatorios.' });
    }

    // Insertar el nuevo usuario en la base de datos
    const newUser = await userModel.createUser({
      nombre,
      email,
      contraseña,
      rol: rol || 'user' 
    });

    res.status(201).json({ usuario: newUser }); // Devuelve el usuario creado
  } catch (err) {
    console.error('Error creando usuario:', err.stack);
    if (err.code === '23505') { // Código de error de duplicados (email único)
      res.status(400).json({ error: 'El email ya está registrado.' });
    } else {
      res.status(500).json({ error: 'Error interno del servidor.' });
    }
  }
};

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

    res.json({ usuarios: users });
  } catch (err) {
    console.error('Error al obtener los usuarios:', err.stack);
    res.status(500).json({ error: 'Error al obtener los usuarios.' });
  }
};

module.exports = { getUsers, createUser };



