import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('EN');
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detect active section on scroll (for home page)
  useEffect(() => {
    if (location.pathname === '/') {
      const handleScrollSpy = () => {
        const sections = ['home', 'certification'];
        let current = 'home';

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              current = section;
            }
          }
        }
        setActiveSection(current);
      };

      window.addEventListener('scroll', handleScrollSpy);
      handleScrollSpy(); // Initial check
      
      return () => window.removeEventListener('scroll', handleScrollSpy);
    }
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'EN' ? 'ID' : 'EN');
  };

  const handleSmoothScroll = (e, targetId, sectionName) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        setActiveSection(sectionName);
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

  // Determine navbar theme based on current route
  const getNavbarTheme = () => {
    const darkPages = ['/services', '/about', '/contact'];
    
    if (isScrolled) {
      return 'light';
    }
    
    if (darkPages.includes(location.pathname)) {
      return 'dark';
    }
    
    return 'light';
  };

  // Check if link is active
  const isActive = (path, section = null) => {
    if (section && location.pathname === '/') {
      return activeSection === section;
    }
    return location.pathname === path;
  };

  const navbarTheme = getNavbarTheme();

  return (
    <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''} nav--${navbarTheme}`}>
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
                className={`nav__link ${isActive('/', 'home') ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, '#home', 'home')}
              >
                HOME
              </a>
            </li>
            <li className="nav__item">
              <Link 
                to="/services" 
                className={`nav__link ${isActive('/services') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
            <li className="nav__item">
              <Link 
                to="/about" 
                className={`nav__link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
          </ul>
        </div>

        {/* Right side: Language Switcher + CTA */}
        <div className="nav__right">
          {/* Language Switcher */}
          <button 
            className="nav__lang-switcher"
            onClick={toggleLanguage}
            aria-label="Switch language"
          >
            <span className={`nav__lang-option ${language === 'EN' ? 'active' : ''}`}>EN</span>
            <span className="nav__lang-divider">/</span>
            <span className={`nav__lang-option ${language === 'ID' ? 'active' : ''}`}>ID</span>
          </button>

          {/* CTA Button */}
          <Link 
            to="/contact" 
            className={`nav__cta nav__cta--desktop ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMobileMenu}
          >
            <span className="nav__cta-icon">↗</span> GET IN TOUCH
          </Link>
        </div>

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
                className={`nav__link ${isActive('/', 'home') ? 'active' : ''}`}
                onClick={(e) => handleSmoothScroll(e, '#home', 'home')}
              >
                HOME
              </a>
            </li>
            <li className="nav__item">
              <Link 
                to="/services" 
                className={`nav__link ${isActive('/services') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                SERVICES
              </Link>
            </li>
           
            <li className="nav__item">
              <Link 
                to="/about" 
                className={`nav__link ${isActive('/about') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav__item">
              {/* Language Switcher Mobile */}
              <button 
                className="nav__lang-switcher nav__lang-switcher--mobile"
                onClick={toggleLanguage}
              >
                <span className={`nav__lang-option ${language === 'EN' ? 'active' : ''}`}>EN</span>
                <span className="nav__lang-divider">/</span>
                <span className={`nav__lang-option ${language === 'ID' ? 'active' : ''}`}>ID</span>
              </button>
            </li>
            <li className="nav__item">
              {/* CTA Mobile */}
              <Link 
                to="/contact" 
                className={`nav__cta ${isActive('/contact') ? 'active' : ''}`}
                onClick={closeMobileMenu}
              >
                <span className="nav__cta-icon arrow"></span>
GET IN TOUCH
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;