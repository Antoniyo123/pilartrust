import React, { useEffect } from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  // Scroll to top when component loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      number: '01',
      title: 'Konsultasi',
      subtitle: 'Strategic Security Consultation',
      description: 'Kami menyediakan layanan konsultasi keamanan informasi yang komprehensif untuk membantu organisasi Anda memahami landscape keamanan cyber saat ini. Tim ahli kami akan menganalisis infrastruktur IT Anda dan memberikan rekomendasi strategis yang disesuaikan dengan kebutuhan bisnis.',
      features: [
        'Risk Assessment & Analysis',
        'Security Architecture Review',
        'Compliance Gap Analysis',
        'Strategic Security Roadmap',
        'Security Governance Framework'
      ]
    },
    {
      number: '02',
      title: 'Audit',
      subtitle: 'Comprehensive Security Audit',
      description: 'Layanan audit keamanan menyeluruh untuk mengevaluasi efektivitas kontrol keamanan yang ada dalam organisasi Anda. Kami menggunakan metodologi audit standar internasional untuk memastikan compliance dan mengidentifikasi area yang perlu ditingkatkan.',
      features: [
        'ISO 27001 Compliance Audit',
        'Internal Security Audit',
        'Third-party Risk Assessment',
        'Security Controls Evaluation',
        'Audit Report & Recommendations'
      ]
    },
    {
      number: '03',
      title: 'Pengujian Kerentanan Sistem',
      subtitle: 'Vulnerability Assessment & Penetration Testing',
      description: 'Identifikasi dan evaluasi kerentanan dalam sistem IT Anda sebelum dieksploitasi oleh pihak yang tidak bertanggung jawab. Kami menggunakan tools dan metodologi terkini untuk melakukan penetration testing yang komprehensif.',
      features: [
        'Network Vulnerability Scanning',
        'Web Application Penetration Testing',
        'Mobile Application Security Testing',
        'Social Engineering Assessment',
        'Red Team Operations'
      ]
    },
    {
      number: '04',
      title: 'Pelatihan',
      subtitle: 'Security Awareness & Training',
      description: 'Program pelatihan keamanan informasi yang dirancang untuk meningkatkan awareness dan kompetensi tim Anda. Dari security awareness untuk end-users hingga technical training untuk IT professionals.',
      features: [
        'Security Awareness Program',
        'Technical Security Training',
        'ISO 27001 Implementation Training',
        'Incident Response Training',
        'Customized Training Modules'
      ]
    },
    {
      number: '05',
      title: 'Pembuatan & Pengembangan Dokumen',
      subtitle: 'Policy & Procedure Development',
      description: 'Kami membantu organisasi Anda dalam menyusun dan mengembangkan dokumen kebijakan dan prosedur keamanan informasi yang sesuai dengan standar internasional dan regulasi yang berlaku.',
      features: [
        'Information Security Policy',
        'Standard Operating Procedures',
        'Business Continuity Plan',
        'Incident Response Plan',
        'Security Guidelines & Standards'
      ]
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

      {/* Services Detail */}
      <section className="services-detail">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-header">
                <div className="service-number">{service.number}</div>
                <div className="service-title-group">
                  <h2 className="service-title">{service.title}</h2>
                  <p className="service-subtitle">{service.subtitle}</p>
                </div>
              </div>
              
              <div className="service-content">
                <div className="service-description">
                  <p>{service.description}</p>
                </div>
                
                <div className="service-features">
                  <h4 className="features-title">Key Features:</h4>
                  <ul className="features-list">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="feature-item">{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <div className="section-header-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title-center">
              Your trusted partner in <em>cybersecurity excellence</em>
            </h2>
          </div>

          <div className="why-choose-grid">
            <div className="why-item">
              <div className="why-icon">✓</div>
              <h3 className="why-title">Certified Professionals</h3>
              <p className="why-description">
                Tim kami terdiri dari profesional bersertifikat internasional dengan keahlian mendalam 
                di bidang keamanan informasi.
              </p>
            </div>

            <div className="why-item">
              <div className="why-icon">✓</div>
              <h3 className="why-title">Proven Methodology</h3>
              <p className="why-description">
                Menggunakan metodologi dan framework standar internasional yang telah terbukti efektif 
                dalam ratusan proyek.
              </p>
            </div>

            <div className="why-item">
              <div className="why-icon">✓</div>
              <h3 className="why-title">Customized Solutions</h3>
              <p className="why-description">
                Setiap solusi disesuaikan dengan kebutuhan spesifik bisnis Anda, bukan one-size-fits-all approach.
              </p>
            </div>

            <div className="why-item">
              <div className="why-icon">✓</div>
              <h3 className="why-title">Continuous Support</h3>
              <p className="why-description">
                Dukungan berkelanjutan untuk memastikan implementasi yang sukses dan peningkatan 
                security posture yang konsisten.
              </p>
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
              <span className="cta-icon">↗</span> Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;