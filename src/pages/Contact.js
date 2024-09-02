import React from 'react'
import Trakupilisleft from '../assets/trakupilisleft.jpg'
import Trakupilisright from'../assets/trakupilisright.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div 
            className='leftSide'
            style={{ backgroundImage: `url(${Trakupilisleft})`}}
        ></div>
        <div className='rightSide'>
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
  )
}

export default Contact