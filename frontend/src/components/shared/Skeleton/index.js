import React from 'react';
import './styles.css';

const Skeleton = ({ 
  variant = 'rectangular', 
  width, 
  height, 
  className = '' 
}) => {
  return (
    <div 
      className={`skeleton ${variant} ${className}`}
      style={{ 
        width: width || '100%',
        height: height || '1.2em'
      }}
    >
      <div className="skeleton-shine"></div>
    </div>
  );
};

export default Skeleton;