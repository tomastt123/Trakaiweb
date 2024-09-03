// File: src/pages/AllArticles.js
import React from 'react';
import EventCard from '../../components/EventCard';
import Article1photo from '../../assets/Article1photo.jpg';
import Article2photo from '../../assets/Article2photo.jpg';
import Article3photo from '../../assets/Article3photo.jpg';
import Article4photo from '../../assets/Article4photo.jpg';
import Article5photo from '../../assets/Article5photo.jpg';
import '../../styles/Home.css';

function AllArticles() {

  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  };

  const eventsNews = [
    { id: 1, title: 'Gastronomijos Šventė – Žuvienės Virimo Varžytuvės', description: 'Kur vanduo, ten ir žuvys, o kur žuvys, ten ir žuvienė! Jau dešimt metų Trakų istorijos muziejaus ir bičiulių jungtinė komanda dalyvauja', link: '/article/1', imageSrc: Article1photo, },
    { id: 2, title: 'Kūrybinių dirbtuvių projektas „LDK rankraštinė knyga', description: 'Details about this Grand Duchy of Lithuania (GDL) workshop project', link: '/article/2', imageSrc: Article2photo},
    { id: 3, title: 'EUROPOS ARCHEOLOGIJOS DIENOS TRAKŲ ISTORIJOS MUZIEJUJE', description: 'Birželio 14 d., penktadienį, Trakų istorijos muziejuje vyks edukaciniai užsiėmimai,pažintinės ekskursijos', link: '/article/3', imageSrc: Article3photo },
    { id: 4, title: 'TRAKŲ ISTORIJOS MUZIEJAUS INFORMACIJA LANKYTOJAMS!', description: 'Informuojame, kad viename Trakų istorijos muziejaus ekspozicinių padalinių – Salos pilyje – šiuo metu vykdomi pastato tvarkybos,', link: '/article/4', imageSrc: Article4photo, },
    { id: 5, title: 'TRAKŲ APYLINKIŲ TAUTOSAKA: "Trakai ežerų atspindžiuose"', description: 'Kas atrado Trakus ir iš Kernavės perkėlė sostinę į Senuosius Trakus? ', link: '/article/5', imageSrc: Article5photo, },
  ];

  return (
    <div className="all-articles-container">
      <h2>All Articles</h2>
      <div className="events-news-cards">
        {eventsNews.map((item) => (
          <EventCard
            key={item.id}
            link={item.link}  // Pass the static link directly
            title={item.title}
            description={truncateText(item.description, 80)} // Set character limit for description
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
    </div>
  );
}

export default AllArticles;
