import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faSearch, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import '../css/ServicesSection.css';

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h2>Nuestros Servicios</h2>
      <div className="services-grid">
        <div className="service-item">
          <FontAwesomeIcon icon={faLaptopCode} size="3x" />
          <h3>Desarrollo Web</h3>
          <p>Creación de sitios web modernos, responsivos y personalizados.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faSearch} size="3x" />
          <h3>Optimización SEO</h3>
          <p>Mejoramos la visibilidad de tu sitio web en los motores de búsqueda.</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faLightbulb} size="3x" />
          <h3>Consultoría</h3>
          <p>Asesoría experta para potenciar tu negocio en línea.</p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
