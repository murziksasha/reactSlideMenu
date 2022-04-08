import {Component} from 'react';
import MenuButton from '../menuButton/MenuButton';
import Menu from '../menu/Menu';

import './MenuContainer.css';

class MenuContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false
    }
  }

  toggleMenu = ()=> {
    this.setState({
      visible: !this.state.visible
    });
  }

  handleMouseDown = (e) => {
    this.toggleMenu();
    console.log('clicked');
    e.stopPropagation();
  }


  render(){
    return(

      <div>
          <MenuButton handleMouseDown={this.handleMouseDown} />
          <Menu handleMouseDown={this.handleMouseDown}
              menuVisability={this.state.visible}/>
        <div>
          <p> Find extra list item </p>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
            <li>Sit</li>
            <li>Bumblebeas</li>
            <li>Aenean</li>
            <li>Consectetur</li>
          </ul>
        </div>

      </div>
    )
  }
}

export default MenuContainer;