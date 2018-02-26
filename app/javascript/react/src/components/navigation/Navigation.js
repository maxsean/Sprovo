import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import SignOutLink from '../auth/SignOutLink'

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: null
    }
  };

  componentDidMount() {
    this.setState({ session: this.props.session });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ session: nextProps.session });
  };

  render() {
    let signOut, signIn, signUp;
    if (this.state.session) {
      signOut = <SignOutLink
      fetchUser={this.props.fetchUser}/>
    } else {
      signIn = <NavItem href="#" onClick={this.props.handleSignInButton}>Sign In</NavItem>
      signUp = <NavItem href="#" onClick={this.props.handleSignUpButton}>Sign Up</NavItem>
    }

    return(
      <div>
        <Navbar collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Sporvo</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                Link
              </NavItem>
              {signOut}
              {signIn}
              {signUp}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation
