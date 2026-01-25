import React, { useState, useEffect } from 'react';

// ==================== NAVBAR.JSX ====================
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`nav ${isScrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__container">
        <a href="#home" className="nav__logo">PILAR</a>
        <ul className="nav__menu">
          <li className="nav__item">
            <a href="#home" className="nav__link">Home</a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">Services</a>
          </li>
          <li className="nav__item">
            <a href="#certification" className="nav__link">Certification</a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">About</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

// ==================== HERO.JSX ====================
const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay"></div>
      <div className="hero__content">
        <h1 className="hero__title">PILAR</h1>
        <p className="hero__subtitle">ISO Certification & Management System Consulting</p>
        <p className="hero__tagline">Your Partner in Quality, Safety & Excellence</p>
      </div>
    </section>
  );
};

// ==================== SERVICECARD.JSX ====================
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service-card">
      <div className="service-card__icon">
        <svg className="service-card__svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
          {icon}
        </svg>
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
    </div>
  );
};

// ==================== SERVICES.JSX ====================
const Services = () => {
  const servicesData = [
    {
      icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
      title: "ISO 9001",
      description: "Quality Management System certification for operational excellence and customer satisfaction"
    },
    {
      icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
      title: "ISO 27001",
      description: "Information Security Management System to protect your data and information assets"
    },
    {
      icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>,
      title: "ISO 14001",
      description: "Environmental Management System for sustainable business practices"
    },
    {
      icon: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>,
      title: "ISO 45001",
      description: "Occupational Health & Safety Management System for workplace safety"
    },
    {
      icon: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
      title: "ISO 22000",
      description: "Food Safety Management System for food industry compliance"
    },
    {
      icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
      title: "ISO 37001",
      description: "Anti-Bribery Management System for corporate governance and integrity"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services__container">
        <h2 className="services__title">Our ISO Certification Services</h2>
        <p className="services__subtitle">Comprehensive management system solutions for your business</p>
        <div className="services__grid">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== CERTIFICATIONCARD.JSX ====================
const CertificationCard = ({ image, title, description }) => {
  return (
    <div className="cert-card">
      <div className="cert-card__image-wrapper">
        <img src={image} alt={title} className="cert-card__image" />
      </div>
      <div className="cert-card__content">
        <h3 className="cert-card__title">{title}</h3>
        <p className="cert-card__description">{description}</p>
      </div>
    </div>
  );
};

// ==================== CERTIFICATION.JSX ====================
const Certification = () => {
  const certificationData = [
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      title: "Consultation & Gap Analysis",
      description: "Comprehensive assessment of your current systems and processes"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      title: "Documentation Support",
      description: "Complete documentation preparation and policy development"
    },
    {
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      title: "Training & Implementation",
      description: "Staff training and system implementation guidance"
    },
    {
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      title: "Internal Audit",
      description: "Pre-certification audit and continuous improvement support"
    },
    {
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      title: "Certification Process",
      description: "Full support through external certification audit"
    },
    {
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
      title: "Post-Certification",
      description: "Ongoing maintenance and surveillance audit preparation"
    }
  ];

  return (
    <section className="certification" id="certification">
      <div className="certification__container">
        <h2 className="certification__title">Our Process</h2>
        <p className="certification__subtitle">Six steps to achieve your ISO certification</p>
        <div className="certification__grid">
          {certificationData.map((cert, index) => (
            <CertificationCard key={index} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
};

// ==================== ABOUT.JSX ====================
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">About Pilar</h2>
          <p className="about__text">
            Pilar is a leading ISO certification consulting firm dedicated to helping organizations achieve and maintain international management system standards. With years of expertise across various industries, we provide comprehensive solutions tailored to your business needs.
          </p>
          <p className="about__text">
            Our team of certified consultants and auditors work closely with you to ensure compliance, improve operational efficiency, and enhance your organization's credibility in the marketplace.
          </p>
          <div className="about__stats">
            <div className="about__stat">
              <h3 className="about__stat-number">500+</h3>
              <p className="about__stat-label">Certified Companies</p>
            </div>
            <div className="about__stat">
              <h3 className="about__stat-number">15+</h3>
              <p className="about__stat-label">Years Experience</p>
            </div>
            <div className="about__stat">
              <h3 className="about__stat-number">98%</h3>
              <p className="about__stat-label">Success Rate</p>
            </div>
          </div>
        </div>
        <div className="about__image-wrapper">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Office Building" className="about__image" />
        </div>
      </div>
    </section>
  );
};

// ==================== CONTACT.JSX ====================
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <h2 className="contact__title">Get Your ISO Certification</h2>
        <p className="contact__subtitle">Contact us today for a free consultation</p>
        <div className="contact__grid">
          <div className="contact__item">
            <h3 className="contact__label">Office Address</h3>
            <p className="contact__info">
              Gedung Menara Jamsostek<br />
              Jl. Gatot Subroto No.38<br />
              Jakarta Selatan 12710
            </p>
          </div>
          <div className="contact__item">
            <h3 className="contact__label">Email</h3>
            <p className="contact__info">
              info@pilar-iso.com<br />
              certification@pilar-iso.com
            </p>
          </div>
          <div className="contact__item">
            <h3 className="contact__label">Phone & WhatsApp</h3>
            <p className="contact__info">
              +62 21 5252 4567<br />
              +62 812 3456 7890
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// ==================== FOOTER.JSX ====================
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__logo">PILAR</h3>
            <p className="footer__tagline">ISO Certification Excellence</p>
          </div>
          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__heading">Services</h4>
              <ul className="footer__list">
                <li>ISO 9001</li>
                <li>ISO 27001</li>
                <li>ISO 14001</li>
                <li>ISO 45001</li>
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__heading">Company</h4>
              <ul className="footer__list">
                <li>About Us</li>
                <li>Our Team</li>
                <li>Certifications</li>
                <li>Clients</li>
              </ul>
            </div>
            <div className="footer__column">
              <h4 className="footer__heading">Resources</h4>
              <ul className="footer__list">
                <li>ISO Standards</li>
                <li>Documentation</li>
                <li>FAQs</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__text">&copy; 2026 Pilar ISO Certification. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// ==================== APP.JSX ====================
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Services />
      <Certification />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

// ==================== NAVBAR.CSS ====================
const navbarCSS = `
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: all 0.3s ease;
  background: transparent;
  padding: 0.5rem 0;
}

