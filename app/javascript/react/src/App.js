import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import Welcome from './containers/Welcome';
import Navigation from './components/navigation/Navigation';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import SignOutLink from './components/auth/SignOutLink';
import Footer from './components/navigation/Footer';
import Profile from './containers/Profile';
import MentorProfile from './containers/MentorProfile';
import MenteeProfile from './containers/MenteeProfile';
import AboutUs from './containers/AboutUs';
import ContactUs from './containers/ContactUs';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      signUp: false,
      signedIn: null,
      user: null
    };
    this.fetchUser = this.fetchUser.bind(this)
    this.handleCloseButton = this.handleCloseButton.bind(this);
    this.handleSignInButton = this.handleSignInButton.bind(this);
    this.handleSignUpButton = this.handleSignUpButton.bind(this);
  };

  componentDidMount() {
    this.fetchUser()
  };

  fetchUser() {
    fetch('/auth/is_signed_in.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        signedIn: data.signed_in,
        user: data.user
      })
    })
  };

  handleCloseButton(event) {
    event.preventDefault();
    this.setState({
      signIn: false,
      signUp: false
    })
  };

  handleSignInButton(event) {
    event.preventDefault();
    this.setState({
      signIn: true,
      signUp: false
    })
  };

  handleSignUpButton(event) {
    event.preventDefault();
    this.setState({
      signIn: false,
      signUp: true
    })
  };

  render () {
    let display, profile;

    if(this.state.signIn || this.state.signUp && !this.state.user) {
      display = "blur"
    };

    return(
      <div>
        <div className={display}>
          <Navigation
            session={this.state.signedIn}
            user={this.state.user}
            fetchUser={this.fetchUser}
            handleSignInButton={this.handleSignInButton}
            handleSignUpButton={this.handleSignUpButton}
          />
          <br/>
          <br/>
          <br/>
          <br/>
          <Route exact={true} path="/" render={() => <Welcome
            session={this.state.signedIn}
            fetchUser={this.fetchUser}
            handleSignInButton={this.handleSignInButton}
            handleSignUpButton={this.handleSignUpButton}
          />}
          />
          <Route path="/profile" render={() => <Profile user={this.state.user} fetchUser={this.fetchUser}/>}/>
          <Route path="/mentor" render={() => <MentorProfile user={this.state.user} fetchUser={this.fetchUser} />}/>
          <Route path="/student/:id" component={MenteeProfile}/>
          <Route path="/about" component={AboutUs}/>
          <Route path="/contact" component={ContactUs}/>
          <Footer/>
        </div>
        <Modal show={this.state.signIn} onHide={this.handleCloseButton}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignInForm
              fetchUser={this.props.fetchUser}/>
          </Modal.Body>
        </Modal>
        <Modal show={this.state.signUp} onHide={this.handleCloseButton}>
          <Modal.Header closeButton>
            <Modal.Title>Sign Up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignUpForm
              fetchUser={this.props.fetchUser}/>
          </Modal.Body>
        </Modal>
      </div>
    )
  }
}

export default App
