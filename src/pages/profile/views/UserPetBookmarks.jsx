import React, { useState, useEffect } from 'react';

import {
  Typography,
  Card,
  Chip,
  CardContent,
  Avatar,
  Grid,
  Box,
  Link as MuiLink,
  Container,
  IconButton,
  Button,
  Tooltip,
} from '@mui/material';
import { useAuth } from '../../../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
// import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 

function UserPetBookmarks() {
  const { user } = useAuth(); // Assuming you are managing user state in context
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoritedPets, setFavoritedPets] = useState([]);

  useEffect(() => {
    const fetchFavoritedPets = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        setError('You must be logged in to view favorited pets.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URL}/user-profile/favorite-pets/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,  // Add Authorization header with token
          },
        });

        setFavoritedPets(response.data);  // Since axios already parses the response
        setLoading(false);  // Stop loading when data is fetched
      } catch (error) {
        console.error('Error fetching favorited pets data:', error);
        setError('Failed to fetch favorited pets data');
        setLoading(false);  // Stop loading even when there’s an error
      }
    };

    fetchFavoritedPets();
  }, []);

  // const handleDeletePet = async (petId) => {
  //   const accessToken = localStorage.getItem('access_token');
  //   if (!accessToken) {
  //     alert('You must be logged in to delete pets.');
  //     return;
  //   }

  //   try {
  //     const response = await fetch(`https://petfinderbackend-production.up.railway.app/api/user-profile/favorite-pets/${petId}/remove/`, {
  //       method: 'DELETE',
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     if (response.ok) {
  //       alert('Pet removed from favorites successfully');
  //       // You can trigger a re-fetch or update your UI accordingly
  //     } else {
  //       const errorData = await response.json();
  //       alert(`Error: ${errorData.detail}`);
  //     }
  //   } catch (error) {
  //     console.error('Error removing pet from favorites:', error);
  //     alert('Error removing pet from favorites');
  //   }
  // };
  const handleDeletePet = async (petId) => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
        alert('You must be logged in to delete pets.');
        return;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/user-profile/favorite-pets/${petId}/remove/`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            // Remove the deleted pet from state
            setFavoritedPets((prevPets) => prevPets.filter((pet) => pet.id !== petId));
        } else {
            const errorData = await response.json();
            alert(`Error: ${errorData.detail}`);
        }
    } catch (error) {
        console.error('Error removing pet from favorites:', error);
        alert('Error removing pet from favorites');
    }
};

  const handleEditPet = (petId) => {
    navigate(`/user-profile/edit-pet/${petId}`);
  };

  // Loading and error state handling
  if (loading) {
    return (
      <Container>
        <Typography variant="h5" align="center">
          Loading your favorited pets...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Typography variant="h5" color="error" align="center">
          {error}
        </Typography>
      </Container>
    );
  }
 
  return (
 <Container component="main" maxWidth="lg" >
    <Typography
      variant="h3"
      textAlign="center"
      sx={{ mb: 3, fontWeight: "500" }}
      gutterBottom
    >
      SAGLABĀTIE SLUDINĀJUMI
    </Typography>

    {favoritedPets.length === 0 ? (
      // Show message when no bookmarks are available
      <Card >
        <CardContent  sx={{paddingBottom: "1rem !important"}}>

        <Box display="flex" alignItems="center">
        <BookmarkIcon color="warning" sx={{ fontSize: 28, marginRight: "1rem"  }} />
          <Typography variant="body2" color="textSecondary">
            Jums vēl nav saglabātu sludinājumu.
          </Typography>
        
          </Box>
        </CardContent>
      </Card>
    ) : (
      <Grid container spacing={2}>
        {favoritedPets.map((pet) => (
          <Grid item xs={12} key={pet.id}>
            <Card>
              <CardContent>
                <Box display="flex" alignItems="center">
                  <Avatar
                    src={pet.pet_image_1}
                    alt={pet.species_display}
                    sx={{ width: 64, height: 64, marginRight: 2 }}
                  />
                  <Box flexGrow={1}>
                    <Typography variant="h6">
                      <MuiLink href={`/pets/${pet.id}`} underline="none">
                        <Chip
                          label={pet.species_display || "Nezināms"}
                          size="small"
                          variant="contained"
                          style={{ backgroundColor: "#5B9BD5", color: "#fff" }}
                        />
                      </MuiLink>
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {pet.status_display || "Nav statusa"}
                    </Typography>
                  </Box>
                  <Tooltip title="Izdzēst">
                    <IconButton
                      edge="end"
                      color="error"
                      aria-label="delete"
                      onClick={() => handleDeletePet(pet.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    )}

    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box textAlign="center" style={{ display: "flex", justifyContent: "space-between" }} mt={4}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<ArrowBackIcon />}
            component={Link}
            to={`/user-profile`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Atpakaļ
          </Button>
        </Box>
      </Grid>
    </Grid>
  </Container>
  );
}




export default UserPetBookmarks;
