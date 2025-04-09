import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { IconButton,CardMedia,Chip,Tooltip, Box } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShareIcon from '@mui/icons-material/Share';
import { useSnackbar } from 'notistack';
import DownloadIcon from '@mui/icons-material/Download';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 

const ImageCarousel = ({ pet, images = [] }) => {
    const { id } = useParams();
    const { enqueueSnackbar } = useSnackbar();
  const [currentIndex, setCurrentIndex] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);

  if (images.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

//   const handleShare = async () => {
//     try {
//       if (navigator.share) {
//         await navigator.share({
//           title: pet.status_display,
//           text: pet.breed_display,
//           url: window.location.href,
//         });
//       } else {
//         // Fallback: Copy URL to clipboard
//         navigator.clipboard.writeText(window.location.href);
//         enqueueSnackbar('Link copied to clipboard!', { variant: 'success' });
//       }
//     } catch (error) {
//       console.error('Error sharing pet:', error);
//       enqueueSnackbar('Error sharing pet. Please try again later.', { variant: 'error' });
//     }
//   };

//   const handleFavorite = async () => {
//     const accessToken = localStorage.getItem('access_token');
//     if (!accessToken) {
//       alert('You must be logged in to manage favorites.');
//       return;
//     }

//     const url = `${API_BASE_URL}/user-profile/favorite-pets/${pet.id}/`;
//     try {
//       const response = await fetch(url, {
//         method: isFavorite ? 'DELETE' : 'POST',
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         setIsFavorite(!isFavorite);
//         enqueueSnackbar(isFavorite ? 'Pet removed from favorites' : 'Pet added to favorites', { variant: 'success' });
//       } else {
//         const errorData = await response.json();
//         enqueueSnackbar(errorData.detail || 'Something went wrong', { variant: 'error' });
//       }
//     } catch (error) {
//       console.error('Error updating favorite status:', error);
//       enqueueSnackbar('Error updating favorite status. Please try again later.', { variant: 'error' });
//     }
//   };

//   useEffect(() => {
//     const fetchPetDetails = async () => {
//       const accessToken = localStorage.getItem('access_token'); // Retrieve token from localStorage

//       if (!accessToken) {
//         setError('You must be logged in to view pets.');
//         setLoading(false);
//         return; // Exit early if no token
//       }

//       try {
//         setLoading(true);
//         setError(null);
        
        

        

//           const response = await fetch(`${API_BASE_URL}/pets/${id}/?format=json`, {
          
//           headers: {
//             Authorization: `Bearer ${accessToken}`, // Add the token to the request header
//           },
//         });
//         const data = await response.json();

//         if (data) {
//           setPet(data);
//           // setCurrentImage(data.image || '/default_pet_image.jpg'); // Initialize with the main image
//         } else {
//           throw new Error('Pet not found');
//         }
//       } catch (err) {
//         setError('Failed to fetch pet details. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };


//     const fetchFavoriteStatus = async () => {
//       const accessToken = localStorage.getItem('access_token');
//       if (!accessToken) return;
  
//       try {
//           const response = await fetch(`${API_BASE_URL}/user-profile/favorite-pets/${id}/`, {
//               method: 'GET',
//               headers: { Authorization: `Bearer ${accessToken}` },
//           });
  
//           if (response.ok) {
//               const data = await response.json();
//               setIsFavorite(data.is_favorite);
//           } else {
//               setIsFavorite(false);
//           }
//       } catch (error) {
//           console.error('Error checking favorite status:', error);
//       }
//   };
  
//     fetchPetDetails();
//     fetchFavoriteStatus();
//   }, [id]); // Run the effect when the pet ID changes

  return (
    <Box position="relative" width="100%" textAlign="center">
          <CardMedia
              component="img"
              alt={`Image ${currentIndex + 1}`}
              image={typeof images[currentIndex] === 'string' ? images[currentIndex] : URL.createObjectURL(images[currentIndex])}
              sx={{
                height: {
                  xs: 380, 
                  sm: 420,
                  md: 460,
                  lg: 500, 
                },
                objectFit: 'cover',
              }}
            />

<Box style={{position: 'absolute', top: 16, left: 16, zIndex: 999 }}>
          <Chip label={pet.status_display} variant="filled" 
           sx={{
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: 'white',
      letterSpacing: "1px",
      fontWeight: 400,
      backdropFilter: 'blur(6px)', 
      boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
      paddingY: 0.5,
    //   fontSize: '0.85rem',
    }}
  />
  {/* <Chip 
    label={pet.status_display}
    size="small"
    variant="contained"
    sx={{
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      color: 'white',
    //   position: 'absolute',
      top: '8px',
      right: '8px',
      zIndex: 3,
      }}
    /> */}

          </Box>
      {/* Left arrow */}
      <IconButton
  onClick={handlePrev}
  sx={{
    position: 'absolute',
    top: '50%',
    left: 10,
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: 40,
    height: 40,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }}
>
  <ArrowBackIosNewIcon  />
</IconButton>

      {/* <IconButton
        onClick={handlePrev}
        sx={{
          position: 'absolute',
          top: '50%',
          left: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.7)',
        }}
      >
        <ArrowBackIos />
      </IconButton> */}

      {/* Right arrow */}
      <IconButton
        onClick={handleNext}
        sx={{
          position: 'absolute',
          top: '50%',
          right: 10,
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(255,255,255,0.7)',
          
        }}
      >
        <ArrowBackIosNewIcon sx={{ transform: 'scaleX(-1)' }} />
      </IconButton>


       {/* 👉 Action Buttons BELOW the image */}
  {/* <Box sx={{ display: 'flex', justifyContent: 'space-around', py: 1 }}> */}
    {/* Add to Favorites */}
    {/* <Tooltip title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
      <IconButton onClick={handleFavorite}>
        {isFavorite ? <BookmarkIcon color="secondary" /> : <BookmarkBorderIcon />}
      </IconButton>
    </Tooltip> */}

    {/* Download */}
    {/* <Tooltip title="Download Poster">
      <Link to={`/pets/${pet.id}/poster`}>
        <IconButton>
          <DownloadIcon />
        </IconButton>
      </Link>
    </Tooltip> */}

    {/* Share */}
    {/* <Tooltip title="Share">
      <IconButton onClick={handleShare}>
        <ShareIcon />
      </IconButton>
    </Tooltip> */}
  {/* </Box> */}
    </Box>
  );
};

export default ImageCarousel;
