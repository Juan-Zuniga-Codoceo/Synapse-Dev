import React, { useEffect, useRef, useState } from 'react';
import './styles.css';

const Animation = ({ 
  children, 
  animation = 'fade-up',
  delay = 0,
  threshold = 0.2,
  className = ''
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '50px'
      }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const getAnimationClass = () => {
    switch (animation) {
      case 'fade-up':
        return 'animate-fade-up';
      case 'fade-in':
        return 'animate-fade-in';
      case 'slide-in':
        return 'animate-slide-in';
      case 'scale-up':
        return 'animate-scale-up';
      default:
        return 'animate-fade-up';
    }
  };

  return (
    <div 
      ref={elementRef}
      className={`animate-section ${getAnimationClass()} ${isVisible ? 'animate' : ''} ${className}`}
      style={{ 
        '--animation-delay': `${delay}ms`
      }}
    >
      {children}
    </div>
  );
};

export default Animation;