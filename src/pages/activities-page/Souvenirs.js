import React, { useState } from 'react';
import '../../styles/GuidedTours.css';
import ceramics1 from '../../assets/ceramics1.jpg';
import ceramics2 from '../../assets/ceramics2.jpg';
import woodenCrafts1 from '../../assets/woodencrafts1.jpg';
import woodenCrafts2 from '../../assets/woodencrafts2.jpg';
import amber1 from '../../assets/amber1.jpg';
import amber2 from '../../assets/amber2.jpg';
import honey1 from '../../assets/honey1.jpg';
import honey2 from '../../assets/honey2.jpg';
import textile1 from '../../assets/textile1.jpg';
import textile2 from '../../assets/textile2.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Souvenirs() {
  const [date, setDate] = useState(new Date());
  const [activity, setActivity] = useState('Trakai Castle tour');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted');
  };

  return (
    <div className="guided-tours">
      <h1>Souvenirs</h1>
      <p>Trakai is not just a destination for stunning views and rich history; it's also a fantastic place to pick up unique souvenirs that capture the essence of this beautiful region. From traditional crafts to delicious treats, there’s something for everyone to bring home as a memento of their visit.
      </p>
      <div className="tour-section">
        <div className="tour-card">
          <h2>Souvenirs</h2>
          <h3>Ceramics and pottery</h3>
          <p>Trakai is known for its beautiful ceramics and pottery, often featuring traditional Lithuanian designs. From decorative plates and bowls to functional kitchenware, these handcrafted items make for perfect gifts or personal keepsakes. Look for unique pieces in local artisan shops and galleries, showcasing the skill of local craftsmen.
          </p>
          <img src={ceramics1} className="activity-photo" alt='Ceramics' />
          <img src={ceramics2} className="activity-photo" alt='Ceramics' />
          <h3>Wooden crafts</h3>
          <p>Wooden crafts are a hallmark of Lithuanian artistry. In Trakai, you can find intricately carved wooden items such as toys, kitchen utensils, and decorative ornaments. These pieces often reflect the natural beauty of the region and make for charming additions to your home decor.
          </p>
          <img src={woodenCrafts1} className="activity-photo" alt='Wooen crafts' />
          <img src={woodenCrafts2} className="activity-photo" alt='Wooen crafts' />
          <h3>Amber jewelry</h3>
          <p>Lithuania is famous for its natural amber, and Trakai offers a selection of stunning amber jewelry. From necklaces and bracelets to earrings, these pieces are not only beautiful but also a symbol of the region’s rich geological heritage. Look for shops specializing in amber, where you can find both modern designs and traditional styles.
          </p>
          <img src={amber1} className="activity-photo" alt='Amber jewelry' />
          <img src={amber2} className="activity-photo" alt='Amber jewelry' />
          <h3>Local Honey and Jams</h3>
          <p>Bring home the taste of Trakai with local honey and fruit jams. The region is known for its high-quality honey, often infused with natural flavors. You can also find delicious jams made from seasonal fruits. These tasty souvenirs are perfect for sharing or enjoying during breakfast.
          </p>
          <img src={honey1} className="activity-photo" alt='Honey and jam' />
          <img src={honey2} className="activity-photo" alt='Honey and jam' />
          <h3>Traditional Lithuanian Textiles</h3>
          <p>Look for beautifully crafted textiles, such as handwoven blankets, scarves, and table runners, that showcase traditional Lithuanian patterns and colors. These textiles make for functional yet stylish souvenirs that reflect the rich cultural heritage of the region.
          </p>
          <img src={textile1} className="activity-photo" alt='Traditional textile' />
          <img src={textile2} className="activity-photo" alt='Traditional textile' />
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

export default Souvenirs;
