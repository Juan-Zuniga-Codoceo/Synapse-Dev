import React from "react";
import BlogList from "../components/BlogList";
import "../css/Blog.css";

const Blog = () => {
  console.log("Blog.js rendered");
  return (
    <div className="blog-page-container">
      <header className="blog-hero">
        <div className="overlay">
          <h1>Bienvenido/a a nuestro Blog</h1>
          <p>Explora nuestros últimos artículos y novedades</p>
        </div>
      </header>
      <div className="blog-page">
        <BlogList />
      </div>
    </div>
  );
};

export default Blog;
