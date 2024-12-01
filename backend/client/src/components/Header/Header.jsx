import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import LoginForm from "../../../src/components/Header/Login/LoginForm";
import "../../styles/components/_header.scss";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate(); // Hook para redireccionar

  const handleOpenModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseModal = () => {
    setShowLoginModal(false);
  };

  const handleNavigateToHome = () => {
    navigate("/"); // Redirige a la ruta "/home"
  };

  return (
    <header className="header">
      <h1>Espacio para el Alma</h1>
      <h3>By: Anabel Soliveri</h3>
      <div className="header-buttons">
        <button className="home-button" onClick={handleNavigateToHome}>
          🏠
        </button>
        <button className="login-button" onClick={handleOpenModal}>
          Admin 💻
        </button>
      </div>
      {showLoginModal && (
        <div className="modal">
            
            <LoginForm onClose={handleCloseModal} />
          </div>
  
      )}
    </header>
  );
};

export default Header;




// import React, { useState } from "react";
// // import "./Header.scss"; 
// import LoginForm from './Header/Login/Login';

// const Header = () => {
//   const [showLoginModal, setShowLoginModal] = useState(false);

//   const handleOpenModal = () => {
//     setShowLoginModal(true); 
//   };

//   const handleCloseModal = () => {
//     setShowLoginModal(false); 
//   };

//   return (
//     <header className="header">
//       <h1>Mi Proyecto</h1>
//       <button className="login-button" onClick={handleOpenModal}>
//         Acceso Admin
//       </button>
//       {showLoginModal && (
//         <div className="modal">
//           <div className="modal-content">
//             <button className="close-button" onClick={handleCloseModal}>
//               ✖
//             </button>
//             <LoginForm onClose={handleCloseModal} /> {/* Formulario de login */}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
