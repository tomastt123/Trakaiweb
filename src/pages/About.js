import React from 'react';
import trakupilis3 from '../assets/trakupilis3.jpg';
import trakupilis4 from '../assets/trakupilis4.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className="About">
      <div className="aboutText">
        <div className="aboutContent">
          <h1>About Trakai Island Castle</h1>
          <p>
            Trakai Island Castle is a historic castle located on an island in Lake Galvė,
            near the town of Trakai in Lithuania. Constructed in the 14th century by Grand Duke
            Kęstutis of Lithuania, it served as a major defensive stronghold and residence for Lithuanian dukes.
          </p>
          <p>
            The castle is an exemplary model of Gothic architecture and showcases a rich blend of Eastern European medieval styles. 
            Over the centuries, Trakai Island Castle has witnessed significant historical events and has been meticulously restored to preserve its grandeur. 
          </p>
          <p>
            Today, it stands as a prominent cultural and historical landmark, attracting numerous tourists and history enthusiasts who marvel at its picturesque setting and architectural beauty. 
            The castle also hosts various cultural events, exhibitions, and festivals, further enriching its legacy and significance in Lithuanian heritage.
          </p>
          <p>
            The interior of Trakai Island Castle is as impressive as its exterior, featuring beautifully restored rooms, artifacts, and exhibits that depict the rich history of the region. 
            Visitors can explore the grand halls, chambers, and dungeons, each telling a story of the past. The castle museum provides a comprehensive look at the medieval life, weaponry, and art of Lithuania, offering a deep dive into the cultural and historical context of the area.
          </p>
        </div>
        <div className="aboutContent">
          <h1>The Legacy and Significance</h1>
          <p>
            Today, Trakai Island Castle stands as a prominent cultural and historical landmark, attracting numerous tourists and history enthusiasts who marvel at its picturesque setting and architectural beauty. 
            The castle also hosts various cultural events, exhibitions, and festivals, further enriching its legacy and significance in Lithuanian heritage.
          </p>
          <p>
            The interior of Trakai Island Castle is as impressive as its exterior, featuring beautifully restored rooms, artifacts, and exhibits that depict the rich history of the region. 
            Visitors can explore the grand halls, chambers, and dungeons, each telling a story of the past. The castle museum provides a comprehensive look at the medieval life, weaponry, and art of Lithuania, offering a deep dive into the cultural and historical context of the area.
          </p>
          <p>
            Surrounded by the tranquil waters of Lake Galvė, the castle's location adds to its allure, offering stunning views and a peaceful ambiance. Boating and kayaking around the castle are popular activities, allowing visitors to appreciate its majestic presence from the water. 
            The nearby town of Trakai, with its charming streets and vibrant local culture, complements the experience, making a visit to Trakai Island Castle a journey through history, nature, and Lithuanian heritage.
          </p>
          <p>
            The castle not only stands as a historical monument but also serves as a symbol of Lithuanian resilience and cultural identity. 
            Its strategic importance in the past is a testament to the region's turbulent history and the efforts to maintain its sovereignty and cultural heritage.
          </p>
          <p>
            Throughout the year, Trakai Island Castle hosts numerous educational programs and workshops for children and adults alike, fostering a deeper understanding and appreciation of medieval history and architecture. 
            These programs are designed to engage visitors of all ages, making history accessible and exciting for everyone.
          </p>
          <p>
            In addition to its historical and cultural significance, Trakai Island Castle is a popular venue for weddings, concerts, and other special events. 
            Its picturesque setting and historical ambiance provide a unique backdrop for any occasion, attracting guests from all over the world.
          </p>
        </div>
      </div>
      <div className="aboutPhotos">
        <div className="aboutTop" style={{ backgroundImage: `url(${trakupilis3})` }}></div>
        <div className="aboutTop" style={{ backgroundImage: `url(${trakupilis4})` }}></div>
      </div>
    </div>
  );
}

export default About;
