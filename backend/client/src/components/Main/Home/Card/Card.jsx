import React from "react";

const Card = ({ blog }) => {
  // Validar que blog exista
  if (!blog) return null;

  // Desestructurar las propiedades del blog con valores predeterminados
  const {
    titulo = "Título no disponible",
    contenido = "Contenido no disponible...",
    link_foto = "https://via.placeholder.com/150", // Imagen predeterminada
    link_publicacion = "#",
    fecha_publicacion,
  } = blog;

  return (
    <div className="card">
      {/* Imagen con validación */}
      <img
        src={link_foto}
        alt={titulo}
        className="card__image"
      />
      <div className="card__content">
        {/* Título */}
        <h2 className="card__title">{titulo}</h2>

        {/* Extracto de contenido */}
        <p className="card__excerpt">
          {contenido.length > 100 ? `${contenido.substring(0, 100)}...` : contenido}
        </p>

        {/* Fecha de publicación */}
        <p className="card__meta">
          Publicado el: {fecha_publicacion
            ? new Date(fecha_publicacion).toLocaleDateString()
            : "Fecha no disponible"}
        </p>

        {/* Enlace a la publicación */}
        <a
          href={link_publicacion}
          className="card__link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer más
        </a>
      </div>
    </div>
  );
};

export default Card;





// const Card = ({ blog }) => {
//   return (
//     <div className="blog-card">
//       {blog.link_foto && (
//         <img
//           src={blog.link_foto}
//           alt={`Imagen de ${blog.titulo}`}
//           className="blog-image"
//         />
//       )}
//       <h3>{blog.titulo}</h3>
//       <p>
//         {blog.contenido.length > 100
//           ? blog.contenido.slice(0, 100) + "..."
//           : blog.contenido}
//       </p>
//       <a
//         href={blog.link_publicacion}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="read-more"
//       >
//         Leer más
//       </a>
//     </div>
//   );
// };

// export default Card;
