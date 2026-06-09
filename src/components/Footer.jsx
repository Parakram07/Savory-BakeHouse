/* ==========================================================================
   SAVORY BAKEHOUSE - Visually Upgraded Premium Dark Footer
   ========================================================================== */

import React, { useState } from 'react';
import { MessageSquare, Send, Heart, MapPin, Phone, Mail, Clock } from 'lucide-react';
import logoWhiteImg from '../assets/logo-white.webp';
import savoryTypoWhite from '../assets/savory-typo-white.webp';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      console.log('Savory BakeHouse - Newsletter Subscription:', email);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLinkClick = (id) => {
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
    <footer
      style={{
        background: 'linear-gradient(135deg, #150D0C 0%, #291225 100%)',
        color: '#FAF5EC',
        paddingTop: '6rem',
        paddingBottom: '2.5rem',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Top sleek glowing brand color border line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(90deg, var(--primary-purple) 0%, var(--secondary-gold) 50%, var(--fresh-green) 100%)',
        zIndex: 10
      }} />

      {/* Decorative background glows */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-10%',
        width: '350px',
        height: '350px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(158, 42, 140, 0.08) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '-10%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 199, 44, 0.05) 0%, rgba(0,0,0,0) 70%)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Main Footer Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 0.8fr 1fr 1fr',
            gap: '3rem',
            paddingBottom: '4rem',
            borderBottom: '1px solid rgba(250, 245, 236, 0.06)',
            marginBottom: '2.5rem'
          }}
          className="footer-grid"
        >

          {/* Column 1: Brand details & hours */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

            {/* Elegant logo wrapper */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <img
                src={logoWhiteImg}
                alt="Savory BakeHouse Logo"
                style={{
                  height: '90px',
                  width: '90px',
                  objectFit: 'contain'
                }}
              />
              <img
                src={savoryTypoWhite}
                alt="Savory BakeHouse"
                style={{
                  height: '100px',
                  width: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>

            <p style={{ fontSize: '0.92rem', color: 'rgba(250,245,236,0.65)', lineHeight: 1.7, margin: 0, textAlign: 'left' }}>
              Savory BakeHouse is a bakery manufacturing and distribution company in Pokhara, supplying fresh and hygienic bakery products to retailers, schools, and supply partners.
            </p>

            {/* Glowing Hours Badge */}
            <div style={{
              backgroundColor: 'rgba(255, 199, 44, 0.04)',
              border: '1px solid rgba(255, 199, 44, 0.08)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              textAlign: 'left',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'flex-start'
            }}>
              <Clock size={20} style={{ color: 'var(--secondary-gold)', flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h4 style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '0.35rem', fontFamily: 'var(--font-sans)' }}>
                  Supply Inquiry
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--secondary-gold)', margin: 0, fontWeight: 700 }}>
                  Connect with us for regular bakery product supply. <br />
                </p>
              </div>
            </div>

          </div>

          {/* Column 2: Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
            <h4 style={{
              color: '#FFFFFF',
              fontSize: '0.95rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontFamily: 'var(--font-sans)',
              borderLeft: '3px solid var(--secondary-gold)',
              paddingLeft: '0.75rem',
              lineHeight: 1.2
            }}>
              Quick Navigation
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.95rem' }}>
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'About Our Story' },
                { id: 'products', label: 'Bakery Products' },
                { id: 'school-supply', label: 'School Supply' },
                { id: 'retail-partner', label: 'Retail Partner' },
                { id: 'contact', label: 'Contact Us' }
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                    style={{ color: 'rgba(250,245,236,0.7)', display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                    className="footer-link-premium"
                  >
                    <span className="bullet-arrow" style={{ color: 'var(--secondary-gold)', opacity: 0, width: 0, transition: 'var(--transition-fast)' }}>›</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
            <h4 style={{
              color: '#FFFFFF',
              fontSize: '0.95rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontFamily: 'var(--font-sans)',
              borderLeft: '3px solid var(--primary-purple)',
              paddingLeft: '0.75rem',
              lineHeight: 1.2
            }}>
              Get In Touch
            </h4>

            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', fontSize: '0.92rem', color: 'rgba(250,245,236,0.75)' }}>
              <li style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(158,42,140,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary-purple)',
                  flexShrink: 0
                }}>
                  <MapPin size={16} />
                </div>
                <span style={{ lineHeight: 1.5 }}>Nadipur-3, Pokhara, Nepal</span>
              </li>
              <li
                style={{
                  display: 'flex',
                  gap: '0.85rem',
                  alignItems: 'center'
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,199,44,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--secondary-gold)',
                    flexShrink: 0
                  }}
                >
                  <Phone size={16} style={{ color: 'var(--text-heading)' }} />
                </div>

                <a
                  href="tel:061-572347"
                  style={{
                    color: 'inherit',
                    textDecoration: 'none'
                  }}
                >
                  061-572347
                </a>
              </li>
              <li style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,158,73,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--fresh-green)',
                  flexShrink: 0
                }}>
                  <Mail size={16} />
                </div>
                <span style={{ fontSize: '0.88rem' }}>info.savorynp@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Premium Stylized Google Map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
            <h4 style={{
              color: '#FFFFFF',
              fontSize: '0.95rem',
              fontWeight: 800,
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              fontFamily: 'var(--font-sans)',
              borderLeft: '3px solid var(--fresh-green)',
              paddingLeft: '0.75rem',
              lineHeight: 1.2
            }}>
              Find Us On Map
            </h4>

            {/* Embedded Stylized Map Container */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: 'var(--radius-md)',
              padding: '6px',
              boxShadow: 'var(--shadow-sm)',
              overflow: 'hidden'
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.142628545023!2d83.9894053!3d28.2345519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959443ccb08669%3A0xf289d0b8443f6d24!2sSavory%20Bakehouse!5e1!3m2!1sen!2snp!4v1780309177381!5m2!1sen!2snp"
                width="100%"
                height="150"
                style={{
                  border: 0,
                  borderRadius: '10px',
                  display: 'block',
                  filter: 'invert(90%) hue-rotate(180deg) grayscale(10%) contrast(90%) opacity(80%)'
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Savory BakeHouse Google Map Location"
              />
            </div>

            {/* Luxury floating social handles */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              {[
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
                  label: 'Facebook',
                  url: 'https://facebook.com/'
                },
                {
                  icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
                  label: 'Instagram',
                  url: 'https://instagram.com/'
                },
                {
                  icon: <MessageSquare size={18} />,
                  label: 'WhatsApp',
                  url: 'https://wa.me/9779867667837'
                }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FAF5EC',
                    transition: 'var(--transition-smooth)'
                  }}
                  className="footer-social-badge"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>

        </div>

        {/* Bottom copyright details & beat micro-animations */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.85rem',
            color: 'rgba(250,245,236,0.45)',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '0.5rem'
          }}
          className="footer-bottom"
        >
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} Savory BakeHouse. All Rights Reserved.
          </p>
        </div>

      </div>

      {/* Styled inline selectors for premium footer styling */}
      <style>{`
        /* Heartbeat micro-animation */
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          25% { transform: scale(1.2); }
          50% { transform: scale(1); }
          75% { transform: scale(1.2); }
        }

        .footer-link-premium {
          transition: var(--transition-fast);
        }

        .footer-link-premium:hover {
          color: var(--secondary-gold) !important;
          transform: translateX(6px);
        }

        .footer-link-premium:hover .bullet-arrow {
          opacity: 1 !important;
          width: 8px !important;
        }

        .footer-social-badge:hover {
          background-color: var(--primary-purple) !important;
          border-color: var(--primary-purple) !important;
          color: #FFF !important;
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 5px 15px rgba(158, 42, 140, 0.4);
        }

        .footer-newsletter-premium-input:focus {
          border-color: var(--primary-purple) !important;
          background-color: rgba(0, 0, 0, 0.4) !important;
          box-shadow: 0 0 10px rgba(158, 42, 140, 0.2);
        }

        .footer-newsletter-premium-btn:hover {
          background-color: var(--secondary-gold) !important;
          color: var(--text-heading) !important;
          box-shadow: 0 4px 10px rgba(255, 199, 44, 0.3);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 3rem !important;
          }
        }

        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
            gap: 2.5rem !important;
          }
          
          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
