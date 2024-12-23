import React, { useState } from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WhatsAppButton = () => {
  const [isTooltipVisible, setTooltipVisible] = useState(false);
  const phoneNumber = "+56928333538";

  return (
    <div className="whatsapp-container">
      <a
        href={`https://wa.me/${phoneNumber}`}
        className="whatsapp-button"
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
        aria-label="Contactar por WhatsApp"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
      </a>
      <span className={`tooltip ${isTooltipVisible ? 'visible' : ''}`}>
        ¡Contáctanos por WhatsApp!
      </span>
    </div>
  );
};

export default WhatsAppButton;