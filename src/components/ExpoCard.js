// File: src/components/ExpoCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ExpoCard.css';

const ExpoCard = ({ link, title, description, imageSrc }) => {
  return (
    <div className="expo-card">
      <div className="expo-card-image-container">
        <img src={imageSrc} alt={title} className="expo-card-image" />
      </div>
      <div className="expo-card-content">
        <h3 className="expo-card-title">{title}</h3>
        <p className="expo-card-description">{description}</p>
        <Link to={link}>
          <button className="expo-card-button">Read More</button>
        </Link>
      </div>
    </div>
  );
};

export default ExpoCard;
