import React, { useState } from 'react';
import '../../styles/GuidedTours.css';
import castleTour from '../../assets/castle-tour.webp';
import trakaiMuseum5 from '../../assets/trakai-museum5.jpg';
import trakaiCity from '../../assets/trakai-city.jpg';
import trakaiCity2 from '../../assets/trakai-city2.jpeg';
import trakaiMuseum from '../../assets/trakai-museum.jpg';
import trakaiMuseum3 from '../../assets/trakai-museum3.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function GuidedTours() {
  const [date, setDate] = useState(new Date());
  const [activity, setActivity] = useState('Trakai Castle tour');

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted');
  };

  return (
    <div className="guided-tours">
      <h1>Guided Tours in Trakai</h1>
      <p>Explore the rich history and culture of Trakai with our guided tours.</p>

      <div className="tour-section">
        <div className="tour-card">
          <h2>Trakai Castle Tour</h2>
          <p>The Trakai Castle Tour begins with an enchanting boat ride across the calm waters of Lake Galvė, offering you a stunning view of the island upon which Trakai Castle stands. This medieval fortress, with its tall red-brick towers and stone walls, immediately evokes a sense of grandeur and history. Built in the 14th century, Trakai Castle served as a key defensive structure for the Grand Duchy of Lithuania, fending off numerous invasions over the centuries. As you step inside the gates, you are transported back to the days of knights, nobles, and kings who once walked the same paths. The inner courtyard, surrounded by imposing walls and towers, gives a glimpse into the life of the castle's inhabitants during the Middle Ages.</p>
          <p>Once inside, the tour takes you through the castle’s halls, now home to the Trakai History Museum. Here, you’ll encounter a vast collection of artifacts from Lithuania's medieval period. The museum showcases intricately designed armor and weapons, ceremonial items, and even ancient manuscripts that tell the story of Lithuania’s growth as a powerful European state. As you walk through the exhibits, you’ll learn about the political and military history of the Grand Duchy, which was once one of the largest and most influential states in Europe. The castle’s interior also includes the Great Hall, where banquets, councils, and diplomatic meetings were held—a grand room that truly brings to life the historical significance of the structure.</p>
          <p>An integral part of the tour is the exploration of the cultural history of the Karaim people, a Turkic ethnic group who were brought to Lithuania by Grand Duke Vytautas in the late 14th century. The Karaim have lived in Trakai for centuries, and their traditions, customs, and religious practices remain an important part of the town’s identity today. As you leave the castle, the tour offers a scenic walk around the island, giving you panoramic views of the lakes and forests that surround Trakai. Whether you're captivated by the architecture, the history, or the natural beauty, the Trakai Castle Tour offers an unforgettable journey into the heart of Lithuania's medieval past.</p>
          <img src={trakaiMuseum5} className="activity-photo" alt='Guided tour' />
          <img src={castleTour} className="activity-photo" alt='Guided tour' />
          <div className="tour-buttons">
            <p>Interested?</p>
            <button className="contact-button">Contact now</button>
          </div>

        </div>

        <div className="tour-card">
          <h2>Trakai City Tour</h2>
          <p>The Trakai City Tour is a walk through both history and culture, offering a rich exploration of this historic town, which once served as the capital of the Grand Duchy of Lithuania. The town of Trakai is unique in that it represents a melting pot of different cultures, particularly the Karaim, Tatar, Polish, and Lithuanian communities. As you stroll through the picturesque streets lined with colorful wooden houses, you'll learn about the town’s multicultural roots and how its population has shaped its architecture and traditions over the centuries. These wooden houses, painted in bright greens, blues, and yellows, were built by the Karaim and Tatar communities and are emblematic of Trakai's diverse cultural heritage.</p>
          <p>One of the highlights of the tour is a visit to the Karaim Kenesa, a small yet beautifully preserved wooden temple that serves as the spiritual center of the Karaim community. Here, your guide will provide an in-depth look at the Karaim’s religious practices, beliefs, and their unique history in Lithuania. This Turkic-speaking people have lived in Trakai for over 600 years, maintaining their distinct traditions while becoming an integral part of the town's social fabric. As you stand in the Kenesa, you can feel the weight of history in the air—this is not just a building, but a symbol of resilience and cultural survival.</p>
          <p>The tour also includes a visit to Trakai’s bustling local markets, where you can sample traditional Karaim dishes such as kibinai, a savory pastry filled with lamb or beef, a favorite of both locals and tourists. As you continue your walk through town, your guide will take you along the shores of Lake Galvė, offering magnificent views of Trakai Castle and its reflection shimmering in the water. The natural beauty of the lake, combined with the rich history of the town, creates a unique atmosphere that makes Trakai one of the most charming destinations in Lithuania. This tour offers not only a deep dive into the history of Trakai but also a serene experience that blends nature, culture, and history.</p>
          <img src={trakaiCity} className="activity-photo" alt='City tour' />
          <img src={trakaiCity2} className="activity-photo" alt='City tour' />
          <div className="tour-buttons">
            <p>Interested?</p>
            <button className="contact-button">Contact now</button>
          </div>
        </div>

        <div className="tour-card">
          <h2>Trakai Museum Tour</h2>
          <p>The Trakai Museum Tour is a deep dive into Lithuania’s rich and diverse history, providing visitors with a comprehensive understanding of the region’s cultural, political, and social evolution. The Trakai History Museum, located within the castle and other historical buildings around the town, offers a collection of exhibits that trace Lithuania’s development from the early medieval period to the present day. As you enter the museum, you’ll be greeted by detailed displays of ancient armor, weapons, and tools used by the knights and soldiers who defended the Grand Duchy of Lithuania. The medieval armory is one of the museum’s highlights, where you can see swords, crossbows, and full suits of armor that were once worn by Lithuanian warriors.</p>
          <p>The museum also focuses on the daily lives of the inhabitants of Trakai, particularly the Karaim, Tatar, and Lithuanian populations. Through its ethnographic exhibits, the museum brings to life the customs, clothing, and religious practices of these communities. The section dedicated to the Karaim and Tatar populations is particularly fascinating, as it showcases their role in the history of Trakai and how they have preserved their distinct cultural identities over the centuries. The collection includes ceremonial garments, religious artifacts, and even traditional Karaim cooking utensils, which tell the story of how these people have maintained their heritage despite the passage of time.</p>
          <p>In addition to the ethnographic displays, the museum houses an extensive collection of numismatic artifacts, offering insight into Lithuania’s monetary history. Coins from various eras of Lithuanian history are displayed, showing the evolution of currency as the Grand Duchy grew into a major European power. The museum also hosts a rotating collection of temporary exhibits, which focus on specific aspects of Lithuanian history, such as the country’s role in World War II or its path to independence in the 20th century. Whether you're interested in military history, cultural heritage, or the broader history of Eastern Europe, the Trakai Museum Tour provides a rich and educational experience that allows visitors to fully appreciate the historical significance of Trakai.</p>
          <img src={trakaiMuseum3} className="activity-photo" alt='Museum tour' />
          <img src={trakaiMuseum} className="activity-photo" alt='Museum tour' />
          <div className="tour-buttons">
            <p>Interested?</p>
            <button className="contact-button">Contact now</button>
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

export default GuidedTours;
