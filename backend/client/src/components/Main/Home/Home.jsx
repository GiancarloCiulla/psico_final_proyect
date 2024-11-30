import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/pages/_home.scss";
import Card from "./Card/Card"; 


const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blog"); // Asegúrate de que la URL sea correcta
        console.log("Datos obtenidos desde la API:", response.data); // Verifica la estructura de la respuesta
        setBlogs(response.data.blogs); // Ajusta para usar el array dentro de `blogs`
      } catch (err) {
        console.error("Error al cargar los blogs:", err); // Muestra errores en consola
        setError("Error al cargar los blogs");
      } finally {
        setLoading(false);
      }
    };
  
  
    fetchBlogs();
  }, []);

  if (loading) return <p>Cargando blogs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="blog-container">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Blog;





// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../../styles/pages/_home.scss";
// import Card from "./Card/Card"; 


// const Blog = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/blogs"); // Asegúrate de que tu backend devuelva estos datos
//         setBlogs(response.data);
//       } catch (err) {
//         setError("Error al cargar los blogs");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) return <p>Cargando blogs...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="blog-container">
//       <h1 className="blog-title">Blogs</h1>
//       <div className="blog-grid">
//         {blogs.map((blog) => (
//           <div key={blog.id} className="blog-card">
//             <img src={blog.link_foto} alt={blog.titulo} className="blog-card__image" />
//             <div className="blog-card__content">
//               <h2 className="blog-card__title">{blog.titulo}</h2>
//               <p className="blog-card__excerpt">
//                 {blog.contenido.length > 100 ? `${blog.contenido.substring(0, 100)}...` : blog.contenido}
//               </p>
//               <p className="blog-card__meta">
//                 Publicado el: {new Date(blog.fecha_publicacion).toLocaleDateString()}
//               </p>
//               <a href={blog.link_publicacion} className="blog-card__link" target="_blank" rel="noopener noreferrer">
//                 Leer más
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;




// const Home = () => {
//   const [blogs, setBlogs] = useState([]); 
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null); 

//   // Función para obtener las categorías desde el servidor usando Axios
// async function fetchCategories() {
//   try {
//     const response = await axios.get('/api/categorias'); // Endpoint que definimos
//     renderCategories(response.data); // Pasar las categorías para pintarlas en el DOM
//   } catch (error) {
//     console.error('Error al obtener las categorías:', error);
//   }
// }


//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/blog"); 
//         console.log("Datos obtenidos:", response.data);

//         // Accede a la clave correcta para obtener los datos  
//         setBlogs(response.data.blogs); 
//       } catch (err) {
//         console.error("Error al obtener los datos:", err);
//         setError("Error al obtener los datos de la API");
//         setBlogs([]); 
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchBlogs();
//   }, []); 

//   if (loading) return <p>Cargando blogs...</p>; 
//   if (error) return <p>{error}</p>; 

//   return (
//     <div className="home-container">
//       <h1 className="home-title">Blogs</h1>
//       <div className="blogs-grid">
//         {blogs.map((blog) => (
//           <Card key={blog.id} blog={blog} /> 
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Home;




