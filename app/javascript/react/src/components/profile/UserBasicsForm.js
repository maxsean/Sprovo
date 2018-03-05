import React from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import Functions from '../../utils/Functions';

class UserBasicsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: this.props.user.first_name || "",
      last_name: this.props.user.last_name || "",
      phone: this.props.user.phone || "",
      school: this.props.user.school || ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        phone: this.state.phone,
        school: this.state.school
      },
      authenticity_token: Functions.getMetaContent("csrf-token")
    };
    this.props.updateUser(formPayLoad);
    this.props.handleCloseButton()
  };

  render() {
    return(
      <div className="basics-form">
        <Form onSubmit={this.handleSubmit}>
          <FormGroup controlId="formControlsfirstname">
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              type="text"
              name="first_name"
              onChange={this.handleChange}
              value={this.state.first_name}
            />
          </FormGroup>
          <FormGroup controlId="formControlslastname">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              type="text"
              name="last_name"
              onChange={this.handleChange}
              value={this.state.last_name}
            />
          </FormGroup>
          <FormGroup controlId="formControlsphone">
            <ControlLabel>Phone Number </ControlLabel>
            <FormControl
              type="text"
              name="phone"
              onChange={this.handleChange}
              value={this.state.phone}
            />
          </FormGroup>
          <FormGroup controlId="formControlsschool">
            <ControlLabel>School</ControlLabel>
            <FormControl
              type="text"
              name="school"
              onChange={this.handleChange}
              value={this.state.school}
            />
          </FormGroup>
            <FormGroup>
              <Button type="submit">Submit</Button>
            </FormGroup>
        </Form>
      </div>
    )
  }
}

export default UserBasicsForm
