import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import PropTypes from 'prop-types';

const Rotor = props => {
  const { name, value, label } = props;
  return (
    <FormControl>
      <InputLabel shrink htmlFor="rotor-label-placeholder">
        {label}
      </InputLabel>
      <Select
        value={value}
        onChange={props.handleSelectChange}
        input={<Input name={name} id="rotor-label-placeholder" />}
        displayEmpty
        name={name}
      >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={6}>6</MenuItem>
        <MenuItem value={7}>7</MenuItem>
        <MenuItem value={8}>8</MenuItem>
        <MenuItem value={9}>9</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={11}>11</MenuItem>
        <MenuItem value={12}>12</MenuItem>
        <MenuItem value={13}>13</MenuItem>
        <MenuItem value={14}>14</MenuItem>
        <MenuItem value={15}>15</MenuItem>
        <MenuItem value={16}>16</MenuItem>
        <MenuItem value={17}>17</MenuItem>
        <MenuItem value={18}>18</MenuItem>
        <MenuItem value={19}>19</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={21}>21</MenuItem>
        <MenuItem value={22}>22</MenuItem>
        <MenuItem value={23}>23</MenuItem>
        <MenuItem value={24}>24</MenuItem>
        <MenuItem value={25}>25</MenuItem>
        <MenuItem value={26}>26</MenuItem>
      </Select>
    </FormControl>
  );
};

// ButtonKey.propTypes = {
//   buttonKey: PropTypes.string,
//   wasPressed: PropTypes.bool
// };

// ButtonKey.defaultProps = {
//   buttonKey: '0',
//   wasPressed: false
// };

export default Rotor;
