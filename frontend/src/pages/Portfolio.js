import React from "react";
import "../css/Portfolio.css";
import TechnologiesSection from "../components/TechnologiesSection";
import ContactSection from "../components/ContactSection";
import project1 from "../img/project1.webp";
import project2 from "../img/project2.webp";
import project3 from "../img/project3.webp";
import project4 from "../img/abogado.webp";

const Portfolio = () => {
  return (
    <div>
      <header className="portfolio-header-renamed">
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
          <div className="project-item-renamed">
            <div className="link-overlay-renamed">
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

          <div className="project-item-renamed">
            <div className="link-overlay-renamed">
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

          <div className="project-item-renamed">
            <div className="link-overlay-renamed">
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

          <div className="project-item-renamed">
            <div className="link-overlay-renamed">
              <a
                href="https://abogadoandresgonzalez.rf.gd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ir a la web
              </a>
            </div>
            <img src={project4} alt="Abogado Andrés Gonzalez" />
            <h3>Abogado Andrés Gonzalez</h3>
            <p>
              Una landing page elegante y profesional creada para el abogado
              Andrés Gonzalez. Destaca por su diseño limpio, navegación sencilla
              y contenido relevante que resalta la experiencia del abogado en
              derecho civil y comercial.
            </p>
          </div>
        </div>
      </div>
      <br />
      <TechnologiesSection />
      <ContactSection />
    </div>
  );
};

export default Portfolio;
