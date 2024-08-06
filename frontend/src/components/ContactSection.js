import React, { useState } from 'react';
import Loader from 'react-loaders';
import '../css/ContactSection.css';
import 'loaders.css/src/animations/ball-spin-fade-loader.scss';
import synapseLogo from '../img/Logo_mail-removebg-preview.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTiktok,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"; // Correcta importación del icono

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Lógica de envío de correo
    setLoading(false); // Placeholder
  };

  return (
    <section className="contact-section-wrapper">
      <div className="contact-section-content">
        <div className="contact-section-form-card">
          <h2>Contáctanos</h2>
          <form className="contact-section-form" onSubmit={sendEmail}>
            <div className="contact-section-form-group">
              <input type="text" name="name" placeholder="Nombre" required />
              <div className="contact-section-phone-email">
                <input type="text" name="phone" placeholder="+56 Teléfono" />
                <input type="email" name="email" placeholder="E-mail" required />
              </div>
              <input type="text" name="subject" placeholder="Asunto" required />
              <textarea name="message" placeholder="Mensaje" required></textarea>
            </div>
            <button type="submit" className="contact-section-submit-button">
              Enviar
            </button>
          </form>
        </div>
        <div className="contact-section-docs-card">
          <h2>Documentos Importantes</h2>
          <p>Descarga los siguientes documentos que te ayudarán a entender mejor nuestros servicios:</p>
          <div className="contact-section-docs-container">
            <a href="/docs/cotizaciones.pdf" className="contact-section-doc-link" download>
              <FontAwesomeIcon icon={faFilePdf} className="contact-section-doc-icon" />
              Descargar Cotizaciones
            </a>
            <a href="/docs/guia-basica-web.pdf" className="contact-section-doc-link" download>
              <FontAwesomeIcon icon={faFilePdf} className="contact-section-doc-icon" />
              Guía Básica de Web
            </a>
          </div>
          <div className="contact-section-image-container">
            <img src={synapseLogo} alt="Logo Synapse Dev" className="contact-section-logo" />
          </div>
          <div className="contact-section-social-media">
            <ul>
              <li><a href="https://web.facebook.com/profile.php?id=61563375403408&locale=es_LA"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="https://www.instagram.com/synapse_dev/?hl=es-es"><FontAwesomeIcon icon={faInstagram} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faYoutube} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTiktok} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
            </ul>
          </div>
        </div>
      </div>
      {loading && (
        <div className="contact-section-loader-overlay">
          <Loader type="ball-spin-fade-loader" />
        </div>
      )}
    </section>
  );
};

export default ContactSection;
