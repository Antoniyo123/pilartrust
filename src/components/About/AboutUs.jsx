import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
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
      bio: 'With over 20 years of experience in talent management and entertainment, Alexandra leads our global vision with strategic excellence.'
    },
    {
      name: 'James Rodriguez',
      position: 'Chief Operating Officer',
      bio: 'James brings operational expertise and innovation, ensuring our services exceed client expectations across all markets.'
    },
    {
      name: 'Sarah Chen',
      position: 'Chief Strategy Officer',
      bio: 'A visionary leader in brand partnerships and digital strategy, Sarah drives our expansion into new territories and platforms.'
    },
    {
      name: 'Michael Thompson',
      position: 'Chief Financial Officer',
      bio: 'Michael\'s financial acumen and business development expertise have been instrumental in our sustained growth and stability.'
    },
    {
      name: 'Diana Park',
      position: 'Chief Creative Officer',
      bio: 'Diana leads our creative initiatives, fostering innovation and ensuring our talents receive cutting-edge representation.'
    },
    {
      name: 'Robert Williams',
      position: 'Chief Legal Officer',
      bio: 'Robert protects our interests and those of our clients with comprehensive legal strategy and industry expertise.'
    }
  ];

  return (
    <section id="about" className="about-section">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <h1 className="hero-title">
                Managing artists, entertainers, creators, thought leaders, & athletes shaping popular culture, whose voices{' '}
                <em>inspire & entertain audiences.</em>
              </h1>
              <button className="btn-outline">
                <span className="icon">↳</span> FIND OUT MORE
              </button>
            </div>
            
            <div className="hero-middle">
              <p className="hero-description">
                As a full-service global talent management business, we provide more than just standard agency services, 
                specialising in growing international brands and reach for top-tier talent.
              </p>
            </div>
            
            <div className="hero-right">
              <p className="hero-description">
                We pride ourselves on our tailored approach, using our deep understanding of audiences, culture, 
                industry relationships, and expert teams to deliver world-class service that helps clients realise their ambitions.
              </p>
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
                  Founded with a vision to redefine talent management, we have grown into a global powerhouse 
                  representing some of the most influential voices in entertainment, sports, and creative industries.
                </p>
                <p>
                  Our approach combines traditional representation with innovative strategies, ensuring our clients 
                  not only succeed but lead in their respective fields. We understand that every talent is unique, 
                  and we craft bespoke solutions that align with their vision and values.
                </p>
              </div>
              
              <div className="company-text">
                <p>
                  With offices across major cities worldwide, we maintain a local presence with global reach. 
                  Our diverse team brings together expertise in brand partnerships, content creation, strategic 
                  planning, and business development.
                </p>
                <p>
                  We pride ourselves on building lasting relationships based on trust, transparency, and mutual success. 
                  Our commitment extends beyond contracts—we invest in the long-term growth and legacy of every client we represent.
                </p>
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
                To be the global leader in talent representation, creating lasting impact through authentic 
                partnerships and innovative strategies. We envision a future where creativity knows no bounds, 
                and every talent we represent becomes a cultural icon in their own right.
              </p>
            </div>
            
            <div className="vm-item">
              <div className="vm-number">02</div>
              <h3 className="vm-title">Our Mission</h3>
              <p className="vm-description">
                Empowering talents to reach their full potential while delivering world-class service through 
                deep industry expertise and cultural understanding. We are committed to fostering environments 
                where creativity thrives and opportunities multiply.
              </p>
            </div>
            
            <div className="vm-item">
              <div className="vm-number">03</div>
              <h3 className="vm-title">Our Values</h3>
              <p className="vm-description">
                Integrity, innovation, and excellence form the foundation of everything we do. We believe in 
                transparent relationships, bold thinking, and unwavering commitment to our clients' success. 
                Our values guide us in making decisions that benefit all stakeholders.
              </p>
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
          </div>
          
          <div className="bod-grid">
            {directors.map((director, index) => (
              <div key={index} className="bod-card">
                <div className="bod-avatar">
                  {director.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="bod-name">{director.name}</h3>
                <p className="bod-position">{director.position}</p>
                <p className="bod-bio">{director.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;