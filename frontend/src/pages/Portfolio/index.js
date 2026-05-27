// src/pages/Portfolio/index.js
import React, { useState, useEffect } from "react";
import Animation from "../../components/layout/Animation";
import TechnologiesSection from "../../components/home/TechnologiesSection";
import ContactSection from "../../components/shared/ContactSection";
import "./styles/Portfolio.css";

// Importación de imágenes
import heroImage from "../../assets/images/heroes/portafolio.webp";

import project2 from "../../assets/images/projects/project2.webp";
import project3 from "../../assets/images/projects/project3.webp";
import project4 from "../../assets/images/projects/abogado.webp";
import project5 from "../../assets/images/projects/proyecto5.webp";
import semillaNegra from "../../assets/images/projects/misemillanegra.netlify.app_.png";
import matronaNaty from "../../assets/images/projects/matronanaty.png";
import elrincondetodo from "../../assets/images/projects/elrincondetodo.webp";
import operiaImg from "../../assets/images/operia/operia-kanban.png";
import patitasImg from "../../assets/images/projects/mispatitasfelices.webp";
import catoImg from "../../assets/images/projects/cato.webp";
import scholarFlowDashboard from "../../assets/images/projects/scholar-flow-dashboard.png";
import scholarFlowHorarios from "../../assets/images/projects/scholar-flow-horarios.png";

const projects = [
  {
    id: "scholar-flow",
    img: scholarFlowDashboard,
    imgExtra: scholarFlowHorarios,
    title: "Scholar-flow - Sistema Académico con IA",
    link: "https://scholarflow.operia.cl/",
    category: "saas",
    tags: ["React", "Node.js", "IA Gemini", "PostgreSQL"],
    description:
      "Plataforma SaaS para la gestión académica de colegios, con planificación automática de horarios y procesamiento de licencias médicas usando Inteligencia Artificial (Gemini).",
  },
  {
    id: "operia",
    img: operiaImg,
    title: "Operia - Gestión de Tareas para Equipos",
    link: "https://operia.cl/",
    category: "saas",
    tags: ["React", "Node.js", "IA Gemini", "SaaS"],
    description:
      "Plataforma SaaS de gestión operativa para equipos, con ingesta inteligente de tareas potenciada por IA.",
  },
  {
    id: "cato",
    img: catoImg,
    title: "CATO App - Sistema Táctico",
    link: "https://synapsedev.cl/cato",
    category: "saas",
    tags: ["React Native", "Android", "Logística"],
    description:
      "Sistema especializado para la gestión táctica, logística y entrenamiento para operaciones de seguridad.",
  },
  {
    id: "patitas",
    img: patitasImg,
    title: "Mis Patitas Felices - E-commerce",
    link: "https://mispatitasfelices.cl/",
    category: "ecommerce",
    tags: ["WooCommerce", "WordPress", "WebPay", "Inventario"],
    description:
      "Plataforma de comercio electrónico avanzada con sistema logístico y gestión de inventario complejo.",
  },
  {
    id: "elrincondetodo",
    img: elrincondetodo,
    title: "El Rincón de Todo - Tienda Dropshipping",
    link: "https://elrincondetodo.cl/",
    category: "ecommerce",
    tags: ["Shopify", "Dropi (Dropshipping)", "E-commerce"],
    description:
      "Plataforma de comercio electrónico desarrollada con Shopify e integración de Dropi para dropshipping. Incluye sistema de gestión de inventario automatizado, pasarela de pagos segura y optimización para conversiones.",
  },
  {
    id: "semilla-negra",
    img: semillaNegra,
    title: "Mi Semilla Negra - Salsas Orientales",
    link: "https://misemillanegra.cl/",
    category: "ecommerce",
    tags: ["React", "E-commerce", "Node.js", "MySQL"],
    description:
      "Una tienda online especializada en salsas y productos orientales, con un diseño moderno y una experiencia de compra optimizada. El sitio integra un sistema de comercio electrónico completo con gestión de inventario y pagos seguros.",
  },
  {
    id: "matrona-naty",
    img: matronaNaty,
    title: "Matrona Naty - Cuidado especializado de la mujer",
    link: "https://www.matronanaty.cl/",
    category: "corporate",
    tags: ["React", "Sitio Web", "Agendamiento"],
    description:
      "Plataforma profesional para servicios de maternidad y cuidado femenino. Destaca por su diseño acogedor y funcionalidades específicas para la gestión de citas y recursos educativos.",
  },
  {
    id: "spend-shield",
    img: project5,
    title: "Spend Shield - Gestor de finanzas personales",
    link: "https://spendshield.netlify.app/",
    category: "corporate",
    tags: ["React", "Dashboard", "Finanzas"],
    description:
      "Aplicación web para la gestión de finanzas personales con interfaz intuitiva y herramientas avanzadas de seguimiento de gastos, presupuestos y análisis financiero.",
  },
  {
    id: "abogado-gonzalez",
    img: project4,
    title: "Abogado Andrés González",
    link: "https://abogadoandresgonzalez.rf.gd/",
    category: "corporate",
    tags: ["HTML/CSS", "Landing Page", "SEO"],
    description:
      "Landing page elegante y profesional que destaca la experiencia y servicios legales. Diseño limpio y contenido estratégicamente organizado para maximizar las conversiones.",
  },
  {
    id: "pizzeria",
    img: project3,
    title: "Synapse Dev - Pizzería",
    link: "https://synapsedev-pizzeria.netlify.app/",
    category: "corporate",
    tags: ["React", "Pedidos Online", "Efecto Parallax"],
    description:
      "Sitio web para restaurante con sistema de pedidos online, diseño atractivo y experiencia de usuario optimizada. Incluye menú interactivo y gestión eficiente de pedidos.",
  },
  {
    id: "abogados-bufete",
    img: project2,
    title: "Synapse Dev - Abogados",
    link: "https://synapsedev-abogados.netlify.app/",
    category: "corporate",
    tags: ["React", "Sitio Corporativo", "Legal"],
    description:
      "Plataforma profesional para bufete de abogados con diseño elegante y funcionalidades específicas para el sector legal. Facilita la conexión entre clientes y servicios legales.",
  },
];

