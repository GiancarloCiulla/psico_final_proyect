import React, { useState } from "react";
import LoginForm from "../../../src/components/Header/Login/LoginForm"; // Ajusta la ruta según dónde está ubicado LoginForm
// import "./Header.scss";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenModal = () => {
    setShowLoginModal(true); // Mostrar el modal
  };

  const handleCloseModal = () => {
    setShowLoginModal(false); // Cerrar el modal
  };

  return (
    <header className="header">
      <h1>Mi Proyecto</h1>
      <button className="login-button" onClick={handleOpenModal}>
        Acceso Admin
      </button>
      {showLoginModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              ✖
            </button>
            <LoginForm onClose={handleCloseModal} /> {/* Renderiza el formulario */}
          </div>
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
