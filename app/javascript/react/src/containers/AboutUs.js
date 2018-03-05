import React from 'react';
import { Breadcrumb, Jumbotron } from 'react-bootstrap';

//placeholder

class AboutUs extends React.Component {
  constructor(props) {
    super(props);

  };
  render() {
    return(
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
          <Breadcrumb.Item active>
            ABOUT US
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/contact">CONTACT US</Breadcrumb.Item>
        </Breadcrumb>
        <Jumbotron>
          <h3>Coming Soon!</h3>
        </Jumbotron>
      </div>
    )
  }
}

export default AboutUs
