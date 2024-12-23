import React from 'react';
import Skeleton from '../../shared/Skeleton';
import AnimatedSection from '../../layout/Animation/index';

const TechnologiesSkeleton = () => {
  const getStaggeredDelay = (index) => {
    const row = Math.floor(index / 6);
    const col = index % 6;
    return (row * 100) + (col * 50);
  };

  return (
    <section className="technologies-section">
      <AnimatedSection animation="fade-up">
        <div className="technologies-heading">
          <Skeleton width="300px" height="42px" className="mb-4" />
          <Skeleton width="500px" height="16px" />
        </div>
      </AnimatedSection>

      <div className="tech-grid">
        {Array(12).fill(null).map((_, index) => (
          <AnimatedSection
            key={index}
            animation="scale-up"
            delay={getStaggeredDelay(index)}
            threshold={0.1}
          >
            <div className="tech-item">
              <Skeleton variant="rectangular" width="45px" height="45px" className="mb-3" />
              <Skeleton width="80px" height="16px" className="mb-2" />
              <Skeleton width="60px" height="12px" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSkeleton;