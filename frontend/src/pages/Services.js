import React, { useState } from 'react';
import '../css/Services.css';
import TechnologiesSection from '../components/TechnologiesSection';
import ContactSection from '../components/ContactSection';
import landingPageImg from '../img/landing-page.jpg';
import empresaServiciosImg from '../img/empresa-servicios.jpg';
import ecommerceImg from '../img/ecommerce.jpg';
import corredoraPropiedadesImg from '../img/corredora-propiedades.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Services = () => {
  const [activePlan, setActivePlan] = useState(null);

  const togglePlan = (plan) => {
    setActivePlan(activePlan === plan ? null : plan);
  };

  const closePopup = () => {
    setActivePlan(null);
  };

  return (
    <div className="services-page">
      <header className="services-header">
        <h1>Desarrollo Web a Medida</h1>
        <p>Nos especializamos en crear soluciones digitales adaptadas a las necesidades de tu negocio.</p>
      </header>

      <div className="plans-grid">
        <div className="service-item">
          <img src={landingPageImg} alt="Landing Page" />
          <h2>Landing Page</h2>
          <p>Diseño y desarrollo de páginas de aterrizaje atractivas y optimizadas para conversiones.</p>
          <button className="cta-button" onClick={() => togglePlan('basic')}>Detalle</button>
        </div>

        <div className="service-item">
          <img src={empresaServiciosImg} alt="Web Empresas y Servicios" />
          <h2>Web Empresas y Servicios</h2>
          <p>Desarrollo de sitios web corporativos que representen la identidad de tu empresa.</p>
          <button className="cta-button" onClick={() => togglePlan('advanced')}>Detalle</button>
        </div>

        <div className="service-item">
          <img src={ecommerceImg} alt="Web Ecommerce" />
          <h2>Web Ecommerce</h2>
          <p>Soluciones de comercio electrónico para llevar tu tienda en línea al siguiente nivel.</p>
          <button className="cta-button" onClick={() => togglePlan('ecommerce')}>Detalle</button>
        </div>

        <div className="service-item">
          <img src={corredoraPropiedadesImg} alt="Web Corredora de Propiedades" />
          <h2>Web Corredora de Propiedades</h2>
          <p>Desarrollo de plataformas especializadas para corredoras de propiedades.</p>
          <button className="cta-button" onClick={() => togglePlan('custom')}>Detalle</button>
        </div>
      </div>

      {activePlan === 'basic' && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>X</button>
            <h4 className="plans-title">PLANES PARA LANDING PAGES </h4>
            <div className="plan-details">
              <div className="plan-card">
                <h5>Landing page 1</h5>
                <p><strong>$120.000 CLP / $146 USD</strong></p>
                <ul>
                  <li>Menú Navegable</li>
                  <li>1 Sección de contenido</li>
                  <li>1 imagen</li>
                  <li>Formulario de contacto</li>
                </ul>
              </div>
              <div className="plan-card">
                <h5>Landing page 2</h5>
                <p><strong>$150.000 CLP / $183 USD</strong></p>
                <ul>
                  <li>Menú Navegable</li>
                  <li>2 Secciones de contenido</li>
                  <li>1 imagen</li>
                  <li>Formulario de contacto</li>
                </ul>
              </div>
              <div className="plan-card">
                <h5>Landing page 3</h5>
                <p><strong>$170.000 CLP / $207 USD</strong></p>
                <ul>
                  <li>Menú Navegable</li>
                  <li>3 Secciones de contenido</li>
                  <li>1 imagen</li>
                  <li>Formulario de contacto</li>
                </ul>
              </div>
              <div className="plan-card">
                <h5>Landing page 4</h5>
                <p><strong>$200.000 CLP / $244 USD</strong></p>
                <ul>
                  <li>Menú Navegable</li>
                  <li>4 Secciones de contenido</li>
                  <li>1 imagen</li>
                  <li>Formulario de contacto</li>
                </ul>
              </div>
              <p><em>*Estos precios no incluyen impuestos de tu país</em></p>

              <div className="service-buttons">
                <a href="#contact" className="cta-button">Contactar</a>
                <a href="https://wa.me/123456789" className="whatsapp-button">
                  <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}


{activePlan === 'advanced' && (
  <div className="popup-overlay" onClick={closePopup}>
    <div className="popup-card" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={closePopup}>X</button>
      <h4 className="plans-title">Planes para Web Empresas y Servicios</h4>
      <div className="plan-details">
        <div className="plan-card">
          <h5>Plan Básico</h5>
          <p><strong>$250.000 CLP / $305 USD</strong></p>
          <ul>
            <li>Inicio - Nosotros - Servicios - Detalle de servicios - Blog - Contacto</li>
            <li>Galería de fotos de servicios</li>
            <li>Buscador de servicios</li>
            <li>Registro e inicio de sesión de clientes</li>
          </ul>
        </div>
        <div className="plan-card">
          <h5>Plan Avanzado</h5>
          <p><strong>$270.000 CLP / $329 USD</strong></p>
          <ul>
            <li>Inicio - Nosotros - Servicios - Detalle de servicios - Blog - Contacto</li>
            <li>Galería de fotos de servicios</li>
            <li>Buscador de servicios</li>
            <li>Registro e inicio de sesión de clientes</li>
            <li>Sistema reserva de horas</li>
          </ul>
        </div>
        <div className="plan-card">
          <h5>Plan Experto</h5>
          <p><strong>$280.000 CLP / $341 USD</strong></p>
          <ul>
            <li>Inicio - Nosotros - Servicios - Detalle de servicios - Blog - Contacto</li>
            <li>Galería de fotos de servicios</li>
            <li>Buscador de servicios</li>
            <li>Registro e inicio de sesión de clientes</li>
            <li>Sistema reserva de horas</li>
            <li>Pago de abono para reserva</li>
            <li>Webpay - Khipu - Flow - Transferencias - Paypal</li>
          </ul>
        </div>
      </div>
      <p><em>*Estos precios no incluyen impuestos de tu país</em></p>
      <div className="service-buttons">
        <a href="#contact" className="cta-button">Contactar</a>
        <a href="https://wa.me/123456789" className="whatsapp-button">
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
      </div>
    </div>
  </div>
)}




{activePlan === 'ecommerce' && (
  <div className="popup-overlay" onClick={closePopup}>
    <div className="popup-card" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={closePopup}>X</button>
      <h4 className="plans-title">Planes para Web Ecommerce</h4>
      <div className="plan-details">
        <div className="plan-card">
          <h5>Plan Básico</h5>
          <p><strong>$250.000 CLP / $270.000 (productos con tallas)</strong></p>
          <ul>
            <li>Inicio - Nosotros - Productos - Detalle de productos - Blog - Contacto</li>
            <li>Categorías y subcategorías de productos</li>
            <li>Galería de fotos de productos</li>
            <li>Buscador de productos</li>
            <li>Registro e inicio de sesión de clientes</li>
            <li>Carro de compras</li>
            <li>Métodos de pago: Webpay - Khipu - Flow - Transferencias - Paypal</li>
            <li>Control de stock</li>
            <li>Gastos de envío administrables</li>
          </ul>
        </div>
        <div className="plan-card">
          <h5>Plan Avanzado</h5>
          <p><strong>$280.000 CLP / $300.000 (productos con tallas)</strong></p>
          <ul>
            <li>Inicio - Nosotros - Productos - Detalle de productos - Blog - Contacto</li>
            <li>Categorías y subcategorías de productos</li>
            <li>Galería de fotos de productos</li>
            <li>Buscador de productos</li>
            <li>Registro e inicio de sesión de clientes</li>
            <li>Carro de compras</li>
            <li>Métodos de pago: Webpay - Khipu - Flow - Transferencias - Paypal</li>
            <li>Control de stock</li>
            <li>Gastos de envío administrables</li>
            <li>Sistema de cupones de descuento</li>
            <li>Opción de habilitar ventas mayoristas</li>
          </ul>
        </div>
        <div className="plan-card">
          <h5>Plan Experto</h5>
          <p><strong>$300.000 CLP / $320.000 (productos con tallas)</strong></p>
          <ul>
            <li>Inicio - Nosotros - Productos - Detalle de productos - Blog - Contacto</li>
            <li>Categorías y subcategorías de productos</li>
            <li>Galería de fotos de productos</li>
            <li>Buscador de productos</li>
            <li>Registro e inicio de sesión de clientes</li>
            <li>Carro de compras</li>
            <li>Métodos de pago: Webpay - Khipu - Flow - Transferencias - MercadoPago - Paypal</li>
            <li>Control de stock</li>
            <li>Gastos de envío administrables</li>
            <li>Sistema de cupones de descuento</li>
            <li>Opción de habilitar ventas mayoristas</li>
            <li>Sincroniza productos con Mercadolibre</li>
            <li>Cotizador Chilexpress para delivery</li>
          </ul>
        </div>
      </div>
      <p><em>*Estos precios no incluyen impuestos de tu país</em></p>
      <div className="service-buttons">
        <a href="#contact" className="cta-button">Contactar</a>
        <a href="https://wa.me/123456789" className="whatsapp-button">
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
      </div>
    </div>
  </div>
)}





{activePlan === 'custom' && (
  <div className="popup-overlay" onClick={closePopup}>
    <div className="popup-card" onClick={(e) => e.stopPropagation()}>
      <button className="close-button" onClick={closePopup}>X</button>
      <h4 className="plans-title">Planes para Corredoras de Propiedades</h4>
      <div className="plan-details-1">
        <div className="plan-card-1">
          <h5>Plan Único</h5>
          <p><strong>$250.000 CLP / $305 USD</strong></p>
          <ul>
            <li>Sección inicio con Slideshow</li>
            <li>Sección Quienes somos (3 párrafos, 3 títulos, 3 imágenes administrables)</li>
            <li>Sección de propiedades dividido en ventas y arriendo</li>
            <li>Detalle de propiedad (galería de fotos, agenda visita, consulta de propiedades)</li>
            <li>Confíanos tu propiedad (Formulario para registro de nuevos clientes)</li>
            <li>Formulario de contacto, mapa de google y botón de WhatsApp</li>
            <li>Sección de noticias o blog</li>
            <li>Interfaz gráfica modelada con Bootstrap</li>
            <li>Meta description y title administrables</li>
            <li>Capacitación incluida para uso de la plataforma</li>
          </ul>
        </div>
      </div>
      <p><em>*Estos precios no incluyen impuestos de tu país</em></p>
      <div className="service-buttons">
        <a href="#contact" className="cta-button">Contactar</a>
        <a href="https://wa.me/123456789" className="whatsapp-button">
          <FontAwesomeIcon icon={faWhatsapp} /> WhatsApp
        </a>
      </div>
    </div>
  </div>
)}


      <TechnologiesSection />
      <ContactSection />
    </div>
  );
};

export default Services;
