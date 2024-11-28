import React, { useEffect, useState } from "react";
import axios from "axios";
// import "../../../styles/components/_Home.scss"; // Ajusta la ruta del archivo de estilos si es necesario
import Card from "./Card/Card"; 
const Home = () => {
  const [blogs, setBlogs] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

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

