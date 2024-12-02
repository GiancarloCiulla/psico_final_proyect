import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
// import Footer from "./components/Footer";
import Home from "./components/Main/Home/Home";
import Categorias from "./components/Main/Categories/Categorias";
import AdminDashboard from "./components/Main/AdminDashboard/AdminDashboard";
import Buscador from "./components/Main/Buscador/Buscador"
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
              {/* <Buscador />  */}
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
