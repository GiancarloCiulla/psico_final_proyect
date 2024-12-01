import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate
import LoginForm from "../../../src/components/Header/Login/LoginForm";
import "../../styles/components/_header.scss";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const navigate = useNavigate(); // Hook para redireccionar

  useEffect(() => {
    const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("rating-value");

    stars.forEach((star) => {
      star.addEventListener("click", () => {
        const rating = star.getAttribute("data-value");
        updateStars(rating);
        ratingValue.textContent = `Tu valoración: ${rating} estrellas`;
      });
    });

    function updateStars(rating) {
      stars.forEach((star) => {
        if (star.getAttribute("data-value") <= rating) {
          star.classList.add("filled");
        } else {
          star.classList.remove("filled");
        }
      });
    }

    // Cleanup event listeners
    return () => {
      stars.forEach((star) => {
        star.removeEventListener("click", () => {});
      });
    };
  }, []);

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
      <div className="container">
        {/* Botones */}
        <div className="header-buttons">
          <button className="home-button" onClick={handleNavigateToHome}>
            🏠
          </button>
          <button className="login-button" onClick={handleOpenModal}>
            Admin 💻
          </button>
        </div>

        {/* Estrellas */}
        <div className="star-rating">
          <span className="star" data-value="1">
            ★
          </span>
          <span className="star" data-value="2">
            ★
          </span>
          <span className="star" data-value="3">
            ★
          </span>
          <span className="star" data-value="4">
            ★
          </span>
          <span className="star" data-value="5">
            ★
          </span>
        </div>
      </div>
      <p id="rating-value">Tu valoración: 0 estrellas</p>

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
