import React from 'react';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
 faFacebookF, 
 faInstagram, 
 faTwitter,
 faLinkedinIn 
} from '@fortawesome/free-brands-svg-icons';
import {
 faMapMarkerAlt,
 faEnvelope,
 faPhone,
 faClock,
 faCode,
 faLaptop,
 faShoppingCart,
 faChartLine
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
 return (
   <footer className="footer">
     <div className="footer-container">
       <div className="footer-grid">
         {/* Columna de la empresa */}
         <div className="footer-section">
           <h3 className="footer-title">Synapse Dev | Creación de Páginas Web</h3>
           <p className="footer-description">
             Desarrollamos páginas web profesionales que convierten visitantes en clientes. 
             Especialistas en crear sitios web optimizados para emprendedores y pequeños negocios en Chile.
           </p>
           <p className="footer-schedule">
             <FontAwesomeIcon icon={faClock} className="footer-icon" />
             Atención personalizada: Lunes a Viernes 9:00 - 18:00
           </p>
         </div>

         {/* Columna de servicios */}
         <div className="footer-section">
           <h3 className="footer-title">Servicios Web</h3>
           <ul className="footer-list">
             <li>
               <FontAwesomeIcon icon={faLaptop} className="footer-icon" />
               Páginas Web Profesionales
             </li>
             <li>
               <FontAwesomeIcon icon={faShoppingCart} className="footer-icon" />
               Tiendas Online Shopify
             </li>
             <li>
               <FontAwesomeIcon icon={faChartLine} className="footer-icon" />
               Posicionamiento Web SEO
             </li>
             <li>
               <FontAwesomeIcon icon={faCode} className="footer-icon" />
               Desarrollo Web a Medida
             </li>
           </ul>
         </div>

         {/* Columna de contacto */}
         <div className="footer-section">
           <h3 className="footer-title">Contacta con Nosotros</h3>
           <div className="footer-contact">
             <p>
               <FontAwesomeIcon icon={faMapMarkerAlt} className="footer-icon" />
               Viña del Mar, Chile - Servicio en todo el país
             </p>
             <a href="mailto:contacto@synapsedev.cl">
               <FontAwesomeIcon icon={faEnvelope} className="footer-icon" />
               contacto@synapsedev.cl
             </a>
             <a href="tel:+56920333538">
               <FontAwesomeIcon icon={faPhone} className="footer-icon" />
               +56 9 2033 3538 - WhatsApp disponible
             </a>
           </div>
         </div>
       </div>

       {/* Separador */}
       <div className="footer-divider"></div>

       {/* Footer bottom */}
       <div className="footer-bottom">
         <p className="copyright">
           © 2024 Synapse Dev - Agencia de Desarrollo Web en Chile | Diseño y Creación de Páginas Web Profesionales
         </p>
         <div className="social-links">
           <a 
             href="https://web.facebook.com/profile.php?id=61563375403408&locale=es_LA"
             target="_blank"
             rel="noopener noreferrer"
             className="social-link"
             aria-label="Síguenos en Facebook para novedades sobre desarrollo web"
           >
             <FontAwesomeIcon icon={faFacebookF} />
           </a>
           <a 
             href="https://www.instagram.com/synapse_dev/?hl=es-es"
             target="_blank"
             rel="noopener noreferrer"
             className="social-link"
             aria-label="Síguenos en Instagram para consejos de diseño web"
           >
             <FontAwesomeIcon icon={faInstagram} />
           </a>
           <a 
             href="https://x.com/Synapse___Dev"
             target="_blank"
             rel="noopener noreferrer"
             className="social-link"
             aria-label="Síguenos en Twitter para noticias sobre desarrollo web"
           >
             <FontAwesomeIcon icon={faTwitter} />
           </a>
           <a 
             href="#!"
             target="_blank"
             rel="noopener noreferrer"
             className="social-link"
             aria-label="Conéctate en LinkedIn para novedades profesionales"
           >
             <FontAwesomeIcon icon={faLinkedinIn} />
           </a>
         </div>
       </div>
     </div>
   </footer>
 );
};

export default Footer;