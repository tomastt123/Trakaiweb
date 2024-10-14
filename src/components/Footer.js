import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub'; // Import GitHub Icon
import Logo from '../assets/traku-laikinas-logo.png'; // Import your logo

function Footer() {
  // Define social media and GitHub links
  const instagramLink = "https://www.instagram.com/explore/locations/215245771/trakai-island-castle/";
  const facebookLink = "https://www.facebook.com/profile.php?id=103435136377415&paipv=0&eav=AfYFzU63wnlPVR0v8t4zhFgQJDIifGrFbX3mxkjHaElIWQVu1Ar1rMS3oHfUPpfpTso&_rdr";
  const linkedInLink = "https://www.linkedin.com/in/tomas-tvarijonavi%C4%8Dius-761454223/";
  const githubLink = "https://github.com/tomastt123"; // GitHub link

  return (
    <div className='footer'>
      <div className="footer-content">
        {/* Logo on the left side */}
        <div className="logo-section">
          <img src={Logo} alt="Trakai Logo" className="footer-logo" />
        </div>

        {/* Footer Columns */}
        <div className="footer-columns">
          <div className="footer-column">
            <h3>Tours</h3>
            <ul>
              <li>Castle tour</li>
              <li>City tour</li>
              <li>Trakai museum</li>
              <li>Boat tour</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Events and News</h3>
            <ul>
              <li>Read Events</li>
              <li>Read Expositions</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contacts</h3>
            <ul>
              <li>Tel: +370 528 55297</li>
              <li>Įmonės kodas: 190757189</li>
              <li>Kęstučio g. 4</li>
              <li>Trakai, LT – 21104</li>
            </ul>
          </div>
        </div>

        {/* Social Media and GitHub */}
        <div className="socialMedia">
          <a href={instagramLink} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a href={linkedInLink} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            <GitHubIcon /> {/* GitHub icon */}
          </a>
        </div>
      </div>
      <p>2024 Created by Tomas Tvarijonavičius</p>
    </div>
  );
}

export default Footer;
