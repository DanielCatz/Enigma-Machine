import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ButtonKey from './key';

class Keyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keys: props.keys,
      keyPressed: props.keyPressed,
      keyValue: props.keyValue
    };
  }

  // Keyboard.propTypes = {
  //   availableKeys: PropTypes.arrayOf(PropTypes.string).isRequired
  // };

  componentWillReceiveProps = newProps => {
    const { keys } = this.state;
    const { keyPressed, keyValue } = newProps;
    if (this.isValidKey(keyValue, keys)) {
      keys[keyValue] = keyPressed;
      this.setState({ keyPressed: !keyPressed, keyValue, keys });
    }
  };

  isValidKey = (key, keys) => {
    console.log(keys[key]);
    if (keys.hasOwnProperty(key) && !keys[key]) return true;
    return false;
  };

  render() {
    const keys = Object.keys(this.state.keys);
    const ButtonKeys = keys.map(key => <ButtonKey buttonKey={key} wasPressed={this.state.keys[key]} key={key} />);
    return <div>{ButtonKeys}</div>;
  }
}

export default Keyboard;
