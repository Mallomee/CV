import React from 'react';
//composants
import Capacite from 'src/components/Capacite';

import './jdr.scss';

const JDR = () => (
  <div className="jdr">
    <header></header>
    <main>
      <section className="jdr-info">
        <h2 className="title">Informations</h2>
        <div>Prénom: Mallomée<br/>
             Level : 1
        </div>
        <div>
        Âge : 31ans<br/>
        Secteur : Niort (79)
        </div>
        <div>
          Clan : Dev Web<br/>
          Spé : Réact
        </div>
      </section>
      <Capacite/>
      <section className="jdr-attributs">
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
      <section className="jdr-passions">
        <h2 className="title">Passions</h2>
        <p>
          <span>Manger :</span> je ne mange pas beaucoup mais alors parler nourriture… Ma promo de dev me connaît pour baver à l’évocation des cookies mais je vous rassure, 
          en dehors du poisson, ça marchera avec tout !
        </p>
        <p>
        <span>Rire :</span> Plutôt bon public, j’aime l’humour aussi bien noir que léger. Ma blague favorite ? Demandez-la moi, elle ne s’écrit pas.
        </p>
        <p>
        <span>(Ré)Apprendre de nouvelles choses :</span> curieuse, j’aime voir de nouvelles choses et apprendre. Dans ma vie personnelle, j’oublie et je redécouvre mais c’est 
        toujours avec plaisir (surtout les vidéos d’animaux).
        </p>
      </section>
      <section className="jdr-repliques">
      <h2 className="title">Répliques</h2>
        <span className="citation">« En Avant Guingamp ! »</span>  Leitmotiv qui me sert à avancer ! Allez de l’avant et tout donner en route pour ne pas avoir de regrets. <span className="comp">+7 en motivation ! </span> 
         Comme le  <span className="citation">« On est pas payé cher mais qu’est-ce qu’on se marre ! »</span>, faut prendre la vie du bon côté et profiter. <span className="comp">+3 en motivation, +4 en bonne humeur. </span>
      </section>
    </main>
    <footer></footer>
  </div>
);

export default JDR;
