import React, { Component } from 'react';
import Img1 from '../../assets/images/02.png'
import Img2 from '../../assets/images/03.png'
import Img3 from '../../assets/images/01.png'


class Cards extends React.Component{
  render(){
    return(
      <div className="bigone">
        <div className="containercards2">
          <div className="box">
            <div className="imgBx">
              <img src={Img1} alt="vanneur"/>
            </div>
            <div className="contentBx">
              <div>
                <h2>Technos</h2>
                <p>Ruby on rails</p>
                <p>PostgreSql</p>
                <p>Devise authentication</p>
                <p>Geocoder</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={Img2} alt="quiabete" />
            </div>
            <div className="contentBx">
              <div>
                <h2>Technos</h2>
                <p>Ruby on rails</p>
                <p>JavaScript</p>
                <p>StimulusJS</p>
                <p>OmniAuth</p>
                <p>Notification Push Web</p>
                <p>PostgreSql</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={Img3} alt="test" />
            </div>
            <div className="contentBx">
              <div>
                <h2>Technos</h2>
                <p>Vanilla JS</p>
                <p>Api Fetch</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;
