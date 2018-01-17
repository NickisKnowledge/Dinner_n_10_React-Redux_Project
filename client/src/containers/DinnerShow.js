import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return ({ dinner: state.dinners.find(dinner =>
    dinner.id === Number(ownProps.match.params.dinnerId))
  })
};

class DinnerShow extends Component {
  render() {
    const { dinner } = this.props;
    return (
      <div>
        <h1>{dinner.title}</h1>
        <hr/>
        <h3>Ingredients List</h3>
        <h3>Directions List</h3>
        <img
          src={dinner.image.url}
          alt={dinner.image.name}
          style={{width: 200, height: 200}}
        />
      </div>
    )
  }
};

export default connect(mapStateToProps)(DinnerShow);
