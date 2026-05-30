/* ==========================================================================
   SAVORY BAKEHOUSE - Contact Section with Map & Form
   ========================================================================== */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ExternalLink, ChevronDown } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock network request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Log for compliance
      console.log('Savory BakeHouse - Contact Form Submission:', formState);
      
      // Reset form
      setFormState({
        name: '',
        email: '',
        phone: '',
        subject: 'general',
        message: ''
      });
    }, 1800);
  };

  return (
    <section id="contact" className="section section-bg-cream" style={{ overflow: 'hidden' }}>
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
            Connect With Us
          </span>
          <h2>We'd Love to Hear From You</h2>
          <p>
            Whether you want to pre-order warm sourdough, design your dream celebration cake, or ask about catering—get in touch!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12" style={{ alignItems: 'flex-start' }}>
          
          {/* Contact Left Panel - Details & Mock Map */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Quick Cards Grid */}
            <div className="grid grid-cols-2 gap-4 contact-info-grid">
              
              {/* Address Card */}
              <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary-purple)', padding: '0.25rem', backgroundColor: 'rgba(158,42,140,0.06)', borderRadius: '8px' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                    Our Location
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.4 }}>
                    Nadipur-3, Pokhara, <br />
                    Nepal (Opposite Main Gate)
                  </p>
                </div>
              </div>

              {/* Call Card */}
              <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--secondary-gold)', padding: '0.25rem', backgroundColor: 'rgba(255,199,44,0.15)', borderRadius: '8px' }}>
                  <Phone size={20} style={{ color: 'var(--text-heading)' }} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                    Phone Numbers
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.4 }}>
                    +977-61-530124 <br />
                    +977-9856032145
                  </p>
                </div>
              </div>

              {/* Email Card */}
              <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--primary-purple)', padding: '0.25rem', backgroundColor: 'rgba(158,42,140,0.06)', borderRadius: '8px' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                    Email Address
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.4 }} className="email-link">
                    hello@savorybakehouse.com
                    info@savorybake.com
                  </p>
                </div>
              </div>

              {/* Clock Card */}
              <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <div style={{ color: 'var(--fresh-green)', padding: '0.25rem', backgroundColor: 'rgba(0,158,73,0.06)', borderRadius: '8px' }}>
                  <Clock size={20} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontFamily: 'var(--font-sans)', fontSize: '1rem', fontWeight: 800, color: 'var(--text-heading)' }}>
                    Bakehouse Hours
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-body)', lineHeight: 1.4 }}>
                    7:00 AM – 8:00 PM <br />
                    Open 7 Days a Week
                  </p>
                </div>
              </div>

            </div>

            {/* Premium Stylized Vector Map Mock */}
            <div 
              style={{
                position: 'relative',
                height: '240px',
                borderRadius: 'var(--radius-md)',
                backgroundColor: 'var(--bg-beige)',
                border: '1px solid var(--border-medium)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-sm)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              className="map-mock"
              title="Click to Open Google Maps"
              onClick={() => window.open('https://maps.google.com/?q=Nadipur,Pokhara,Nepal', '_blank')}
            >
              {/* Abstract Map Art Grid and Curves (representing Pokhara lake/city) */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                opacity: 0.12,
                backgroundImage: 'radial-gradient(var(--text-muted) 1px, transparent 1px), linear-gradient(0deg, transparent 49%, var(--text-muted) 50%, transparent 51%)',
                backgroundSize: '16px 16px, 100% 40px',
                zIndex: 0
              }} />
              
              {/* Lake curve representation */}
              <div style={{
                position: 'absolute',
                left: '-50px',
                bottom: '-50px',
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                backgroundColor: 'rgba(158, 42, 140, 0.05)',
                border: '2px dashed rgba(158, 42, 140, 0.15)',
                zIndex: 0
              }} />

              {/* Pokhara Streets representations */}
              <div style={{ position: 'absolute', width: '2px', height: '100%', backgroundColor: 'rgba(158,42,140,0.08)', left: '40%', transform: 'rotate(15deg)', zIndex: 0 }} />
              <div style={{ position: 'absolute', width: '100%', height: '2px', backgroundColor: 'rgba(158,42,140,0.08)', top: '50%', transform: 'rotate(-5deg)', zIndex: 0 }} />
              <div style={{ position: 'absolute', width: '2px', height: '100%', backgroundColor: 'rgba(158,42,140,0.08)', left: '70%', transform: 'rotate(-25deg)', zIndex: 0 }} />

              {/* Central Glowing pulsing pin */}
              <div 
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  zIndex: 2
                }}
              >
                {/* Outer pulsing ring */}
                <div style={{
                  position: 'absolute',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 199, 44, 0.35)',
                  boxShadow: 'var(--shadow-glow)',
                  zIndex: 0,
                  transform: 'scale(1)'
                }}
                className="pulse-effect"
                />
                
                {/* Pin Head */}
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50% 50% 50% 0',
                  backgroundColor: 'var(--primary-purple)',
                  transform: 'rotate(-45deg)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid var(--bg-card)',
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 1
                }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--secondary-gold)',
                    transform: 'rotate(45deg)'
                  }} />
                </div>

                {/* Floating label box */}
                <div style={{
                  backgroundColor: 'var(--bg-card)',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-md)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--text-heading)',
                  marginTop: '0.5rem',
                  border: '1px solid var(--border-medium)',
                  zIndex: 3,
                  whiteSpace: 'nowrap'
                }}>
                  Savory BakeHouse - Nadipur-3
                </div>
              </div>

              {/* Floating button */}
              <span style={{
                position: 'absolute',
                bottom: '10px',
                right: '10px',
                backgroundColor: 'rgba(31, 22, 20, 0.75)',
                color: '#FFF',
                padding: '0.35rem 0.75rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.75rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                zIndex: 2,
                transition: 'var(--transition-fast)'
              }}
              className="map-btn"
              >
                Directions <ExternalLink size={12} />
              </span>

            </div>

          </div>

          {/* Contact Right Panel - High-converting Form */}
          <div className="card" style={{ padding: '3rem 2.5rem', backgroundColor: 'var(--bg-card)' }}>
            
            <h3 style={{ fontSize: '1.6rem', color: 'var(--text-heading)', marginBottom: '0.5rem' }}>
              Send an Inquiry
            </h3>
            
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Fill out this form and our team in Nadipur will review your message and reach back to you within 2 hours!
            </p>

            {submitSuccess ? (
              /* Success Animation Sequence */
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '2rem 0',
                  textAlign: 'center'
                }}
                className="animate-slide-up"
              >
                <div style={{ color: 'var(--fresh-green)' }}>
                  <CheckCircle size={64} />
                </div>
                
                <h4 style={{ fontSize: '1.8rem', color: 'var(--text-heading)', fontFamily: 'var(--font-serif)', margin: 0 }}>
                  Dhanyabaad!
                </h4>
                
                <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', margin: 0, maxWidth: '320px', lineHeight: 1.6 }}>
                  Thank you! Your message has been received with love. Our bakers in Nadipur will review your request and contact you shortly.
                </p>

                <button 
                  className="btn btn-outline btn-sm"
                  style={{ marginTop: '1rem' }}
                  onClick={() => setSubmitSuccess(false)}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* Core Form */
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                
                {/* Name */}
                <div className="form-group">
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="form-input"
                    required
                  />
                  <label htmlFor="name" className="form-label">Full Name</label>
                </div>

                {/* Email & Phone side by side */}
                <div style={{ display: 'flex', gap: '1rem' }} className="form-row">
                  <div className="form-group" style={{ flex: 1 }}>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      placeholder=" "
                      className="form-input"
                      required
                    />
                    <label htmlFor="email" className="form-label">Email Address</label>
                  </div>

                  <div className="form-group" style={{ flex: 1 }}>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleInputChange}
                      placeholder=" "
                      className="form-input"
                      required
                    />
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                  </div>
                </div>

                {/* Subject Dropdown */}
                <div className="form-group">
                  <select
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleInputChange}
                    className="form-input"
                    style={{ appearance: 'none', cursor: 'pointer', paddingRight: '2.5rem' }}
                    required
                  >
                    <option value="general">General Baking Inquiry</option>
                    <option value="cake">Custom Celebration Cake Order</option>
                    <option value="wholesale">Wholesale B2B Partnerships</option>
                    <option value="catering">Event/Party Catering</option>
                  </select>
                  
                  {/* Styled Dropdown Chevron Arrow */}
                  <ChevronDown 
                    size={18} 
                    style={{ 
                      position: 'absolute', 
                      right: '1.25rem', 
                      top: '50%', 
                      transform: 'translateY(-50%)', 
                      color: 'var(--primary-purple)',
                      pointerEvents: 'none' 
                    }} 
                  />
                  <label 
                    htmlFor="subject" 
                    className="form-label"
                    style={{
                      top: '-0.6rem',
                      left: '1rem',
                      fontSize: '0.8rem',
                      padding: '0 0.5rem',
                      backgroundColor: 'var(--bg-card)',
                      color: 'var(--primary-purple)',
                      fontWeight: 600,
                      borderRadius: 'var(--radius-sm)'
                    }}
                  >
                    Inquiry Category
                  </label>
                </div>

                {/* Message */}
                <div className="form-group">
                  <textarea 
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleInputChange}
                    placeholder=" "
                    className="form-input"
                    required
                  />
                  <label htmlFor="message" className="form-label">Your Message / Order Details</label>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  style={{ 
                    marginTop: '0.5rem', 
                    width: '100%',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Preparing Oven...'
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>

      <style>{`
        /* Glowing pulse animation for mock map pin */
        @keyframes pulseRing {
          0% { transform: scale(0.95); opacity: 0.8; }
          50% { transform: scale(1.4); opacity: 0; }
          100% { transform: scale(0.95); opacity: 0; }
        }

        .pulse-effect {
          animation: pulseRing 2s cubic-bezier(0.25, 0, 0, 1) infinite;
        }

        .map-mock:hover .map-btn {
          background-color: var(--primary-purple) !important;
        }

        @media (max-width: 1024px) {
          .contact-info-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }
        }

        @media (max-width: 767px) {
          .form-row {
            flex-direction: column;
            gap: 0 !important;
          }
          
          .email-link {
            word-break: break-all;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;
