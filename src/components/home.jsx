import React from 'react';
import '../styles/home.css';

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero__background">
        <div className="hero__overlay"></div>
      </div>
      
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            <span className="hero__title-main">PILAR</span>
            <span className="hero__title-accent">Your Partner in <em>Excellence</em></span>
          </h1>
          
          <p className="hero__subtitle">
            ISO Certification & Management System Consulting
          </p>
          
          <button className="hero__button" onClick={scrollToAbout}>
            Get Started
          </button>
        </div>
        
        <button className="hero__scroll" onClick={scrollToAbout} aria-label="Scroll to content">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <polyline points="19 12 12 19 5 12"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Home;