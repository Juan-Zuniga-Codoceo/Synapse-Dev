import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../img/logo-navbar-removebg.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Synapse Dev Logo" />
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item"><Link to="/">Inicio</Link></li>
          <li className="navbar-item"><Link to="/services">Servicios</Link></li>
          <li className="navbar-item"><Link to="/portfolio">Portafolio</Link></li>
          <li className="navbar-item"><Link to="/about">Acerca de</Link></li>
          <li className="navbar-item"><Link to="/blog">Blog</Link></li>
          <li className="navbar-item"><Link to="/contact">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
