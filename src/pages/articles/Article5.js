// File: src/pages/articles/Article1.js
import React from 'react';
import Article5photo from '../../assets/Article5photo.jpg';
import './Article1.css';


const Article1 = () => {
  return (
    <div className="article-page">
      <h1>TRAKŲ APYLINKIŲ TAUTOSAKA „Trakai ežerų atspindžiuose: legendos, padavimai, sakmės“</h1>
      <p><em>Written 2023-11-30</em></p>
      <img src={Article5photo} alt="Folklore" />
      <p>
      Kas atrado Trakus ir iš Kernavės perkėlė sostinę į Senuosius Trakus? Ar girdėjai, kaip legendinis Vytauto Didžiojo žirgas gelbėjo karaimus nuo potvynių? Ar žinai, kaip atsirado didieji Trakų ežerai ir kodėl Galvė reikalauja aukų? Kokios paslaptys gaubia Galvės ežero salas ir dugne paskandintas lobių skrynias? Kur veda požeminiai Trakų ežerų tuneliai? Ar girdėjai apie mistinius nutikimus Trakų pusiasalio kalne? Kodėl Trakų žvejai bijo moterų „blogom akim“? Ar žinojai, kad Trakai kada nors turi nuskęsti?

Gausybę stebuklingų, neįtikėtinų istorijų ir nutikimų rasite šioje „Trakai ežerų atspindžiuose: legendos, padavimai, sakmės“ vaikams ir ne tik jiems knygelėje, kurios didžiausia vertė – autentiškai pateikta vietovės ir apie ją tautosaka, kadaise surinkta kraštotyrininkų iš Trakų apylinkių.

Atrask istorinę Lietuvos sostinę – Trakus – iš naujo! Pažink tautosaką, nusikeldamas į Trakų ežerų atspindžiuose mirguliuojantį stebuklingą legendinės vietovės mitinį ir mistinį pasaulį!

Projektą finansuoja: Lietuvos kultūros taryba

Projektą įgyvendino: Trakų istorijos muziejus

Projekto vadovė: Trakų istorijos muziejaus Kultūrinės veiklos skyriaus vedėja Kristina Stankevičienė

Partneriai: Lietuvių literatūros ir tautosakos institutas, Trakų rajono savivaldybė viešoji biblioteka, Lietuvos muzikos ir teatro akademija
</p> 
    </div>
  );
};

export default Article1;
