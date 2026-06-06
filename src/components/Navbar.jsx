/* ==========================================================================
   SAVORY BAKEHOUSE - Responsive Navigation Bar
   ========================================================================== */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import logoImg from '../assets/logo.webp';
import savoryTypo from '../assets/savory-typo.webp';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Our Products' },
    { id: 'school-supply', label: 'School Supply' },
    { id: 'retail-partner', label: 'Retail Partner' },
    { id: 'contact', label: 'Contact Us' }
  ];

  // Handle scroll detection for background transparency and active link highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const navbarOffset = 120; // threshold offset from top
      let matchedSection = null;

      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is at or above the threshold, and the bottom is below it
          if (rect.top <= navbarOffset && rect.bottom > navbarOffset) {
            matchedSection = link.id;
            break;
          }
        }
      }

      // Special case: if we are at the absolute bottom of the page, highlight the contact section
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 15;
      if (isAtBottom) {
        matchedSection = 'contact';
      }

      if (matchedSection) {
        setActiveSection(matchedSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <header 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          zIndex: 1000,
          display: 'flex',
          alignItems: 'center',
          transition: 'var(--transition-smooth)',
          boxShadow: isScrolled ? 'var(--shadow-md)' : 'none',
          backgroundColor: isScrolled ? 'rgba(255, 253, 246, 0.95)' : 'rgba(255, 253, 246, 0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled ? '1px solid var(--border-medium)' : '1px solid transparent'
        }}
      >
        <div 
          className="container" 
          style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          
          {/* 1. Logo Brand Area (Far Left Column) */}
          <a 
            href="#home" 
            onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }}
            style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}
          >
            <img 
              src={logoImg} 
              alt="Savory BakeHouse Logo" 
              style={{ height: '54px', width: '54px', objectFit: 'contain', transition: 'var(--transition-fast)' }} 
            />
            <img
              src={savoryTypo}
              alt="Savory BakeHouse"
              style={{ height: '140px', width: 'auto', objectFit: 'contain' }}
            />
          </a>

          {/* 2. Desktop Navigation Links (Middle Column) */}
          <nav className="desktop-only" style={{ marginInline: 'auto' }}>
            <ul style={{ display: 'flex', listStyle: 'none', gap: '2rem', margin: 0, padding: 0 }}>
              {navLinks.map((link) => (
                <li key={link.id} style={{ position: 'relative' }}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: activeSection === link.id ? 'var(--primary-purple)' : 'var(--text-body)',
                      position: 'relative',
                      padding: '0.5rem 0.25rem',
                      transition: 'var(--transition-fast)'
                    }}
                    className="nav-link-item"
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <span style={{
                        position: 'absolute',
                        bottom: '-6px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '5px',
                        height: '5px',
                        backgroundColor: 'var(--secondary-gold)',
                        borderRadius: '50%'
                      }} />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. Action Button Area (Far Right Column) */}
          <div className="desktop-only" style={{ flexShrink: 0 }}>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => handleLinkClick('contact')}
              style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              Order Now <ArrowRight size={14} />
            </button>
          </div>

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-heading)',
              padding: '0.5rem'
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Slide-in Mobile Menu Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '300px',
          backgroundColor: 'var(--bg-cream)',
          zIndex: 9999,
          boxShadow: 'var(--shadow-lg)',
          transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem 1.5rem',
          borderLeft: '1px solid var(--border-medium)'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-heading)' }}>
            Menu
          </span>
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-heading)' }}
          >
            <X size={24} />
          </button>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: 0, margin: 0 }}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color: activeSection === link.id ? 'var(--primary-purple)' : 'var(--text-body)',
                  display: 'block',
                  padding: '0.5rem 0',
                  borderBottom: `1px solid ${activeSection === link.id ? 'rgba(158, 42, 140, 0.15)' : 'transparent'}`
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <button 
            className="btn btn-primary" 
            style={{ width: '100%' }}
            onClick={() => handleLinkClick('contact')}
          >
            Order Now
          </button>
        </div>
      </div>

      {/* Dark overlay for mobile drawer */}
      {isMobileMenuOpen && (
        <div 
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(31, 22, 20, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 9998
          }}
        />
      )}

      {/* Inline styles for responsive Navbar classes (since we use Vanilla CSS) */}
      <style>{`
        .nav-link-item:hover {
          color: var(--primary-purple) !important;
        }

        @media (min-width: 1025px) {
          .desktop-only { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
        @media (max-width: 1024px) {
          .desktop-only { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
};

export default Navbar;
