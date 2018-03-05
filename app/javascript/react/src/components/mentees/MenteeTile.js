import React from 'react';
import { railsAssetImagePath } from '../../constants/railsAssetImagePath';
import { Glyphicon } from 'react-bootstrap'


const MenteeTile = (props) => {

  function handleClick(event) {
    event.preventDefault();
    window.location.assign(`/student/${props.mentee.handle}`)
  };

  let image = railsAssetImagePath(`default_photo.png`)

  if (props.mentee.profile_photo.thumb.url) {
    image = props.mentee.profile_photo.thumb.url
  }

  return(
    <div
      className="mentee-tile"
      onClick={handleClick}
      >
      <img src={image}/>
      <div>
        <strong><p>{props.mentee.last_name}, {props.mentee.first_name} </p></strong>
      </div>
      <div className="contact" style={{fontSize:"0.5em"}}>
        <span>
          <Glyphicon glyph="earphone">
            &nbsp;{props.mentee.phone}
          </Glyphicon>
        </span>
        <span>
          <Glyphicon glyph="envelope">
            &nbsp;{props.mentee.email}
          </Glyphicon>
        </span>
        <span>
          <Glyphicon glyph="book">
            &nbsp;{props.mentee.school}
          </Glyphicon>
        </span>
      </div>
    </div>
  )
}

export default MenteeTile
