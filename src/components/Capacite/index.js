import React from 'react';

import './capacite.scss';

const Capacite = () => (
  <section className="cv-capacites">
    <h2 className="title">Capacités</h2>
    <div>
      <h3>Langages</h3>
      <ul>
        <li>Javascript
        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i></li>
        <li>PHP
        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i><i className="bi bi-star"></i></li>
        <li>HTML
        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i></li>
        <li>CSS/SCSS/SASS
        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i></li>
      </ul>
    </div>
    <div>
      <h3>Bibliothèque</h3>
      <ul>
      <li>Réact
      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i></li>
      <li>Redux
      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i><i className="bi bi-star"></i></li>
      <li>Axios
      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i><i className="bi bi-star"></i></li>
    </ul>
    </div>
    <div>
      <h3>Langues</h3>
      <ul>
      <li>Français
      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i></li>
      <li>Anglais
      <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star"></i><i className="bi bi-star"></i><i className="bi bi-star"></i></li>
    </ul>
    </div>
  </section>
);

export default Capacite;
