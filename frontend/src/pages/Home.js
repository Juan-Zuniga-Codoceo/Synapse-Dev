import React from 'react';
import '../css/Home.css';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Synapse Dev</h1>
          <p>Tu socio en soluciones innovadoras de desarrollo web.</p>
          <button className="cta-button">Conócenos</button>
        </div>
      </header>
      <section className="services">
        <h2>Nuestros Servicios</h2>
        <div className="service-cards">
          <div className="card">
            <h3>Desarrollo Web</h3>
            <p>Creación de sitios web responsivos y modernos adaptados a tus necesidades.</p>
          </div>
          <div className="card">
            <h3>Optimización SEO</h3>
            <p>Mejorando la visibilidad de tu sitio web en los motores de búsqueda.</p>
          </div>
          <div className="card">
            <h3>Consultoría</h3>
            <p>Asesoría experta para ayudarte a alcanzar tus objetivos empresariales.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
