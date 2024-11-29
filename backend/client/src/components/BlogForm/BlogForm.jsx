import React, { useState, useEffect } from "react";
import axios from "axios";

const BlogForm = () => {
  // Estado inicial para los datos del formulario
  const [formData, setFormData] = useState({
    titulo: "",
    contenido: "",
    fecha_publicacion: "",
    link_publicacion: "",
    categoria_id: "",
    usuario_id: 1,
    link_foto: "",
  });

  // Estado para las categorías
  const [categorias, setCategorias] = useState([]); 
  const [message, setMessage] = useState(""); 

  // useEffect para obtener las categorías al cargar el componente
  useEffect(() => {
    const fetchCategorias = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/categoria");
        const categoriasData = Array.isArray(response.data) ? response.data : []; // Validación
        setCategorias(categoriasData);
      } catch (error) {
        console.error("Error al obtener categorías:", error);
        setCategorias([]); // Asegúrate de manejar el error
      }
    };

    fetchCategorias();
  }, []);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/blog", formData);
      setMessage("Blog creado exitosamente.");
      setFormData({
        titulo: "",
        contenido: "",
        fecha_publicacion: "",
        link_publicacion: "",
        link_foto: "",
        categoria_id: "",
        usuario_id: 1,
      });
    } catch (error) {
      console.error("Error al crear el blog:", error);
      setMessage("Error al crear el blog.");
    }
  };

  return (
    <div className="blog-form-container">
      <h1>Crear Nuevo Blog</h1>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <div>
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={formData.titulo}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="contenido">Contenido:</label>
          <textarea
            id="contenido"
            name="contenido"
            value={formData.contenido}
            onChange={handleChange}
            rows="10"
          />
        </div>
        <div>
          <label htmlFor="fecha_publicacion">Fecha de Publicación:</label>
          <input
            type="date"
            id="fecha_publicacion"
            name="fecha_publicacion"
            value={formData.fecha_publicacion}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="link_publicacion">Enlace del Blog:</label>
          <input
            type="url"
            id="link_publicacion"
            name="link_publicacion"
            value={formData.link_publicacion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="link_foto">Enlace de la Imagen:</label>
          <input
            type="url"
            id="link_foto"
            name="link_foto"
            value={formData.link_foto}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="categoria_id">Categoría:</label>
          <select
            id="categoria_id"
            name="categoria_id"
            value={formData.categoria_id}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar Categoría</option>
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Crear Blog</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default BlogForm;





// import React, { useState, useEffect } from "react";
// import axios from "axios";
// //import "./BlogForm.scss"; // Archivo de estilos

// const BlogForm = () => {
//   const [formData, setFormData] = useState({
//     titulo: "",
//     contenido: "",
//     fecha_publicacion: "",
//     link_publicacion: "",
//     link_foto: "",
//     categoria_id: "", 
//     usuario_id: 1, 
//   });

//   const [categorias, setCategorias] = useState([]); 
//   const [message, setMessage] = useState(""); 

//   // Obtener las categorías desde el backend
//   useEffect(() => {
//     const fetchCategorias = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/blog"); 
//         setCategorias(response.data); 
//       } catch (error) {
//         console.error("Error al obtener categorías:", error);
//       }
//     };

//     fetchCategorias();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/blog", formData); // revisar!
//       setMessage("Blog creado exitosamente.");
//       setFormData({
//         titulo: "",
//         contenido: "",
//         fecha_publicacion: "",
//         link_publicacion: "",
//         link_foto: "",
//         categoria_id: "",
//         usuario_id: 1,
//       });
//     } catch (error) {
//       console.error("Error al crear el blog:", error);
//       setMessage("Error al crear el blog.");
//     }
//   };

//   return (
//     <div className="blog-form-container">
//       <h1>Crear Nuevo Blog</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="titulo">Título:</label>
//           <input
//             type="text"
//             id="titulo"
//             name="titulo"
//             value={formData.titulo}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="contenido">Contenido:</label>
//           <textarea
//             id="contenido"
//             name="contenido"
//             value={formData.contenido}
//             onChange={handleChange}
//             rows="10" 
//           />
//         </div>
//         <div>
//           <label htmlFor="fecha_publicacion">Fecha de Publicación:</label>
//           <input
//             type="date"
//             id="fecha_publicacion"
//             name="fecha_publicacion"
//             value={formData.fecha_publicacion}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="link_publicacion">Enlace del Blog:</label>
//           <input
//             type="url"
//             id="link_publicacion"
//             name="link_publicacion"
//             value={formData.link_publicacion}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="link_foto">Enlace de la Imagen:</label>
//           <input
//             type="url"
//             id="link_foto"
//             name="link_foto"
//             value={formData.link_foto}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <label htmlFor="categoria_id">Categoría:</label>
//           <select
//             id="categoria_id"
//             name="categoria_id"
//             value={formData.categoria_id}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Seleccionar Categoría</option>
//             {categorias.map((categoria) => (
//               <option key={categoria.id} value={categoria.id}>
//                 {categoria.nombre}
//               </option>
//             ))}
//           </select>
//         </div>
//         <button type="submit">Crear Blog</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default BlogForm;
