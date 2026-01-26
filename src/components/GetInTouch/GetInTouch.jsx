// GetInTouch.jsx
import React, { useState } from 'react';
import './GetInTouch.css';

const GetInTouchPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      alert('Mohon lengkapi semua field yang wajib diisi (*)');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      console.log('Form Data:', formData);
      
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-badge">Let's Connect</div>
            <h1 className="hero-title">
              Transform Your Vision Into <span className="highlight">Reality</span>
            </h1>
            <p className="hero-description">
              Partner with us to unlock innovative solutions tailored to your business needs. 
              Our expert team is ready to elevate your brand and drive measurable results.
            </p>
          </div>
          
          <div className="hero-stats">
            <div className="stat-box">
              <div className="stat-value">500+</div>
              <div className="stat-text">Projects Delivered</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">200+</div>
              <div className="stat-text">Happy Clients</div>
            </div>
            <div className="stat-box">
              <div className="stat-value">15+</div>
              <div className="stat-text">Expert Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="content-wrapper">
          {/* Left Column - Info */}
          <div className="info-column">
            <div className="info-block">
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-description">
                We're more than just a service provider. We're your strategic partner in growth, 
                combining creativity with data-driven insights to deliver exceptional results.
              </p>
            </div>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Proven Expertise</h3>
                  <p className="feature-text">Years of experience across diverse industries</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Fast Execution</h3>
                  <p className="feature-text">Agile approach with quick turnaround times</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
                <div className="feature-content">
                  <h3 className="feature-title">Dedicated Support</h3>
                  <p className="feature-text">24/7 support throughout your journey</p>
                </div>
              </div>
            </div>

            <div className="contact-cards">
              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label">Email</div>
                  <div className="contact-card-value">info@pilardigital.com</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label">Phone</div>
                  <div className="contact-card-value">+62 812 3456 7890</div>
                </div>
              </div>

              <div className="contact-card">
                <div className="contact-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div className="contact-card-content">
                  <div className="contact-card-label">Location</div>
                  <div className="contact-card-value">Jakarta, Indonesia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="form-column">
            <div className="form-card">
              <div className="form-header">
                <h2 className="form-title">Send us a Message</h2>
                <p className="form-subtitle">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <div className="form-body">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your Company (optional)"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">Service Required *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select a service</option>
                    <option value="branding">Brand Strategy & Identity</option>
                    <option value="digital">Digital Marketing</option>
                    <option value="creative">Creative Content Production</option>
                    <option value="consulting">Business Consulting</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="5"
                    placeholder="Tell us about your project or requirements..."
                  ></textarea>
                </div>

                <button 
                  onClick={handleSubmit}
                  className={`form-submit ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  <span className="submit-text">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <svg className="submit-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                  </svg>
                </button>

                {submitStatus === 'success' && (
                  <div className="success-alert">
                    <svg className="success-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <span>Message sent successfully! We'll contact you soon.</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInTouchPage;