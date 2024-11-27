const queries = {
    // Crear un nuevo blog
    createBlog: `
      INSERT INTO blog (
        titulo, contenido, fecha_publicacion, link_publicacion, categoria_id, usuario_id, link_foto
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *;
    `,
  
    // Eliminar un blog por ID
    deleteBlog: `
    DELETE FROM blog
    WHERE id = $1
    RETURNING *;
  `,

    // Obtener todos los blogs
    getAllBlogs: `
      SELECT 
        blog.id,
        blog.titulo,
        blog.contenido,
        blog.fecha_publicacion,
        blog.link_publicacion,
        blog.link_foto,
        categoria.nombre AS categoria,
        usuario.nombre AS autor
      FROM blog
      INNER JOIN categoria ON blog.categoria_id = categoria.id
      INNER JOIN usuario ON blog.usuario_id = usuario.id_usuario
      ORDER BY blog.fecha_publicacion DESC;
    `,
    
  };
  
  module.exports = queries;
  

  
 
  