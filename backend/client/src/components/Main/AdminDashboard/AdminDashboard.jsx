import React from "react";
import BlogForm from "../../BlogForm/BlogForm"; // Importa el componente BlogForm
import Home from "../../Main/Home/Home";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Dashboard de Administrador</h1>
      <p>Bienvenido al panel de control.</p>
      <BlogForm />
    </div>
  );
};


export default AdminDashboard;
