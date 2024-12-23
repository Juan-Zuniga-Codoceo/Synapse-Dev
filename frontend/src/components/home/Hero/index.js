// src/components/home/Hero/index.js
import React from 'react';
import './styles.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background"></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">
          Transformamos Ideas en <span>Experiencias Digitales</span>
        </h1>
        <p className="hero-subtitle">
          Desarrollamos soluciones web innovadoras y personalizadas que impulsan el crecimiento de tu negocio.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="hero-cta-primary">
            Iniciar Proyecto
          </a>
          <a href="#portfolio" className="hero-cta-secondary">
            Ver Portafolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;