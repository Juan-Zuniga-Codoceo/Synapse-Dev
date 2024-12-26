// src/components/shared/ContactSection/index.js
import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faWhatsapp
} from "@fortawesome/free-brands-svg-icons";
import { 
  faFilePdf, 
  faEnvelope, 
  faPhone 
} from "@fortawesome/free-solid-svg-icons";
import synapseLogo from '../../../assets/images/logos/Logo_mail-removebg-preview.png';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    const message = `
      *Consulta desde la web*
      Nombre: ${formData.name}
      Email: ${formData.email}
      Teléfono: ${formData.phone}
      Asunto: ${formData.subject}
      Mensaje: ${formData.message}
    `;
    
    const phoneNumber = "+56928333538"; // Reemplazar con tu número de WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleWhatsApp();
    setFormData({
      name: '',
      phone: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section">
      <div className="contact-grid">
        <div className="contact-form-container">
          <h2>Contáctanos</h2>
          <p className="contact-subtitle">
            Estamos aquí para ayudarte con tu próximo proyecto
          </p>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Nombre"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group-row">
              <input
                type="tel"
                name="phone"
                placeholder="+56 Teléfono"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Mensaje"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Enviar Mensaje
              <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
            </button>
          </form>
        </div>

        <div className="contact-info-container">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <div className="contact-details">
              <a href="mailto:contacto@synapsedev.cl" className="contact-detail">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>contacto@synapsedev.cl</span>
              </a>
              <a href="tel:+56XXXXXXXX" className="contact-detail">
                <FontAwesomeIcon icon={faPhone} />
                <span>+56 9 2833 3538</span>
              </a>
            </div>
          </div>

          <div className="documents-section">
            <h3>Documentos Importantes</h3>
            <p>Descarga los siguientes documentos para conocer más sobre nuestros servicios:</p>
            <div className="documents-grid">
              <a href="/docs/Cotizacion_Synapse_Dev.docx" className="document-link" download>
                <FontAwesomeIcon icon={faFilePdf} />
                <span>Descargar Cotizaciones</span>
              </a>
              <a href="/docs/Guia_Basica_Paginas_Web_.pdf" className="document-link" download>
                <FontAwesomeIcon icon={faFilePdf} />
                <span>Guía Básica de Web</span>
              </a>
            </div>
          </div>

          <div className="brand-section">
            <img src={synapseLogo} alt="Synapse Dev Logo" className="brand-logo" />
            <div className="social-links">
              <a href="https://web.facebook.com/profile.php?id=61563375403408" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://www.instagram.com/synapse_dev/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://twitter.com/Synapse___Dev" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;