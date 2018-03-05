import React from 'react';
import { Breadcrumb, Jumbotron, Carousel } from 'react-bootstrap';
import { railsAssetImagePath } from '../constants/railsAssetImagePath'

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      session: null
    }
  };

  componentDidMount() {
    this.setState({ session: this.props.session });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ session: nextProps.session });
  };

  render() {
    let signInButton, signUpButton;

    if(!this.state.session) {
      signInButton = <button
        onClick={this.props.handleSignInButton}>Sign In</button>

      signUpButton = <button
        onClick={this.props.handleSignUpButton}>Sign Up</button>
    }

    return(
      <div>
        <div>
          <Breadcrumb>
            <Breadcrumb.Item active>HOME</Breadcrumb.Item>
            <Breadcrumb.Item href="/about">
              ABOUT US
            </Breadcrumb.Item>
            <Breadcrumb.Item href="/contact">CONTACT US</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            <Carousel
              interval={10000}>
              <Carousel.Item>
                <img  src={railsAssetImagePath(`carousel1.jpg`)} />
                <Carousel.Caption>
                  <h3>
                    Student Athlete
                  </h3>
                  <h3 style={{color:"#F5852B"}}>
                    Mentor-ship
                  </h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img  src={railsAssetImagePath(`carousel2.jpg`)} />
                <Carousel.Caption>
                  <h3>
                    Our Mission
                  </h3>
                  <p>
                    We provide a progress monitoring mentorship for student athletes, by student athletes, while competing academically as well as athletically.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img  src={railsAssetImagePath(`carousel3.jpg`)} />
                <Carousel.Caption>
                  <h3>
                    Our Vision
                  </h3>
                  <p>
                    We strive to expand communication avenues among key players in a students life, instill a positive character foundation and a Together Everyone Achieves More mentality in all of our student athletes and families.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img  src={railsAssetImagePath(`carousel4.jpg`)} />
                <Carousel.Caption>
                  <h3>
                    Goals For Our Student Athletes
                  </h3>
                  <p>
                    We expect our Student Athletes to embrace the support of our experienced mentors, increase work ethic values, and compete academically as well as athletically amongst their peers.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <br/>
            <Jumbotron>
              <h4>STUDENT ATHLETE MENTOR-SHIP</h4>
              <p>
                We provide a progress monitoring mentorship for student athletes, by student athletes, while competing academically as well as athletically.
              </p>
              <p>We strive to expand communication avenues among key players in a students life, instill a positive character foundation and a Together Everyone Achieves More mentality in all of our student athletes and families.</p>
              <p>We expect our Student Athletes to embrace the support of our experienced mentors, increase work ethic values, and compete academically as well as athletically amongst their peers.</p>
              {signInButton}
              {signUpButton}
            </Jumbotron>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
