import React from 'react';
import './BobaPlace.css'
import Like from '../Like/Like';

function BobaPlace(props) {
  const { name, image, address } = props;
  return (
    <div className="BobaPlace">
      <h1>{name}</h1>
      <img src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Boba place"
        />
      <div>{address}</div>
      <Like />
    </div>
  )
}

export default BobaPlace;
