import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';

const DinnerList = ({ dinners, url }) => {
  const renderDinners = dinners.map(dinner =>
    <div>
      <div key={dinner.id} className='listDinners'>
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
      </div>
      <hr className='headerDivider' />
    </div>
  );

  return (
    <div>
      {renderDinners}
    </div>
  );
};

export default DinnerList;
