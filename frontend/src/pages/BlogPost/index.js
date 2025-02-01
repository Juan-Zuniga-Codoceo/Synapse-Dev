import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import './styles.css';

const HERO_IMAGE = '/assets/images/hero/wordpress.webp';

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://public-api.wordpress.com/wp/v2/sites/synapsedevblog.wordpress.com/posts?slug=${slug}&_embed`
        );
        if (!response.ok) throw new Error('Error al cargar el artículo');
        const [data] = await response.json();
        console.log('Datos del post:', data); // Para debug
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
    try {
      // Intentar obtener la imagen destacada
      if (
        post._embedded &&
        post._embedded['wp:featuredmedia'] &&
        post._embedded['wp:featuredmedia'][0] &&
        post._embedded['wp:featuredmedia'][0].source_url
      ) {
        const imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
        return imageUrl.startsWith('http') ? imageUrl : HERO_IMAGE;
      }

      // Si no hay imagen destacada, buscar la primera imagen en el contenido
      const content = post.content?.rendered || '';
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      if (imgMatch && imgMatch[1]) {
        return imgMatch[1];
      }
    } catch (error) {
      console.error('Error al obtener la imagen:', error);
    }

    // Si no se encuentra ninguna imagen, usar la imagen de respaldo
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
        <h1>{cleanHtmlEntities(post.title.rendered)}</h1>

        <div className="blog-post-meta">
          <span>
            <Calendar className="icon" />
            {new Date(post.date).toLocaleDateString('es-ES')}
          </span>
          <span>
            <Clock className="icon" />
            {Math.ceil(post.content.rendered.split(' ').length / 200)} min de lectura
          </span>
        </div>
        <div className="blog-post-image-container">
          <img
            src={getImageUrl()}
            alt={cleanHtmlEntities(post.title.rendered)}
            className="blog-post-image"
            onError={(e) => {
              e.target.src = HERO_IMAGE; // Reemplazar con la imagen de respaldo
            }}
          />
        </div>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{
            __html: cleanHtmlEntities(post.content.rendered),
          }}
        />

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