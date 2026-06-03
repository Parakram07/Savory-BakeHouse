/* ==========================================================================
   SAVORY BAKEHOUSE - Contact Section (Final Clean + EmailJS + Original UI)
   ========================================================================== */

import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ChevronDown } from 'lucide-react';
import emailjs from "@emailjs/browser";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    if (!formState.name || !formState.email || !formState.message) {
      alert("Please fill all required fields.");
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formState.email)) {
      alert("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    const serviceID = "service_zz7csgk";
    const templateID = "template_o6mazwd";
    const publicKey = "etqbgtOE3MlYhpO-Z";

    const templateParams = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      subject: formState.subject,
      message: formState.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setSubmitSuccess(true);

      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
      });

      setTimeout(() => setSubmitSuccess(false), 7000);

    } catch (error) {
      console.error("EMAILJS ERROR:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section section-bg-cream" style={{ overflow: 'hidden' }}>
      <div className="container">

        {/* SECTION HEADER */}
        <div className="section-header">
          <span style={{
            fontWeight: 700,
            fontSize: '0.9rem',
            color: 'var(--primary-purple)',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            marginBottom: '0.5rem',
            display: 'inline-block'
          }}>
            Connect With Us
          </span>

          <h2>We'd Love to Hear From You</h2>
          <p>
            Whether you want to pre-order sourdough, design celebration cakes, or ask about catering—get in touch!
          </p>
        </div>

        <div className="grid grid-cols-2 gap-12" style={{ alignItems: 'flex-start' }}>

          {/* LEFT SIDE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            {/* INFO CARDS */}
            <div className="grid grid-cols-2 gap-4 contact-info-grid">

              <div className="card" style={cardStyle("#9E2A8C")}>
                <MapPin size={20} />
                <div>
                  <h4>Our Location</h4>
                  <p>Nadipur-3, Pokhara, Nepal</p>
                </div>
              </div>

              <div className="card" style={cardStyle("#FFC72C")}>
                <Phone size={20} />
                <div>
                  <h4>Phone</h4>
                  <p>+977-9867667837</p>
                </div>
              </div>

              <div className="card" style={cardStyle("#9E2A8C")}>
                <Mail size={20} />
                <div>
                  <h4>Email</h4>
                  <p>info@savorybakehouse.com</p>
                </div>
              </div>

              <div className="card" style={cardStyle("#009E49")}>
                <Clock size={20} />
                <div>
                  <h4>Hours</h4>
                  <p>7:00 AM – 8:00 PM</p>
                </div>
              </div>

            </div>

            {/* MAP */}
            <div style={mapWrapperStyle}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.142628545023!2d83.9894053!3d28.2345519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39959443ccb08669%3A0xf289d0b8443f6d24!2sSavory%20Bakehouse!5e0!3m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="card" style={formCardStyle}>

            <h3 style={{ fontSize: "1.6rem", marginBottom: "0.5rem" }}>
              Send an Inquiry
            </h3>

            <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>
              We usually respond within 2 hours.
            </p>

            {submitSuccess ? (
              <div style={{ textAlign: 'center' }}>
                <CheckCircle size={64} color="green" />
                <h4>Dhanyabaad!</h4>
                <p>Our Team will contact you shortly.</p>

                <button
                  className="btn btn-outline btn-sm"
                  onClick={() => setSubmitSuccess(false)}
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={formStyle}>

                <input name="name" placeholder="Full Name" value={formState.name} onChange={handleInputChange} className="form-input" />
                <input name="email" placeholder="Email" value={formState.email} onChange={handleInputChange} className="form-input" />
                <input name="phone" placeholder="Phone" value={formState.phone} onChange={handleInputChange} className="form-input" />

                {/* Updated Select with hidden default arrow */}
                <div style={{ position: "relative" }}>
                  <select 
                    name="subject" 
                    value={formState.subject} 
                    onChange={handleInputChange} 
                    className="form-input"
                    style={{
                      paddingRight: "40px",
                      appearance: "none",
                      WebkitAppearance: "none",
                      MozAppearance: "none"
                    }}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="cake">Cake Order</option>
                    <option value="catering">Catering</option>
                  </select>

                  <ChevronDown size={18} style={chevronStyle} />
                </div>

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formState.message}
                  onChange={handleInputChange}
                  className="form-input"
                  rows="4"
                />

                <button className="btn btn-primary" disabled={isSubmitting}>
                  {isSubmitting ? "Preparing Oven..." : <>Send Message <Send size={16} /></>}
                </button>

              </form>
            )}

          </div>

        </div>
      </div>

      {/* RESPONSIVE */}
      <style>{`
        @media (max-width: 1024px) {
          .contact-info-grid {
            grid-template-columns: 1fr !important;
          }
        }

        /* Additional safety for hiding default arrow */
        .form-input {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
        }
      `}</style>
    </section>
  );
};

/* ================= STYLES ================= */

const cardStyle = (color) => ({
  padding: "1.5rem",
  display: "flex",
  gap: "0.75rem",
  alignItems: "flex-start",
  borderLeft: `4px solid ${color}`
});

const mapWrapperStyle = {
  height: "280px",
  borderRadius: "12px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
};

const formCardStyle = {
  padding: "3rem 2.5rem",
  background: "var(--bg-card)"
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem"
};

const chevronStyle = {
  position: "absolute",
  right: "14px",
  top: "50%",
  transform: "translateY(-50%)",
  pointerEvents: "none",
  color: "var(--primary-purple)",
  zIndex: 2
};

export default Contact;