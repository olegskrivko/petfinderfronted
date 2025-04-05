// LeafletPetDetailsMapNew.jsx

import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, Marker, TileLayer, Popup, useMap, Circle  } from 'react-leaflet';
import Chip from '@mui/material/Chip';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import PetsIcon from '@mui/icons-material/Pets';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { renderToStaticMarkup } from 'react-dom/server';
import PropTypes from 'prop-types';
import moment from 'moment';
import SendMessage from './SendMessage';


// Define different search radius distances
const getSearchRadii = (petType) => 
  petType === 'Suns' 
    ? [10000, 5000, 2000, 500]  // Dogs: Large to Small
    : [3000, 1000, 500, 100];   // Cats: Large to Small

const SearchCircles = ({ center, petType }) => {
  const map = useMap(); // Get map instance
  const searchRadii = getSearchRadii(petType);

  return (
    <>
      {searchRadii.map((radius, index) => (
        <Circle
          key={index}
          center={center}
          radius={radius}
          pathOptions={{
            color: '#87CEEB',
            fillColor: '#87CEEB',
            fillOpacity: 0.2,
            weight: 2,
          }}
          eventHandlers={{
            click: (e) => {
              L.popup()
                .setLatLng(e.latlng)
                .setContent(`
                  <div style="
                    background: #22badf; 
                    color: white; 
                    padding: 6px 10px; 
                    border-radius: 10px;
                    font-size: 14px;
                    font-weight: medium;
                    text-align: center;
                    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
                  ">Distance: ${radius / 1000} km
                  </div>
                `)
                .openOn(map);
            },
          }}
        />
      ))}
    </>
  );
};


const createCustomIcon = (color) =>
  new L.DivIcon({
    html: renderToStaticMarkup(<LocationOnIcon style={{ fontSize: 40, color }} />),
    className: 'custom-div-icon',
    iconSize: [40, 47],
    iconAnchor: [20, 47],
    popupAnchor: [0, -47],
  });

  const createCustomMainIcon = (color) =>
    new L.DivIcon({
      html: renderToStaticMarkup(<PetsIcon style={{ fontSize: 40, color }} />),
      className: 'custom-div-icon',
      iconSize: [40, 47],
      iconAnchor: [20, 47],
      popupAnchor: [0, -47],
    });
  
  const createCustomAddNewIcon = (color) =>
    new L.DivIcon({
      html: renderToStaticMarkup(<AddLocationAltIcon style={{ fontSize: 40, color }} />),
      className: 'custom-div-icon',
      iconSize: [40, 47],
      iconAnchor: [20, 47],
      popupAnchor: [0, -47],
    });

  

    const MapWrapper = ({ onMapLoad }) => {
      const map = useMap();
      useEffect(() => {
        onMapLoad(map);
      }, [map, onMapLoad]);
    
      return null;
    };
    

