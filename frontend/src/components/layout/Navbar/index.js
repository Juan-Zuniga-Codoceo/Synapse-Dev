// Navbar component
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
    <nav className={`navbar ${isScrolled ? 'solid' : 'transparent'}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Synapse Dev Logo" />
        </Link>

        {/* Menú Desktop */}
        <ul className="navbar-menu desktop">
          <li className="navbar-item">
            <Link to="/">Inicio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services">Servicios</Link>
          </li>
          <li className="navbar-item">
            <Link to="/portfolio">Portafolio</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about">Acerca de</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contacto</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="cta-button">
              INICIAR PROYECTO
            </Link>
          </li>
        </ul>

        {/* Botón menú móvil */}
        <div 
          className={`menu-icon ${menuOpen ? 'open' : ''}`} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Menú Móvil */}
        <div className={`menu-overlay ${menuOpen ? 'open' : ''}`}>
          <div className="close-menu-container">
            <button 
              className="close-menu"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
            >
              ×
            </button>
          </div>

          <ul className="navbar-menu mobile">
            <li className="navbar-item">
              <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
            </li>
            <li className="navbar-item">
              <Link to="/services" onClick={() => setMenuOpen(false)}>Servicios</Link>
            </li>
            <li className="navbar-item">
              <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portafolio</Link>
            </li>
            <li className="navbar-item">
              <Link to="/about" onClick={() => setMenuOpen(false)}>Acerca de</Link>
            </li>
            <li className="navbar-item">
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
            </li>
            <li className="navbar-item">
              <Link 
                to="/contact" 
                className="cta-button mobile" 
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