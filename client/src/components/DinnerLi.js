import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import { connect } from 'react-redux';
import { updateDinner } from '../actions/dinners';

class DinnerLi extends Component {

  handleClick = () => {
    let currentDinner = this.props.dinner
    currentDinner.rating += 1;
    this.props.updateDinner(currentDinner);
   };

  render() {
    const { dinner, url } = this.props;
    let keyword = dinner.rating === 1 ? 'like' : 'likes';

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
          <div style={{display: 'inline', marginLeft: 10}}>
            { dinner.rating} {keyword}
          </div>
        </div>
        <hr className='headerDivider' />
      </div>
    )
  }
};

export default connect(null, { updateDinner} )(DinnerLi);
