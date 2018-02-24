import React from 'react';
import Functions from '../../utils/Functions'

class SignOutLink extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this)
  };

  signOut(event) {
    event.preventDefault();
    let token = {
      authenticity_token: Functions.getMetaContent("csrf-token")
    }
    fetch('/users/sign_out.json', {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(token)
    })
    window.location.assign("/")
  };

  render() {
    return(
      <a href="#" onClick={this.signOut}>Sign Out</a>
    )
  }
}

export default SignOutLink
