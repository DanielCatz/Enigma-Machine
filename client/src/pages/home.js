import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Navbar from './components/navbar';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      message: ''
    };
  }

  render() {
    const { message } = this.state;
    const keys = ['a', 'b', 'c', 'd'];
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Enigma</h2>
          <Keyboard keys={keys} />
          <p>{message} </p>
        </div>
      </div>
    );
  }
}

export default Home;
