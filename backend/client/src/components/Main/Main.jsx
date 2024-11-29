import React, { Component } from "react";
import Home from './Home/Home'
import Categorias from "./categorias/Categorias";
import AdminDashboard from "./AdminDashboard/AdminDashboard";

class Main extends Component {
  render() {
    return <div>
      <AdminDashboard />
      {/* <Home /> */}
    </div>;
  }
}

export default Main;
