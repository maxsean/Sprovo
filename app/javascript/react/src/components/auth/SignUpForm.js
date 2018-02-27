import React from 'react';
import Functions from '../../utils/Functions';
import TextInputField from '../textfield/TextInputField';
import FormErrors from '../errors/FormErrors';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap'

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      handle: "",
      email: "",
      password: "",
      password_confirmation: "",
      errors: {}
    };
    this.addNewUser = this.addNewUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearForm = this.clearForm.bind(this);
  };

  addNewUser(formPayLoad) {
    fetch('/users.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formPayLoad)
    })
    .then(response => { return response.json() })
    .then(data => {
      if (data.errors) {
        this.setState({ errors: data.errors })
      } else {
        window.location.assign("/profile")
      }
    })
  };

  clearForm() {
    this.setState({
      first_name: "",
      last_name: "",
      handle: "",
      email: "",
      password: "",
      password_confirmation: ""
    });
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
        handle: this.state.handle,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation
      },
      authenticity_token: Functions.getMetaContent("csrf-token")
    };
    this.addNewUser(formPayLoad);
    this.clearForm()
  }


  render() {
    // only appears if backend returns errors for failed registration
    let errors;
    if(this.state.errors != {}){
      errors = <FormErrors formErrors={this.state.errors}/>
    };
    return(
      <div className="signup-form-container">
        <div className="signup-form">
          <div>
            {errors}
          </div>
          <Button
            onClick={this.props.handleClose}>
            Close
          </Button>
          <Form horizontal
            onSubmit={this.handleSubmit}>
            <h3>Sign Up</h3>
            <FormGroup controlId="formHorizontalFirstName">
              <Col componentClass={ControlLabel} sm={2}>
                First Name
              </Col>
              <Col sm={10}>
                <FormControl
                  type="text"
                  placeholder="First Name"
                  name="first_name"
                  onChange={this.handleChange}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalLastName">
              <Col componentClass={ControlLabel} sm={2}>
                Last Name
              </Col>
              <Col sm={10}>
                <FormControl
                  type="text"
                  placeholder="Last Name"
                  name="last_name"
                  onChange={this.handleChange}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalUsername">
              <Col componentClass={ControlLabel} sm={2}>
                Username
              </Col>
              <Col sm={10}>
                <FormControl
                  type="text"
                  placeholder="Username"
                  name="handle"
                  onChange={this.handleChange}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalEmail">
              <Col componentClass={ControlLabel} sm={2}>
                Email
              </Col>
              <Col sm={10}>
                <FormControl
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={this.handleChange}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col componentClass={ControlLabel} sm={2}>
                Password
              </Col>
              <Col sm={10}>
                <FormControl
                  type="password"
                  placeholder=""
                  name="password"
                  onChange={this.handleChange}/>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPasswordConfirm">
              <Col componentClass={ControlLabel} sm={2}>
                Password Confirmation
              </Col>
              <Col sm={10}>
                <FormControl
                  type="password"
                  placeholder=""
                  name="password_confirmation"
                  onChange={this.handleChange}/>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Register</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    );
  };
};

export default SignUpForm;
