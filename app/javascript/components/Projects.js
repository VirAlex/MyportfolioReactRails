import React from 'react';
import ThreeCards from './threeCards';
import Button from './Button';

class Projects extends React.Component {
  render() {
    return(
            <div className="center">
          <ThreeCards />
        <div className="flex1">
          <Button />
        </div>
      </div>
    )
  }
}

export default Projects;
