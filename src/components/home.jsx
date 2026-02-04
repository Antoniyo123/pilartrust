import React from 'react';
import '../styles/home.css';

const Home = () => {
  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Scroll to contact/get started section
  const handleGetStarted = () => {
    // First check if there's a contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      scrollToSection('contact');
    } else {
      // If no contact section, scroll to services
      scrollToSection('services');
    }
  };

  // Scroll to next section (services or about)
  const handleScrollDown = () => {
    // Try to find the about section first
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      scrollToSection('about');
    } else {
      // If no about section, scroll to services
      scrollToSection('services');
    }
  };

  return (
    <section className="hero" id="home">
      {/* Background Video */}
      <div className="hero__background">
        <video autoPlay loop muted playsInline>
          <source src={require('../video/city.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay */}
      <div className="hero__overlay"></div>
      
      {/* Content */}
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__title">
            <h1 className="hero__title-main">PILAR</h1>
            <p className="hero__title-accent">Your Partner in Excellence</p>
          </div>
          
          <p className="hero__subtitle">
            Governance, Risk and Compliance Integration Solution          </p>
          
          {/* Get Started Button */}
          <button 
            className="hero__button" 
            onClick={handleGetStarted}
            aria-label="Get started with ISO certification"
          >
            Get Started
          </button>
        </div>
      </div>
      
      {/* Scroll Down Button */}
      <button 
        className="hero__scroll" 
        onClick={handleScrollDown} 
        aria-label="Scroll to next section"
      >
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </section>
  );
};

export default Home;