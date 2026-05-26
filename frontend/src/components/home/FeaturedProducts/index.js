import React from 'react';
import { Link } from 'react-router-dom';
import Animation from '../../layout/Animation/index';
import LazyImage from '../../shared/LazyImage/index';
import operiaImg from '../../../assets/images/projects/operia.webp';
import scholarFlowImg from '../../../assets/images/projects/scholar-flow-dashboard.png';
import './styles.css';

const FeaturedProducts = () => {
  const products = [
    {
      id: 'operia',
      name: 'Operia',
      tagline: 'Gestión operativa inteligente para equipos',
      description:
        'Plataforma SaaS que transforma la forma en que los equipos gestionan sus tareas y operaciones. Con ingesta de tareas por lenguaje natural e IA, tus equipos trabajan más rápido y con mayor claridad.',
      image: operiaImg,
      link: '/operia',
      linkLabel: 'Ver Demo',
      external: false,
      badges: ['SaaS', 'IA', 'Gestión de Equipos'],
      accentColor: '#ff6600',
      accentClass: 'operia',
    },
    {
      id: 'scholar-flow',
      name: 'Scholar-flow',
      tagline: 'Sistema académico con IA para colegios',
      description:
        'Plataforma educativa que automatiza la planificación de horarios semanales y el procesamiento de licencias médicas usando Inteligencia Artificial (Gemini). Diseñada para directores académicos y jefes de UTP.',
      image: scholarFlowImg,
      link: 'https://scholarflow.operia.cl',
      linkLabel: 'Explorar Plataforma',
      external: true,
      badges: ['SaaS', 'Gemini AI', 'Educación'],
      accentColor: '#a78bfa',
      accentClass: 'scholar',
    },
  ];

  return (
    <section className="featured-products">
      <Animation animation="fade-up">
        <div className="featured-products__heading">
          <span className="featured-products__eyebrow">Nuestros Productos</span>
          <h2 className="featured-products__title">
            Soluciones que ya están <span>transformando industrias</span>
          </h2>
          <p className="featured-products__subtitle">
            Desarrollamos plataformas propias con IA que resuelven problemas reales en empresas y colegios.
          </p>
        </div>
      </Animation>

      <div className="featured-products__grid">
        {products.map((product, index) => (
          <Animation key={product.id} animation="fade-up" delay={200 + index * 150}>
            <div className={`featured-product-card featured-product-card--${product.accentClass}`}>
              {/* Image */}
              <div className="featured-product-card__image-wrapper">
                <LazyImage
                  src={product.image}
                  alt={product.name}
                  className="featured-product-card__image"
                />
                <div className="featured-product-card__image-overlay" />
              </div>

              {/* Content */}
              <div className="featured-product-card__content">
                <div className="featured-product-card__badges">
                  {product.badges.map((b) => (
                    <span key={b} className="featured-product-card__badge">{b}</span>
                  ))}
                </div>

                <h3 className="featured-product-card__name">{product.name}</h3>
                <p className="featured-product-card__tagline">{product.tagline}</p>
                <p className="featured-product-card__description">{product.description}</p>

                <div className="featured-product-card__footer">
                  {product.external ? (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`featured-product-card__cta featured-product-card__cta--${product.accentClass}`}
                    >
                      {product.linkLabel} →
                    </a>
                  ) : (
                    <Link
                      to={product.link}
                      className={`featured-product-card__cta featured-product-card__cta--${product.accentClass}`}
                    >
                      {product.linkLabel} →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </Animation>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
