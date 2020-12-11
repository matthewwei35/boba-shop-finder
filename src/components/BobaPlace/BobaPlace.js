import React from 'react';

function BobaPlace(props) {
  const { name, image, address } = props;
  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="Boba place"
        />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default BobaPlace;
