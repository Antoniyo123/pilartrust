import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/navbar';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutUs';
import Footer from './components/footer';
import ServicesPage from './components/Services/ServicesPage';
import GetInTouchPage from './components/GetInTouch/GetInTouch';
import LoadingProgressBar from './components/LoadingProgressBar';
import Preloader from './components/Preloader';
import './styles/Preloader.css';

import './styles/global.css';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Start transition
    setIsTransitioning(true);
    setIsLoading(true);

    // Simulasi loading time
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // End transition after content loads
    const transitionTimer = setTimeout(() => {
      setIsTransitioning(false);
      window.scrollTo(0, 0);
    }, 600);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(transitionTimer);
    };
  }, [location.pathname]);

  if (isLoading) {
    return <LoadingProgressBar />;
  }

  return (
    <div className={`page-transition ${isTransitioning ? 'transitioning' : 'active'}`}>
      {children}
    </div>
  );
};

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2000); // durasi preloader

    return () => clearTimeout(timer);
  }, []);

  if (showPreloader) {
    return <Preloader />;
  }

  return (
    <Router>
      <div className="app">
        <Navbar />
        <PageWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<GetInTouchPage />} />
          </Routes>
        </PageWrapper>
        <Footer />
      </div>
    </Router>
  );
};


export default App;