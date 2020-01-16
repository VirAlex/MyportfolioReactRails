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
          Responsive Semantic Timeline
    </h2>

        <div className="steps-timeline">

          <div className="steps-one">
            <img className="steps-img" src={carrefour} alt="" />
            <h3 className="steps-name">
              Semantic
        </h3>
            <p className="steps-description">
              The timeline is created using negative margins and a top border.
        </p>
          </div>

          <div className="steps-two">
            <img className="steps-img" src={wagon} alt="" />
            <h3 className="steps-name">
              Relative
        </h3>
            <p className="steps-description">
              All elements are positioned realtive to the parent. No absolute positioning.
        </p>
          </div>

          <div className="steps-three">
            <img className="steps-img" src={ruby} alt="" />
            <h3 className="steps-name">
              Contained
        </h3>
            <p className="steps-description">
              The timeline does not extend past the first and last elements.
        </p>
          </div>

        </div>

  </section>
    <Footer />
  </div>
    )
  }
}

export default About;
