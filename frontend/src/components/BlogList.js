import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Blog.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://public-api.wordpress.com/wp/v2/sites/slake167.wordpress.com/posts')
      .then(response => {
        if (response.data && response.data.length > 0) {
          setPosts(response.data);
        }
      })
      .catch(error => console.log(error));
  }, []);

  if (posts.length === 0) {
    return <p>No hay publicaciones disponibles en este momento.</p>;
  }

  return (
    <div className="blog-list">
      {posts.map(post => (
        <div key={post.id} className="blog-card">
          {/* Aquí puedes agregar una imagen si la API la proporciona */}
          <img src="https://via.placeholder.com/350" alt={post.title.rendered} />
          <h2>{post.title.rendered}</h2>
          <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          <a href={`/post/${post.id}`} className="read-more">Leer más</a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
