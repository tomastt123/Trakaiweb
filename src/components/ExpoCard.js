// File: src/components/ExpoCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ExpoCard.css';

const ExpoCard = ({ link, title, description, imageSrc }) => {
  return (
    <div className="expo-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imageSrc} alt={title} className="expo-card-image" />
      <Link to={link}>
        <button className="expo-card-button">Read More</button>
      </Link>
    </div>
  );
};

export default ExpoCard;



