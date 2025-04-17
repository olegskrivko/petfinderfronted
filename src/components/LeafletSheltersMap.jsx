// // LeafletClusterMap.js
// import React, { useState, useEffect, useRef } from 'react';
// import { MapContainer, Marker, TileLayer, Popup, useMap } from 'react-leaflet';
// import Chip from '@mui/material/Chip';
// import L from 'leaflet';
// import MarkerClusterGroup from 'react-leaflet-cluster';
// import shelterIcon from '../pages/images/pet_house.png'
// import 'leaflet/dist/leaflet.css';


// // Custom icon for markers
// // const customIcon = new L.Icon({
// //   iconUrl: require('./userlocation.svg').default,
// //   iconSize: new L.Point(40, 47),
// // });

// // // Icon for the user's location
// // const userLocationIcon = new L.Icon({
// //   iconUrl: require('./userlocation.svg').default, // Replace with your icon path
// //   iconSize: new L.Point(44, 44),
// // });

// // Icons
// const defaultIcon = new L.Icon({
//   iconUrl: shelterIcon,
//   iconSize: new L.Point(40, 40),
// });

// // Function to create custom cluster icons
// const createClusterCustomIcon = function (cluster) {
//   return new L.DivIcon({
//     html: `<span>${cluster.getChildCount()}</span>`,
//     className: 'custom-marker-cluster',
//     iconSize: L.point(33, 33, true),
//   });
// };

// // Component to update the map center and zoom level
// const MapUpdater = ({ centerCoords }) => {
//   console.log("centerCoords", centerCoords)
//   const map = useMap();

//   useEffect(() => {

//     if (centerCoords && centerCoords.length === 2) {
//       map.setView(centerCoords, 9);
//     }
//   }, [centerCoords, map]);

//   return null;
// };

// function LeafletSheltersMap({ shelters, centerCoords }) {
//   return (
//     <div>
//       <MapContainer
//         style={{ height: '500px' }}
//         center={[56.946285, 24.105078]} // Default center (Lat, Long)
//         zoom={7}
//         scrollWheelZoom={true}
//       >
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         <MapUpdater centerCoords={centerCoords} />
//         <MarkerClusterGroup
//           iconCreateFunction={createClusterCustomIcon}
//           maxClusterRadius={150}
//           spiderfyOnMaxZoom={false}
//           showCoverageOnHover={false}
//         >
//           {shelters.map((shelter) => (
//             // Ensure the coordinates are numbers and the order is [latitude, longitude]
//             shelter.latitude && shelter.longitude ? (
//               <Marker
//                 key={shelter.id}
//               icon={defaultIcon}
//                 position={[
//                   parseFloat(shelter.latitude), // Ensure latitude is a float
//                   parseFloat(shelter.longitude) // Ensure longitude is a float
//                 ]}
//                 // icon={customIcon}
//               >

//  <Popup offset={[0, 5]}>
//  <a href={`/shelters/${shelter.id}`} style={{ textDecoration: "none" }}>
//       <div
//         style={{
//           background: '#5B9BD5',
//           color: 'white',
//           padding: '6px 12px',
//           borderRadius: '12px',
//           fontSize: '14px',
//           fontWeight: 500,
//           boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
//           whiteSpace: 'nowrap',
//           textDecoration: "none"
//         }}
//       > 
//         {shelter.name}
      
//       </div>
//       </a>
//     </Popup>
//               </Marker>
//             ) : null
//           ))}
//         </MarkerClusterGroup>
//       </MapContainer>
//     </div>
//   );
// }

// export default LeafletSheltersMap;
import React, { useState, useEffect } from 'react';
import { MapContainer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '@maptiler/leaflet-maptilersdk'; // MapTiler plugin
import { MaptilerLayer } from '@maptiler/leaflet-maptilersdk';
import shelterIcon from '../pages/images/pet_house.png'; // Replace this with your icon if needed

// Icons for shelters
const defaultIcon = new L.Icon({
  iconUrl: shelterIcon,
  iconSize: new L.Point(40, 40),
});

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
  const map = useMap();

  useEffect(() => {
    if (centerCoords && centerCoords.length === 2) {
      map.setView(centerCoords, 9);
    }
  }, [centerCoords, map]);

  return null;
};

// ✅ MapTiler Layer (uses official SDK)
const MapTilerLayerComponent = () => {
  const map = useMap();

  useEffect(() => {
    const mtLayer = new MaptilerLayer({
      apiKey: 'zqJA9kfFpP2bX0hmViWr',
      style: 'basic-v2', // You can change the style here if you like
    });

    mtLayer.addTo(map);

    return () => {
      map.removeLayer(mtLayer);
    };
  }, [map]);

  return null;
};

function LeafletSheltersMap({ shelters, centerCoords }) {
  return (
    <div>
      <MapContainer
        style={{ height: '500px' }}
        center={[56.946285, 24.105078]} // Default center (Lat, Long)
        zoom={7}
        scrollWheelZoom
        maxZoom={18}  // Add maxZoom
        minZoom={3}   // Optional, set a minZoom if needed
      >
        {/* MapTiler Layer */}
        <MapTilerLayerComponent />

        {/* Update map view if centerCoords are passed */}
        <MapUpdater centerCoords={centerCoords} />

        <MarkerClusterGroup
          iconCreateFunction={createClusterCustomIcon}
          maxClusterRadius={150}
          spiderfyOnMaxZoom={false}
          showCoverageOnHover={false}
        >
          {shelters.map((shelter) =>
            shelter.latitude && shelter.longitude ? (
              <Marker
                key={shelter.id}
                icon={defaultIcon}
                position={[parseFloat(shelter.latitude), parseFloat(shelter.longitude)]}
              >
                <Popup offset={[0, 5]}>
                  <a href={`/shelters/${shelter.id}`} style={{ textDecoration: 'none' }}>
                    <div
                      style={{
                        background: '#5B9BD5',
                        color: 'white',
                        padding: '6px 12px',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: 500,
                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
                        whiteSpace: 'nowrap',
                        textDecoration: 'none',
                      }}
                    >
                      {shelter.name}
                    </div>
                  </a>
                </Popup>
              </Marker>
            ) : null
          )}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default LeafletSheltersMap;
