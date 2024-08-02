import React from "react";
import "../css/Portfolio.css";
import TechnologiesSection from '../components/TechnologiesSection';
import ContactSection from '../components/ContactSection';
import project1 from "../img/project1.png";
import project2 from "../img/project2.png";
import project3 from "../img/project3.png";

const Portfolio = () => {
  return (
    <div>
        <header className="portfolio-header">
        <h1>Portafolio</h1>
        <p>
          Explora nuestros proyectos recientes y descubre cómo hemos ayudado a
          nuestros clientes a alcanzar sus metas.
        </p>
      </header>

    <div className="portfolio-page">
      <section className="portfolio-intro">
        <h1>Bienvenido/a a nuestro portafolio!</h1>
        <p>
          En nuestro portafolio, puedes descubrir una selección de nuestros
          proyectos más destacados en diseño web y gráfico. Hemos trabajado en
          una variedad de áreas, desde sitios web de comercio electrónico hasta
          proyectos corporativos. Cada diseño representa un desafío único y una
          oportunidad para crecer y mejorar. ¡Esperamos que disfrutes explorando
          nuestro trabajo tanto como nosotros disfrutamos creándolo! 😊
        </p>
      </section>

      <div className="projects-grid">
        <div className="project-item">
          <div className="link-overlay">
            <a
              href="https://juan-zuniga-codoceo.github.io/webDev.github.io/#"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a la web
            </a>
          </div>
          <img src={project1} alt="Project 1" />
          <h3>Web Dev Solution</h3>
          <p>
            Una muestra de proyectos de desarrollo web que destacan por su
            diseño limpio y funcionalidad optimizada. Este portafolio es un
            reflejo del compromiso con la calidad y la innovación en cada
            proyecto realizado.
          </p>
        </div>
        <div className="project-item">
          <div className="link-overlay">
            <a
              href="https://synapsedev-abogados.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a la web
            </a>
          </div>
          <img src={project2} alt="Project 2" />
          <h3>Synapse Dev - Abogados</h3>
          <p>
            Una página web diseñada para un estudio jurídico, enfocada en la
            presentación clara y profesional de los servicios legales. La
            estructura intuitiva y el diseño elegante facilitan la navegación
            para los usuarios.
          </p>
        </div>
        <div className="project-item">
          <div className="link-overlay">
            <a
              href="https://synapsedev-pizzeria.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ir a la web
            </a>
          </div>
          <img src={project3} alt="Project 3" />
          <h3>Synapse Dev - Pizzería</h3>
          <p>
            Un sitio web creado para una pizzería, con un diseño atractivo y
            fácil de usar que resalta el menú y las opciones de pedido. La
            página combina un diseño moderno con una experiencia de usuario
            fluida.
          </p>
        </div>
      </div>
    </div>
    <br></br>
      <TechnologiesSection />
      <ContactSection />
      </div>
  );
};

export default Portfolio;
