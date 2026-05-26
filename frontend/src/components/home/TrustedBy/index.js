import React from "react";
import "./styles.css";

// Importar las imágenes de logos
import corfoLogo from "../../../assets/images/logos/sercotec.png";
import semillaNegraLogo from "../../../assets/images/logos/misemillanegra.png";
import spendshieldLogo from "../../../assets/images/logos/spendshield.png";
import abogadoLogo from "../../../assets/images/logos/logo-abogado.png";
import matronaNatyLogo from "../../../assets/images/logos/logo-matronanaty.png";
import operiaLogo from "../../../assets/images/logos/operia-logo.png";
import scholarFlowLogo from "../../../assets/images/logos/scholar-flow-logo.png";

const TrustedBySection = () => {
  // Proyectos principales destacados (Operia y Scholar-flow)
  const featuredClients = [
    {
      id: 1,
      name: "Operia",
      logo: operiaLogo,
      link: "https://operia.cl",
      tag: "Gestión de Equipos"
    },
    {
      id: 2,
      name: "Scholar-flow",
      logo: scholarFlowLogo,
      link: "https://scholarflow.cl",
      tag: "Plataforma Educativa"
    }
  ];

  // Otros clientes y colaboradores
  const otherClients = [
    {
      id: 3,
      name: "CORFO",
      logo: corfoLogo,
      link: "https://www.corfo.cl"
    },
    {
      id: 4,
      name: "Mi Semilla Negra",
      logo: semillaNegraLogo,
      link: "https://misemillanegra.netlify.app"
    },
    {
      id: 5,
      name: "SpendShield",
      logo: spendshieldLogo,
      link: "https://spendshield.netlify.app"
    },
    {
      id: 6,
      name: "Matrona Naty",
      logo: matronaNatyLogo,
      link: "https://www.matronanaty.cl"
    },
    {
      id: 7,
      name: "Abogado Andrés González",
      logo: abogadoLogo,
      link: "https://abogadoandresgonzalez.rf.gd"
    }
  ];

  return (
    <section className="trusted-by">
      <div className="trusted-by-container">
        <h2>Casos de Éxito y Colaboraciones</h2>
        <p className="trusted-by-subtitle">
          Proyectos insignia desarrollados por nuestro equipo y empresas que confían en nuestras soluciones digitales
        </p>

        {/* Proyectos Destacados (Operia & Scholar-flow) */}
        <div className="logos-section-title">
          <span>Proyectos Destacados</span>
        </div>
        <div className="logos-grid featured-grid">
          {featuredClients.map((client) => (
            <a
              key={client.id}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="logo-wrapper featured-wrapper"
              aria-label={`Logo de ${client.name} (Destacado)`}
            >
              <div className="logo-card featured-card">
                <span className="card-badge">Caso de Éxito</span>
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className={`client-logo featured-logo-img ${client.name.toLowerCase().replace(/\s+/g, '-')}-logo`}
                />
                <span className="featured-tag">{client.tag}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Otros Clientes */}
        <div className="logos-section-title secondary-title">
          <span>Marcas y Colaboradores</span>
        </div>
        <div className="logos-grid standard-grid">
          {otherClients.map((client) => (
            <a
              key={client.id}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="logo-wrapper"
              aria-label={`Logo de ${client.name}`}
            >
              <div className="logo-card">
                <img 
                  src={client.logo} 
                  alt=""
                  className={`client-logo ${client.name.toLowerCase().replace(/\s+/g, '-')}-logo`}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;