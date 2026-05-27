// src/pages/Services/index.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  FaCheck, 
  FaArrowRight, 
  FaTimes, 
  FaRobot, 
  FaComments, 
  FaGlobe, 
  FaRocket, 
  FaShoppingCart, 
  FaStore, 
  FaTools 
} from "react-icons/fa";
import Animation from "../../components/layout/Animation";
import TechnologiesSection from "../../components/home/TechnologiesSection";
import ContactSection from "../../components/shared/ContactSection";
import "./styles.css";

const services = [
  {
    id: "web",
    title: "Páginas Web Profesionales",
    icon: FaGlobe,
    description:
      "Creamos páginas web que convierten visitantes en clientes. Diseño profesional optimizado para resultados.",
    features: [
      "Diseño web responsive moderno",
      "Optimización SEO para Google",
      "Panel administrable intuitivo",
      "Integración WhatsApp Business",
    ],
    stats: {
      clients: "+50 sitios web",
      satisfaction: "98% satisfacción",
    },
    price: "Desde $249.990 CLP",
    plans: [
      {
        title: "Plan Básico",
        price: "$249.990 CLP",
        features: [
          "Diseño web personalizado",
          "Responsive design",
          "SEO básico incluido",
          "Formulario de contacto",
        ],
      },
      {
        title: "Plan Pro",
        price: "$349.990 CLP",
        features: [
          "Todo del plan básico",
          "Panel administrable",
          "Blog integrado",
          "Analytics avanzado",
        ],
        recommended: true,
      },
    ],
  },
  {
    id: "landing",
    title: "Landing Page",
    icon: FaRocket,
    description:
      "Diseño y desarrollo de páginas de aterrizaje optimizadas para convertir visitas en clientes potenciales.",
    features: [
      "Diseño orientado a conversión",
      "Llamados a la acción efectivos",
      "Analytics integrado",
      "A/B Testing",
    ],
    stats: {
      clients: "+30 landings",
      satisfaction: "95% satisfacción",
    },
    price: "Desde $70.000 CLP",
    plans: [
      {
        title: "Plan Express (Simple)",
        price: "$70.000 CLP",
        features: [
          "Diseño de una sola sección simple",
          "Información de contacto y redes sociales",
          "Diseño responsive estándar",
          "Ideal para presupuestos acotados",
        ],
      },
      {
        title: "Plan Básico",
        price: "$149.990 CLP",
        features: [
          "Sección principal optimizada para conversión",
          "Formulario de contacto",
          "Diseño responsive premium",
          "Optimización básica",
        ],
      },
      {
        title: "Plan Avanzado",
        price: "$199.990 CLP",
        features: [
          "Múltiples secciones de venta",
          "Formulario personalizado",
          "Analytics avanzado",
          "A/B Testing incluido",
        ],
        recommended: true,
      },
    ],
  },
  {
    id: "shopify",
    title: "Tiendas Shopify",
    icon: FaShoppingCart,
    description:
      "Desarrollo de tiendas online profesionales con Shopify. La solución perfecta para vender en internet.",
    features: [
      "Diseño personalizado",
      "Integración con DROPI (Dropshipping)",
      "Gestión de productos",
      "Medios de pago chilenos",
    ],
    stats: {
      clients: "+20 tiendas",
      satisfaction: "97% satisfacción",
    },
    price: "Desde $99.990 CLP",
    featured: true,
    plans: [
      {
        title: "Plan Básico",
        price: "$99.990 CLP",
        features: [
          "Tema personalizado",
          "Configuración básica",
          "Hasta 20 productos",
          "Integración con DROPI (Dropshipping)",
        ],
      },
      {
        title: "Plan Completo",
        price: "$249.990 CLP",
        features: [
          "Todo del plan básico",
          "Productos ilimitados",
          "Apps premium instaladas",
          "Soporte por 3 meses",
        ],
        recommended: true,
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Personalizado",
    icon: FaStore,
    description:
      "Tiendas online personalizadas y escalables. Soluciones completas para vender más en internet.",
    features: [
      "Carrito de compras avanzado",
      "Gestión de inventario",
      "WebPay Plus integrado",
      "Panel administrativo completo",
    ],
    stats: {
      clients: "+30 tiendas",
      satisfaction: "96% satisfacción",
    },
    price: "Desde $299.990 CLP",
    plans: [
      {
        title: "Plan Estándar",
        price: "$299.990 CLP",
        features: [
          "Catálogo de productos",
          "Carrito de compras",
          "Gestión de pedidos",
          "Panel admin básico",
        ],
      },
      {
        title: "Plan Premium",
        price: "$449.990 CLP",
        features: [
          "Todo del plan estándar",
          "Múltiples medios de pago",
          "Sistema de descuentos",
          "API para integraciones",
        ],
        recommended: true,
      },
    ],
  },
  {
    id: "maintenance",
    title: "Mantención Web",
    icon: FaTools,
    description:
      "Mantén tu sitio web actualizado y seguro. Soporte técnico profesional y respaldo permanente.",
    features: [
      "Actualizaciones de seguridad",
      "Copias de seguridad",
      "Optimización de rendimiento",
      "Soporte técnico prioritario",
    ],
    stats: {
      clients: "+40 sitios",
      satisfaction: "99% satisfacción",
    },
    price: "Desde $39.990 CLP/mes",
    plans: [
      {
        title: "Plan Mensual",
        price: "$39.990 CLP/mes",
        features: [
          "Actualizaciones de seguridad",
          "Backups semanales",
          "Soporte básico",
          "Monitoreo 24/7",
        ],
      },
      {
        title: "Plan Anual",
        price: "$35.000 CLP/mes",
        features: [
          "Todo del plan mensual",
          "Backups diarios",
          "Soporte prioritario",
          "2 horas de desarrollo",
        ],
        recommended: true,
      },
    ],
  },
  {
    id: "bots-ia",
    title: "Bots con IA para Empresas",
    icon: FaRobot,
    description:
      "Desarrollamos asistentes virtuales inteligentes y chatbots a medida integrados con la base de datos de tu empresa (RAG) para automatizar soporte, ventas y procesos internos.",
    features: [
      "Integración con tus datos (RAG)",
      "Automatización en Web y WhatsApp",
      "Atención al cliente y ventas 24/7",
      "Panel de monitoreo de conversaciones",
    ],
    stats: {
      clients: "Proyectos activos",
      satisfaction: "100% uptime",
    },
    price: "Desde $199.990 CLP",
    plans: [
      {
        title: "Plan Starter",
        price: "$199.990 CLP",
        features: [
          "Bot entrenado con tus datos",
          "Widget web integrado",
          "Hasta 500 consultas/mes",
          "Soporte por 1 mes",
        ],
      },
      {
        title: "Plan Empresa",
        price: "$399.990 CLP",
        features: [
          "Todo del plan Starter",
          "Integración WhatsApp Business",
          "Consultas ilimitadas",
          "Soporte prioritario 3 meses",
        ],
        recommended: true,
      },
    ],
  },
  {
    id: "chat-ia",
    title: "Chat con IA para tu Web",
    icon: FaComments,
    description:
      "Integra un asistente conversacional inteligente entrenado con la información de tu negocio directamente en tu sitio web. Responde preguntas, captura leads y aumenta conversiones de forma autónoma.",
    features: [
      "Entrenado con tu contenido y FAQ",
      "Widget listo para cualquier web",
      "Captura de leads automática",
      "Integración con Google Analytics",
    ],
    stats: {
      clients: "Disponible ahora",
      satisfaction: "Respuestas instantáneas",
    },
    price: "Desde $79.990 CLP",
    plans: [
      {
        title: "Plan Básico",
        price: "$79.990 CLP",
        features: [
          "Widget de chat en tu web",
          "Entrenado con tu FAQ",
          "Hasta 300 consultas/mes",
          "Soporte inicial incluido",
        ],
      },
      {
        title: "Plan Pro",
        price: "$149.990 CLP",
        features: [
          "Todo del plan básico",
          "Consultas ilimitadas",
          "Integración con CRM",
          "Dashboard de analíticas",
        ],
        recommended: true,
      },
    ],
  },
];

const ServiceCard = ({ service, onSelect }) => {
  const IconComponent = service.icon || FaGlobe;
  return (
    <div className={`services-page-card ${service.featured ? "featured" : ""} services-page-card--${service.id}`}>
      <div className="services-icon-wrapper">
        <IconComponent className="services-card-icon" />
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>

      <ul className="services-features-list">
        {service.features.map((feature, index) => (
          <li key={index}>
            <FaCheck className="services-feature-icon" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="services-card-stats">
        <span>{service.stats.clients}</span>
        <span>{service.stats.satisfaction}</span>
      </div>

      <p className="services-card-price">{service.price}</p>
      <button className="services-details-button" onClick={() => onSelect(service)}>
        Ver Detalles <FaArrowRight />
      </button>
    </div>
  );
};

const PlanCard = ({ plan, serviceId }) => (
  <div className={`services-plan-card ${plan.recommended ? "recommended" : ""} services-plan-card--${serviceId}`}>
    {plan.recommended && <span className="services-recommended-badge">Recomendado</span>}
    <h3>{plan.title}</h3>
    <p className="services-plan-price">{plan.price}</p>
    <ul className="services-plan-features">
      {plan.features.map((feature, index) => (
        <li key={index}>
          <FaCheck className="services-plan-feature-icon" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const closeModal = () => {
    setSelectedService(null);
    document.body.style.overflow = "unset";
  };

  const openModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = "hidden";
  };

  const handleScrollDown = () => {
    const contentSection = document.querySelector(".services-content");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.title = "Servicios de Desarrollo Web | Synapse Dev";
  }, []);

  return (
    <div className="services-page">
      <header className="services-hero">
        <div className="services-hero-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="services-hero-video-bg"
          >
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="services-hero-overlay"></div>
        <Animation animation="fade-up">
          <div className="services-hero-content">
            <h1>
              <span className="gradient-text-anim">Impulsa tu Negocio Online</span>
              <span>Con Soluciones Profesionales</span>
            </h1>
            <p>
              Creamos sitios web de alto impacto, plataformas a medida y asistentes
              virtuales con Inteligencia Artificial optimizados para convertir visitantes en clientes reales.
            </p>
          </div>
        </Animation>
        <div className="services-hero-scroll-indicator" onClick={handleScrollDown}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrows">
            <span className="arrow-down"></span>
          </div>
        </div>
      </header>

      <div className="services-content-wrapper">
        <div className="services-content">
          {services.map((service) => (
            <Animation key={service.id} animation="fade-up">
              <ServiceCard service={service} onSelect={openModal} />
            </Animation>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="services-modal-overlay" onClick={closeModal}>
          <div className="services-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="services-modal-header">
              <h2>{selectedService.title}</h2>
              <button className="services-close-button" onClick={closeModal}>
                <FaTimes />
              </button>
            </div>

            <div className="services-plans-grid">
              {selectedService.plans.map((plan, index) => (
                <PlanCard key={index} plan={plan} serviceId={selectedService.id} />
              ))}
            </div>

            <p className="services-price-note">*Los precios no incluyen IVA</p>

            <Link to="/contact" className="services-contact-button" onClick={closeModal}>
              Solicitar Cotización
            </Link>
          </div>
        </div>
      )}

      <TechnologiesSection />
      <ContactSection />
    </div>
  );
};

export default Services;
