import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Synapse Dev. Todos los derechos reservados.</p>
      <ul className="social-media">
        <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faTiktok} /></a></li>
        <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
      </ul>
    </footer>
  );
};

export default Footer;
