import React from 'react';
import ImageUploadForm from '../image/ImageUploadForm';
import { railsAssetImagePath } from '../../constants/railsAssetImagePath';
import { Button } from 'react-bootstrap'

class ProfileImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upload: false
    };
    this.handleCloseButton = this.handleCloseButton.bind(this);
    this.handleUploadButton = this.handleUploadButton.bind(this)
  };

  handleCloseButton(event) {
    event.preventDefault();
    this.setState({
      upload: false
    })
  };

  handleUploadButton(event) {
    event.preventDefault();
    this.setState({
      upload: true
    })
  };

  render() {
    let picture, upload;

    if (this.props.user && this.props.user.profile_photo) {
      picture = this.props.user.profile_photo.large.url
    } else {
      picture = railsAssetImagePath(`default_photo.png`)
    }

    if (this.state.upload) {
      upload = <ImageUploadForm handleCloseButton={this.handleCloseButton} user={this.props.user}/>
    }

    return(
      <div className="profile-photo">
        <img width={200} height={200} src={picture}/>
        <br/>
        <Button onClick={this.handleUploadButton}>
          Upload New Image
        </Button>
        {upload}
      </div>
    )
  }
}

export default ProfileImage
