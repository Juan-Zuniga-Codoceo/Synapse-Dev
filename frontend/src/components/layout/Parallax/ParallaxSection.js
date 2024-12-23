// components/layout/ParallaxSection.js
import React, { useEffect } from 'react';

const ParallaxSection = ({ children }) => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.parallax-section');
      sections.forEach(section => {
        const speed = 0.5;
        const yPos = -(window.scrollY * speed);
        section.style.backgroundPositionY = yPos + 'px';
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-section">
      {children}
    </div>
  );
};

export default ParallaxSection;