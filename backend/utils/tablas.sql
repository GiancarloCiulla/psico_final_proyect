CREATE TABLE blog (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  contenido TEXT NOT NULL, 
  fecha_publicacion DATE DEFAULT CURRENT_DATE, 
  link_publicacion TEXT, 
  categoria_id INTEGER NOT NULL, 
  usuario_id INTEGER NOT NULL,
  link_foto TEXT, 
  CONSTRAINT blog_categoria_id_fkey FOREIGN KEY (categoria_id) REFERENCES categoria(id) ON DELETE CASCADE, 
  CONSTRAINT blog_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES usuario(id_usuario) ON DELETE CASCADE 
);
