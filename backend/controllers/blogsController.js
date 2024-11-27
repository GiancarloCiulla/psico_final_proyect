const pool = require('../config/db_pgsql');
const queries = require('../queries/blog.queries');

// Obtener todos los blogs
exports.getAllBlogs = async (req, res) => {
    try {
        const result = await pool.query(queries.getAllBlogs);
        res.json(result.rows);
    } catch (err) {
        console.error('Error obteniendo blogs:', err.stack);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Crear un blog
exports.createBlog = async (req, res) => {
    const { titulo, contenido, fecha_publicacion, link_publicacion, ID_usuario, ID_categoria } = req.body;
    try {
        const result = await pool.query(queries.createBlog, [
            titulo, contenido, fecha_publicacion, link_publicacion, ID_usuario, ID_categoria,
        ]);
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error creando blog:', err.stack);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Actualizar un blog
exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    const { titulo, contenido, fecha_publicacion, link_publicacion, ID_usuario, ID_categoria } = req.body;
    try {
        const result = await pool.query(queries.updateBlog, [
            titulo, contenido, fecha_publicacion, link_publicacion, ID_usuario, ID_categoria, id,
        ]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Blog no encontrado' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error('Error actualizando blog:', err.stack);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

// Eliminar un blog
exports.deleteBlog = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query(queries.deleteBlog, [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Blog no encontrado' });
        }
        res.json({ message: 'Blog eliminado exitosamente', blog: result.rows[0] });
    } catch (err) {
        console.error('Error eliminando blog:', err.stack);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};








// // const pool = require('../db');

// // Obtener todos los blogs
// exports.getAllBlogs = async (req, res) => {
//   try {
//     const query = `
//       SELECT 
//         Blogs.ID_blog,
//         Blogs.titulo,
//         Blogs.contenido,
//         Blogs.fecha_publicacion,
//         Blogs.link_publicacion,
//         Categoria.nombre AS categoria,
//         Usuarios.nombre AS autor
//       FROM Blogs
//       JOIN Categoria ON Blogs.ID_categoria = Categoria.ID_categoria
//       JOIN Usuarios ON Blogs.ID_usuario = Usuarios.ID_usuario;
//     `;
//     const result = await pool.query(query);
//     res.json(result.rows);
//   } catch (err) {
//     console.error('Error obteniendo blogs:', err.stack);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };

// // Crear un nuevo blog
// exports.createBlog = async (req, res) => {
//   const { titulo, contenido, fecha_publicacion, link_publicacion, ID_usuario, ID_categoria } = req.body;

//   try {
//     const query = `
//       INSERT INTO Blogs (titulo, contenido, fecha_publicacion, link_publicacion, ID_usuario, ID_categoria)
//       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
//     `;
//     const values = [titulo, contenido, fecha_publicacion, link_publicacion, ID_usuario, ID_categoria];
//     const result = await pool.query(query, values);

//     res.status(201).json(result.rows[0]);
//   } catch (err) {
//     console.error('Error creando blog:', err.stack);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };

// // Actualizar un blog existente
// exports.updateBlog = async (req, res) => {
//   const { id } = req.params;
//   const { titulo, contenido, fecha_publicacion, link_publicacion, ID_usuario, ID_categoria } = req.body;

//   try {
//     const query = `
//       UPDATE Blogs
//       SET titulo = $1, contenido = $2, fecha_publicacion = $3, link_publicacion = $4, ID_usuario = $5, ID_categoria = $6
//       WHERE ID_blog = $7 RETURNING *;
//     `;
//     const values = [titulo, contenido, fecha_publicacion, link_publicacion, ID_usuario, ID_categoria, id];
//     const result = await pool.query(query, values);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ error: 'Blog no encontrado' });
//     }

//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error('Error actualizando blog:', err.stack);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };

// // Eliminar un blog
// exports.deleteBlog = async (req, res) => {
//   const { id } = req.params;

//   try {
//     const query = `DELETE FROM Blogs WHERE ID_blog = $1 RETURNING *;`;
//     const result = await pool.query(query, [id]);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ error: 'Blog no encontrado' });
//     }

//     res.json({ message: 'Blog eliminado exitosamente', blog: result.rows[0] });
//   } catch (err) {
//     console.error('Error eliminando blog:', err.stack);
//     res.status(500).json({ error: 'Error interno del servidor' });
//   }
// };
