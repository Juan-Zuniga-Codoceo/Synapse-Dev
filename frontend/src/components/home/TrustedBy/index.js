// src/components/home/TrustedBy/index.js
import React from "react";
import "./styles.css";

// Importar las imágenes
import corfoLogo from "../../../assets/images/logos/sercotec.png";
import semillaNegraLogo from "../../../assets/images/logos/misemillanegra.png";
import spendshieldLogo from "../../../assets/images/logos/spendshield.png";
import abogadoLogo from "../../../assets/images/logos/logo-abogado.png";

const TrustedBySection = () => {
  const clients = [
    {
      id: 1,
      name: "CORFO",
      logo: corfoLogo,
      link: "https://www.corfo.cl",
    },
    {
      id: 2,
      name: "MI SEMILLA NEGRA",
      logo: semillaNegraLogo,
      link: "https://misemillanegra.netlify.app",
    },
    {
      id: 3,
      name: "SPENDSHIELD",
      logo: spendshieldLogo,
      link: "https://spendshield.netlify.app",
    },
    {
      id: 4,
      name: "ABOGADO ANDRES GONZÁLEZ",
      logo: abogadoLogo,
      link: "https://abogadoandresgonzalez.rf.gd",
    },
  ];

  console.log("Número de clientes:", clients.length); // Para debugging

  return (
    <section className="trusted-by">
      <div className="trusted-by-container">
        <h2>Confían en Nosotros</h2>
        <p className="trusted-by-subtitle">
          Empresas que han confiado en nuestras soluciones digitales para
          impulsar su presencia en línea
        </p>
        <div className="logos-container">
          {clients.map((client, index) => (
            <a
              key={`client-${client.id}-${index}`}
              href={client.link}
              target="_blank"
              rel="noopener noreferrer"
              className="client-link"
            >
              <div className="logo-container">
                <img
                  src={client.logo}
                  alt={`Logo de ${client.name}`}
                  className="client-logo"
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
