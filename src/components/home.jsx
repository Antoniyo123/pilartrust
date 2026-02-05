import React, { useState, useEffect, useRef } from 'react';
import '../styles/home.css';

const Home = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  // Track mouse movement for 3D parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize to -1 to 1 range
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      scrollToSection('contact');
    } else {
      scrollToSection('services');
    }
  };

  // Scroll to next section
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      scrollToSection('about');
    } else {
      scrollToSection('services');
    }
  };

  // Calculate 3D transforms
  const getParallaxStyle = (depth = 1) => {
    const moveX = mousePos.x * 20 * depth;
    const moveY = mousePos.y * 20 * depth;
    return {
      transform: `translate(${moveX}px, ${moveY}px)`,
      transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
    };
  };

  const get3DTransform = (intensity = 1) => {
    const rotateY = mousePos.x * 8 * intensity;
    const rotateX = -mousePos.y * 8 * intensity;
    return {
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)'
    };
  };

  // Floating elements positions
  const floatingElements = [
    { top: '15%', left: '8%', size: 60, delay: 0, shape: 'circle' },
    { top: '25%', left: '88%', size: 45, delay: 0.5, shape: 'square' },
    { top: '65%', left: '10%', size: 50, delay: 1, shape: 'circle' },
    { top: '70%', left: '85%', size: 40, delay: 1.5, shape: 'square' },
    { top: '45%', left: '5%', size: 35, delay: 0.8, shape: 'circle' },
    { top: '40%', left: '92%', size: 55, delay: 1.2, shape: 'square' },
  ];

  return (
    <section className="hero" id="home" ref={heroRef}>
      {/* Custom Cursor */}
      <div 
        className="hero__cursor"
        style={{
          left: `${(mousePos.x + 1) * 50}%`,
          top: `${(mousePos.y + 1) * 50}%`,
        }}
      >
        <div className="hero__cursor-inner" />
      </div>

      {/* Background Video with parallax */}
      <div className="hero__background" style={getParallaxStyle(0.15)}>
        <video autoPlay loop muted playsInline>
          <source src={require('../video/city.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Overlay */}
      <div className="hero__overlay"></div>

      {/* Floating 3D Elements */}
      <div className="hero__floating-elements">
        {floatingElements.map((el, i) => (
          <div
            key={i}
            className={`hero__floating-element hero__floating-element--${el.shape}`}
            style={{
              top: el.top,
              left: el.left,
              width: `${el.size}px`,
              height: `${el.size}px`,
              animationDelay: `${el.delay}s`,
              transform: `translate(${mousePos.x * (15 + i * 3)}px, ${mousePos.y * (15 + i * 3)}px)`,
              transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="hero__orbs">
        <div 
          className="hero__orb hero__orb--1"
          style={{
            transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
            transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        />
        <div 
          className="hero__orb hero__orb--2"
          style={{
            transform: `translate(${-mousePos.x * 30}px, ${-mousePos.y * 30}px)`,
            transition: 'transform 0.7s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        />
      </div>

      {/* Grid Lines */}
      <div className="hero__grid" style={getParallaxStyle(0.1)}>
        <div className="hero__grid-lines hero__grid-lines--horizontal">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="hero__grid-line" />
          ))}
        </div>
        <div className="hero__grid-lines hero__grid-lines--vertical">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="hero__grid-line" />
          ))}
        </div>
      </div>
      
      {/* Content with 3D effect */}
      <div className="hero__container">
        <div 
          className="hero__content"
          ref={contentRef}
          style={get3DTransform(0.5)}
        >
          <div className="hero__title">
            {/* Title with individual letter animation */}
            <h1 className="hero__title-main">
              {'PILAR'.split('').map((letter, i) => (
                <span
                  key={i}
                  className="hero__title-letter"
                  style={{
                    transform: `translateZ(${Math.abs(mousePos.x) * 8}px) translateY(${mousePos.y * 3}px)`,
                    transition: 'transform 0.3s ease-out',
                    transitionDelay: `${i * 0.02}s`
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            <p 
              className="hero__title-accent"
              style={{
                transform: `translateZ(${Math.abs(mousePos.y) * 5}px)`,
                transition: 'transform 0.4s ease-out'
              }}
            >
              Your Partner in Excellence
            </p>
          </div>
          
          <p 
            className="hero__subtitle"
            style={{
              transform: `translateZ(${Math.abs(mousePos.x + mousePos.y) * 3}px)`,
              transition: 'transform 0.35s ease-out'
            }}
          >
            Governance, Risk and Compliance Integration Solution
          </p>
          
          {/* Get Started Button with 3D lift effect */}
          <button 
            className="hero__button" 
            onClick={handleGetStarted}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            aria-label="Get started with ISO certification"
            style={{
              transform: isHovering 
                ? `perspective(600px) rotateX(${-mousePos.y * 10}deg) rotateY(${mousePos.x * 10}deg) translateZ(20px)`
                : 'perspective(600px) rotateX(0deg) rotateY(0deg) translateZ(0px)',
              transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
          >
            <span className="hero__button-text">Get Started</span>
            <span className="hero__button-shine"></span>
          </button>
        </div>
      </div>

      {/* 3D Floating Rings */}
      <div className="hero__rings">
        <div 
          className="hero__ring hero__ring--1"
          style={{
            transform: `perspective(1000px) rotateX(${60 + mousePos.y * 15}deg) rotateY(${mousePos.x * 15}deg) rotateZ(${mousePos.x * 10}deg)`,
            transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        />
        <div 
          className="hero__ring hero__ring--2"
          style={{
            transform: `perspective(1000px) rotateX(${60 - mousePos.y * 20}deg) rotateY(${-mousePos.x * 20}deg) rotateZ(${-mousePos.x * 15}deg)`,
            transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        />
      </div>
      
      {/* Scroll Down Button with pulse effect */}
      <button 
        className="hero__scroll" 
        onClick={handleScrollDown} 
        aria-label="Scroll to next section"
        style={{
          transform: `translateX(-50%) translateZ(${Math.abs(mousePos.y) * 5}px)`,
          transition: 'transform 0.3s ease-out'
        }}
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
        <div className="hero__scroll-ring"></div>
      </button>
    </section>
  );
};

export default Home;