/* ==========================================================================
   SAVORY BAKEHOUSE - Quality & Hygiene Section
   ========================================================================== */

import React, { useEffect, useRef, useState } from 'react';
import {
  ShieldCheck,
  HandMetal,
  ClipboardCheck,
  Leaf,
  Package,
  Activity
} from 'lucide-react';

const pillars = [
  {
    icon: ShieldCheck,
    title: 'Hygienic Production Environment',
    description:
      'Our production facility is maintained to the highest cleanliness standards. Floors, surfaces, and equipment are sanitized regularly to prevent contamination at every stage.',
    color: '#009E49',
    bg: 'rgba(0,158,73,0.07)',
    border: 'rgba(0,158,73,0.18)',
  },
  {
    icon: HandMetal,
    title: 'Proper Product Handling',
    description:
      'All staff follow strict food-safety handling protocols — from gloves and hairnets to dedicated zones for raw and finished products — ensuring zero cross-contamination.',
    color: '#9E2A8C',
    bg: 'rgba(158,42,140,0.07)',
    border: 'rgba(158,42,140,0.18)',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Checks',
    description:
      'Every batch goes through multi-point quality inspections — weight, texture, colour, and shelf-life — before it is approved for dispatch. Only consistent products leave our facility.',
    color: '#C0392B',
    bg: 'rgba(192,57,43,0.07)',
    border: 'rgba(192,57,43,0.18)',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description:
      'We source fresh, high-grade ingredients from verified suppliers. Flour, butter, and other key inputs are checked for quality upon arrival and stored under proper conditions.',
    color: '#2E7D32',
    bg: 'rgba(46,125,50,0.07)',
    border: 'rgba(46,125,50,0.18)',
  },
  {
    icon: Package,
    title: 'Clean Packaging',
    description:
      'Finished products are packaged in food-grade, sealed materials that protect freshness and prevent external contamination during storage and transit to our partners.',
    color: '#E67E22',
    bg: 'rgba(230,126,34,0.07)',
    border: 'rgba(230,126,34,0.18)',
  },
  {
    icon: Activity,
    title: 'Production Monitoring',
    description:
      'Our supervisors oversee the entire production line continuously — monitoring temperatures, timings, and process adherence — to maintain consistent output every single day.',
    color: '#1565C0',
    bg: 'rgba(21,101,192,0.07)',
    border: 'rgba(21,101,192,0.18)',
  },
];

