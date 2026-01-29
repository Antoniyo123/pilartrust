import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main Content */}
        <div className="footer__content">
          {/* Brand Section */}
          <div className="footer__brand">
            <h3 className="footer__logo">PILAR</h3>
            <p className="footer__tagline">ISO Certification Excellence</p>
            <p className="footer__description">
              Leading international standards certification since 2008.
            </p>
            
            <div className="footer__social">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="YouTube"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__heading">Services</h4>
              <ul className="footer__list">
                <li><a href="#services">ISO 9001</a></li>
                <li><a href="#services">ISO 27001</a></li>
                <li><a href="#services">ISO 14001</a></li>
                <li><a href="#services">ISO 45001</a></li>
                <li><a href="#services">ISO 22000</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__heading">Company</h4>
              <ul className="footer__list">
                <li><a href="#about">About Us</a></li>
                <li><a href="#certification">Our Process</a></li>
                <li><a href="#about">Our Team</a></li>
                <li><a href="#contact">Careers</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__heading">Contact</h4>
              <ul className="footer__list footer__list--contact">
                <li>Menara Jamsostek</li>
                <li>Jakarta Selatan 12710</li>
                <li><a href="mailto:info@pilar-iso.com">info@pilar-iso.com</a></li>
                <li><a href="tel:+622152524567">+62 21 5252 4567</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 Pilar ISO. All rights reserved.
          </p>

          <div className="footer__legal">
            <button type="button" className="footer__legal-link">
              Privacy
            </button>
            <span className="footer__divider">•</span>
            <button type="button" className="footer__legal-link">
              Terms
            </button>
            <span className="footer__divider">•</span>
            <button type="button" className="footer__legal-link">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;