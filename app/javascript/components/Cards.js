import React, { Component } from 'react';
import Img1 from '../../assets/images/02.png'
import Img2 from '../../assets/images/03.png'
import Img3 from '../../assets/images/01.png'


class Cards extends React.Component{
  render(){
    return(
      <div className="bigone">
        <div className="containercards">
          <div className="box">
            <div className="imgBx">
              <img src={Img1} alt="vanneur"/>
            </div>
            <div className="contentBx">
              <div>
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={Img2} alt="quiabete" />
            </div>
            <div className="contentBx">
              <div>
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="imgBx">
              <img src={Img3} alt="test" />
            </div>
            <div className="contentBx">
              <div>
                <h2>Lorem ipsum dolor</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Cards;
