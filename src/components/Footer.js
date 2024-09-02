import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  // Define social media links
  const instagramLink = "https://www.instagram.com/explore/locations/215245771/trakai-island-castle/";
  const facebookLink = "https://www.facebook.com/profile.php?id=103435136377415&paipv=0&eav=AfYFzU63wnlPVR0v8t4zhFgQJDIifGrFbX3mxkjHaElIWQVu1Ar1rMS3oHfUPpfpTso&_rdr";
  const linkedInLink = "https://www.linkedin.com/pulse/floating-fortress-trip-trakai-island-castle-beauty-europe-wilkinson/";

  return (
    <div className='footer'>
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
      </div>
      <p>2024 Created by Tomas Tvarijonavičius</p>
    </div>
  );
}

export default Footer;
