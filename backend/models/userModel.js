const pool = require('../config/db_pgsql');

const createUser = async ({ nombre, email, contraseña, rol }) => {
  const query = `
    INSERT INTO usuario (nombre, email, contraseña, rol)
    VALUES ($1, $2, $3, $4) RETURNING *;
  `;
  const values = [nombre, email, contraseña, rol];
  const result = await pool.query(query, values);
  return result.rows[0];
};

const getAllUsers = async () => {
  const query = 'SELECT * FROM usuario';
  const result = await pool.query(query);
  return result.rows;
};

const getUserByEmail = async (email) => {
  const query = 'SELECT * FROM usuario WHERE email = $1';
  const result = await pool.query(query, [email]);
  return result.rows[0];
};

const deleteUserByEmail = async (email) => {
  const query = `
    DELETE FROM usuario
    WHERE email = $1
    RETURNING *;
  `;
  const result = await pool.query(query, [email]);
  return result.rows[0];
};

module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
  deleteUserByEmail,
};







// const pool = require('../config/db_pgsql');

// // Crear un nuevo usuario
// const createUser = async ({ nombre, email, contraseña, rol }) => {
//   const query = `
//     INSERT INTO usuario (nombre, email, contraseña, rol)
//     VALUES ($1, $2, $3, $4) RETURNING *;
//   `;
//   const values = [nombre, email, contraseña, rol];
//   const result = await pool.query(query, values);
//   return result.rows[0]; 
// };

// // Obtener todos los usuarios
// const getAllUsers = async () => {
//   const query = 'SELECT * FROM usuario';
//   const result = await pool.query(query);
//   return result.rows;
// };

// // Obtener un usuario por email
// const getUserByEmail = async (email) => {
//   const query = 'SELECT * FROM usuario WHERE email = $1';
//   const result = await pool.query(query, [email]);
//   return result.rows[0];
// };

// // Actualizar un usuario por ID
// const updateUser = async ({ id, nombre, email, contraseña, rol }) => {
//   const query = `
//     UPDATE usuario
//     SET nombre = $1, email = $2, contraseña = $3, rol = $4
//     WHERE id = $5
//     RETURNING *;
//   `;
//   const values = [nombre, email, contraseña, rol, id];
//   try {
//     const result = await pool.query(query, values);
//     return result.rows[0];
//   } catch (err) {
//     console.error("Error actualizando usuario:", err.stack);
//     throw err;
//   }
// };

// const deleteUserByEmail = async (email) => {
//     const query = `
//       DELETE FROM usuario
//       WHERE email = $1
//       RETURNING *;
//     `;
//     try {
//       const result = await pool.query(query, [email]);
//       return result.rows[0]; 
//     } catch (err) {
//       console.error("Error eliminando usuario:", err.stack);
//       throw err;
//     }
//   };
  
  
  
  
  
//   module.exports = {
//       createUser,
//       getAllUsers,
//       getUserByEmail,
//       updateUser,
//       deleteUserByEmail, 
// };


// // const pool = require('../config/db_pgsql');

// // // Crear un nuevo usuario
// // const createUser = async ({ nombre, email, contraseña, rol }) => {
// //   const query = `
// //     INSERT INTO usuario (nombre, email, contraseña, rol)
// //     VALUES ($1, $2, $3, $4) RETURNING *;
// //   `;
// //   const values = [nombre, email, contraseña, rol];
// //   const result = await pool.query(query, values);
// //   return result.rows[0]; 
// // };

// // // Obtener todos los usuarios
// // const getAllUsers = async () => {
// //   const query = 'SELECT * FROM usuario';
// //   const result = await pool.query(query);
// //   return result.rows;
// // };

// // // Obtener un usuario por email
// // const getUserByEmail = async (email) => {
// //   const query = 'SELECT * FROM usuario WHERE email = $1';
// //   const result = await pool.query(query, [email]);
// //   return result.rows[0];
// // };

// // module.exports = {
// //   createUser,
// //   getAllUsers,
// //   getUserByEmail,
// // };
