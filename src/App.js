import React from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import Services from './components/services';
import Certification from './components/Certification';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/footer';
import './styles/global.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Services />
      <Certification />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;