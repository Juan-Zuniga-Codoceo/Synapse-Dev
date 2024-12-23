import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css';
import ServicesSection from '../../components/home/ServicesSection';
import TechnologiesSection from '../../components/home/TechnologiesSection';
import LastProjects from '../../components/home/LastProjects';
import TrustedBy from '../../components/home/TrustedBy/index'; 
import StatisticsSection from '../../components/home/StatisticsSection/index';
import ParallaxSection from '../../components/layout/Parallax/ParallaxSection';

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Transformamos Ideas en 
            <br></br>
            <span>Experiencias Digitales</span>
          </h1>
          <p className="hero-subtitle">
            Tu socio en soluciones innovadoras de desarrollo web. Creamos experiencias digitales que impulsan tu negocio al siguiente nivel y dan vida a tus ideas.
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
      <ParallaxSection>
        <ServicesSection />
      </ParallaxSection>
      <TechnologiesSection />
      <ParallaxSection>
        <LastProjects />
      </ParallaxSection>
      <StatisticsSection />
      <TrustedBy />  
    </>
  );
};

export default Home;