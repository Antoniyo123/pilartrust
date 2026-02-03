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
        <video autoPlay loop muted playsInline>
          <source src={require('../video/city.mp4')} type="video/mp4" />
        </video>
      </div>
      <div className="hero__overlay"></div>
      <div className="hero__container">
        <div className="hero__content">
          <div className="hero__title">
            <h1 className="hero__title-main">PILAR</h1>
            <p className="hero__title-accent">Your Partner in Excellence</p>
          </div>
          <p className="hero__subtitle">
            ISO Certification & Management System Consulting
          </p>
          <button className="hero__button" onClick={scrollToAbout}>
            Get Started
          </button>
        </div>
      </div>
      <button className="hero__scroll" onClick={scrollToAbout} aria-label="Scroll to about section">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </section>
  );
};

export default Home;