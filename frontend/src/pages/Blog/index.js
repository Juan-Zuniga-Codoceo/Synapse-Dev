import React, { useState } from 'react';
import { Search } from 'lucide-react';
import BlogPosts from '../../components/home/BlogPosts';
import heroImage from '../../assets/images/hero/wordpress.webp';
import "./styles/Blog.css";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section 
        className="blog-hero"
        style={{
          backgroundImage: `linear-gradient(
            to bottom,
            rgba(16, 37, 50, 0.95),
            rgba(16, 37, 50, 0.85)
          ), url(${heroImage})`
        }}
      >
        <div className="hero-content">
          <h1>Blog y Recursos</h1>
          <p>
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
      </section>

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