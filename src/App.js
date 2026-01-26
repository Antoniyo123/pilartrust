import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/navbar';
import HomePage from './components/Home/HomePage';
import AboutPage from './components/About/AboutUs';
import Footer from './components/footer';
import ServicesPage from './components/Services/ServicesPage';
import GetInTouchPage from './components/GetInTouch/GetInTouch';
// import LoadingScreen from './components/LoadingScreen';
import LoadingProgressBar from './components/LoadingProgressBar';

import './styles/global.css';

const PageWrapper = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Tampilkan loading saat route berubah
    setIsLoading(true);

    // Simulasi loading time (minimal 500ms untuk smooth transition)
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Scroll to top setelah page load
      window.scrollTo(0, 0);
    }, 500);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (isLoading) {
  return <LoadingProgressBar />;
}

  return children;
};

const App = () => {
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