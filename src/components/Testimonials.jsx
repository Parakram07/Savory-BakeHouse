/* ==========================================================================
   SAVORY BAKEHOUSE - Interactive Auto-Playing Testimonials Slider
   ========================================================================== */

import React, { useState, useEffect, useRef } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/testimonialsData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const autoplayTimerRef = useRef(null);

  // Autoplay function - advances slide every 5 seconds
  const startAutoplay = () => {
    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    return () => stopAutoplay();
  }, [isHovered]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="section section-bg-beige">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <span style={{ 
            fontWeight: 700, 
            fontSize: '0.9rem', 
            color: 'var(--primary-purple)', 
            textTransform: 'uppercase', 
            letterSpacing: '2px',
            display: 'inline-block',
            marginBottom: '0.5rem'
          }}>
            Sweet Reviews
          </span>
          <h2>Whispers of Our Delight</h2>
          <p>
            Nothing makes our bakers happier than seeing clean plates and reading these heartwarming reviews from our wonderful Pokhara family.
          </p>
        </div>

        {/* Testimonials Main Slider Box */}
        <div 
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '850px',
            margin: '0 auto',
            minHeight: '340px'
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="slider-wrapper"
        >
          {/* Action Left Arrow */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '-70px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              color: 'var(--primary-purple)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition-smooth)',
              zIndex: 5
            }}
            className="slider-arrow"
            title="Previous Review"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Slider Core Container */}
          <div style={{ position: 'relative', overflow: 'hidden', height: '100%' }}>
            {testimonials.map((review, idx) => {
              // Smooth absolute translation positioning
              const position = idx - currentIndex;
              let opacity = 0;
              let transform = 'translateX(100%) scale(0.95)';
              
              if (idx === currentIndex) {
                opacity = 1;
                transform = 'translateX(0px) scale(1)';
              } else if (idx < currentIndex) {
                opacity = 0;
                transform = 'translateX(-100%) scale(0.95)';
              }

              return (
                <div
                  key={review.id}
                  style={{
                    position: idx === currentIndex ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    opacity: opacity,
                    transform: transform,
                    transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: idx === currentIndex ? 'auto' : 'none'
                  }}
                >
                  <div 
                    className="card testimonial-card"
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      padding: '3rem 2.5rem',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1.5rem',
                      boxShadow: 'var(--shadow-md)',
                      textAlign: 'center'
                    }}
                  >
                    {/* Golden Quote Icon */}
                    <div style={{
                      color: 'rgba(255, 199, 44, 0.25)',
                      display: 'flex',
                      justifyContent: 'center'
                    }}>
                      <Quote size={54} fill="rgba(255, 199, 44, 0.15)" />
                    </div>

                    {/* Ratings */}
                    <div style={{ display: 'flex', gap: '2px' }}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="var(--secondary-gold)" color="var(--secondary-gold)" />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p style={{
                      fontSize: '1.15rem',
                      fontStyle: 'italic',
                      lineHeight: 1.7,
                      color: 'var(--text-heading)',
                      fontWeight: 500,
                      maxWidth: '700px',
                      margin: 0
                    }}>
                      "{review.text}"
                    </p>

                    {/* Customer Profile Details */}
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem', 
                      marginTop: '1rem',
                      borderTop: '1px solid var(--border-light)',
                      paddingTop: '1.25rem',
                      width: '100%',
                      justifyContent: 'center'
                    }}>
                      <img 
                        src={review.image} 
                        alt={review.name} 
                        style={{
                          width: '52px',
                          height: '52px',
                          borderRadius: '50%',
                          objectFit: 'cover',
                          border: '2px solid var(--primary-purple)',
                          boxShadow: 'var(--shadow-sm)'
                        }}
                      />
                      <div style={{ textAlign: 'left' }}>
                        <h4 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, fontFamily: 'var(--font-sans)', color: 'var(--text-heading)' }}>
                          {review.name}
                        </h4>
                        <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--primary-purple)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          {review.role}
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Right Arrow */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '-70px',
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              color: 'var(--primary-purple)',
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)',
              transition: 'var(--transition-smooth)',
              zIndex: 5
            }}
            className="slider-arrow"
            title="Next Review"
          >
            <ChevronRight size={22} />
          </button>
        </div>

        {/* Sliding Dot Indicators */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '2.5rem'
        }}>
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                width: currentIndex === idx ? '24px' : '8px',
                height: '8px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: currentIndex === idx ? 'var(--primary-purple)' : 'var(--text-muted)',
                border: 'none',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
              title={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

      <style>{`
        .slider-arrow:hover {
          background-color: var(--primary-purple) !important;
          border-color: var(--primary-purple) !important;
          color: var(--text-light) !important;
          transform: translateY(-50%) scale(1.08) !important;
          box-shadow: var(--shadow-md) !important;
        }

        @media (max-width: 1024px) {
          .slider-arrow {
            position: static !important;
            transform: none !important;
            margin: 1.5rem 0.5rem 0 0.5rem;
          }
          
          .slider-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: auto !important;
          }
          
          div[style*="overflow: 'hidden'"] {
            width: 100% !important;
          }
        }

        @media (max-width: 767px) {
          .testimonial-card {
            padding: 2rem 1.5rem !important;
          }
          
          .testimonial-card p {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
