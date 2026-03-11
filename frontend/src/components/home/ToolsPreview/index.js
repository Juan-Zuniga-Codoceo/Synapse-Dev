import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const ToolsPreview = () => {
    return (
        <section className="tools-preview-section">
            <div className="tools-preview-container">
                <div className="tools-preview-content">
                    <div className="tools-icon-wrapper">
                        <FontAwesomeIcon icon={faWrench} className="tools-preview-icon" />
                    </div>
                    <div className="tools-preview-text">
                        <h2>Recursos Gratuitos para tu Negocio</h2>
                        <p>
                            Analiza tu web, optimiza imágenes y genera enlaces de WhatsApp en segundos.
                        </p>
                    </div>
                </div>
                <div className="tools-preview-cta">
                    <Link to="/tools" className="btn-tools-cta">
                        Probar Herramientas <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ToolsPreview;
