import React from 'react';
import { Card, CardContent, Typography, CardMedia, Box, Chip } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './images/paw.png'; 

const ServiceCard = ({ service }) => {
  return (
    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', borderRadius: 2 }}>
<Link to={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
  <CardMedia
    component="img"
    image={logo}
    alt={service.title}
   
  />
</Link>


      
      <CardContent sx={{ flexGrow: 1 }}>
        
        <Typography variant="h6" gutterBottom>
          {service.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {service.description?.slice(0, 100)}...
        </Typography>
        {/* {service.category && (
          <Box mt={1}>
            <Chip label={service.category} size="small" color="primary" />
          </Box>
        )} */}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;