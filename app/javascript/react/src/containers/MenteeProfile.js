import React from 'react';
import ProfileImage from '../components/profile/ProfileImage';
import { Breadcrumb, Glyphicon, Tabs, Tab, Alert, Jumbotron, Button } from 'react-bootstrap';
import { railsAssetImagePath } from '../constants/railsAssetImagePath';

class MenteeProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null
    };
    this.fetchMentee = this.fetchMentee.bind(this)
  };

  componentDidMount() {
    this.fetchMentee()
  };

  fetchMentee() {
    let id = this.props.match.params.id
    fetch(`/api/v1/mentees/${id}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      if (data.error) {
        this.setState({
          error: data.error
        })
      } else {
        this.setState({
          user: data
        })
      }
    })
  }

  render() {
    let first_name, last_name, email, bio, user, picture, error;
    if (this.state.user) {
      first_name = this.state.user.first_name
      last_name = this.state.user.last_name
      email = this.state.user.email
      bio = this.state.user.bio
      user = this.state.user
      picture = railsAssetImagePath(`default_photo.png`)

      if (this.state.user.profile_photo.large.url) {
        picture = this.state.user.profile_photo.large.url
      }
    } else if (this.state.error) {
      error = <Alert bsStyle="warning" style={{textAlign:"center", fontSize:"2em"}}>
        <strong><a href="/users/sign_in">{this.state.error}</a></strong>
      </Alert>
    }

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
        {error}
        <div className="profile-header">
          <h2>{first_name} {last_name}</h2>
        </div>
        <div className="profile-container">
          <div className="user-basics">
            <div className="profile-photo">
              <img width={200} height={200} src={picture}/>
            </div>
            <div className="contact">
              <div>
                <Glyphicon glyph="earphone">
                  &nbsp;1-305-888-5522
                </Glyphicon>
              </div>
              <div>
                <Glyphicon glyph="envelope">
                  &nbsp;{email}
                </Glyphicon>
              </div>
            </div>
          </div>
          <div className="tabs-container">
            <Tabs defaultActiveKey={1} id="uncontrolled-tabs">
              <Tab eventKey={1} title="Overview">
                <Jumbotron>
                  <h3>
                    Get to know {first_name}
                  </h3>
                  <p>
                    {bio}
                  </p>
                </Jumbotron>
              </Tab>
              <Tab eventKey={2} title="Athletics">
                Athletics
              </Tab>
              <Tab eventKey={3} title="Grades">
                Grades
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default MenteeProfile
