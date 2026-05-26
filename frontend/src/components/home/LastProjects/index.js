import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Animation from '../../layout/Animation/index';
import LazyImage from '../../shared/LazyImage/index';

// Importación de imágenes
import operiaImg from '../../../assets/images/projects/operia.webp';
import catoImg from '../../../assets/images/projects/cato.webp';
import scholarFlowImg from '../../../assets/images/projects/scholar-flow-dashboard.png';

const LastProjects = () => {
  // Los 3 proyectos más destacados
  const projects = [
    {
      img: operiaImg,
      title: "Operia - Gestión de Tareas para Equipos",
      link: "https://operia.cl/",
    },
    {
      img: scholarFlowImg,
      title: "Scholar-flow - Sistema Académico con IA",
      link: "https://scholarflow.operia.cl/",
    },
    {
      img: catoImg,
      title: "CATO App - Sistema Táctico",
      link: "https://synapsedev.cl/cato",
    },
  ];

  return (
    <section className="last-projects">
      <Animation animation="fade-up">
        <div className="last-projects-heading">
          <h2>Últimos Proyectos</h2>
          <p className="last-projects-subtitle">
            Explora algunos de nuestros trabajos más recientes y destacados
          </p>
        </div>
      </Animation>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Animation
            key={index}
            animation="fade-up"
            delay={200 + index * 100}
            className={index === 0 ? "project-featured-wrapper" : ""}
          >
            <div className="project-item">
              <div className="project-image-container">
                <LazyImage
                  src={project.img}
                  alt={project.title}
                  className="project-image"
                  loadEagerly={index === 0}
                />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
              </div>
              <div className="link-overlay">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          </Animation>
        ))}
      </div>

      <Animation animation="fade-up" delay={400}>
        <div className="portfolio-cta-container">
          <Link to="/portfolio" className="btn-portfolio-cta">
            Ver Todos los Proyectos
          </Link>
        </div>
      </Animation>
    </section>
  );
};

export default LastProjects;