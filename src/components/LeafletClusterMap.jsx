// LeafletClusterMap.js
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
import Chip from '@mui/material/Chip';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';
// import logo from '.vite.svg';
import PetsIcon from '@mui/icons-material/Pets';

// Custom icon for markers
// const customIcon = new L.Icon({
//   // iconUrl: require('./location.svg').default,
//   inconUrl: PetsIcon,
//   iconSize: new L.Point(40, 47),
// });

// // Icon for the user's location
// const userLocationIcon = new L.Icon({
//   iconUrl: require('./userlocation.svg').default, // Replace with your icon path
//   iconSize: new L.Point(44, 44),
// });

// Function to create custom cluster icons
const createClusterCustomIcon = function (cluster) {
  return new L.DivIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: L.point(33, 33, true),
  });
};

// Component to update the map center and zoom level
const MapUpdater = ({ centerCoords }) => {
  console.log("centerCoords", centerCoords)
  const map = useMap();

  useEffect(() => {

    if (centerCoords && centerCoords.length === 2) {
      map.setView(centerCoords, 9);
    }
  }, [centerCoords, map]);

  return null;
};

function LeafletClusterMap({ pets, centerCoords }) {
  return (
    <div>
      <MapContainer
        style={{ height: '400px' }}
        center={[56.946285, 24.105078]} // Default center (Lat, Long)
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
         {/* <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://carto.com">CartoDB</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        /> */}
        <MapUpdater centerCoords={centerCoords} />
        <MarkerClusterGroup
          iconCreateFunction={createClusterCustomIcon}
          maxClusterRadius={150}
          spiderfyOnMaxZoom={false}
          showCoverageOnHover={false}
        >
          {pets.map((pet) => (
            // Ensure the coordinates are numbers and the order is [latitude, longitude]
            pet.latitude && pet.longitude ? (
              <Marker
                key={pet.id}
                position={[
                  parseFloat(pet.latitude), // Ensure latitude is a float
                  parseFloat(pet.longitude) // Ensure longitude is a float
                ]}
                // icon={customIcon}
              >
                <Popup offset={[0, 5]}>
                  <div style={{ textAlign: 'center' }}>
                    <a href={`/pets/${pet.id}`}>
                      <img
                        src={pet.pet_image_1}
                        alt={pet.id}
                        style={{
                          width: '120px',
                          height: '120px',
                          borderRadius: '50%',
                          border: '3px solid white',
                          objectFit: 'cover',
                        }}
                      />
                    </a>
                  </div>
                </Popup>
              </Marker>
            ) : null
          ))}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default LeafletClusterMap;
