import React, { Component } from 'react';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';

class ImageUploader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
      imageName: '',
    };
  }

  uploadFile = (files) => {
    const image = files[0];
    const cloudName = 'nickisknowledge'
    const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
    const timestamp = Date.now()/1000
    const uploadPreset = 'fyxfsz9r'

    const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+
    'l53JMlRfRSBrfqbhzWZzfwpLH8Y'

    const signature = sha1(paramsStr)

    const params = {
      'api_key': '192174765614618',
      'timestamp': timestamp,
      'upload_preset': uploadPreset,
      'signature': signature,
    }

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
