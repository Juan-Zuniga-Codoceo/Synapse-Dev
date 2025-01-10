import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faShoppingBag, 
  faGlobe, 
  faSearch, 
  faLightbulb,
  faCheck,
  faClock,
  faStar 
} from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Desarrollo de Páginas Web",
      description: "Creamos sitios web profesionales y optimizados que convierten visitantes en clientes. Diseño responsivo adaptado a todos los dispositivos.",
      icon: faGlobe,
      features: [
        "Sitios web 100% personalizados",
        "Diseño responsive y moderno",
        "Optimización de velocidad y SEO"
      ],
      stats: {
        projects: "+50 sitios web exitosos",
        time: "2-4 semanas entrega"
      }
    },
    {
      id: 2,
      title: "Tiendas Online Shopify",
      description: "Desarrollamos tu tienda online profesional en Shopify. La solución perfecta para vender tus productos en internet de forma segura y efectiva.",
      icon: faShoppingBag,
      features: [
        "Diseño profesional de E-commerce",
        "Integración de pagos chilenos",
        "Integración con DROPI (Dropshipping)"
      ],
      stats: {
        projects: "+20 tiendas exitosas",
        time: "2-4 semanas entrega"
      },
      pricing: {
        amount: "Desde $100.000 CLP + IVA",
        description: "Tienda online completa lista para vender"
      }
    },
    {
      id: 3,
      title: "Posicionamiento Web SEO",
      description: "Aumentamos tu visibilidad en Google y atraemos más clientes potenciales a tu sitio web mediante estrategias SEO probadas.",
      icon: faSearch,
      features: [
        "Optimización técnica web",
        "Contenido optimizado para Google",
        "Keywords de alto rendimiento"
      ],
      stats: {
        improvement: "+80% más visitas web",
        time: "3-6 meses resultados"
      }
    },
    {
      id: 4,
      title: "Asesoría Web",
      description: "Guiamos tu presencia digital con estrategias efectivas para aumentar ventas y potenciar tu marca en internet.",
      icon: faLightbulb,
      features: [
        "Estrategia de ventas online",
        "Plan de marketing digital",
        "Optimización de conversión"
      ],
      stats: {
        clients: "+30 negocios exitosos",
        satisfaction: "98% clientes satisfechos"
      }
    }
  ];

  return (
    <section className="home-services">
      <div className="home-services__heading">
        <h2 className="home-services__title">Servicios de Desarrollo Web Profesional</h2>
        <p className="home-services__subtitle">
          Soluciones web efectivas para hacer crecer tu negocio en internet
        </p>
      </div>
      
      <div className="home-services__grid">
        {services.map((service) => (
          <div 
            key={service.id} 
            className={`home-services__item ${service.id === 2 ? 'featured' : ''}`}
          >
            <div className="home-services__content">
              <div className="home-services__icon-wrapper">
                <FontAwesomeIcon icon={service.icon} className="home-services__icon" />
              </div>
              <h3 className="home-services__item-title">{service.title}</h3>
              <p className="home-services__description">{service.description}</p>
              
              <div className="home-services__features">
                {service.features.map((feature, index) => (
                  <div key={index} className="home-services__feature">
                    <FontAwesomeIcon icon={faCheck} className="home-services__check-icon" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {service.id === 2 && service.pricing && (
                <div className="pricing-info">
                  <div className="price">{service.pricing.amount}</div>
                  <div className="price-description">{service.pricing.description}</div>
                </div>
              )}

              <div className="home-services__stats">
                <div className="home-services__stat">
                  <FontAwesomeIcon icon={faStar} className="home-services__stat-icon" />
                  <span>{Object.values(service.stats)[0]}</span>
                </div>
                <div className="home-services__stat">
                  <FontAwesomeIcon icon={faClock} className="home-services__stat-icon" />
                  <span>{Object.values(service.stats)[1]}</span>
                </div>
              </div>
            </div>

            <Link 
              to="/services" 
              className="home-services__button"
              aria-label={`Ver más sobre ${service.title}`}
            >
              {service.id === 2 ? 'Crear Mi Tienda Online' : 'Ver Más Detalles'}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;