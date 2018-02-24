import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Welcome from './containers/Welcome'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: null
    };
  };

  componentWillMount() {
    fetch('/auth/is_signed_in.json')
    .then(response => response.json())
    .then(data => {
      this.setState({
        signedIn: data.signed_in
      })
    })
  };

  render () {
    return(
      <div>
        <Route exact={true} path="/" render={() => <Welcome current_user={this.state.signedIn}/>}
        />

      </div>
    )
  }
}

export default App
