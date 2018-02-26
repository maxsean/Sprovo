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
                  <h2>
                    STUDENT ATHLETE
                  </h2>
                  <h2 style={{color:"#F5852B"}}>
                    MENTOR-SHIP
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  {signInButton}
                  {signUpButton}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img  src={railsAssetImagePath(`carousel2.jpg`)} />
                <Carousel.Caption>
                  <h2>
                    SED UT PERSPICIATIS
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img  src={railsAssetImagePath(`carousel3.jpg`)} />
                <Carousel.Caption>
                  <h2>
                    SED UT PERSPICIATIS
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img  src={railsAssetImagePath(`carousel4.jpg`)} />
                <Carousel.Caption>
                  <h2>
                    SED UT PERSPICIATIS
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <Jumbotron>
              <h1>STUDENT ATHLETE</h1>
              <h1>MENTOR-SHIP</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </p>
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
