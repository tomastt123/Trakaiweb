import React, { useState } from 'react';
import '../../styles/GuidedTours.css';
import trakaiMuseum from '../../assets/trakai-museum.jpg';
import trakaiMuseum3 from '../../assets/trakai-museum3.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Museum() {
  const [date, setDate] = useState(new Date());
  const [activity, setActivity] = useState('Trakai Castle tour');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted');
  };

  return (
        <div className="guided-tours">
          <h1>Trakai Museum Tour</h1>
          <p>Explore the rich history and culture of Trakai with our guided tours.</p>
    
          <div className="tour-section">
            <div className="tour-card">
              <h2>Museum Tour</h2>
              <p>The Trakai Museum Tour offers a captivating journey into the heart of Lithuanian history, with a particular focus on the cultural, political, and social developments of the region throughout the centuries. Housed within the iconic Trakai Castle, which itself is a living testament to medieval architecture and Lithuanian heritage, the museum showcases a vast collection of artifacts, each telling its own story of the past. As you walk through the halls of the museum, you will gain a deep understanding of the pivotal role Trakai played during the time of the Grand Duchy of Lithuania.</p>
              <p>Upon entering the museum, visitors are greeted with displays of medieval armor, swords, and other weaponry used by Lithuanian knights to defend the region against invaders. These meticulously preserved relics offer a glimpse into the military prowess of the Grand Duchy and the crucial battles that shaped the nation's borders. In addition to its military history, the museum also offers a comprehensive look at the everyday lives of medieval Lithuanians, featuring exhibits of pottery, tools, and household items that reflect the customs and traditions of the time. The museum's ethnographic collection is especially noteworthy, focusing on the lifestyles of Trakai's diverse communities, including the Karaim and Tatar populations, who have lived in the region for centuries.</p>
              <p>A key section of the Trakai Museum is dedicated to the Karaim people, a small Turkic ethnic group brought to Lithuania by Grand Duke Vytautas in the 14th century. Their unique traditions, religious practices, and cultural contributions are carefully documented through artifacts such as ceremonial garments, manuscripts, and religious symbols. The museum also explores the Karaim’s role in Trakai’s economy and society, shedding light on how this community has preserved its distinct identity over hundreds of years while becoming an integral part of the town’s heritage. For many visitors, this section of the museum provides a unique cultural perspective that sets Trakai apart from other historic sites.</p>
              <p>As you continue through the museum, you’ll encounter exhibits focused on numismatics, which trace the evolution of Lithuanian currency from medieval coins to modern money. The coin collections highlight the economic history of the Grand Duchy, showcasing the importance of trade routes and the kingdom’s connections with neighboring regions. Additionally, the museum regularly hosts temporary exhibitions, which offer deeper insights into specific historical events, such as Lithuania's journey to independence or its role in the world wars. These rotating exhibits ensure that every visit to the Trakai Museum offers something new and engaging for both first-time visitors and returning history enthusiasts.</p>
              <p>The museum’s setting within Trakai Castle, surrounded by the serene waters of Lake Galvė, makes the experience all the more memorable. Visitors can step outside after their tour to take in breathtaking views of the castle's fortifications reflected in the lake, providing a perfect conclusion to a day of learning and exploration. The Trakai Museum Tour is more than just a history lesson—it’s an immersive experience that connects you to the rich tapestry of Lithuania’s past, its multicultural heritage, and the resilient spirit of its people.</p>
              <img src={trakaiMuseum3} className="activity-photo" alt='Museum tour' />
              <img src={trakaiMuseum} className="activity-photo" alt='Museum tour' />
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

export default Museum;