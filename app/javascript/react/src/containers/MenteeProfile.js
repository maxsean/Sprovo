import React from 'react';
import ProfileImage from '../components/profile/ProfileImage';
import GradeYear from '../components/grades/GradesYear';
import StatsSport from '../components/athletics/StatsSport';
import { Breadcrumb, Glyphicon, Tabs, Tab, Alert, Jumbotron, Button } from 'react-bootstrap';
import { railsAssetImagePath } from '../constants/railsAssetImagePath';

class MenteeProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null,
      user: null,
      error: null
    };
    this.fetchMentee = this.fetchMentee.bind(this);
    this.fetchUser = this.fetchUser.bind(this)
  };

  componentDidMount() {
    this.fetchMentee();
    this.fetchUser()
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

  fetchUser() {
    fetch('/auth/is_signed_in.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({
        current_user: data.user
      })
    })
  };


  render() {
    let first_name, last_name, email, bio, user, picture, error, id, current_user, phone, school;
    if (this.state.current_user) {
      current_user = this.state.current_user
    }

    if (this.state.user) {
      first_name = this.state.user.first_name
      last_name = this.state.user.last_name
      email = this.state.user.email
      bio = this.state.user.bio
      user = this.state.user
      id = this.state.user.id
      phone = this.state.user.phone
      school = this.state.user.school

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
              </div>
            </div>
          </div>
          <div className="tabs-container">
            <Tabs defaultActiveKey={1} id="uncontrolled-tabs">
              <Tab eventKey={1} title="Overview">
                <Jumbotron style={{margin:"2% 0"}}>
                  <h3>
                    Get to know {first_name}
                  </h3>
                  <p>
                    {bio}
                  </p>
                </Jumbotron>
              </Tab>
              <Tab eventKey={2} title="Athletics">
                <StatsSport
                  id={id}
                  user={user}
                  current_user={current_user}
                />
              </Tab>
              <Tab eventKey={3} title="Grades">
                <GradeYear
                  id={id}
                  user={user}
                  current_user={current_user}
                />
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default MenteeProfile
