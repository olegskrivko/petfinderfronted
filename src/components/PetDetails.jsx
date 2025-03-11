import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'; // to extract the pet ID from the URL
import { CircularProgress, Alert,Grid,Grid2, Typography, Card,CardMedia,Box,Tooltip,  IconButton   } from '@mui/material';
import Chip from '@mui/material/Chip';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import LeafletPetDetailsMap from './LeafletPetDetailsMap'
import LeafletPetDetailsMapNew from './LeafletPetDetailsMapNew'
import SendMessage from './SendMessage';
import IconLabelTabs from './IconLabelTabs';
import { useSnackbar } from 'notistack';
import moment from 'moment';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import 'moment/locale/lv'; // Import Latvian locale
import { ContactSupportOutlined } from '@mui/icons-material';
import { useAuth } from '../contexts/AuthContext';
import PetAttributes from "./PetAttributes";
import PetPhoto from "./PetPhoto";


const PetDetailsPage = () => {
  const { user } = useAuth();
  // console.log("useruseruser",user)
  // useEffect(() => {
  //   console.log("Updated user:", user);
  // }, [user]);
  // useEffect(() => {
  //   const checkUser = async () => {
  //     const storedUser = localStorage.getItem("user");
  //     console.log("Stored user:", storedUser);
  //   };
  
  //   checkUser();
  // }, []);
  
  const { id } = useParams(); // Get the pet ID from the URL
  const [pet, setPet] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  // const [currentImage, setCurrentImage] = useState('');
  const { enqueueSnackbar } = useSnackbar();
  const [zoomPosition, setZoomPosition] = useState(null)
  // new states for sending message
  const [message, setMessage] = useState('');
  const [file, setFile] = useState(null);
  const [filePreview, setFilePreview] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [markerPosition, setMarkerPosition] = useState(null);
  const [locationAdded, setLocationAdded] = useState(false);
  // const [addLocationTrigger, setAddLocationTrigger] = useState(false);
  const [isLocationAdded, setIsLocationAdded] = useState(false);
  
  const [coords, setCoords] = useState({ lat: null, lng: null });

    // Function to receive data from child
    const handleChildData = (data) => {
      setMarkerPosition(data);
      console.log("markerPosition parent", data)
    };
  //const [coords, setCoords] = useState({ lat: 56.9496, lng: 24.1052 });
  const imageList = pet
  ? [
      pet.image,
      pet.extra_image_1,
      pet.extra_image_2,
      pet.extra_image_3,
      pet.extra_image_4,
    ].filter((img) => img) // Ensure only valid images are used
  : [];

  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const handleZoomMap = (lat, lng) => {
    if (lat && lng) {
      console.log("aaa")
      console.log(`Zooming to: ${lat}, ${lng}`);
      setZoomPosition({ lat, lng });
    }
  };
  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: pet.status_display,
          text: pet.breed_display,
          url: window.location.href,
        });
      } else {
        // Fallback: Copy URL to clipboard
        navigator.clipboard.writeText(window.location.href);
        enqueueSnackbar('Link copied to clipboard!', { variant: 'success' });
      }
    } catch (error) {
      console.error('Error sharing pet:', error);
      enqueueSnackbar('Error sharing pet. Please try again later.', { variant: 'error' });
    }
  };
  const handleFileInputChange = (file) => {
    const previewUrl = URL.createObjectURL(file); // Create preview URL for the file
    setFile(file);  // Set the file state
    setFilePreview(previewUrl); // Store the preview URL

  };

  // const handleAddLocation = (lat, lng) => {
  //   console.log('Added location:', lat, lng);
  //   setLocationAdded(true);
  // };

    // Function to trigger "Add Location" in the map
    const handleAddLocation = () => {
      console.log("parent location")
      // setAddLocationTrigger((prev) => !prev); // Toggle state to trigger re-render in LeafletMap
      // setAddLocationTrigger(true);
      setIsLocationAdded(true);
      
    };
  
    // useEffect(() => {
    //   console.log("Updated user:", user);
    // }, [user]);
    
  const handleRemoveLocation = () => {
    console.log('Removed location');
    //setLocationAdded(false);
    // setAddLocationTrigger(false);
    console.log("parent location setIslocationadded false")
    setIsLocationAdded(false);
  };

  // const handleMarkerDrag = (lat, lng) => {
  //   console.log("Marker dragged to:", lat, lng);
  //   setCoords({ lat, lng }); // Update state in parent
  //   // setZoomPosition({ lat, lng });
  // };

  const handleMarkerDrag = (newPosition) => {
    setMarkerPosition(newPosition);
    console.log('Marker moved to:', newPosition);
};

  const handleSendMessage = async () => {
    // if (!message.trim()) return;
    if (!message && !file) {
      alert('Please enter a message or upload an image.');
      return;
    }
    const formData = new FormData();
    //formData.append('message', message);  // Assuming 'message' is included
 
    if (file) {
      formData.append('image', file);
    }
// Only add latitude and longitude if they exist and are valid
if (markerPosition && markerPosition.length === 2) {
  const latitude = parseFloat(markerPosition[0]).toFixed(6);
  const longitude = parseFloat(markerPosition[1]).toFixed(6);

  if (!isNaN(latitude) && !isNaN(longitude)) {
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
  } else {
      console.warn("⚠️ Invalid latitude or longitude. Skipping coordinates.");
  }
}

    // Send the pet sighting details
   // formData.append('latitude', markerPosition[0]);  // Replace with actual latitude
    //formData.append('longitude', markerPosition[1]);  // Replace with actual longitude
    // formData.append('latitude', coords.lat);  // Replace with actual latitude
    // formData.append('longitude', coords.lng); 
    // formData.append('latitude',  56.9496);
    // formData.append('longitude', 24.1052); 
    formData.append('status', 1);  // Replace with the actual status (e.g., '3' for Seen)
    formData.append('notes', message);
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    formData.append('reporter', user.userId);  // Optional
   
    // formData.append('event_occurred_at', selectedDateTime);  // Event time
    formData.append('event_occurred_at', selectedDate + " " + selectedTime); 
    // formData.append('event_occurred_at', selectedDate); 
    // formData.append('event_occurred_at', selectedTime); 
    //formData.append('image', fileInput.files[0]);  // Optional image

   
  const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
    if (!accessToken) {
        setError('You must be logged in to view shelters.');
        setLoading(false);
        return;
    }
  
  try {
      const response = await fetch(`http://127.0.0.1:8000/api/pets/${id}/pet-sightings/?format=json`, {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${accessToken}`,  // Add Authorization header with token
        }
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      console.log('Message sent:', result);
  
      // Reset after sending
      setMessage('');
      setFile(null);
      setFilePreview(null);
      setLocationAdded(false);
      // setSelectedDateTime('');
      setSelectedDate('');
      setSelectedTime('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };
  useEffect(() => {
    const fetchPetDetails = async () => {
      const accessToken = localStorage.getItem('access_token'); // Retrieve token from localStorage

      if (!accessToken) {
        setError('You must be logged in to view pets.');
        setLoading(false);
        return; // Exit early if no token
      }

      try {
        setLoading(true);
        setError(null);
        
        //const response = await fetch(`http://127.0.0.1:8000/api/pets/${id}/?format=json`);

        
        const response = await fetch(`http://127.0.0.1:8000/api/pets/${id}/?format=json`, {
          headers: {
            Authorization: `Bearer ${accessToken}`, // Add the token to the request header
          },
        });
        const data = await response.json();

        if (data) {
          setPet(data);
          // setCurrentImage(data.image || '/default_pet_image.jpg'); // Initialize with the main image
        } else {
          throw new Error('Pet not found');
        }
      } catch (err) {
        setError('Failed to fetch pet details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };


    const fetchFavoriteStatus = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) return;
  
      try {
          const response = await fetch(`http://127.0.0.1:8000/api/user-profile/favorite-pets/${id}/`, {
              method: 'GET',
              headers: { Authorization: `Bearer ${accessToken}` },
          });
  
          if (response.ok) {
              const data = await response.json();
              setIsFavorite(data.is_favorite);
          } else {
              setIsFavorite(false);
          }
      } catch (error) {
          console.error('Error checking favorite status:', error);
      }
  };
  
    fetchPetDetails();
    fetchFavoriteStatus();
  }, [id]); // Run the effect when the pet ID changes
  const handleFavorite = async () => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      alert('You must be logged in to manage favorites.');
      return;
    }

    const url = `http://127.0.0.1:8000/api/user-profile/favorite-pets/${id}/`;
    try {
      const response = await fetch(url, {
        method: isFavorite ? 'DELETE' : 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setIsFavorite(!isFavorite);
        enqueueSnackbar(isFavorite ? 'Pet removed from favorites' : 'Pet added to favorites', { variant: 'success' });
      } else {
        const errorData = await response.json();
        enqueueSnackbar(errorData.detail || 'Something went wrong', { variant: 'error' });
      }
    } catch (error) {
      console.error('Error updating favorite status:', error);
      enqueueSnackbar('Error updating favorite status. Please try again later.', { variant: 'error' });
    }
  };
  // const handleImageClick = (clickedImageKey) => {
  //   // Store the clicked image
  //   const clickedImage = pet[clickedImageKey];
  
  //   // Swap the images
  //   setPet((prevPet) => ({
  //     ...prevPet,
  //     [clickedImageKey]: currentImage, // Replace the clicked image with the current main image
  //   }));
  
  //   // Update the current image
  //   setCurrentImage(clickedImage);
  // };
  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={80} style={{ color: '#ff6600' }} />
      </div>
    );
  }
  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Alert severity="error">{error}</Alert>
      </div>
    );
  }
  if (!pet) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Alert severity="info">No pet details available</Alert>
      </div>
    );
  }
  const latestStatus = pet.sightings_history.length > 0 ? pet.sightings_history[pet.sightings_history.length - 1] : null;

  return (
    <React.Fragment>
    <Grid container spacing={3}>
       <Grid item xs={12}>
       <Typography variant="h3" textAlign="center" sx={{ mb: 3, fontWeight: "500" }} gutterBottom>
          {/* Display the latest status if available */}
          {latestStatus ? (
             <span>
            <span style={{ textTransform: 'uppercase' }}>
              {latestStatus.status_display} 
            </span> <span style={{ textTransform: 'uppercase' }}> {pet.species_display} </span> 
            </span>
          ) : (
            'No status available'
          )}
        </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card style={{ position: 'relative' }}>
            <Grid item xs={12} >
          {/* <Card style={{ position: "relative" }}> */}
            {/* Main Image */}
            <CardMedia
              component="img"
              alt={pet.name}
              height="500"
              image={imageList[currentIndex] || "/default_pet_image.jpg"}
            />

            {/* Dot Navigation */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                gap: "8px",
                my: 0.6,
                padding: "10px",
              }}
            >
              {imageList.map((_, index) => (
                <div
                  key={index}
                  onClick={() => handleDotClick(index)}
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: index === currentIndex ? "#ff6600" : "#ddd",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                />
              ))}
            </Box>
          {/* </Card> */}
        </Grid>
              {/* <CardMedia component="img" alt={pet.name} height="400" image={currentImage}/> */}

              {/* <Box style={{ display: 'flex', justifyContent: 'space-between' }}>
  {[1, 2, 3, 4].map((index) => {
    const imageKey = `extra_image_${index}`;
    const imageSrc = pet[imageKey];

    return (
      <div
        key={imageKey}
        style={{
          width: '48%',
          height: '100px',
          backgroundColor: imageSrc ? 'transparent' : '#f0f0f0', // Light gray background for missing images
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        
          cursor: imageSrc ? 'pointer' : 'default', // Only clickable if an image exists
          //border: '5px solid #fff', // Dashed border for empty placeholders
          borderTop: '5px solid #fff',   // Top border
          borderBottom: '5px solid #fff', // Bottom border
          borderLeft: '5px solid #fff',   // Left border
          borderRight: index === 4 ? '5px solid #fff' : 'none', // Only last image gets right border
        }}
        onClick={imageSrc ? () => handleImageClick(imageKey) : undefined}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={`pet-extra-${index}`}
            style={{ width: '100%', height: '100%', objectFit: 'cover', 
      
            }}
          />
        ) : (
          <Tooltip title="Attēls nav pieejams">
            <ImageNotSupportedIcon style={{ fontSize: 28, color: '#999' }} />
          </Tooltip>
        )}
      </div>
    );
  })}
</Box> */}

          <Box style={{position: 'absolute', top: -20, right: 0, zIndex: 999 }}>
          <IconButton aria-label="add to favorites" sx={{position: 'absolute', top: '40px', right: '20px', background: '#FFFFFF'}}>
          <BookmarkIcon />
          </IconButton>

          <Tooltip sx={{position: "absolute", top: "40px", right: "20px", background: "#FFFFFF"}} title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
          <IconButton onClick={handleFavorite}>
            {isFavorite ? <BookmarkIcon color="secondary" /> : <BookmarkBorderIcon />}
          </IconButton>
        </Tooltip>
          <Link to={`/pets/${id}/poster`}>
          <IconButton aria-label="Download" sx={{position: 'absolute', top: '95px', right: '20px', background: '#FFFFFF'}}>
          <DownloadIcon />
          </IconButton>
          </Link>
          <IconButton aria-label="Share" sx={{position: 'absolute', top: '150px', right: '20px', background: '#FFFFFF'}} onClick={handleShare}>
          <ShareIcon />
          </IconButton>
          </Box>
          </Card>

          </Grid>
          {/* Attributes */}
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <PetAttributes pet={pet} />
          </Grid>
          </Grid>


          <Grid item xs={12} sm={12} md={12} lg={12} style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
          <LeafletPetDetailsMapNew pet={pet} zoomPosition={zoomPosition} 
          // addLocationTrigger={addLocationTrigger} 
          isLocationAdded={isLocationAdded} 
          setMarkerPosition={setMarkerPosition}
          onRemoveLocation={handleRemoveLocation} 
          onMarkerDrag={handleMarkerDrag} 
          markerPosition={markerPosition}
          sendDataToParent={handleChildData}
         
          setCoords={setCoords} />
          </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <SendMessage pet={pet} 
              message={message}
              onMessageChange={setMessage}
              onSendMessage={handleSendMessage}
              onUploadImage={handleFileInputChange}
              filePreview={filePreview}

              onAddLocation={handleAddLocation}
              onRemoveLocation={handleRemoveLocation}
              // addLocationTrigger={addLocationTrigger}
              isLocationAdded={isLocationAdded}
              
              locationAdded={locationAdded}

              selectedDate={selectedDate}
              selectedTime={selectedTime}
              onSelectDate={handleDateChange}
              onSelectTime={handleTimeChange} />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <IconLabelTabs pet={pet} onZoomMap={handleZoomMap} />
      </Grid>
    </React.Fragment>
  );
};

export default PetDetailsPage;
