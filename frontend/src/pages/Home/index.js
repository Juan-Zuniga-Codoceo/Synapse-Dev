// src/pages/Home/index.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Home.css";
import ServicesSection from "../../components/home/ServicesSection";
import TechnologiesSection from "../../components/home/TechnologiesSection";
import LastProjects from "../../components/home/LastProjects";
import TrustedBy from "../../components/home/TrustedBy";
import StatisticsSection from "../../components/home/StatisticsSection";
import BlogPosts from "../../components/home/BlogPosts";
import SercotecBanner from "../../components/home/SercotecBanner";
import ToolsPreview from "../../components/home/ToolsPreview";
import FeaturedProducts from "../../components/home/FeaturedProducts";

const phrases = [
  "Páginas Web Profesionales",
  "Plataformas SaaS de alto impacto",
  "Bots de Inteligencia Artificial para empresas"
];

const Home = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = React.useState(0);
  const [displayedText, setDisplayedText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    let timer;
    const currentPhrase = phrases[currentPhraseIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    if (!isDeleting && displayedText === currentPhrase) {
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentPhrase.substring(0, displayedText.length - 1)
            : currentPhrase.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentPhraseIndex]);

  const handleScrollDown = () => {
    const nextSection = document.querySelector(".home-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video-bg"
          >
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <Link to="/tools" className="hero-tools-badge">
            <span className="badge-new">¡Nuevo!</span> Analizador de velocidad gratuito 🚀
          </Link>
          <h1 className="hero-title animate-fade-in-up">
            Expertos en páginas web
            <br />
            <span className="gradient-text-anim">que impulsan tu negocio.</span>
          </h1>
          <p className="hero-subtitle">
            Creamos <span className="hero-rotating-text">{displayedText}<span className="hero-cursor">|</span></span>
            <br />
            Plataformas modernas, rápidas y optimizadas que transforman visitantes en clientes reales.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="hero-cta-primary">
              Iniciar Proyecto
            </Link>
            <Link to="/portfolio" className="hero-cta-secondary">
              Ver Portafolio
            </Link>
          </div>
        </div>
        <div className="hero-scroll-indicator" onClick={handleScrollDown}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrows">
            <span className="arrow-down"></span>
          </div>
        </div>
      </section>

      <div className="home-section home-section--dark">
        <FeaturedProducts />
      </div>

      <div className="home-section home-section--light">
        <ServicesSection />
      </div>
      <SercotecBanner />

      <div className="home-section home-section--dark">
        <TechnologiesSection />
      </div>

      <div className="home-section home-section--light">
        <LastProjects />
      </div>

      <div className="home-section home-section--dark">
        <StatisticsSection />
      </div>

      <div className="home-section home-section--dark">
        <TrustedBy />
      </div>

      <ToolsPreview />

      <div className="home-section home-section--dark">
        <BlogPosts limit={3} />
      </div>
    </div>
  );
};

export default Home;
