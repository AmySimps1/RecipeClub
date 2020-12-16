import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

class Navbar extends Component {
  static defaultProps = {
    onNewRecipe() {}
  }
  
  static propTypes = {
    onNewRecipe: PropTypes.func
  }

  render() {
    return (
      <header>
        <h2><a href="https://recipemovieclub.herokuapp.com/">Recipe Movie Club</a></h2>
        <nav>
		  <li><button onClick={this.props.onNewRecipe}>New Recipe</button></li>
          <li><a href="https://recipemovieclub.herokuapp.com/">Home</a></li>
          <li><a href="https://recipemovieclub.herokuapp.com/">About</a></li>
          <li><a href="https://recipemovieclub.herokuapp.com/">Contact Us</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;