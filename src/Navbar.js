import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <header>
        <h2><a href="https://simpson2020-ibxxw.run-us-west2.goorm.io/">Recipe App</a></h2>
        <nav>
          <li><a href="https://simpson2020-ibxxw.run-us-west2.goorm.io/">New Recipe</a></li>
          <li><a href="https://simpson2020-ibxxw.run-us-west2.goorm.io/">Home</a></li>
          <li><a href="https://simpson2020-ibxxw.run-us-west2.goorm.io/">About</a></li>
          <li><a href="https://simpson2020-ibxxw.run-us-west2.goorm.io/">Contact Us</a></li>
        </nav>
      </header>
    );
  }
}

export default Navbar;