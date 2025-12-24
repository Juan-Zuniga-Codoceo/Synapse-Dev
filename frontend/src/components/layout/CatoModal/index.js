// frontend/src/components/layout/CatoModal/index.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import catoLogo from '../../../img/Cato/logo.png';

const CatoModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Lógica de Scroll
    useEffect(() => {
        const hasSeenModal = sessionStorage.getItem('seenCatoModal');
        if (hasSeenModal) {
            return;
        }
        const handleScroll = () => {
            if (window.scrollY > 800) {
                setIsOpen(true);
                sessionStorage.setItem('seenCatoModal', 'true');
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
        <div className="cato-modal-overlay" onClick={handleClose}>
            <div className="cato-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="cato-modal-close" onClick={handleClose}>×</button>

                <div className="cato-modal-header">
                    <div className="cato-modal-icon">
                        <img src={catoLogo} alt="CATO Logo" className="cato-logo-image" />
                    </div>
                    <h2 className="cato-modal-title">🚀 Convierte tu Vida en un RPG</h2>
                </div>

                <div className="cato-modal-body">
                    <p className="cato-modal-description">
                        CATO: LIFE OS es tu sistema operativo personal. Gestiona finanzas, construye hábitos, gana XP y alcanza tus objetivos como el protagonista que eres.
                    </p>

                    <div className="cato-modal-features">
                        <div className="modal-feature-item">
                            <span className="feature-badge">⚡</span>
                            <span>Gamificación Total</span>
                        </div>
                        <div className="modal-feature-item">
                            <span className="feature-badge">📱</span>
                            <span>100% Offline & Gratis</span>
                        </div>
                    </div>

                    <Link to="/cato" className="cato-modal-cta" onClick={handleClose}>
                        Descargar Ahora
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CatoModal;
