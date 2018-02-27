import React from 'react';
import BioForm from './BioForm'
import { Jumbotron, Button } from 'react-bootstrap'

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      edit: false
    };
    this.handleCloseButton = this.handleCloseButton.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ user: nextProps.user });
  };

  handleCloseButton(event) {
    event.preventDefault();
    this.setState({
      edit: false
    })
  };

  handleEditButton(event) {
    event.preventDefault();
    this.setState({
      edit: true
    })
  };

  render() {
    let bio, firstname, lastname, editBio;

    if (this.props.user) {
      bio = this.props.user.bio
      firstname = this.props.user.first_name
      lastname = this.props.user.last_name
    };

    if (this.state.edit) {
      editBio = <BioForm
        user={this.props.user}
        handleCloseButton={this.handleCloseButton}
        fetchUser={this.props.fetchUser}/>
    };

    return(
      <div>
        <Jumbotron>
          <h3>
            Get to know {firstname}
          </h3>
          <p>
            {bio}
          </p>
          <Button onClick={this.handleEditButton}>
            Edit Bio
          </Button>
        </Jumbotron>
        {editBio}
      </div>
    )
  }
}

export default Bio
