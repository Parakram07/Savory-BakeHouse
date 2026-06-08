import React from 'react';
import { Store, Truck, ArrowRight, ShieldCheck, Clock, Award, Activity } from 'lucide-react';

const RetailPartnerProgram = () => {
  const partners = [
    {
      type: 'Supermarkets & Retail Chains',
      schedule: 'Daily Morning Dispatch',
      details: 'Consistent daily supply of sliced sandwich breads, burger buns, and packaged bakery products for high-turnover retail shelves.'
    },
    {
      type: 'Independent Grocers & Local Outlets',
      schedule: 'Scheduled Route Delivery',
      details: 'Reliable bakery product delivery through planned sales van routes for local shops and retail outlets.'
    },
    {
      type: 'Distributors & Wholesalers',
      schedule: 'Bulk Supply Support',
      details: 'Bulk-ready bakery products, carton-packed delivery, and coordinated supply support for wholesale and distribution partners.'
    }
  ];

  return (
    <section id="retail-partner" className="section section-bg-cream retail-partner-section">
      <div className="container">
        
        <div className="retail-layout-grid">
          
          {/* Left Column: Factory Manufacturing & Logistics Profile */}
          <div className="monitor-container" style={{ position: 'relative' }}>
            <div className="factory-monitor-card">
              {/* Header with Online status */}
              <div className="monitor-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <Award size={18} style={{ color: 'var(--primary-purple)' }} />
                  <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-heading)', fontFamily: 'var(--font-sans)' }}>
                    SUPPLY & DISTRIBUTION PROFILE
                  </h4>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div className="pulse-dot"></div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--fresh-green)', textTransform: 'uppercase' }}>
                    Active Distribution
                  </span>
                </div>
              </div>

              {/* Static Specifications List */}
              <div className="specs-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                
                {/* Spec 1: Production Capacity */}
                <div className="spec-row" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="spec-bullet-icon" style={{ backgroundColor: 'rgba(158, 42, 140, 0.08)', color: 'var(--primary-purple)', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Activity size={18} />
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 0.15rem 0', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', fontFamily: 'var(--font-sans)' }}>
                      Production Capacity
                    </h5>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.4 }}>
                      Fresh bakery products prepared daily to support regular retail, school, and institutional supply.
                    </p>
                  </div>
                </div>

                {/* Spec 2: Hygiene Compliance */}
                <div className="spec-row" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="spec-bullet-icon" style={{ backgroundColor: 'rgba(0, 158, 73, 0.08)', color: 'var(--fresh-green)', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 0.15rem 0', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', fontFamily: 'var(--font-sans)' }}>
                      Hygiene Standards
                    </h5>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.4 }}>
                      Products are prepared in a clean production environment with proper handling, hygiene practices, and quality checks.
                    </p>
                  </div>
                </div>

                {/* Spec 3: Wholesale Distribution */}
                <div className="spec-row" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="spec-bullet-icon" style={{ backgroundColor: 'rgba(255, 199, 44, 0.12)', color: 'var(--primary-purple)', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Truck size={18} style={{ color: 'var(--primary-purple)' }} />
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 0.15rem 0', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', fontFamily: 'var(--font-sans)' }}>
                      Wholesale Distribution
                    </h5>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.4 }}>
                      Regular supply through sales vans and distribution partners to support retail shelves and local outlets.
                    </p>
                  </div>
                </div>

                {/* Spec 4: Order Lead Time */}
                <div className="spec-row" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="spec-bullet-icon" style={{ backgroundColor: 'rgba(158, 42, 140, 0.08)', color: 'var(--primary-purple)', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Clock size={18} />
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 0.15rem 0', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', fontFamily: 'var(--font-sans)' }}>
                      Supply Lead Time
                    </h5>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.4 }}>
                      Reliable coordination for daily, scheduled, and bulk supply requirements.
                    </p>
                  </div>
                </div>

                {/* Spec 5: Custom Formulation */}
                <div className="spec-row" style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div className="spec-bullet-icon" style={{ backgroundColor: 'rgba(0, 158, 73, 0.08)', color: 'var(--fresh-green)', width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Award size={18} style={{ color: 'var(--fresh-green)' }} />
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 0.15rem 0', fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-heading)', fontFamily: 'var(--font-sans)' }}>
                      Product Support
                    </h5>
                    <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-body)', lineHeight: 1.4 }}>
                      Consistent bakery products prepared for retail, school, and institutional supply needs.
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Right Column: Editorial Text & Partner Details */}
          <div className="editorial-container">
            <div className="program-badge gold" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: 'rgba(255, 199, 44, 0.12)',
              border: '1px solid rgba(255, 199, 44, 0.35)',
              color: 'var(--text-heading)',
              padding: '0.45rem 1rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              <Store size={16} />
              <span>Commercial Retail Network</span>
            </div>

            <h2 className="section-title" style={{ fontSize: '2.75rem', color: 'var(--text-heading)', marginBottom: '1.5rem', position: 'relative', textAlign: 'left' }}>
              Partner With a Reliable Bakery Supplier
            </h2>
            
            <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', lineHeight: 1.7, marginBottom: '2.5rem', textAlign: 'left' }}>
              Savory Bakehouse is a leading commercial manufacturer, supplying high-quality baked goods to supermarkets, wholesale distributors, and retail networks. Partner with us for a reliable supply chain and consistent quality.
            </p>

            {/* Vertical list of partner options */}
            <div className="partner-options-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {partners.map((partner, index) => (
                <div key={index} className="partner-detail-row" style={{
                  display: 'flex',
                  gap: '1.25rem',
                  borderLeft: '3px solid var(--border-medium)',
                  paddingLeft: '1.25rem',
                  transition: 'var(--transition-smooth)',
                  textAlign: 'left'
                }}>
                  <div style={{ flexGrow: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.35rem' }}>
                      <h4 style={{ margin: 0, fontSize: '1.15rem', color: 'var(--text-heading)', fontWeight: 700 }}>{partner.type}</h4>
                      <span className="schedule-badge">{partner.schedule}</span>
                    </div>
                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                      {partner.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Action Area (Separated child of grid to enable specific mobile grid-ordering) */}
          <div className="cta-action-area" style={{ textAlign: 'left' }}>
            <button 
              className="btn btn-secondary"
              onClick={() => {
                const selectEl = document.querySelector('select[name="subject"]');
                if (selectEl) {
                  selectEl.value = 'retail';
                  const event = new Event('change', { bubbles: true });
                  selectEl.dispatchEvent(event);
                }
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Become a Retail Partner <ArrowRight size={18} />
            </button>
          </div>

        </div>

      </div>

      <style>{`
        .retail-partner-section {
          padding-top: 120px;
          padding-bottom: 120px;
          border-bottom: 1px solid var(--border-light);
        }

        .retail-layout-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 2rem 5rem;
        }

        .monitor-container {
          grid-column: 1;
          grid-row: 1 / span 2;
          align-self: center;
        }

        .editorial-container {
          grid-column: 2;
          grid-row: 1;
        }

        .cta-action-area {
          grid-column: 2;
          grid-row: 2;
        }

        /* B2B Status Monitor Styling */
        .factory-monitor-card {
          background-color: var(--bg-card);
          border: 1px solid var(--border-medium);
          border-radius: var(--radius-lg);
          padding: 2.25rem;
          box-shadow: var(--shadow-lg);
          text-align: left;
        }

        .monitor-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 1.25rem;
          margin-bottom: 1.5rem;
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background-color: var(--fresh-green);
          border-radius: 50%;
          box-shadow: 0 0 0 0 rgba(0, 158, 73, 0.7);
          animation: pulse-indicator-glow 2s infinite;
        }

        @keyframes pulse-indicator-glow {
          0% { box-shadow: 0 0 0 0 rgba(0, 158, 73, 0.5); }
          70% { box-shadow: 0 0 0 10px rgba(0, 158, 73, 0); }
          100% { box-shadow: 0 0 0 0 rgba(0, 158, 73, 0); }
        }

        /* Right Side Row Badging */
        .schedule-badge {
          font-size: 0.75rem;
          font-weight: 700;
          background-color: rgba(158, 42, 140, 0.06);
          color: var(--primary-purple);
          padding: 0.15rem 0.5rem;
          border-radius: var(--radius-sm);
        }

        .partner-detail-row:hover {
          border-left-color: var(--primary-purple) !important;
          background-color: rgba(158, 42, 140, 0.02);
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .retail-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }

          .monitor-container {
            grid-column: 1 !important;
            grid-row: 2 !important; /* Row 2: middle (above CTA, below intro text) */
            align-self: stretch;
          }

          .editorial-container {
            grid-column: 1 !important;
            grid-row: 1 !important; /* Row 1: top */
          }

          .cta-action-area {
            grid-column: 1 !important;
            grid-row: 3 !important; /* Row 3: bottom */
          }

          .retail-partner-section {
            padding-top: 80px;
            padding-bottom: 80px;
          }
        }
      `}</style>
    </section>
  );
};

export default RetailPartnerProgram;
