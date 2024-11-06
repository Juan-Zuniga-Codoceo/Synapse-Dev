import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/Blog.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://public-api.wordpress.com/wp/v2/sites/slake167.wordpress.com/posts?_embed')
      .then(response => {
        const postsData = response.data.map(post => {
          let featuredImage = 'images/default-image.jpg';
          if (post._embedded && post._embedded['wp:featuredmedia']) {
            featuredImage = post._embedded['wp:featuredmedia'][0].source_url;
          } else {
            const imgTag = post.content.rendered.match(/<img[^>]+src="([^">]+)"/);
            if (imgTag) {
              featuredImage = imgTag[1];
            }
          }

          return {
            id: post.id,
            title: post.title.rendered.replace(/&nbsp;/g, ' '),  // Reemplaza &nbsp; con un espacio
            excerpt: post.excerpt.rendered,
            featuredImage
          };
        });
        setPosts(postsData);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="blog-list">
      {posts.map(post => (
        <div key={post.id} className="blog-card">
          <img src={post.featuredImage} alt={post.title} />
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          <a href={`/post/${post.id}`} className="read-more">Leer más</a>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
