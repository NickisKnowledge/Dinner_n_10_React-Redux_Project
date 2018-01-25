import React, { Component } from 'react';
import DinnerLi from './DinnerLi';

class DinnerList extends Component {

  render() {
    const { dinners, url } = this.props;

    const renderDinners = dinners.map(dinner =>
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
