import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import Functions from '../../utils/Functions';

class BioForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: ""
    }
    this.clearForm = this.clearForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateUser = this.updateUser.bind(this)
  };

  clearForm() {
    this.setState({
      bio: ""
    })
  };

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value })
  };

  handleSubmit(event) {
    event.preventDefault();
    let formPayLoad = {
      user: {
        bio: this.state.bio,
      },
      authenticity_token: Functions.getMetaContent("csrf-token")
    };
    this.updateUser(formPayLoad);
    window.location.assign("/profile")
  };

  updateUser(payload) {
    fetch(`/api/v1/users/${this.props.user.id}.json`, {
      credentials: 'same-origin',
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    // .then(response => { return response.json() })
    // .then(data => {
    //   if (data.errors) {
    //     this.setState({ errors: data.errors })
    //   } else {
    //     window.location.assign("/profile")
    //   }
    // })
  };

  render() {
    return(
      <div className="bio-form">
        <Button
          onClick={this.props.handleCloseButton}
          id="close-button">
          Close
        </Button>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formControlsTextarea">
            <ControlLabel>Your Bio</ControlLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Tell us about yourself"
              name="bio"
              onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Button type="submit">Submit</Button>
            </FormGroup>
          </Form>
      </div>
    )
  }
}

export default BioForm
