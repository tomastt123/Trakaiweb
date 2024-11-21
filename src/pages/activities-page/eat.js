import React, { useState } from 'react';
import '../../styles/GuidedTours.css';
import food1 from '../../assets/food1.jpg';
import food2 from '../../assets/food2.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Eat() {
  const [date, setDate] = useState(new Date());
  const [activity, setActivity] = useState('Trakai Castle tour');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted');
  };

  return (
        <div className="guided-tours">
          <h1>Eat at Trakai</h1>
          <p>Taste the local cuisine.</p>
          <div className="tour-section">
            <div className="tour-card">
              <h2>Museum Tour</h2>
              <p>When visiting Trakai, delight your taste buds with the region's iconic culinary offerings. Among the most cherished dishes are Kibinai and Cepelinai, each reflecting the rich cultural heritage of the area.</p>
            <div className="tour-section">
              <div className="tour-card">
              <h2>Kibinai</h2>
              <p>Kibinai are delicious pastries that have become a symbol of Trakai's gastronomy. These hand-made dough pockets are filled with a variety of savory ingredients. You can choose from four delectable flavors:</p>
              <ul>
                <li>Chicken: Juicy chicken pieces seasoned to perfection.</li>
                <li>Chicken and Mushrooms: A delightful combination of tender chicken and earthy mushrooms, creating a rich flavor profile.</li>
                <li>Lamb: Succulent lamb meat that adds a unique twist to this classic dish.</li>
                <li>Pork: Flavorful pork filling that provides a hearty and satisfying experience.</li>
              </ul>
              <img src={food1} className="activity-photo" alt='Trakai Food' />
              <p>Each Kibinas is baked until golden brown, offering a crispy exterior and a warm, flavorful interior.</p>
              </div>
              <div className="tour-card">
              <h2>Cepelinai</h2>
              <p>No visit to Trakai would be complete without trying Cepelinai, a traditional Lithuanian dish often referred to as "zeppelins" due to their shape. These dumplings are made from grated potatoes and are typically served in two mouthwatering varieties:</p>
              <ul>
                <li>With Meat: Filled with a savory mixture of minced meat, these Cepelinai are hearty and filling, perfect for a satisfying meal.</li>
                <li>With Curd: A vegetarian option, these dumplings are filled with creamy curd, providing a lighter yet equally delicious alternative.</li>
              </ul>
              <img src={food2} className="activity-photo" alt='Trakai Food' />
          </div>
          <p>Both dishes showcase the essence of Lithuanian cuisine and are best enjoyed with a side of sour cream or a fresh salad, making your dining experience in Trakai truly unforgettable.</p>
          <p>Come and savor the flavors of Trakai—where every meal tells a story!</p>
          </div>
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

export default Eat;