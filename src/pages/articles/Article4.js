// File: src/pages/articles/Article1.js
import React from 'react';
import Article4photo from '../../assets/Article4photo.jpg';
import './Article1.css';


const Article4 = () => {
  return (
    <div className="article-page">
      <h1>TRAKŲ ISTORIJOS MUZIEJAUS INFORMACIJA LANKYTOJAMS!</h1>
      <p><em>Written 2024-04-19</em></p>
      <img src={Article4photo} alt="Information" />
      <p>
      Informuojame, kad viename Trakų istorijos muziejaus ekspozicinių padalinių – Salos pilyje – šiuo metu vykdomi pastato tvarkybos, infrastruktūros atnaujinimo, statybos darbai. Numatoma projekto įgyvendinimo pabaigos data – 2027 metai.

Šiuo metu ir iki 2024 m. pabaigos prioriteto tvarka tvarkyba vykdoma vadinamuosiuose kunigaikščių rūmuose, kairiajame rūmų sparne. Numatoma, kad vasaros pabaigoje darbai persikels į rūmų dešinįjį sparną. Trakų Salos pilies Kunigaikščių rūmai atstatyti ir juose pirmoji ekspozicija įkurta dar 1962 metais. Tai yra pagrindinė Salos pilies dominantė, sulaukianti daugiausiai lankytojų dėmesio, todėl šios pilies dalies tvarkybos darbai laikomi prioritetiniais ir jų imtasi pirmiausiai. Kadangi tvarkybos darbai globalūs ir labai svarbūs (keičiamos stogų čerpės, išorinės medinės galerijos ir kt.), patekimas į ekspozicines erdves yra įmanomas tik laikinomis metalinėmis konstrukcijomis.

Pabaigus Kunigaikščių rūmų tvarkybą, darbai bus perkelti į priešpilio teritoriją, vakarinius kazematus. Projekto įgyvendinimo pabaigoje bus tvarkomi rytiniai kazematai.

Trakų istorijos muziejaus ir darbus vykdančio rangovo tikslas – ne tik siekti numatytų projekto įgyvendinimo rezultatų, bet ir vykdyti darbus etapais. Taip išvengtume objekto uždarymo ir neprieinamumo lankytojams net ketverius metus. Darbų įgyvendinimo metu Muziejus lankytojų patekimo į objektą papildomai riboti neketina – tik prašome pačių lankytojų įsivertinti galimybes, gausiau lankant tas architektūrinio kultūros objekto dalis, kuriose lankymo metu darbai nevykdomi.

Po tvarkybos darbų vienos įspūdingiausių Lietuvos pilių patalpos bus pritaikytos dar gausesniam lankymui, pilies išorės ir priešpilio teritorija bei takeliai bus pritaikyti žmonėms su specialiaisiais poreikiais, tad Lietuvos gyventojai ir šalį reprezentuojančios pilies lankytojai iš užsienio galės dar sklandžiau, patogiau ir išsamiau susipažinti su didinga mūsų valstybingumo, Trakų miesto istorija.

Dėl visų, su tvarkybos projektu susijusių darbų eigos pokyčių Muziejus informuoja ir informuos papildomai ir nuolat savo internetinėje svetainėje www.trakaimuziejus.lt ir socialinio tinklo FaceBook paskyroje. P. S. Bebaigiant Trakų pusiasalio pilies aktualizavimo projektą, nuo 2024 m. birželio 1 d. Muziejus ketina įvesti vieningo bilieto sistemą. Su šiuo vertės pasiūlymu supažindinsime papildomai Tarptautinės muziejų dienos išvakarėse – gegužės 17 dieną.
</p> 
    </div>
  );
};

export default Article4;
