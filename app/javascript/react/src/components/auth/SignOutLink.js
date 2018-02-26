import React from 'react';
import Functions from '../../utils/Functions';
import { NavItem } from 'react-bootstrap'

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
    fetch('/users/sign_out', {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(token)
    })
    .then(response => {
      this.props.fetchUser})
    .then(response => {
      window.location.assign("/")})
  };

  render() {
    return(
      <NavItem href="#" onClick={this.signOut}>Sign Out</NavItem>
    )
  }
}

export default SignOutLink
