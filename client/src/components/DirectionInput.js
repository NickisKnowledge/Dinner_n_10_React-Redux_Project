import React, { Component } from 'react';

class DirectionInput extends Component {
  render() {
    const { state, handleDirectionInput, handleDirectionRemoval } = this.props;

    return (
      state.directions_attributes.map((instruction, idx) => (
        <li key={idx}>
          <textarea
            type='text'
            value={instruction.step}
            onChange={handleDirectionInput(idx)}
          />
          <input
            type='button'
            value='X'
            onClick={handleDirectionRemoval(idx)}
            className='small'
          />
        </li>
      ))
    )
  };
};

export default DirectionInput;
