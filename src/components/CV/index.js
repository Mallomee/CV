import React from 'react';

import './cv.scss';

const CV = () => (
  <div className="cv">
    <header></header>
    <main>
      <section className="cv-info">
        <div>Nom: Cochet
             Prénom: Mélissa
        </div>
        <div>
        Âge : 31ans
        Secteur : Niort (79)
        </div>
        <div>
          Recherche Poste Dev Web
          Spécialisation : Réact
        </div>
      </section>
      <section className="cv-capacites">
        <ul>
          <li>Javascript</li>
          <li>Réact</li>
          <li>Ajax</li>
          <li>Axios</li>
          <li>PHP</li>
          <li>HTML/CSS</li>
          <li>SCSS</li>
          <li>Anglais</li>
        </ul>
      </section>
      <section className="cv-attributs">
        <div>
          Historique :

          Formation Dev Web

          Diplôme agricole :
          Bac Pro SDE
          CAP DOSC
          BEP CPA
        </div>
        <div>
          Vertus :

          Acharnée
          Sociable
          Ponctuelle
          maîtrise du sort Google Trad
          Mange de tout ( surtout des COOKIES )
        </div>
        <div>
          Handicap :

          Junior
          Naïve
          Sujette aux bugs (404)
          Sensible aux sorts d’humour (déconcentration +5)
        </div>
      </section>
      <section className="cv-passions">
        De nature épicurienne, je m'intéresse à tout sans pour autant n'avoir de réelles passions. Je cuisine, je lis, je dessine, je peins. Je m'intéresse à tout ce qui touche au manuel. Je profite et m'intéresse à tout sauf à la politique et au sport. La nourriture est un sujet toujours plaisant (sauf aux heures des repas...)
      </section>
    </main>
    <footer></footer>
  </div>
);

export default CV;

