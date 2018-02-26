import React from 'react'

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  };
  render() {
    console.log(this.props.user)
    return(
      <div>
        Profile
      </div>
    )
  }
}

export default Profile
