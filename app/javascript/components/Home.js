import React from 'react';
import avatar from '../../assets/images/01.png'
import Avatar from '@material-ui/core/Avatar';
import Cards from './Cards'
import Container from '@material-ui/core/Container';

class Home extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <div className="ui raised very padded text container segment">
          <div className="ui grid" style={{padding :'3em, 0'}}>
            <div className="two column row">
              <h1 className="ui header" style={{ paddingTop: '1em' }}>My Porfolio</h1>
              <div className="">
                <Avatar className="avatar" alt="Alexandre Viretti" src={avatar} />
              </div>
            </div>
          </div>
            <p style={{marginTop: '1em'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio explicabo voluptate ut mollitia voluptatem tempora odit libero fugiat magnam pariatur nihil eveniet aut, saepe maiores in dignissimos totam dolorum.</p>
        </div>
        <Cards />
      </Container>
    )
  }
}

export default Home;
