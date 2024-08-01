import React, { useState } from 'react';
import '../css/Services.css';
import TechnologiesSection from '../components/TechnologiesSection';
import ContactSection from '../components/ContactSection';
import landingPageImg from '../img/landing-page.jpg';
import empresaServiciosImg from '../img/empresa-servicios.jpg';
import ecommerceImg from '../img/ecommerce.jpg';
import corredoraPropiedadesImg from '../img/corredora-propiedades.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Services = () => {
  const [activePlan, setActivePlan] = useState(null);

  const togglePlan = (plan) => {
    setActivePlan(activePlan === plan ? null : plan);
  };

  const closePopup = () => {
    setActivePlan(null);
  };

  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Desarrollo Web a Medida</h1>
        <p>Nos especializamos en crear soluciones digitales adaptadas a las necesidades de tu negocio.</p>
      </header>

      <div className="plans-grid">
        <div className="service-item">
          <img src={landingPageImg} alt="Landing Page" />
          <h2>Landing Page</h2>
          <p>Diseño y desarrollo de páginas de aterrizaje atractivas y optimizadas para conversiones.</p>
          <button className="cta-button" onClick={() => togglePlan('basic')}>Detalle</button>
        </div>

        <div className="service-item">
          <img src={empresaServiciosImg} alt="Web Empresas y Servicios" />
          <h2>Web Empresas y Servicios</h2>
          <p>Desarrollo de sitios web corporativos que representen la identidad de tu empresa.</p>
          <button className="cta-button" onClick={() => togglePlan('advanced')}>Detalle</button>
        </div>

        <div className="service-item">
          <img src={ecommerceImg} alt="Web Ecommerce" />
          <h2>Web Ecommerce</h2>
          <p>Soluciones de comercio electrónico para llevar tu tienda en línea al siguiente nivel.</p>
          <button className="cta-button" onClick={() => togglePlan('ecommerce')}>Detalle</button>
        </div>

        <div className="service-item">
          <img src={corredoraPropiedadesImg} alt="Web Corredora de Propiedades" />
          <h2>Web Corredora de Propiedades</h2>
          <p>Desarrollo de plataformas especializadas para corredoras de propiedades.</p>
          <button className="cta-button" onClick={() => togglePlan('custom')}>Detalle</button>
        </div>
      </div>

      {activePlan === 'basic' && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>X</button>
            <div className="plan-details">
              <div className="plan-card">
                <h5>Landing page 1</h5>
                <p><strong>$120.000 CLP / $146 USD</strong></p>
                <ul>
                  <li>Menú Navegable</li>
                  <li>1 Sección de contenido</li>
                  <li>1 imagen</li>
                  <li>Formulario de contacto</li>
                </ul>
              </div>
              <div className="plan-card">
                <h5>Landing page 2</h5>
                <p><strong>$150.000 CLP / $183 USD</strong></p>
                <ul>
                  <li>Menú Navegable</li>
                  <li>2 Secciones de contenido</li>
                  <li>1 imagen</li>
                  <li>Formulario de contacto</li>
                </ul>
              </div>
              <div className="plan-card">
                <h5>Landing page 3</h5>
                <p><strong>$170.000 CLP / $207 USD</strong></p>
                <ul>
                  <li>Menú Navegable</li>
                  <li>3 Secciones de contenido</li>
                  <li>1 imagen</li>
                  <li>Formulario de contacto</li>
                </ul>
              </div>
              <div className="plan-card">
                <h5>Landing page 4</h5>
                <p><strong>$200.000 CLP / $244 USD</strong></p>
                <ul>
                  <li>Menú Navegable</li>
                  <li>4 Secciones de contenido</li>
                  <li>1 imagen</li>
                  <li>Formulario de contacto</li>
                </ul>
              </div>
              <p><em>*Estos precios no incluyen impuestos de tu país</em></p>

              <div className="service-buttons">
                <a href="#contact" className="cta-button">Contactar</a>
                <a href="https://wa.me/123456789" className="whatsapp-button">
                  <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {activePlan === 'advanced' && (
        <div className="plan-details">
          <h4>Web Empresas y Servicios</h4>
          <p>Detalles completos sobre el desarrollo de sitios web corporativos.</p>
        </div>
      )}
      {activePlan === 'ecommerce' && (
        <div className="plan-details">
          <h4>Web Ecommerce</h4>
          <p>Detalles completos sobre soluciones de comercio electrónico.</p>
        </div>
      )}
      {activePlan === 'custom' && (
        <div className="plan-details">
          <h4>Web Corredora de Propiedades</h4>
          <p>Detalles completos sobre el desarrollo de plataformas para corredoras de propiedades.</p>
        </div>
      )}

      <TechnologiesSection />
      <ContactSection />
    </div>
  );
};

export default Services;
