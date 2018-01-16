import React, { Component } from 'react';

class IngredientInput extends Component {
  render() {
    const { state, handleIngredientInput } = this.props;

    return (
      state.ingredients_attributes.map((ingredient, idx) => (
        <li className='ingredient' key={idx}>
          <input
            style={{marginBottom: '10px'}}
            type='text'
            value={ingredient.name}
            onChange={handleIngredientInput(idx)}
          />
        </li>
      ))
    )
  }
}

export default IngredientInput;
