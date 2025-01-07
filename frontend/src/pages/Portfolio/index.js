import React from "react";
import './styles/Portfolio.css';
import TechnologiesSection from '../../components/home/TechnologiesSection';
import ContactSection from '../../components/shared/ContactSection';

// Importación de imágenes
import heroImage from '../../assets/images/heroes/portafolio.webp';
import project1 from '../../assets/images/projects/project1.webp';
import project2 from '../../assets/images/projects/project2.webp';
import project3 from '../../assets/images/projects/project3.webp';
import project4 from '../../assets/images/projects/abogado.webp';
import project5 from '../../assets/images/projects/proyecto5.webp';
import semillaNegra from '../../assets/images/projects/misemillanegra.netlify.app_.png';
import matronaNaty from '../../assets/images/projects/matronanaty.png';

const Portfolio = () => {
  const projects = [
    {
      img: semillaNegra,
      title: "Mi Semilla Negra - Salsas Orientales",
      link: "https://misemillanegra.netlify.app/",
      description: "Una tienda online especializada en salsas y productos orientales, con un diseño moderno y una experiencia de compra optimizada. El sitio integra un sistema de comercio electrónico completo con gestión de inventario y pagos seguros."
    },
    {
      img: matronaNaty,
      title: "Matrona Naty - Cuidado especializado de la mujer",
      link: "https://www.matronanaty.cl/",
      description: "Plataforma profesional para servicios de maternidad y cuidado femenino. Destaca por su diseño acogedor y funcionalidades específicas para la gestión de citas y recursos educativos."
    },
    {
      img: project5,
      title: "Spend Shield - Gestor de finanzas personales",
      link: "https://spendshield.netlify.app/",
      description: "Aplicación web para la gestión de finanzas personales con interfaz intuitiva y herramientas avanzadas de seguimiento de gastos, presupuestos y análisis financiero."
    },
    {
      img: project4,
      title: "Abogado Andrés González",
      link: "https://abogadoandresgonzalez.rf.gd/",
      description: "Landing page elegante y profesional que destaca la experiencia y servicios legales. Diseño limpio y contenido estratégicamente organizado para maximizar las conversiones."
    },
    {
      img: project3,
      title: "Synapse Dev - Pizzería",
      link: "https://synapsedev-pizzeria.netlify.app/",
      description: "Sitio web para restaurante con sistema de pedidos online, diseño atractivo y experiencia de usuario optimizada. Incluye menú interactivo y gestión eficiente de pedidos."
    },
    {
      img: project2,
      title: "Synapse Dev - Abogados",
      link: "https://synapsedev-abogados.netlify.app/",
      description: "Plataforma profesional para bufete de abogados con diseño elegante y funcionalidades específicas para el sector legal. Facilita la conexión entre clientes y servicios legales."
    }
  ];

  return (
    <div>
      <header 
        className="portfolio-header-renamed"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(16, 37, 50, 0.95),
            rgba(16, 37, 50, 0.85)
          ), url(${heroImage})`
        }}
      >
        <div className="portfolio-hero-renamed">
          <h1>Portafolio</h1>
          <p>
            Explora nuestros proyectos recientes y descubre cómo hemos ayudado a
            nuestros clientes a alcanzar sus metas.
          </p>
        </div>
      </header>

      <div className="portfolio-page-renamed">
        <section className="portfolio-intro-renamed">
          <h1>¡Bienvenido/a a nuestro portafolio!</h1>
          <p>
            En nuestro portafolio, puedes descubrir una selección de nuestros
            proyectos más destacados en diseño web y gráfico. Hemos trabajado en
            una variedad de áreas, desde sitios web de comercio electrónico
            hasta proyectos corporativos. Cada diseño representa un desafío
            único y una oportunidad para crecer y mejorar. ¡Esperamos que
            disfrutes explorando nuestro trabajo tanto como nosotros disfrutamos
            creándolo!
          </p>
        </section>

        <div className="projects-grid-renamed">
          {projects.map((project, index) => (
            <div key={index} className="project-item-renamed">
              <div className="link-overlay-renamed">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ir a la web
                </a>
              </div>
              <img src={project.img} alt={project.title} loading="lazy" />
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <TechnologiesSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;