function LeafletPetDetailsMapNew({ 
  pet,
  sightings,
  markerPosition,
  onMapLoad,
  setMarkerPosition,
  zoomPosition,
  onRemoveLocation,
  // addLocationTrigger,
  isLocationAdded,
  handleAddLocation,
  sendDataToParent,
  handleZoomMap,
  onAddLocation, }) {
 

  const mainIcon = createCustomMainIcon('#0077B6');
  const historyIcon = createCustomIcon('#0077B6');
  const newMarkerIcon = createCustomAddNewIcon('#dc004e');
  const mapRef = useRef();
  // console.log("onAddLocation",onAddLocation )
  // console.log("handleAddLocation",handleAddLocation )
  // console.log("isLocationAdded",isLocationAdded )
  // console.log("markerPosition from map",markerPosition )
  // console.log("onRemoveLocation from map",onRemoveLocation )
  
  
 // Handle click function that sends coordinates to parent
const handleClick = (lat, lng) => {
  sendDataToParent([lat, lng]); // Sending lat and lng as an array
};
  
// Handle marker removal from parent
useEffect(() => {
  if (!isLocationAdded) {
    // console.log('Marker before', markerPosition);
    setMarkerPosition(null);
    // console.log('Marker after', markerPosition);
    //setMarkerPosition
  }
}, [onRemoveLocation]);

 
  const defaultCenter = [56.9496, 24.1052]; // Coordinates for Riga, Latvia
  const [newMarker, setNewMarker] = useState(null);
  
  const defaultZoom = 14;
  const radius = 5000; // Example: 5km radius
    // Determine the center based on the first sighting, or fallback to default
    // const firstSighting = pet?.sightings_history?.[0];
    const center = pet.latitude && pet.longitude ? [parseFloat(pet.latitude), parseFloat(pet.longitude)] : defaultCenter;
  

      const onMapLoadHandler = (mapInstance) => {
        mapRef.current = mapInstance;
        if (onMapLoad) {
          onMapLoad(mapInstance);
        }
      };

      useEffect(() => {
        if (mapRef.current && zoomPosition && zoomPosition.lng && zoomPosition.lat) {
          mapRef.current.setView([zoomPosition.lat, zoomPosition.lng], 14);
          console.log('Panning to:', zoomPosition.lat,  zoomPosition.lng);
        }
      }, [zoomPosition]);

      // useEffect(() => {
      //   if (addLocationTrigger && mapRef.current) {
      //     const center = mapRef.current.getCenter();
      //     setNewMarker([center.lat, center.lng]);
      //     console.log('New marker added atx:', center.lat, center.lng);
      //   }
      // }, [addLocationTrigger]);
      useEffect(() => {
        if (isLocationAdded && mapRef.current) {
          const center = mapRef.current.getCenter();
          setNewMarker([center.lat, center.lng]);
          // Call handleClick with lat and lng
          handleClick(center.lat, center.lng);
          // console.log("handleClick", center.lat, center.lng)
          // console.log('New marker added atx:', center.lat, center.lng);
        }
      }, [isLocationAdded]);

  return (
    <>
    <MapContainer
      style={{ height: '400px', width: '100%' }}
      center={center}
      zoom={defaultZoom}
      scrollWheelZoom={true}
      
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />



      {markerPosition && (
        <Marker 
        position={markerPosition} 
        draggable={true} 
        icon={newMarkerIcon}
        eventHandlers={{
          dragend: (e) => {
            // const { lat, lng } = e.target.getLatLng();
            // setMarkerPosition([lat, lng]);
            // console.log('Marker moved to:', lat, lng);
            const marker = e.target;
            const newPosition = [marker.getLatLng().lat, marker.getLatLng().lng];
            setMarkerPosition(newPosition); // Send updated position to parent
             // Send the updated coordinates to the parent component
      sendDataToParent(newPosition); // Send updated coordinates to parent
            console.log('Marker moved to:', newPosition);
          },
        }}
        
        >
       
       <Popup offset={[0, 5]}>
   
   <Chip
     size="small"
     label="Jauna lokācija"
     style={{ backgroundColor: '#fff1f1', color: '#6d0202' }}

   ></Chip>
 </Popup>
        </Marker>
      )}


{ sightings && sightings.map((sighting, index) => {
    const petPosition = [
      parseFloat(sighting.latitude),
      parseFloat(sighting.longitude)
    ];

    return (
      <Marker
        key={index}
        position={petPosition}
        icon={createCustomIcon()}  // Use the same icon for all markers
      >
        <Popup offset={[0, 5]}>
          <div style={{ textAlign: 'center' }}>
            {sighting.pet_image && (
              <img
                src={sighting.pet_image}
                alt={sighting.id}
                style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  border: '3px solid white',
                  objectFit: 'cover',
                }}
              />
            )}
          </div>
          <div
            style={{
              textAlign: 'center',
              backgroundColor: 'slategray',
              padding: '0.4rem 0.6rem',
              borderRadius: '1rem',
              color: 'white',
              fontWeight: '500',
            }}
          >
            Pievienots {moment(sighting.event_occurred_at).fromNow()}
          </div>
        </Popup>
      </Marker>
    );
})}

{/* {pet?.sightings_history?.map((sighting, index) => {
  const petPosition = [
    parseFloat(sighting.latitude),
    parseFloat(sighting.longitude)
  ];

  // The most recent sighting should get the paw icon
  // const isMostRecent = index === pet.sightings_history.length - 1;

  return (
    <Marker 
      key={index} 
      position={petPosition} 
      icon={isMostRecent ? createCustomMainIcon('#0077B6') : createCustomIcon('#0077B6')}
    >    
      <Popup offset={[0, 5]}>
        {isMostRecent ? (
          // Popup for the MOST RECENT sighting
          <div style={{ textAlign: 'center' }}>
          
            <img
               src={sighting.image}
               alt={sighting.id}
               style={{
                 width: '120px',
                 height: '120px',
                 borderRadius: '50%',
                 border: '3px solid white',
                 objectFit: 'cover',
               }}
            />
   
          </div>
        ) : (
          // Popup for all OTHER sightings
          <div
            style={{
              textAlign: 'center',
              backgroundColor: 'slategray',
              padding: '0.4rem 0.6rem',
              borderRadius: '1rem',
              color: 'white',
              fontWeight: '500',
            }}
          ><img
          src={sighting.image}
          alt={sighting.id}
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '3px solid white',
            objectFit: 'cover',
          }}
       />
            Pievienots {moment(sighting.event_occurred_at).fromNow()}
          </div>
        )}
      </Popup>
    </Marker>
  );
})} */}

<Marker 
 
      position={[parseFloat(pet.latitude),parseFloat(pet.longitude)]} 
      icon={createCustomMainIcon('#0077B6')}
    >    
      <Popup offset={[0, 5]}>
        {true ? (
          // Popup for the MOST RECENT sighting
          <div style={{ textAlign: 'center' }}>
          
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
   
          </div>
        ) : (
          // Popup for all OTHER sightings
          <div
            style={{
              textAlign: 'center',
              backgroundColor: 'slategray',
              padding: '0.4rem 0.6rem',
              borderRadius: '1rem',
              color: 'white',
              fontWeight: '500',
            }}
          ><img
          src={pet.image}
          alt={pet.id}
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            border: '3px solid white',
            objectFit: 'cover',
          }}
       />
            Pievienots {moment(pet.event_occurred_at).fromNow()}
          </div>
        )}
      </Popup>
    </Marker>
      <SearchCircles center={center} petType={pet.species_display} />
      <MapWrapper onMapLoad={onMapLoadHandler} />
    </MapContainer>
   
    </>
  );
}

export default LeafletPetDetailsMapNew;
