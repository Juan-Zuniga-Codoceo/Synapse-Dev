import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight, FaRegStar, FaTimes } from 'react-icons/fa';
import Animation from '../../components/layout/Animation';
import TechnologiesSection from '../../components/home/TechnologiesSection';
import ContactSection from '../../components/shared/ContactSection';
import './styles.css'; // Asumiendo que crearemos este archivo

// Importación de imágenes
import landingPageImg from '../../assets/images/services/landing-page.webp';
import empresaServiciosImg from '../../assets/images/services/empresa-servicios.webp';
import ecommerceImg from '../../assets/images/services/ecommerce.webp';
import corredoraPropiedadesImg from '../../assets/images/services/corredora-propiedades.webp';

// Datos y funciones auxiliares
const categories = [
  { id: 'all', name: 'Todos' },
  { id: 'web', name: 'Desarrollo Web' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'business', name: 'Empresas' }
];

const services = [
  {
    id: "landing",
    image: landingPageImg,
    title: "Landing Page",
    category: "web",
    description: "Diseño y desarrollo de páginas de aterrizaje atractivas y optimizadas para conversiones.",
    features: [
      "Diseño responsive",
      "Optimización SEO",
      "Analytics integrado"
    ],
    stats: {
      clients: "+30 landing pages",
      satisfaction: "95% satisfacción"
    },
    planType: "basic"
  },
  {
    id: "business",
    image: empresaServiciosImg,
    title: "Web Empresas y Servicios",
    category: "business",
    description: "Desarrollo de sitios web corporativos que representen la identidad de tu empresa.",
    features: [
      "Diseño corporativo",
      "CMS personalizado",
      "Integración con CRM"
    ],
    stats: {
      clients: "+50 empresas",
      satisfaction: "98% satisfacción"
    },
    planType: "advanced"
  },
  {
    id: "ecommerce",
    image: ecommerceImg,
    title: "Web Ecommerce",
    category: "ecommerce",
    description: "Soluciones de comercio electrónico para llevar tu tienda en línea al siguiente nivel.",
    features: [
      "Carrito de compras",
      "Gestión de inventario",
      "Pasarela de pagos"
    ],
    stats: {
      clients: "+20 tiendas",
      satisfaction: "97% satisfacción"
    },
    planType: "ecommerce"
  },
  {
    id: "real-estate",
    image: corredoraPropiedadesImg,
    title: "Web Corredora de Propiedades",
    category: "business",
    description: "Desarrollo de plataformas especializadas para corredoras de propiedades.",
    features: [
      "Listado de propiedades",
      "Búsqueda avanzada",
      "Gestión de leads"
    ],
    stats: {
      clients: "+15 corredoras",
      satisfaction: "96% satisfacción"
    },
    planType: "custom"
  }
];

const getPlanTitle = (planType) => {
  const titles = {
    basic: 'Planes para Landing Page',
    advanced: 'Planes para Web Empresas y Servicios',
    ecommerce: 'Planes para Web Ecommerce',
    custom: 'Planes para Corredoras de Propiedades'
  };
  return titles[planType] || 'Planes';
};

const getPlansForType = (planType) => {
  const plans = {
    basic: [
      {
        title: "Landing page 1",
        price: "$120.000 CLP / $146 USD",
        features: [
          "Menú Navegable",
          "1 Sección de contenido",
          "1 imagen",
          "Formulario de contacto"
        ]
      },
      {
        title: "Landing page 2",
        price: "$150.000 CLP / $183 USD",
        features: [
          "Menú Navegable",
          "2 Secciones de contenido",
          "1 imagen",
          "Formulario de contacto"
        ],
        recommended: true
      },
      {
        title: "Landing page 3",
        price: "$170.000 CLP / $207 USD",
        features: [
          "Menú Navegable",
          "3 Secciones de contenido",
          "1 imagen",
          "Formulario de contacto"
        ]
      }
    ],
    advanced: [
      {
        title: "Plan Básico",
        price: "$250.000 CLP / $305 USD",
        features: [
          "Inicio - Nosotros - Servicios - Detalle de servicios - Blog - Contacto",
          "Galería de fotos de servicios",
          "Buscador de servicios",
          "Registro e inicio de sesión de clientes"
        ]
      },
      {
        title: "Plan Avanzado",
        price: "$270.000 CLP / $329 USD",
        features: [
          "Inicio - Nosotros - Servicios - Detalle de servicios - Blog - Contacto",
          "Galería de fotos de servicios",
          "Buscador de servicios",
          "Registro e inicio de sesión de clientes",
          "Sistema reserva de horas"
        ],
        recommended: true
      },
      {
        title: "Plan Experto",
        price: "$280.000 CLP / $341 USD",
        features: [
          "Inicio - Nosotros - Servicios - Detalle de servicios - Blog - Contacto",
          "Galería de fotos de servicios",
          "Buscador de servicios",
          "Registro e inicio de sesión de clientes",
          "Sistema reserva de horas",
          "Pago de abono para reserva"
        ]
      }
    ],
    ecommerce: [
      {
        title: "Plan Básico",
        price: "$250.000 CLP / $270.000 (productos con tallas)",
        features: [
          "Inicio - Nosotros - Productos - Detalle de productos - Blog - Contacto",
          "Categorías y subcategorías de productos",
          "Galería de fotos de productos",
          "Buscador de productos",
          "Registro e inicio de sesión de clientes",
          "Carro de compras",
          "Control de stock"
        ]
      },
      {
        title: "Plan Avanzado",
        price: "$280.000 CLP / $300.000 (productos con tallas)",
        features: [
          "Todo lo del plan básico",
          "Sistema de cupones de descuento",
          "Opción de habilitar ventas mayoristas",
          "Múltiples métodos de pago",
          "Gastos de envío administrables"
        ],
        recommended: true
      },
      {
        title: "Plan Experto",
        price: "$300.000 CLP / $320.000 (productos con tallas)",
        features: [
          "Todo lo del plan avanzado",
          "Sincronización con Mercadolibre",
          "Cotizador Chilexpress para delivery",
          "API para integraciones personalizadas",
          "Soporte premium"
        ]
      }
    ],
    custom: [
      {
        title: "Plan Único",
        price: "$250.000 CLP / $305 USD",
        features: [
          "Sección inicio con Slideshow",
          "Sección Quienes somos",
          "Sección de propiedades (ventas y arriendo)",
          "Detalle de propiedad con galería",
          "Formulario para registro de propiedades",
          "Blog integrado",
          "Panel de administración"
        ]
      }
    ]
  };
  return plans[planType] || [];
};

