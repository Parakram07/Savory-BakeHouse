/* ==========================================================================
   SAVORY BAKEHOUSE - About Us Section & Wholesale Production Philosophy
   ========================================================================== */

import React from 'react';
import { ShieldCheck, Heart, Sparkles, Activity } from 'lucide-react';

const About = () => {
  
  // Custom styled metrics mapping with designated colorTypes
  const metrics = [
    {
      id: 'm1',
      title: 'Wholesale Production',
      value: '4:00 AM',
      description: 'Ovens fire up early to bake, pack, and load deliveries for our retail and school networks.',
      icon: <Sparkles size={22} />,
      colorType: 'gold'
    },
    {
      id: 'm2',
      title: 'Ingredient Sourcing',
      value: '100% Local',
      description: 'We prioritize premium regional grains and farm-fresh local ingredients.',
      icon: <Heart size={22} />,
      colorType: 'purple'
    },
    {
      id: 'm3',
      title: 'Pristine Hygiene',
      value: 'Grade A',
      description: 'Our factory operates under clinical-grade sanitization protocols.',
      icon: <ShieldCheck size={22} />,
      colorType: 'green'
    },
    {
      id: 'm4',
      title: 'Production Scale',
      value: '12,500+',
      description: 'Daily units baked, packed, and distributed across our Pokhara B2B network.',
      icon: <Activity size={22} />,
      colorType: 'purple'
    }
  ];

  // Helper to resolve specific brand color tokens for badges and highlights
  const getColorStyles = (colorType) => {
    switch (colorType) {
      case 'gold':
        return {
          bg: 'rgba(255, 199, 44, 0.15)',
          border: '1px solid rgba(255, 199, 44, 0.35)',
          color: 'var(--text-heading)',
          accent: 'var(--secondary-gold)'
        };
      case 'green':
        return {
          bg: 'rgba(0, 158, 73, 0.08)',
          border: '1px solid rgba(0, 158, 73, 0.2)',
          color: 'var(--fresh-green)',
          accent: 'var(--fresh-green)'
        };
      case 'purple':
      default:
        return {
          bg: 'rgba(158, 42, 140, 0.08)',
          border: '1px solid rgba(158, 42, 140, 0.2)',
          color: 'var(--primary-purple)',
          accent: 'var(--primary-purple)'
        };
    }
  };

  return (
    <section id="about" className="section section-bg-beige">
      <div className="container">
        
        {/* About Main Split Layout */}
        <div className="grid grid-cols-2 gap-12" style={{ alignItems: 'center', marginBottom: '5.5rem' }}>
          
          {/* About Left Visuals (Overlapping Multi-Photos Collage) */}
          <div style={{ position: 'relative', height: '480px', display: 'flex', justifyContent: 'center' }} className="about-visuals">
            
            {/* Soft decorative wheat background frame */}
            <div style={{
              position: 'absolute',
              width: '80%',
              height: '95%',
              border: '2px dashed var(--primary-purple)',
              opacity: 0.15,
              borderRadius: 'var(--radius-lg)',
              top: '2%',
              left: '5%',
              zIndex: 0
            }} />

            {/* Image A: Flour/Dough Prep (Bottom focus) */}
            <div style={{
              position: 'absolute',
              left: '5%',
              top: '5%',
              width: '60%',
              height: '58%',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-md)',
              transition: 'var(--transition-smooth)',
              border: '5px solid var(--bg-card)',
              zIndex: 1
            }}
            className="hover-scale"
            >
              <img 
                src="https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600&auto=format&fit=crop&q=80" 
                alt="Factory baking preparation and raw flour" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Image B: Baked Goods (Right-Bottom focus) */}
            <div style={{
              position: 'absolute',
              right: '8%',
              bottom: '5%',
              width: '58%',
              height: '62%',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              transition: 'var(--transition-smooth)',
              border: '5px solid var(--bg-card)',
              zIndex: 2
            }}
            className="hover-scale"
            >
              <img 
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&auto=format&fit=crop&q=80" 
                alt="Wholesale fresh breads on baking racks" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Decorative organic leaf badge */}
            <div style={{
              position: 'absolute',
              bottom: '15%',
              left: '2%',
              backgroundColor: 'var(--fresh-green)',
              color: 'var(--text-light)',
              padding: '0.6rem 1.2rem',
              borderRadius: 'var(--radius-full)',
              fontWeight: 700,
              fontSize: '0.85rem',
              boxShadow: 'var(--shadow-md)',
              zIndex: 3,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem'
            }}>
              <ShieldCheck size={16} /> Hygienic Production
            </div>

          </div>

          {/* About Right Brand Narrative */}
          <div style={{ textAlign: 'left' }} className="about-text">
            
            <span style={{ 
              fontWeight: 700, 
              fontSize: '0.9rem', 
              color: 'var(--primary-purple)', 
              textTransform: 'uppercase', 
              letterSpacing: '2px',
              display: 'inline-block',
              marginBottom: '0.5rem'
            }}>
              Wholesale Baking Leadership
            </span>
            
            <h2 style={{ 
              fontSize: '2.6rem', 
              color: 'var(--text-heading)', 
              marginBottom: '1.5rem',
              position: 'relative'
            }}>
              Powering Pokhara's B2B Bakery Supply Chain.
            </h2>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', marginBottom: '1.25rem', lineHeight: 1.7 }}>
              Nestled in the serene locality of Nadipur, Pokhara, Savory BakeHouse is a state-of-the-art commercial bakery manufacturing facility. We specialize in producing high-quality, fresh, and hygienic bakery products in bulk, serving as a trusted supply chain partner for retail supermarkets, school programs, and institutional networks.
            </p>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', marginBottom: '2rem', lineHeight: 1.7 }}>
              Our production lines activate in the early hours of 4:00 AM. Utilizing locally sourced grains, clean ingredients, and high-capacity stone ovens, our factory coordinates daily baking runs under strict quality assurance protocols. We avoid artificial additives and prioritize food safety (HACCP-aligned) to deliver products that retailers and parents can trust completely.
            </p>

            {/* Head Baker Sign-off */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1.5rem',
              borderTop: '1px solid var(--border-medium)',
              paddingTop: '1.5rem'
            }}>
              <div>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontStyle: 'italic', color: 'var(--primary-purple)', lineHeight: 1, margin: '0 0 0.25rem 0' }}>
                  Savory BakeHouse
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
                  Pokhara's Premier Wholesale Bakery Manufacturer
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Visually Upgraded Metrics/Highlights Grid */}
        <div className="grid grid-cols-4 gap-6">
          {metrics.map((metric) => {
            const styles = getColorStyles(metric.colorType);

            return (
              <div 
                key={metric.id} 
                className="metric-card-premium"
                style={{
                  textAlign: 'left',
                  padding: '2.5rem 1.85rem',
                  backgroundColor: 'var(--bg-card)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  '--card-accent-color': styles.accent
                }}
              >
                {/* Circular Glowing Icon Badge */}
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  backgroundColor: styles.bg,
                  border: styles.border,
                  color: styles.accent,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {metric.icon}
                </div>

                {/* Stacked Metric Content - Perfectly Spaced */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {/* Category Small Caps Tagline */}
                  <span style={{ 
                    fontSize: '0.75rem', 
                    fontWeight: 800, 
                    color: styles.accent, 
                    textTransform: 'uppercase', 
                    letterSpacing: '1.2px' 
                  }}>
                    {metric.title}
                  </span>
                  
                  {/* Large High-Contrast Display Metric */}
                  <span style={{ 
                    fontSize: '2rem', 
                    fontWeight: 850, 
                    color: 'var(--text-heading)', 
                    fontFamily: 'var(--font-sans)',
                    lineHeight: 1.1
                  }}>
                    {metric.value}
                  </span>
                </div>

                {/* Metric Description */}
                <p style={{ 
                  fontSize: '0.92rem', 
                  color: 'var(--text-body)', 
                  lineHeight: 1.6, 
                  margin: 0 
                }}>
                  {metric.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>

      {/* Styled premium cards hover classes */}
      <style>{`
        .metric-card-premium {
          transition: var(--transition-smooth) !important;
          border-radius: var(--radius-md) !important;
          border: 1px solid rgba(158, 42, 140, 0.05) !important;
          box-shadow: var(--shadow-sm) !important;
          position: relative !important;
          overflow: hidden !important;
        }
        
        .metric-card-premium:hover {
          transform: translateY(-6px) !important;
          box-shadow: var(--shadow-lg) !important;
          border-color: rgba(158, 42, 140, 0.12) !important;
        }

        /* Subtle glowing top line indicating the specific metric color */
        .metric-card-premium::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: var(--card-accent-color);
          opacity: 0;
          transition: var(--transition-smooth);
        }

        .metric-card-premium:hover::before {
          opacity: 1;
        }

        .hover-scale:hover {
          transform: scale(1.04) !important;
          z-index: 10 !important;
          box-shadow: var(--shadow-lg) !important;
        }

        @media (max-width: 1024px) {
          .about-visuals {
            height: 400px !important;
          }
          
          .grid-cols-4 {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 767px) {
          .about-visuals {
            height: 320px !important;
            margin-bottom: 2rem;
          }
          
          .about-text {
            text-align: center !important;
          }
          
          .about-text h2 {
            font-size: 2.1rem !important;
          }

          .grid-cols-4 {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
