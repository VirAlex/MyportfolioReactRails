import React from 'react';
import Avatar from '../../assets/images/04.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About'
import Modal from './Modal'

class SimpleCard extends React.Component{
  render() {
    return (
      <div className="ui centered card" id="cardA">
        <div className="image">
          <img src={Avatar} />
        </div>
        <div className="content ">
          <h3 className="header" to="/about" >Alexandre Viretti </h3>
          <h4>Web developer full stack</h4>
          <p>Junior</p>
          <div className="flex1" style={{ marginBottom: '5px' }}>
            <Modal />
            <h3 className="header contactez"> Contactez-moi </h3>
          </div>
        </div>
      </div>
    )
  }
}

export default SimpleCard;
