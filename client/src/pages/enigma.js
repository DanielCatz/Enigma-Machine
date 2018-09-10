import React, { Component } from 'react';
import Card from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Keyboard from './components/keyboard';
import Navbar from './components/navbar';
import XTextbox from './components/xtextbox';
import Rotor from './components/rotor';
import PlugBoard from './components/plugboard';

class Enigma extends Component {
  constructor() {
    super();
    this.state = {
      keyPressed: false,
      keyValue: '',
      lastEvent: null,
      plaintext: '',
      cyphertext: '',
      rotor1: 1,
      rotor2: 1,
      rotor3: 1
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

  onChangeText = e => {
    const newState = this.state;
    newState[e.target.name] = e.target.value;

    newState.cyphertext = this.createCypher(this.state.lastEvent);
    this.setState(newState);
  };

  onChangeSelect = e => {
    const newState = this.state;
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  };

  createCypher = letter => {
    const value = String.fromCharCode(letter.charCodeAt() + 1);
    return value;
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
          <Rotor name="rotor1" label="Rotor 1" value={this.state.rotor1} handleSelectChange={this.onChangeSelect} />
          <Rotor name="rotor2" label="Rotor 2" value={this.state.rotor2} handleSelectChange={this.onChangeSelect} />
          <Rotor name="rotor3" label="Rotor 3" value={this.state.rotor3} handleSelectChange={this.onChangeSelect} />
          <Grid container spacing={24}>
            <Grid item xs={6} sm={6}>
              <Card>
                <XTextbox
                  name="plaintext"
                  text={this.state.plaintext}
                  label="Plain Text"
                  handleTextChange={this.onChangeText}
                  placeholder="Enter text here"
                />
              </Card>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Card>
                <XTextbox name="cyphertext" text={this.state.cyphertext} label="Cypher Text" />
              </Card>
            </Grid>
          </Grid>
          <Keyboard keys={availableKeys} keyPressed={this.state.keyPressed} keyValue={this.state.keyValue} />
          <PlugBoard />
          <p>{message} </p>
        </div>
      </div>
    );
  }
}

export default Enigma;
