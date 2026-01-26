import React from 'react';
import '../styles/CertificationCard.css';

const CertificationCard = ({ image, title, description }) => {
  return (
    <div className="cert-card">
      <div className="cert-card__image-wrapper">
        <img src={image} alt={title} className="cert-card__image" />
      </div>
      <div className="cert-card__content">
        <h3 className="cert-card__title">{title}</h3>
        <p className="cert-card__description">{description}</p>
      </div>
    </div>
  );
};

export default CertificationCard;