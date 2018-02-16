import React, { Component } from 'react';
import DinnerLi from './DinnerLi';

class DinnerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWord: '',
      selectedDinners: []
    }
  }

  sortedByRating = dinners =>
    dinners.sort((a, b) => {
      let aRating = a.rating;
      let bRating = b.rating;
      // b - a, so the dinner with the most likes appears first
      return bRating - aRating;
    });

    handleInput = event => {
      this.setState({ searchWord: event.target.value });
    }
  render() {
    const { dinners, url } = this.props;
    const sortedDinners = this.sortedByRating(dinners);
    const renderDinners = sortedDinners.map(dinner =>
      <DinnerLi dinner={dinner} url={url} key={dinner.id} />
    );

    return (
      <div>
        <div style={{ float: 'right' }}>
          <label>Keyword Search </label><br />
          <input
            type='text'
            value={this.state.searchWord}
            onChange={this.handleInput}
          />< br />
          <input type='button' value='Search' />
        </div>
        {renderDinners}
      </div>
    );
  };
};

export default DinnerList;
