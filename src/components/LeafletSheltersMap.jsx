// LeafletClusterMap.js
import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
import Chip from '@mui/material/Chip';
import L from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import 'leaflet/dist/leaflet.css';


// Custom icon for markers
// const customIcon = new L.Icon({
//   iconUrl: require('./userlocation.svg').default,
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

function LeafletSheltersMap({ shelters, centerCoords }) {
  return (
    <div>
      <MapContainer
        style={{ height: '500px' }}
        center={[56.946285, 24.105078]} // Default center (Lat, Long)
        zoom={7}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapUpdater centerCoords={centerCoords} />
        <MarkerClusterGroup
          iconCreateFunction={createClusterCustomIcon}
          maxClusterRadius={150}
          spiderfyOnMaxZoom={false}
          showCoverageOnHover={false}
        >
          {shelters.map((shelter) => (
            // Ensure the coordinates are numbers and the order is [latitude, longitude]
            shelter.latitude && shelter.longitude ? (
              <Marker
                key={shelter.id}
                position={[
                  parseFloat(shelter.latitude), // Ensure latitude is a float
                  parseFloat(shelter.longitude) // Ensure longitude is a float
                ]}
                // icon={customIcon}
              >
         <Popup offset={[0, 5]}>
  <div
    // style={{
    //   textAlign: "center",
    //   background: "white",
    //   padding: "10px",
    //   borderRadius: "8px",
    //   boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
    // }}
  >
    <a href={`/shelters/${shelter.id}`} style={{ textDecoration: "none" }}>
      <p
        style={{
          background: "deepskyblue",
          color: "#333",
          fontWeight: "bold",
          padding: "8px 12px",
          borderRadius: "6px",
          transition: "background 0.3s ease",
          cursor: "pointer",
        }}
        // onMouseOver={(e) => (e.target.style.background = "deepskyblue")}
        // onMouseOut={(e) => (e.target.style.background = "lightblue")}
      >
        {shelter.name}
      </p>
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

export default LeafletSheltersMap;
