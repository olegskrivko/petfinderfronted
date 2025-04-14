import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, CardContent, Grid, CircularProgress, Container, Alert } from '@mui/material';
import { useParams } from 'react-router-dom'; // to get the service id from the URL
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ServiceDetail = () => {
  const { id } = useParams();  // Get the id from the URL
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchService = async () => {
      const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
      if (!accessToken) {
        setError('You must be logged in to view shelters.');
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${API_BASE_URL}/services/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,  // Add Authorization header with token
            },
          }
        );
        setService(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching service details:', error);
        setError('Failed to load service details. Please try again later.');
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container component="main" maxWidth="lg" sx={{ paddingLeft: '0rem !important', paddingRight: '0rem !important' }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingLeft: '0rem !important', paddingRight: '0rem !important' }}>
      <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
        {service.title}
      </Typography>

      <Grid container spacing={4} mt={2}>
        <Grid item xs={12} sm={12} md={6}>
          <Card
            elevation={3}
            sx={{
              borderRadius: 3,
              overflow: 'hidden',
            }}
          >
            <CardContent sx={{ p: 2 }}>
              <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
                {service.title}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Category: {service.category}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {service.description}
              </Typography>
              <Typography variant="h6" color="text.primary">
                Price: {service.price} EUR
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6}>
          <Typography variant="h5" sx={{ mb: 2 }}>
            Service Locations:
          </Typography>
          {service.locations && service.locations.length > 0 ? (
            service.locations.map((location, index) => (
              <Card key={index} elevation={2} sx={{ mb: 2 }}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    {location.city}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {location.address}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Phone: {location.phone_number || 'N/A'}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Email: {location.email || 'N/A'}
                  </Typography>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body2" color="text.secondary">
              No locations available.
            </Typography>
          )}
        </Grid>
      </Grid>

      <Box sx={{ mt: 4 }}>
        <Alert severity="info">
          If you are a service provider and would like to update your service details, please contact us.
        </Alert>
      </Box>
    </Container>
  );
};

export default ServiceDetail;
