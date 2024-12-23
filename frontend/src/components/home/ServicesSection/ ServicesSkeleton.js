import React from 'react';
import Skeleton from '../../shared/Skeleton';
import AnimatedSection from '../../layout/Animation/index';

const ServicesSkeleton = () => {
  return (
    <section className="services-section">
      <AnimatedSection animation="fade-up">
        <div className="services-heading">
          <Skeleton width="300px" height="48px" className="mb-4" />
          <Skeleton width="600px" height="18px" />
        </div>
      </AnimatedSection>
      
      <div className="services-grid">
        {[1, 2, 3].map((item) => (
          <AnimatedSection 
            key={item}
            animation="fade-up" 
            delay={item * 200}
          >
            <div className="service-item-grid skeleton-card">
              <div>
                <div className="service-icon-wrapper skeleton-icon">
                  <Skeleton variant="circular" width="100px" height="100px" />
                </div>
                <Skeleton width="200px" height="26px" className="mb-4" />
                <Skeleton width="100%" height="80px" className="mb-4" />
                
                <div className="service-features">
                  {[1, 2, 3].map((feature) => (
                    <div key={feature} className="feature-item">
                      <Skeleton width="100%" height="14px" className="mb-3" />
                    </div>
                  ))}
                </div>

                <div className="service-stats">
                  <Skeleton width="100%" height="14px" className="mb-2" />
                  <Skeleton width="100%" height="14px" />
                </div>
              </div>

              <Skeleton width="100%" height="45px" className="mt-4" />
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default ServicesSkeleton;