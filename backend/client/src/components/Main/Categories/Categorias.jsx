import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../styles/components/_categorias.scss"; // Asegúrate de tener este archivo

const Categorias = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/categoria");
        
        setCategorias(response.data);
      } catch (err) {
        console.error("Error al obtener los datos:", err);
        setError("Error al obtener las categorías");
        setCategorias([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategorias();
  }, []);

  // Manejo de estados
  if (loading) return <p>Cargando categorías...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="categorias-container">
      <h1 className="categorias-title">Categorías</h1>
      <div className="categorias-grid">
        {categorias.map((categoria) => (
          <div key={categoria.id} className="categoria-card">
            <h2>{categoria.nombre}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categorias;



//import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "swiper/swiper-bundle.min.css"
// // import "../../../styles/components/_categorias.scss";

// const Categorias = () => {
//   const [categorias, setCategorias] = useState([]); 
//   const [loading, setLoading] = useState(true); 
//   const [error, setError] = useState(null); 

//   useEffect(() => {
//     const fetchCategorias = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/api/categoria"); 
//         console.log("Datos obtenidos:", response.data);

//         // Asumiendo que los datos vienen directamente como un array de categorías
//         setCategorias(response.data);
//       } catch (err) {
//         console.error("Error al obtener los datos:", err);
//         setError("Error al obtener las categorías");
//         setCategorias([]); 
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchCategorias(); 
//   }, []); 

//   // Manejo de estados
//   if (loading) return <p>Cargando categorías...</p>;
//   if (error) return <p>{error}</p>;

//   // Renderizado del componente
//   return (
//     <div className="categorias-container">
//       <h1 className="categorias-title">Categorías</h1>
//       <ul className="categorias-list">
//         {categorias.map((categoria) => (
//           <li key={categoria.id}>{categoria.nombre}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Categorias;
