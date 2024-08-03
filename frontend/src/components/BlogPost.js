import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../css/Blog.css';

const decodeEntities = (encodedString) => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = encodedString;
  return textarea.value;
};

const BlogPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://public-api.wordpress.com/wp/v2/sites/slake167.wordpress.com/posts/${postId}`)
      .then(response => setPost(response.data))
      .catch(error => console.log(error));
  }, [postId]);

  if (!post) return <div>Cargando...</div>;

  return (
    <div className="blog-post">
      <h1>{decodeEntities(post.title.rendered)}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      <div className="back-to-blog">
        <Link to="/blog" className="blog-button">Ver todos los posts</Link>
      </div>
    </div>
  );
};

export default BlogPost;
