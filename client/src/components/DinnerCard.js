import React from 'react';
import moment from 'moment';
import { Grid, Col, Row } from 'react-bootstrap';
import Image from './Image'

const DinnerCard = ({ dinner, deleteDinner, history }) => {
  const createdDate = moment(dinner.created_at).format('MMMM Do YYYY');

  return (
    <div>
      <h1 className='dinnerCardTitle'>{dinner.title}</h1>
      <hr className='headerDivider' />
      <Grid>
        <Row className='show-grid'>
          <Col xs={6} className='dinnerCardPhoto'>
            <Image
              imageURL={dinner.image.url}
              imageName={dinner.image.name}
              style={{width: 500, height: 500}}
            />
            <figcaption style={{marginTop: 10, marginBottom: 30}}>
              Recipe was added on {createdDate}
            </figcaption>
            <button className='deleteDinnerButton'
              onClick={() => deleteDinner(dinner.id, history)}
            >
              Bad Dinner DELETE me!
            </button>
          </Col>
          <Col xs={3}>
            <h3 className='dinnerCardLabel'>Ingredients</h3>
              <ul className='IngredientsList'>
                {dinner.ingredients.map((ingredient, idx) =>
                  <li key={idx}>{ingredient.name}</li>
                )}
              </ul>
          </Col>
          <Col xs={3}>
            <h3 className='dinnerCardLabel'>Directions</h3>
              <ol className='DirectionsList'>
                {dinner.directions.map((direction, idx) =>
                  <li key={idx}>{direction.step}</li>
                )}
              </ol>
          </Col>
        </Row>
      </Grid>
      <h2 className='dinnerCardCloser'> And Enjoy!</h2>
    </div>
  );
};

export default DinnerCard;
