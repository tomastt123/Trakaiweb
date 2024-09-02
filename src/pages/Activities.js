import React from 'react';
import { ActivitiesList } from '../helpers/ActivitiesList';
import ActivitiesItem from '../components/ActivitiesItem';
import '../styles/Activities.css';
import { MenuItem } from '@mui/material';

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
            />
          );
        })}
      </div>
    </div>
  );
}

export default Activities;
