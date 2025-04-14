import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  CircularProgress,
  Container,
  Alert,
  AlertTitle,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { Link } from 'react-router-dom';

import logo from './images/paw.png'; 

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ServicesList = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
 

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {

    const fetchServices = async () => {
      const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
      if (!accessToken) {
        setError('You must be logged in to view shelters.');
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${API_BASE_URL}/services/`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,  // Add Authorization header with token
            },
          }
        );
        setServices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError('Failed to load services. Please try again later.');
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingLeft: '0rem !important', paddingRight: '0rem !important' }}>
      <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
        Pakalpojumi
      </Typography>

      <Grid container spacing={4} mt={2}>
        {services.map((service) => (
          <Grid item key={service.id} xs={6} sm={6} md={4} lg={3}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.015)',
                },
              }}
            >
              <Link to={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardMedia
                  component="img"
                  image={logo}
                  alt={service.title}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    transform: 'scale(0.95)',
                    position: 'relative',
                  }}
                />
                <CardContent sx={{ p: 2 }}>
                  <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {service.description || 'No description available'}
                  </Typography>
                  <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
                    Price: {service.price} EUR
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Alert severity="info" sx={{ mt: 5 }}>
        <AlertTitle>Note</AlertTitle>
        If you are a service provider and would like to list your services on our platform, please contact us. We would be happy to collaborate with you.
      </Alert>
    </Container>
  );
};

export default ServicesList;
