import './App.css';
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
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
         <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Activities' element={<Activities />} />
        <Route exact path='/About' element={<About />} />
        <Route exact path='/Contact' element={<Contact />} />
        <Route path='/article/1' element={<Article1 />} />
        <Route path='/article/2' element={<Article2 />} />
        <Route path='/article/3' element={<Article3 />} />
      </Routes>
   <Footer />
   </Router>
    </div>
  );
}

export default App;
