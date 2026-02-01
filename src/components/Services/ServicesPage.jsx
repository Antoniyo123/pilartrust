import React, { useEffect, useState } from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      number: '01',
      title: 'Konsultasi',
      subtitle: 'Strategic Security Consultation',
      description: 'Kami menyediakan layanan konsultasi keamanan informasi yang komprehensif untuk membantu organisasi Anda memahami landscape keamanan cyber saat ini. Tim ahli kami akan menganalisis infrastruktur IT Anda dan memberikan rekomendasi strategis yang disesuaikan dengan kebutuhan bisnis.',
      image: require('../../img/profile.jpg'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      features: [
        'Risk Assessment & Analysis',
        'Security Architecture Review',
        'Compliance Gap Analysis',
        'Strategic Security Roadmap',
        'Security Governance Framework'
      ],
      benefits: [
        'Identify critical security gaps',
        'Reduce operational risks',
        'Improve compliance posture',
        'Strategic security planning'
      ],
      stats: {
        projects: '50+',
        clients: '30+',
        success: '98%'
      }
    },
    {
      number: '02',
      title: 'Audit',
      subtitle: 'Comprehensive Security Audit',
      description: 'Layanan audit keamanan menyeluruh untuk mengevaluasi efektivitas kontrol keamanan yang ada dalam organisasi Anda. Kami menggunakan metodologi audit standar internasional untuk memastikan compliance dan mengidentifikasi area yang perlu ditingkatkan.',
      image: require('../../img/profile2.jpg'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      ),
      features: [
        'ISO 27001 Compliance Audit',
        'Internal Security Audit',
        'Third-party Risk Assessment',
        'Security Controls Evaluation',
        'Audit Report & Recommendations'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Validate security controls',
        'Independent assessment',
        'Actionable recommendations'
      ],
      stats: {
        projects: '40+',
        clients: '25+',
        success: '100%'
      }
    },
    {
      number: '03',
      title: 'Pengujian Kerentanan Sistem',
      subtitle: 'Vulnerability Assessment & Penetration Testing',
      description: 'Identifikasi dan evaluasi kerentanan dalam sistem IT Anda sebelum dieksploitasi oleh pihak yang tidak bertanggung jawab. Kami menggunakan tools dan metodologi terkini untuk melakukan penetration testing yang komprehensif.',
      image: require('../../img/profile3.jpg'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      features: [
        'Network Vulnerability Scanning',
        'Web Application Penetration Testing',
        'Mobile Application Security Testing',
        'Social Engineering Assessment',
        'Red Team Operations'
      ],
      benefits: [
        'Discover hidden vulnerabilities',
        'Prevent security breaches',
        'Real-world attack simulation',
        'Detailed remediation guidance'
      ],
      stats: {
        projects: '60+',
        clients: '35+',
        success: '95%'
      }
    },
    {
      number: '04',
      title: 'Pelatihan',
      subtitle: 'Security Awareness & Training',
      description: 'Program pelatihan keamanan informasi yang dirancang untuk meningkatkan awareness dan kompetensi tim Anda. Dari security awareness untuk end-users hingga technical training untuk IT professionals.',
      image: require('../../img/profile1.jpg'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
      features: [
        'Security Awareness Program',
        'Technical Security Training',
        'ISO 27001 Implementation Training',
        'Incident Response Training',
        'Customized Training Modules'
      ],
      benefits: [
        'Enhance team capabilities',
        'Reduce human error risks',
        'Build security culture',
        'Certification preparation'
      ],
      stats: {
        projects: '80+',
        clients: '45+',
        success: '97%'
      }
    },
    {
      number: '05',
      title: 'Pembuatan & Pengembangan Dokumen',
      subtitle: 'Policy & Procedure Development',
      description: 'Kami membantu organisasi Anda dalam menyusun dan mengembangkan dokumen kebijakan dan prosedur keamanan informasi yang sesuai dengan standar internasional dan regulasi yang berlaku.',
      image: require('../../img/profile3.jpg'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
          <polyline points="10 9 9 9 8 9"/>
        </svg>
      ),
      features: [
        'Information Security Policy',
        'Standard Operating Procedures',
        'Business Continuity Plan',
        'Incident Response Plan',
        'Security Guidelines & Standards'
      ],
      benefits: [
        'Standardized processes',
        'Clear governance structure',
        'Compliance documentation',
        'Operational excellence'
      ],
      stats: {
        projects: '70+',
        clients: '40+',
        success: '99%'
      }
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="container">
          <div className="services-hero-content">
            <div className="services-hero-left">
              <span className="hero-label">Our Services</span>
              <h1 className="services-hero-title">
                Comprehensive <em>security solutions</em> for your digital transformation
              </h1>
            </div>
            <div className="services-hero-right">
              <p className="services-hero-description">
                Kami menyediakan layanan keamanan informasi yang lengkap dan terintegrasi, dirancang untuk 
                melindungi aset digital Anda dan memastikan keberlangsungan bisnis dalam era digital yang 
                penuh tantangan.
              </p>
              <p className="services-hero-description">
                Dengan tim profesional bersertifikat dan pengalaman bertahun-tahun, kami siap menjadi partner 
                terpercaya dalam perjalanan keamanan cyber organisasi Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="services-overview">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-item">
              <div className="overview-number">5+</div>
              <p className="overview-label">Core Services</p>
            </div>
            <div className="overview-item">
              <div className="overview-number">100+</div>
              <p className="overview-label">Projects Completed</p>
            </div>
            <div className="overview-item">
              <div className="overview-number">50+</div>
              <p className="overview-label">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail - Minimalist Design */}
      <section className="services-detail">
        <div className="container">
          <div className="services-detail-header">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our <em>Services Portfolio</em></h2>
          </div>

          {/* Services Navigation */}
          <div className="services-nav">
            {services.map((service, index) => (
              <button
                key={index}
                className={`service-nav-item ${activeService === index ? 'active' : ''}`}
                onClick={() => setActiveService(index)}
              >
                <div className="service-nav-icon">{service.icon}</div>
                <span className="service-nav-number">{service.number}</span>
                <span className="service-nav-title">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Active Service Display */}
          <div className="service-showcase">
            <div className="service-showcase-left">
              <div className="service-showcase-image">
                <img src={services[activeService].image} alt={services[activeService].title} />
                <div className="service-image-overlay">
                  <div className="service-overlay-icon">{services[activeService].icon}</div>
                </div>
              </div>

              {/* Stats */}
              <div className="service-stats">
                <div className="stat-item">
                  <div className="stat-number">{services[activeService].stats.projects}</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">{services[activeService].stats.clients}</div>
                  <div className="stat-label">Clients</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">{services[activeService].stats.success}</div>
                  <div className="stat-label">Success Rate</div>
                </div>
              </div>
            </div>

            <div className="service-showcase-content">
              <div className="service-showcase-header">
                <div className="service-number-display">{services[activeService].number}</div>
                <div>
                  <h3 className="service-showcase-title">{services[activeService].title}</h3>
                  <p className="service-showcase-subtitle">{services[activeService].subtitle}</p>
                </div>
              </div>

              <p className="service-showcase-description">
                {services[activeService].description}
              </p>

              <div className="service-showcase-details">
                <div className="service-showcase-section">
                  <h4 className="service-showcase-section-title">Key Features</h4>
                  <ul className="service-showcase-list">
                    {services[activeService].features.map((feature, idx) => (
                      <li key={idx} className="service-showcase-list-item">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-showcase-section">
                  <h4 className="service-showcase-section-title">Benefits</h4>
                  <ul className="service-showcase-list benefits-list">
                    {services[activeService].benefits.map((benefit, idx) => (
                      <li key={idx} className="service-showcase-list-item">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="service-cta-button">
                <span>Learn More</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Services Grid */}
          
        </div>
      </section>

      {/* Why Choose Us Section */}
      {/* Why Choose Us Section */}
<section className="why-choose">
  <div className="container">
    <div className="why-choose-wrapper">
      <div className="why-choose-left">
        <span className="section-label">Why Choose Us</span>
        <h2 className="section-title-large">
          Your trusted partner in <em>cybersecurity excellence</em>
        </h2>
        <p className="section-description-large">
          Kami menggabungkan keahlian teknis, pengalaman industri, dan komitmen terhadap 
          keunggulan untuk memberikan solusi keamanan informasi yang komprehensif dan efektif.
        </p>
        
        <div className="why-stats">
          <div className="why-stat-item">
            <div className="why-stat-number">15+</div>
            <div className="why-stat-label">Years Experience</div>
          </div>
          <div className="why-stat-divider"></div>
          <div className="why-stat-item">
            <div className="why-stat-number">100%</div>
            <div className="why-stat-label">Client Satisfaction</div>
          </div>
        </div>
      </div>

      <div className="why-choose-right">
        <div className="why-items-grid">
          <div className="why-item">
            <div className="why-item-header">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span className="why-number">01</span>
            </div>
            <h3 className="why-title">Certified Professionals</h3>
            <p className="why-description">
              Tim kami terdiri dari profesional bersertifikat internasional dengan keahlian 
              mendalam di bidang keamanan informasi.
            </p>
          </div>

          <div className="why-item">
            <div className="why-item-header">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M9 11l3 3L22 4"/>
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                </svg>
              </div>
              <span className="why-number">02</span>
            </div>
            <h3 className="why-title">Proven Methodology</h3>
            <p className="why-description">
              Menggunakan metodologi dan framework standar internasional yang telah terbukti 
              efektif dalam ratusan proyek.
            </p>
          </div>

          <div className="why-item">
            <div className="why-item-header">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <span className="why-number">03</span>
            </div>
            <h3 className="why-title">Customized Solutions</h3>
            <p className="why-description">
              Setiap solusi disesuaikan dengan kebutuhan spesifik bisnis Anda, bukan 
              one-size-fits-all approach.
            </p>
          </div>

          <div className="why-item">
            <div className="why-item-header">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <span className="why-number">04</span>
            </div>
            <h3 className="why-title">Continuous Support</h3>
            <p className="why-description">
              Dukungan berkelanjutan untuk memastikan implementasi yang sukses dan peningkatan 
              security posture yang konsisten.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="services-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to secure your digital assets?</h2>
            <p className="cta-description">
              Hubungi kami hari ini untuk konsultasi gratis dan temukan solusi keamanan 
              yang tepat untuk organisasi Anda.
            </p>
            <a href="/#contact" className="cta-button">
              <span>Get In Touch</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;