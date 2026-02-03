import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [selectedDirector, setSelectedDirector] = useState(null);

  const stats = [
    {
      number: '1B+',
      label: 'Combined social',
      sublabel: 'following'
    },
    {
      number: '1K+',
      label: 'Global',
      sublabel: 'talents'
    },
    {
      number: '5+',
      label: 'Global',
      sublabel: 'offices'
    }
  ];

  const directors = [
  {
    name: 'Alexandra Mitchell',
    position: 'Chief Executive Officer',
    image: require('../../img/profile.jpg'), // Tambahkan path gambar
    bio: 'With over 20 years of experience in talent management and entertainment, Alexandra leads our global vision with strategic excellence.',
    fullBio: 'Alexandra Mitchell brings over two decades of distinguished experience in talent management and entertainment. As CEO, she spearheads our global vision with strategic excellence and innovative thinking. Her leadership has transformed the company into a powerhouse of talent representation, establishing partnerships with major brands and entertainment studios worldwide. Alexandra\'s expertise spans artist development, brand strategy, and corporate governance, making her one of the most respected figures in the industry.',
    education: 'MBA - Harvard Business School, BA - Stanford University',
    specialization: 'Strategic Leadership, Brand Partnerships, Corporate Governance'
  },
  {
    name: 'James Rodriguez',
    position: 'Chief Operating Officer',
    image: require('../../img/profile1.jpg'),
    bio: 'James brings operational expertise and innovation, ensuring our services exceed client expectations across all markets.',
    fullBio: 'James Rodriguez is a seasoned operations executive with a proven track record of scaling businesses globally. As COO, he oversees all operational aspects of the company, ensuring seamless delivery of services across markets. His innovative approach to process optimization and team management has been instrumental in maintaining our reputation for excellence. James has successfully led numerous high-profile campaigns and operational transformations.',
    education: 'MS Operations Management - MIT, BBA - UC Berkeley',
    specialization: 'Operations Strategy, Process Optimization, Global Scaling'
  },
  {
    name: 'Sarah Chen',
    position: 'Chief Strategy Officer',
    image: require('../../img/profile2.jpg'),
    bio: 'A visionary leader in brand partnerships and digital strategy, Sarah drives our expansion into new territories and platforms.',
    fullBio: 'Sarah Chen is a visionary strategist who has revolutionized our approach to brand partnerships and digital presence. With deep expertise in emerging markets and platform dynamics, she has been the driving force behind our expansion into Asia-Pacific and digital-first initiatives. Sarah\'s ability to identify trends before they become mainstream has positioned our clients at the forefront of cultural movements.',
    education: 'PhD Strategy & Innovation - INSEAD, MSc - London School of Economics',
    specialization: 'Digital Strategy, Market Expansion, Brand Partnerships'
  },
  {
    name: 'Michael Thompson',
    position: 'Chief Financial Officer',
    image: require('../../img/profile3.jpg'),
    bio: 'Michael\'s financial acumen and business development expertise have been instrumental in our sustained growth and stability.',
    fullBio: 'Michael Thompson combines sharp financial acumen with strategic business development expertise. As CFO, he has been instrumental in securing major investments, managing global finances, and driving sustainable growth. His conservative yet progressive approach to financial planning has ensured the company\'s stability while enabling ambitious expansion plans. Michael has led several successful fundraising rounds and M&A activities.',
    education: 'CPA, MBA Finance - Wharton School, BS Accounting - NYU',
    specialization: 'Financial Strategy, Investment Management, M&A'
  },
  {
    name: 'Diana Park',
    position: 'Chief Creative Officer',
    image: require('../../img/profile3.jpg'),
    bio: 'Diana leads our creative initiatives, fostering innovation and ensuring our talents receive cutting-edge representation.',
    fullBio: 'Diana Park is an award-winning creative director whose innovative campaigns have redefined talent representation. She leads all creative initiatives, from brand collaborations to content production, ensuring our talents stand out in an increasingly crowded marketplace. Diana\'s background in advertising and entertainment production brings a unique perspective to talent management, resulting in groundbreaking campaigns that capture cultural zeitgeist.',
    education: 'MFA - Royal College of Art, BA Communications - UCLA',
    specialization: 'Creative Direction, Content Strategy, Brand Innovation'
  },
  {
    name: 'Robert Williams',
    position: 'Chief Legal Officer',
    image: require('../../img/profile1.jpg'),
    bio: 'Robert protects our interests and those of our clients with comprehensive legal strategy and industry expertise.',
    fullBio: 'Robert Williams is a distinguished legal expert specializing in entertainment law and intellectual property. As Chief Legal Officer, he safeguards both company and client interests through comprehensive legal strategies and proactive risk management. His deep understanding of contract law, rights management, and regulatory compliance across multiple jurisdictions has been crucial in navigating the complex legal landscape of global talent management.',
    education: 'JD - Yale Law School, LLM Entertainment Law - USC',
    specialization: 'Entertainment Law, IP Rights, Contract Negotiation'
  }
];

  const openModal = (director) => {
    setSelectedDirector(director);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedDirector(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  return (
    <section id="about" className="about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <h1 className="hero-title-about">
                Governance, Risk and Compliance
             <em>Integration Solution</em>
              </h1>
              <button className="btn-outline">
                <span className="icon">↳</span> FIND OUT MORE
              </button>
            </div>
            
            <div className="hero-middle">
              <p className="hero-description-about">
                Perkembangan teknologi informasi dan transformasi
digital yang pesat mendorong organisasi untuk
memperkuat tata kelola, keamanan informasi,
kepatuhan regulasi, serta ketahanan operasional
bisnis.              </p>
              <p className="hero-description-about">
                Di tengah meningkatnya kompleksitas sistem
dan ancaman siber, PT Pilar lntegrasi Solusindo
(PILAR TRUST) hadir sebagai mitra profesional yang
membantu organisasi membangun, menerapkan, dan
meningkatkan sistem manaiemen serta keamanan
informasi yang andal dan berkelaniutan.              </p>
            </div>
            
            <div className="hero-right">
              <div className="hero-image-wrapper">
                <img 
                  src={require("../../img/team.jpg")} 
                  alt="Our Team" 
                  className="hero-team-image"
                />
                <div className="hero-image-overlay">
                  <span className="image-label">Our Global Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">
                  {stat.label} <em>{stat.sublabel}</em>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Company Section */}
      <div className="company-section">
        <div className="container">
          <div className="company-content">
            <div className="section-header">
              <span className="section-label">About Company</span>
              <h2 className="section-title">
                Building bridges between <em>talent and opportunity</em>
              </h2>
            </div>
            
            <div className="company-grid">
              <div className="company-text">
                <p>
                  Sebagai perusahaan jasa profesional, PILAR TRUST menyediakan
layanan Konsultasi, Audit, Vulnerability Assessment, Pelatihan, serta
Penyusunan dan Pengembangan Dokumen Kebijakan dan Prosedur.
Didukung oleh tenaga ahli berpengalaman d i bidang sistem
manajemen, keamanan informasi, teknologi informasi, dan manajemen
risiko, kami menghadirkan solusi yang komprehensif dan disesuaikan
dengan kebutuhan organisasi.                </p>
                <p>
                   </p>
              </div>
              
              <div className="company-text">
                <p>
                   Melalui pendekatan yang profesional, independen, dan berorientasi
pada peningkatan berkelanjutan, PILAR TRUST berkomitmen menjadi
mitra strategis dalam meningkatkan keandalan sistem, kepatuhan
terhadap regulasi, serta kepercayaan para pemangku kepentingan.          
                </p>
                {/* <p>
                  We pride ourselves on building lasting relationships based on trust, transparency, and mutual success. 
                  Our commitment extends beyond contracts—we invest in the long-term growth and legacy of every client we represent.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Mission Section */}
      <div className="vision-mission-section">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-item">
              <div className="vm-number">01</div>
              <h3 className="vm-title">Our Vision</h3>
              <p className="vm-description">
                Menjadi mitra terpercaya dalam
membantu membangun ekosistem
Organisasi yang aman, berkelanjutan
dan berstandar global melalui
layanan konsultasi, penilaian,
pelatihan dan audit sistem manajemen
yang terintegrasi dan inovatif."              </p>
            </div>
            
            <div className="vm-item">
              <div className="vm-number">02</div>
              <h3 className="vm-title">Our Mission</h3>
              <p className="vm-description">
                Menyediakan layanan konsultasi, audit, dan keamanan
sistem dengan standar profesional tertinggi. Membangun kepatuhan, keandalan, dan ketahanan
organisasi klien secara berkelanjutan. Mengembangkan kapabilitas dan tata kelola melalui
pelatihan serta dokumentasi yang unggul. Menjadi mitra strategis yang dipercaya dalam setiap
tahapan peningkatan organisasi.              </p>
            </div>
            
            
          </div>
        </div>
      </div>

      {/* Board of Directors Section */}
      <div className="bod-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">
              Meet our <em>Board of Directors</em>
            </h2>
            <p className="section-description">Click on any director to view their full profile</p>
          </div>
          
          <div className="bod-grid">
  {directors.map((director, index) => (
    <div 
      key={index} 
      className="bod-card"
      onClick={() => openModal(director)}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && openModal(director)}
    >
      <div className="bod-avatar">
        <img src={director.image} alt={director.name} />
      </div>
      <h3 className="bod-name">{director.name}</h3>
      <p className="bod-position">{director.position}</p>
      <p className="bod-bio">{director.bio}</p>
      <span className="view-profile">View Profile →</span>
    </div>
  ))}
</div>
        </div>
      </div>

      {/* Director Profile Modal */}
      {selectedDirector && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-header">
  <div className="modal-avatar">
    <img src={selectedDirector.image} alt={selectedDirector.name} />
  </div>
  <div className="modal-title-group">
    <h2 className="modal-name">{selectedDirector.name}</h2>
    <p className="modal-position">{selectedDirector.position}</p>
  </div>
</div>

            <div className="modal-body">
              <div className="modal-section">
                <h3 className="modal-section-title">Biography</h3>
                <p className="modal-text">{selectedDirector.fullBio}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Education</h3>
                <p className="modal-text">{selectedDirector.education}</p>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Areas of Specialization</h3>
                <p className="modal-text">{selectedDirector.specialization}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutUs;