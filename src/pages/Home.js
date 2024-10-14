import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/trakaicastle2.jpg';
import PriceIcon from '../assets/price.svg';
import ClockIcon from '../assets/clock.svg';
import LocationIcon from '../assets/location.svg';
import '../styles/Home.css';
import EventCard from '../components/EventCard';
import Article1photo from '../assets/Article1photo.jpg';
import Article2photo from '../assets/Article2photo.jpg';
import Article3photo from '../assets/Article3photo.jpg';
import Article4photo from '../assets/Article4photo.jpg';
import Article5photo from '../assets/Article5photo.jpg';
import ExpoCard from '../components/ExpoCard';
import Expo1photo from '../assets/Expo1photo.jpg';
import Expo2photo from '../assets/Expo2photo.jpg';
import Expo3photo from '../assets/Expo3photo.jpg';
import Expo4photo from '../assets/Expo4photo.jpg';
import Expo5photo from '../assets/Expo5photo.jpg';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function Home() {

  const [date, setDate] = useState(new Date());
  const [activity, setActivity] = useState('Trakai Castle tour');  // New state for selected activity

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    // Handle booking form submission logic here
    console.log('Booking submitted');
  };

  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  const eventsNews = [
    { id: 1, title: 'Gastronomijos Šventė – Žuvienės Virimo Varžytuvės', description: 'Kur vanduo, ten ir žuvys, o kur žuvys, ten ir žuvienė! Jau dešimt metų Trakų istorijos muziejaus ir bičiulių jungtinė komanda dalyvauja', link: '/article/1', imageSrc: Article1photo },
    { id: 2, title: 'Kūrybinių dirbtuvių projektas „LDK rankraštinė knyga', description: 'Details about this Grand Duchy of Lithuania (GDL) workshop project', link: '/article/2', imageSrc: Article2photo },
    { id: 3, title: 'EUROPOS ARCHEOLOGIJOS DIENOS TRAKŲ ISTORIJOS MUZIEJUJE', description: 'Birželio 14 d., penktadienį, Trakų istorijos muziejuje vyks edukaciniai užsiėmimai,pažintinės ekskursijos', link: '/article/3', imageSrc: Article3photo },
    { id: 4, title: 'TRAKŲ ISTORIJOS MUZIEJAUS INFORMACIJA LANKYTOJAMS!', description: 'Informuojame, kad viename Trakų istorijos muziejaus ekspozicinių padalinių – Salos pilyje – šiuo metu vykdomi pastato tvarkybos,', link: '/article/4', imageSrc: Article4photo },
    { id: 5, title: 'TRAKŲ APYLINKIŲ TAUTOSAKA: "Trakai ežerų atspindžiuose"', description: 'Kas atrado Trakus ir iš Kernavės perkėlė sostinę į Senuosius Trakus?', link: '/article/5', imageSrc: Article5photo },
  ];

  const expoNews = [
    { id: 'expo1', title: 'Trakų Pusiasalio pilies istorija', description: 'Viduramžiais pilys buvo raktas į valdžią. Karaliai, kunigaikščiai, didikai statė pilis tam, kad a', link: '/expo/1', imageSrc: Expo1photo },
    { id: 'expo2', title: 'SKAIČIAVĘ BŪTĄJĮ LAIKĄ', description: 'Kišeninių laikrodžių istorija prasideda XVI a., kuomet buvo sukurti pirmieji nešiojami laiko matavimo prietaisai. ', link: '/expo/2', imageSrc: Expo2photo },
    { id: 'expo3', title: 'PRIEŠ IR PO.', description: 'Trakų Salos pilis pradėta statyti XIV a. antrojoje pusėje Galvės ežere, iš kelių salų suformavus vieną didesnę', link: '/expo/3', imageSrc: Expo3photo },
    { id: 'expo4', title: 'Senieji Trakai - Tikroji sostinė', description: '„Ir vieną kartą didysis kunigaikštis Gediminas išjojo iš savo sostinės Kernavės medžioti už penkių mylių,', link: '/expo/4', imageSrc: Expo4photo },
    { id: 'expo5', title: 'Virginijaus Stančiko paroda „Angelai“', description: 'Angele Sarge, mano mielasis, saugok mane, Tu man paskirtasis. Vakarą, rytą, naktį ir dieną, saugok Tu mano žingsnį kiekvieną…', link: '/expo/5', imageSrc: Expo5photo },
  ];
  
  return (
    <div>
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1>Visit Trakai Castle</h1>
          <p>Gothic architecture and special location</p>
          <Link to="/Activities">
            <button> VISIT NOW </button>
          </Link>
        </div>
      </div>
      <div className="secondcontainer">
        <div className="ribbon">
          <div className="ribbon-texts">
            <div className="ribbon-item">
              <img src={PriceIcon} alt="Ticket Price" className="ribbon-icon" />
              <p className="ribbontxt">Ticket price</p>
            </div>
            <div className="ribbon-item">
              <img src={ClockIcon} alt="Working Hours" className="ribbon-icon" />
              <p className="ribbontxt">Working hours</p>
            </div>
            <div className="ribbon-item">
              <img src={LocationIcon} alt="Address" className="ribbon-icon" />
              <p className="ribbontxt">Address</p>
            </div>
          </div>
        </div>
      </div>
      <div className="thirdcontainer">
        <h2 className='expo-title'>Events and News</h2>
        <div className="events-news-cards">
          {eventsNews.map((item) => (
            <EventCard
              key={item.id}
              link={item.link} // Pass the static link directly
              title={item.title}
              description={truncateText(item.description, 80)} // Set character limit for description
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
        <div className="all-articles-button-container">
          <Link to="/allarticles">
            <button className="all-articles-button">All Articles</button>
          </Link>
        </div>
      </div>
      <div className="fourthcontainer">
      <h3 className="expo-title">Expositions</h3>
        <div className="expo-news-cards">
          {expoNews.map((item) => (
            <ExpoCard
              key={item.id}
              link={item.link}
              title={item.title}
              description={truncateText(item.description, 80)}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    <div>
      
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
                onChange={(e) => setActivity(e.target.value)}  // Update activity on selection
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
    </div>
  </div>
  );
}

export default Home;
