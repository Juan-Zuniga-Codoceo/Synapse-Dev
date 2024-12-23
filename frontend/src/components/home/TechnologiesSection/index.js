/*import React from 'react';
import './styles.css';

// Importación de los iconos optimizados
import jsIcon from '../../../assets/icons/technologies/js-icon.png';
import reactIcon from '../../../assets/icons/technologies/react-icon.png';
import vueIcon from '../../../assets/icons/technologies/vue-icon.png';
import htmlIcon from '../../../assets/icons/technologies/html-icon.png';
import cssIcon from '../../../assets/icons/technologies/css-icon.png';
import wordpressIcon from '../../../assets/icons/technologies/wordpress-icon.png';
import shopifyIcon from '../../../assets/icons/technologies/shopify-icon.png';
import mongodbIcon from '../../../assets/icons/technologies/mongodb.svg';
import nodeIcon from '../../../assets/icons/technologies/node.svg';
import expressIcon from '../../../assets/icons/technologies/Express.svg';
import tailwindIcon from '../../../assets/icons/technologies/tailwind.svg';
import postgresIcon from '../../../assets/icons/technologies/postgress.png';

const TechnologiesSection = () => {
  const technologies = [
    // Primera fila
    {
      id: 1,
      name: 'JavaScript',
      category: 'FRONTEND',
      icon: jsIcon
    },
    {
      id: 2,
      name: 'React',
      category: 'FRONTEND',
      icon: reactIcon
    },
    {
      id: 3,
      name: 'Vue.js',
      category: 'FRONTEND',
      icon: vueIcon
    },
    {
      id: 4,
      name: 'Node.js',
      category: 'BACKEND',
      icon: nodeIcon
    },
    {
      id: 5,
      name: 'HTML5',
      category: 'FRONTEND',
      icon: htmlIcon
    },
    {
      id: 6,
      name: 'CSS3',
      category: 'FRONTEND',
      icon: cssIcon
    },
    // Segunda fila
    {
      id: 7,
      name: 'Tailwind',
      category: 'FRONTEND',
      icon: tailwindIcon
    },
    {
      id: 8,
      name: 'Express',
      category: 'BACKEND',
      icon: expressIcon
    },
    {
      id: 9,
      name: 'WordPress',
      category: 'CMS',
      icon: wordpressIcon
    },
    {
      id: 10,
      name: 'Shopify',
      category: 'E-COMMERCE',
      icon: shopifyIcon
    },
    {
      id: 11,
      name: 'MongoDB',
      category: 'DATABASE',
      icon: mongodbIcon
    },
    {
      id: 12,
      name: 'PostgreSQL',
      category: 'DATABASE',
      icon: postgresIcon
    }
  ];

  return (
    <section className="technologies-section">
      <div className="technologies-heading">
        <h2>Tecnologías Utilizadas</h2>
        <p className="technologies-subtitle">
          Trabajamos con las últimas tecnologías para crear soluciones modernas y escalables
        </p>
      </div>

      <div className="tech-grid">
        {technologies.map((tech) => (
          <div key={tech.id} className="tech-item">
            <img 
              src={tech.icon} 
              alt={`${tech.name} icon`} 
              className="tech-icon"
              loading="lazy"
            />
            <span className="tech-name">{tech.name}</span>
            <span className="tech-category">{tech.category}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;*/

/*
import React from 'react';
import './styles.css';
import AnimatedSection from '../../layout/Animation/index';

// Importación de los iconos
import jsIcon from '../../../assets/icons/technologies/js-icon.png';
import reactIcon from '../../../assets/icons/technologies/react-icon.png';
import vueIcon from '../../../assets/icons/technologies/vue-icon.png';
import htmlIcon from '../../../assets/icons/technologies/html-icon.png';
import cssIcon from '../../../assets/icons/technologies/css-icon.png';
import wordpressIcon from '../../../assets/icons/technologies/wordpress-icon.png';
import shopifyIcon from '../../../assets/icons/technologies/shopify-icon.png';
import mongodbIcon from '../../../assets/icons/technologies/mongodb.svg';
import nodeIcon from '../../../assets/icons/technologies/node.svg';
import expressIcon from '../../../assets/icons/technologies/Express.svg';
import tailwindIcon from '../../../assets/icons/technologies/tailwind.svg';
import postgresIcon from '../../../assets/icons/technologies/postgres-icon.png';

const TechnologiesSection = () => {
  const technologies = [
    // Primera fila - Core Frontend Frameworks
    {
      id: 1,
      name: 'JavaScript',
      category: 'Frontend',
      icon: jsIcon,
      description: 'Desarrollo dinámico e interactivo'
    },
    {
      id: 2,
      name: 'React',
      category: 'FRONTEND',
      icon: reactIcon
    },
    {
      id: 3,
      name: 'Vue.js',
      category: 'FRONTEND',
      icon: vueIcon
    },
    {
      id: 4,
      name: 'Node.js',
      category: 'BACKEND',
      icon: nodeIcon
    },
    {
      id: 5,
      name: 'HTML5',
      category: 'FRONTEND',
      icon: htmlIcon
    },
    {
      id: 6,
      name: 'CSS3',
      category: 'FRONTEND',
      icon: cssIcon
    },
    // Segunda fila
    {
      id: 7,
      name: 'Tailwind',
      category: 'FRONTEND',
      icon: tailwindIcon
    },
    {
      id: 8,
      name: 'Express',
      category: 'BACKEND',
      icon: expressIcon
    },
    {
      id: 9,
      name: 'WordPress',
      category: 'CMS',
      icon: wordpressIcon
    },
    {
      id: 10,
      name: 'Shopify',
      category: 'E-COMMERCE',
      icon: shopifyIcon
    },
    {
      id: 11,
      name: 'MongoDB',
      category: 'DATABASE',
      icon: mongodbIcon
    },
    {
      id: 12,
      name: 'PostgreSQL',
      category: 'DATABASE',
      icon: postgresIcon
    }
  ];

  const getStaggeredDelay = (index) => {
    const row = Math.floor(index / 6);
    const col = index % 6;
    return (row * 100) + (col * 50);
  };

  return (
    <section className="technologies-section">
      <AnimatedSection animation="fade-up">
        <div className="technologies-heading">
          <h2>Tecnologías Utilizadas</h2>
          <p className="technologies-subtitle">
            Trabajamos con las últimas tecnologías para crear soluciones modernas y escalables
          </p>
        </div>
      </AnimatedSection>

      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <AnimatedSection
            key={tech.id}
            animation="scale-up"
            delay={getStaggeredDelay(index)}
            threshold={0.1}
          >
            <div className="tech-item">
              <img 
                src={tech.icon} 
                alt={`${tech.name} icon`} 
                className="tech-icon"
              />
              <span className="tech-name">{tech.name}</span>
              <span className="tech-category">{tech.category}</span>
              <span className="tech-description">{tech.description}</span>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;*/

