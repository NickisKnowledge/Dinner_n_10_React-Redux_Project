import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import { connect } from 'react-redux';
import { updateDinner } from '../actions/dinners';

class DinnerLi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      rating: 0,
      ingredients_attributes: [{ name: '' }],
      directions_attributes: [{ step: '' }],
      image_attributes: {url: '', name: ''},
    };
  }

  handleClick = () => {
    // let currentVotes = this.state.votes
    // this.setState({
    //   votes:  currentVotes += 1
    // });
  };

  render() {
    const { dinner, url } = this.props;

    return(
      <div>
        <div className='listDinners'>
          <h2 className='dinnerIndexTitle'>{dinner.title}</h2>
          <Link
            to={`${url}/${dinner.id}`}
            style={{ textDecoration: 'none' }}
          >
            <Image
              imageURL={dinner.image.url}
              imageName={dinner.image.name}
              style={{width: 250, height: 250}}
            />
          </Link>
          <input type='button' value='Like me' onClick={this.handleClick.bind(this) } />
          <div>
            {dinner.rating}
          </div>
        </div>
        <hr className='headerDivider' />
      </div>
    )
  }
};

export default connect(null, { updateDinner} )(DinnerLi);
