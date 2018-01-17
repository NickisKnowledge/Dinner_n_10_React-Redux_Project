import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class ImageUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      imageName: '',
    };
  }

  uploadFile = (files) => {
    console.log(files);
  };

  render() {
    return (
      <div className='imageDiv'>
        <label>Add a photo of your Recipe here</label>
        <Dropzone onDrop={this.uploadFile.bind(this)} />
      </div>
    )
  };
};

export default ImageUploader;
