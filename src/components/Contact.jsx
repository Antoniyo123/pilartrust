import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const handleServicePage = () => {
    window.location.href = '/getintouch';
  };

  // Brands/Companies that have been handled
  const brands = [
    'PT ASTRA INTERNATIONAL',
    'PT TELKOM INDONESIA',
    'PT PERTAMINA',
    'PT BANK MANDIRI',
    'PT UNILEVER INDONESIA',
    'PT TOYOTA ASTRA MOTOR',
    'PT INDOFOOD',
    'PT KIMIA FARMA',
    'PT GARUDA INDONESIA',
    'PT PLN',
    'PT INDONESIA POWER',
    'PT KRAKATAU STEEL',
    'PT SEMEN INDONESIA',
    'PT WIJAYA KARYA',
    'PT ADHI KARYA'
  ];

  return (
    <section className="contact-container" id="contact">
      {/* Top Label */}
      <div className="contact-top">
        <div className="contact-top__label">Let's Connect</div>
      </div>

      <div className="contact-main">
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-header__title">
            <span>GET YOUR</span>
            <span className="highlight">ISO CERTIFICATION</span>
          </h2>
          <p className="contact-header__subtitle">
            Contact us today for a free consultation and start your certification journey
          </p>
        </div>

        {/* Running Text - Trusted Companies */}
        <div className="contact-brands">
          <div className="contact-brands__label">
            Trusted by Leading Companies
          </div>
          <div className="contact-brands__wrapper">
            <div className="contact-brands__track">
              {[...brands, ...brands].map((brand, index) => (
                <div key={index} className="contact-brands__item">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-grid">
          {/* Address */}
          <div className="contact-card">
            <div className="contact-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3 className="contact-card__label">Office Address</h3>
            <p className="contact-card__info">
              Ruko Tiara Buncit Blok D12,<br />
              Jl. Kemang Utara IX, Pancoran,<br />
              Jakarta Selatan 12760
            </p>
          </div>

          {/* Email */}
          <div className="contact-card">
            <div className="contact-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h3 className="contact-card__label">Email</h3>
            <p className="contact-card__info">
              info@pilartrust.com
            </p>
          </div>

          {/* Phone */}
          <div className="contact-card">
            <div className="contact-card__icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3 className="contact-card__label">Phone & WhatsApp</h3>
            <p className="contact-card__info">
              +62 21 5252 4567<br />
              +62 812 3456 7890
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="contact-cta">
          <div className="contact-cta__content">
            <h3 className="contact-cta__title">Ready to Get Certified?</h3>
            <p className="contact-cta__text">
              Schedule a free consultation with our ISO experts today and discover 
              how we can help your organization achieve certification excellence.
            </p>
          </div>
          <button
            className="contact-cta__button"
            onClick={handleServicePage}
          >
            Book Consultation
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;