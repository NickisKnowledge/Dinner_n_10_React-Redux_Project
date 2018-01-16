import React from 'react';

const Home = () => {
  return (
    <div className='mainComponent home'>
      <h1>Welcomes YOU! </h1>
      <h3>
        Being a single mom and not liking to cook hasn't worked out very well.
        <p className='opener'>
          Dinner-n-10 is my solution!
        </p>
        <div className='preCloser'>
          These meals are in small portion sizes because I only have to
          <br />
          prepare them for a small child and myself, nevertheless, their delicious and take
          <p className='closer'>
            AT MOST 10 steps to create.
          </p>
        </div>
      </h3>
    </div>
  );
};

export default Home;
