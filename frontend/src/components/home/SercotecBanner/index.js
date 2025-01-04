import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptop, 
  faStore, 
  faBullhorn,
  faCheck,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './styles.css';
import sercotecLogo from '../../../assets/images/logos/logo-sercotec.png';

const SercotecBanner = () => {
  const whatsappNumber = "+56928333538"; // Reemplazar con número real
  const whatsappMessage = "¡Hola! Me interesa implementar mi proyecto web con el Kit Digital de Sercotec";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section className="sercotec-banner">
      <div className="sercotec-banner__container">
        <div className="sercotec-banner__grid">
          <div className="sercotec-banner__logo-section">
            <img 
              src={sercotecLogo} 
              alt="Sercotec Logo" 
              className="sercotec-banner__logo"
            />
            <div className="sercotec-banner__stats">
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Proyectos Completados</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Clientes Satisfechos</span>
              </div>
            </div>
          </div>

          <div className="sercotec-banner__content">
            <h2 className="sercotec-banner__title">
              ¡Obtén tu Sitio Web Profesional SIN COSTO!
              <span className="subtitle">Con el Kit Digital de Sercotec</span>
            </h2>

            <div className="sercotec-banner__amount-card">
              <div className="amount-label">Beneficio disponible hasta</div>
              <div className="amount-value">$1.200.000 CLP</div>
              <div className="amount-note">100% Financiado por Sercotec</div>
            </div>

            <div className="sercotec-banner__benefits">
              <div className="benefit-card">
                <FontAwesomeIcon icon={faLaptop} className="benefit-icon" />
                <h3>Sitio Web Profesional</h3>
                <p>Diseño personalizado, responsivo y optimizado</p>
                <ul className="benefit-features">
                  <li><FontAwesomeIcon icon={faCheck} />Hosting incluido</li>
                  <li><FontAwesomeIcon icon={faCheck} />Diseño a medida</li>
                  <li><FontAwesomeIcon icon={faCheck} />SEO básico</li>
                </ul>
              </div>
              <div className="benefit-card">
                <FontAwesomeIcon icon={faStore} className="benefit-icon" />
                <h3>Tienda Online</h3>
                <p>Vende tus productos en línea 24/7</p>
                <ul className="benefit-features">
                  <li><FontAwesomeIcon icon={faCheck} />Catálogo digital</li>
                  <li><FontAwesomeIcon icon={faCheck} />Pagos online</li>
                  <li><FontAwesomeIcon icon={faCheck} />Panel admin</li>
                </ul>
              </div>
              <div className="benefit-card">
                <FontAwesomeIcon icon={faBullhorn} className="benefit-icon" />
                <h3>Marketing Digital</h3>
                <p>Aumenta tu presencia online</p>
                <ul className="benefit-features">
                  <li><FontAwesomeIcon icon={faCheck} />Redes sociales</li>
                  <li><FontAwesomeIcon icon={faCheck} />Google My Business</li>
                  <li><FontAwesomeIcon icon={faCheck} />Analytics</li>
                </ul>
              </div>
            </div>

            <div className="sercotec-banner__timeline">
              <div className="timeline-item">
                <FontAwesomeIcon icon={faClock} />
                <span>Implementación: 1-3 semanas</span>
              </div>
            </div>

            <div className="sercotec-banner__cta">
              <Link 
                to="/contact" 
                className="cta-button primary"
              >
                ¡Quiero mi sitio web gratis!
              </Link>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="cta-button secondary"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                Consultar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SercotecBanner;