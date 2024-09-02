// File: src/components/EventCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/EventCard.css';

const EventCard = ({ link, title, description, imageSrc }) => {
  return (
    <div className="event-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <img src={imageSrc} alt={title} className="event-card-image" />
      <Link to={link}>
        <button className="event-card-button">Read More</button>
      </Link>
    </div>
  );
};

export default EventCard;
