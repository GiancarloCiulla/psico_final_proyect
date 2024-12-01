import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showForm, setShowForm] = useState(false); // Estado para mostrar u ocultar el formulario
  const navigate = useNavigate();

  const handleShowForm = () => {
    setShowForm(true); // Muestra el formulario al hacer clic en el botón
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/admin-dashboard"); // Redirige directamente al dashboard
  };

  return (
    <div>
      {!showForm ? (
        <button onClick={handleShowForm}>Introduce tus credenciales🪪</button>
      ) : (
        <form onSubmit={handleLogin}>
          <h2>Acceso Admin</h2>
          <div>
            <label>Usuario:</label>
            <input type="email" placeholder="Email" required />
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" placeholder="Contraseña" required />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      )}
    </div>
  );
};

export default Login;

