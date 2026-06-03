/* ==========================================================================
   SAVORY BAKEHOUSE - Message from the CEO Section
   ========================================================================== */

import React from 'react';
import { Quote, Sparkles, Award, ShieldCheck } from 'lucide-react';
import sooyogImg from '../assets/ceo/Sooyog.webp';

const CeoMessage = () => {
  return (
    <section id="ceo-message" className="section section-bg-beige">
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
            Our Leadership
          </span>
          <h2>A Message From Our CEO</h2>
          <p>
            Understand the heart, passion, and values that guide our stone ovens.
          </p>
        </div>

        {/* CEO Message Grid Layout */}
        <div className="grid grid-cols-2 gap-12" style={{ alignItems: 'center' }}>

          {/* Left Column: Stylized Portrait Frame */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }} className="ceo-media">

            {/* Visual offset glowing gold frame */}
            <div style={{
              position: 'absolute',
              width: '80%',
              height: '100%',
              border: '2px dashed var(--secondary-gold)',
              borderRadius: 'var(--radius-md)',
              top: '15px',
              left: '15px',
              zIndex: 0,
              opacity: 0.5
            }} />

            {/* CEO Portrait Container */}
            <div style={{
              position: 'relative',
              width: '80%',
              height: '420px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              border: '6px solid var(--bg-card)',
              zIndex: 1
            }}>
              <img
                src={sooyogImg}
                alt="Sooyog Shrestha - CEO of Savory BakeHouse"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />

              {/* CEO Info Tag Overlaid at Bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(180deg, rgba(31,22,20,0) 0%, rgba(31,22,20,0.9) 80%)',
                padding: '1.5rem',
                textAlign: 'left',
                color: '#FFF'
              }}>
                {/* <h4 style={{ color: '#FFF', margin: 0, fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-sans)' }}>
                  Sooyog Shrestha
                </h4>
                <p style={{ color: 'var(--secondary-gold)', margin: 0, fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  CEO & Founder, Savory BakeHouse
                </p> */}
              </div>
            </div>

            {/* Glowing floating trust badge */}
            <div style={{
              position: 'absolute',
              top: '-15px',
              right: '5%',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.75rem 1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: 'var(--shadow-md)',
              zIndex: 2
            }}>
              <ShieldCheck size={18} style={{ color: 'var(--fresh-green)' }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-heading)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Proud Pokhreli
              </span>
            </div>

          </div>

          {/* Right Column: Vision Statement Message */}
          <div style={{ textAlign: 'left' }} className="ceo-text">

            <div style={{ color: 'rgba(158, 42, 140, 0.15)', marginBottom: '1rem' }}>
              <Quote size={56} fill="rgba(158, 42, 140, 0.08)" />
            </div>

            <h3 style={{
              fontSize: '1.8rem',
              color: 'var(--text-heading)',
              marginBottom: '1.25rem',
              fontFamily: 'var(--font-serif)',
              lineHeight: 1.3
            }}>
              "Baking is a Sacred Promise of Nourishment, Quality, and Community."
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', color: 'var(--text-body)', fontSize: '1.05rem', lineHeight: 1.75 }}>
              <p>
                Namaste and a very warm welcome to Savory BakeHouse. When we first laid the stone hearth of our bakery in the beautiful locality of Nadipur, Pokhara, our vision was crystal clear: to revive the authentic, slow-fermented, natural art of artisanal baking.
              </p>

              <p>
                To us, baking is not just a commercial process; it is a sacred promise. We believe that what we put onto your family's table must be wholesome, healthy, and crafted with pure love. That is why we maintain an uncompromising standard on ingredients—using organic wheat ground in stone mills, pure pasture butter, and high-altitude wild honey sourced directly from Gandaki valley.
              </p>

              <p>
                We operate our open-concept kitchen under clinical hygiene protocols, ensuring safety in every crumb. We are incredibly grateful to our local Pokhara community for welcoming us into your daily breakfasts and life's sweetest celebrations. We pledge to continue baking for your trust, your health, and your joy.
              </p>
            </div>

            {/* Signature Area */}
            <div style={{
              marginTop: '2.5rem',
              borderTop: '1px solid var(--border-medium)',
              paddingTop: '1.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '2rem',
                  fontStyle: 'italic',
                  color: 'var(--primary-purple)',
                  margin: '0 0 0.15rem 0',
                  lineHeight: 1
                }}>
                  Sooyog Shrestha
                </p>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Chief Executive Officer, Savory BakeHouse
                </p>
              </div>

              {/* Dynamic stamp icon */}
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'rgba(0, 158, 73, 0.06)',
                border: '1px dashed var(--fresh-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--fresh-green)'
              }}
                title="Official Signature Stamp"
              >
                <Award size={20} />
              </div>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .ceo-media div[style*="height: '420px'"] {
            height: 360px !important;
          }
        }

        @media (max-width: 767px) {
          .ceo-media {
            margin-bottom: 3rem;
          }
          
          .ceo-media div[style*="height: '420px'"] {
            height: 320px !important;
            width: 100% !important;
          }

          .ceo-media div[style*="dashed"] {
            display: none !important; /* Hide background frame on mobile for clean fit */
          }

          .ceo-text {
            text-align: center !important;
          }

          .ceo-text h3 {
            font-size: 1.5rem !important;
          }

          .ceo-text div[style*="borderTop"] {
            flex-direction: column;
            gap: 1.5rem;
            align-items: center;
          }
        }
      `}</style>
    </section>
  );
};

export default CeoMessage;
