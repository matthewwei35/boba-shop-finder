/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import data from '../../boba-data.json';
import './BobaDetails.css'

function BobaDetails(props) {
  const { id } = props.match.params
  const { images, title, desc, hours, features } = data[id]

  return (
    <div className="BobaDetails">
      <div className="Image">
        <img src={`${process.env.PUBLIC_URL}/images/${images[0]}`} />
      </div>

      <div className="BobaDetails-Paragraph">
        <h1>{ title }</h1>
        <p className="Level1">{ desc }</p>
        <p className="Level1">{ hours }</p>
        <p className="Level2">{ features }</p>
      </div>
    </div>
  )
}

export default BobaDetails;
