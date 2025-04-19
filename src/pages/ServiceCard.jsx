import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './images/paw.png'; 

const ServiceCard = ({ service }) => {
  const isNew = () => {
    const createdDate = new Date(service.created_at);
    const now = new Date();
    const diffInDays = (now - createdDate) / (1000 * 60 * 60 * 24); // convert ms to days
    return diffInDays <= 7;
  };

  return (
    <Card>
      <Link to={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Box position="relative">
        <CardMedia
          component="img"
          image={service.service_image || logo}
          alt={service.title}
          sx={{ width: '100%', height: 'auto' }}
        />
    {isNew() && (
            <Chip
              label="Jauns"
              variant="contained"
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                color: 'white',
                position: 'absolute',
                top: '8px',
                right: '8px',
                zIndex: 3,
              }}
            />
          )}
        </Box>
      </Link> 
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {service.description?.slice(0, 100)}...
        </Typography>
      </CardContent>

    </Card>
  );
};

export default ServiceCard;