import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const handleSmoothScroll = (e, targetId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    closeMobileMenu();
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
        <Link to="/" onClick={closeMobileMenu}>
          <img src={require("../img/logo3.png")} className="nav__logo-img" alt="Pilar Logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="nav__center">
          <ul className="nav__menu nav__menu--desktop">
            <li className="nav__item">
              <a 
                href="/#home" 
                className="nav__link"
                onClick={(e) => handleSmoothScroll(e, '#home')}
              >
                HOME
              </a>
            </li>
            <li className="nav__item">
              <Link 
                to="/services" 
                className="nav__link"
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
            
            <li className="nav__item">
              <Link 
                to="/about" 
                className="nav__link"
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>

        {/* Updated: Link to /contact page instead of anchor */}
        <Link 
          to="/contact" 
          className="nav__cta nav__cta--desktop"
          onClick={closeMobileMenu}
        >
          <span className="nav__cta-icon">↗</span> GET IN TOUCH
        </Link>

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
              <a 
                href="/#home" 
                className="nav__link" 
                onClick={(e) => handleSmoothScroll(e, '#home')}
              >
                HOME
              </a>
            </li>
            <li className="nav__item">
              <Link 
                to="/services" 
                className="nav__link" 
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className="nav__item">
              <a 
                href="/#certification" 
                className="nav__link" 
                onClick={(e) => handleSmoothScroll(e, '#certification')}
              >
                CERTIFICATION
              </a>
            </li>
            <li className="nav__item">
              <Link 
                to="/about" 
                className="nav__link" 
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav__item">
              {/* Updated: Link to /contact page */}
              <Link 
                to="/contact" 
                className="nav__cta" 
                onClick={closeMobileMenu}
              >
                <span className="nav__cta-icon">↗</span> GET IN TOUCH
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;