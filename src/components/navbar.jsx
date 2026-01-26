import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__container">
        <a href="#home"  onClick={closeMobileMenu}>
          <img src={require("../img/logo3.png")} className="nav__logo-img" alt="Pilar Logo" />
        </a>

        {/* Desktop Menu */}
        <div className="nav__center">
          <ul className="nav__menu nav__menu--desktop">
            <li className="nav__item">
              <a href="#home" className="nav__link">HOME</a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">SERVICES</a>
            </li>
            <li className="nav__item">
              <a href="#certification" className="nav__link">CERTIFICATION</a>
            </li>
             <li className="nav__item">
              <a href="#about" className="nav__link">ABOUT</a>
            </li>
          </ul>
        </div>

        <a href="#contact" className="nav__cta nav__cta--desktop">
          <span className="nav__cta-icon">↗</span> GET IN TOUCH
        </a>

        {/* Hamburger Button */}
        <button 
          className={`nav__hamburger ${isMobileMenuOpen ? 'nav__hamburger--active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span className="nav__hamburger-line"></span>
          <span className="nav__hamburger-line"></span>
          <span className="nav__hamburger-line"></span>
        </button>

        {/* Mobile Menu */}
        <div className={`nav__mobile-menu ${isMobileMenuOpen ? 'nav__mobile-menu--active' : ''}`}>
          <ul className="nav__menu nav__menu--mobile">
            <li className="nav__item">
              <a href="#representation" className="nav__link" onClick={closeMobileMenu}>REPRESENTATION</a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link" onClick={closeMobileMenu}>SERVICES</a>
            </li>
            <li className="nav__item">
              <a href="#careers" className="nav__link" onClick={closeMobileMenu}>CAREERS</a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__cta" onClick={closeMobileMenu}>
                <span className="nav__cta-icon">↗</span> GET IN TOUCH
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;