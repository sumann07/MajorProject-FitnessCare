import React from "react";
import "./Navbar.css";
import { NavLink } from "@zumper/react-router-dom";
import {isAuth,getLocalStorage} from "./Components/Auth/utils";

const navbar = () => {
  return (
  <>
  <div className="container-fluid nav_bg">
    <div className="row">
      <div className="col-10 mx-auto">

  

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">  FitnessCare</NavLink >
  <button className="navbar-toggler"
   type="button" 
   data-toggle="collapse" 
   data-target="#navbarSupportedContent" 
   aria-controls="navbarSupportedContent" 
   aria-expanded="false"
    aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink 
        exact
        activeClassName="menu_active" className="nav-link"
         to="/">Home <span className="sr-only">(current)</span></NavLink >
      </li>
      <li className="nav-item">
        <NavLink  activeClassName="menu_active" className="nav-link" to="/service">Services</NavLink >
      </li>
      <li className="nav-item">
        <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink >
      </li>
  {isAuth()?(<li className="nav-item">
  <NavLink  activeClassName="menu_active" className="nav-link" to="/profile">{getLocalStorage()}</NavLink >
      </li>):(<li className="nav-item ">
        <NavLink  activeClassName="menu_active" className="nav-link " to="/signin">Login</NavLink >
      </li>)}  
      
      {isAuth()?(<li className="nav-item">
        <NavLink  activeClassName="menu_active" className="nav-link" to="/logout">Logout</NavLink >
      </li>):<span> </span>}
     
    </ul>
   
  </div>
</nav>
</div>
    </div>
  </div>
  </>
  );
};
export default navbar;
