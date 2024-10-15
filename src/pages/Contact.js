// File: src/pages/Contact.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';  // Import Google Maps components
import Trakupilisleft from '../assets/trakupilisleft.jpg';
import '../styles/Contact.css';

const containerStyle = {
  width: '100%',
  height: '300px',  // Set map height
};

const center = {
  lat: 54.652600,  // Latitude of Trakai Castle
  lng: 24.933200,  // Longitude of Trakai Castle
};

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${Trakupilisleft})` }}></div>

      <div className='rightSide'>
        {/* Google Maps Section */}
        <div className="map-container">
          <LoadScript googleMapsApiKey="AIzaSyD9hrjJcNAnKzfIpyEI1dV8_WGHchTFIf4"> {/* Replace with your API key */}
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
            >
              {/* Marker for Trakai Castle */}
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

        <h1>Get in Touch</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name:</label>
          <input name="name" placeholder='Enter full name...' type='text' />
          <label htmlFor="email">E-Mail address:</label>
          <input name="email" placeholder='Enter E-Mail address...' type='text' />
          <label htmlFor="message">Message:</label>
          <textarea rows="6" placeholder='Enter message..' name="message" required> </textarea>
          <button type="submit"> Send Message </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
