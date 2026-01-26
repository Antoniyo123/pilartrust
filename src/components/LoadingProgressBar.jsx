// LoadingProgressBar.jsx (Alternative - Modern Progress Bar)
import React from 'react';
import '../styles/LoadingProgressBar.css';

const LoadingProgressBar = () => {
  return (
    <div className="progress-bar-container">
      <div className="progress-bar">
        <div className="progress-bar-fill"></div>
      </div>
    </div>
  );
};

export default LoadingProgressBar;