import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer";
import Home from "./components/Main/Home/Home";
import Categorias from "./components/Main/Categories/Categorias";
import AdminDashboard from "./components/Main/AdminDashboard/AdminDashboard";
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
              <Home />
            </>
          }
        />

        {/* Ruta para el dashboard de administración */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;









// import React from 'react';
// import { Routes, Route } from 'react-router-dom'; 
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Main from './components/Main';
// import Categorias from './components/Main/Categories/Categorias';
// import Login from './components/Header/Login/LoginForm'; 
// import AdminDashboard from './components/Main/AdminDashboard/AdminDashboard';
// //import './App.css';
// import Home from './components/Main/Home/Home'

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Categorias />
//       {/* <Main /> */}
//       <Home />
//       {/* <Footer /> */}
//     </>
//   );
// };

// export default App;
