import React from 'react';
import Dropzone from 'react-dropzone';
import Functions from '../../utils/Functions';
import { Button, Alert } from 'react-bootstrap'

class ImageUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      message: null,
      progress: false
    };
    this.uploadImage = this.uploadImage.bind(this)
  };

  onDrop(acceptedFiles, rejectedFiles) {
    if (acceptedFiles && acceptedFiles[0]) {
      let formPayLoad = new FormData();
      formPayLoad.append('uploaded_image', acceptedFiles[0]);
      this.uploadImage(formPayLoad);
    } else if (rejectedFiles) {
      this.setState({
        message: "Please make sure file size is below 500 KB and in .jpg, jpeg, .png, or gif format"
      })
    }

  };

  uploadImage(formPayLoad) {
    this.setState({
      progress: true
    })
    fetch(`/api/v1/images/${this.props.user.id}`, {
      credentials: 'same-origin',
      headers: {},
      method: 'PATCH',
      body: formPayLoad
    })
    .then(response => {
      this.setState({
        progress: false
      });
      window.location.assign("/profile")
    })
  }

  render() {
    let progress, warning;

    if (this.state.message) {
      warning = <Alert bsStyle="warning" style={{textAlign:"center", fontSize:"1em"}}>
        <strong>{this.state.message}</strong>
      </Alert>
    }

    if (this.state.progress) {
      progress = <strong><p>Upload in progress...</p></strong>
    }

    return(
      <div className="upload-form-container">
        <div className="upload-form">
          <Button
            onClick={this.props.handleCloseButton}
            id="close-button">
            Close
          </Button>
          <br/>
          <br/>
          <p> Please keep file size below 2 MB </p>
          {warning}
          {progress}
          <Dropzone
            onDrop={this.onDrop.bind(this)}
            accept="image/jpg, image/jpeg, image/gif, image/png"
            maxSize={500000}
            >
            <button>
              Upload a new image
            </button>
          </Dropzone>
        </div>
      </div>
    )
  }
}

export default ImageUploadForm
