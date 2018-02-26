import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Welcome from './containers/Welcome';
import Navigation from './components/navigation/Navigation';
import Profile from './containers/Profile'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: null,
      user: null
    };
    this.fetchUser = this.fetchUser.bind(this)
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

  render () {
    return(
      <div>
        <Navigation
          session={this.state.signedIn}
          fetchUser={this.fetchUser}
        />
        <Route exact={true} path="/" render={() => <Welcome
          session={this.state.signedIn}
          fetchUser={this.fetchUser}/>}
        />
        <Route path="/profile" render={() => <Profile user={this.state.user}/>}/>
      </div>
    )
  }
}

export default App
