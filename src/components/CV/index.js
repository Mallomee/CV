import React from 'react';

//composants
import Capacite from 'src/components/Capacite';

import './cv.scss';

const CV = () => (
  <div className="cv">
    <header></header>
    <main>
      <section className="cv-info">
        <h2 className="title">Informations</h2>
        <div>Nom: Cochet<br/>
             Prénom: Mélissa
        </div>
        <div>
        Âge : 31ans<br/>
        Secteur : Niort (79)
        </div>
        <div>
          Recherche Poste Dev Web<br/>
          Spécialisation : Réact
        </div>
      </section>
      
      <Capacite/>
      <section className="cv-attributs">
        <h2 className="title">Attributs</h2>
        <div>
          <h4>Historique :</h4>
          <ul>
            <li>Formation Dev Web</li>
            <li>Bac Pro SDE</li>
            <li>CAP DOSC</li>
            <li>BEP CPA</li>
          </ul>       
        </div>
        <div>
          <h4>Qualités/Défauts :</h4>
          <ul>
            <li>Novice</li>
            <li>Timide</li>
            <li>Acharnée</li>
            <li>Sociable</li>
            <li>Ponctuelle</li>
            <li>Débrouillarde</li>
          </ul>  
        </div>

      </section>
      <section className="cv-passions">
        <h2 className="title">Passions</h2>
        <p>
          De nature épicurienne, je m'intéresse à tout sans pour autant n'avoir de réelles passions. Je cuisine, je lis, je dessine, je peins. Je m'intéresse à tout ce qui 
          touche au manuel. Je profite et m'intéresse à tout sauf à la politique et au sport. Je joue aussi sur PC/Switch en solo ou avec des amis sans prétention.
        </p>
      </section>
      <section className="cv-projets">
        <h2 className="title">Projets</h2>

      </section>
    </main>
    <footer></footer>
  </div>
);

export default CV;

