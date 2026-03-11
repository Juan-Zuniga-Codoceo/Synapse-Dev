import React, { useState } from 'react';
import './styles.css';
import { CONTACT_INFO } from '../../../constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const handleWhatsAppClick = () => {
    window.open(CONTACT_INFO.whatsappLink, '_blank');
  };

  return (
    <div className="whatsapp-container">
      <button
        onClick={handleWhatsAppClick}
        className="whatsapp-button"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        aria-label="Contactar por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      </button>
      <span className={`tooltip ${isTooltipVisible ? 'visible' : ''}`}>
        ¡Contáctanos por WhatsApp!
      </span>
    </div>
  );
};

export default WhatsAppButton;