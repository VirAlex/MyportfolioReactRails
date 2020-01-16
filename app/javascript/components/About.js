import React from 'react';
import Button from './Button'
import ThreeCards from './threeCards';
import carrefour from '../../assets/images/carrefour.png'
import Footer from './Footer';
import wagon from '../../assets/images/lewagon.png'
import ruby from '../../assets/images/ruby.png'


class About extends React.Component {
  render() {
    return (
      <div>
      <section id="Steps" className="steps-section">

        <h2 className="steps-header">
          My cursus
    </h2>

        <div className="steps-timeline">

          <div className="steps-one">
            <img className="steps-img" src={carrefour} alt="" />
            <h3 className="steps-name">
              Carrefour for 13 years
        </h3>
            <p className="steps-description">
              After 13 years at Carrefour as a department manager I decided to change careers and join a more collaborative and more technological world
        </p>
          </div>

          <div className="steps-two">
            <img className="steps-img" src={wagon} alt="" />
            <h3 className="steps-name">
                <a href="https://www.lewagon.com/fr" className="wagonbrand" target="_blank">Le Wagon coding camp</a>
        </h3>
            <p className="steps-description">
              All elements are positioned realtive to the parent. No absolute positioning.
        </p>
          </div>

          <div className="steps-three">
            <img className="steps-img" src={ruby} alt="" />
            <h3 className="steps-name">
              Fulstack Developer Junior
        </h3>
            <p className="steps-description">

Since 3 months I finished the intensive but highly rewarding training of the wagon so I know RubyOnRails. I then trained every day in ReactJS and VueJS technologies to combine with Rails this portfolio is the result.
        </p>
          </div>

        </div>
        <div className="flex1" stle={{alignItems: 'center'}}>
            <a href="https://drive.google.com/open?id=1xS3DmDXSILqQrZT2Ij0BROdfb6Rlm1eQ" target="_blank"><i className="save outline icon" style={{fontSize: '20px', paddingTop: '20px'}}></i></a>
            <h4 className="header">Click to download my CV</h4>
        </div>
  </section>
    <Footer />
  </div>
    )
  }
}

export default About;
