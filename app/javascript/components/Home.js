import React from 'react';
import avatar from '../../assets/images/04.png'
import Cards from './Cards'
import Container from '@material-ui/core/Container';
import SimpleCard from './HomePortfolio';
import Footer from './Footer';
import Modal from './Modal'
import rails from '../../assets/images/rails.png'
import react from '../../assets/images/react.png'
import js from '../../assets/images/js.png'


class Home extends React.Component {
  render() {
    return (
      <div>
      <Container maxWidth="lg">
        <SimpleCard />
          <div className="bigone">
            <div className="containercards">
              <div className="box">
                <div className="imgBx">
                  <img src={rails} alt="rails" />
                </div>
                <div className="contentBx">
                  <div>
                    <h2>Ruby On Rails </h2>
                    <p>Good knowledge ability to realize a complete application with payment modules for image hosting, ... also deployment. Coupled with databases such as Mysql or PostgreSql</p>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="imgBx">
                  <img src={react} alt="quiabete" />
                </div>
                <div className="contentBx">
                  <div>
                    <h2>ReactJS & React in Rails</h2>
                    <p>Knowledge of React and its architectures capable of realizing a site with several NodeJS and ReactJS components, for more speed and ease I couple React to Rails</p>
                  </div>
                </div>
              </div>
              <div className="box">
                <div className="imgBx">
                  <img src={js} alt="test" />
                </div>
                <div className="contentBx">
                  <div>
                    <h2>JavaScript</h2>
                    <p>Good knowledge of Javascript by WebPack and integration in Rails of libraries, on JS functions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Container>
        <Footer />
      </div>
    )
  }
}

export default Home;
