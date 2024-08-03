import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/LatestPosts.css';

const LatestPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://public-api.wordpress.com/wp/v2/sites/slake167.wordpress.com/posts?per_page=3&_embed')
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
            title: post.title.rendered.replace(/&nbsp;/g, ' '),
            excerpt: post.excerpt.rendered.replace(/<\/?p[^>]*>/g, '').split(' ').slice(0, 20).join(' ') + '...',
            featuredImage
          };
        });
        setPosts(postsData);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="latest-posts">
      <h2>Últimos Posts</h2>
      <div className="posts-grid">
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="post-card">
              <img src={post.featuredImage} alt={post.title} />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href={`/post/${post.id}`} className="read-more">Leer más</a>
            </div>
          ))
        ) : (
          <p>No se encontraron posts.</p>
        )}
      </div>
    </div>
  );
};

export default LatestPosts;
