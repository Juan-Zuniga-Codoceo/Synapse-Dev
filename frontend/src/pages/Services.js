import React from 'react';
import '../css/Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <h1>Nuestros Servicios</h1>
      <div className="services-list">
        <div className="service-item">
          <h2>Desarrollo Web</h2>
          <p>Creación de sitios web responsivos y modernos adaptados a tus necesidades.</p>
        </div>
        <div className="service-item">
          <h2>Optimización SEO</h2>
          <p>Mejorando la visibilidad de tu sitio web en los motores de búsqueda.</p>
        </div>
        <div className="service-item">
          <h2>Consultoría</h2>
          <p>Asesoría experta para ayudarte a alcanzar tus objetivos empresariales.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
