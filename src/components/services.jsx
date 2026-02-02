import React, { useState, useEffect } from 'react';
import '../styles/services.css';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const servicesData = [
    {
      id: 'iso-9001',
      icon: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
      title: "ISO 9001",
      subtitle: "Quality Management",
      description: "Quality Management System certification for operational excellence and customer satisfaction",
      fullDescription: "ISO 9001 is the international standard for Quality Management Systems (QMS). It provides a framework for organizations to consistently deliver products and services that meet customer requirements and regulatory standards. The certification demonstrates your commitment to quality, continuous improvement, and customer satisfaction.",
      benefits: [
        "Enhanced customer satisfaction and loyalty",
        "Improved operational efficiency and productivity",
        "Better decision making through data-driven insights",
        "Increased market credibility and competitive advantage",
        "Consistent quality in products and services"
      ],
      process: "Our ISO 9001 certification process typically takes 3-6 months and includes gap analysis, documentation review, internal audits, and final certification audit."
    },
    {
      id: 'iso-27001',
      icon: <><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>,
      title: "ISO 27001",
      subtitle: "Information Security",
      description: "Information Security Management System to protect your data and information assets",
      fullDescription: "ISO 27001 is the leading international standard for Information Security Management Systems (ISMS). It helps organizations manage and protect their information assets through a systematic approach to managing sensitive company and customer information.",
      benefits: [
        "Protection against cyber threats and data breaches",
        "Compliance with legal and regulatory requirements",
        "Enhanced business reputation and customer trust",
        "Reduced risk of information security incidents",
        "Competitive advantage in tender processes"
      ],
      process: "The ISO 27001 certification process includes risk assessment, security controls implementation, ISMS documentation, and comprehensive security audits over 4-8 months."
    },
    {
      id: 'iso-14001',
      icon: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="7.5 4.21 12 6.81 16.5 4.21"/><polyline points="7.5 19.79 7.5 14.6 3 12"/><polyline points="21 12 16.5 14.6 16.5 19.79"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></>,
      title: "ISO 14001",
      subtitle: "Environmental Management",
      description: "Environmental Management System for sustainable business practices",
      fullDescription: "ISO 14001 specifies requirements for an Environmental Management System (EMS) that organizations can use to enhance their environmental performance. It provides a framework for protecting the environment and responding to changing environmental conditions.",
      benefits: [
        "Reduced environmental impact and carbon footprint",
        "Cost savings through efficient resource management",
        "Enhanced corporate reputation and brand image",
        "Compliance with environmental regulations",
        "Improved stakeholder relationships"
      ],
      process: "Our ISO 14001 certification includes environmental aspects identification, legal compliance assessment, EMS implementation, and certification audit spanning 3-6 months."
    },
    {
      id: 'iso-45001',
      icon: <><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></>,
      title: "ISO 45001",
      subtitle: "Health & Safety",
      description: "Occupational Health & Safety Management System for workplace safety",
      fullDescription: "ISO 45001 is the international standard for Occupational Health and Safety Management Systems (OH&S). It provides a framework to increase safety, reduce workplace risks, and create better, safer working conditions.",
      benefits: [
        "Reduced workplace accidents and injuries",
        "Lower absenteeism and staff turnover",
        "Decreased insurance premiums",
        "Enhanced employee morale and productivity",
        "Compliance with health and safety regulations"
      ],
      process: "The ISO 45001 certification process involves hazard identification, risk assessment, safety controls implementation, and comprehensive OH&S audits over 3-6 months."
    },
    {
      id: 'iso-22000',
      icon: <><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></>,
      title: "ISO 22000",
      subtitle: "Food Safety",
      description: "Food Safety Management System for food industry compliance",
      fullDescription: "ISO 22000 sets out the requirements for a Food Safety Management System (FSMS). It maps out what an organization needs to do to demonstrate its ability to control food safety hazards and ensure that food is safe for consumption.",
      benefits: [
        "Enhanced food safety and quality assurance",
        "Reduced risk of foodborne illnesses",
        "Improved supply chain management",
        "Access to global food markets",
        "Enhanced consumer confidence and trust"
      ],
      process: "ISO 22000 certification includes HACCP implementation, prerequisite programs setup, FSMS documentation, and food safety audits typically completed in 4-7 months."
    },
    {
      id: 'iso-37001',
      icon: <><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></>,
      title: "ISO 37001",
      subtitle: "Anti-Bribery",
      description: "Anti-Bribery Management System for corporate governance and integrity",
      fullDescription: "ISO 37001 specifies requirements for an Anti-Bribery Management System (ABMS). It helps organizations implement policies and procedures to prevent, detect, and address bribery, demonstrating commitment to ethical business practices.",
      benefits: [
        "Enhanced corporate governance and integrity",
        "Reduced risk of bribery and corruption",
        "Improved business reputation and stakeholder trust",
        "Compliance with anti-bribery legislation",
        "Competitive advantage in ethical business"
      ],
      process: "The ISO 37001 certification process includes bribery risk assessment, anti-bribery policies development, controls implementation, and ABMS audits over 4-6 months."
    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    // Wait for animation to complete before clearing selected service
    setTimeout(() => setSelectedService(null), 300);
  };

  const handleServicePage = (serviceId) => {
    // Navigate to service detail page
    window.location.href = `/services`;
    // Or if using React Router: navigate(`/services/${serviceId}`);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isModalOpen]);

  return (
    <section className="services" id="services">
      <div className="services__container">
        {/* Header */}
        <div className="services__header">
          <h2 className="services__title">ISO Certification Services</h2>
          <p className="services__subtitle">Comprehensive management system solutions</p>
        </div>
        
        {/* Services Grid */}
        <div className="services__grid">
          {servicesData.map((service, index) => (
            <div key={index} className="services__card">
              <div className="services__card-header">
                <div className="services__card-icon">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
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
                <div className="services__card-badge">{service.subtitle}</div>
              </div>
              
              <div className="services__card-content">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-description">{service.description}</p>
                
                <button 
                  className="services__card-link"
                  onClick={() => openModal(service)}
                >
                  Learn More 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <div 
          className={`services__modal-overlay ${isModalOpen ? 'active' : ''}`}
          onClick={closeModal}
        >
          <div 
            className={`services__modal ${isModalOpen ? 'active' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="services__modal-header">
              <div className="services__modal-title-wrapper">
                <div className="services__modal-icon">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="32" 
                    height="32" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    {selectedService.icon}
                  </svg>
                </div>
                <div>
                  <h3 className="services__modal-title">{selectedService.title}</h3>
                  <p className="services__modal-subtitle">{selectedService.subtitle}</p>
                </div>
              </div>
              <button 
                className="services__modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="services__modal-content">
              <div className="services__modal-section">
                <h4 className="services__modal-section-title">Overview</h4>
                <p className="services__modal-text">{selectedService.fullDescription}</p>
              </div>

              <div className="services__modal-section">
                <h4 className="services__modal-section-title">Key Benefits</h4>
                <ul className="services__modal-list">
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
              </div>

              <div className="services__modal-section">
                <h4 className="services__modal-section-title">Certification Process</h4>
                <p className="services__modal-text">{selectedService.process}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="services__modal-footer">
              <button 
                className="services__modal-button services__modal-button--secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <button 
                className="services__modal-button services__modal-button--primary"
                onClick={() => handleServicePage(selectedService.id)}
              >
                View Full Details
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;