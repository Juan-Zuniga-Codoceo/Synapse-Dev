import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../../assets/icons/logo-navbar-removebg.png';

const Navbar = () => {
 const [isScrolled, setIsScrolled] = useState(false);
 const [menuOpen, setMenuOpen] = useState(false);

 useEffect(() => {
   const handleScroll = () => {
     setIsScrolled(window.scrollY > 50);
   };
   window.addEventListener('scroll', handleScroll);
   return () => window.removeEventListener('scroll', handleScroll);
 }, []);

 useEffect(() => {
   if (menuOpen) {
     document.body.style.overflow = 'hidden';
   } else {
     document.body.style.overflow = 'unset';
   }
 }, [menuOpen]);

 return (
  <nav className={`main-navbar ${isScrolled ? 'solid' : 'transparent'}`}>
    <div className="main-navbar-container">
      <Link to="/" className="main-navbar-logo">
        <img src={logo} alt="Synapse Dev Logo" />
      </Link>

      {/* Menú Desktop */}
      <ul className="main-navbar-menu desktop">
        <li className="main-navbar-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="main-navbar-item">
          <Link to="/services">Servicios</Link>
        </li>
        <li className="main-navbar-item">
          <Link to="/portfolio">Portafolio</Link>
        </li>
        <li className="main-navbar-item">
          <Link to="/operia">Demo Operia</Link>
        </li>
        <li className="main-navbar-item">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="main-navbar-item">
          <Link to="/about">Acerca de</Link>
        </li>
        <li className="main-navbar-item">
          <Link to="/contact">Contacto</Link>
        </li>
        <li className="main-navbar-item">
          <Link to="/contact" className="navbar-cta-button">
            INICIAR PROYECTO
          </Link>
        </li>
      </ul>

       {/* Botón menú móvil */}
       <div 
         className={`main-menu-icon ${menuOpen ? 'open' : ''}`} 
         onClick={() => setMenuOpen(!menuOpen)}
       >
         <div className="bar"></div>
         <div className="bar"></div>
         <div className="bar"></div>
       </div>

       {/* Menú Móvil */}
       <div className={`main-menu-overlay ${menuOpen ? 'open' : ''}`}>
          <div className="main-close-menu-container">
            <button 
              className="main-close-menu"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              ×
            </button>
          </div>

          <ul className="main-navbar-menu mobile">
            <li className="main-navbar-item">
              <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            </li>
            <li className="main-navbar-item">
              <Link to="/services" onClick={() => setMenuOpen(false)}>Servicios</Link>
            </li>
            <li className="main-navbar-item">
              <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portafolio</Link>
            </li>
            <li className="main-navbar-item">
              <Link to="/operia" onClick={() => setMenuOpen(false)}>Demo Operia</Link>
            </li>
            <li className="main-navbar-item">
              <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
            </li>
            <li className="main-navbar-item">
              <Link to="/about" onClick={() => setMenuOpen(false)}>Acerca de</Link>
            </li>
            <li className="main-navbar-item">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
            </li>
            <li className="main-navbar-item">
              <Link 
                to="/contact" 
                className="navbar-cta-button mobile" 
                onClick={() => setMenuOpen(false)}
              >
                INICIAR PROYECTO
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;