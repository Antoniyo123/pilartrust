import React, { useState, useEffect, useRef } from 'react';
import '../styles/Certification.css';

const Certification = () => {
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const containerRef = useRef(null);

  const certificationData = [
    {
      number: "01",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      title: "Consultation & Gap Analysis",
      subtitle: "ASSESSMENT & PLANNING",
      description: "Comprehensive assessment of your current systems and processes",
      fullDescription: "Our certification journey begins with a thorough consultation and gap analysis. This critical first step allows us to understand your organization's current state and identify areas that need improvement to meet ISO standards.",
      details: [
        "Initial consultation to understand your business objectives and requirements",
        "Comprehensive review of existing management systems and processes",
        "Gap analysis comparing current practices against ISO standard requirements",
        "Identification of strengths, weaknesses, and opportunities for improvement",
        "Customized action plan with clear timelines and deliverables",
        "Resource requirement assessment and budgeting guidance"
      ],
      timeline: "Duration: 1-2 weeks",
      deliverables: "Gap Analysis Report, Implementation Roadmap, Resource Plan"
    },
    {
      number: "02",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      title: "Documentation Support",
      subtitle: "POLICY & PROCEDURES",
      description: "Complete documentation preparation and policy development",
      fullDescription: "Documentation is the backbone of any management system. Our experts work closely with your team to develop comprehensive, ISO-compliant documentation that reflects your organization's unique processes and culture.",
      details: [
        "Development of quality manual and management system documentation",
        "Creation of standard operating procedures (SOPs) and work instructions",
        "Policy formulation aligned with ISO requirements and business needs",
        "Process mapping and flowchart development",
        "Form and template design for effective record-keeping",
        "Document control system establishment and implementation",
        "Review and approval workflows setup"
      ],
      timeline: "Duration: 3-6 weeks",
      deliverables: "Quality Manual, Procedures, Work Instructions, Forms & Templates"
    },
    {
      number: "03",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      title: "Training & Implementation",
      subtitle: "EMPLOYEE DEVELOPMENT",
      description: "Staff training and system implementation guidance",
      fullDescription: "Successful ISO implementation requires engaged and knowledgeable employees. We provide comprehensive training programs tailored to different roles and responsibilities within your organization.",
      details: [
        "Management awareness sessions on ISO requirements and benefits",
        "Internal auditor training and certification preparation",
        "Department-specific training on relevant procedures and processes",
        "Hands-on workshops for effective system implementation",
        "Change management support and employee engagement strategies",
        "Competency assessment and skill development programs",
        "Training documentation and record maintenance"
      ],
      timeline: "Duration: 2-4 weeks",
      deliverables: "Training Materials, Competency Records, Implementation Guidelines"
    },
    {
      number: "04",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      title: "Internal Audit",
      subtitle: "VERIFICATION & ASSESSMENT",
      description: "Pre-certification audit and continuous improvement support",
      fullDescription: "Internal audits are essential to verify that your management system is effectively implemented and ready for certification. Our experienced auditors conduct thorough assessments and provide actionable recommendations.",
      details: [
        "Internal audit planning and schedule development",
        "Comprehensive audit of all system requirements and processes",
        "Objective evidence collection and verification",
        "Non-conformity identification and documentation",
        "Corrective action planning and implementation support",
        "Management review meeting facilitation",
        "Pre-certification readiness assessment"
      ],
      timeline: "Duration: 1-2 weeks",
      deliverables: "Audit Reports, Non-Conformity Reports, Corrective Action Plans"
    },
    {
      number: "05",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      title: "Certification Process",
      subtitle: "EXTERNAL AUDIT SUPPORT",
      description: "Full support through external certification audit",
      fullDescription: "The certification audit is the culmination of all your preparation efforts. We guide you through both stages of the certification process, ensuring you're fully prepared and confident.",
      details: [
        "Certification body selection and liaison coordination",
        "Stage 1 audit preparation (documentation review readiness)",
        "Stage 2 audit preparation (implementation verification readiness)",
        "On-site support during certification audits",
        "Auditor question handling and evidence presentation",
        "Non-conformity resolution if any issues arise",
        "Final certification achievement and celebration"
      ],
      timeline: "Duration: 2-4 weeks",
      deliverables: "ISO Certificate, Certification Audit Reports, Compliance Records"
    },
    {
      number: "06",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
      title: "Post-Certification",
      subtitle: "CONTINUOUS IMPROVEMENT",
      description: "Ongoing maintenance and surveillance audit preparation",
      fullDescription: "Maintaining your ISO certification requires continuous commitment to quality and improvement. We provide ongoing support to ensure your management system remains effective and compliant.",
      details: [
        "Annual surveillance audit preparation and support",
        "Continuous improvement program development",
        "Performance monitoring and metrics tracking",
        "Management review meeting facilitation and support",
        "System updates and amendments as needed",
        "Recertification planning and preparation (every 3 years)",
        "Best practice sharing and benchmarking opportunities",
        "Access to ongoing training and development resources"
      ],
      timeline: "Ongoing",
      deliverables: "Surveillance Audit Reports, Performance Metrics, Improvement Plans"
    }
  ];

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (process) => {
    setSelectedProcess(process);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setSelectedProcess(null), 300);
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

  // Get card tilt based on mouse position
  const getCardTilt = (index) => {
    if (hoveredCard !== index) return {};
    
    return {
      transform: `perspective(1000px) rotateX(${-mousePos.y * 3}deg) rotateY(${mousePos.x * 3}deg) translateZ(12px)`,
      transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)'
    };
  };

  // Parallax for background elements
  const getParallaxStyle = (depth = 1) => {
    return {
      transform: `translate(${mousePos.x * 8 * depth}px, ${mousePos.y * 8 * depth}px)`,
      transition: 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
    };
  };

  return (
    <section className="certification-container" id="certification" ref={containerRef}>
      {/* Minimalist cursor */}
      <div 
        className="certification__cursor"
        style={{
          left: `${(mousePos.x + 1) * 50}%`,
          top: `${(mousePos.y + 1) * 50}%`,
        }}
      />

      {/* Subtle grid background */}
      <div className="certification__grid" style={getParallaxStyle(0.08)}>
        <div className="certification__grid-overlay"></div>
      </div>

      {/* Floating minimal elements */}
      <div className="certification__shapes">
        <div 
          className="certification__shape certification__shape--1"
          style={getParallaxStyle(0.15)}
        />
        <div 
          className="certification__shape certification__shape--2"
          style={getParallaxStyle(0.2)}
        />
        <div 
          className="certification__shape certification__shape--3"
          style={getParallaxStyle(0.12)}
        />
      </div>

      {/* Top Label */}
      <div className="certification-top">
        <div className="certification-top__label">ISO Certification Journey</div>
      </div>

      {/* Main Content */}
      <div className="certification-main">
        {/* Hero Section */}
        <div className={`certification-hero ${isVisible ? 'visible' : ''}`}>
          <h1 className="certification-hero__title">
            <span style={{ transform: `translateX(${mousePos.x * 2}px)`, transition: 'transform 0.4s ease-out' }}>
              YOUR PATH TO
            </span>
            <span 
              className="highlight"
              style={{ transform: `translateX(${mousePos.x * 4}px)`, transition: 'transform 0.5s ease-out' }}
            >
              CERTIFICATION
            </span>
            <span style={{ transform: `translateX(${mousePos.x * 2}px)`, transition: 'transform 0.4s ease-out' }}>
              SUCCESS
            </span>
          </h1>
          <p className="certification-hero__excerpt">
            Six strategic steps to achieve and maintain your ISO certification. 
            Our proven methodology ensures a smooth journey from initial 
            consultation to post-certification excellence.
          </p>
        </div>

        {/* Grid */}
        <div className="certification-grid">
          {certificationData.map((cert, index) => (
            <div 
              key={index} 
              className="certification-card"
              onClick={() => openModal(cert)}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                ...getCardTilt(index)
              }}
            >
              {/* Hover gradient overlay */}
              <div className="certification-card__glow"></div>

              <div className="certification-card__image">
                <img src={cert.image} alt={cert.title} loading="lazy" />
                <div className="certification-card__overlay">
                  <div className="certification-card__number">{cert.number}</div>
                </div>
              </div>
              
              <div className="certification-card__content">
                <p className="certification-card__subtitle">{cert.subtitle}</p>
                <h3 className="certification-card__title">{cert.title}</h3>
                <p className="certification-card__description">{cert.description}</p>
                
                <button 
                  className="certification-card__link" 
                  aria-label={`Learn more about ${cert.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(cert);
                  }}
                >
                  <span>Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section with parallax */}
        <div className="certification-stats">
          {[
            { number: "150+", label: "Certified Companies" },
            { number: "98%", label: "Success Rate" },
            { number: "25+", label: "ISO Standards" },
            { number: "15", label: "Years Experience" }
          ].map((stat, i) => (
            <div 
              key={i}
              className="stat-item"
              style={{
                transform: `translateY(${mousePos.y * (1 + i * 0.3)}px)`,
                transition: 'transform 0.4s ease-out'
              }}
            >
              <div className="stat-item__number">{stat.number}</div>
              <div className="stat-item__label">{stat.label}</div>
              <div className="stat-item__accent"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="certification-cta">
          <h2 className="certification-cta__title">
            Ready to Begin Your Certification Journey?
          </h2>
          <p className="certification-cta__text">
            Let our experienced team guide you through the entire process. 
            From initial consultation to post-certification support, we're 
            with you every step of the way.
          </p>
          <a href="#contact" className="certification-cta__button">
            <span>Get Started Today</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedProcess && (
        <div 
          className={`certification-modal-overlay ${isModalOpen ? 'active' : ''}`}
          onClick={closeModal}
        >
          <div 
            className={`certification-modal ${isModalOpen ? 'active' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="certification-modal__header">
              <div className="certification-modal__title-wrapper">
                <div className="certification-modal__number">{selectedProcess.number}</div>
                <div>
                  <p className="certification-modal__subtitle">{selectedProcess.subtitle}</p>
                  <h3 className="certification-modal__title">{selectedProcess.title}</h3>
                </div>
              </div>
              <button 
                className="certification-modal__close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <span className="modal-close-line modal-close-line--1"></span>
                <span className="modal-close-line modal-close-line--2"></span>
              </button>
            </div>

            {/* Modal Image */}
            <div className="certification-modal__image">
              <img src={selectedProcess.image} alt={selectedProcess.title} />
            </div>

            {/* Modal Content */}
            <div className="certification-modal__content">
              <div className="certification-modal__section">
                <h4 className="certification-modal__section-title">Overview</h4>
                <p className="certification-modal__text">{selectedProcess.fullDescription}</p>
              </div>

              <div className="certification-modal__meta">
                <div className="certification-modal__meta-item">
                  <span className="meta-label">Timeline</span>
                  <span className="meta-value">{selectedProcess.timeline}</span>
                </div>
                <div className="certification-modal__meta-item">
                  <span className="meta-label">Deliverables</span>
                  <span className="meta-value">{selectedProcess.deliverables}</span>
                </div>
              </div>

              <div className="certification-modal__section">
                <h4 className="certification-modal__section-title">What We Do</h4>
                <ul className="certification-modal__list">
                  {selectedProcess.details.map((detail, index) => (
                    <li key={index}>
                      <span className="list-dot"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="certification-modal__footer">
              <button 
                className="certification-modal__button certification-modal__button--secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <button 
                className="certification-modal__button certification-modal__button--primary"
                onClick={() => window.location.href = '#contact'}
              >
                <span>Get Started</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

export default Certification;