.nav--scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.08);
}

.nav__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
}

.nav__logo {
  font-size: 1.3rem;
  font-weight: 600;
  letter-spacing: 4px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav--scrolled .nav__logo {
  color: #000;
}

.nav__menu {
  display: flex;
  list-style: none;
  gap: 3rem;
  margin: 0;
  padding: 0;
}

.nav__item {
  margin: 0;
}

.nav__link {
  font-size: 0.85rem;
  font-weight: 400;
  letter-spacing: 1.5px;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.3s ease;
  position: relative;
}

.nav--scrolled .nav__link {
  color: #000;
}

.nav__link:hover {
  color: #2563eb;
}

.nav__link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 1px;
  background: #2563eb;
  transition: width 0.3s ease;
}

.nav__link:hover::after {
  width: 100%;
}
`;

// ==================== HERO.CSS ====================
const heroCSS = `
.hero {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80') center/cover no-repeat;
  overflow: hidden;
}

.hero__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6));
}

.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
}

.hero__title {
  font-size: 7rem;
  font-weight: 100;
  letter-spacing: 25px;
  color: #fff;
  margin: 0 0 1.5rem 0;
  animation: heroFadeUp 1s ease;
}

.hero__subtitle {
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 3px;
  color: #fff;
  margin: 0 0 1rem 0;
  animation: heroFadeUp 1s ease 0.2s backwards;
}

.hero__tagline {
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 2px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  animation: heroFadeUp 1s ease 0.4s backwards;
}

@keyframes heroFadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

// ==================== SERVICECARD.CSS ====================
const serviceCardCSS = `
.service-card {
  background: #fff;
  padding: 3rem 2rem;
  text-align: center;
  border: 1px solid #e0e0e0;
  transition: all 0.3s ease;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #2563eb;
}

.service-card:hover .service-card__svg {
  stroke: #2563eb;
  transform: scale(1.1);
}

.service-card__icon {
  margin-bottom: 2rem;
}

.service-card__svg {
  width: 60px;
  height: 60px;
  stroke: #000;
  transition: all 0.3s ease;
}

.service-card__title {
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 2px;
  color: #000;
  margin: 0 0 1rem 0;
}

.service-card__description {
  font-size: 0.95rem;
  font-weight: 300;
  line-height: 1.7;
  color: #666;
  margin: 0;
}
`;

// ==================== SERVICES.CSS ====================
const servicesCSS = `
.services {
  padding: 8rem 0;
  background: #fff;
}

.services__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
}

.services__title {
  font-size: 4rem;
  font-weight: 100;
  letter-spacing: 10px;
  text-align: center;
  color: #000;
  margin: 0 0 1.5rem 0;
}

.services__subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  color: #666;
  margin: 0 0 5rem 0;
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
}
`;

// ==================== CERTIFICATIONCARD.CSS ====================
const certCardCSS = `
.cert-card {
  background: #fff;
  overflow: hidden;
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  border: 1px solid #e0e0e0;
}

.cert-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
}

.cert-card__image-wrapper {
  width: 100%;
  height: 280px;
  overflow: hidden;
  background: #000;
}

.cert-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%) contrast(1.1);
  transition: all 0.5s ease;
}

.cert-card:hover .cert-card__image {
  filter: grayscale(0%) contrast(1);
  transform: scale(1.08);
}

.cert-card__content {
  padding: 2rem 1.5rem;
  background: #fff;
}

.cert-card__title {
  font-size: 1.2rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #000;
  margin: 0 0 0.8rem 0;
}

.cert-card__description {
  font-size: 0.9rem;
  font-weight: 300;
  color: #666;
  line-height: 1.6;
  margin: 0;
}
`;

