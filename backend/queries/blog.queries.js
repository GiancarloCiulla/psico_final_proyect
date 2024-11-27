const queries = {
    getAllBlogs: `
        SELECT 
            Blogs.ID_blog,
            Blogs.titulo,
            Blogs.contenido,
            Blogs.fecha_publicacion,
            Blogs.link_publicacion,
            Categoria.nombre AS categoria,
            Usuarios.nombre AS autor
        FROM Blogs
        JOIN Categoria ON Blogs.ID_categoria = Categoria.ID_categoria
        JOIN Usuarios ON Blogs.ID_usuario = Usuarios.ID_usuario;
    `,
    createBlog: `
        INSERT INTO Blogs (titulo, contenido, fecha_publicacion, link_publicacion, ID_usuario, ID_categoria)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
    `,
    updateBlog: `
        UPDATE Blogs
        SET titulo = $1, contenido = $2, fecha_publicacion = $3, link_publicacion = $4, ID_usuario = $5, ID_categoria = $6
        WHERE ID_blog = $7 RETURNING *;
    `,
    deleteBlog: `DELETE FROM Blogs WHERE ID_blog = $1 RETURNING *;`,
};

module.exports = queries;
