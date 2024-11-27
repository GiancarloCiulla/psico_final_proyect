// USUARIOS
const queries = {
    getAllUsers: `SELECT * FROM usuario;`,
    getUserById: `SELECT * FROM usuario WHERE id = $1;`,
    createUser: `INSERT INTO usuario (nombre, email, contraseña, rol) VALUES ($1, $2, $3, $4) RETURNING *;`,
    updateUser: `
        UPDATE usuario
        SET nombre = $1, email = $2, contraseña = $3, rol = $4
        WHERE id = $5 RETURNING *;
    `,
    deleteUserByEmail: `DELETE FROM usuario WHERE email = $1 RETURNING *;`, 
};

module.exports = queries;
