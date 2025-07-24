import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🍃 tea</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/journey">Our Journey</Link></li> 
        <li><Link to="/aboutUs">About Us</Link></li> 
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="auth-buttons">
        <Link to="/signup"><button className="signup">Sign up</button></Link>
        <Link to="/login"><button className="login">Login</button></Link>
        

      </div>
    </nav>
  );
};

export default Navbar;
