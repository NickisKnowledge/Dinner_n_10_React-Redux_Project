import React, { Component } from 'react';
import DinnerLi from './DinnerLi';

class DinnerList extends Component {
  sortedByRating = dinners =>
    dinners.sort((a, b) => {
      let aRating = a.rating;
      let bRating = b.rating;
      // b - a, so the dinner with the most likes appears first
      return bRating - aRating;
    });
  
  render() {
    const { dinners, url } = this.props;
    const sortedDinners = this.sortedByRating(dinners);
    const renderDinners = sortedDinners.map(dinner =>
      <DinnerLi dinner={dinner} url={url} key={dinner.id} />
    );

    return (
      <div>
        {renderDinners}
      </div>
    );
  };
};

export default DinnerList;
