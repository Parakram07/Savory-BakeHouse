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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const navbarOffset = 120;
      let matchedSection = null;

      for (const link of navLinks) {
        const element = document.getElementById(link.id);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= navbarOffset && rect.bottom > navbarOffset) {
            matchedSection = link.id;
            break;
          }
        }
      }

      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 15;

      if (isAtBottom) {
        matchedSection = 'contact';
      }

      if (matchedSection) {
        setActiveSection(matchedSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleLinkClick = (id) => {
    setIsMobileMenuOpen(false);

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
          backgroundColor: isScrolled
            ? 'rgba(255, 253, 246, 0.95)'
            : 'rgba(255, 253, 246, 0.7)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: isScrolled
            ? '1px solid var(--border-medium)'
            : '1px solid transparent'
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
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexShrink: 0
            }}
          >
            <img
              src={logoImg}
              alt="Savory BakeHouse Logo"
              style={{
                height: '54px',
                width: '54px',
                objectFit: 'contain'
              }}
            />

            <img
              src={savoryTypo}
              alt="Savory BakeHouse"
              style={{
                height: '140px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </a>

          {/* Right Side Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              flexShrink: 0
            }}
          >
            <button
              className="btn btn-primary btn-sm"
              onClick={() => handleLinkClick('contact')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}
            >
              Get in Touch <ArrowRight size={14} />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="menu-btn"
              style={{
                background: isMobileMenuOpen
                  ? 'rgba(158, 42, 140, 0.08)'
                  : 'transparent',
                border: '1px solid rgba(158, 42, 140, 0.12)',
                borderRadius: '50%',
                width: '52px',
                height: '52px',
                cursor: 'pointer',
                color: isMobileMenuOpen
                  ? 'var(--secondary-gold)'
                  : 'var(--primary-purple)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                flexShrink: 0
              }}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          maxWidth: '320px',
          backgroundColor: 'var(--bg-cream)',
          zIndex: 9999,
          boxShadow: 'var(--shadow-lg)',
          transform: isMobileMenuOpen
            ? 'translateX(0)'
            : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '2rem 1.5rem',
          borderLeft: '1px solid var(--border-medium)'
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem'
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.25rem',
              fontWeight: 700,
              color: 'var(--text-heading)'
            }}
          >
            Menu
          </span>

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-heading)'
            }}
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            padding: 0,
            margin: 0
          }}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: '1.1rem',
                  color:
                    activeSection === link.id
                      ? 'var(--primary-purple)'
                      : 'var(--text-body)',
                  display: 'block',
                  padding: '0.5rem 0',
                  borderBottom: `1px solid ${
                    activeSection === link.id
                      ? 'rgba(158, 42, 140, 0.15)'
                      : 'transparent'
                  }`,
                  transition: 'var(--transition-fast)'
                }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
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

      <style>{`
        .menu-btn:hover {
          background: rgba(158, 42, 140, 0.08) !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(158, 42, 140, 0.12);
        }

        .menu-btn:active {
          transform: scale(0.96);
        }

        @media (max-width: 480px) {
          .menu-btn {
            width: 46px !important;
            height: 46px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;