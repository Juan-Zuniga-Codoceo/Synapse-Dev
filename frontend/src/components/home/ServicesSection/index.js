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
  faStar,
  faRobot,
  faComments
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
        amount: "Desde $99.990 CLP + IVA",
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
      title: "Creación de Bots con IA",
      description: "Desarrollamos asistentes virtuales inteligentes y chatbots a la medida integrados con tu base de datos (RAG) para automatizar soporte y ventas en tu web o WhatsApp.",
      icon: faRobot,
      features: [
        "Integración con tus datos (RAG)",
        "Automatización en Web y WhatsApp",
        "Atención al cliente y ventas 24/7"
      ],
      stats: {
        performance: "100% respuestas rápidas",
        time: "1-2 semanas entrega"
      }
    },
    {
      id: 5,
      title: "Chat con IA para tu Web",
      description: "Integra un asistente conversacional inteligente entrenado con la información de tu negocio directamente en tu sitio web. Responde preguntas, captura leads y aumenta conversiones de forma autónoma.",
      icon: faComments,
      features: [
        "Entrenado con tu contenido y FAQ",
        "Widget listo para cualquier web",
        "Captura de leads automática"
      ],
      stats: {
        performance: "Respuestas en segundos",
        time: "< 1 semana implementación"
      }
    },
    {
      id: 6,
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

  const [activeTab, setActiveTab] = React.useState(0);
  const activeService = services[activeTab];

  return (
    <section className="home-services">
      <div className="home-services__heading">
        <h2 className="home-services__title">Servicios de Desarrollo Web Profesional</h2>
        <p className="home-services__subtitle">
          Soluciones web efectivas para hacer crecer tu negocio en internet
        </p>
      </div>
      
      <div className="home-services__container">
        {/* Left Column: Interactive Active Service Preview */}
        <div className="home-services__preview">
          <div key={activeService.id} className="home-services__preview-card animate-fade-in-up">
            <div className="home-services__preview-icon-wrapper">
              <FontAwesomeIcon icon={activeService.icon} className="home-services__preview-icon" />
            </div>
            <h3 className="home-services__preview-title">{activeService.title}</h3>
            <p className="home-services__preview-description">{activeService.description}</p>
            
            <div className="home-services__preview-features">
              {activeService.features.map((feature, index) => (
                <div key={index} className="home-services__preview-feature">
                  <FontAwesomeIcon icon={faCheck} className="home-services__preview-check" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {activeService.id === 2 && activeService.pricing && (
              <div className="home-services__preview-pricing">
                <div className="price">{activeService.pricing.amount}</div>
                <div className="price-description">{activeService.pricing.description}</div>
              </div>
            )}

            <div className="home-services__preview-stats">
              <div className="home-services__preview-stat">
                <FontAwesomeIcon icon={faStar} className="home-services__preview-stat-icon" />
                <span>{Object.values(activeService.stats)[0]}</span>
              </div>
              <div className="home-services__preview-stat">
                <FontAwesomeIcon icon={faClock} className="home-services__preview-stat-icon" />
                <span>{Object.values(activeService.stats)[1]}</span>
              </div>
            </div>

            <Link 
              to="/services" 
              className="home-services__preview-button"
              aria-label={`Ver más sobre ${activeService.title}`}
            >
              {activeService.id === 2 ? 'Crear Mi Tienda Online' : 'Ver Más Detalles'}
            </Link>
          </div>
        </div>

        {/* Right Column: Tab List */}
        <div className="home-services__tabs">
          {services.map((service, index) => (
            <button
              key={service.id}
              className={`home-services__tab-item ${index === activeTab ? 'active' : ''}`}
              onClick={() => setActiveTab(index)}
              aria-label={`Seleccionar servicio: ${service.title}`}
            >
              <div className="home-services__tab-left">
                <FontAwesomeIcon icon={service.icon} className="home-services__tab-icon" />
                <span className="home-services__tab-title">{service.title}</span>
              </div>
              <span className="home-services__tab-arrow">→</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;