import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Welcome from './containers/Welcome';
import Navigation from './components/navigation/Navigation';
import SignInForm from './components/auth/SignInForm';
import SignUpForm from './components/auth/SignUpForm';
import SignOutLink from './components/auth/SignOutLink';
import Footer from './components/navigation/Footer';
import Profile from './containers/Profile'

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
    this.handleCloseButton = this.handleCloseButton.bind(this)
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
    let signIn, signUp, display;

    if(this.state.signIn && !this.state.session) {
      signIn = <SignInForm
        handleClose={this.handleCloseButton}
        fetchUser={this.props.fetchUser}/>
      display = "blur"
    };

    if(this.state.signUp && !this.state.session) {
      signUp = <SignUpForm
        handleClose={this.handleCloseButton}
        fetchUser={this.props.fetchUser}/>
      display = "blur"
    }

    return(
      <div>
        <div className={display}>
          <Navigation
            session={this.state.signedIn}
            fetchUser={this.fetchUser}
            handleSignInButton={this.handleSignInButton}
            handleSignUpButton={this.handleSignUButton}
          />
          <Route exact={true} path="/" render={() => <Welcome
            session={this.state.signedIn}
            fetchUser={this.fetchUser}
            handleSignInButton={this.handleSignInButton}
            handleSignUpButton={this.handleSignUpButton}
          />}
          />
          <Route path="/profile" render={() => <Profile user={this.state.user}/>}/>
          <Footer/>
        </div>
        {signIn}
        {signUp}
      </div>
    )
  }
}

export default App
