import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import heroImage from "../../../assets/images/hero/hero-blog.webp"; // Como imagen de respaldo
import "./styles.css";

const BlogPosts = ({ limit = 3, showHeader = true }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://public-api.wordpress.com/wp/v2/sites/synapsedevblog.wordpress.com/posts?_embed`
        );
        if (!response.ok) throw new Error("Error al cargar los posts");
        const data = await response.json();
        console.log("Datos de los posts:", data); // Depuración
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
    try {
      // Intentar obtener la imagen destacada
      if (
        post._embedded &&
        post._embedded["wp:featuredmedia"] &&
        post._embedded["wp:featuredmedia"][0] &&
        post._embedded["wp:featuredmedia"][0].source_url
      ) {
        const imageUrl = post._embedded["wp:featuredmedia"][0].source_url;
        return imageUrl.startsWith("http") ? imageUrl : heroImage;
      }

      // Si no hay imagen destacada, buscar la primera imagen en el contenido
      const content = post.content?.rendered || "";
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      if (imgMatch && imgMatch[1]) {
        return imgMatch[1];
      }
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
    }

    // Si no se encuentra ninguna imagen, usar la imagen de respaldo
    return heroImage;
  };

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
          {posts.slice(0, limit).map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-image-container">
                <img
                  src={getPostImage(post)}
                  alt={post.title?.rendered || "Imagen del post"}
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
                    {post.content?.rendered
                      ? `${Math.ceil(
                          post.content.rendered.split(" ").length / 200
                        )} min`
                      : "1 min"}
                  </span>
                </div>
                <h3 className="blog-title">
                  {post.title?.rendered
                    ? cleanHtmlEntities(post.title.rendered)
                    : "Sin título"}
                </h3>
                {post.excerpt?.rendered && (
                  <div
                    className="blog-excerpt"
                    dangerouslySetInnerHTML={{
                      __html: cleanHtmlEntities(post.excerpt.rendered),
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