import { useEffect, useState } from 'react';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/blogs') // Asegúrate de usar el puerto correcto
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error al obtener los blogs:", error));
  }, []);

  return (
    <div>
      <h1>Listado de Blogs</h1>
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div key={blog.id} style={{ border: "1px solid #ddd", margin: "10px", padding: "10px" }}>
            <h2>{blog.titulo}</h2>
            <p>{blog.contenido}</p>
            <img src={blog.link_foto} alt={blog.titulo} style={{ maxWidth: "100%" }} />
            <a href={blog.link_publicacion} target="_blank" rel="noopener noreferrer">
              Leer más
            </a>
          </div>
        ))
      ) : (
        <p>Cargando blogs o no hay blogs disponibles.</p>
      )}
    </div>
  );
}

export default App;
