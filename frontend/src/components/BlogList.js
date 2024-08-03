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
    <div>
      <h1>Blog</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
