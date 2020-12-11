import React from 'react';
import BobaPlace from '../BobaPlace/BobaPlace';
import './BobaList.css';

function BobaList() {
  return (
    <div className="BobaList">
      <BobaPlace
        name="Simple Tea House"
        address="2620 Ocean Ave, San Francisco, CA 94132"
        image="simple-tea-house.jpg"
      />
      <BobaPlace
        name="My Cup of Tea (Cool Tea Bar)"
        address="2666 Ocean Ave, San Francisco, CA 94132"
        image="my-cup-of-tea.jpg"
      />
      <BobaPlace
        name="Teazo"
        address="1050 Taraval St, San Francisco, CA 94116"
        image="teazo.jpg"
      />
      <BobaPlace
        name="Super Cue Cafe"
        address="1139 Taraval St, San Francisco, CA 94116"
        image="super-cue-cafe.jpg"
      />
    </div>
  )
}

export default BobaList;
