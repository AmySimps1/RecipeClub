import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <h2><a href="https://recipemovieclub.herokuapp.com/">Recipe Movie Club</a></h2>
        <nav>
          <li><a href="https://recipemovieclub.herokuapp.com /">New Recipe</a></li>
          <li><a href="https://recipemovieclub.herokuapp.com/">Home</a></li>
          <li><a href="https://recipemovieclub.herokuapp.com/">About</a></li>
          <li><a href="https://recipemovieclub.herokuapp.com/">Contact Us</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;