/* ==========================================================================
   SAVORY BAKEHOUSE - Products Section with Interactive Filtering
   ========================================================================== */

import React, { useState } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { products, productCategories } from '../data/productsData';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Helper to format badge colors based on our design system tokens
  const getBadgeStyle = (badgeType) => {
    switch (badgeType) {
      case 'purple':
        return {
          backgroundColor: 'rgba(158, 42, 140, 0.1)',
          border: '1px solid rgba(158, 42, 140, 0.25)',
          color: 'var(--primary-purple)'
        };
      case 'gold':
        return {
          backgroundColor: 'rgba(255, 199, 44, 0.15)',
          border: '1px solid rgba(255, 199, 44, 0.3)',
          color: 'var(--text-heading)'
        };
      case 'green':
        return {
          backgroundColor: 'rgba(0, 158, 73, 0.08)',
          border: '1px solid rgba(0, 158, 73, 0.25)',
          color: 'var(--fresh-green)'
        };
      default:
        return {
          backgroundColor: 'rgba(92, 78, 75, 0.1)',
          border: '1px solid rgba(92, 78, 75, 0.2)',
          color: 'var(--text-body)'
        };
    }
  };

  const handleWhatsAppInquiry = (productName) => {
    const message = encodeURIComponent(`Hello Savory BakeHouse, I would like to inquire about ordering the "${productName}" from your baking factory!`);
    const whatsappUrl = `https://wa.me/9779867667837?text=${message}`; // Placeholder contact info
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="products" className="section section-bg-cream">
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
            Our Bakery Menu
          </span>
          <h2>Explore Our Artisanal Delights</h2>
          <p>
            Every single crumb is kneaded by hand, proofed slowly, and stone-baked daily using natural local ingredients and infinite care.
          </p>
        </div>

        {/* Categories Tab Swapper */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
            padding: '0.25rem',
            backgroundColor: 'var(--bg-beige)',
            borderRadius: 'var(--radius-full)',
            width: 'fit-content',
            marginInline: 'auto'
          }}
          className="tab-container"
        >
          {productCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.9rem',
                padding: '0.6rem 1.5rem',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                cursor: 'pointer',
                transition: 'var(--transition-smooth)',
                backgroundColor: activeCategory === category.id ? 'var(--primary-purple)' : 'transparent',
                color: activeCategory === category.id ? 'var(--text-light)' : 'var(--text-body)'
              }}
              className="tab-button"
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-3 gap-8 products-grid">
          {filteredProducts.map((product) => (
            <article 
              key={product.id}
              className="card"
              style={{
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                backgroundColor: 'var(--bg-card)',
                textAlign: 'left'
              }}
            >
              {/* Product Media */}
              <div style={{
                width: '100%',
                height: '240px',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                  className="product-img"
                />
                
                {/* Float Badge */}
                {product.badge && (
                  <span style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    padding: '0.35rem 0.9rem',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                    boxShadow: 'var(--shadow-sm)',
                    ...getBadgeStyle(product.badgeType)
                  }}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Body Content */}
              <div style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1
              }}>
                {/* Category Metadata */}
                <span style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  color: 'var(--primary-purple)',
                  letterSpacing: '1px',
                  marginBottom: '0.25rem',
                  display: 'block'
                }}>
                  {productCategories.find(c => c.id === product.category)?.label.split(' ')[1] || product.category}
                </span>

                {/* Product Name */}
                <h3 style={{
                  fontSize: '1.35rem',
                  marginBottom: '0.75rem',
                  color: 'var(--text-heading)',
                  lineHeight: 1.3
                }}>
                  {product.name}
                </h3>

                {/* Product Ingredients description */}
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-body)',
                  lineHeight: 1.5,
                  marginBottom: '1.5rem',
                  flexGrow: 1
                }}>
                  {product.description}
                </p>

                {/* Pricing and Action Footer */}
                <div style={{
                  borderTop: '1px solid var(--border-light)',
                  paddingTop: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 'auto'
                }}>
                  {/* Prices */}
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {product.originalPrice && (
                      <span style={{
                        fontSize: '0.8rem',
                        textDecoration: 'line-through',
                        color: 'var(--text-muted)'
                      }}>
                        {product.originalPrice}
                      </span>
                    )}
                    <span style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      color: 'var(--text-heading)',
                      fontFamily: 'var(--font-sans)'
                    }}>
                      {product.price}
                    </span>
                  </div>

                  {/* Inquiry Action */}
                  <button
                    onClick={() => handleWhatsAppInquiry(product.name)}
                    className="btn btn-outline btn-sm"
                    style={{
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.45rem 1rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.85rem'
                    }}
                    title="Order / Inquire via WhatsApp"
                  >
                    Inquire <ShoppingBag size={14} />
                  </button>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>

      <style>{`
        /* Zoom-on-hover effect for cards */
        .card:hover .product-img {
          transform: scale(1.08);
        }

        @media (max-width: 1024px) {
          .products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.5rem !important;
          }
        }

        @media (max-width: 767px) {
          .tab-container {
            width: 100% !important;
            border-radius: var(--radius-md) !important;
            padding: 0.5rem !important;
            gap: 0.5rem !important;
          }
          
          .tab-button {
            width: 100% !important;
            padding: 0.5rem 1rem !important;
          }

          .products-grid {
            grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Products;
