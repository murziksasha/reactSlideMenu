import { Component } from "react";

import './Menu.css';

class Menu extends Component {
  render(){

    let visibility = 'hide';

    console.log(this.props.menuVisability);

    if(this.props.menuVisability) {
      visibility='show';
    }
    return(
      <div id="flyoutMenu"
      onMouseDown={this.props.handleMouseDown}
      className={visibility}>
        <h2><a href="#">Main</a></h2>
        <h2><a href="#">Aboutn</a></h2>
        <h2><a href="#">Contact</a></h2>
        <h2><a href="#">Search</a></h2>

      </div>
    )
  }
}

export default Menu;