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
      title: "Desarrollo Web",
      description: "Creación de sitios web modernos, responsivos y personalizados que impulsan tu presencia digital.",
      icon: faGlobe,
      features: [
        "Diseño UX/UI personalizado",
        "Desarrollo Frontend y Backend",
        "Optimización de rendimiento"
      ],
      stats: {
        projects: "+50 proyectos entregados",
        time: "4-8 semanas promedio"
      }
    },
    {
      id: 2,
      title: "Tiendas Shopify",
      description: "Desarrollo y mantenimiento de tiendas online profesionales en Shopify, perfectas para emprendedores y pequeños negocios.",
      icon: faShoppingBag,
      features: [
        "Configuración completa",
        "Personalización de temas",
        "Integración de pagos y envíos"
      ],
      stats: {
        projects: "+20 tiendas creadas",
        time: "2-4 semanas promedio"
      },
      pricing: {
        amount: "Desde $80.000  CLP + IVA",
        description: "Plan básico todo incluido"
      }
    },
    {
      id: 3,
      title: "Optimización SEO",
      description: "Mejoramos la visibilidad de tu sitio web en los motores de búsqueda para atraer más tráfico cualificado.",
      icon: faSearch,
      features: [
        "Análisis técnico completo",
        "Optimización de contenido",
        "Estrategia de keywords"
      ],
      stats: {
        improvement: "+80% mejora en rankings",
        time: "3-6 meses seguimiento"
      }
    },
    {
      id: 4,
      title: "Consultoría",
      description: "Asesoría experta para potenciar tu negocio en línea con estrategias probadas y personalizadas.",
      icon: faLightbulb,
      features: [
        "Análisis de mercado",
        "Estrategia digital",
        "Plan de crecimiento"
      ],
      stats: {
        clients: "+30 negocios asesorados",
        satisfaction: "98% satisfacción"
      }
    }
  ];

  return (
    <section className="home-services">
      <div className="home-services__heading">
        <h2 className="home-services__title">Nuestros Servicios</h2>
        <p className="home-services__subtitle">
          Soluciones digitales integrales para hacer crecer tu negocio
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
              {service.id === 2 ? 'Comenzar ahora' : 'Ver más'}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;