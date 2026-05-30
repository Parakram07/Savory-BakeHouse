/* ==========================================================================
   SAVORY BAKEHOUSE - Why Choose Us Section (6 Core Pillars)
   ========================================================================== */

import React from 'react';
import * as Icons from 'lucide-react';
import { strengths } from '../data/strengthsData';

// Dynamic Icon Component Resolver to load Lucide Icons dynamically from string names
const DynamicIcon = ({ name, size = 24, ...props }) => {
  const IconComponent = Icons[name] || Icons.HelpCircle;
  return <IconComponent size={size} {...props} />;
};

const WhyChooseUs = () => {
  
  // Helper to resolve icon styles based on the pillar's color tag
  const getIconStyles = (colorType) => {
    switch (colorType) {
      case 'green':
        return {
          backgroundColor: 'rgba(0, 158, 73, 0.08)',
          border: '1px solid rgba(0, 158, 73, 0.2)',
          color: 'var(--fresh-green)'
        };
      case 'gold':
        return {
          backgroundColor: 'rgba(255, 199, 44, 0.15)',
          border: '1px solid rgba(255, 199, 44, 0.35)',
          color: 'var(--text-heading)'
        };
      case 'purple':
        return {
          backgroundColor: 'rgba(158, 42, 140, 0.08)',
          border: '1px solid rgba(158, 42, 140, 0.2)',
          color: 'var(--primary-purple)'
        };
      default:
        return {
          backgroundColor: 'var(--bg-cream)',
          border: '1px solid var(--border-medium)',
          color: 'var(--text-heading)'
        };
    }
  };

  return (
    <section id="why-choose-us" className="section section-bg-cream">
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
            The Savory Standard
          </span>
          <h2>Why Pokhara Chooses Us</h2>
          <p>
            We set a higher standard of baking excellence by crafting natural, healthy, and premium baked goods with honest pricing and love.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-3 gap-8 strengths-grid">
          {strengths.map((pillar) => {
            const iconStyle = getIconStyles(pillar.colorType);

            return (
              <div 
                key={pillar.id}
                className="card pillar-card"
                style={{
                  textAlign: 'left',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                  backgroundColor: 'var(--bg-card)',
                  padding: '2.5rem 2rem'
                }}
              >
                {/* Dynamically Resolved Icon Container */}
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  ...iconStyle
                }}
                className="icon-container"
                >
                  <DynamicIcon name={pillar.iconName} size={26} />
                </div>

                {/* Card Title & Content */}
                <div>
                  <h3 style={{
                    fontSize: '1.3rem',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    color: 'var(--text-heading)',
                    marginBottom: '0.75rem',
                    lineHeight: 1.35
                  }}>
                    {pillar.title}
                  </h3>
                  
                  <p style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-body)',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {pillar.description}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      <style>{`
        /* Smooth micro-animations for the why choose us cards */
        .pillar-card {
          transition: var(--transition-smooth);
        }

        .pillar-card:hover .icon-container {
          transform: scale(1.1) rotate(6deg);
          box-shadow: var(--shadow-sm);
        }

        .icon-container {
          transition: var(--transition-smooth);
        }

        @media (max-width: 1024px) {
          .strengths-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 767px) {
          .strengths-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
