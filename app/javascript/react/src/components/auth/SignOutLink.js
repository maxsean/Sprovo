import React from 'react';
import Functions from '../../utils/Functions'

class SignOutLink extends React.Component {
  constructor(props) {
    super(props);
    this.signOut = this.signOut.bind(this)
  };

  signOut(event) {
    event.preventDefault();
    fetch('/users/sign_out.json', {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      data: {
        authenticity_token: Functions.getMetaContent("csrf-token")
      }
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
