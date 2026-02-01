import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__top">
          <div className="about__column about__column--main">
            <h2 className="about__title">
              Pilar is a leading ISO certification consulting firm dedicated to helping organizations achieve and maintain international management system standards. <em>With years of expertise across various industries.</em>
            </h2>
            <button className="about__button">
              <span className="about__button-icon">↙</span>
              FIND OUT MORE
            </button>
          </div>
          <div className="about__column">
            <p className="about__text">
              We provide comprehensive solutions tailored to your business needs. Our team of certified consultants and auditors work closely with you to ensure compliance, improve operational efficiency, and enhance your organization's credibility in the marketplace.
            </p>
          </div>
          <div className="about__column">
            <div className="about__image-small">
              <img src={require("../img/team.jpg")} alt="ISO Certification" />
            </div>
          </div>
        </div>
        
        <div className="about__stats">
          <div className="about__stat">
            <div className="about__stat-number">500<span className="about__stat-plus">+</span></div>
            <div className="about__stat-label">
              <span className="about__stat-label-main">Certified</span>
              <span className="about__stat-label-sub">Companies</span>
            </div>
          </div>
          <div className="about__stat-divider"></div>
          <div className="about__stat">
            <div className="about__stat-number">15<span className="about__stat-plus">+</span></div>
            <div className="about__stat-label">
              <span className="about__stat-label-main">Years</span>
              <span className="about__stat-label-sub">Experience</span>
            </div>
          </div>
          <div className="about__stat-divider"></div>
          <div className="about__stat">
            <div className="about__stat-number">98<span className="about__stat-plus">%</span></div>
            <div className="about__stat-label">
              <span className="about__stat-label-main">Success</span>
              <span className="about__stat-label-sub">Rate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;