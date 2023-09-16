import React from 'react';
import logo from './gadlitylogo.png';
import "./App.css";

function Heading() {
    return (
<div className='nav-bg'>
<nav>
      <a href='#'> <img src={logo} className='App-logo' alt='logo'/> </a>
        <ul className='nav-items'>
          <a href='#'><li>About</li></a>
          <a href='Laptops.js'><li>Laptops</li></a>
          <a href='#'><li>Phones</li></a>
          <a href='#'><li>Contact</li></a>
        </ul>
</nav>
</div>
      )
}

export default Heading;