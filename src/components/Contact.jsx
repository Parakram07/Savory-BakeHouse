/* ==========================================================================
   SAVORY BAKEHOUSE - Contact Section with Map & Form
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

    // 🚨 Prevent double submit
    if (isSubmitting) return;

    setIsSubmitting(true);

    // ✅ Basic validation (IMPORTANT)
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

    // EmailJS config
    const serviceID = "service_emlkkdx";
    const templateID = "template_fo4zpxl";
    const publicKey = "1miJhhuELoaszcgQF";

    const templateParams = {
      name: formState.name,
      email: formState.email,
      phone: formState.phone,
      subject: formState.subject,
      message: formState.message,
    };

    try {
      console.log("Sending EmailJS request...");

      const result = await emailjs.send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      console.log("EMAILJS SUCCESS:", result);

      setSubmitSuccess(true);

      // Reset form
      setFormState({
        name: "",
        email: "",
        phone: "",
        subject: "general",
        message: "",
      });

      // Optional: auto reset success message
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 7000);

    } catch (error) {
      console.error("EMAILJS ERROR FULL:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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

          {/* LEFT PANEL */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

            <div className="grid grid-cols-2 gap-4 contact-info-grid">

              <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '0.75rem' }}>
                <MapPin size={20} />
                <div>
                  <h4>Our Location</h4>
                  <p>Nadipur-3, Pokhara, Nepal</p>
                </div>
              </div>

              <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '0.75rem' }}>
                <Phone size={20} />
                <div>
                  <h4>Phone</h4>
                  <p>+977-9867667837</p>
                </div>
              </div>

              <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '0.75rem' }}>
                <Mail size={20} />
                <div>
                  <h4>Email</h4>
                  <p>info@savorybakehouse.com</p>
                </div>
              </div>

              <div className="card" style={{ padding: '1.5rem', display: 'flex', gap: '0.75rem' }}>
                <Clock size={20} />
                <div>
                  <h4>Hours</h4>
                  <p>7:00 AM – 8:00 PM</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT PANEL */}
          <div className="card" style={{ padding: '3rem 2.5rem' }}>

            <h3>Send an Inquiry</h3>

            {submitSuccess ? (
              <div style={{ textAlign: 'center' }}>
                <CheckCircle size={64} color="green" />
                <h4>Message Sent!</h4>
                <p>We will contact you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                <input
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  required
                />

                <input
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  required
                />

                <input
                  name="phone"
                  value={formState.phone}
                  onChange={handleInputChange}
                  placeholder="Phone"
                />

                <select
                  name="subject"
                  value={formState.subject}
                  onChange={handleInputChange}
                >
                  <option value="general">General Inquiry</option>
                  <option value="cake">Cake Order</option>
                  <option value="catering">Catering</option>
                </select>

                <textarea
                  name="message"
                  value={formState.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                />

                <button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;