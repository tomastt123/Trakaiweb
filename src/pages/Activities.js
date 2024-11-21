import React from 'react';
import { ActivitiesList } from '../helpers/ActivitiesList';
import ActivitiesItem from '../components/ActivitiesItem';
import '../styles/Activities.css';
import Background from '../assets/trakai-background.jpg';
import { MenuItem } from '@mui/material'; /*for future use*/


function Activities() {
  return (
    <div className='Activities'>
      <h1 className='ActivitiesTitle'>Activities</h1>
      <div className='ActivitiesList'>
        {ActivitiesList.map((activity, key) => {
          return (
            <ActivitiesItem
              key={key}
              image={activity.image}
              name={activity.name}
              description={activity.description}
              link={activity.link}  // Pass the link to the ActivitiesItem component
            />
          );
        })}
      </div>
    </div>
  );
}

export default Activities;
