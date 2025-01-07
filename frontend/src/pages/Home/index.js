// src/pages/Home/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import ServicesSection from '../../components/home/ServicesSection';
import TechnologiesSection from '../../components/home/TechnologiesSection';
import LastProjects from '../../components/home/LastProjects';
import TrustedBy from '../../components/home/TrustedBy'; 
import StatisticsSection from '../../components/home/StatisticsSection';
import ParallaxSection from '../../components/layout/Parallax/ParallaxSection';
import SercotecBanner from '../../components/home/SercotecBanner';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Expertos en páginas web
            <br />
            <span>que impulsan tu negocio.</span>
          </h1>
          <p className="hero-subtitle">
          Páginas web que transforman visitantes en clientes reales. Expertos en crear sitios web modernos, rápidos y optimizados que potencian tu negocio en el mundo digital.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="hero-cta-primary">
              Iniciar Proyecto
            </Link>
            <Link to="/portfolio" className="hero-cta-secondary">
              Ver Portafolio
            </Link>
          </div>
        </div>
      </section>

      
      <div className="home-section home-section--light">
        <ServicesSection />
      </div>
      <SercotecBanner />

      <div className="home-section home-section--dark">
        <TechnologiesSection />
      </div>

      <div className="home-section home-section--light">
        <LastProjects />
      </div>

      <div className="home-section home-section--dark">
        <StatisticsSection />
      </div>

      <div className="home-section home-section--dark">
        <TrustedBy />
      </div>
    </div>
  );
};

export default Home;