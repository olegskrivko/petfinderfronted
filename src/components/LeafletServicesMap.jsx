// import React, { useState, useEffect } from 'react';
// import { MapContainer, Marker, Popup, useMap } from 'react-leaflet';
// import MarkerClusterGroup from 'react-leaflet-cluster';
// import L from 'leaflet';
// import 'leaflet/dist/leaflet.css';
// import '@maptiler/leaflet-maptilersdk'; // MapTiler plugin
// import { MaptilerLayer } from '@maptiler/leaflet-maptilersdk';
// import locationIcon from './location.svg';
// import dogIconUrl from './doglocation.svg';
// import catIconUrl from './catlocation.svg';

// // Icons
// const defaultIcon = new L.Icon({
//   iconUrl: locationIcon,
//   iconSize: new L.Point(40, 47),
// });

// const dogIcon = new L.Icon({
//   iconUrl: dogIconUrl,
//   iconSize: new L.Point(40, 47),
// });

// const catIcon = new L.Icon({
//   iconUrl: catIconUrl,
//   iconSize: new L.Point(40, 47),
// });

// const userPulseIcon = L.divIcon({
//   className: '',
//   html: `
//     <div class="user-location-wrapper">
//       <div class="user-location-core"></div>
//       <div class="user-location-pulse"></div>
//     </div>
//   `,
//   iconSize: [30, 30],
//   iconAnchor: [15, 15],
// });

// const createClusterCustomIcon = (cluster) => {
//   return new L.DivIcon({
//     html: `<span>${cluster.getChildCount()}</span>`,
//     className: 'custom-marker-cluster',
//     iconSize: L.point(33, 33, true),
//   });
// };

// const MapUpdater = ({ centerCoords }) => {
//   const map = useMap();

//   useEffect(() => {
//     if (centerCoords && centerCoords.length === 2) {
//       map.setView(centerCoords, 9);
//     }
//   }, [centerCoords, map]);

//   return null;
// };

// // ✅ MapTiler Layer (uses official SDK)
// const MapTilerLayer = () => {
//   const map = useMap();

//   useEffect(() => {
//     const mtLayer = new MaptilerLayer({
//       apiKey: 'zqJA9kfFpP2bX0hmViWr',
//       style: 'basic-v2',
//     });

//     mtLayer.addTo(map);

//     return () => {
//       map.removeLayer(mtLayer);
//     };
//   }, [map]);

//   return null;
// };


// function LeafletServicesMap({ services, centerCoords }) {
//   const [userLocation, setUserLocation] = useState(null);

//   useEffect(() => {
//     navigator.geolocation.getCurrentPosition(
//       (pos) => {
//         const { latitude, longitude } = pos.coords;
//         setUserLocation([latitude, longitude]);
//       },
//       (err) => console.error('Location error:', err)
//     );
//   }, []);

//   const getIconBySpecies = (category) => {
//     if (category === 1) return dogIcon;
//     if (category === 2) return catIcon;
//     return defaultIcon;
//   };

//   return (
//     <div>
//       <MapContainer
//         style={{ height: '400px' }}
//         center={[56.946285, 24.105078]}
//         zoom={7}
//         scrollWheelZoom
//         maxZoom={18}
//       >
//         <MapTilerLayer />
//         <MapUpdater centerCoords={centerCoords} />

//         <MarkerClusterGroup
//           iconCreateFunction={createClusterCustomIcon}
//           maxClusterRadius={150}
//           spiderfyOnMaxZoom={false}
//           showCoverageOnHover={false}
//         >
//           {services.map((pet) =>
//             pet.latitude && pet.longitude ? (
//               <Marker
//                 key={pet.id}
//                 icon={getIconBySpecies(pet.category)}
//                 position={[parseFloat(pet.latitude), parseFloat(pet.longitude)]}
//               >
//                 <Popup offset={[0, 5]}>
//                   <div style={{ textAlign: 'center' }}>
//                     <a href={`/pets/${pet.id}`}>
//                       <img
//                         src={pet.pet_image_1}
//                         alt={pet.id}
//                         style={{
//                           width: '120px',
//                           height: '120px',
//                           borderRadius: '50%',
//                           border: '3px solid white',
//                           objectFit: 'cover',
//                         }}
//                       />
//                     </a>
//                   </div>
//                 </Popup>
//               </Marker>
//             ) : null
//           )}

