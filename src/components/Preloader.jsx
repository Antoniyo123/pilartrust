import React, { useState, useEffect } from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [typedText, setTypedText] = useState('');
  const fullText = 'PILAR';

  useEffect(() => {
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 200); // 200ms per character

    // Total animation duration: typing (1s) + hold (0.5s) + fade out (0.5s)
    const hideTimeout = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = 'unset';
    }, 2500);

    // Prevent scrolling during preloader
    document.body.style.overflow = 'hidden';

    return () => {
      clearInterval(typingInterval);
      clearTimeout(hideTimeout);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className={`preloader ${!isLoading ? 'preloader--hidden' : ''}`}>
      <div className="preloader__content">
        {/* Logo Circle */}
        <div className="preloader__logo">
          <svg viewBox="0 0 100 100" className="preloader__logo-svg">
            {/* Outer rotating circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#314ad5d6"
              strokeWidth="0.5"
              className="preloader__circle preloader__circle--outer"
            />
            
            {/* Inner rotating circle */}
            <circle
              cx="50"
              cy="50"
              r="35"
              fill="none"
              stroke="#000"
              strokeWidth="0.5"
              className="preloader__circle preloader__circle--inner"
              strokeDasharray="220"
              strokeDashoffset="220"
            />
            
            {/* Center P letter */}
            <text
              x="50"
              y="50"
              textAnchor="middle"
              dominantBaseline="central"
              className="preloader__logo-letter"
              fill="#314ad5d6"
            >
              P
            </text>
          </svg>
        </div>

        {/* Typing Text */}
        <div className="preloader__text">
          <span className="preloader__typed">{typedText}</span>
          <span className="preloader__cursor">|</span>
        </div>

        {/* Tagline */}
        <div className="preloader__tagline">
          ISO Certification Excellence
        </div>

        {/* Progress bar */}
        <div className="preloader__progress">
          <div className="preloader__progress-bar"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;