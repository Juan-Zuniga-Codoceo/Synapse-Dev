import React from 'react';
import '../css/Home.css';
import ServicesSection from '../components/ServicesSection'; // Importamos el componente de servicios
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <header className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Synapse Dev</h1>
          <p>Tu socio en soluciones innovadoras de desarrollo web.</p>
          <Link to="/about">
            <button className="cta-button">Conócenos</button>
          </Link>
        </div>
      </header>
      <ServicesSection /> {/* Integramos el componente de servicios */}
    </div>
  );
};

export default Home;
