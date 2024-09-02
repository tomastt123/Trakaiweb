import React from 'react';

function ActivitiesItem({ image, name }) {
  return (
    <div className='ActivitiesItem'>
      <div style={{ backgroundImage: `url(${image})` }}></div>
      <h1>{name}</h1>
    </div>
  );
}

export default ActivitiesItem;
