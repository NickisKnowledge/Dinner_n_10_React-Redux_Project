import React, { Component } from 'react';

class IngredientInput extends Component {
  render() {
    const { state, handleIngredientInput, handleRemoveIngredient } = this.props;

    return (
      state.ingredients_attributes.map((ingredient, idx) => (
        <li className='ingredient' key={idx}>
          <input
            style={{marginBottom: '10px'}}
            type='text'
            value={ingredient.name}
            onChange={handleIngredientInput(idx)}
          />
          <input
            type='button'
            value='X'
            onClick={handleRemoveIngredient(idx)}
            className='small'
          />
        </li>
      ))
    )
  }
}

export default IngredientInput;
