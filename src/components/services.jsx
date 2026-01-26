import React from 'react';
import '../styles/services.css';

const Services = () => {
  const servicesData = [
    {
      icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
      title: "ISO 9001",
      subtitle: "Quality Management",
      description: "Quality Management System certification for operational excellence and customer satisfaction"
    },
    {
      icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
      title: "ISO 27001",
      subtitle: "Information Security",
      description: "Information Security Management System to protect your data and information assets"
    },
    {
      icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>,
      title: "ISO 14001",
      subtitle: "Environmental Management",
      description: "Environmental Management System for sustainable business practices"
    },
    {
      icon: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>,
      title: "ISO 45001",
      subtitle: "Health & Safety",
      description: "Occupational Health & Safety Management System for workplace safety"
    },
    {
      icon: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
      title: "ISO 22000",
      subtitle: "Food Safety",
      description: "Food Safety Management System for food industry compliance"
    },
    {
      icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
      title: "ISO 37001",
      subtitle: "Anti-Bribery",
      description: "Anti-Bribery Management System for corporate governance and integrity"
    }
  ];

  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__header">
          <h2 className="services__title">Our ISO Certification Services</h2>
          <p className="services__subtitle">Comprehensive management system solutions for your business</p>
        </div>
        
        <div className="services__grid">
          {servicesData.map((service, index) => (
            <div key={index} className="services__card">
              <div className="services__card-icon">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="40" 
                  height="40" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  {service.icon}
                </svg>
              </div>
              <div className="services__card-content">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-subtitle">{service.subtitle}</p>
                <p className="services__card-description">{service.description}</p>
                <button className="services__card-link">
                  Learn More <span className="services__card-arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;