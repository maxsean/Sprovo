import React from 'react';
import Functions from '../../utils/Functions';
import TextInputField from '../textfield/TextInputField';
import { Form, FormGroup, Col, ControlLabel, FormControl, Button, Alert } from 'react-bootstrap'

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      error: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.postSignIn = this.postSignIn.bind(this)
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
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        if (data.role == "student") {
          window.location.assign("/profile")
        } else if (data.role == "mentor") {
          window.location.assign("/mentor")
        } else if (data.role == "admin") {
          window.location.assign("/admin")
        }
      }
    })
  }

  render() {
    let error;

    if (this.state.error) {
      error = <Alert bsStyle="warning">
        {this.state.error}
      </Alert>
    }
    return(
      <div className="signin-form-container">
        <div className="signin-form">
          {error}
          <Form horizontal
            onSubmit={this.handleSignInClick}
            >
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
              <br/>
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
