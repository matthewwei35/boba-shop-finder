import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import * as bobaData from '../../boba-data.json';
import bobaMarker from '../../boba-marker.png';
import './Map.css';

function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.74887532216586, 
    longitude: -122.47177623450149,
    width: '100%',
    height: '75vh',
    zoom: 13
  });
  const [selectedBoba, setSelectedBoba] = useState(null);

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedBoba(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    }
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/matthewwei35/ckjtqf9b50l5d19migeen5554"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    >
      {bobaData.features.map(boba => (
        <Marker
          key={boba.title}
          latitude={boba.geo.coordinates[0]}
          longitude={boba.geo.coordinates[1]}
        >
          <button
            className="marker-btn"
            onClick={(e) => {
              e.preventDefault();
              setSelectedBoba(boba)
            }}
          >
            <img src={bobaMarker} alt="Boba Shop Icon" />
          </button>
        </Marker>
      ))}

      {selectedBoba ? (
        <Popup className="marker-popup"
          latitude={selectedBoba.geo.coordinates[0]}
          longitude={selectedBoba.geo.coordinates[1]}
          onClose={() => {
            setSelectedBoba(null)
          }}
        >
          <div>
            <h2>{selectedBoba.title}</h2>
            <p>{selectedBoba.desc}</p>
          </div>
        </Popup>
      ) : null}
    </ReactMapGL>
  );
}

export default Map;
