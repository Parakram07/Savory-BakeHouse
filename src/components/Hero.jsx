/* ==========================================================================
   SAVORY BAKEHOUSE - Hero Section
   ========================================================================== */

import React from 'react';
import { ArrowRight, PhoneCall, Star, Sparkles } from 'lucide-react';

const Hero = () => {
  
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      style={{
        paddingTop: '160px',
        paddingBottom: '100px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgba(250,245,236,0.6) 0%, rgba(255,253,246,1) 100%)'
      }}
    >
      {/* Absolute Decorative Glow Elements */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(158,42,140,0.06) 0%, rgba(255,255,255,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,199,44,0.08) 0%, rgba(255,255,255,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-2 gap-12" style={{ alignItems: 'center' }}>
          
          {/* Hero Left Content Area */}
          <div className="animate-slide-up" style={{ textAlign: 'left' }}>
            {/* Top Fresh Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(0,158,73,0.08)',
              border: '1px solid rgba(0,158,73,0.15)',
              padding: '0.4rem 1.2rem',
              borderRadius: 'var(--radius-full)',
              color: 'var(--fresh-green)',
              fontWeight: 700,
              fontSize: '0.85rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '1.5rem'
            }}>
              <Sparkles size={14} style={{ color: 'var(--secondary-gold)' }} />
              स्वादमा उत्कृष्ट, गुणस्तरमा विश्वास
            </div>

            {/* Main Headline */}
            <h1 style={{ 
              fontSize: '3.8rem', 
              fontWeight: 800, 
              lineHeight: 1.15,
              color: 'var(--text-heading)',
              marginBottom: '1.25rem'
            }}>
              Freshly Baked.<br />
              <span style={{ 
                color: 'var(--primary-purple)',
                position: 'relative',
                display: 'inline-block'
              }}>
                Reliably Delivered.
              </span>
            </h1>

            {/* Nepali Brand Tagline */}
            <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '24px', height: '2px', backgroundColor: 'var(--fresh-green)' }} />
              <p className="tagline-nepali" style={{ fontSize: '1.5rem', margin: 0 }}>
                अलग स्वादको नयाँ आधार
              </p>
              <div style={{ width: '24px', height: '2px', backgroundColor: 'var(--fresh-green)' }} />
            </div>

            {/* Short Sub Description */}
            <p style={{
              fontSize: '1.15rem',
              color: 'var(--text-body)',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
              maxWidth: '520px'
            }}>
              Welcome to Savory BakeHouse, Pokhara's premier commercial bakery manufacturing facility in Nadipur. We specialize in the high-volume, hygienic production of fresh rustic sourdoughs, sliced sandwich loaves, burger buns, and institutional baked goods, reliably distributed to supermarkets, schools, and retail networks daily.
            </p>

            {/* Hero CTAs */}
            <div style={{ 
              display: 'flex', 
              gap: '1.25rem',
              flexWrap: 'wrap'
            }} className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => handleScrollToSection('retail-partner')}
              >
                Become a Retail Partner <ArrowRight size={18} />
              </button>
              
              <button 
                className="btn btn-outline"
                onClick={() => handleScrollToSection('school-supply')}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <PhoneCall size={18} /> School Supply Inquiry
              </button>
            </div>

            {/* Local Trust highlight */}
            <div style={{ 
              marginTop: '3rem', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              borderTop: '1px solid var(--border-medium)',
              paddingTop: '2rem',
              maxWidth: '440px'
            }}>
              <div style={{ display: 'flex' }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={18} fill="var(--secondary-gold)" color="var(--secondary-gold)" style={{ marginRight: '2px' }} />
                ))}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                Loved by 5,000+ Happy Locals & Pokhara Travelers
              </p>
            </div>

          </div>

          {/* Hero Right Media Area (Overlapping Image Collage) */}
          <div className="animate-fade-in" style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            
            {/* Background glowing shape */}
            <div style={{
              position: 'absolute',
              width: '85%',
              height: '85%',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              background: 'linear-gradient(135deg, rgba(158,42,140,0.12) 0%, rgba(255,199,44,0.12) 100%)',
              top: '5%',
              left: '10%',
              zIndex: 0,
              filter: 'blur(10px)'
            }} />

            {/* Overlapping Images Collage */}
            <div style={{ 
              display: 'flex', 
              width: '100%', 
              maxWidth: '480px', 
              height: '460px', 
              position: 'relative', 
              zIndex: 1 
            }}>
              
              {/* Image 1: Crusty Bread (Left-Bottom focus) */}
              <div style={{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '65%',
                height: '62%',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid var(--bg-cream)',
                transform: 'rotate(-4deg)',
                transition: 'var(--transition-smooth)',
                cursor: 'pointer'
              }}
              className="hover-lift"
              >
                <img 
                  src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop&q=80" 
                  alt="Freshly Baked Artisanal Bread" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Image 2: Decadent Cake / Pastry (Right-Top focus) */}
              <div style={{
                position: 'absolute',
                right: 0,
                top: 0,
                width: '65%',
                height: '65%',
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-lg)',
                border: '4px solid var(--bg-cream)',
                transform: 'rotate(3deg)',
                transition: 'var(--transition-smooth)',
                cursor: 'pointer'
              }}
              className="hover-lift"
              >
                <img 
                  src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=80" 
                  alt="Gourmet Chocolate Cake" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating Highlight Box: Quality Standard */}
              <div style={{
                position: 'absolute',
                top: '55%',
                right: '-10px',
                backgroundColor: 'var(--bg-card)',
                padding: '1.25rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-lg)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                border: '1px solid var(--border-medium)',
                zIndex: 2,
                transform: 'translateY(-50%)',
                maxWidth: '200px',
                textAlign: 'left'
              }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,199,44,0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--secondary-gold)',
                  flexShrink: 0
                }}>
                  <Star size={20} fill="var(--secondary-gold)" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, fontFamily: 'var(--font-sans)', color: 'var(--text-heading)' }}>
                    100% Organic
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Stoneground Grains & Pure Mountain Butter
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      <style>{`
        .hover-lift:hover {
          transform: translateY(-8px) scale(1.03) !important;
          z-index: 10 !important;
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 1024px) {
          #home {
            padding-top: 130px;
            padding-bottom: 70px;
          }
          
          #home h1 {
            font-size: 2.8rem !important;
          }
          
          .grid-cols-2 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
            gap: 4rem !important;
          }
          
          #home .animate-slide-up {
            text-align: center !important;
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          
          #home p {
            max-width: 100% !important;
          }

          .hero-buttons {
            justify-content: center;
            width: 100%;
          }
          
          .hero-buttons button {
            width: auto !important;
          }

          #home div[style*="borderTop"] {
            margin-top: 2rem !important;
            padding-top: 1.5rem !important;
            max-width: 100% !important;
            justify-content: center;
          }
        }

        @media (max-width: 767px) {
          #home h1 {
            font-size: 2.3rem !important;
          }
          
          #home p.tagline-nepali {
            font-size: 1.25rem !important;
          }
          
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
          
          .hero-buttons button {
            width: 100% !important;
          }

          #home div[style*="height: 460px"] {
            height: 380px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
