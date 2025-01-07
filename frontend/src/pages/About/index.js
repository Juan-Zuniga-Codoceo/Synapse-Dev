import React from "react";
import './styles/About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faPaintBrush,
  faCode,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import heroImage from '../../assets/images/heroes/about-hero.webp';
import TechnologiesSection from '../../components/home/TechnologiesSection';
import ContactSection from '../../components/shared/ContactSection';

const About = () => {
  const processSteps = [
    {
      id: 1,
      title: "Consulta Inicial",
      icon: faClipboardList,
      description: "Entendemos tus necesidades y objetivos para crear una estrategia personalizada."
    },
    {
      id: 2,
      title: "Diseño",
      icon: faPaintBrush,
      description: "Convertimos tus ideas en un diseño atractivo y funcional que representa tu marca."
    },
    {
      id: 3,
      title: "Desarrollo",
      icon: faCode,
      description: "Construimos tu solución utilizando las últimas tecnologías y mejores prácticas."
    },
    {
      id: 4,
      title: "Lanzamiento",
      icon: faRocket,
      description: "Implementamos tu proyecto y lo optimizamos para alcanzar el máximo rendimiento."
    }
  ];

  return (
    <div className="about-page-renamed">
      <header 
        className="about-header-renamed"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(16, 37, 50, 0.75),
            rgba(16, 37, 50, 0.65)
          ), url(${heroImage})`
        }}
      >
        <div className="about-hero-content-renamed">
          <h1>Descubre Synapse Dev</h1>
          <p>Innovación y creatividad al servicio de tus ideas digitales.</p>
        </div>
      </header>

      <main className="about-main-renamed">
        {/* Historia Section */}
        <section className="about-history-section-renamed">
          <h2 className="section-title-renamed">Nuestra Historia</h2>
          <p className="section-description-renamed">
            Synapse Dev nació de una pasión por el desarrollo web y la tecnología.
            Desde nuestros inicios, nos hemos comprometido a ofrecer soluciones
            digitales que no solo cumplan, sino que superen las expectativas de
            nuestros clientes.
          </p>
        </section>

        {/* Vision & Mission Section */}
        <section className="about-vision-mission-renamed">
          <div className="vision-card-renamed">
            <h2>Nuestra Visión</h2>
            <p>
              Ser un referente en la industria del desarrollo web, ofreciendo
              soluciones innovadoras que transformen ideas en realidad.
            </p>
          </div>
          
          <div className="mission-card-renamed">
            <h2>Nuestra Misión</h2>
            <p>
              Ayudar a nuestros clientes a alcanzar el éxito digital mediante la
              creación de productos web de alta calidad y un servicio
              personalizado.
            </p>
          </div>
        </section>

        {/* Process Section */}
        <section className="about-process-renamed">
          <h2 className="section-title-renamed">Nuestro Proceso de Trabajo</h2>
          <div className="process-grid-renamed">
            {processSteps.map((step) => (
              <div key={step.id} className="process-card-renamed">
                <span className="step-number-renamed">0{step.id}</span>
                <FontAwesomeIcon 
                  icon={step.icon} 
                  className="step-icon-renamed"
                />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies Section */}
        <TechnologiesSection />

        {/* CTA Section */}
        <section className="about-cta-renamed">
          <div className="cta-content-renamed">
            <h2 className="section-title-renamed">¿Listo para comenzar?</h2>
            <p>Contacta con nosotros y transforma tus ideas en realidad.</p>
            <a href="/contact" className="cta-button-renamed">
              Contáctanos
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>
    </div>
  );
};

export default About;