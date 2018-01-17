import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { fetchDinners } from '../actions/dinners';
import DinnerList from '../components/DinnerList';
import DinnerShow from './DinnerShow';

const mapStateToProps = state => { return { dinners: state.dinners } };

class Dinners extends Component {
  componentDidMount() {
    this.props.fetchDinners();
  };

  render() {
    const {dinners, match} = this.props;

    return (
      <div>
        <Switch>
          <Route exact path={`${match.url}`}
            render={() => (
              <div className="container" style={{textAlign: '-webkit-center'}}>
                <h1>Bon Appétit</h1>
                <hr className='headerDivider' />
                <DinnerList dinners={dinners} url={match.url} />
              </div>
            )}
          />
          <Route path={`${match.url}/:dinnerId`} component={DinnerShow} />
        </Switch>
      </div>
    );
  };
};

export default connect(mapStateToProps, { fetchDinners })(Dinners);