//           {userLocation && (
//             <Marker position={userLocation} icon={userPulseIcon}>
//               <Popup offset={[0, 5]}>
//                 <div
//                   style={{
//                     background: '#5B9BD5',
//                     color: 'white',
//                     padding: '6px 12px',
//                     borderRadius: '12px',
//                     fontSize: '14px',
//                     fontWeight: 500,
//                     boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
//                     whiteSpace: 'nowrap',
//                   }}
//                 >
//                   Tava atrašanās vieta
//                 </div>
//               </Popup>
//             </Marker>
//           )}
//         </MarkerClusterGroup>
//       </MapContainer>
//     </div>
//   );
// }

// export default LeafletServicesMap;
import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '@maptiler/leaflet-maptilersdk';
import { MaptilerLayer } from '@maptiler/leaflet-maptilersdk';

import locationIcon from './location.svg';
import dogIconUrl from './doglocation.svg';
import catIconUrl from './catlocation.svg';

const defaultIcon = new L.Icon({
  iconUrl: locationIcon,
  iconSize: new L.Point(40, 47),
});

const dogIcon = new L.Icon({
  iconUrl: dogIconUrl,
  iconSize: new L.Point(40, 47),
});

const catIcon = new L.Icon({
  iconUrl: catIconUrl,
  iconSize: new L.Point(40, 47),
});

const userPulseIcon = L.divIcon({
  className: '',
  html: `
    <div class="user-location-wrapper">
      <div class="user-location-core"></div>
      <div class="user-location-pulse"></div>
    </div>
  `,
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

const createClusterCustomIcon = (cluster) => {
  return new L.DivIcon({
    html: `<span>${cluster.getChildCount()}</span>`,
    className: 'custom-marker-cluster',
    iconSize: L.point(33, 33, true),
  });
};

const MapUpdater = ({ centerCoords }) => {
  const map = useMap();
  useEffect(() => {
    if (centerCoords?.length === 2) {
      map.setView(centerCoords, 9);
    }
  }, [centerCoords, map]);
  return null;
};

const MapTilerLayer = () => {
  const map = useMap();
  useEffect(() => {
    const mtLayer = new MaptilerLayer({
      apiKey: 'zqJA9kfFpP2bX0hmViWr',
      style: 'basic-v2',
    });
    mtLayer.addTo(map);
    return () => map.removeLayer(mtLayer);
  }, [map]);
  return null;
};

const getIconByCategory = (category) => {
  switch (category) {
    case 1: return defaultIcon; // Pet Sitting
    case 2: return dogIcon;     // Dog Walking
    case 3: return catIcon;     // Grooming
    case 4: return defaultIcon; // Training
    case 5: return defaultIcon; // Boarding
    default: return defaultIcon;
  }
};

function LeafletServicesMap({ services, centerCoords }) {
  const [userLocation, setUserLocation] = useState(null);
console.log("locationservices", services)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setUserLocation([latitude, longitude]);
      },
      (err) => console.error('Location error:', err)
    );
  }, []);

  return (
    <div>
      <MapContainer
        style={{ height: '500px', width: '100%' }}
        center={[56.946285, 24.105078]} // Rīga center
        zoom={9}
        scrollWheelZoom
        maxZoom={18}
      >
        <MapTilerLayer />
        <MapUpdater centerCoords={centerCoords} />

        <MarkerClusterGroup
          iconCreateFunction={createClusterCustomIcon}
          maxClusterRadius={150}
          spiderfyOnMaxZoom={false}
          showCoverageOnHover={false}
        >
        {services?.flatMap((service) =>
  service.locations
    .filter(loc => loc.latitude && loc.longitude)
    .map((loc) => (
      <Marker
        key={`service-${service.id}-loc-${loc.id}`}
        icon={getIconByCategory(service.category)}
        position={[parseFloat(loc.latitude), parseFloat(loc.longitude)]}
      >
        <Popup offset={[0, 5]}>
          <div style={{ textAlign: 'center' }}>
            <h3>{service.title}</h3>
            <p><strong>{loc.city}</strong> — {loc.address}</p>
            <p>{service.description}</p>
            <p>
              <strong>{loc.phone_number}</strong><br />
              <a href={`mailto:${loc.email}`}>{loc.email}</a>
            </p>
          </div>
        </Popup>
      </Marker>
    ))
)}


          {userLocation && (
            <Marker position={userLocation} icon={userPulseIcon}>
              <Popup offset={[0, 5]}>
                <div
                  style={{
                    background: '#5B9BD5',
                    color: 'white',
                    padding: '6px 12px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 500,
                    whiteSpace: 'nowrap',
                  }}
                >
                  Tava atrašanās vieta
                </div>
              </Popup>
            </Marker>
          )}
        </MarkerClusterGroup>
      </MapContainer>
    </div>
  );
}

export default LeafletServicesMap;
