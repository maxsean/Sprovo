import React from 'react';
import Bio from '../components/profile/Bio';
import ProfileImage from '../components/profile/ProfileImage';
import GradesYear from '../components/grades/GradesYear'
import { Breadcrumb, Glyphicon, Tabs, Tab, Alert } from 'react-bootstrap';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    }
  };

  componentDidMount() {
    this.setState({
      user: this.props.user
    })
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ user: nextProps.user });
  };

  render() {
    let first_name, last_name, email, bio, user, signin, id;
    if (this.props.user) {
      first_name = this.state.user.first_name
      last_name = this.state.user.last_name
      email = this.state.user.email
      bio = this.state.user.bio
      user = this.state.user
      id = this.state.user.id
    } else {
      signin = <Alert bsStyle="warning" style={{textAlign:"center", fontSize:"2em"}}>
        <strong><a href="/users/sign_in">Please Sign In</a></strong>
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
        {signin}
        <div className="profile-header">
          <h2>{first_name} {last_name}</h2>
        </div>
        <div className="profile-container">
          <div className="user-basics">
            <ProfileImage
              user={this.props.user}/>
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
                <Bio
                  user={user}
                  fetchUser={this.props.fetchUser}/>
              </Tab>
              <Tab eventKey={2} title="Athletics">
                Athletics
              </Tab>
              <Tab eventKey={3} title="Grades">
                <GradesYear
                  user={user}
                  id={id}/>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
