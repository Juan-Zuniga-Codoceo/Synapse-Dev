import React from "react";
import "../css/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faPaintBrush,
  faCode,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";

import TechnologiesSection from '../components/TechnologiesSection';

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Descubre Synapse Dev</h1>
        <p>Innovación y creatividad al servicio de tus ideas digitales.</p>
      </header>

      <section className="about-intro">
        <h2>Nuestra Historia</h2>
        <p>
          Synapse Dev nació de una pasión por el desarrollo web y la tecnología.
          Desde nuestros inicios, nos hemos comprometido a ofrecer soluciones
          digitales que no solo cumplan, sino que superen las expectativas de
          nuestros clientes.
        </p>
      </section>

      <section className="about-vision-mission">
        <div className="vision">
          <h2>Nuestra Visión</h2>
          <p>
            Ser un referente en la industria del desarrollo web, ofreciendo
            soluciones innovadoras que transformen ideas en realidad.
          </p>
        </div>
        <div className="mission">
          <h2>Nuestra Misión</h2>
          <p>
            Ayudar a nuestros clientes a alcanzar el éxito digital mediante la
            creación de productos web de alta calidad y un servicio
            personalizado.
          </p>
        </div>
      </section>

      <section className="about-process">
        <h2>Nuestro Proceso de Trabajo</h2>
        <div className="process-steps">
          <div className="step">
            <h3>1. Consulta Inicial</h3>
            <br />
            <FontAwesomeIcon icon={faClipboardList} size="3x" />
            <p>Entendemos tus necesidades y objetivos.</p>
          </div>
          <div className="step">
            <h3>2. Diseño</h3>
            <br />
            <FontAwesomeIcon icon={faPaintBrush} size="3x" />
            <p>Convertimos tus ideas en un diseño atractivo y funcional.</p>
          </div>
          <div className="step">
            <h3>3. Desarrollo</h3>
            <br />
            <FontAwesomeIcon icon={faCode} size="3x" />
            <p>Construimos la solución utilizando tecnologías de vanguardia.</p>
          </div>
          <div className="step">
            <h3>4. Lanzamiento</h3>
            <br />
            <FontAwesomeIcon icon={faRocket} size="3x" />
            <p>
              Hacemos que tu proyecto esté en línea y listo para impresionar.
            </p>
          </div>
        </div>
      </section>

      <TechnologiesSection />

      <section className="about-cta">
        <h2>¿Listo para comenzar?</h2>
        <p>Contacta con nosotros y transforma tus ideas en realidad.</p>
        <a href="/contact" className="cta-button">
          Contáctanos
        </a>
      </section>
    </div>
  );
};

export default About;
