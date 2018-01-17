import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import IngredientInput from './IngredientInput';

class DinnerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      ingredients_attributes: [{ name: '' }],
      directions_attributes: [{ step: '' }],
      image_attributes: {url: '', name: ''},
    };
  }

  handleTitleInput = event => {
    this.setState({ title: event.target.value });
  };

  handleIngredientInput = (index) => (event) => {
    let newIngredients;
    newIngredients = this.state.ingredients_attributes.map((ingredient, idx) => {
      if (index !== idx) {return ingredient};
      return { ...ingredient, name: event.target.value };
    });
    this.setState({ ingredients_attributes: newIngredients });
  };

  handleAddIngredient = () => {
    this.setState({
      ingredients_attributes: this.state.ingredients_attributes.concat([{ name: '' }]),
    });
  };

  handleRemoveIngredient = () => {

  };

  render() {
    return(
      <div>
        <h1>Add your Recipe</h1>
        <hr className='headerDivider' />
        <form>
          <div>
            <div>
              <label>Dinner Name: </label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.handleTitleInput}
              />
            </div>
            <Grid className='firstGrid'>
              <Row className='firstRow'>
                <Col xs={4}>
                  <div>
                    <label>Ingredients:</label>
                    <ul>
                      <IngredientInput
                        state={this.state}
                        handleIngredientInput={this.handleIngredientInput}
                        handleRemoveIngredient={this.handleRemoveIngredient}
                      />
                    </ul>
                    <input
                      type='button'
                      value='Add Ingredient'
                      onClick={this.handleAddIngredient}
                    />
                  </div>
                </Col>
                <Col xs={4}>
                  <div>
                    <label>Directions:</label>
                    <ol>
                      <p>DirectionInput</p>
                    </ol>
                    <input
                      type='button'
                      value='Add Instruction'
                      onClick={this.handleAddDirection}
                    />
                  </div>
                </Col>
              </Row>
            </Grid>
          </div>
        </form>
      </div>
    );
  }
};

export default DinnerForm;
