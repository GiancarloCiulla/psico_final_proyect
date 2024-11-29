import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Categorias from './components/Main/categorias/Categorias';
import Login from './components/Header/Login/LoginForm'; 
import AdminDashboard from './components/Main/AdminDashboard/AdminDashboard';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Categorias />
      <Main />
      <Footer />
    </>
  );
};

export default App;
