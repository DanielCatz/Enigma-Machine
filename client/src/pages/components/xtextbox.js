import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const XTextbox = props => (
  <TextField
    id={props.name}
    name={props.name}
    label={props.label}
    multiline
    fullWidth
    rows="3"
    InputLabelProps={{
      shrink: true
    }}
    placeholder={props.placeholder}
    value={props.text}
    onChange={props.handleTextChange}
  />
);

export default XTextbox;
