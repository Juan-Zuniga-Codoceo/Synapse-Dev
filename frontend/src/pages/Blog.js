import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "../components/BlogList";
import BlogPost from "../components/BlogPost";
import "../css/Blog.css";

const Blog = () => {
  return (
    <Router>
      <div className="blog-page-container">
        <div className="blog-page">
          <h1>Blog</h1>
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/post/:postId" element={<BlogPost />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default Blog;
