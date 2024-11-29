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
        <button onClick={handleShowForm}>Acceder como Admin</button>
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







// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate(); 

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/api/login', {
//         email,
//         password,
//       });

//       // Validar si el usuario es administrador
//       if (response.data.user.rol === 'admin') {
//         navigate('/admin-dashboard');
//         setError('No tienes acceso como administrador');
//       }
//     } catch (err) {
//       console.error('Error en login:', err);
//       setError(err.response?.data?.error || 'Error al iniciar sesión');
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <h2>Acceso Admin</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <div>
//         <label>Usuario:</label>
//         <input
//           type="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Contraseña:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Acceder</button>
//     </form>
//   );
// };

// export default Login;
