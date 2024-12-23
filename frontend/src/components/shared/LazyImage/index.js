import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

const LazyImage = ({
  src,
  alt,
  className = '',
  placeholderColor = '#f0f0f0',
  errorColor = '#ff6600',
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '50px'
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  return (
    <div
      ref={imageRef}
      className={`lazy-image-container ${className}`}
      style={{
        backgroundColor: hasError ? errorColor : placeholderColor
      }}
    >
      {shouldLoad && (
        <img
          src={src}
          alt={alt}
          className={`lazy-image ${isLoaded ? 'loaded' : ''}`}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}
      {!isLoaded && (
        <div className="lazy-image-placeholder">
          <div className="lazy-image-loading"></div>
        </div>
      )}
      {hasError && (
        <div className="lazy-image-error">
          <span>!</span>
        </div>
      )}
    </div>
  );
};

export default LazyImage;