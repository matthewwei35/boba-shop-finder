import React from 'react';
import BobaPlace from '../BobaPlace/BobaPlace';
import './BobaList.css';
import data from '../../boba-data.json';

function BobaList() {
  const places = data.map(( { title, images, address, hours }, i) => {
    return (
      <BobaPlace
        id={i}
        key={title}
        name={title}
        image={images[0]}
        address={address}
        hours={hours}
      />
    )
  })

  return (
    <div className="BobaList">
      { places }
    </div>
  )
}

export default BobaList;
