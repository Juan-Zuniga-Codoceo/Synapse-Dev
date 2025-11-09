// frontend/src/pages/Operia/index.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// Importa los componentes de tu sitio
import Animation from '../../components/layout/Animation';
import ContactSection from '../../components/shared/ContactSection'; // Lo quitaremos, pero mantenemos la importación por si acaso

// Importa las nuevas imágenes de Operia
import operiaHero from '../../assets/images/operia/operia-hero.png';
import operiaKanban from '../../assets/images/operia/operia-kanban.png';
import operiaFichas from '../../assets/images/operia/operia-fichas.png';
import operiaModal from '../../assets/images/operia/operia-modal.png';

// (Opcional) Si tienes el logo de BiocareTask, puedes importarlo también
// import biocareLogo from '../../assets/images/logos/biocare-logo.png';

const Operia = () => {
  return (
    <div className="operia-page">
      
      {/* 1. SECCIÓN HÉROE (Fondo Oscuro) */}
      <Animation animation="fade-in">
        <section className="operia-hero">
          <div className="operia-hero-content">
            <h1 className="operia-title">Centraliza la operación de tu equipo.</h1>
            <p className="operia-subtitle">
              Operia es nuestra plataforma demo para la gestión de tareas, documentación técnica y colaboración en tiempo real. Creada para equipos que necesitan orden y eficiencia.
            </p>
            <a href="https://operia.onrender.com" target="_blank" rel="noopener noreferrer" className="operia-cta-primary">
              Probar Demo en Vivo
            </a>
          </div>
          <div className="operia-hero-image">
            <img src={operiaHero} alt="Dashboard de Operia" />
          </div>
        </section>
      </Animation>

      {/* 2. SECCIÓN DE CARACTERÍSTICAS (Fondo Claro) */}
      <div className="operia-section-light"> {/* <-- ENVOLTORIO CLARO */}
        <section className="operia-features">
          <Animation animation="fade-up" className="operia-feature-item">
            <div className="operia-feature-image">
              <img src={operiaKanban} alt="Tablero Kanban de Operia" />
            </div>
            <div className="operia-feature-text">
              <h2>Tablero Kanban Inteligente</h2>
              <p>Visualiza todo tu flujo de trabajo de un vistazo. Mueve tareas de "Pendiente" a "En Camino" y "Completada". Asigna responsables, define prioridades y no vuelvas a perder un plazo.</p>
            </div>
          </Animation>

          <Animation animation="fade-up" className="operia-feature-item reverse">
            <div className="operia-feature-image">
              <img src={operiaFichas} alt="Biblioteca de Fichas Técnicas de Operia" />
            </div>
            <div className="operia-feature-text">
              <h2>Biblioteca de Fichas Técnicas</h2>
              <p>Centraliza toda tu documentación. Sube, categoriza y busca al instante manuales, diagramas o instructivos en PDF. Todo tu conocimiento técnico en un solo lugar seguro.</p>
            </div>
          </Animation>

          <Animation animation="fade-up" className="operia-feature-item">
            <div className="operia-feature-image">
              <img src={operiaModal} alt="Modal de Colaboración en Operia" />
            </div>
            <div className="operia-feature-text">
              <h2>Colaboración en Contexto</h2>
              <p>Deja de usar emails y planillas. Comenta directamente en las tareas, menciona (@) a tus compañeros para notificarles al instante y adjunta archivos de prueba para validar el trabajo.</p>
            </div>
          </Animation>
        </section>
      </div> {/* <-- FIN DEL ENVOLTORIO CLARO */}

      {/* 3. SECCIÓN PIVOTE (Fondo Oscuro) */}
      <Animation animation="fade-up">
        <section className="operia-pivot">
          <h2>¿Te gusta Operia? Lo adaptamos 100% a tu negocio.</h2>
          <p className="operia-pivot-text">
            Operia es una plataforma demo que demuestra nuestra capacidad para construir soluciones robustas. ¿Tu empresa necesita campos diferentes? ¿Una lógica de aprobación especial? ¿Integración con tu sistema actual?
          </p>
          <p className="operia-pivot-key">
            En Synapse Dev, no vendemos software enlatado. Usamos Operia como punto de partida para crear una herramienta a la medida exacta de tus procesos.
          </p>
        </section>
      </Animation>

      {/* 4. PRUEBA SOCIAL (Fondo Claro) */}
      <div className="operia-section-light"> {/* <-- ENVOLTORIO CLARO */}
        <Animation animation="fade-up">
          <section className="operia-proof">
            <div className="operia-proof-content">
              {/* <img src={biocareLogo} alt="Logo BiocareTask" className="operia-proof-logo" /> */}
              <h2>Confianza comprobada: El caso de BiocareTask</h2>
              <p>
                BiocareTask, una solución personalizada basada en la arquitectura de Operia, gestiona actualmente las operaciones logísticas y de servicio técnico para un equipo activo, demostrando la estabilidad y escalabilidad de nuestro desarrollo.
              </p>
              <Link to="/portfolio" className="operia-cta-secondary">
                Ver más casos de éxito
              </Link>
            </div>
          </section>
        </Animation>
      </div> {/* <-- FIN DEL ENVOLTORIO CLARO */}

      {/* 5. SECCIÓN DE CTA FINAL (Fondo Oscuro) */}
      {/* REEMPLAZAMOS EL <ContactSection /> POR ESTO: */}
      <Animation animation="fade-up">
        <section className="operia-cta-final">
          <h2>¿Listo para digitalizar tu operación?</h2>
          <p>
            Agenda una demostración gratuita y sin compromiso de Operia, y conversemos sobre cómo podemos construir la solución que tu empresa realmente necesita.
          </p>
          <Link to="/contact" className="operia-cta-primary">
            Agendar un Demo
          </Link>
        </section>
      </Animation>

    </div>
  );
};

export default Operia;