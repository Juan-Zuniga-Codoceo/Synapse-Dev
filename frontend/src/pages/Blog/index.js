// src/pages/Blog/index.js
import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import BlogPosts from '../../components/home/BlogPosts';
import Animation from '../../components/layout/Animation';
import "./styles/Blog.css";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // SEO Optimization
  useEffect(() => {
    document.title = "Blog y Recursos de Desarrollo Web | Synapse Dev";
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleScrollDown = () => {
    const blogListSection = document.querySelector('.blog-posts');
    if (blogListSection) {
      blogListSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <header className="blog-hero">
        <div className="blog-hero-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="blog-hero-video-bg"
          >
            <source src="/assets/video/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="blog-hero-overlay"></div>
        
        <div className="blog-hero-content-wrapper-relative">
          <Animation animation="fade-up">
            <div className="hero-content">
              <h1 className="blog-hero-title">
                <span className="gradient-text-anim">Blog y Recursos</span>
              </h1>
              <p className="blog-description">
                Descubre artículos sobre desarrollo web, marketing digital y consejos 
                para hacer crecer tu negocio online.
              </p>
              
              {/* Barra de Búsqueda */}
              <div className="search-container">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Buscar artículos..."
                  className="search-input"
                />
                <Search className="search-icon" />
              </div>
            </div>
          </Animation>
        </div>

        <div className="blog-hero-scroll-indicator" onClick={handleScrollDown}>
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="arrows">
            <span className="arrow-down"></span>
          </div>
        </div>
      </header>

      {/* Lista de Posts */}
      <BlogPosts 
        limit={9} 
        showHeader={false}
        searchTerm={searchTerm}
      />
    </div>
  );
};

export default BlogPage;