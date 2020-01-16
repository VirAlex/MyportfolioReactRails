import React from 'react';
import ThreeCards from './threeCards';
import Button from './Button';
import Cards from './Cards';
import Footer from './Footer';

class Projects extends React.Component {
  render() {
    return(
      <div>
        <div className="center">
        <h2 class="ui icon header">
          <i class="laptop icon"></i>
          <div class="content">
            Mes project
          </div>
        </h2>
          <Cards />
          <div>
            <ThreeCards />
          </div>
        <div className="flex1">
            <Button />
        </div>
      </div>
      </div>

    )
  }
}

export default Projects;