// ==================== CERTIFICATION.CSS ====================
const certificationCSS = `
.certification {
  padding: 8rem 0;
  background: #f8f9fa;
}

.certification__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
}

.certification__title {
  font-size: 4rem;
  font-weight: 100;
  letter-spacing: 10px;
  text-align: center;
  color: #000;
  margin: 0 0 1.5rem 0;
}

.certification__subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  color: #666;
  margin: 0 0 5rem 0;
}

.certification__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}
`;

// ==================== ABOUT.CSS ====================
const aboutCSS = `
.about {
  padding: 8rem 0;
  background: #fff;
}

.about__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6rem;
  align-items: center;
}

.about__title {
  font-size: 4rem;
  font-weight: 100;
  letter-spacing: 10px;
  color: #000;
  margin: 0 0 3rem 0;
}

.about__text {
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 2;
  color: #333;
  margin: 0 0 1.5rem 0;
}

.about__stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
}

.about__stat {
  text-align: center;
  padding: 2rem;
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
}

.about__stat-number {
  font-size: 3rem;
  font-weight: 200;
  color: #2563eb;
  margin: 0 0 0.5rem 0;
}

.about__stat-label {
  font-size: 0.9rem;
  font-weight: 400;
  color: #666;
  letter-spacing: 1px;
  margin: 0;
}

.about__image-wrapper {
  width: 100%;
  height: 600px;
  overflow: hidden;
}

.about__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(80%);
}
`;

// ==================== CONTACT.CSS ====================
const contactCSS = `
.contact {
  padding: 8rem 0;
  background: #1a1a1a;
}

.contact__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
}

.contact__title {
  font-size: 4rem;
  font-weight: 100;
  letter-spacing: 10px;
  text-align: center;
  color: #fff;
  margin: 0 0 1rem 0;
}

.contact__subtitle {
  font-size: 1.1rem;
  font-weight: 300;
  text-align: center;
  color: #999;
  margin: 0 0 5rem 0;
}

.contact__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  max-width: 1100px;
  margin: 0 auto;
}

.contact__item {
  text-align: center;
}

.contact__label {
  font-size: 1.2rem;
  font-weight: 400;
  letter-spacing: 2px;
  color: #fff;
  margin: 0 0 1.5rem 0;
}

.contact__info {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.8;
  color: #999;
  margin: 0;
}
`;

// ==================== FOOTER.CSS ====================
const footerCSS = `
.footer {
  background: #000;
  padding: 4rem 0 2rem;
}

.footer__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
}

.footer__content {
  display: grid;
  grid-template-columns: 1.5fr 3fr;
  gap: 4rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid #333;
}

.footer__brand {
}

.footer__logo {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 4px;
  color: #fff;
  margin: 0 0 0.5rem 0;
}

.footer__tagline {
  font-size: 0.9rem;
  font-weight: 300;
  color: #666;
  margin: 0;
}

.footer__links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
}

.footer__column {
}

.footer__heading {
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: #fff;
  margin: 0 0 1.5rem 0;
}

.footer__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer__list li {
  font-size: 0.9rem;
  font-weight: 300;
  color: #666;
  margin-bottom: 0.8rem;
  cursor: pointer;
  transition: color 0.3s ease;
}

.footer__list li:hover {
  color: #2563eb;
}

.footer__bottom {
  text-align: center;
}

.footer__text {
  font-size: 0.85rem;
  font-weight: 300;
  letter-spacing: 1px;
  color: #666;
  margin: 0;
}
`;

// ==================== GLOBAL.CSS ====================
const globalCSS = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
  color: #1a1a1a;
  line-height: 1.6;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

.app {
  width: 100%;
  overflow-x: hidden;
}

@media (max-width: 1024px) {
  .nav__container,
  .services__container,
  .certification__container,
  .about__container,
  .contact__container,
  .footer__container {
    padding: 0 2rem;
  }
  
  .services__grid,
  .certification__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .about__container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about__stats {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .footer__content {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .nav__menu {
    gap: 1.5rem;
  }
  
  .nav__link {
    font-size: 0.75rem;
  }
  
  .hero__title {
    font-size: 4rem;
    letter-spacing: 15px;
  }
  
  .hero__subtitle {
    font-size: 1.1rem;
    letter-spacing: 2px;
  }
  
  .hero__tagline {
    font-size: 0.9rem;
  }
  
  .services__grid,
  .certification__grid {
    grid-template-columns: 1fr;
  }
  
  .services__title,
  .certification__title,
  .about__title,
  .contact__title {
    font-size: 2.5rem;
    letter-spacing: 5px;
  }
  
  .contact__grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  
  .about__stats {
    grid-template-columns: 1fr;
  }
  
  .footer__links {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
`;

// Inject all styles
const injectStyles = () => {
  const styleContent = globalCSS + navbarCSS + heroCSS + serviceCardCSS + servicesCSS + certCardCSS + certificationCSS + aboutCSS + contactCSS + footerCSS;
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styleContent;
  document.head.appendChild(styleSheet);
};

injectStyles();

export default App;