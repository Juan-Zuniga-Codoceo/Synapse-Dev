import React, { useState } from 'react';
import { Search } from 'lucide-react';
import BlogPosts from '../../components/home/BlogPosts';
import heroImage from '../../assets/images/hero/wordpress.webp';
import "./styles/Blog.css";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const categories = [
    'Todos',
    'Desarrollo Web',
    'Marketing Digital',
    'SEO',
    'Diseño UI/UX',
    'Tutoriales'
  ];

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="blog-page">
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
      <section className="categories-section">
        <div className="categories-container">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`category-button ${
                selectedCategory === category ? 'active' : ''
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>
      <BlogPosts 
        limit={9} 
        showHeader={false}
        searchTerm={searchTerm}
        category={selectedCategory}
      />
    </div>
  );
};

export default BlogPage;