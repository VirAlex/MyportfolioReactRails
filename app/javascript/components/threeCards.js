import React, { Component } from 'react';
import Button from './Button'

export default function ThreeCards() {
  return(
    <div className="flex1">
      <div className="box1">
        <div className="glass"></div>
        <div className="content">
          <h2>Le Vanneur</h2>
          <p>Project carried out on the AirBnb theme, but more fun ... rental of vans. Techno used (Rails, Geocoding, Map, PostgreSql)</p>
          <a href="https://vanneur.herokuapp.com/" className="boutonview" target="_blank"><span>View </span></a>
        </div>
      </div>
    <div className="box1">
      <div className="glass"></div>
      <div className="content">
        <h2>Qui a bete</h2>
          <p>Betting site with friends, created during the last 10 days of Wagon training (techno used Rails, Javscript, PostgreSql</p>
          <a href="http://www.quiabete.co" className="boutonview" target="_blank"><span>View </span></a>
      </div>
    </div>
    <div className="box1">
      <div className="glass"></div>
      <div className="content">
        <h2>Meteo Perso</h2>
          <p>Small app made in pure Javascript linked to Api (darksky) and Library (skycons) all deployed on Heroku</p>
          <a href="https://radiant-falls-29618.herokuapp.com/" className="boutonview" target="_blank"><span>View </span></a>
      </div>
    </div>
    </div>
  )
}
