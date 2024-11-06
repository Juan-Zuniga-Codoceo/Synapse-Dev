import React from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram,  faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2024 Synapse Dev. Todos los derechos reservados.</p>
      <ul className="social-media">
        <li><a href="https://web.facebook.com/profile.php?id=61563375403408&locale=es_LA"><FontAwesomeIcon icon={faFacebookF} /></a></li>
        <li><a href="https://www.instagram.com/synapse_dev/?hl=es-es"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="https://x.com/Synapse___Dev"><FontAwesomeIcon icon={faTwitter} /></a></li>
      </ul>
    </footer>
  );
};

export default Footer;
