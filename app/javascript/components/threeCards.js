import React, { Component } from 'react';
import Button from './Button'

export default function ThreeCards() {
  return(
    <div className="flex1">
    <div className="box1">
      <div className="glass"></div>
      <div className="content">
        <h2>Qui a bete</h2>
        <p>Site de paris entre amis, réalisé lors des 10 derniers jours de formation du Wagon(techno utilisées Rails, Javscript, PostgreSql</p>
          <a href="http://www.quiabete.co" className="boutonview" target="_blank"><span>View </span></a>
      </div>
    </div>
    <div className="box1">
      <div className="glass"></div>
      <div className="content">
        <h2>Le Vanneur</h2>
        <p>Project réalisé sur le thème AirBnb, mais en plus fun... location de vans. Techno utilisé(Rails, Geocoding, Map, PostgreSql)</p>
          <a href="https://vanneur.herokuapp.com/" className="boutonview" target="_blank"><span>View </span></a>
      </div>
    </div>
    <div className="box1">
      <div className="glass"></div>
      <div className="content">
        <h2>Meteo Perso</h2>
        <p>Petite appli réalisé en pure Javascript lié a des Api(darksky) et des Library(skycons) le tout déployé sur Heroku</p>
          <a href="https://radiant-falls-29618.herokuapp.com/" className="boutonview" target="_blank"><span>View </span></a>
      </div>
    </div>
    </div>
  )
}
