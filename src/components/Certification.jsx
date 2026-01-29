import React from 'react';
import '../styles/Certification.css';

const Certification = () => {
  const certificationData = [
    {
      number: "01",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      title: "Consultation & Gap Analysis",
      description: "Comprehensive assessment of your current systems and processes"
    },
    {
      number: "02",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      title: "Documentation Support",
      description: "Complete documentation preparation and policy development"
    },
    {
      number: "03",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      title: "Training & Implementation",
      description: "Staff training and system implementation guidance"
    },
    {
      number: "04",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      title: "Internal Audit",
      description: "Pre-certification audit and continuous improvement support"
    },
    {
      number: "05",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80",
      title: "Certification Process",
      description: "Full support through external certification audit"
    },
    {
      number: "06",
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
      title: "Post-Certification",
      description: "Ongoing maintenance and surveillance audit preparation"
    }
  ];

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
            <div key={index} className="certification__card">
              <div className="certification__card-image">
                <img src={cert.image} alt={cert.title} loading="lazy" />
                <div className="certification__card-overlay">
                  <div className="certification__card-number">{cert.number}</div>
                </div>
              </div>
              
              <div className="certification__card-content">
                <h3 className="certification__card-title">{cert.title}</h3>
                <p className="certification__card-description">{cert.description}</p>
                
                <button className="certification__card-link" aria-label={`Learn more about ${cert.title}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M7 7h10v10"/>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;