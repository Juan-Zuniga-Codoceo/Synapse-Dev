import React from 'react';
import '../css/Home.css';
import ServicesSection from '../components/ServicesSection';
import { Link } from 'react-router-dom';
import TechnologiesSection from '../components/TechnologiesSection';
import LastProjects from '../components/LastProjects';
import LatestPosts from '../components/LatestPosts';

const Home = () => {
  return (
    <>
      <header className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Synapse Dev</h1>
          <p>Tu socio en soluciones innovadoras de desarrollo web.</p>
          <Link to="/about">
            <button className="cta-button">Conócenos</button>
          </Link>
        </div>
      </header>
      <ServicesSection />
      <TechnologiesSection />
      <LastProjects />
      <LatestPosts />
    </>
  );
};

export default Home;
