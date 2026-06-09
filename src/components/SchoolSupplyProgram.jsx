import React from 'react';
import { ShieldCheck, Heart, Truck, GraduationCap, ArrowRight, Check } from 'lucide-react';

const SchoolSupplyProgram = () => {
  const pillars = [
    {
      num: '01',
      title: 'Hygiene & Care',
      subtitle: 'Fresh, safe, and carefully prepared.',
      description: 'We follow proper hygiene practices to ensure bakery products are prepared, handled, and packed with care.',
      icon: <ShieldCheck size={28} />,
      color: 'purple',
      badgeColor: 'rgba(158, 42, 140, 0.08)',
      accentColor: 'var(--primary-purple)',
      borderColor: 'rgba(158, 42, 140, 0.25)',
      benefits: [
        'Hygienic preparation',
        'Early daily production',
        'Quality checks before supply'
      ]
    },
    {
      num: '02',
      title: 'Student-Friendly Products',
      subtitle: 'Fresh bakery items for school needs.',
      description: 'Our products are prepared in suitable portions for students and regular school supply requirements.',
      icon: <Heart size={28} />,
      color: 'gold',
      badgeColor: 'rgba(255, 199, 44, 0.12)',
      accentColor: 'var(--text-heading)',
      borderColor: 'rgba(255, 199, 44, 0.4)',
      benefits: [
        'Student-friendly bakery items',
        'Bulk production capacity',
        'Consistent taste and quality'
      ]
    },
    {
      num: '03',
      title: 'Reliable Delivery',
      subtitle: 'On-time daily school supply.',
      description: 'We coordinate with schools to ensure timely delivery and smooth regular supply.',
      icon: <Truck size={28} />,
      color: 'green',
      badgeColor: 'rgba(0, 158, 73, 0.08)',
      accentColor: 'var(--fresh-green)',
      borderColor: 'rgba(0, 158, 73, 0.25)',
      benefits: [
        'Timely morning delivery',
        'Dedicated school supply support',
        'Flexible long-term partnerships'
      ]
    }
  ];

  return (
    <section id="school-supply" className="section section-bg-beige school-supply-section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header" style={{ marginBottom: '4.5rem' }}>
          <span style={{
            fontWeight: 700,
            fontSize: '0.9rem',
            color: 'var(--primary-purple)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            display: 'inline-block',
            marginBottom: '0.5rem'
          }}>
            <GraduationCap size={16} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
            B2B Educational Program
          </span>
          <h2 style={{ fontSize: '2.5rem', marginTop: '0.5rem' }}>Trusted Bakery Partner for Schools</h2>
          <p style={{ maxWidth: '750px', marginInline: 'auto' }}>
            We supply fresh, hygienic, and student-friendly bakery products to schools and educational institutions. Our School Supply Program is designed for institutions that need safe, consistent, and timely bakery supply.
          </p>
        </div>

        {/* 3 Pillars Layout */}
        <div className="pillars-grid">
          {pillars.map((pillar, index) => (
            <div key={index} className={`pillar-card pillar-${pillar.color}`} style={{
              position: 'relative',
              backgroundColor: 'var(--bg-card)',
              borderRadius: 'var(--radius-lg)',
              border: `1px solid var(--border-light)`,
              padding: '3rem 2rem 2.5rem',
              boxShadow: 'var(--shadow-sm)',
              display: 'flex',
              flexDirection: 'column',
              transition: 'var(--transition-smooth)',
              overflow: 'hidden'
            }}>
              {/* Massive stylized background number */}
              <span className="pillar-number" style={{
                position: 'absolute',
                top: '-10px',
                right: '15px',
                fontSize: '8rem',
                fontWeight: 900,
                fontFamily: 'var(--font-serif)',
                color: 'rgba(45, 30, 27, 0.03)',
                lineHeight: 1,
                userSelect: 'none',
                pointerEvents: 'none'
              }}>{pillar.num}</span>

              {/* Icon & Title */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
                <div className="pillar-icon-wrapper" style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifycontent: 'center',
                  backgroundColor: pillar.badgeColor,
                  border: `1px solid ${pillar.borderColor}`,
                  color: pillar.color === 'gold' ? 'var(--primary-purple)' : pillar.accentColor,
                  flexShrink: 0
                }}>
                  {pillar.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '1.18rem', margin: 0, fontFamily: 'var(--font-sans)', fontWeight: 700, color: 'var(--text-heading)' }}>
                    {pillar.title}
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                    {pillar.subtitle}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', lineHeight: 1.6, marginBottom: '2rem', zIndex: 2 }}>
                {pillar.description}
              </p>

              {/* Bullet Checklist */}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.85rem', zIndex: 2, flexGrow: 1 }}>
                {pillar.benefits.map((benefit, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-body)' }}>
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      backgroundColor: pillar.badgeColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Check size={12} style={{ color: pillar.color === 'gold' ? 'var(--primary-purple)' : pillar.accentColor }} />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Global CTA Bar */}
        <div className="pillars-footer" style={{
          marginTop: '4.5rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(158, 42, 140, 0.04) 0%, rgba(255, 199, 44, 0.05) 100%)',
          border: '1px dashed var(--border-medium)',
          padding: '2.5rem 2rem',
          borderRadius: 'var(--radius-lg)'
        }}>
          <h3 style={{ fontSize: '1.6rem', marginBottom: '0.75rem', fontFamily: 'var(--font-sans)' }}>Ready to establish a partnership with Savory Bakehouse?</h3>
          <p style={{ color: 'var(--text-body)', maxWidth: '600px', margin: '0 auto 1.5rem auto', fontSize: '1rem' }}>
            Get in touch to arrange bulk deliveries, sample trials, or specialized recipes tailored for your campus requirements.
          </p>
          <button 
            className="btn btn-primary"
            onClick={() => {
              const selectEl = document.querySelector('select[name="subject"]');
              if (selectEl) {
                selectEl.value = 'school';
                const event = new Event('change', { bubbles: true });
                selectEl.dispatchEvent(event);
              }
              document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }}
          >
            School Partnership Inquiry <ArrowRight size={18} />
          </button>
        </div>

      </div>

      <style>{`
        .school-supply-section {
          padding-top: 120px;
          padding-bottom: 120px;
          border-bottom: 1px solid var(--border-light);
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .pillar-icon-wrapper svg {
          display: block;
          margin: auto;
        }

        /* Card Hover Effects */
        .pillar-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
        }

        .pillar-purple:hover {
          border-color: var(--primary-purple) !important;
        }

        .pillar-gold:hover {
          border-color: var(--secondary-gold) !important;
        }

        .pillar-green:hover {
          border-color: var(--fresh-green) !important;
        }

        @media (max-width: 1024px) {
          .pillars-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
            max-width: 600px;
            margin: 0 auto;
          }
          
          .school-supply-section {
            padding-top: 80px;
            padding-bottom: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default SchoolSupplyProgram;
