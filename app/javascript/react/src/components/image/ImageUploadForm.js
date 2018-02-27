import React from 'react'

class ImageUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.uploadImage = this.uploadImage.bind(this)
  };

  readFile(files) {
    if (files && files[0]) {
      let formPayLoad = new FormData();
      formPayLoad.append('uploaded_image', files[0]);
      this.uploadImage(formPayLoad)
    }
  };

  uploadImage(formPayLoad) {
    fetch(`/api/v1/images`, {
      credentials: 'same-origin',
      headers: {},
      method: 'POST',
      body: formPayLoad
    })
    .then(response => response.json())
    .then(imageFromController => {
      this.setState({uploads: this.state.uploads.concat(imageFromController)})
    })
  }

  render() {
    return(
      <div>
        <Dropzone onDrop={this.readFile}>
          <button>
            Upload a new image
          </button>
        </Dropzone>
      </div>
    )
  }
}

export default ImageUploadForm
