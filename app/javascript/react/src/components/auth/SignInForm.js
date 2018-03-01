import React from 'react';
import Functions from '../../utils/Functions';
import TextInputField from '../textfield/TextInputField';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button } from 'react-bootstrap'

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.clearForm = this.clearForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.postSignIn = this.postSignIn.bind(this)
  };

  clearForm() {
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value })
  };

  handleSignInClick(event) {
    event.preventDefault();
    let formPayload = {
      user: {
        email: this.state.email,
        password: this.state.password
      },
      authenticity_token: Functions.getMetaContent("csrf-token")
    }
    this.postSignIn(formPayload);
    this.clearForm()
  };

  postSignIn(formPayload) {
    fetch('/users/sign_in.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(data => {
      if (data.role == "student") {
        window.location.assign("/profile")
      } else if (data.role == "mentor") {
        window.location.assign("/mentor")
      }
    })
  }

  render() {
    return(
      <div className="signin-form-container">
        <div className="signin-form">
          <Button
            onClick={this.props.handleClose}>
            Close
          </Button>
          <Form horizontal
            onSubmit={this.handleSignInClick}
            >
              <h3>Sign In</h3>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                    name="email" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                    name="password"
                  />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">Sign in</Button>
                </Col>
              </FormGroup>
            </Form>
        </div>
      </div>
    )
  }
}

export default SignInForm
