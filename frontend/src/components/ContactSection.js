import React, { useState } from 'react';
import Loader from 'react-loaders';
import '../css/ContactSection.css';
import 'loaders.css/src/animations/ball-spin-fade-loader.scss';
import synapseLogo from '../img/Logo_mail-removebg-preview.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons"; 

const ContactSection = () => {
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const apiUrl = process.env.REACT_APP_API_URL.trim(); // Eliminar cualquier espacio o salto de línea

const response = await fetch(`${apiUrl}/send-email`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

    
    
    

      const data = await response.json();

      if (data.success) {
        alert('Mensaje enviado con éxito');
      } else {
        alert('Hubo un error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el mensaje');
    } finally {
      setLoading(false);
    }

    e.target.reset();
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
          <br />
          <p>Descarga los siguientes documentos que te ayudarán a entender mejor nuestros servicios:</p>
          <br />
          <div className="contact-section-docs-container">
            <a href="/docs/Cotizacion_Synapse_Dev.docx" className="contact-section-doc-link" download>
              <FontAwesomeIcon icon={faFilePdf} className="contact-section-doc-icon" />
              Descargar Cotizaciones
            </a>
            <a href="/docs/Guia_Basica_Paginas_Web_.pdf" className="contact-section-doc-link" download>
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
              <li><a href="https://x.com/Synapse___Dev"><FontAwesomeIcon icon={faTwitter} /></a></li>
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
