import React from "react";

const Card = ({ blog }) => {
  return (
    <div className="blog-card">
      {blog.link_foto && (
        <img
          src={blog.link_foto}
          alt={`Imagen de ${blog.titulo}`}
          className="blog-image"
        />
      )}
      <h3>{blog.titulo}</h3>
      <p>
        {blog.contenido.length > 100
          ? blog.contenido.slice(0, 100) + "..."
          : blog.contenido}
      </p>
      <a
        href={blog.link_publicacion}
        target="_blank"
        rel="noopener noreferrer"
        className="read-more"
      >
        Leer más
      </a>
    </div>
  );
};

export default Card;
