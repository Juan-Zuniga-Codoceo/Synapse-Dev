import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './styles.css';

const HERO_IMAGE = '/assets/images/hero/wordpress.webp';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${API_URL}/api/posts/${slug}`);
        if (!response.ok) throw new Error('Error al cargar el artículo');
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError('Error al cargar el artículo');
        console.error('Error fetching post:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  // Update SEO title dynamically
  useEffect(() => {
    if (post && post.title) {
      document.title = `${post.title} | SynapseDev`;
    } else {
      document.title = "Blog | SynapseDev";
    }
  }, [post]);

  // Función para limpiar los HTML entities
  const cleanHtmlEntities = (str) => {
    return str
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/</g, '<')
      .replace(/>/g, '>')
      .replace(/&quot;/g, '"');
  };

  const getImageUrl = () => {
    if (post.image && post.image.trim() !== '') {
      return post.image;
    }

    // Fallback if no image is provided and attempt to parse content
    const imgMatch = post.content?.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch && imgMatch[1]) {
      return imgMatch[1];
    }

    return HERO_IMAGE;
  };

  if (loading) {
    return (
      <div className="blog-post">
        <div className="blog-post-container">
          <div className="blog-post-loading">
            <div className="loading-placeholder title" />
            <div className="loading-placeholder meta" />
            <div className="loading-placeholder image" />
            <div className="loading-placeholder content" />
            <div className="loading-placeholder content" />
            <div className="loading-placeholder content" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-post">
        <div className="blog-post-container">
          <div className="blog-post-error">
            <h2>Error al cargar el artículo</h2>
            <p>{error}</p>
            <Link to="/blog" className="back-to-blog">
              <ArrowLeft /> Volver al Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <article className="blog-post">
      <div className="blog-post-container">
        <Link to="/blog" className="back-to-blog">
          <ArrowLeft /> Volver al Blog
        </Link>
        <h1>{cleanHtmlEntities(post.title || "Sin título")}</h1>

        <div className="blog-post-meta">
          <span>
            <Calendar className="icon" />
            {new Date(post.createdAt || post.date).toLocaleDateString('es-ES')}
          </span>
          <span>
            <Clock className="icon" />
            {post.content ? Math.ceil(post.content.split(' ').length / 200) : 1} min de lectura
          </span>
        </div>
        <div className="blog-post-image-container">
          <img
            src={getImageUrl()}
            alt={cleanHtmlEntities(post.title || "Imagen")}
            className="blog-post-image"
            onError={(e) => {
              e.target.src = HERO_IMAGE; // Reemplazar con la imagen de respaldo
            }}
          />
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{
            __html: cleanHtmlEntities(post.content || ""),
          }}
        />

        <div className="blog-post-cta">
          <div className="cta-content">
            <h2>¿Necesitas ayuda profesional con tu proyecto?</h2>
            <p>En SynapseDev transformamos tus ideas en plataformas web de alto rendimiento. Contáctanos hoy y evaluemos cómo potenciar tu negocio.</p>
          </div>
          <Link to="/contact" className="cta-button">
            Agenda una Asesoría Gratuita
            <ArrowRight className="cta-icon" />
          </Link>
        </div>

        <div className="blog-post-footer">
          <Link to="/blog" className="back-to-blog">
            <ArrowLeft /> Volver al Blog
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;