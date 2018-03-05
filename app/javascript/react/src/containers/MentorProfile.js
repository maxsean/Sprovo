import React from 'react';
import UserBasicsForm from '../components/profile/UserBasicsForm';
import Bio from '../components/profile/Bio';
import ProfileImage from '../components/profile/ProfileImage';
import MenteeList from '../components/mentees/MenteeList';
import { Breadcrumb, Glyphicon, Tabs, Tab, Alert, Modal, Button } from 'react-bootstrap';

//only mentor has access to this profile. should mentees be able to see mentor profile?

class MentorProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
    this.handleCloseButton = this.handleCloseButton.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleUpdateButton = this.handleUpdateButton.bind(this);
    this.updateUser = this.updateUser.bind(this)
  };

  componentDidMount() {
    this.setState({
      user: this.props.user
    })
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ user: nextProps.user });
  };

  handleCloseButton(event) {
    if (event) {
      event.preventDefault()
    };
    this.setState({
      update: false
    })
  };

  handleDismiss(event) {
    event.preventDefault();
    this.setState({
      error: null,
      success: null
    })
  };

  handleUpdateButton(event) {
    event.preventDefault();
    this.setState({
      update: true
    })
  };

  updateUser(payload) {
    fetch(`/api/v1/users/${this.props.user.id}.json`, {
      credentials: 'same-origin',
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.setState({
          success: data.success
        })
        this.props.fetchUser()
      }
    })
  }

  render() {
    let first_name, last_name, email, bio, user, signin, phone, school, error, success;
    if (this.props.user) {
      first_name = this.state.user.first_name
      last_name = this.state.user.last_name
      email = this.state.user.email
      bio = this.state.user.bio
      user = this.state.user
      phone = this.state.user.phone
      school = this.state.user.school
    } else {
      signin = <Alert bsStyle="warning" style={{textAlign:"center", fontSize:"2em"}}>
        <strong><a href="/users/sign_in">Please Sign In</a></strong>
      </Alert>
    };

    if (this.state.error) {
      error = <Alert bsStyle='warning' onDismiss={this.handleDismiss}>
        <p>{this.state.error}</p>
      </Alert>
    };

    if (this.state.success) {
      success = <Alert bsStyle='success' onDismiss={this.handleDismiss}>
        <p>{this.state.success}</p>
      </Alert>
    };

    return(
      <div>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
            <Breadcrumb.Item href="/about">
            ABOUT US
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/contact">CONTACT US</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <Modal show={this.state.update} onHide={this.handleCloseButton}>
          <Modal.Header closeButton>
            <Modal.Title>Update Basic Info</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UserBasicsForm
              user={this.state.user}
              updateUser={this.updateUser}
              handleCloseButton={this.handleCloseButton}
            />
          </Modal.Body>
        </Modal>
        {signin}
        <div className="profile-header">
          <h2>{first_name} {last_name}</h2>
        </div>
        {error}
        {success}
        <div className="profile-container">
          <div className="user-basics">
            <ProfileImage
              user={this.props.user}/>
            <div className="contact">
              <div>
                <Glyphicon glyph="earphone">
                  &nbsp;{phone}
                </Glyphicon>
              </div>
              <div>
                <Glyphicon glyph="envelope">
                  &nbsp;{email}
                </Glyphicon>
              </div>
              <div>
                <Glyphicon glyph="book">
                  &nbsp;{school}
                </Glyphicon>
              </div>
              <Button onClick={this.handleUpdateButton}>
                Update Basic Info
              </Button>
            </div>
          </div>
          <div className="tabs-container">
            <Tabs defaultActiveKey={1} id="uncontrolled-tabs">
              <Tab eventKey={1} title="Overview">
                <Bio
                  user={user}
                  fetchUser={this.props.fetchUser}/>
              </Tab>
              <Tab eventKey={2} title="Students">
                <MenteeList
                  user={user}
                />
              </Tab>
              <Tab eventKey={3} title="Teachers">
                Teachers
              </Tab>
              <Tab eventKey={4} title="Coaches">
                Coaches
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default MentorProfile
