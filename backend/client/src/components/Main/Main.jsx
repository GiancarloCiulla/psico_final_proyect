
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
// import Footer from "./components/Footer";
import Home from "../Main/Home/Home"
import Categorias from "./Categories/Categorias";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import Buscador from "../Main/Buscador/Buscador";
//import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Ruta para la página principal */}
        <Route
          path="/"
          element={
            <>
              
              <Categorias />
              <Buscador />
            </>
          }
        />
        {/* Ruta para el panel de administración */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* Ruta para el formulario de login */}
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;







// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "../Header/Header";
// // import Footer from "./components/Footer";
// import Home from "../Main/Home/Home"
// import Categorias from "./Categories/Categorias";
// import AdminDashboard from "./AdminDashboard/AdminDashboard";
// //import "./App.css";

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         {/* Ruta para la página principal */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Home />
//               <Categorias />
//             </>
//           }
//         />

//         {/* Ruta para el dashboard de administración */}
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//       </Routes>
//       {/* <Footer /> */}
//     </Router>
//   );
// };

// export default App;