import React from 'react';

const Image = ({ imageURL, imageName, style }) => {

  return(
    <div>
      <img src={imageURL} alt={imageName} style={style} />
    </div>
  );
};

export default Image;
