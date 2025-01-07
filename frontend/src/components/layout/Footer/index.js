import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faTwitter,
  faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faClock,
  faCode,
  faDesktop
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Columna de la empresa */}
          <div className="footer-section">
            <h3 className="footer-title">Synapse Dev</h3>
            <p className="footer-description">
              Soluciones digitales innovadoras para impulsar tu negocio al siguiente nivel.
            </p>
            <p className="footer-schedule">
              <FontAwesomeIcon icon={faClock} className="footer-icon" />
              Lunes a Viernes: 9:00 - 18:00
            </p>
          </div>

          {/* Columna de servicios */}
          <div className="footer-section">
            <h3 className="footer-title">Servicios</h3>
            <ul className="footer-list">
              <li>
                <FontAwesomeIcon icon={faCode} className="footer-icon" />
                Desarrollo Web
              </li>
              <li>
                <FontAwesomeIcon icon={faDesktop} className="footer-icon" />
                Diseño UX/UI
              </li>
              <li>
                <FontAwesomeIcon icon={faCode} className="footer-icon" />
                E-commerce
              </li>
            </ul>
          </div>

          {/* Columna de contacto */}
          <div className="footer-section">
            <h3 className="footer-title">Contacto</h3>
            <div className="footer-contact">
              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
                Viña del Mar, Chile
              </p>
              <a href="mailto:contacto@synapsedev.cl">
                <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
                contacto@synapsedev.cl
              </a>
              <a href="tel:+56920333538">
                <FontAwesomeIcon icon={faPhone} className="footer-icon" />
                +56 9 2033 3538
              </a>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="footer-divider"></div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2024 Synapse Dev. Todos los derechos reservados.
          </p>
          <div className="social-links">
            <a 
              href="https://web.facebook.com/profile.php?id=61563375403408&locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a 
              href="https://www.instagram.com/synapse_dev/?hl=es-es"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a 
              href="https://x.com/Synapse___Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;