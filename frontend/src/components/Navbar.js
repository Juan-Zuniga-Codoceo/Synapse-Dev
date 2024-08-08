/*import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../img/logo-navbar-removebg.png';

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar transparent');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarClass('navbar solid');
    } else {
      setNavbarClass('navbar transparent');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={navbarClass}>
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
*/


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import logo from '../img/logo-navbar-removebg.png';

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar transparent');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarClass('navbar solid');
    } else {
      setNavbarClass('navbar transparent');
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={navbarClass}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Synapse Dev Logo" />
        </Link>
        <div className={`menu-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li className="navbar-item"><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
          <li className="navbar-item"><Link to="/services" onClick={toggleMenu}>Servicios</Link></li>
          <li className="navbar-item"><Link to="/portfolio" onClick={toggleMenu}>Portafolio</Link></li>
          <li className="navbar-item"><Link to="/about" onClick={toggleMenu}>Acerca de</Link></li>
          <li className="navbar-item"><Link to="/blog" onClick={toggleMenu}>Blog</Link></li>
          <li className="navbar-item"><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
