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
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__heading">Company</h4>
              <ul className="footer__list">
                <li><a href="#about">About</a></li>
                <li><a href="#certification">Process</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer__column">
              <h4 className="footer__heading">Connect</h4>
              <ul className="footer__list">
                <li><a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <p className="footer__info">
            Ruko Tiara Buncit Blok D12, Jl. Kemang Utara IX, Pancoran, Jakarta Selatan 12760<br />
            <a href="mailto:info@pilar-iso.com">info@pilartrust.com</a> • <a href="tel:+622152524567">+62 21 5252 4567</a>
          </p>

          <p className="footer__copyright">
            © 2026 PT Pilar Integrasi Solusindo
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;