import React, { useState, useEffect } from "react";
import "./styles.css";
import AnimatedSection from "../../layout/Animation/index";
import TechnologiesSkeleton from "./TechnologiesSkeleton";
import LazyImage from "../../shared/LazyImage";

// Importación de los iconos
import jsIcon from "../../../assets/icons/technologies/js-icon.png";
import reactIcon from "../../../assets/icons/technologies/react-icon.png";
import vueIcon from "../../../assets/icons/technologies/vue-icon.png";
import htmlIcon from "../../../assets/icons/technologies/html-icon.png";
import cssIcon from "../../../assets/icons/technologies/css-icon.png";
import wordpressIcon from "../../../assets/icons/technologies/wordpress-icon.png";
import shopifyIcon from "../../../assets/icons/technologies/shopify-icon.png";
import mongodbIcon from "../../../assets/icons/technologies/mongodb.svg";
import nodeIcon from "../../../assets/icons/technologies/node.svg";
import expressIcon from "../../../assets/icons/technologies/Express.svg";
import tailwindIcon from "../../../assets/icons/technologies/tailwind.svg";
import postgresIcon from "../../../assets/icons/technologies/postgres-icon.png";

const TechnologiesSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const technologies = [
    {
      id: 1,
      name: "JavaScript",
      category: "FRONTEND",
      icon: jsIcon,
      description: "Desarrollo dinámico e interactivo",
    },
    {
      id: 2,
      name: "React",
      category: "FRONTEND",
      icon: reactIcon,
      description: "Aplicaciones web modernas",
    },
    {
      id: 3,
      name: "Vue.js",
      category: "FRONTEND",
      icon: vueIcon,
      description: "Interfaces dinámicas",
    },
    {
      id: 4,
      name: "Node.js",
      category: "BACKEND",
      icon: nodeIcon,
      description: "Servidor y APIs",
    },
    {
      id: 5,
      name: "HTML5",
      category: "FRONTEND",
      icon: htmlIcon,
      description: "Estructura y contenido",
    },
    {
      id: 6,
      name: "CSS3",
      category: "FRONTEND",
      icon: cssIcon,
      description: "Estilos y diseño",
    },
    {
      id: 7,
      name: "Tailwind",
      category: "FRONTEND",
      icon: tailwindIcon,
      description: "Framework CSS moderno",
    },
    {
      id: 8,
      name: "Express",
      category: "BACKEND",
      icon: expressIcon,
      description: "Framework de Node.js",
    },
    {
      id: 9,
      name: "WordPress",
      category: "CMS",
      icon: wordpressIcon,
      description: "Gestión de contenidos",
    },
    {
      id: 10,
      name: "Shopify",
      category: "E-COMMERCE",
      icon: shopifyIcon,
      description: "Tiendas online",
    },
    {
      id: 11,
      name: "MongoDB",
      category: "DATABASE",
      icon: mongodbIcon,
      description: "Base de datos NoSQL",
    },
    {
      id: 12,
      name: "PostgreSQL",
      category: "DATABASE",
      icon: postgresIcon,
      description: "Base de datos SQL",
    },
  ];

  const getStaggeredDelay = (index) => {
    const row = Math.floor(index / 6);
    const col = index % 6;
    return row * 100 + col * 50;
  };

  if (isLoading) {
    return <TechnologiesSkeleton />;
  }

  return (
    <section className="technologies-section">
      <AnimatedSection animation="fade-up">
        <div className="technologies-heading">
          <h2>Tecnologías Utilizadas</h2>
          <p className="technologies-subtitle">
            Trabajamos con las últimas tecnologías para crear soluciones
            modernas y escalables
          </p>
        </div>
      </AnimatedSection>

      <div className="tech-grid">
        {technologies.map((tech, index) => (
          <AnimatedSection
            key={tech.id}
            animation="scale-up"
            delay={getStaggeredDelay(index)}
            threshold={0.1}
          >
            <div className="tech-item">
              <div className="tech-icon-wrapper">
                <LazyImage
                  src={tech.icon}
                  alt={`${tech.name} icon`}
                  placeholderColor="rgba(16, 37, 50, 0.95)"
                />
              </div>
              <h3 className="tech-name">{tech.name}</h3>
              <span className="tech-category">{tech.category}</span>
              {tech.description && (
                <p className="tech-description">{tech.description}</p>
              )}
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
