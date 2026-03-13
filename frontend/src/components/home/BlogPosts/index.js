import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import heroImage from "../../../assets/images/hero/hero-blog.webp"; // Como imagen de respaldo
import "./styles.css";

const BlogPosts = ({ limit = 3, showHeader = true, searchTerm = '' }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_URL}/api/posts`);
        if (!response.ok) throw new Error("Error al cargar los posts");
        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError("Error al cargar los posts");
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const cleanHtmlEntities = (str) => {
    return str
      .replace(/&nbsp;/g, " ")
      .replace(/&amp;/g, "&")
      .replace(/</g, "<")
      .replace(/>/g, ">")
      .replace(/&quot;/g, '"');
  };

  const getPostImage = (post) => {
    if (post.image && post.image.trim() !== '') {
      return post.image;
    }
    // Fallback if no image is provided and attempt to parse content
    const imgMatch = post.content?.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }
    return heroImage;
  };

  // Filter logic combining the search term
  const filteredPosts = posts.filter(post => {
    if (!searchTerm) return true;
    return post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return (
      <section className="blog-posts">
        <div className="blog-container">
          <div className="blog-grid">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="blog-card loading">
                <div className="loading-image"></div>
                <div className="loading-content">
                  <div className="loading-line"></div>
                  <div className="loading-line"></div>
                  <div className="loading-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <div className="blog-error">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section className="blog-posts">
      <div className="blog-container">
        {showHeader && (
          <div className="blog-header">
            <h2>Blog y Recursos</h2>
            <p>
              Descubre las últimas tendencias en desarrollo web, consejos para
              tu negocio online y recursos útiles para emprendedores.
            </p>
          </div>
        )}
        <div className="blog-grid">
          {filteredPosts.slice(0, limit).map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-container">
                <img
                  src={getPostImage(post)}
                  alt={post.title}
                  className="blog-image"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = heroImage; // Reemplazar con la imagen de respaldo
                  }}
                />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span>
                    <Calendar className="meta-icon" />
                    {new Date(post.date).toLocaleDateString("es-ES")}
                  </span>
                  <span>
                    <Clock className="meta-icon" />
                    {post.content
                      ? `${Math.ceil(post.content.split(" ").length / 200)} min`
                      : "1 min"}
                  </span>
                </div>
                <h3 className="blog-title">
                  {cleanHtmlEntities(post.title || "Sin título")}
                </h3>
                {post.content && (
                  <div
                    className="blog-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: cleanHtmlEntities(post.content.substring(0, 150) + "..."),
                    }}
                  />
                )}
                <Link to={`/blog/${post.slug}`} className="read-more">
                  Leer más
                  <ArrowRight className="read-more-icon" />
                </Link>
              </div>
            </article>
          ))}
        </div>
        {showHeader && posts.length > 0 && (
          <div className="view-all">
            <Link to="/blog" className="view-all-button">
              Ver todos los artículos
              <ArrowRight className="view-all-icon" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPosts;