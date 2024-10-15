import React from 'react';
import { Link } from 'react-router-dom';

function ActivitiesItem({ image, name, description, link }) {
  return (
    <Link to={link} className='ActivitiesItem'>
    <div className='ActivitiesItem'>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
    </Link>
  );
}

export default ActivitiesItem;
