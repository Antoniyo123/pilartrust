import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <h3 className="footer__logo">PILAR</h3>
            <p className="footer__tagline">ISO Certification Excellence</p>
            <p className="footer__description">
              Leading the way in international standards certification and management system excellence since 2008.
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="footer__social-link" aria-label="YouTube">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__heading">Services</h4>
              <ul className="footer__list">
                <li><a href="#services">ISO 9001</a></li>
                <li><a href="#services">ISO 27001</a></li>
                <li><a href="#services">ISO 14001</a></li>
                <li><a href="#services">ISO 45001</a></li>
                <li><a href="#services">ISO 22000</a></li>
                <li><a href="#services">ISO 37001</a></li>
              </ul>
            </div>
            
            <div className="footer__column">
              <h4 className="footer__heading">Company</h4>
              <ul className="footer__list">
                <li><a href="#about">About Us</a></li>
                <li><a href="#certification">Our Process</a></li>
                <li><a href="#about">Our Team</a></li>
                <li><a href="#contact">Careers</a></li>
                <li><a href="#contact">Partners</a></li>
              </ul>
            </div>
            
            <div className="footer__column">
              <h4 className="footer__heading">Resources</h4>
              <ul className="footer__list">
                <li><a href="#about">ISO Standards</a></li>
                <li><a href="#certification">Documentation</a></li>
                <li><a href="#contact">Case Studies</a></li>
                <li><a href="#contact">FAQs</a></li>
                <li><a href="#contact">Blog</a></li>
              </ul>
            </div>
            
            <div className="footer__column">
              <h4 className="footer__heading">Contact</h4>
              <ul className="footer__list footer__list--contact">
                <li>Gedung Menara Jamsostek</li>
                <li>Jl. Gatot Subroto No.38</li>
                <li>Jakarta Selatan 12710</li>
                <li><a href="mailto:info@pilar-iso.com">info@pilar-iso.com</a></li>
                <li><a href="tel:+622152524567">+62 21 5252 4567</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer__bottom">
          <p className="footer__copyright">&copy; 2026 Pilar ISO Certification. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <span className="footer__divider">|</span>
            <a href="#" className="footer__legal-link">Terms of Service</a>
            <span className="footer__divider">|</span>
            <a href="#" className="footer__legal-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;