/* ==========================================================================
   SAVORY BAKEHOUSE - Visual Gallery with Custom Lightbox
   ========================================================================== */

import React, { useState, useEffect } from 'react';
import { Eye, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { galleryItems, galleryCategories } from '../data/galleryData';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextSlide = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = (e) => {
    e?.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  // Keyboard navigation for Lightbox (Esc, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems]);

  return (
    <section id="gallery" className="section section-bg-beige">
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
            Our Visual Story
          </span>
          <h2>Glances of Savory BakeHouse</h2>
          <p>
            Take a visual tour through our warm Nadipur kitchen, our cozy corner café, and some of our finest handcrafted creations.
          </p>
        </div>

        {/* Categories Tab Swapper */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3rem',
            flexWrap: 'wrap',
            padding: '0.25rem',
            backgroundColor: 'var(--bg-cream)',
            borderRadius: 'var(--radius-full)',
            width: 'fit-content',
            marginInline: 'auto',
            border: '1px solid var(--border-medium)'
          }}
          className="tab-container"
        >
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => { setActiveCategory(category.id); closeLightbox(); }}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '0.55rem 1.4rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                backgroundColor: activeCategory === category.id ? 'var(--primary-purple)' : 'transparent',
                color: activeCategory === category.id ? 'var(--text-light)' : 'var(--text-body)'
              }}
              className="tab-button"
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-3 gap-6 gallery-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(index)}
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                height: '280px',
                cursor: 'pointer',
                boxShadow: 'var(--shadow-sm)',
                transition: 'var(--transition-smooth)',
                border: '1px solid var(--border-light)'
              }}
              className="gallery-card"
            >
              {/* Photo */}
              <img 
                src={item.image} 
                alt={item.title} 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="gallery-img"
              />

              {/* Hover Dark Vignette Overlay */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(31, 22, 20, 0.75)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '1.5rem',
                  opacity: 0,
                  transition: 'opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  textAlign: 'center',
                  color: 'var(--text-light)',
                  zIndex: 2
                }}
                className="gallery-overlay"
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 199, 44, 0.2)',
                  border: '1px solid var(--secondary-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary-gold)',
                  marginBottom: '1rem',
                  transform: 'translateY(-10px)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="gallery-overlay-icon"
                >
                  <Eye size={20} />
                </div>
                
                <h3 style={{ 
                  color: 'var(--text-light)', 
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '1.15rem', 
                  marginBottom: '0.25rem',
                  transform: 'translateY(-10px)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="gallery-overlay-text"
                >
                  {item.title}
                </h3>
                
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.75)', 
                  fontSize: '0.8rem',
                  lineHeight: 1.4,
                  margin: 0,
                  transform: 'translateY(10px)',
                  transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                className="gallery-overlay-text"
                >
                  {galleryCategories.find(c => c.id === item.category)?.label.split(' ')[1] || item.category}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* --- Built-in Lightbox Overlay Modal --- */}
      {lightboxIndex !== null && (
        <div 
          onClick={closeLightbox}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(15, 11, 10, 0.92)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            zIndex: 99999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '2rem'
          }}
          className="animate-fade-in"
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
              cursor: 'pointer',
              color: '#FFFFFF',
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'var(--transition-fast)'
            }}
            className="lightbox-action-btn"
            title="Close Lightbox (Esc)"
          >
            <X size={24} />
          </button>

          {/* Lightbox Main Content Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '850px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            {/* Nav Arrows */}
            <button 
              onClick={prevSlide}
              style={{
                position: 'absolute',
                left: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                color: '#FFFFFF',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition-fast)',
                zIndex: 10
              }}
              className="lightbox-arrow-btn"
              title="Previous Image (Left Arrow)"
            >
              <ChevronLeft size={24} />
            </button>

            <button 
              onClick={nextSlide}
              style={{
                position: 'absolute',
                right: '-60px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                cursor: 'pointer',
                color: '#FFFFFF',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'var(--transition-fast)',
                zIndex: 10
              }}
              className="lightbox-arrow-btn"
              title="Next Image (Right Arrow)"
            >
              <ChevronRight size={24} />
            </button>

            {/* Lightbox High-res Image Wrapper */}
            <div style={{
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              maxHeight: '70vh',
              width: '100%',
              backgroundColor: '#000',
              border: '2px solid rgba(255, 255, 255, 0.05)'
            }}>
              <img 
                src={filteredItems[lightboxIndex].image} 
                alt={filteredItems[lightboxIndex].title} 
                style={{
                  width: '100%',
                  maxHeight: '70vh',
                  objectFit: 'contain',
                  display: 'block',
                  margin: '0 auto'
                }}
              />
            </div>

            {/* Image Details Panel */}
            <div style={{
              marginTop: '1.5rem',
              color: '#FFFFFF',
              textAlign: 'center',
              width: '100%',
              paddingInline: '1rem'
            }}>
              <h3 style={{ 
                color: '#FFFFFF', 
                fontSize: '1.4rem', 
                fontFamily: 'var(--font-serif)', 
                marginBottom: '0.4rem' 
              }}>
                {filteredItems[lightboxIndex].title}
              </h3>
              
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.7)', 
                fontSize: '0.9rem', 
                lineHeight: 1.5,
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                {filteredItems[lightboxIndex].description}
              </p>

              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.75rem',
                color: 'var(--secondary-gold)',
                fontWeight: 700,
                marginTop: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                <ImageIcon size={12} /> {lightboxIndex + 1} / {filteredItems.length} - {galleryCategories.find(c => c.id === filteredItems[lightboxIndex].category)?.label}
              </span>
            </div>

          </div>
        </div>
      )}

      <style>{`
        /* Hover card scales */
        .gallery-card:hover {
          transform: translateY(-5px);
          box-shadow: var(--shadow-lg) !important;
        }

        .gallery-card:hover .gallery-img {
          transform: scale(1.06);
        }

        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }

        .gallery-card:hover .gallery-overlay-icon,
        .gallery-card:hover .gallery-overlay-text {
          transform: translateY(0) !important;
        }

        .lightbox-action-btn:hover,
        .lightbox-arrow-btn:hover {
          background-color: var(--primary-purple) !important;
          border-color: var(--primary-purple) !important;
          color: #FFFFFF !important;
        }

        @media (max-width: 1024px) {
          .gallery-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1rem !important;
          }
          
          .lightbox-arrow-btn {
            position: static !important;
            transform: none !important;
            margin: 1rem 0.5rem 0 0.5rem;
          }
          
          div[style*="maxWidth: '850px'"] {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        }

        @media (max-width: 767px) {
          .gallery-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }
          
          .gallery-card {
            height: 240px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Gallery;
