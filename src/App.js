import './App.css';
import ScrollToTop from './helpers/ScrollToTop';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Activities from './pages/Activities';
import './styles/Footer.css'; // Ensure this path is correct
import About from './pages/About';
import Contact from './pages/Contact';
import Article1 from './pages/articles/Article1'; // Import your article components
import Article2 from './pages/articles/Article2'; // Example for additional articles
import Article3 from './pages/articles/Article3';
import Article4 from './pages/articles/Article4';
import Article5 from './pages/articles/Article5';
import AllArticles from './pages/articles/AllArticles';
import GuidedTours from './pages/activities-page/GuidedTours';
import Museum from './pages/activities-page/Museum';
import Eat from './pages/activities-page/eat';
import Boat from './pages/activities-page/Boat';
import Parks from './pages/activities-page/Parks';
import Souvenirs from './pages/activities-page/Souvenirs';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="Trakai castle">
         <Router>
          <ScrollToTop />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Activities' element={<Activities />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Contact' element={<Contact />} />
        <Route path='/article/1' element={<Article1 />} />
        <Route path='/article/2' element={<Article2 />} />
        <Route path='/article/3' element={<Article3 />} />
        <Route path='/article/4' element={<Article4 />} />
        <Route path='/article/5' element={<Article5 />} />
        <Route path='allarticles' element={<AllArticles />} />
        <Route path="/guided-tours" element={<GuidedTours />} />
        <Route path="/museum" element={<Museum />} />
        <Route path="/eat" element={<Eat />} />
        <Route path="/boat" element={<Boat />} />
        <Route path="/parks" element={<Parks />} />
        <Route path="/souvenirs" element={<Souvenirs />} />
      </Routes>
   <Footer />
   </Router>
    </div>
  );
}

export default App;
