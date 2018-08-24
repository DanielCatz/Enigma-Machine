import React, { Component } from 'react';
import Keyboard from './components/keyboard';
import Navbar from './components/navbar';

class Enigma extends Component {
  constructor() {
    super();
    this.state = {
      keyPressed: false,
      keyValue: '',
      lastEvent: null
    };
  }

  componentWillMount = () => {
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);
  };

  onKeyDown = e => {
    // validate
    const { lastEvent, keyPressed } = this.state;
    if ((lastEvent && lastEvent === e.key) || keyPressed) {
      return;
    }

    this.setState({ keyPressed: true, keyValue: e.key, lastEvent: e.key });
  };

  onKeyUp = e => {
    const { lastEvent } = this.state;
    if (lastEvent === e.key) {
      this.setState({ keyPressed: false, keyValue: e.key, lastEvent: '' });
    }
  };

  render() {
    const availableKeys = {
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      f: false,
      g: false,
      h: false,
      i: false,
      j: false,
      k: false,
      l: false,
      m: false,
      n: false,
      o: false,
      p: false,
      q: false,
      r: false,
      s: false,
      t: false,
      u: false,
      v: false,
      w: false,
      x: false,
      y: false,
      z: false
    };

    const { message } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <h2>Enigma</h2>
          <Keyboard keys={availableKeys} keyPressed={this.state.keyPressed} keyValue={this.state.keyValue} />
          <p>{message} </p>
        </div>
      </div>
    );
  }
}

export default Enigma;
