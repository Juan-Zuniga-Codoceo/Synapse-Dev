/*import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, 
  faSearch, 
  faLightbulb,
  faCheck,
  faClock,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      description: "Creación de sitios web modernos, responsivos y personalizados que impulsan tu presencia digital.",
      icon: faLaptopCode,
      features: [
        "Diseño UI/UX personalizado",
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
      id: 3,
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
    <section className="services-section">
      <div className="services-heading">
        <h2>Nuestros Servicios</h2>
        <p className="services-subtitle">
          Soluciones digitales integrales para hacer crecer tu negocio
        </p>
      </div>
      
      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-item-grid">
            <div>
              <div className="service-icon-wrapper">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
              <div className="service-features">
                {service.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <FontAwesomeIcon icon={faCheck} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="service-stats">
                <div>
                  <FontAwesomeIcon icon={faStar} /> {Object.values(service.stats)[0]}
                </div>
                <div>
                  <FontAwesomeIcon icon={faClock} /> {Object.values(service.stats)[1]}
                </div>
              </div>
            </div>

            <Link to="/services" style={{ textDecoration: 'none', width: '100%' }}>
              <button className="cta-button-grid">Ver más</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;*/

/*import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, 
  faSearch, 
  faLightbulb,
  faCheck,
  faClock,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../layout/Animation/index';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      description: "Creación de sitios web modernos, responsivos y personalizados que impulsan tu presencia digital.",
      icon: faLaptopCode,
      features: [
        "Diseño UI/UX personalizado",
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
      id: 3,
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
    <section className="services-section">
      <AnimatedSection animation="fade-up">
        <div className="services-heading">
          <h2>Nuestros Servicios</h2>
          <p className="services-subtitle">
            Soluciones digitales integrales para hacer crecer tu negocio
          </p>
        </div>
      </AnimatedSection>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <AnimatedSection 
            key={service.id} 
            animation="fade-up" 
            delay={index * 200}
          >
            <div className="service-item-grid">
              <div>
                <div className="service-icon-wrapper">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <FontAwesomeIcon icon={faCheck} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="service-stats">
                  <div>
                    <FontAwesomeIcon icon={faStar} /> {Object.values(service.stats)[0]}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} /> {Object.values(service.stats)[1]}
                  </div>
                </div>
              </div>

              <Link to="/services" style={{ textDecoration: 'none', width: '100%' }}>
                <button className="cta-button-grid">Ver más</button>
              </Link>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;*/

import React, { useState, useEffect } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faLaptopCode, 
  faSearch, 
  faLightbulb,
  faCheck,
  faClock,
  faStar
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AnimatedSection from '../../layout/Animation/index';
import ServicesSkeleton from './ ServicesSkeleton';

const ServicesSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const services = [
    {
      id: 1,
      title: "Desarrollo Web",
      description: "Creación de sitios web modernos, responsivos y personalizados que impulsan tu presencia digital.",
      icon: faLaptopCode,
      features: [
        "Diseño UI/UX personalizado",
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
      id: 3,
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

  if (isLoading) {
    return <ServicesSkeleton />;
  }

  return (
    <section className="services-section">
      <AnimatedSection animation="fade-up">
        <div className="services-heading">
          <h2>Nuestros Servicios</h2>
          <p className="services-subtitle">
            Soluciones digitales integrales para hacer crecer tu negocio
          </p>
        </div>
      </AnimatedSection>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <AnimatedSection 
            key={service.id} 
            animation="fade-up" 
            delay={index * 200}
          >
            <div className="service-item-grid">
              <div>
                <div className="service-icon-wrapper">
                  <FontAwesomeIcon icon={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                
                <div className="service-features">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <FontAwesomeIcon icon={faCheck} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="service-stats">
                  <div>
                    <FontAwesomeIcon icon={faStar} /> {Object.values(service.stats)[0]}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faClock} /> {Object.values(service.stats)[1]}
                  </div>
                </div>
              </div>

              <Link to="/services" style={{ textDecoration: 'none', width: '100%' }}>
                <button className="cta-button-grid">Ver más</button>
              </Link>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;