// Componentes
const ServiceCard = ({ image, title, description, onClick, features, stats }) => (
  <Animation animation="fade-up">
    <div className="service-card">
      <div className="service-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="service-content">
        <h2>{title}</h2>
        <p>{description}</p>
        
        {features && (
          <div className="features">
            {features.map((feature, index) => (
              <div key={index} className="feature-item">
                <FaCheck className="feature-icon" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
        
        {stats && (
          <div className="stats">
            <div className="stat">
              <FaRegStar className="stat-icon" />
              <span>{stats.clients}</span>
            </div>
            <span>{stats.satisfaction}</span>
          </div>
        )}
        
        <button onClick={onClick} className="cta-button">
          Ver Detalles
          <FaArrowRight />
        </button>
      </div>
    </div>
  </Animation>
);

const PlanCard = ({ title, price, features, recommended }) => (
  <div className={`plan-card ${recommended ? 'recommended' : ''}`}>
    {recommended && (
      <span className="recommended-badge">
        Recomendado
      </span>
    )}
    
    <h3>{title}</h3>
    <p className="price">{price}</p>
    
    <ul className="features-list">
      {features.map((feature, index) => (
        <li key={index}>
          <FaCheck className="feature-icon" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const [activePlan, setActivePlan] = useState(null);
  const [filterCategory, setFilterCategory] = useState('all');

  useEffect(() => {
    document.title = "Servicios | Synapse Dev";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Soluciones digitales integrales para tu negocio. Desarrollo web, ecommerce y más."
      );
    }
  }, []);

  const togglePlan = (plan) => {
    setActivePlan(plan);
    document.body.style.overflow = plan ? 'hidden' : 'unset';
  };

  const filteredServices = filterCategory === 'all' 
    ? services 
    : services.filter(service => service.category === filterCategory);

  return (
    <div className="services-page">
      {/* Breadcrumbs */}
      <nav className="breadcrumbs">
        <div className="container">
          <ol>
            <li><Link to="/">Inicio</Link></li>
            <li>/</li>
            <li>Servicios</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <Animation animation="fade-up">
        <header className="services-header">
          <div className="header-content">
            <h1>Desarrollo Web a Medida</h1>
            <p>
              Nos especializamos en crear soluciones digitales adaptadas a las 
              necesidades de tu negocio.
            </p>
          </div>
        </header>
      </Animation>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          {/* Category Filter */}
          <div className="category-filter">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setFilterCategory(category.id)}
                className={filterCategory === category.id ? 'active' : ''}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="services-grid">
            {filteredServices.map((service) => (
              <ServiceCard
                key={service.id}
                {...service}
                onClick={() => togglePlan(service.planType)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Plan Modal */}
      {activePlan && (
        <div className="modal-overlay" onClick={() => togglePlan(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{getPlanTitle(activePlan)}</h2>
              <button 
                onClick={() => togglePlan(null)}
                className="close-button"
              >
                <FaTimes />
              </button>
            </div>

            <div className="plans-grid">
              {getPlansForType(activePlan).map((plan, index) => (
                <PlanCard key={index} {...plan} />
              ))}
            </div>

            <p className="price-note">
              *Estos precios no incluyen impuestos de tu país
            </p>

            <div className="modal-footer">
              <Link to="/contact" className="cta-button">
                Contactar
              </Link>
            </div>
          </div>
        </div>
      )}

      <TechnologiesSection />
      <ContactSection />
    </div>
  );
};

export default Services;