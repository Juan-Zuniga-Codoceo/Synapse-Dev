// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import ScrollToTopButton from "./components/layout/ScrollToTopButton";
import BlogPage from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Operia from './pages/Operia';
import Cato from './pages/Cato';
import CatoModal from './components/layout/CatoModal';
import Tools from './pages/Tools';
import Admin from './pages/Admin';

const AppContent = () => {
  const location = useLocation();
  const isAdmin = location.pathname.startsWith('/admin');

  return (
    <div>
      {!isAdmin && <Navbar />}
      {!isAdmin && <CatoModal />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/operia" element={<Operia />} />
        <Route path="/cato" element={<Cato />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      {!isAdmin && <WhatsAppButton />}
      {!isAdmin && <ScrollToTopButton />}
      {!isAdmin && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;