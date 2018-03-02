import React from 'react';
import { railsAssetImagePath } from '../../constants/railsAssetImagePath';
import { Glyphicon } from 'react-bootstrap'


const MenteeTile = (props) => {

  function handleClick(event) {
    event.preventDefault();
    window.location.assign(`/student/${props.mentee.id}`)
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
      <img width={50} height={50} src={image}/>
      <div>
        <strong><p>{props.mentee.last_name}, {props.mentee.first_name} </p></strong>
      </div>
      <div className="contact" style={{fontSize:"0.5em"}}>
        <span>
          <Glyphicon glyph="earphone">
            &nbsp;1-305-888-5522
          </Glyphicon>
        </span>
        <span>
          <Glyphicon glyph="envelope">
            &nbsp;{props.mentee.email}
          </Glyphicon>
        </span>
      </div>
    </div>
  )
}

export default MenteeTile
