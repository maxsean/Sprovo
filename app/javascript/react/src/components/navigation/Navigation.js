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
    let signOut;
    if(this.state.session) {
      signOut = <SignOutLink
      fetchUser={this.props.fetchUser}/>
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
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

export default Navigation
