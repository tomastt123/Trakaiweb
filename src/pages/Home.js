// File: src/pages/Home.js
import React from 'react';
import { Link } from "react-router-dom";
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


function Home() {
  const eventsNews = [
    { id: 1, title: 'Gastronomijos Šventė – Žuvienės Virimo Varžytuvės', description: 'Details about this gastronomic event.', link: '/article/1', imageSrc: Article1photo, },
    { id: 2, title: 'Kūrybinių dirbtuvių projektas „LDK rankraštinė knyga', description: 'Details about this Grand Duchy of Lithuania (GDL) workshop project', link: '/article/2', imageSrc: Article2photo},
    { id: 3, title: 'EUROPOS ARCHEOLOGIJOS DIENOS TRAKŲ ISTORIJOS MUZIEJUJE', description: 'Birželio 14 d., penktadienį, Trakų istorijos muziejuje vyks edukaciniai užsiėmimai,pažintinės ekskursijos', link: '/article/3', imageSrc: Article3photo },
    { id: 4, title: 'TRAKŲ ISTORIJOS MUZIEJAUS INFORMACIJA LANKYTOJAMS!', description: 'Important information for Trakai castle visitors', link: '/article/4', imageSrc: Article4photo, },
    { id: 5, title: 'TRAKŲ APYLINKIŲ TAUTOSAKA „Trakai ežerų atspindžiuose: legendos, padavimai, sakmės“', description: 'Kas atrado Trakus ir iš Kernavės perkėlė sostinę į Senuosius Trakus? ', link: '/article/5', imageSrc: Article5photo, },
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
              <img src={PriceIcon} alt="Ticket Price" className="ribbon-icon"/>
              <p className="ribbontxt">Ticket price</p>
            </div>
            <div className="ribbon-item">
              <img src={ClockIcon} alt="Working Hours" className="ribbon-icon"/>
              <p className="ribbontxt">Working hours</p>
            </div>
            <div className="ribbon-item">
              <img src={LocationIcon} alt="Address" className="ribbon-icon"/>
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
              link={item.link}  // Pass the static link directly
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
