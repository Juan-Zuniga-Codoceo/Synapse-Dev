// frontend/src/components/layout/OperiaModal/index.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import operiaPreview from '../../../assets/images/operia/operia-hero.png';

// Importamos los iconos
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faFilePdf, faUsers } from '@fortawesome/free-solid-svg-icons';

const OperiaModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Lógica de Scroll (sin cambios)
  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('seenOperiaModal');
    if (hasSeenModal) {
      return;
    }
    const handleScroll = () => {
      if (window.scrollY > 800) { 
        setIsOpen(true);
        sessionStorage.setItem('seenOperiaModal', 'true');
        window.removeEventListener('scroll', handleScroll);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="operia-modal-overlay" onClick={handleClose}>
      <div className="operia-modal-content vertical" onClick={(e) => e.stopPropagation()}>
        <button className="operia-modal-close" onClick={handleClose}>×</button>
        
        <div className="operia-modal-image">
          <img src={operiaPreview} alt="Demo de Operia" />
        </div>
        
        <div className="operia-modal-text">

          {/* --- 1. TÍTULO NUEVO (Enfocado en el producto) --- */}
          <h2 className="operia-modal-title">Presentamos Operia</h2>
          
          {/* --- 2. DESCRIPCIÓN NUEVA (Enfocada en el valor y la adaptación) --- */}
          <p className="operia-modal-description">
            La plataforma de gestión de tareas de Synapse Dev, diseñada para centralizar tu operación y 100% adaptable a los procesos de tu empresa.
          </p>

          <ul className="operia-modal-list">
            <li><FontAwesomeIcon icon={faCheckCircle} />Centraliza tareas en un tablero Kanban.</li>
            <li><FontAwesomeIcon icon={faFilePdf} />Gestiona documentación técnica (PDFs).</li>
            <li><FontAwesomeIcon icon={faUsers} />Colabora con tu equipo en tiempo real.</li>
          </ul>
          
          {/* --- 3. BOTÓN (Llamado a la acción claro) --- */}
          <Link to="/operia" className="operia-modal-cta" onClick={handleClose}>
            Conoce la Solución
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OperiaModal;