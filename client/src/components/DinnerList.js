import React, { Component } from 'react';
import DinnerLi from './DinnerLi';

class DinnerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchWord: '',
      selectedDinners: [],
    };
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
    };

    filterAndSortDinners = () => {
      let keyword = this.state.searchWord.toLowerCase();
      let searchedDinners = this.props.dinners.filter(dinner => {
        let title = dinner.title.toLowerCase();
        return title.includes(keyword);
      });

      let sortedSearchedDinners = this.sortedByRating(searchedDinners);

      this.setState({ selectedDinners: sortedSearchedDinners });
    };

  render() {
    const { dinners, url } = this.props;
    const sortedDinners = this.sortedByRating(dinners);
    let renderDinners;
    if (this.state.selectedDinners.length !== 0) {
      renderDinners = this.state.selectedDinners.map(dinner =>
        <DinnerLi dinner={dinner} url={url} key={dinner.id} />
      );
    } else {
      renderDinners = sortedDinners.map(dinner =>
        <DinnerLi dinner={dinner} url={url} key={dinner.id} />
      );
    };

    return (
      <div>
        <div style={{ float: 'right' }}>
          <label>Keyword Search </label><br />
          <input
            type='text'
            value={this.state.searchWord}
            onChange={this.handleInput}
          />< br />
          <input
            type='button'
            value='Search'
            onClick={this.filterAndSortDinners.bind(this)}
          />
        </div>
        {renderDinners}
      </div>
    );
  };
};

export default DinnerList;
