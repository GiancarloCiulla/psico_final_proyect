CREATE TABLE blog (
  id SERIAL PRIMARY KEY, -- Clave primaria autoincremental
  titulo VARCHAR(255) NOT NULL, -- Título del blog
  contenido TEXT NOT NULL, -- Contenido del blog
  fecha_publicacion DATE DEFAULT CURRENT_DATE, -- Fecha de publicación con valor por defecto
  link_publicacion TEXT, -- URL del blog o enlace asociado
  categoria_id INTEGER NOT NULL, -- ID de la categoría (clave foránea)
  usuario_id INTEGER NOT NULL, -- ID del usuario que creó el blog (clave foránea)
  link_foto TEXT, -- URL de la imagen asociada
  CONSTRAINT blog_categoria_id_fkey FOREIGN KEY (categoria_id) REFERENCES categoria(id) ON DELETE CASCADE, -- Clave foránea a la tabla categoria
  CONSTRAINT blog_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES usuario(id_usuario) ON DELETE CASCADE -- Clave foránea a la tabla usuario
);
