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

            {/* SOCIAL LINKS */}
            <div className="footer__social">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="LinkedIn"
              >
                {/* svg */}
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="Twitter"
              >
                {/* svg */}
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="Instagram"
              >
                {/* svg */}
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="YouTube"
              >
                {/* svg */}
              </a>
            </div>
          </div>

          {/* LINKS */}
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

        {/* BOTTOM */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; 2026 Pilar ISO Certification. All rights reserved.
          </p>

          <div className="footer__legal">
            <button type="button" className="footer__legal-link">
              Privacy Policy
            </button>
            <span className="footer__divider">|</span>
            <button type="button" className="footer__legal-link">
              Terms of Service
            </button>
            <span className="footer__divider">|</span>
            <button type="button" className="footer__legal-link">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
