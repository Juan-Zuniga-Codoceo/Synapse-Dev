// src/pages/Services/index.js
import React, { useState, useEffect } from "react";
import "./styles.css";
import Animation from "../../components/layout/Animation";
import TechnologiesSection from "../../components/home/TechnologiesSection";
import ContactSection from "../../components/shared/ContactSection";
import { FaCheck } from "react-icons/fa";

// Importación de imágenes
import landingPageImg from "../../assets/images/services/landing-page.webp";
import empresaServiciosImg from "../../assets/images/services/empresa-servicios.webp";
import ecommerceImg from "../../assets/images/services/ecommerce.webp";
import corredoraPropiedadesImg from "../../assets/images/services/corredora-propiedades.webp";

const ServiceCard = ({ image, title, description, onClick }) => (
  <Animation animation="fade-up">
    <div className="service-item-service">
      <div className="service-image">
        <img src={image} alt={title} />
      </div>
      <div className="service-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={onClick} className="cta-button">
          Ver Detalles
        </button>
      </div>
    </div>
  </Animation>
);

const PlanCard = ({ title, price, features, recommended }) => (
  <div className={`plan-card ${recommended ? "recommended" : ""}`}>
    {recommended && <span className="recommended-badge">Recomendado</span>}
    <h5>{title}</h5>
    <p className="price">
      <strong>{price}</strong>
    </p>
    <ul>
      {features.map((feature, index) => (
        <li key={index}>
          <FaCheck className="feature-icon" />
          {feature}
        </li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  const [activePlan, setActivePlan] = useState(null);

  useEffect(() => {
    document.title = "Servicios | Synapse Dev";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        "Soluciones digitales integrales para tu negocio. Desarrollo web, ecommerce y más."
      );
    }
  }, []);

  const togglePlan = (plan) => {
    setActivePlan(activePlan === plan ? null : plan);
    if (!activePlan) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const closePopup = () => {
    setActivePlan(null);
    document.body.style.overflow = "unset";
  };

  const services = [
    {
      id: "landing",
      image: landingPageImg,
      title: "Landing Page",
      description:
        "Diseño y desarrollo de páginas de aterrizaje atractivas y optimizadas para conversiones.",
      planType: "basic",
    },
    {
      id: "business",
      image: empresaServiciosImg,
      title: "Web Empresas y Servicios",
      description:
        "Desarrollo de sitios web corporativos que representen la identidad de tu empresa.",
      planType: "advanced",
    },
    {
      id: "ecommerce",
      image: ecommerceImg,
      title: "Web Ecommerce",
      description:
        "Soluciones de comercio electrónico para llevar tu tienda en línea al siguiente nivel.",
      planType: "ecommerce",
    },
    {
      id: "real-estate",
      image: corredoraPropiedadesImg,
      title: "Web Corredora de Propiedades",
      description:
        "Desarrollo de plataformas especializadas para corredoras de propiedades.",
      planType: "custom",
    },
  ];

  return (
    <div className="services-page">
      <Animation animation="fade-up">
        <header className="services-header">
          <div className="header-content">
            <h1>Desarrollo Web a Medida</h1>
            <p>
              Nos especializamos en crear soluciones digitales adaptadas a las
              necesidades de tu negocio.
            </p>
          </div>
        </header>
      </Animation>

      <section className="services-section">
        <div className="plans-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              {...service}
              onClick={() => togglePlan(service.planType)}
            />
          ))}
        </div>
      </section>

      {activePlan === "basic" && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              <FaCheck className="close-icon" />
            </button>
            <h4 className="plans-title">Planes para Landing Page</h4>
            <div className="plan-details">
              <PlanCard
                title="Landing page 1"
                price="$120.000 CLP / $146 USD"
                features={[
                  "Menú Navegable",
                  "1 Sección de contenido",
                  "1 imagen",
                  "Formulario de contacto",
                ]}
              />
              <PlanCard
                title="Landing page 2"
                price="$150.000 CLP / $183 USD"
                features={[
                  "Menú Navegable",
                  "2 Secciones de contenido",
                  "1 imagen",
                  "Formulario de contacto",
                ]}
                recommended={true}
              />
              <PlanCard
                title="Landing page 3"
                price="$170.000 CLP / $207 USD"
                features={[
                  "Menú Navegable",
                  "3 Secciones de contenido",
                  "1 imagen",
                  "Formulario de contacto",
                ]}
              />
              <PlanCard
                title="Landing page 4"
                price="$200.000 CLP / $244 USD"
                features={[
                  "Menú Navegable",
                  "4 Secciones de contenido",
                  "1 imagen",
                  "Formulario de contacto",
                ]}
              />
            </div>
            <p className="price-note">
              <em>*Estos precios no incluyen impuestos de tu país</em>
            </p>
            <div className="service-buttons">
              <a href="/contact" className="cta-button">
                Contactar
              </a>
            </div>
          </div>
        </div>
      )}

      {activePlan === "advanced" && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              <FaCheck className="close-icon" />
            </button>
            <h4 className="plans-title">
              Planes para Web Empresas y Servicios
            </h4>
            <div className="plan-details">
              <PlanCard
                title="Plan Básico"
                price="$250.000 CLP / $305 USD"
                features={[
                  "Inicio - Nosotros - Servicios - Detalle de servicios - Blog - Contacto",
                  "Galería de fotos de servicios",
                  "Buscador de servicios",
                  "Registro e inicio de sesión de clientes",
                ]}
              />
              <PlanCard
                title="Plan Avanzado"
                price="$270.000 CLP / $329 USD"
                features={[
                  "Inicio - Nosotros - Servicios - Detalle de servicios - Blog - Contacto",
                  "Galería de fotos de servicios",
                  "Buscador de servicios",
                  "Registro e inicio de sesión de clientes",
                  "Sistema reserva de horas",
                ]}
                recommended={true}
              />
              <PlanCard
                title="Plan Experto"
                price="$280.000 CLP / $341 USD"
                features={[
                  "Inicio - Nosotros - Servicios - Detalle de servicios - Blog - Contacto",
                  "Galería de fotos de servicios",
                  "Buscador de servicios",
                  "Registro e inicio de sesión de clientes",
                  "Sistema reserva de horas",
                  "Pago de abono para reserva",
                  "Webpay - Khipu - Flow - Transferencias - Paypal",
                ]}
              />
            </div>
            <p className="price-note">
              <em>*Estos precios no incluyen impuestos de tu país</em>
            </p>
            <div className="service-buttons">
              <a href="/contact" className="cta-button">
                Contactar
              </a>
            </div>
          </div>
        </div>
      )}

      {activePlan === "ecommerce" && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              <FaCheck className="close-icon" />
            </button>
            <h4 className="plans-title">Planes para Web Ecommerce</h4>
            <div className="plan-details">
              <PlanCard
                title="Plan Básico"
                price="$250.000 CLP / $270.000 (productos con tallas)"
                features={[
                  "Inicio - Nosotros - Productos - Detalle de productos - Blog - Contacto",
                  "Categorías y subcategorías de productos",
                  "Galería de fotos de productos",
                  "Buscador de productos",
                  "Registro e inicio de sesión de clientes",
                  "Carro de compras",
                  "Métodos de pago: Webpay - Khipu - Flow - Transferencias - Paypal",
                  "Control de stock",
                  "Gastos de envío administrables",
                ]}
              />
              <PlanCard
                title="Plan Avanzado"
                price="$280.000 CLP / $300.000 (productos con tallas)"
                features={[
                  "Inicio - Nosotros - Productos - Detalle de productos - Blog - Contacto",
                  "Categorías y subcategorías de productos",
                  "Galería de fotos de productos",
                  "Buscador de productos",
                  "Registro e inicio de sesión de clientes",
                  "Carro de compras",
                  "Métodos de pago: Webpay - Khipu - Flow - Transferencias - Paypal",
                  "Control de stock",
                  "Gastos de envío administrables",
                  "Sistema de cupones de descuento",
                  "Opción de habilitar ventas mayoristas",
                ]}
                recommended={true}
              />
              <PlanCard
                title="Plan Experto"
                price="$300.000 CLP / $320.000 (productos con tallas)"
                features={[
                  "Inicio - Nosotros - Productos - Detalle de productos - Blog - Contacto",
                  "Categorías y subcategorías de productos",
                  "Galería de fotos de productos",
                  "Buscador de productos",
                  "Registro e inicio de sesión de clientes",
                  "Carro de compras",
                  "Métodos de pago: Webpay - Khipu - Flow - Transferencias - MercadoPago - Paypal",
                  "Control de stock",
                  "Gastos de envío administrables",
                  "Sistema de cupones de descuento",
                  "Opción de habilitar ventas mayoristas",
                  "Sincroniza productos con Mercadolibre",
                  "Cotizador Chilexpress para delivery",
                ]}
              />
            </div>
            <p className="price-note">
              <em>*Estos precios no incluyen impuestos de tu país</em>
            </p>
            <div className="service-buttons">
              <a href="/contact" className="cta-button">
                Contactar
              </a>
            </div>
          </div>
        </div>
      )}

      {activePlan === "custom" && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closePopup}>
              <FaCheck className="close-icon" />
            </button>
            <h4 className="plans-title">
              Planes para Corredoras de Propiedades
            </h4>
            <div className="plan-details">
              <PlanCard
                title="Plan Único"
                price="$250.000 CLP / $305 USD"
                features={[
                  "Sección inicio con Slideshow",
                  "Sección Quienes somos (3 párrafos, 3 títulos, 3 imágenes administrables)",
                  "Sección de propiedades dividido en ventas y arriendo",
                  "Detalle de propiedad (galería de fotos, agenda visita, consulta de propiedades)",
                  "Confíanos tu propiedad (Formulario para registro de nuevos clientes)",
                  "Formulario de contacto, mapa de google y botón de WhatsApp",
                  "Sección de noticias o blog",
                  "Interfaz gráfica modelada con Bootstrap",
                  "Meta description y title administrables",
                  "Capacitación incluida para uso de la plataforma",
                ]}
              />
            </div>
            <p className="price-note">
              <em>*Estos precios no incluyen impuestos de tu país</em>
            </p>
            <div className="service-buttons">
              <a href="/contact" className="cta-button">
                Contactar
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
