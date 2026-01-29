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
              Get Your ISO <span className="highlight">Certification</span>
            </h1>
            <p className="hero-description">
              Partner with us to achieve international standards certification. 
              Our expert team is ready to guide you through every step of the certification process.
            </p>
          </div>
          
         
        </div>
      </section>

      {/* Main Content */}
      <section className="content-section">
        <div className="content-wrapper">
          {/* Left Column - Info */}
          <div className="info-column">
            <div className="info-block">
              <h2 className="section-title">Why Choose Pilar</h2>
              <p className="section-description">
                We're more than just a certification body. We're your strategic partner in achieving 
                excellence through internationally recognized standards.
              </p>
            </div>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-number">01</div>
                <div className="feature-content">
                  <h3 className="feature-title">Proven Expertise</h3>
                  <p className="feature-text">Certified auditors with extensive industry experience</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-number">02</div>
                <div className="feature-content">
                  <h3 className="feature-title">Fast Processing</h3>
                  <p className="feature-text">Streamlined certification process with quick turnaround</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-number">03</div>
                <div className="feature-content">
                  <h3 className="feature-title">Full Support</h3>
                  <p className="feature-text">Comprehensive guidance from consultation to certification</p>
                </div>
              </div>
            </div>

            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-label">Email</div>
                <div className="contact-value">info@pilar-iso.com</div>
              </div>

              <div className="contact-item">
                <div className="contact-label">Phone</div>
                <div className="contact-value">+62 21 5252 4567</div>
              </div>

              <div className="contact-item">
                <div className="contact-label">Location</div>
                <div className="contact-value">Jakarta Selatan, Indonesia</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="form-column">
            <div className="form-card">
              <div className="form-header">
                <h2 className="form-title">Request Consultation</h2>
                <p className="form-subtitle">Fill out the form and we'll get back to you within 24 hours</p>
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
                      placeholder="Your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone *</label>
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
                    <label htmlFor="company" className="form-label">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="service" className="form-label">ISO Standard *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Select ISO standard</option>
                    <option value="iso9001">ISO 9001 - Quality Management</option>
                    <option value="iso27001">ISO 27001 - Information Security</option>
                    <option value="iso14001">ISO 14001 - Environmental Management</option>
                    <option value="iso45001">ISO 45001 - Health & Safety</option>
                    <option value="iso22000">ISO 22000 - Food Safety</option>
                    <option value="iso37001">ISO 37001 - Anti-Bribery</option>
                    <option value="other">Other Standards</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="5"
                    placeholder="Tell us about your certification needs..."
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
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

                {submitStatus === 'success' && (
                  <div className="success-message">
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