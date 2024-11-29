const pool = require("../config/db_pgsql");
const queries = require("../queries/blog.queries");

// Middleware para verificar el rol del usuario
const isAdmin = (rol) => {
  if (rol !== "admin") {
    return { status: 403, error: "Acceso denegado. Solo los usuarios con rol de admin pueden realizar esta acción." };
  }
  return null;
};

const createBlog = async (req, res) => {
  const { titulo, contenido, usuario_id, categoria_id, fecha_publicacion, link_publicacion, link_foto, rol } = req.body;

  try {
    // Verificar que el usuario tenga rol de admin
    const adminError = isAdmin(rol);
    if (adminError) {
      return res.status(adminError.status).json({ error: adminError.error });
    }

    // Validar datos requeridos
    if (!titulo || !contenido || !usuario_id || !categoria_id) {
      return res.status(400).json({ error: "Todos los campos (titulo, contenido, usuario_id, categoria_id) son obligatorios." });
    }

    // Verificar que categoria_id exista
    const categoriaQuery = "SELECT * FROM categoria WHERE id = $1";
    const categoriaResult = await pool.query(categoriaQuery, [categoria_id]);
    if (categoriaResult.rows.length === 0) {
      return res.status(400).json({ error: `La categoría con id ${categoria_id} no existe.` });
    }

    // Verificar que usuario_id exista
    const usuarioQuery = "SELECT * FROM usuario WHERE id_usuario = $1";
    const usuarioResult = await pool.query(usuarioQuery, [usuario_id]);
    if (usuarioResult.rows.length === 0) {
      return res.status(400).json({ error: `El usuario con id ${usuario_id} no existe.` });
    }

    // Insertar el blog en la base de datos
    const values = [
      titulo,
      contenido,
      fecha_publicacion ? new Date(fecha_publicacion) : new Date(),
      link_publicacion,
      categoria_id,
      usuario_id,
      link_foto,
    ];
    const result = await pool.query(queries.createBlog, values);

    res.status(201).json({ blog: result.rows[0] });
  } catch (err) {
    console.error("Error al crear el blog:", err.message);
    res.status(500).json({ error: "Error interno del servidor.", detalles: err.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const result = await pool.query(queries.getAllBlogs);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "No se encontraron blogs." });
    }

    res.status(200).json({ blogs: result.rows });
  } catch (err) {
    console.error("Error al obtener los blogs:", err.message);
    res.status(500).json({ error: "Error interno del servidor.", detalles: err.message });
  }
};

const deleteBlog = async (req, res) => {
  const { id } = req.params;
  const { rol } = req.body;

  try {
    const adminError = isAdmin(rol);
    if (adminError) {
      return res.status(adminError.status).json({ error: adminError.error });
    }

    const result = await pool.query(queries.deleteBlog, [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Blog no encontrado." });
    }

    res.status(200).json({ message: "Blog eliminado con éxito.", blog: result.rows[0] });
  } catch (err) {
    console.error("Error al eliminar el blog:", err.message);
    res.status(500).json({ error: "Error interno del servidor.", detalles: err.message });
  }
};

const deleteBlogByTitle = async (req, res) => {
  const { titulo } = req.params;
  const { rol } = req.body;

  try {
    const adminError = isAdmin(rol);
    if (adminError) {
      return res.status(adminError.status).json({ error: adminError.error });
    }

    const result = await pool.query(queries.deleteBlogByTitle, [titulo]);

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Blog no encontrado." });
    }

    res.status(200).json({ message: "Blog eliminado con éxito.", blog: result.rows[0] });
  } catch (err) {
    console.error("Error al eliminar el blog por título:", err.message);
    res.status(500).json({ error: "Error interno del servidor.", detalles: err.message });
  }
};

module.exports = { getAllBlogs, createBlog, deleteBlog, deleteBlogByTitle };










// const pool = require("../config/db_pgsql");
// const queries = require("../queries/blog.queries");

// // Middleware para verificar el rol del usuario
// const isAdmin = (rol) => {
//   if (rol !== "admin") {
//     return { status: 403, error: "Acceso denegado. Solo los usuarios con rol de admin pueden realizar esta acción." };
//   }
//   return null;
// };

// const createBlog = async (req, res) => {
    
//   const { titulo, contenido, usuario_id, categoria_id, fecha_publicacion, link_publicacion, link_foto, rol } = req.body;

//   try {
//     // Verificar que el usuario tenga rol de admin
//     const adminError = isAdmin(rol);
//     if (adminError) {
//       return res.status(adminError.status).json({ error: adminError.error });
//     }

//     // Validar datos requeridos
//     if (!titulo || !contenido || !usuario_id || !categoria_id) {
//       return res.status(400).json({ error: "Todos los campos (titulo, contenido, usuario_id, categoria_id) son obligatorios." });
//     }

//     // Verificar que categoria_id exista
//     const categoriaQuery = "SELECT * FROM categoria WHERE id = $1";
//     const categoriaResult = await pool.query(categoriaQuery, [categoria_id]);
//     if (categoriaResult.rows.length === 0) {
//       return res.status(400).json({ error: `La categoría con id ${categoria_id} no existe.` });
//     }

//     // Verificar que usuario_id exista
//     const usuarioQuery = "SELECT * FROM usuario WHERE id_usuario = $1";
//     const usuarioResult = await pool.query(usuarioQuery, [usuario_id]);
//     if (usuarioResult.rows.length === 0) {
//       return res.status(400).json({ error: `El usuario con id ${usuario_id} no existe.` });
//     }

//     // Insertar el blog en la base de datos
//     const values = [
//       titulo,
//       contenido,
//       fecha_publicacion ? new Date(fecha_publicacion) : new Date(),
//       link_publicacion,
//       categoria_id,
//       usuario_id,
//       link_foto,
//     ];
//     const result = await pool.query(queries.createBlog, values);

//     res.status(201).json({ blog: result.rows[0] });
//   } catch (err) {
//     console.error("Error al crear el blog:", err.message);
//     res.status(500).json({ error: "Error interno del servidor.", detalles: err.message });
//   }
// };
// const getAllBlogs = async (req, res) => {
//     try {
//       const result = await pool.query(queries.getAllBlogs);
  
//       if (result.rows.length === 0) {
//         return res.status(404).json({ error: "No se encontraron blogs." });
//       }
  
//       res.status(200).json({ blogs: result.rows });
//     } catch (err) {
//       console.error("Error al obtener los blogs:", err.message);
//       res.status(500).json({ error: "Error interno del servidor.", detalles: err.message });
//     }
//   };

// // Eliminar un blog
// const deleteBlog = async (req, res) => {
//   const { id } = req.params;
//   const { rol } = req.body;

//   try {
//     // Verificar que el usuario tenga rol de admin
//     const adminError = isAdmin(rol);
//     if (adminError) {
//       return res.status(adminError.status).json({ error: adminError.error });
//     }

//     // Query para eliminar el blog
//     const result = await pool.query(queries.deleteBlog, [id]);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ error: "Blog no encontrado." });
//     }

//     res.status(200).json({ message: "Blog eliminado con éxito.", blog: result.rows[0] });
//   } catch (err) {
//     console.error("Error al eliminar el blog:", err.message);
//     res.status(500).json({ error: "Error interno del servidor.", detalles: err.message });
//   }
// };

// module.exports = { getAllBlogs, createBlog, deleteBlog };















// const pool = require("../config/db_pgsql");
// const queries = require("../queries/blog.queries");

// // Middleware para verificar el rol del usuario
// const isAdmin = (rol) => {
//   if (rol !== "admin") {
//     throw new Error("Acceso denegado. Solo los usuarios con rol de admin pueden realizar esta acción.");
//   }
// };

// const createBlog = async (req, res) => {
//     const {titulo, contenido, usuario_id, categoria_id, fecha_publicacion, link_publicacion, link_foto, rol } = req.body;
  
//     try {
//       // Verificar que el usuario tenga rol de admin
//       if (rol !== "admin") {
//         return res.status(403).json({ error: "Acceso denegado. Solo los usuarios con rol de admin pueden realizar esta acción." });
//       }
  
//       // Validar datos requeridos
//       if (!titulo || !contenido || !usuario_id || !categoria_id) {
//         return res.status(400).json({ error: "Todos los campos (titulo, contenido, usuario_id, categoria_id) son obligatorios." });
//       }
  
//       // Verificar que categoria_id exista
//       const categoriaQuery = "SELECT * FROM categoria WHERE id = $1";
//       const categoriaResult = await pool.query(categoriaQuery, [categoria_id]);
//       if (categoriaResult.rows.length === 0) {
//         return res.status(400).json({ error: `La categoría con id ${categoria_id} no existe.` });
//       }
  
//       // Verificar que usuario_id exista
//       const usuarioQuery = "SELECT * FROM usuario WHERE id = $1";
//       const usuarioResult = await pool.query(usuarioQuery, [usuario_id]);
//       if (usuarioResult.rows.length === 0) {
//         return res.status(400).json({ error: `El usuario con id ${usuario_id} no existe.` });
//       }
  
//       // Insertar el blog en la base de datos
//       const values = [titulo, contenido, fecha_publicacion || new Date(), link_publicacion, categoria_id, usuario_id, link_foto];
//       const result = await pool.query(queries.createBlog, values);
  
//       res.status(201).json({ blog: result.rows[0] });
//     } catch (err) {
//       console.error("Error al crear el blog:", err.stack);
//       res.status(500).json({ error: "Error interno del servidor." });
//     }
//   };
// // Eliminar un blog
// const deleteBlog = async (req, res) => {
//   const { id } = req.params;
//   const { rol } = req.body;

//   try {
//     // Verificar que el usuario tenga rol de admin
//     isAdmin(rol);

//     // Query para eliminar el blog
//     const result = await pool.query(queries.deleteBlog, [id]);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ error: "Blog no encontrado." });
//     }

//     res.status(200).json({ message: "Blog eliminado con éxito.", blog: result.rows[0] });
//   } catch (err) {
//     console.error("Error al eliminar el blog:", err.stack);

//     // Respuesta específica si no es admin
//     if (err.message.includes("Acceso denegado")) {
//       return res.status(403).json({ error: err.message });
//     }

//     res.status(500).json({ error: "Error interno del servidor." });
//   }
// };

// module.exports = { createBlog, deleteBlog };



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
//         Usuarios.nombre AS usuario
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
