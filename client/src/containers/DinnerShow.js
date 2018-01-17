import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import DinnerCard from '../components/DinnerCard';
import { deleteDinner } from  '../actions/dinners'

const mapStateToProps = (state, ownProps) => {
  return ({ dinner: state.dinners.find(dinner =>
    dinner.id === Number(ownProps.match.params.dinnerId))
  })
};

class DinnerShow extends Component {
  render() {
    const {dinner, match, history, deleteDinner} = this.props;

    return (
      <div>
        <Route exact path={match.url} render={() => (
          <div>
            <DinnerCard
              dinner={dinner}
              deleteDinner={deleteDinner}
              history={history}
             />
          </div>
        )} />
      </div>
    );
  };
};

export default connect(mapStateToProps, { deleteDinner })(DinnerShow);
