import React, { useState, useEffect } from 'react';
import '../styles/LoadingProgressBar.css';

const LoadingProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate progressive loading
    const intervals = [
      { time: 10, progress: 20 },
      { time: 20, progress: 40 },
      { time: 30, progress: 60 },
      { time: 40, progress: 80 },
      { time: 50, progress: 95 },
      { time: 1000, progress: 100 }
    ];

    intervals.forEach(({ time, progress: targetProgress }) => {
      setTimeout(() => {
        setProgress(targetProgress);
        if (targetProgress === 100) {
          setTimeout(() => setIsComplete(true), 300);
        }
      }, time);
    });
  }, []);

  if (isComplete) return null;

  return (
    <div className="loading-progress-wrapper">
      {/* Top Progress Bar */}
      <div className="progress-bar-container">
        <div 
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
        >
          <div className="progress-bar-glow"></div>
        </div>
      </div>

      {/* Loading Overlay */}
      <div className={`loading-overlay ${progress === 100 ? 'loading-overlay--fade' : ''}`}>
        <div className="loading-content">
          {/* Logo or Brand Name */}
          <div className="loading-logo">
            <div className="loading-logo-circle">
              <div className="loading-spinner"></div>
            </div>
          </div>

          {/* Loading Text */}
          <div className="loading-text">
            <span className="loading-label">Loading</span>
            <div className="loading-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>

          {/* Progress Percentage */}
          <div className="loading-percentage">{progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingProgressBar;