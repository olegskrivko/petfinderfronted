import React, { useState, useEffect } from 'react';
import {
  Typography,
  Card,
  Chip,
  CardContent,
  Avatar,
  Grid,
  Box,
  Button,
  Tooltip,
  Link as MuiLink,
  Container,
  IconButton,
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import BookmarkIcon from '@mui/icons-material/Bookmark';  // ✅ Import missing icon
import axios from 'axios';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PetsIcon from '@mui/icons-material/Pets';
function UserPets() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ownedPets, setOwnedPets] = useState([]);

  console.log("user", user);
  console.log("ownedPets", ownedPets);

  useEffect(() => {
    const fetchUserPets = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        setError('You must be logged in to view pets.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user-profile/user-pets/', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setOwnedPets(response.data);
      } catch (error) {
        console.error('Error fetching pets data:', error);
        setError('Failed to fetch pets data');
      } finally {
        setLoading(false);  // ✅ Ensure loading stops after fetch
      }
    };

    fetchUserPets();
  }, []);

  const handleDeletePet = async (petId) => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      alert('You must be logged in to delete pets.');
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/api/user-profile/user-pets/${petId}/delete/`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        alert('Pet deleted successfully');
        setOwnedPets((prevPets) => prevPets.filter((pet) => pet.id !== petId));  // ✅ Remove pet from UI
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.detail}`);
      }
    } catch (error) {
      console.error('Error deleting pet:', error);
      alert('Error deleting pet');
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
          Ielādē mājdzīvniekus...
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
       <Container
              component="main"
              sx={{
                flexGrow: 1,
                py: '2rem',
                // pb: '2rem',
                width: '100%',
                overflowX: 'hidden',
              }}
   >
      <Typography
        variant="h3"
        textAlign="center"
        sx={{ mb: 3, fontWeight: "500" }}
        gutterBottom
      >
        MANI MĀJDZĪVNIEKI
      </Typography>

      {ownedPets.length === 0 ? (
        // ✅ Display message when user has no pets
  

        <Card >
        <CardContent  sx={{paddingBottom: "1rem !important"}}>

        <Box display="flex" alignItems="center">
        <PetsIcon color="warning" sx={{ fontSize: 28, marginRight: "1rem"  }} />
          <Typography variant="body2" color="textSecondary">
            Jums vēl nav pievienotu mājdzīvnieku.
          </Typography>
        
          </Box>
        </CardContent>
      </Card>
      ) : (
        <Grid container spacing={2}>
          {ownedPets.map((pet) => (
            <Grid item xs={12} key={pet.id}>
              <Card>
                <CardContent>
                  <Box display="flex" alignItems="center">
                    <Avatar
                      src={`http://127.0.0.1:8000${pet.image}`}
                      alt={pet.species_display}
                      sx={{ width: 64, height: 64, marginRight: 2 }}
                    />
                    <Box flexGrow={1}>
                      <Typography variant="h6">
                        <MuiLink href={`/pets/${pet.id}`} underline="none">
                          <Chip
                            label={pet.species_display || 'Nezināms'}
                            size="small"
                            variant="contained"
                            style={{ backgroundColor: '#5B9BD5', color: '#fff' }}
                          />
                        </MuiLink>
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {pet.sightings_history?.[0]?.status_display || 'Nav statusa'}
                      </Typography>
                    </Box>

                    <Tooltip title="Rediģēt">
                      <IconButton
                        edge="end"
                        color="primary"
                        style={{ marginLeft: '0.5rem' }}
                        aria-label="edit"
                        onClick={() => handleEditPet(pet.id)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Izdzēst">
                      <IconButton
                        edge="end"
                        color="error"
                        style={{ marginLeft: '0.5rem' }}
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

export default UserPets;
