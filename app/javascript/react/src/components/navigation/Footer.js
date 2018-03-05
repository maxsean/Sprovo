import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { railsAssetImagePath } from '../../constants/railsAssetImagePath'

const Footer = (props) => {
  return(
    <div className="footer-container">
      <div className="footer-statements">
        <div>
          <h3>Our Mission</h3>
          <p>We provide a progress monitoring mentorship for student athletes, by student athletes, while competing academically as well as athletically.</p>
        </div>
        <div>
          <h3>Our Vision</h3>
          <p>We strive to expand communication avenues among key players in a students life, instill a positive character foundation and a Together Everyone Achieves More mentality in all of our student athletes and families.</p>
        </div>
        <div>
          <h3>Goals For Our Student Athletes</h3>
          <p>We expect our Student Athletes to embrace the support of our experienced mentors, increase work ethic values, and compete academically as well as athletically amongst their peers.</p>
        </div>
      </div>
      <div className="footer-logo">
        <img width={200} src={railsAssetImagePath(`sporvo.png`)} style={{marginTop:"15px"}}/>
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
    </div>
  )
}

export default Footer
