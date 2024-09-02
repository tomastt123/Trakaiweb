// File: src/pages/ArticlePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ArticlePage.css'; // Adjust path as necessary

const articles = {
  1: {
    title: 'GASTRONOMIJOS ŠVENTĖ – ŽUVIENĖS VIRIMO VARŽYTUVĖS',
    date: '2024-07-27',
    content: `
      Kur vanduo, ten ir žuvys, o kur žuvys, ten ir žuvienė!
      ...
      (Full article content here)
    `,
    image: '../assets/Article1photo.jpg' // Adjust path as necessary
  },
  2: {
    title: 'News 1',
    date: '2024-08-01',
    content: 'Details about News 1...',
    image: '../assets/Article2photo.jpg' // Adjust path as necessary
  },
  3: {
    title: 'Event 2',
    date: '2024-08-15',
    content: 'Details about Event 2...',
    image: '../assets/Article3photo.jpg' // Adjust path as necessary
  }
};

const ArticlePage = () => {
  const { id } = useParams();
  const article = articles[id];

  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <p><em>Written {article.date}</em></p>
      <img src={article.image} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticlePage;
