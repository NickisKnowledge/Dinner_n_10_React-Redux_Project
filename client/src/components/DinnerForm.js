import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createDinner } from '../actions/dinners';
import { Grid, Col, Row } from 'react-bootstrap';
import IngredientInput from './IngredientInput';
import DirectionInput from './DirectionInput';
import ImageUploader from './ImageUploader';
import Image from './Image';

class DinnerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      ingredients_attributes: [{ name: '' }],
      directions_attributes: [{ step: '' }],
      image_attributes: {url: '', name: ''},
    };
  };

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

  handleIngredientRemoval = (index) => () =>  {
    this.setState({
      ingredients_attributes: this.state.ingredients_attributes.filter((name, idx) => index !== idx),
    });
  };

  handleDirectionInput = (index) => (event) => {
    let newDirections;
    newDirections = this.state.directions_attributes.map((direction, idx) => {
      if (index !== idx) return direction;
      return { ...direction, step: event.target.value };
    });
    this.setState({ directions_attributes: newDirections });
  };

  handleAddDirection = () => {
    this.setState({
      directions_attributes: this.state.directions_attributes.concat([{ step: '' }])
    });
  };

  handleDirectionRemoval = (index) => () => {
    this.setState({
      directions_attributes: this.state.directions_attributes.filter((step, idx) => index !== idx)
    });
  };

  handleImageUpload = photoInfo => {
    const dinnerImageInfo = {...this.state.image_attributes};
      dinnerImageInfo.url = photoInfo.imageURL;
      dinnerImageInfo.name = photoInfo.imageName;

    this.setState({ image_attributes: dinnerImageInfo });
  };

  handleImageRemoval = () => {
    const dinnerImageInfo = {...this.state.image_attributes};
      dinnerImageInfo.url = '';
      dinnerImageInfo.name = '';

    this.setState({ image_attributes: dinnerImageInfo });
  };

  canBeSubmitted = () => {
    const { title, ingredients_attributes,
      directions_attributes, image_attributes } = this.state;

    return (
      title.length > 0 &&
      ingredients_attributes[0]['name'].length > 0 &&
      directions_attributes[0]['step'].length > 0 &&
      image_attributes['url'].length > 0
    );
  };

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.createDinner(this.state, this.props.history)
  };

  render() {
    let deleteImage = ''
    if (this.state.image_attributes.url) {
      deleteImage = <input
        type='button'
        value='X'
        className='deleteImageButton'
        onClick={this.handleImageRemoval}
      />
    }

    let isEnabled = this.canBeSubmitted();

    return(
      <div className='mainComponent'>
        <h1 className='formHeader'>Add your Recipe</h1>
        <hr className='headerDivider' />
        <form onSubmit={event => this.handleOnSubmit(event)}>
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
                <Col xs={4} className='ingredient'>
                  <div>
                    <label>Ingredients:</label>
                    <ul>
                      <IngredientInput
                        state={this.state}
                        handleIngredientInput={this.handleIngredientInput}
                        handleIngredientRemoval={this.handleIngredientRemoval}
                      />
                    </ul>
                    <input
                      type='button'
                      value='Add Ingredient'
                      onClick={this.handleAddIngredient}
                    />
                  </div>
                </Col>
                <Col xs={4} className='direction'>
                  <div>
                    <label>Directions:</label>
                    <ol>
                      <DirectionInput
                        state={this.state}
                        handleDirectionInput={this.handleDirectionInput}
                        handleDirectionRemoval={this.handleDirectionRemoval}
                      />
                    </ol>
                    <input
                      type='button'
                      value='Add Instruction'
                      onClick={this.handleAddDirection}
                    />
                  </div>
                </Col>
              </Row>
              <Row className='secondRow'>
                <Col xs={4} className='dropzone'>
                  <ImageUploader
                    parentImageUpload={this.handleImageUpload}
                  />
                </Col>
                <Col xs={4} className='imageDisplay'>
                  <Image
                    imageURL={this.state.image_attributes.url}
                    imageName={this.state.image_attributes.name}
                    style={{width: 400, height:267}}
                  />
                  {deleteImage}
                </Col>
              </Row>
              <Row className='thirdRow'>
                <Col xx={4}>
                  <button
                    type="submit"
                    className='submitButton'
                    disabled={!isEnabled}
                  >
                    Submit
                  </button>
                  <br />
                  <a className='cancelLink'
                    onClick={() => this.props.history.push('/dinners')}
                  >
                    Cancel
                  </a>
                </Col>
              </Row>
            </Grid>
          </div>
        </form>
      </div>
    );
  };
};

export default connect(null, { createDinner })(DinnerForm);
