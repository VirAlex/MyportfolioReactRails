import React from 'react';
import avatar from '../../assets/images/04.png'
import Cards from './Cards'
import Container from '@material-ui/core/Container';
import SimpleCard from './HomePortfolio';
import Footer from './Footer';
import Modal from './Modal'


class Home extends React.Component {
  render() {
    return (
      <div>
      <Container maxWidth="lg">
        <SimpleCard />
        <Cards />
      </Container>
        <Footer />
      </div>
    )
  }
}

export default Home;
