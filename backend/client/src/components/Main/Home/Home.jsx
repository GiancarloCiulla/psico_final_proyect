import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../../../styles/components/_Home.scss"; // Ajusta la ruta del archivo de estilos si es necesario
import Card from "./Card/Card"; 
const Home = () => {
  const [blogs, setBlogs] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  // Función para obtener las categorías desde el servidor usando Axios
async function fetchCategories() {
  try {
    const response = await axios.get('/api/categorias'); // Endpoint que definimos
    renderCategories(response.data); // Pasar las categorías para pintarlas en el DOM
  } catch (error) {
    console.error('Error al obtener las categorías:', error);
  }
}


  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blog"); 
        console.log("Datos obtenidos:", response.data);

        // Accede a la clave correcta para obtener los datos  
        setBlogs(response.data.blogs); 
      } catch (err) {
        console.error("Error al obtener los datos:", err);
        setError("Error al obtener los datos de la API");
        setBlogs([]); 
      } finally {
        setLoading(false); 
      }
    };

    fetchBlogs();
  }, []); 

  if (loading) return <p>Cargando blogs...</p>; 
  if (error) return <p>{error}</p>; 

  return (
    <div className="home-container">
      <h1 className="home-title">Blogs</h1>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <Card key={blog.id} blog={blog} /> 
        ))}
      </div>
    </div>
  );
};

export default Home;




