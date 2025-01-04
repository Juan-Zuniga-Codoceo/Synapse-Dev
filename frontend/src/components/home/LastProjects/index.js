import React from 'react';
import './styles.css';
import Animation from '../../layout/Animation/index';
import LazyImage from '../../shared/LazyImage/index';

// Importación de imágenes
import project1 from '../../../assets/images/projects/project1.webp';
import project2 from '../../../assets/images/projects/project2.webp';
import project3 from '../../../assets/images/projects/project3.webp';
import project4 from '../../../assets/images/projects/abogado.webp';
import project5 from '../../../assets/images/projects/proyecto5.webp';
import semillaNegra from '../../../assets/images/projects/misemillanegra.netlify.app_.png';
import matronaNaty from '../../../assets/images/projects/matronanaty.png';

const LastProjects = () => {
  const projects = [
    {
      img: semillaNegra,
      title: "Mi Semilla Negra - Salsas Orientales",
      link: "https://misemillanegra.netlify.app/",
    },
    {
      img: matronaNaty,
      title: "Matrona Naty - Cuidado especializado de la mujer",
      link: "https://www.matronanaty.cl/",
    },
    {
      img: project5,
      title: "Spend Shield - Gestor de finanzas personales",
      link: "https://spendshield.netlify.app/",
    },
    {
      img: project4,
      title: "Landing Page - Abogado Andrés González",
      link: "https://abogadoandresgonzalez.rf.gd/",
    }, 
    {
      img: project3,
      title: "Synapse Dev - Pizzería",
      link: "https://synapsedev-pizzeria.netlify.app/",
    },
    {
      img: project2,
      title: "Synapse Dev - Abogados",
      link: "https://synapsedev-abogados.netlify.app/",
    },
  ];

  return (
    <section className="last-projects">
      <Animation animation="fade-up">
        <div className="last-projects-heading">
          <h2>Últimos Proyectos</h2>
          <p className="last-projects-subtitle">
            Explora algunos de nuestros trabajos más recientes
          </p>
        </div>
      </Animation>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Animation
            key={index}
            animation="fade-up"
            delay={200 + index * 100}
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
    </section>
  );
};

export default LastProjects;