import React, { useState } from 'react';
import '../../styles/GuidedTours.css';
import castleTour from '../../assets/castle-tour.webp';
import trakaiMuseum5 from '../../assets/trakai-museum5.jpg';
import galve1 from '../../assets/galve1.webp';
import galve2 from '../../assets/galve2.avif';
import aukstadvaris1 from '../../assets/aukstadvaris1.jpg';
import aukstadvaris2 from '../../assets/aukstadvaris2.jpg';
import aukstadvaris3 from '../../assets/aukstadvaris3.png';
import aukstadvaris4 from '../../assets/aukstadvaris4.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Parks() {
  const [date, setDate] = useState(new Date());
  const [activity, setActivity] = useState('Trakai Castle tour');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted');
  };

  return (
    <div className="guided-tours">
      <h1>Parks in Trakai</h1>
      <p>Trakai is not only known for its stunning lakes and historical sites but also for its beautiful parks that provide a perfect escape into nature. Whether you're looking to enjoy a leisurely stroll, have a picnic, or engage in outdoor activities, the parks in Trakai offer something for everyone.</p>

      <div className="tour-section">
        <div className="tour-card">
          <h2>Trakai Historical National Park</h2>
          <p>Covering over 8,000 hectares, the Trakai Historical National Park is a treasure trove of natural beauty and cultural heritage. This expansive park is home to diverse landscapes, including forests, lakes, and wetlands, making it a haven for wildlife and nature enthusiasts.</p>
          <p>Highlights:</p>
          <ul>
            <li>The park features several marked hiking and biking trails that allow visitors to explore its scenic beauty while learning about the local flora and fauna.
            </li>
            <li>Historical landmarks, such as the famous Trakai Island Castle, can be found within the park, offering a perfect blend of nature and history.
            </li>
            <li>Visitors can enjoy birdwatching, with various species nesting in the park's tranquil environments.
            </li>
          </ul>
          <img src={trakaiMuseum5} className="activity-photo" alt='Guided tour' />
          <img src={castleTour} className="activity-photo" alt='Guided tour' />
        </div>

        <div className="tour-card">
          <h2>Lake Galvė Park</h2>
          <p>Nestled alongside the picturesque Lake Galvė, this park is an ideal spot for relaxation and recreation. With its lush greenery and stunning lake views, it’s perfect for families, couples, and solo travelers.</p>
          <p>Highlights:</p>
          <ul>
            <li>Enjoy walking or cycling along the well-maintained paths that wind through the park, providing access to beautiful viewpoints of the lake and the castle.
            </li>
            <li>Several picnic areas are available, equipped with benches and tables, making it a perfect spot to enjoy a meal surrounded by nature.
            </li>
            <li>The park also features playgrounds for children, ensuring a fun-filled day for families.
            </li>
          </ul>
         <img src={galve1} className="activity-photo" alt='Museum tour' />
          <img src={galve2} className="activity-photo" alt='Museum tour' />
        </div>

        <div className="tour-card">
          <h2>Aukštadvaris Regional Park</h2>
          <p>Located a short drive from Trakai, Aukštadvaris Regional Park offers an escape into nature with its vast forests, meandering rivers, and serene lakes. This lesser-known gem is perfect for those seeking tranquility away from the bustling tourist spots.
</p>
          <p>Highlights:</p>
          <ul>
            <li>The park features various hiking and biking trails, ideal for outdoor enthusiasts looking to explore the diverse landscapes.
            </li>
            <li>Birdwatching is popular here, as the park is home to numerous bird species and other wildlife.
            </li>
            <li>Picnic spots and camping facilities make it a great location for a day trip or an overnight adventure.
            </li>
          </ul>
          <img src={aukstadvaris1} className="activity-photo" alt='Museum tour' />
          <img src={aukstadvaris2} className="activity-photo" alt='Museum tour' />
          <img src={aukstadvaris3} className="activity-photo" alt='Museum tour' />
          <img src={aukstadvaris4} className="activity-photo" alt='Museum tour' />
        </div>

        <div className="booking-container">
        <div className="calendar-section">
          <h3>Select a Date</h3>
          <Calendar onChange={setDate} value={date} className="custom-calendar" />
        </div>

        <div className="booking-section">
          <h3>Book Your Visit</h3>
          <form onSubmit={handleBookingSubmit}>
            <div>
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div>
              <label htmlFor="visitors">Number of Visitors:</label>
              <input type="number" id="visitors" name="visitors" required min="1" />
            </div>
            <div>
              <label htmlFor="date">Selected Date:</label>
              <input type="text" id="date" name="date" value={date.toDateString()} readOnly />
            </div>
            <div>
              <label htmlFor="activity">Desired Activity:</label>
              <select
                id="activity"
                name="activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                required
              >
                <option value="Trakai Castle tour">Trakai Castle tour</option>
                <option value="Trakai City tour">Trakai City tour</option>
                <option value="Trakai Museum">Trakai Museum</option>
                <option value="Around Trakai with a boat tour">Around Trakai with a boat tour</option>
              </select>
            </div>
            <button type="submit">Book Now</button>
          </form>
        </div>
      </div>

      <div className="map-section">
        <h3>Find Us on the Map</h3>
        <iframe
          title="Trakai Castle Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2291.682264142723!2d24.926582916187657!3d54.65256998027868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e722a426600033%3A0x8693c8748f0fc84d!2sTrakai%20Island%20Castle!5e0!3m2!1sen!2slt!4v1637088412232!5m2!1sen!2slt"
          width="1200px"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    </div>
  );
}

export default Parks;