const filters = [
  { id: "all", label: "Todos" },
  { id: "saas", label: "Plataformas SaaS & IA" },
  { id: "ecommerce", label: "E-commerce & Tiendas" },
  { id: "corporate", label: "Sitios Web & Landings" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects = activeFilter === "all"
    ? projects
    : projects.filter(p => p.category === activeFilter);

  const handleScrollDown = () => {
    const introSection = document.querySelector(".portfolio-page-renamed");
    if (introSection) {
      introSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    document.title = "Portafolio de Proyectos | Synapse Dev";
  }, []);

  return (
    <div className="portfolio-wrapper">
      <header className="portfolio-header-renamed">
        <div className="portfolio-hero-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="portfolio-hero-video-bg"
          >
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="portfolio-hero-overlay"></div>
        <div className="portfolio-hero-content-wrapper-relative">
          <Animation animation="fade-up">
            <div className="portfolio-hero-renamed">
              <h1>
                <span className="gradient-text-anim">Nuestros Proyectos</span>
                <span>Innovación y Resultados Reales</span>
              </h1>
              <p>
                Explora el trabajo que hemos desarrollado para marcas líderes, startups 
                y empresas en crecimiento. Soluciones de software hechas a medida.
              </p>
            </div>
          </Animation>
        </div>
        <div className="portfolio-hero-scroll-indicator" onClick={handleScrollDown}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrows">
            <span className="arrow-down"></span>
          </div>
        </div>
      </header>

      <div className="portfolio-page-renamed">
        <section className="portfolio-intro-renamed">
          <Animation animation="fade-up">
            <h1>¡Bienvenido a nuestro portafolio!</h1>
            <p>
              Aquí puedes descubrir una selección de nuestros proyectos más destacados
              en diseño web, desarrollo de software e inteligencia artificial. Cada 
              solución representa un desafío único y una oportunidad para crear valor 
              a través del código y la creatividad.
            </p>
          </Animation>
        </section>

        {/* Filter buttons navigation */}
        <div className="portfolio-filters">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-button ${activeFilter === filter.id ? "active" : ""}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid-renamed">
          {filteredProjects.map((project, index) => (
            <Animation key={project.id} animation="fade-up">
              <div className={`project-item-renamed ${project.imgExtra ? "project-featured" : ""} project-item-renamed--${project.id}`}>
                <div className="link-overlay-renamed">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ir a la web
                  </a>
                </div>
                {project.imgExtra ? (
                  <div className="project-gallery">
                    <img src={project.img} alt={`${project.title} - Dashboard`} loading="lazy" className="gallery-main" />
                    <img src={project.imgExtra} alt={`${project.title} - Horarios`} loading="lazy" className="gallery-secondary" />
                  </div>
                ) : (
                  <img src={project.img} alt={project.title} loading="lazy" />
                )}
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                {/* Tech Badges List */}
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Animation>
          ))}
        </div>
      </div>

      <TechnologiesSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;