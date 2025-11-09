// frontend/src/pages/Operia/index.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

// Importa los componentes de tu sitio
import Animation from '../../components/layout/Animation';
import operiaHero from '../../assets/images/operia/operia-hero.png';
import operiaKanban from '../../assets/images/operia/operia-kanban.png';
import operiaFichas from '../../assets/images/operia/operia-fichas.png';
import operiaModal from '../../assets/images/operia/operia-modal.png';

// Importa los íconos para la sección Pivote
import { Settings, Waypoints, Palette } from 'lucide-react';

// Objeto de datos para las pestañas
const featuresData = {
  kanban: {
    title: 'Tablero Kanban Inteligente',
    description: 'Visualiza todo tu flujo de trabajo de un vistazo. Mueve tareas de "Pendiente" a "En Camino" y "Completada". Asigna responsables, define prioridades y no vuelvas a perder un plazo.',
    img: operiaHero
  },
  fichas: {
    title: 'Biblioteca de Fichas Técnicas',
    description: 'Centraliza toda tu documentación. Sube, categoriza y busca al instante manuales, diagramas o instructivos en PDF. Todo tu conocimiento técnico en un solo lugar seguro.',
    img: operiaFichas
  },
  colaboracion: {
    title: 'Colaboración en Contexto',
    description: 'Deja de usar emails y planillas. Comenta directamente en las tareas, menciona (@) a tus compañeros para notificarles al instante y adjunta archivos de prueba para validar el trabajo.',
    img: operiaModal
  }
};

const Operia = () => {
  const [activeTab, setActiveTab] = useState('kanban');
  const currentFeature = featuresData[activeTab];

  return (
    <div className="operia-page">
      
      {/* 1. SECCIÓN HÉROE (con 2 botones) */}
      <Animation animation="fade-in">
        <section className="operia-hero">
          <div className="operia-hero-content">
            <h1 className="operia-title">Centraliza la operación de tu equipo.</h1>
            <p className="operia-subtitle">
               Operia es nuestra plataforma demo para la gestión de tareas, documentación técnica y colaboración en tiempo real. Creada para equipos que necesitan orden y eficiencia.
            </p>
            <div className="operia-hero-buttons">
              <a href="https://operia.onrender.com" target="_blank" rel="noopener noreferrer" className="operia-cta-primary">
                Probar Demo en Vivo
              </a>
              <a href="#features" className="operia-cta-secondary-hero">
                Ver Características
              </a>
            </div>
          </div>
          <div className="operia-hero-image">
            <img src={operiaHero} alt="Dashboard de Operia" />
          </div>
        </section>
      </Animation>

      {/* 2. SECCIÓN DE CARACTERÍSTICAS (Tabs Interactivos) */}
      <div id="features" className="operia-section-light">
        <section className="operia-features-interactive">
          <Animation animation="fade-up">
            {/* --- Los 3 Botones/Pestañas --- */}
            <div className="operia-tab-pills">
              <button 
                className={`operia-tab-pill ${activeTab === 'kanban' ? 'active' : ''}`}
                onClick={() => setActiveTab('kanban')}>
                Tablero Kanban
              </button>
              <button 
                className={`operia-tab-pill ${activeTab === 'fichas' ? 'active' : ''}`}
                onClick={() => setActiveTab('fichas')}>
                Fichas Técnicas
              </button>
              <button 
                className={`operia-tab-pill ${activeTab === 'colaboracion' ? 'active' : ''}`}
                onClick={() => setActiveTab('colaboracion')}>
                Colaboración
              </button>
            </div>

            {/* --- El Contenido que cambia --- */}
            <div className="operia-tab-content">
              <div className="operia-tab-text">
                <h2>{currentFeature.title}</h2>
                <p>{currentFeature.description}</p>
              </div>
              <div className="operia-tab-image-container">
                <img src={operiaKanban} alt="Tablero Kanban" className={`operia-tab-image ${activeTab === 'kanban' ? 'active' : ''}`} />
                <img src={operiaFichas} alt="Fichas Técnicas" className={`operia-tab-image ${activeTab === 'fichas' ? 'active' : ''}`} />
                <img src={operiaModal} alt="Colaboración" className={`operia-tab-image ${activeTab === 'colaboracion' ? 'active' : ''}`} />
              </div>
            </div>
          </Animation>
        </section>
      </div>

      {/* 3. PRUEBA SOCIAL (BiocareTask) - Reordenada */}
      <div>
        <Animation animation="fade-up">
          <section className="operia-proof">
            <div className="operia-proof-content">
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
      </div>

      {/* 4. SECCIÓN PIVOTE (Fondo Oscuro) - REDISEÑADA */}
      <Animation animation="fade-up">
        <section className="operia-pivot">
          <h2>¿Te gusta Operia? Lo adaptamos 100% a tu negocio.</h2>
          <p className="operia-pivot-text">
            Operia es la base de nuestra solución. Lo personalizamos para que se adapte perfectamente a los procesos únicos de tu empresa.
          </p>
          
          {/* --- CUADRÍCULA DE ADAPTACIÓN --- */}
          <div className="operia-pivot-grid">
            <div className="pivot-card">
              <Settings size={40} className="pivot-icon" />
              <h3>Campos a Medida</h3>
              <p>¿Necesitas un campo para "Patente", "N° de Orden" o "Centro de Costo"? Lo añadimos por ti.</p>
            </div>
            <div className="pivot-card">
              <Waypoints size={40} className="pivot-icon" />
              <h3>Lógica de Negocio</h3>
              <p>Implementamos flujos de aprobación, roles de usuario personalizados y permisos especiales.</p>
            </div>
            <div className="pivot-card">
              <Palette size={40} className="pivot-icon" />
              <h3>Branding Personalizado</h3>
              <p>Ponemos tu logo, tus colores y tu tipografía. Hacemos que Operia se sienta 100% tuyo.</p>
            </div>
          </div>

          <p className="operia-pivot-key">
            En Synapse Dev, no vendemos software enlatado. Creamos la herramienta que tu equipo realmente necesita.
          </p>
        </section>
      </Animation>

      {/* 5. SECCIÓN DE CTA FINAL (Sin cambios) */}
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