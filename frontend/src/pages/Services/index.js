// src/pages/Services/index.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaArrowRight, FaTimes } from 'react-icons/fa';
import Animation from '../../components/layout/Animation';
import TechnologiesSection from '../../components/home/TechnologiesSection';
import ContactSection from '../../components/shared/ContactSection';
import heroImage from '../../assets/images/heroes/portafolio.webp';
import './styles.css';

const services = [
 {
   id: 'web',
   title: 'Desarrollo Web',
   description: 'Creación de sitios web modernos, responsivos y personalizados.',
   features: [
     'Diseño responsive',
     'Optimización SEO',
     'Panel administrable',
     'Integración APIs'
   ],
   stats: {
     clients: '+50 sitios web',
     satisfaction: '98% satisfacción'
   },
   price: 'Desde $250.000 CLP',
   plans: [
     {
       title: 'Plan Básico',
       price: '$250.000 CLP',
       features: [
         'Diseño personalizado',
         'Responsive design',
         'Optimización SEO básica',
         'Formulario de contacto'
       ]
     },
     {
       title: 'Plan Pro',
       price: '$350.000 CLP',
       features: [
         'Todo del plan básico',
         'Panel administrable',
         'Blog integrado',
         'Analítica avanzada'
       ],
       recommended: true
     }
   ]
 },
 {
   id: 'landing',
   title: 'Landing Page',
   description: 'Diseño y desarrollo de páginas de aterrizaje atractivas y optimizadas para conversiones.',
   features: [
     'Diseño responsive',
     'Optimización de conversión',
     'Analytics integrado',
     'A/B Testing'
   ],
   stats: {
     clients: '+30 landings',
     satisfaction: '95% satisfacción'
   },
   price: 'Desde $150.000 CLP + IVA',
   plans: [
     {
       title: 'Plan Básico',
       price: '$150.000 CLP',
       features: [
         'Una sección principal',
         'Formulario de contacto',
         'Diseño responsive',
         'Optimización básica'
       ]
     },
     {
       title: 'Plan Avanzado',
       price: '$200.000 CLP',
       features: [
         'Múltiples secciones',
         'Formulario personalizado',
         'Analytics avanzado',
         'A/B Testing incluido'
       ],
       recommended: true
     }
   ]
 },
 {
   id: 'shopify',
   title: 'Tiendas Shopify',
   description: 'Desarrollo de tiendas online profesionales con Shopify, la plataforma líder en ecommerce.',
   features: [
     'Diseño personalizado',
     'Configuración completa', 
     'Gestión de productos',
     'Métodos de pago integrados'
   ],
   stats: {
     clients: '+20 tiendas',
     satisfaction: '97% satisfacción'
   },
   price: 'Desde $80.000 CLP',
   featured: true,
   plans: [
     {
       title: 'Plan Básico',
       price: '$80.000 CLP',
       features: [
         'Tema personalizado',
         'Configuración básica',
         'Hasta 50 productos',
         'Soporte por 1 mes'
       ]
     },
     {
       title: 'Plan Completo',
       price: '$250.000 CLP',
       features: [
         'Todo del plan básico',
         'Productos ilimitados',
         'Apps premium instaladas',
         'Soporte por 3 meses'
       ],
       recommended: true
     }
   ]
 },
 {
   id: 'ecommerce',
   title: 'E-commerce Personalizado',
   description: 'Plataformas de comercio electrónico personalizadas y escalables para tu negocio.',
   features: [
     'Carrito de compras avanzado',
     'Gestión de inventario',
     'Múltiples formas de pago',
     'Panel administrativo completo'
   ],
   stats: {
     clients: '+30 tiendas',
     satisfaction: '96% satisfacción'
   },
   price: 'Desde $300.000 CLP',
   plans: [
     {
       title: 'Plan Estándar',
       price: '$300.000 CLP',
       features: [
         'Catálogo de productos',
         'Carrito de compras',
         'Gestión de pedidos',
         'Panel admin básico'
       ]
     },
     {
       title: 'Plan Premium',
       price: '$450.000 CLP',
       features: [
         'Todo del plan estándar',
         'Múltiples métodos de pago',
         'Sistema de descuentos',
         'API para integraciones'
       ],
       recommended: true
     }
   ]
 },
 {
   id: 'maintenance',
   title: 'Mantención Web',
   description: 'Servicio de mantenimiento y soporte continuo para mantener tu sitio web actualizado y seguro.',
   features: [
     'Actualizaciones de seguridad',
     'Copias de seguridad',
     'Optimización de rendimiento',
     'Soporte técnico prioritario'
   ],
   stats: {
     clients: '+40 sitios',
     satisfaction: '99% satisfacción'
   },
   price: 'Desde $40.000 CLP/mes',
   plans: [
     {
       title: 'Plan Mensual',
       price: '$40.000 CLP/mes',
       features: [
         'Actualizaciones de seguridad',
         'Backups semanales',
         'Soporte básico',
         'Monitoreo 24/7'
       ]
     },
     {
       title: 'Plan Anual',
       price: '$35.000 CLP/mes',
       features: [
         'Todo del plan mensual',
         'Backups diarios',
         'Soporte prioritario',
         '2 horas de desarrollo'
       ],
       recommended: true
     }
   ]
 }
];

