import React from 'react';
import SignInForm from '../components/auth/SignInForm';
import SignUpForm from '../components/auth/SignUpForm';
import SignOutLink from '../components/auth/SignOutLink'

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      signUp: false
    }
    this.handleSignInButton = this.handleSignInButton.bind(this);
    this.handleSignUpButton = this.handleSignUpButton.bind(this);
    this.handleCloseButton = this.handleCloseButton.bind(this)
  };

  handleSignInButton(event) {
    event.preventDefault();
    this.setState({
      signIn: true,
      signUp: false
    })
  }

  handleSignUpButton(event) {
    event.preventDefault();
    this.setState({
      signIn: false,
      signUp: true
    })
  }

  handleCloseButton(event) {
    event.preventDefault();
    this.setState({
      signIn: false,
      signUp: false
    })
  }

  render() {
    let signIn, signUp;

    if(this.state.signIn) {
      signIn = <SignInForm handleClose={this.handleCloseButton}/>
    };

    if(this.state.signUp) {
      signUp = <SignUpForm handleClose={this.handleCloseButton}/>
    }

    return(
      <div>
        Hello World
        <div>
          <button
            onClick={this.handleSignInButton}>
            Sign In
          </button>
          <button
            onClick={this.handleSignUpButton}>
            Sign Up
          </button>
        </div>
        {signIn}
        {signUp}
      </div>
    )
  }
}

export default Welcome
