import React from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const ButtonKey = props => {
  const { buttonKey, wasPressed } = props;
  return <Button variant={wasPressed ? 'contained' : 'flat'}>{buttonKey}</Button>;
};

ButtonKey.propTypes = {
  buttonKey: PropTypes.string,
  wasPressed: PropTypes.bool
};

ButtonKey.defaultProps = {
  buttonKey: '0',
  wasPressed: false
};

export default ButtonKey;
