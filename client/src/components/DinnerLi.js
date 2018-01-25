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

  componentDidMount() {
    this.setState({id: this.props.dinner.id});
    this.setState({title: this.props.dinner.title});
    this.setState({rating: this.props.dinner.rating});
    this.setState({ingredients_attributes: this.props.dinner.ingredients});
    this.setState({directions_attributes: this.props.dinner.directions});
    this.setState({image_attributes: this.props.dinner.image});
  }

  handleClick = () => {
    let currentRating = this.state.rating
    this.setState({rating:  currentRating += 1});
   };

   componentWillUpdate(nextProps, nextState) {
     if (nextProps.dinner.rating !== nextState.rating) {
       // console.log(nextState);
        this.props.updateDinner(nextState, this.props.history)
     };
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
            { dinner.rating} {keyword} | {this.state.rating}
          </div>
        </div>
        <hr className='headerDivider' />
      </div>
    )
  }
};

export default connect(null, { updateDinner} )(DinnerLi);
