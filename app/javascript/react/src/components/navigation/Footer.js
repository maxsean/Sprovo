import React from 'react'
import { Button, Glyphicon } from 'react-bootstrap'

const Footer = (props) => {
  return(
    <div className="footer-container">
      <div className="footer-logo">
        <h1>SPORVO</h1>
        <div className="contact">
          <div>
            <Glyphicon glyph="earphone">
              &nbsp;1-305-888-5522
            </Glyphicon>
          </div>
          <div>
            <Glyphicon glyph="envelope">
              &nbsp;sample@sporvo.com
            </Glyphicon>
          </div>
        </div>

        <div className="social-media">
          <Button className="social-media-button">
            <i className="fab fa-facebook-square"></i>
          </Button>
          <Button className="social-media-button">
            <i className="fab fa-twitter-square"></i>
          </Button>
          <Button className="social-media-button">
            <i className="fab fa-youtube"></i>
          </Button>
        </div>

        <a href="#">Contact Us</a>
        <p>SPORVO &copy; 2018. All Rights Reserved</p>
      </div>
      <div className="footer-statements">
        <div>
          <h3>Our Mission</h3>
          <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
        </div>
        <div>
          <h3>Our Vision</h3>
          <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</p>
        </div>
        <div>
          <h3>Goals For Our Students</h3>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
