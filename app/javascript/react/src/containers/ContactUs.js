import React from 'react';
import { Breadcrumb, Jumbotron } from 'react-bootstrap';

class ContactUs extends React.Component {
  constructor(props) {
    super(props);

  };
  render() {
    return(
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">HOME</Breadcrumb.Item>
          <Breadcrumb.Item href="/about">
            ABOUT US
          </Breadcrumb.Item>
          <Breadcrumb.Item active>CONTACT US</Breadcrumb.Item>
        </Breadcrumb>

        <Jumbotron>
          <h3>Coming Soon!</h3>
        </Jumbotron>
      </div>
    )
  }
}

export default ContactUs
