import React from 'react';
import Functions from '../../utils/Functions';
import TextInputField from '../textfield/TextInputField'

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
      email: this.state.email,
      password: this.state.password
    }
    this.postSignIn(formPayload);
    this.clearForm()
  };

  postSignIn(formPayload) {
    fetch('/users/sign_in.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      data: {
        user: formPayload,
        authenticity_token: Functions.getMetaContent("csrf-token")
      }
    })
  }

  render() {
    return(
      <div>
        <form
          onSubmit={this.handleSignInClick}>
          <TextInputField
            content={this.state.email}
            label="Email: "
            name="email"
            handleChange={this.handleChange}
            type="text"
          />
          <TextInputField
            content={this.state.password}
            label="Password: "
            name="password"
            handleChange={this.handleChange}
            type="password"
          />
        </form>
      </div>
    )
  }
}

export default SignInForm
