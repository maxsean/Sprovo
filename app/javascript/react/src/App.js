import React from 'react';

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

      </div>
    )
  }
}

export default App
