import React, { Component } from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ExpandMoreIcon from '@material-ui/core/Icon/';
import PropTypes from 'prop-types';

class PlugBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handlePlugboardChange: this.onChangePlugboard,
      links: {
        link0: { name: 'link0', label: 'Link 0', placeholder: 'AZ', value: '' },
        link1: { name: 'link1', label: 'Link 1', placeholder: 'AZ', value: '' },
        link2: { name: 'link2', label: 'Link 2', placeholder: 'AZ', value: '' },
        link3: { name: 'link3', label: 'Link 3', placeholder: 'AZ', value: '' },
        link4: { name: 'link4', label: 'Link 4', placeholder: 'AZ', value: '' },
        link5: { name: 'link5', label: 'Link 5', placeholder: 'AZ', value: '' },
        link6: { name: 'link6', label: 'Link 6', placeholder: 'AZ', value: '' },
        link7: { name: 'link7', label: 'Link 7', placeholder: 'AZ', value: '' },
        link8: { name: 'link8', label: 'Link 8', placeholder: 'AZ', value: '' },
        link9: { name: 'link9', label: 'Link 9', placeholder: 'AZ', value: '' }
      },
      charactersUsed: {
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
      }
    };
  }
  // limit characters to 2, check for dupes

  onChangePlugboard = e => {
    const newState = this.state;
    // if(this.isValidKey(e.key,this.charactersUsed))
    newState.links[e.target.name].value = e.target.value;
    this.setState(newState);
  };

  isValidKey = (key, keys, keyPressed) => {
    if (keys.hasOwnProperty(key) && keys[key] !== keyPressed) return true;
    return false;
  };

  validatePairs = key => {
    if (this.state.charactersUsed[key]) return false;
    return true;
  };

  render() {
    const { handlePlugboardChange } = this.state;
    const links = Object.keys(this.state.links);
    console.log(this.state.links);
    const TextFields = links.map(link => (
      <TextField
        id={this.state.links[link].name}
        name={this.state.links[link].name}
        label={this.state.links[link].label}
        value={this.state.links[link].value}
        placeholder={this.state.links[link].placeholder}
        onChange={handlePlugboardChange}
        inputProps={{ maxLength: 2 }}
        fullWidth
      />
    ));
    return (
      <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography>PlugBoard</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Enter pairs of letters to link them together. This will divert the signal to the partner letter whenever it
            is pressed.
          </Typography>
          <div>{TextFields}</div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

export default PlugBoard;
