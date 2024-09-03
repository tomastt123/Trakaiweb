// File: src/pages/Home.js
import React from 'react';
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

function Home() {
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
    { id: 'expo1', title: 'Expo Title 1', description: 'Description for Expo 1', link: '/expo/1', imageSrc: Expo1photo },
    { id: 'expo2', title: 'Expo Title 2', description: 'Description for Expo 2', link: '/expo/2', imageSrc: Expo2photo },
    { id: 'expo3', title: 'Expo Title 3', description: 'Description for Expo 3', link: '/expo/3', imageSrc: Expo3photo },
    { id: 'expo4', title: 'Expo Title 4', description: 'Description for Expo 4', link: '/expo/4', imageSrc: Expo4photo },
    { id: 'expo5', title: 'Expo Title 5', description: 'Description for Expo 5', link: '/expo/5', imageSrc: Expo5photo },
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
        <h2>Events and News</h2>
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
        <h3>Expositions</h3>
        <div className="expo-cards">
          {expoNews.map((item) => ( // Corrected to use expoNews
            <ExpoCard
              key={item.id}
              link={item.link}
              title={item.title}
              description={truncateText(item.description, 80)} // Set character limit for description
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
