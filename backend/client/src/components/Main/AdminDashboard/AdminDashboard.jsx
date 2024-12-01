import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogForm from "../../BlogForm/BlogForm"; // Importa el componente BlogForm

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState("");

  // Obtener los blogs al cargar el componente
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blog"); // Ajusta la URL de tu API
        setBlogs(response.data.blogs); // Accede a la propiedad `blogs`
      } catch (err) {
        setError("Error al cargar los blogs. Inténtalo más tarde.");
        console.error("Error al cargar los blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  // Eliminar un blog por ID
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token"); // Obtener el token del almacenamiento local
      if (!token) {
        throw new Error("No se encontró un token de autenticación. Por favor, inicia sesión.");
      }
  
      // Realizar la solicitud DELETE
      await axios.delete(`http://localhost:3000/blog/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Formato correcto del token
        },
      });
  
      // Actualizar la lista de blogs en el estado
      setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog.id !== id));
      console.log("Blog eliminado con éxito.");
    } catch (err) {
      console.error("Error al eliminar el blog:", err.response?.data || err.message);
      setError("Error al eliminar el blog. Inténtalo de nuevo.");
    }
  };
  

  return (
    <div className="admin-dashboard">
      <h1>Dashboard de Administrador</h1>
      <p>Bienvenido al panel de control.</p>

      {/* Componente BlogForm */}
      <BlogForm />

      {/* Mostrar errores */}
      {error && <p className="error-message">{error}</p>}

      {/* Listar blogs */}
      <h2>Lista de Blogs</h2>
      <div className="blogs-container">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <h3>{blog.titulo}</h3>
              <p>{blog.contenido}</p>
              <button
                className="delete-button"
                onClick={() => handleDelete(blog.id)}
              >
                Eliminar
              </button>
            </div>
          ))
        ) : (
          <p>No hay blogs disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;



// import React from "react";
// import BlogForm from "../../BlogForm/BlogForm"; // Importa el componente BlogForm
// import Home from "../../Main/Home/Home";

// const AdminDashboard = () => {
//   return (
//     <div className="admin-dashboard">
//       <h1>Dashboard de Administrador</h1>
//       <p>Bienvenido al panel de control.</p>
//       <BlogForm />
//     </div>
//   );
// };


// export default AdminDashboard;
