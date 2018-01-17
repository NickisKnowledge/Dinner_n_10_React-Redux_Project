import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDinners } from '../actions/dinners';

const mapStateToProps = state => { return { dinners: state.dinners } };

class Dinners extends Component {
  componentDidMount() {
    this.props.fetchDinners();
  }

  render() {
    const {dinners, match} = this.props;
    const showDinners = dinners.map(dinner => {
      return (
        <div>
          <Link
          to={`${match.url}/${dinner.id}`}
          key={dinner.id}
          style={{ textDecoration: 'none' }}
          >
            <h2>{dinner.title}</h2>
          </Link>
          <hr className='headerDivider' />
        </div>
      )
     }
     );

    return (
      <div class='container'>
        <h1>Bon Appétit</h1>
        <hr/>
        {showDinners}
      </div>
    )
  }
};

export default connect(mapStateToProps, { fetchDinners })(Dinners);