const PillarCard = ({ pillar, index }) => {
  const Icon = pillar.icon;
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="qh-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`,
        background: '#FFFDF6',
        border: `1px solid ${pillar.border}`,
        borderRadius: '20px',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {/* Soft glow corner */}
      <div style={{
        position: 'absolute',
        top: '-30px',
        right: '-30px',
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: `radial-gradient(circle, ${pillar.bg} 0%, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      {/* Icon badge */}
      <div style={{
        width: '52px',
        height: '52px',
        borderRadius: '14px',
        backgroundColor: pillar.bg,
        border: `1px solid ${pillar.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Icon size={24} color={pillar.color} strokeWidth={2} />
      </div>

      <div>
        <h3 style={{
          margin: '0 0 0.5rem 0',
          fontSize: '1.05rem',
          fontWeight: 700,
          fontFamily: 'var(--font-sans)',
          color: 'var(--text-heading)',
          lineHeight: 1.3,
        }}>
          {pillar.title}
        </h3>
        <p style={{
          margin: 0,
          fontSize: '0.92rem',
          color: 'var(--text-body)',
          lineHeight: 1.65,
        }}>
          {pillar.description}
        </p>
      </div>

      {/* Bottom accent bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: `linear-gradient(90deg, ${pillar.color}55, ${pillar.color}00)`,
        borderRadius: '0 0 20px 20px',
      }} />
    </div>
  );
};

const QualityHygiene = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="quality-hygiene"
      style={{
        padding: '100px 0',
        background: 'linear-gradient(180deg, #FFFDF6 0%, rgba(245,240,230,0.5) 50%, #FFFDF6 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decorative blobs */}
      <div style={{
        position: 'absolute', top: '8%', left: '-5%',
        width: '340px', height: '340px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,158,73,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', right: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(158,42,140,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Section Header ── */}
        <div
          ref={headerRef}
          style={{
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto 4.5rem auto',
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(28px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          {/* Eyebrow label */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            backgroundColor: 'rgba(0,158,73,0.08)',
            border: '1px solid rgba(0,158,73,0.15)',
            padding: '0.4rem 1.2rem',
            borderRadius: '999px',
            color: '#009E49',
            fontWeight: 700,
            fontSize: '0.82rem',
            textTransform: 'uppercase',
            letterSpacing: '1.2px',
            marginBottom: '1.5rem',
          }}>
            <ShieldCheck size={14} />
            Our Standards
          </div>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.9rem)',
            fontWeight: 800,
            color: 'var(--text-heading)',
            lineHeight: 1.2,
            marginBottom: '1.25rem',
            fontFamily: 'var(--font-serif)',
          }}>
            Clean Production.{' '}
            <span style={{ color: 'var(--primary-purple)' }}>Consistent Quality.</span>
          </h2>

          {/* Divider */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}>
            <div style={{ height: '2px', width: '40px', background: 'var(--secondary-gold)', borderRadius: '2px' }} />
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-purple)' }} />
            <div style={{ height: '2px', width: '40px', background: 'var(--secondary-gold)', borderRadius: '2px' }} />
          </div>

          <p style={{
            fontSize: '1.08rem',
            color: 'var(--text-body)',
            lineHeight: 1.75,
            maxWidth: '640px',
            margin: '0 auto',
          }}>
            We follow proper hygiene practices and quality control steps throughout our production
            process. From ingredient handling to baking, packaging, and delivery, our focus is to
            provide fresh and safe bakery products with consistent quality.
          </p>
        </div>

        {/* ── Pillars Grid ── */}
        <div className="qh-grid">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>

        {/* ── Bottom Trust Banner ── */}
        <div
          style={{
            marginTop: '4rem',
            background: 'linear-gradient(135deg, var(--primary-purple) 0%, #7B1FA2 100%)',
            borderRadius: '24px',
            padding: '2.5rem 3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            flexWrap: 'wrap',
            boxShadow: '0 20px 60px rgba(158,42,140,0.2)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Decorative circles inside banner */}
          <div style={{
            position: 'absolute', top: '-40px', right: '-40px',
            width: '180px', height: '180px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.06)', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', bottom: '-30px', left: '30%',
            width: '120px', height: '120px', borderRadius: '50%',
            background: 'rgba(255,199,44,0.08)', pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, flex: 1, minWidth: '240px' }}>
            <p style={{
              margin: '0 0 0.4rem 0',
              fontSize: '0.82rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '1.2px',
              color: 'rgba(255,255,255,0.65)',
            }}>
              Our Commitment
            </p>
            <h3 style={{
              margin: 0,
              fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.3,
            }}>
              Every product that leaves our facility meets our quality promise — every single day.
            </h3>
          </div>

          <div style={{
            display: 'flex',
            gap: '2.5rem',
            position: 'relative',
            zIndex: 1,
            flexWrap: 'wrap',
          }}>
            {[
              { value: '100%', label: 'Hygienic Process' },
              { value: 'Daily', label: 'Quality Checks' },
              { value: 'Zero', label: 'Compromise' },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center', minWidth: '80px' }}>
                <div style={{
                  fontSize: '1.9rem',
                  fontWeight: 900,
                  color: 'var(--secondary-gold)',
                  fontFamily: 'var(--font-serif)',
                  lineHeight: 1,
                  marginBottom: '0.3rem',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.8px',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Component-scoped styles */}
      <style>{`
        .qh-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .qh-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease !important;
        }

        .qh-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 16px 40px rgba(0,0,0,0.08) !important;
        }

        @media (max-width: 1024px) {
          .qh-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          #quality-hygiene {
            padding: 80px 0;
          }
        }

        @media (max-width: 640px) {
          .qh-grid {
            grid-template-columns: 1fr;
          }

          #quality-hygiene {
            padding: 60px 0;
          }
        }
      `}</style>
    </section>
  );
};

export default QualityHygiene;
