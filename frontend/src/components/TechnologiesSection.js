import React from 'react';
import '../css/TechnologiesSection.css';
import jsIcon from '../img/js-icon.png';
import wordpressIcon from '../img/wordpress-icon.png';
import shopifyIcon from '../img/shopify-icon.png';
import htmlIcon from '../img/html-icon.png';
import cssIcon from '../img/css-icon.png';
import reactIcon from '../img/react-icon.png';
import vueIcon from '../img/vue-icon.png';

const TechnologiesSection = () => {
  return (
    <section className="technologies-section">
      <h2>Tecnologías Utilizadas</h2>
      <div className="technologies-grid">
        <img src={jsIcon} alt="JavaScript" />
        <img src={wordpressIcon} alt="WordPress" />
        <img src={shopifyIcon} alt="Shopify" />
        <img src={htmlIcon} alt="HTML5" />
        <img src={cssIcon} alt="CSS3" />
        <img src={reactIcon} alt="React" />
        <img src={vueIcon} alt="Vue.js" />
      </div>
    </section>
  );
};

export default TechnologiesSection;
