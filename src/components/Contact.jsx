import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">Get Your ISO Certification</h2>
          <p className="contact__subtitle">Contact us today for a free consultation</p>
        </div>
        
        <div className="contact__content">
          <div className="contact__grid">
            <div className="contact__card">
              <div className="contact__card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="contact__card-label">Office Address</h3>
              <p className="contact__card-info">
                Gedung Menara Jamsostek<br />
                Jl. Gatot Subroto No.38<br />
                Jakarta Selatan 12710
              </p>
              <button className="contact__card-button">Get Directions →</button>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <h3 className="contact__card-label">Email</h3>
              <p className="contact__card-info">
                info@pilar-iso.com<br />
                certification@pilar-iso.com
              </p>
              <button className="contact__card-button">Send Email →</button>
            </div>

            <div className="contact__card">
              <div className="contact__card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <h3 className="contact__card-label">Phone & WhatsApp</h3>
              <p className="contact__card-info">
                +62 21 5252 4567<br />
                +62 812 3456 7890
              </p>
              <button className="contact__card-button">Call Now →</button>
            </div>
          </div>

          <div className="contact__cta">
            <h3 className="contact__cta-title">Ready to get certified?</h3>
            <p className="contact__cta-text">Schedule a free consultation with our ISO experts today</p>
            <button className="contact__cta-button">Book Consultation</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;