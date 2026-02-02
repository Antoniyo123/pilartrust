import React, { useState, useEffect } from 'react';
import '../styles/Certification.css';

const Certification = () => {
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificationData = [
    {
      number: "01",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      title: "Consultation & Gap Analysis",
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

  return (
    <section className="certification" id="certification">
      <div className="certification__container">
        {/* Header */}
        <div className="certification__header">
          <h2 className="certification__title">Our Certification Process</h2>
          <p className="certification__subtitle">Six steps to achieve your ISO certification</p>
        </div>
        
        {/* Grid */}
        <div className="certification__grid">
          {certificationData.map((cert, index) => (
            <div 
              key={index} 
              className="certification__card"
              onClick={() => openModal(cert)}
            >
              <div className="certification__card-image">
                <img src={cert.image} alt={cert.title} loading="lazy" />
                <div className="certification__card-overlay">
                  <div className="certification__card-number">{cert.number}</div>
                </div>
              </div>
              
              <div className="certification__card-content">
                <h3 className="certification__card-title">{cert.title}</h3>
                <p className="certification__card-description">{cert.description}</p>
                
                <button 
                  className="certification__card-link" 
                  aria-label={`Learn more about ${cert.title}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(cert);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProcess && (
        <div 
          className={`certification__modal-overlay ${isModalOpen ? 'active' : ''}`}
          onClick={closeModal}
        >
          <div 
            className={`certification__modal ${isModalOpen ? 'active' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="certification__modal-header">
              <div className="certification__modal-title-wrapper">
                <div className="certification__modal-number">{selectedProcess.number}</div>
                <div>
                  <h3 className="certification__modal-title">{selectedProcess.title}</h3>
                  <div className="certification__modal-meta">
                    <span className="certification__modal-timeline">{selectedProcess.timeline}</span>
                  </div>
                </div>
              </div>
              <button 
                className="certification__modal-close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Modal Image */}
            <div className="certification__modal-image">
              <img src={selectedProcess.image} alt={selectedProcess.title} />
            </div>

            {/* Modal Content */}
            <div className="certification__modal-content">
              <div className="certification__modal-section">
                <h4 className="certification__modal-section-title">Overview</h4>
                <p className="certification__modal-text">{selectedProcess.fullDescription}</p>
              </div>

              <div className="certification__modal-section">
                <h4 className="certification__modal-section-title">What We Do</h4>
                <ul className="certification__modal-list">
                  {selectedProcess.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>

              <div className="certification__modal-section">
                <h4 className="certification__modal-section-title">Deliverables</h4>
                <p className="certification__modal-text">{selectedProcess.deliverables}</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="certification__modal-footer">
              <button 
                className="certification__modal-button certification__modal-button--secondary"
                onClick={closeModal}
              >
                Close
              </button>
              <button 
                className="certification__modal-button certification__modal-button--primary"
                onClick={() => window.location.href = '#contact'}
              >
                Get Started
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

export default Certification;