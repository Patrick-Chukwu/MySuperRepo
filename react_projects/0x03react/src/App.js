import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Header from '../src/components/Header/Header';
import Navbar from '../src/components/NavBar/Navbar';
import Footer from '../src/components/Footer/Footer';
import Button from '../src/components/Button/Button';
import Hook from '../src/components/Hooks/Hook';


class App extends Component {
  render() {

    const bool = false;
    const str1 = "just";
    return (
      <div>
      <Navbar first="Home" second="About" third="projects" last="contact"/>
      <Header firstName="Patrick" lastName="Chukwu"/>;
      <Header firstName="Rotense" lastName="Gab" />;
      <Navbar first="Home" second="About" third="projects"/>
      <Button/>
      <Hook/>
      <Footer 
        result="Mine"
        toggleBoolean={!bool}
        math={2 + 6 / 3}
        str={ str1 + " a boy!"}
      
      />
    
      </div>
    );
  }
}

export default App;