const ServiceCard = ({ service, onSelect }) => (
 <div className={`service-item ${service.featured ? 'featured' : ''}`}>
   <h3>{service.title}</h3>
   <p>{service.description}</p>
   
   <ul className="features-list">
     {service.features.map((feature, index) => (
       <li key={index}>
         <FaCheck className="feature-icon" />
         <span>{feature}</span>
       </li>
     ))}
   </ul>
   
   <div className="service-stats">
     <span>{service.stats.clients}</span>
     <span>{service.stats.satisfaction}</span>
   </div>
   
   <p className="price">{service.price}</p>
   <button className="details-button" onClick={() => onSelect(service)}>
     Ver Detalles <FaArrowRight />
   </button>
 </div>
);

const PlanCard = ({ plan }) => (
 <div className={`plan-card ${plan.recommended ? 'recommended' : ''}`}>
   {plan.recommended && <span className="recommended-badge">Recomendado</span>}
   <h3>{plan.title}</h3>
   <p className="plan-price">{plan.price}</p>
   <ul className="plan-features">
     {plan.features.map((feature, index) => (
       <li key={index}>
         <FaCheck className="feature-icon" />
         <span>{feature}</span>
       </li>
     ))}
   </ul>
 </div>
);

const Services = () => {
 const [selectedService, setSelectedService] = useState(null);

 const closeModal = () => {
   setSelectedService(null);
   document.body.style.overflow = 'unset';
 };

 const openModal = (service) => {
   setSelectedService(service);
   document.body.style.overflow = 'hidden';
 };

 useEffect(() => {
   document.title = 'Servicios | Synapse Dev';
 }, []);

 return (
   <div className="services-page">
     <header 
       className="services-hero"
       style={{
         backgroundImage: `linear-gradient(
           to bottom,
           rgba(16, 37, 50, 0.95),
           rgba(16, 37, 50, 0.85)
         ), url(${heroImage})`
       }}
     >
       <Animation animation="fade-up">
         <div className="hero-content">
           <h1>
             <span>Desarrollo Web</span>
             <span>a Medida</span>
           </h1>
           <p>
             Nos especializamos en crear soluciones digitales adaptadas a las
             necesidades de tu negocio.
           </p>
         </div>
       </Animation>
     </header>

     <div className="services-content">
       {services.map((service) => (
         <Animation key={service.id} animation="fade-up">
           <ServiceCard
             service={service}
             onSelect={openModal}
           />
         </Animation>
       ))}
     </div>

     {selectedService && (
       <div className="modal-overlay" onClick={closeModal}>
         <div className="modal-content" onClick={e => e.stopPropagation()}>
           <div className="modal-header">
             <h2>{selectedService.title}</h2>
             <button className="close-button" onClick={closeModal}>
               <FaTimes />
             </button>
           </div>

           <div className="plans-grid">
             {selectedService.plans.map((plan, index) => (
               <PlanCard key={index} plan={plan} />
             ))}
           </div>

           <p className="price-note">*Los precios no incluyen IVA</p>

           <Link to="/contact" className="contact-button">
             Contactar
           </Link>
         </div>
       </div>
     )}

     <TechnologiesSection />
     <ContactSection />
   </div>
 );
};

export default Services;