import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ onClose }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/admin/login", formData);
      if (response.data.success) {
        alert("Bienvenido Admin");
        onClose(); // Cierra el modal
      } else {
        setError("Credenciales inválidas");
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError("Error al conectar con el servidor");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p>{error}</p>}
      <button type="submit">Acceder</button>
    </form>
  );
};

export default LoginForm;


// import React, { useState } from "react";
// import axios from "axios";

// const LoginForm = ({ onClose }) => {
//   const [formData, setFormData] = useState({ username: "", password: "" });
//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/admin/login", formData); // Cambia la URL si es necesario
//       console.log("Respuesta del servidor:", response.data);
//       if (response.data.success) {
//         alert("Bienvenido Admin");
//         onClose(); // Cierra el modal al iniciar sesión correctamente
//       } else {
//         setError("Credenciales inválidas");
//       }
//     } catch (err) {
//       console.error("Error al iniciar sesión:", err);
//       setError("Error al conectar con el servidor");
//     }
//   };

//   return (
//     <div>
//       <h2>Iniciar Sesión</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="username">Usuario:</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="password">Contraseña:</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         {error && <p className="error-message">{error}</p>}
//         <button type="submit">Acceder</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
