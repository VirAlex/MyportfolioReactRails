import React from 'react';


class Navbar extends React.Component{
  render() {
    return(
      <div>
      <div class="ui top attached demo menu">
        <a class="item">
          <i class="sidebar icon"></i>
          Menu
  </a>
      </div>
      <div class="ui bottom attached segment pushable">
        <div class="ui inverted labeled icon left inline vertical sidebar menu" style="">
          <a class="item">
            <i class="home icon"></i>
            Home
    </a>
          <a class="item">
            <i class="block layout icon"></i>
            Topics
    </a>
          <a class="item">
            <i class="smile icon"></i>
            Friends
    </a>
          <a class="item">
            <i class="calendar icon"></i>
            History
    </a>
        </div>
      </div>
      </div>
    )
  }
}

export default Navbar;






















