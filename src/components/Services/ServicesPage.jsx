import React, { useEffect, useState } from 'react';
import './ServicesPage.css';

const ServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ───────────────────── CLIENT CATEGORIES DATA ───────────────────── */
  const clientCategories = [
    {
      category: 'Perbankan, Keuangan, Investasi & Pasar Berjangka',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18"/>
          <path d="M3 10h18"/>
          <path d="M5 6l7-3 7 3"/>
          <path d="M4 10v11"/>
          <path d="M20 10v11"/>
          <path d="M8 14v3"/>
          <path d="M12 14v3"/>
          <path d="M16 14v3"/>
        </svg>
      ),
      clients: [
        'Bank Mandiri',
        'Bank Rakyat Indonesia (BRI)',
        'Bank Negara Indonesia (BNI)',
        'Bank Central Asia (BCA)',
        'Bank CIMB Niaga',
        'OJK (Otoritas Jasa Keuangan)',
        'PT Indonesia Stock Exchange',
        'Bank Syariah Indonesia'
      ]
    },
    {
      category: 'Telekomunikasi, Teknologi & Data',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
          <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
          <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
          <circle cx="12" cy="20" r="1" fill="currentColor"/>
        </svg>
      ),
      clients: [
        'Telkom Indonesia',
        'XL Axiata',
        'Indosat Ooredoo Hutchison',
        'Telkomsel',
        'Google Indonesia',
        'Microsoft Indonesia',
        'AWS Asia Pacific',
        'Gojek Tech'
      ]
    },
    {
      category: 'Perusahaan Umum, Perdagangan & Enterprise',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
          <line x1="12" y1="12" x2="12.01" y2="12"/>
        </svg>
      ),
      clients: [
        'Unilever Indonesia',
        'Procter & Gamble Indonesia',
        'Indomobil Group',
        'Astra International',
        'Sinarmas Group',
        'PERTAMINA',
        'Djarum Group',
        'Bumi Resources'
      ]
    },
    {
      category: 'Fintech, Startup & Platform Digital',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <line x1="2" y1="10" x2="22" y2="10"/>
          <path d="M6 15h2"/>
          <path d="M12 15h4"/>
        </svg>
      ),
      clients: [
        'GoPay',
        'OVO',
        'Dana',
        'ShopeePay',
        'Akulaku',
        'Traveloka',
        'Tokopedia',
        'Bukalapak'
      ]
    },
    {
      category: 'Instansi Pemerintah & BUMN',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 21h18"/>
          <path d="M5 21V9"/>
          <path d="M19 21V9"/>
          <path d="M12 3L3 9h18z"/>
          <path d="M9 21v-6h6v6"/>
        </svg>
      ),
      clients: [
        'Badan Siber dan Sandi Negara (BSSN)',
        'Kementerian Komunikasi & Informatika',
        'Kementerian Keuangan',
        'BPJS Kesehatan',
        'PLN Indonesia',
        'BPOM (Badan Pengawas Obat & Makanan)',
        'Pemda DKI Jakarta',
        'Komnas HAM'
      ]
    },
    {
      category: 'Asuransi',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="M9 12l2 2 4-4"/>
        </svg>
      ),
      clients: [
        'Asuransi Jiwa Manulife Indonesia',
        'Asuransi Allianz Indonesia',
        'AXA Mandiri',
        'Prudential Indonesia',
        'Asuransi Sinarmas Life',
        'Jasindo',
        'Asuransi AVIVA Indonesia',
        'TOKO Asuransi'
      ]
    },
    {
      category: 'Pendidikan',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
      clients: [
        'Universitas Indonesia (UI)',
        'Institut Teknologi Bandung (ITB)',
        'Universitas Gadjah Mada (UGM)',
        'Institut Teknologi Surabaya (ITS)',
        'Universitas Diponegoro',
        'STMIK AMIK',
        'Binus University',
        'Universitas Trisakti'
      ]
    },
    {
      category: 'Organisasi Internasional / NGO',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <ellipse cx="12" cy="12" rx="4" ry="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
        </svg>
      ),
      clients: [
        'United Nations (UN)',
        'UNICEF Indonesia',
        'World Bank Indonesia',
        'WHO Indonesia',
        'Asian Development Bank',
        'USAID Indonesia',
        'International Red Cross',
        'WWF Indonesia'
      ]
    }
  ];

  /* ───────────────────── SERVICES DATA (unchanged) ───────────────────── */
  const services = [
    {
      number: '01',
      title: 'Konsultasi',
      subtitle: 'Strategic Security Consultation',
      description: 'PILAR TRUST menyediakan layanan konsultasi untuk membantu organisasi dalam membangun, menerapkan, dan meningkatkan sistem manajemen serta tata kelola organisasi. Layanan konsultasi dilakukan secara terstruktur dan disesuaikan dengan kebutuhan serta karakteristik organisasi klien.',
      image: require('../../img/profile.jpg'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      features: [
        'Analisis kebutuhan dan kesiapan organisasi',
        'Pendampingan penerapan sistem dan standar',
        'Manajemen risiko dan kepatuhan',
        'Pengembangan kebijakan, prosedur, dan dokumen pendukung',
        'Pendampingan audit dan evaluasi',
        'Transfer pengetahuan dan peningkatan kapabilitas internal'
      ],
      benefits: [
        'Identify critical security gaps',
        'Reduce operational risks',
        'Improve compliance posture',
        'Strategic security planning'
      ],
      stats: { projects: '50+', clients: '30+', success: '98%' }
    },
    {
      number: '02',
      title: 'Audit',
      subtitle: 'Comprehensive Security Audit',
      description: 'Kami menyediakan layanan audit yang independen dan objektif untuk menilai kesesuaian, efektivitas, dan kinerja sistem manajemen serta tata kelola organisasi. Audit dilakukan untuk mengidentifikasi tingkat kepatuhan, potensi risiko, serta peluang perbaikan yang dapat meningkatkan keandalan sistem.',
      image: require('../../img/profile2.jpg'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
      ),
      features: [
        'Perencanaan audit internal berbasis risiko',
        'Pelaksanaan audit dan pengujian kontrol',
        'Identifikasi serta analisis temuan audit',
        'Penyusunan laporan audit dan rekomendasi perbaikan',
        'Pendampingan tindak lanjut dan pemantauan perbaikan'
      ],
      benefits: [
        'Ensure regulatory compliance',
        'Validate security controls',
        'Independent assessment',
        'Actionable recommendations'
      ],
      stats: { projects: '40+', clients: '25+', success: '100%' }
    },
    {
      number: '03',
      title: 'Pengujian Kerentanan Sistem',
      subtitle: 'Vulnerability Assessment & Penetration Testing',
      description: 'Membantu organisasi mengidentifikasi dan mengevaluasi potensi kerentanan pada sistem informasi, infrastruktur, aplikasi, dan jaringan guna menurunkan risiko keamanan secara terukur.',
      image: require('../../img/profile3.jpg'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      features: [
        'Perencanaan dan penentuan ruang lingkup pengujian',
        'Identifikasi aset dan permukaan serangan',
        'Pemindaian dan analisis kerentanan',
        'Evaluasi tingkat risiko keamanan',
        'Pelaporan hasil dan rekomendasi perbaikan',
        'Konsultasi dan pendampingan tindak lanjut'
      ],
      benefits: [
        'Discover hidden vulnerabilities',
        'Prevent security breaches',
        'Real-world attack simulation',
        'Detailed remediation guidance'
      ],
      stats: { projects: '60+', clients: '35+', success: '95%' }
    },
    {
      number: '04',
      title: 'Pelatihan',
      subtitle: 'Security Awareness & Training',
      description: 'Kami menyelenggarakan layanan pelatihan untuk meningkatkan pemahaman, kompetensi, dan kesadaran sumber daya manusia dalam penerapan sistem manajemen, keamanan informasi, serta tata kelola organisasi.',
      image: require('../../img/profile1.jpg'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
      ),
      features: [
        'Pelatihan awareness dan pemahaman dasar',
        'Pelatihan teknis dan fungsional sesuai peran',
        'Pelatihan berbasis standar dan regulasi',
        'Workshop dan simulasi penerapan',
        'Evaluasi dan dokumentasi pelatihan'
      ],
      benefits: [
        'Enhance team capabilities',
        'Reduce human error risks',
        'Build security culture',
        'Certification preparation'
      ],
      stats: { projects: '80+', clients: '45+', success: '97%' }
    },
    {
      number: '05',
      title: 'Pembuatan & Pengembangan Dokumen',
      subtitle: 'Policy & Procedure Development',
      description: 'PILAR TRUST membantu organisasi dalam penyusunan dan pengembangan dokumen kebijakan dan prosedur sebagai fondasi sistem manajemen yang efektif dan berkelanjutan. Layanan ini mencakup penyusunan kebijakan, pedoman, prosedur, serta dokumentasi pendukung lainnya yang dibutuhkan organisasi.',
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
        'Analisis kebutuhan dan kesenjangan dokumen',
        'Penyusunan kebijakan, SOP, dan dokumen pendukung',
        'Pengembangan dan penyempurnaan dokumen',
        'Penyesuaian terhadap standar dan regulasi',
        'Pendampingan implementasi dan sosialisasi',
        'Pengendalian dan pemeliharaan dokumen'
      ],
      benefits: [
        'Standardized processes',
        'Clear governance structure',
        'Compliance documentation',
        'Operational excellence'
      ],
      stats: { projects: '70+', clients: '40+', success: '99%' }
    }
  ];

  /* ───────────────────────── RENDER ───────────────────────── */
  return (
    <div className="services-page">

      {/* ── Hero ── */}
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

      {/* ── Overview ── */}
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

      {/* ── Services Detail ── */}
      <section className="services-detail">
        <div className="container">
          <div className="services-detail-header">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our <em>Services Portfolio</em></h2>
          </div>

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

          <div className="service-showcase">
            <div className="service-showcase-left">
              <div className="service-showcase-image">
                <img src={services[activeService].image} alt={services[activeService].title} />
                <div className="service-image-overlay">
                  <div className="service-overlay-icon">{services[activeService].icon}</div>
                </div>
              </div>
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
              <p className="service-showcase-description">{services[activeService].description}</p>
              <div className="service-showcase-details">
                <div className="service-showcase-section">
                  <h4 className="service-showcase-section-title">Key Features</h4>
                  <ul className="service-showcase-list">
                    {services[activeService].features.map((feature, idx) => (
                      <li key={idx} className="service-showcase-list-item">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-showcase-section">
                  <h4 className="service-showcase-section-title">Benefits</h4>
                  <ul className="service-showcase-list benefits-list">
                    {services[activeService].benefits.map((benefit, idx) => (
                      <li key={idx} className="service-showcase-list-item">{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <button className="service-cta-button">
                <span>Learn More</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
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

      {/* ══════════════════════════════════════════════════════════════
           ██  CLIENT PORTFOLIO  ██  — baru ditambahkan
           ══════════════════════════════════════════════════════════════ */}
      <section className="client-portfolio">
        <div className="container">

          {/* Header */}
          <div className="client-portfolio-header">
            <span className="section-label">Our Clients</span>
            <h2 className="section-title">Trusted by <em>leading organizations</em></h2>
            <p className="client-portfolio-sub">
              Organisasi dari berbagai sektor industri telah mempercayakan keamanan informasi mereka kepada PILAR TRUST.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="client-category-tabs">
            {clientCategories.map((cat, idx) => (
              <button
                key={idx}
                className={`client-tab ${activeCategory === idx ? 'active' : ''}`}
                onClick={() => setActiveCategory(idx)}
              >
                <span className="client-tab-number">{String(idx + 1).padStart(2, '0')}</span>
                <span className="client-tab-label">{cat.category}</span>
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <div className="client-display">
            {/* Title bar */}
            <div className="client-display-header">
              <div className="client-display-title-wrap">
                <span className="client-display-number">{String(activeCategory + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="client-display-title">{clientCategories[activeCategory].category}</h3>
                  <p className="client-display-count">{clientCategories[activeCategory].clients.length} klien</p>
                </div>
              </div>
              <div className="client-display-icon">
                {clientCategories[activeCategory].icon}
              </div>
            </div>

            {/* Logo grid */}
            <div className="client-logo-grid">
              {clientCategories[activeCategory].clients.map((client, idx) => (
                <div key={idx} className="client-logo-card">
                  <div className="client-logo-placeholder">
                    <span className="client-logo-initial">{client.charAt(0)}</span>
                  </div>
                  <span className="client-logo-name">{client}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom stats strip */}
          <div className="client-stats-strip">
            <div className="client-stat">
              <span className="client-stat-number">8</span>
              <span className="client-stat-label">Kategori Industri</span>
            </div>
            <div className="client-stat-divider"></div>
            <div className="client-stat">
              <span className="client-stat-number">50+</span>
              <span className="client-stat-label">Klien Aktif</span>
            </div>
            <div className="client-stat-divider"></div>
            <div className="client-stat">
              <span className="client-stat-number">100%</span>
              <span className="client-stat-label">Kepuasan Klien</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
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