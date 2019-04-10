import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/gs-common.css';

import NavBar from './components/navBar.js';
import HeaderBar from './components/headerBar.js';

class App extends Component {
  render() {
    return (
      <div className="gs-content">
        <HeaderBar />
        <NavBar />
      </div>
    );
  }
}

export default App;
