import React, { Component } from 'react';

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

  render() {
    return(
      <div>
        <h1>Add your Recipe</h1>
        <hr className='headerDivider' />
        <form>
          <div>
          <label>Dinner Name: </label>
            <input
              type="text"
              value={this.state.title}
              onChange={this.handleTitleInput}
            />
          </div>
        </form>
      </div>
    );
  }
};

export default DinnerForm;
