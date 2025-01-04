import React from "react";
import "./styles.css";

// Importar las imágenes
import corfoLogo from "../../../assets/images/logos/sercotec.png";
import semillaNegraLogo from "../../../assets/images/logos/misemillanegra.png";
import spendshieldLogo from "../../../assets/images/logos/spendshield.png";
import abogadoLogo from "../../../assets/images/logos/logo-abogado.png";
import matronaNatyLogo from "../../../assets/images/logos/logo-matronanaty.png";

const TrustedBySection = () => {
  const clients = [
    {
      id: 1,
      name: "CORFO",
      logo: corfoLogo,
      link: "https://www.corfo.cl"
    },
    {
      id: 2,
      name: "Mi Semilla Negra",
      logo: semillaNegraLogo,
      link: "https://misemillanegra.netlify.app"
    },
    {
      id: 3,
      name: "SpendShield",
      logo: spendshieldLogo,
      link: "https://spendshield.netlify.app"
    },
    {
      id: 4,
      name: "Matrona Naty",
      logo: matronaNatyLogo,
      link: "https://www.matronanaty.cl"
    },
    {
      id: 5,
      name: "Abogado Andrés González",
      logo: abogadoLogo,
      link: "https://abogadoandresgonzalez.rf.gd"
    }
  ];

  return (
    <section className="trusted-by">
      <div className="trusted-by-container">
        <h2>Confían en Nosotros</h2>
        <p className="trusted-by-subtitle">
          Empresas que han confiado en nuestras soluciones digitales para
          impulsar su presencia en línea
        </p>
        <div className="logos-grid">
          {clients.map((client) => (
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