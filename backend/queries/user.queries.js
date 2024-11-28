// USUARIOS
const queries = {
    getAllUsers: `SELECT * FROM usuario;`,
    createUser: `INSERT INTO usuario (nombre, email, contraseña, rol) VALUES ($1, $2, $3, $4) RETURNING *;`,
    deleteUserByEmail: `DELETE FROM usuario WHERE email = $1 RETURNING *;`,
  };
  
  module.exports = queries;
