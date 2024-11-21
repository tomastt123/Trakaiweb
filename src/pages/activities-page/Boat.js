import React, { useState } from 'react';
import '../../styles/GuidedTours.css';
import boat1 from '../../assets/boat1.jpg';
import boat2 from '../../assets/boat2.jpg';
import boat3 from '../../assets/boat3.jpg';
import boat4 from '../../assets/boat4.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Boat() {
  const [date, setDate] = useState(new Date());
  const [activity, setActivity] = useState('Trakai Castle tour');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted');
  };

  return (
        <div className="guided-tours">
          <h1>Explore Trakai with a boat</h1>
          <p>Experience the enchanting beauty of Trakai from the water!</p>
          <div className="tour-section">
            <div className="tour-card">
              <h2>Boat tours</h2>
              <p>A boat tour offers a unique perspective on the stunning landscapes and historical sites that dot the shores of Trakai Island. Whether you're looking for a relaxing day on the water or an adventurous exploration, there's a variety of boat options to suit every preference.</p>
              <p><b>Boat types</b></p>
              <ol>
                <li>Traditional Wooden Boats: Immerse yourself in the local culture by sailing on a traditional wooden boat. These charming vessels provide a nostalgic atmosphere, allowing you to feel like a true explorer as you glide across the serene waters of Lake Galvė.</li>
                <li>Rowboats: For a more hands-on experience, consider renting a rowboat. Perfect for couples or small groups, rowing your own boat allows you to take in the sights at your own pace and enjoy the tranquility of the lake.</li>
                <li>Kayaks and Canoes: If you're seeking an active adventure, rent a kayak or canoe! Paddle through the picturesque waterways, navigate around islands, and enjoy a closer look at the diverse wildlife that inhabits the lake.</li>
                <li>Sightseeing Boats: For those who prefer a guided experience, hop on a sightseeing boat. These larger vessels offer comfortable seating and knowledgeable guides who will share fascinating stories about Trakai's history, culture, and the significance of the landmarks you pass along the way.</li>
              </ol>
              <img src={boat1} className="activity-photo" alt='Boat tour' />
              <img src={boat4} className="activity-photo" alt='Boat tour' />
              </div>
              <div className="tour-card">
              <p><b>Scenic Routes</b></p>
              <p>A boat trip around Trakai provides breathtaking views of the surrounding nature and historical sites. The most popular routes include:</p>
              <ul>
                <li>Trakai Island Castle: Sail past the iconic Trakai Island Castle, a stunning 15th-century fortress situated on an island. Marvel at its impressive architecture and learn about its rich history.</li>
                <li>Surrounding Islands: Explore the numerous small islands that pepper Lake Galvė, each with its own charm and story. Enjoy the lush greenery and serene surroundings as you navigate these tranquil waters.</li>
                <li>Wildlife Viewing: Keep your eyes peeled for local wildlife, including swans, ducks, and various bird species. The lake is a haven for nature lovers, and a boat trip is the perfect way to appreciate the area’s biodiversity.</li>
              </ul>
              <img src={boat2} className="activity-photo" alt='Boat tour' />
              <img src={boat3} className="activity-photo" alt='Boat tour' />
              <div className="tour-card">
                <h3>Practical information</h3>
                <p>Boat tours typically operate from spring to autumn, offering flexible schedules to accommodate your visit. Rentals and tours are available from various operators around Trakai, providing options for both short trips and longer excursions. Be sure to check the weather conditions and book in advance during peak tourist seasons to secure your spot.</p>
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

export default Boat;