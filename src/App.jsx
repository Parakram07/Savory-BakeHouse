/* ==========================================================================
   SAVORY BAKEHOUSE - Main Application Layout (React Entry Point)
   ========================================================================== */

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';

import SchoolSupplyProgram from './components/SchoolSupplyProgram';
import RetailPartnerProgram from './components/RetailPartnerProgram';
import QualityHygiene from './components/QualityHygiene';
import CeoMessage from './components/CeoMessage';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const handleWhatsAppChat = () => {
    const phoneNumber = "9779867667837"; // Pokhara phone number
    const message = encodeURIComponent("Hello Savory BakeHouse! I would like to inquire about ordering delicious treats from your factory.");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-cream)' }}>
      {/* Dynamic Navigation Bar */}
      <Navbar />

      {/* Main Single Page Sections */}
      <main style={{ flexGrow: 1 }}>
        {/* Home/Hero Section */}
        <Hero />

        {/* About Us Narrative & Metric Highlights */}
        <About />

        {/* Dynamic Menu & Tabbed Products Showcase */}
        <Products />

        {/* School Supply Program Section */}
        <SchoolSupplyProgram />
        {/* Retail Partner Program Section */}
        <RetailPartnerProgram />

        {/* Quality & Hygiene Standards Section */}
        <QualityHygiene />

        {/* Auto-playing Testimonials Review Slider */}
        <CeoMessage />

        {/* Contact info, coordinates, mock map & Floating form */}
        <Contact />
      </main>

      {/* Multi-column Roasted Cocoa Footer */}
      <Footer />

      {/* Premium WhatsApp Floating Chat Button */}
      <button
        onClick={handleWhatsAppChat}
        className="whatsapp-floating-btn"
        title="Chat with Us on WhatsApp"
        aria-label="Chat with Savory BakeHouse on WhatsApp"
      >
        {/* Custom High-res SVG WhatsApp Logo */}
        <svg 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          style={{ display: 'block', pointerEvents: 'none' }}
        >
          <path d="M12.004 2C6.5 2 2.008 6.5 2.008 12c0 1.9.5 3.7 1.5 5.3L2 22l4.9-1.3c1.5.8 3.2 1.3 5.1 1.3 5.5 0 9.992-4.5 9.992-10S17.508 2 12.004 2zm0 18c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-2.9.8.8-2.8-.2-.3c-.9-1.5-1.4-3.2-1.4-5.1 0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8zm4.6-6.3c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.8.9-.1.1-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.3-.8-.7-1.3-1.6-1.5-1.9-.2-.3 0-.4.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.3-.4.1-.2 0-.3-.1-.5-.1-.2-.5-1.2-.7-1.7-.2-.5-.4-.4-.5-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9 1-1.1 2-.2 1 .5 2 1.5 3.3 1 1.3 2.5 2.3 3.9 2.9.4.2.8.3 1.1.4.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.3-.2-.5-.3z" />
        </svg>

        {/* Hover Tooltip Bubble */}
        <span className="whatsapp-tooltip">Chat with Us</span>
      </button>

      {/* Interactive styling and pulsing animations */}
      <style>{`
        .whatsapp-floating-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 56px;
          height: 56px;
          background-color: #25D366;
          color: #FFFFFF;
          border-radius: 50%;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 99999;
          box-shadow: 0 8px 24px rgba(37, 211, 102, 0.35);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          animation: waPulse 2s infinite;
        }

        .whatsapp-floating-btn:hover {
          transform: scale(1.08) translateY(-4px);
          background-color: #20ba5a;
          box-shadow: 0 12px 30px rgba(32, 186, 90, 0.5);
        }

        .whatsapp-tooltip {
          position: absolute;
          right: 70px;
          background-color: var(--bg-dark);
          color: #FFF;
          padding: 0.5rem 1rem;
          border-radius: var(--radius-sm);
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 700;
          white-space: nowrap;
          box-shadow: var(--shadow-md);
          opacity: 0;
          pointer-events: none;
          transform: translateX(10px);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .whatsapp-floating-btn:hover .whatsapp-tooltip {
          opacity: 1;
          transform: translateX(0);
        }

        @keyframes waPulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          70% { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }

        @media (max-width: 767px) {
          .whatsapp-floating-btn {
            bottom: 1.5rem;
            right: 1.5rem;
            width: 50px;
            height: 50px;
          }
          
          .whatsapp-tooltip {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
