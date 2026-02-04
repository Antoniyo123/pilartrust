import React, { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
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

  // Scroll animations
  const [heroRef, heroVisible] = useScrollAnimation({ threshold: 0.2 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.1 });

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
    <div className="get_in_touch__page-container">
      {/* Top Banner Section */}
      <section 
        ref={heroRef}
        className={`get_in_touch__banner-section get_in_touch__scroll-animate ${heroVisible ? 'get_in_touch__is-visible' : ''}`}
      >
        <div className="get_in_touch__banner-wrapper">
          <div className="get_in_touch__banner-inner">
            <div className="get_in_touch__top-badge get_in_touch__fade-in-anim get_in_touch__delay-1">Let's Connect</div>
            <h1 className="get_in_touch__main-heading get_in_touch__fade-up-anim get_in_touch__delay-2">
              Get Your ISO <span className="get_in_touch__accent-text">Certification</span>
            </h1>
            <p className="get_in_touch__intro-text get_in_touch__fade-up-anim get_in_touch__delay-3">
              Partner with us to achieve international standards certification. 
              Our expert team is ready to guide you through every step of the certification process.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section 
        ref={contentRef}
        className={`get_in_touch__main-section get_in_touch__scroll-animate ${contentVisible ? 'get_in_touch__is-visible' : ''}`}
      >
        <div className="get_in_touch__main-wrapper">
          {/* Left Column - Info */}
          <div className="get_in_touch__left-column">
            <div className="get_in_touch__intro-block get_in_touch__fade-up-anim get_in_touch__delay-1">
              <h2 className="get_in_touch__section-heading">Why Choose Pilar</h2>
              <p className="get_in_touch__section-text">
                We're more than just a certification body. We're your strategic partner in achieving 
                excellence through internationally recognized standards.
              </p>
            </div>

            <div className="get_in_touch__benefits-list">
              <div className="get_in_touch__benefit-card get_in_touch__slide-left-anim get_in_touch__delay-2">
                <div className="get_in_touch__benefit-number">01</div>
                <div className="get_in_touch__benefit-details">
                  <h3 className="get_in_touch__benefit-heading">Proven Expertise</h3>
                  <p className="get_in_touch__benefit-description">Certified auditors with extensive industry experience</p>
                </div>
              </div>

              <div className="get_in_touch__benefit-card get_in_touch__slide-left-anim get_in_touch__delay-3">
                <div className="get_in_touch__benefit-number">02</div>
                <div className="get_in_touch__benefit-details">
                  <h3 className="get_in_touch__benefit-heading">Fast Processing</h3>
                  <p className="get_in_touch__benefit-description">Streamlined certification process with quick turnaround</p>
                </div>
              </div>

              <div className="get_in_touch__benefit-card get_in_touch__slide-left-anim get_in_touch__delay-4">
                <div className="get_in_touch__benefit-number">03</div>
                <div className="get_in_touch__benefit-details">
                  <h3 className="get_in_touch__benefit-heading">Full Support</h3>
                  <p className="get_in_touch__benefit-description">Comprehensive guidance from consultation to certification</p>
                </div>
              </div>
            </div>

            <div className="get_in_touch__details-box get_in_touch__fade-up-anim get_in_touch__delay-5">
              <div className="get_in_touch__detail-row">
                <div className="get_in_touch__detail-label">Email</div>
                <div className="get_in_touch__detail-value">info@pilar-iso.com</div>
              </div>

              <div className="get_in_touch__detail-row">
                <div className="get_in_touch__detail-label">Phone</div>
                <div className="get_in_touch__detail-value">+62 21 5252 4567</div>
              </div>

              <div className="get_in_touch__detail-row">
                <div className="get_in_touch__detail-label">Location</div>
                <div className="get_in_touch__detail-value">Jakarta Selatan, Indonesia</div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="get_in_touch__right-column get_in_touch__slide-right-anim get_in_touch__delay-2">
            <div className="get_in_touch__card">
              <div className="get_in_touch__card-header">
                <h2 className="get_in_touch__card-title">Request Consultation</h2>
                <p className="get_in_touch__card-subtitle">Fill out the form and we'll get back to you within 24 hours</p>
              </div>

              <div className="get_in_touch__form">
                <div className="get_in_touch__fields-row">
                  <div className="get_in_touch__field">
                    <label htmlFor="name" className="get_in_touch__label">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="get_in_touch__input"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="get_in_touch__field">
                    <label htmlFor="email" className="get_in_touch__label">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="get_in_touch__input"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="get_in_touch__fields-row">
                  <div className="get_in_touch__field">
                    <label htmlFor="phone" className="get_in_touch__label">Phone *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="get_in_touch__input"
                      placeholder="+62 812 3456 7890"
                    />
                  </div>

                  <div className="get_in_touch__field">
                    <label htmlFor="company" className="get_in_touch__label">Company</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="get_in_touch__input"
                      placeholder="Company name"
                    />
                  </div>
                </div>

                <div className="get_in_touch__field">
                  <label htmlFor="service" className="get_in_touch__label">ISO Standard *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="get_in_touch__dropdown"
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

                <div className="get_in_touch__field">
                  <label htmlFor="message" className="get_in_touch__label">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="get_in_touch__textarea"
                    rows="5"
                    placeholder="Tell us about your certification needs..."
                  ></textarea>
                </div>

                <button 
                  onClick={handleSubmit}
                  className={`get_in_touch__submit-btn ${isSubmitting ? 'get_in_touch__is-submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  <span className="get_in_touch__btn-text">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </span>
                  <svg className="get_in_touch__btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>

                {submitStatus === 'success' && (
                  <div className="get_in_touch__alert-success">
                    <svg className="get_in_touch__alert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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