import React, { useState, useEffect } from "react";
import Home from "../../Main/Home/Card/Card.jsx"; // Ajusta la ruta según la ubicación de tu componente Card

const Buscador = ({ blogs }) => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Sincronizar `filteredBlogs` y categorías con `blogs` al inicio o cuando `blogs` cambie
  useEffect(() => {
    setFilteredBlogs(blogs); // Inicializa `filteredBlogs` con todos los blogs
    // Extraer categorías únicas de los blogs
    const uniqueCategories = [...new Set(blogs.map((blog) => blog.categoria))];
    setCategories(uniqueCategories);
  }, [blogs]);

  // Función para manejar el cambio de categoría
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    // Aplicar filtro por categoría
    if (category === "") {
      setFilteredBlogs(blogs); // Mostrar todos los blogs si no se selecciona categoría
    } else {
      const filtered = blogs.filter((blog) => blog.categoria === category);
      setFilteredBlogs(filtered);
    }
  };

  return (
    <div className="buscador-container">
    
      {/* Filtro por categoría */}
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="buscador-select"
      >
        <option value="">Todas las categorías</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {/* Mostrar los blogs filtrados */}
      <div className="blog-grid">
        {filteredBlogs.map((blog) => (
          <Home key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Buscador;
