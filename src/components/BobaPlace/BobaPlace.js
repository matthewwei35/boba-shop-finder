import React from 'react';
import { Link } from 'react-router-dom';
import './BobaPlace.css'
import Like from '../Like/Like';

function BobaPlace(props) {
  const { name, image, address, hours, id } = props;

  return (
    <div className="BobaPlace">
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}images/${image}`}
          width="300"
          height="300"
          alt="Boba place"
        />
      </Link>
      <div>{address}</div>
      <div><i>{hours}</i></div>
      <Like />
    </div>
  )
}

export default BobaPlace;
