import React from 'react';
import Trakupilisleft from '../assets/trakupilisleft.jpg';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${Trakupilisleft})` }}></div>

      <div className='rightSide'>
        <div className="map-section">
          <iframe
            title="Trakai Castle Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2291.682264142723!2d24.926582916187657!3d54.65256998027868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e722a426600033%3A0x8693c8748f0fc84d!2sTrakai%20Island%20Castle!5e0!3m2!1sen!2slt!4v1637088412232!5m2!1sen!2slt"
            width="100%"  // Adjusted width to make it responsive
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        <h1>Get in Touch</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name:</label>
          <input name="name" placeholder='Enter full name...' type='text' />
          <label htmlFor="email">E-Mail address:</label>
          <input name="email" placeholder='Enter E-Mail address...' type='text' />
          <label htmlFor="message">Message:</label>
          <textarea rows="6" placeholder='Enter message..' name="message" required> </textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
