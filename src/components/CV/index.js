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
          <h4>Vertus :</h4>
          <ul>
            <li>Acharnée</li>
            <li>Sociable</li>
            <li>Ponctuelle</li>
            <li>maîtrise du sort Google Trad</li>
            <li>Mange de tout (surtout des COOKIES)</li>
          </ul>  
        </div>
        <div>
          <h4>Handicaps :</h4>
          <ul>
            <li>Novice</li>
            <li>Naïve</li>
            <li>Sujette aux bugs (404)</li>
            <li>Sensible aux sorts d’humour (concentration -5)</li>
            <li>Craint les arrêtes de poissons</li>
          </ul>  
        </div>
      </section>
      <section className="cv-passions">
        <h2 className="title">Passions</h2>
        <p>
          De nature épicurienne, je m'intéresse à tout sans pour autant n'avoir de réelles passions. Je cuisine, je lis, je dessine, je peins. Je m'intéresse à tout ce qui 
          touche au manuel. Je profite et m'intéresse à tout sauf à la politique et au sport. La nourriture est un sujet toujours plaisant (sauf aux heures des repas...)
        </p>
      </section>
    </main>
    <footer></footer>
  </div>
);

export default CV;

