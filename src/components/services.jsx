import React, { useState, useEffect, useRef } from 'react';
import '../styles/services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Track mouse for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize to -1 to 1 range (subtle movement)
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const servicesData = [
    {
      id: 1,
      number: "01",
      title: "Sistem Manajemen",
      subtitle: "ISO Certification & Implementation",
      description: "Spesialisasi dalam implementasi dan sertifikasi berbagai standar ISO untuk keamanan informasi, privasi data, layanan IT, business continuity, quality management, dan anti-bribery.",
      specializations: [
        "ISO 27001 - Information Security Management",
        "ISO 27701 - Privacy Information Management",
        "ISO 20000-1 - IT Service Management",
        "ISO 27017 - Cloud Security Management",
        "ISO 22301 - Business Continuity Management",
        "ISO 9001 - Quality Management System",
        "ISO 37001 - Anti-Bribery Management System"
      ],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      )
    },
    {
      id: 2,
      number: "02",
      title: "Internal Audit",
      subtitle: "Compliance & Risk Assessment",
      description: "Layanan audit internal komprehensif untuk memastikan kepatuhan terhadap standar, mengidentifikasi risiko, dan meningkatkan efektivitas sistem manajemen organisasi Anda.",
      specializations: [
        "Gap Analysis & Assessment",
        "Compliance Audit",
        "Risk-based Internal Audit",
        "Management System Review",
        "Corrective Action Planning",
        "Continuous Improvement Support"
      ],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      )
    },
    {
      id: 3,
      number: "03",
      title: "VAPT Services",
      subtitle: "Vulnerability Assessment & Penetration Testing",
      description: "Pengujian kerentanan sistem yang mendalam untuk mengidentifikasi celah keamanan sebelum dimanfaatkan oleh pihak yang tidak bertanggung jawab.",
      specializations: [
        "Network Vulnerability Assessment",
        "Web Application Penetration Testing",
        "Mobile Application Security Testing",
        "API Security Testing",
        "Cloud Infrastructure Testing",
        "Security Report & Remediation"
      ],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 4,
      number: "04",
      title: "Pelatihan Sistem Manajemen",
      subtitle: "Training & Capacity Building",
      description: "Program pelatihan komprehensif untuk meningkatkan pemahaman dan kemampuan tim Anda dalam mengelola sistem manajemen sesuai standar internasional.",
      specializations: [
        "ISO Awareness Training",
        "Internal Auditor Training",
        "Lead Auditor Training",
        "Implementation Workshop",
        "Custom Corporate Training",
        "Online & Offline Sessions"
      ],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c3 3 9 3 12 0v-5"/>
        </svg>
      )
    },
    {
      id: 5,
      number: "05",
      title: "Dokumentasi Kebijakan & Prosedur",
      subtitle: "Policy & Procedure Development",
      description: "Pembuatan dan pengembangan dokumen kebijakan dan prosedur yang sesuai dengan kebutuhan organisasi dan standar internasional yang berlaku.",
      specializations: [
        "Policy Framework Development",
        "Standard Operating Procedures (SOP)",
        "Work Instructions & Guidelines",
        "Form & Template Creation",
        "Document Control System",
        "Policy Review & Update"
      ],
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <line x1="12" y1="9" x2="8" y2="9"/>
        </svg>
      )
    }
  ];

  const handleServiceClick = (service) => {
    setSelectedService(selectedService?.id === service.id ? null : service);
  };

  // Subtle parallax for layers
  const getParallaxStyle = (depth = 1) => {
    return {
      transform: `translate(${mousePos.x * 5 * depth}px, ${mousePos.y * 5 * depth}px)`,
      transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
    };
  };

  // Card tilt effect when hovered
  const getCardTiltStyle = (serviceId) => {
    if (hoveredCard !== serviceId) return {};
    
    return {
      transform: `perspective(1000px) rotateX(${-mousePos.y * 2}deg) rotateY(${mousePos.x * 2}deg) translateZ(10px)`,
      transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
    };
  };

  return (
    <div className="services-container" ref={containerRef}>
      {/* Minimalist cursor dot */}
      <div 
        className="services__cursor"
        style={{
          left: `${(mousePos.x + 1) * 50}%`,
          top: `${(mousePos.y + 1) * 50}%`,
        }}
      />

      {/* Subtle background grid */}
      <div className="services__grid" style={getParallaxStyle(0.1)}>
        <div className="services__grid-overlay"></div>
      </div>

      {/* Floating minimal shapes */}
      <div className="services__shapes">
        <div 
          className="services__shape services__shape--1"
          style={{
            transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        />
        <div 
          className="services__shape services__shape--2"
          style={{
            transform: `translate(${-mousePos.x * 20}px, ${-mousePos.y * 20}px)`,
            transition: 'transform 0.6s ease-out'
          }}
        />
        <div 
          className="services__shape services__shape--3"
          style={{
            transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 25}px)`,
            transition: 'transform 0.7s ease-out'
          }}
        />
      </div>

      {/* Top Section */}
      <div className="services-top">
        <div className="services-top__label">Our Expertise</div>
      </div>

      {/* Main Content */}
      <main className="services-main">
        {/* Hero Section */}
        <section 
          className={`services-hero ${isVisible ? 'visible' : ''}`}
          style={getParallaxStyle(0.15)}
        >
          <h1 className="services-hero__title">
            <span style={{ transform: `translateX(${mousePos.x * 3}px)`, transition: 'transform 0.4s ease-out' }}>
              LAYANAN
            </span>
            <span 
              className="highlight"
              style={{ transform: `translateX(${mousePos.x * 5}px)`, transition: 'transform 0.5s ease-out' }}
            >
              PROFESIONAL
            </span>
            <span style={{ transform: `translateX(${mousePos.x * 3}px)`, transition: 'transform 0.4s ease-out' }}>
              KAMI
            </span>
          </h1>
          <p className="services-hero__excerpt">
            Solusi komprehensif untuk kebutuhan sistem manajemen, keamanan informasi, dan compliance organisasi Anda dengan standar internasional.
          </p>
        </section>

        {/* Services List */}
        <section className="services-list">
          {servicesData.map((service, index) => (
            <article 
              key={service.id} 
              className={`service-item ${selectedService?.id === service.id ? 'active' : ''}`}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                ...getCardTiltStyle(service.id)
              }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Hover overlay gradient */}
              <div className="service-item__hover-overlay"></div>

              <div 
                className="service-item__header"
                onClick={() => handleServiceClick(service)}
              >
                <div className="service-item__left">
                  <span className="service-item__number">{service.number}</span>
                  <div className="service-item__icon-wrapper">
                    <div className="service-item__icon-bg"></div>
                    {service.icon}
                  </div>
                </div>
                
                <div className="service-item__content">
                  <h2 className="service-item__title">{service.title}</h2>
                  <p className="service-item__subtitle">{service.subtitle}</p>
                </div>

                <button className="service-item__toggle">
                  <span className="service-item__toggle-line service-item__toggle-line--1"></span>
                  <span className="service-item__toggle-line service-item__toggle-line--2"></span>
                </button>
              </div>

              <div className="service-item__details">
                <div className="service-item__description">
                  <p>{service.description}</p>
                </div>

                <div className="service-item__specializations">
                  <h3>Spesialisasi & Layanan:</h3>
                  <ul>
                    {service.specializations.map((spec, idx) => (
                      <li key={idx}>
                        <span className="spec-marker"></span>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#contact" className="service-item__cta">
                  <span>Konsultasi Sekarang</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </section>

        {/* Stats Section with parallax */}
        <section className="services-stats" style={getParallaxStyle(0.12)}>
          {[
            { number: "7+", label: "ISO Standards" },
            { number: "100+", label: "Clients Served" },
            { number: "5+", label: "Years Experience" },
            { number: "98%", label: "Success Rate" }
          ].map((stat, i) => (
            <div 
              key={i}
              className="stat-item"
              style={{
                transform: `translateY(${mousePos.y * (2 + i * 0.5)}px)`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              <div className="stat-item__number">{stat.number}</div>
              <div className="stat-item__label">{stat.label}</div>
              <div className="stat-item__line"></div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Services;