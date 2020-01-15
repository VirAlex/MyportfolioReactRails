import React from 'react';
import avatar from '../../assets/images/04.png'
import Cards from './Cards'
import Container from '@material-ui/core/Container';
import SimpleCard from './HomePortfolio';


class Home extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <SimpleCard />
        <Cards />
      </Container>
    )
  }
}

export default Home;
