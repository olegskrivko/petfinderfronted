import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Container,
  Chip,
  Box,
  List,
  ListItem,
  Link as MuiLink,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
// import { BASE_URL } from './config/config';
import { useParams } from 'react-router-dom'; // Import useParams hook
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import shelterImage from '../../images/animal_shelter_pana_blue.svg'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 

function ShelterDetails() {

  const { id } = useParams(); // Retrieve slug from URL params
  const [shelter, setShelter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

  const colors = ['2474A3', '21ABCD', '31758D', '006980', '476997', '666699', '88AFD2', '8AB9F1'];
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  const fontColor = 'white';

  useEffect(() => {
    const fetchShelter = async () => {
      const accessToken = localStorage.getItem('access_token');
  
      try {
        const response = await axios.get(`${API_BASE_URL}/shelters/${id}/?format=json`, {
          headers: accessToken
            ? { Authorization: `Bearer ${accessToken}` }
            : {}, // Send no auth header if token is not present
        });
  
        setShelter(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching shelter:', error);
        setError('Failed to load shelter. Please try again later.');
        setLoading(false);
      }
    };
  
    if (id) {
      fetchShelter();
    }
  }, [id]);
  

  if (!shelter) {
    return (
      <Typography variant="h6" align="center" gutterBottom style={{ margin: '20px' }}>
        Loading...
      </Typography>
    );
  }
{/* <a href="https://storyset.com/love">Love illustrations by Storyset</a> */}
  const handleLocationClick = () => {
    const latitude = shelter.latitude;
    const longitude = shelter.longitude;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
  
         <Container component="main" maxWidth="lg">
          
              <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
              {shelter.name}
                      </Typography>
  
      <Grid container spacing={3}>
  
        <Grid item xs={12} sm={5}>
  <Box display="flex" flexDirection="column" alignItems="center">
    <CardMedia
      component="img"
      src={
        shelterImage}
      alt={shelter.name}
      sx={{
        width: { xs: "100%", sm: "80%", md: "100%" },
        objectFit: "contain",
        userSelect: "none",
        pointerEvents: "none",
        borderRadius: 2,
        mb: 1,
      }}
    />
    {!shelter.image && (
      <MuiLink
        href="https://storyset.com/love"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          fontSize: "0.6rem",
          fontStyle: "italic",
          color: "#999",
          fontWeight: 300,
        }}
      >
        Love illustrations by Storyset
      </MuiLink>
    )}
  </Box>
</Grid>

        <Grid item xs={12} sm={7}>
          <Card style={{ boxShadow: 'none' }}>
            {/* <CardContent style={{ paddingTop: '0' }}> */}
              <Typography variant="body1">
                <strong>Par mums: </strong>
                {shelter.description}
              </Typography>
              {/* <Typography variant="body1">
                <strong>Website:</strong>{' '}
                <a
                  href={shelter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  {shelter.url}
                </a>
              </Typography> */}
              <Typography variant="body1">
                <strong>Vietne:</strong>
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PublicIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText style={{ marginLeft: '-1rem' }}>
                    <MuiLink
                      href={shelter.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
                    >
                      {shelter.website}
                    </MuiLink>
                  </ListItemText>
                </ListItem>
              </List>
              <Typography variant="body1">
                <strong>Adrese:</strong>
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <LocationOnIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText style={{ marginLeft: '-1rem' }}>
                    <MuiLink onClick={handleLocationClick} style={{ cursor: 'pointer' }}>
                      <Typography variant="body1" sx={{ display: 'inline-block' }}>
                        {shelter.full_address}
                      </Typography>
                    </MuiLink>
                  </ListItemText>
                </ListItem>
              </List>


              <Typography variant="body1">
                <strong>Kontakti:</strong>
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText primary={
        <Typography component="span" style={{ marginLeft: '-1rem' }}>
          <span>{shelter.phone_code}</span> <span>{shelter.phone_number}</span>
        </Typography>}/>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText primary={shelter.email} style={{ marginLeft: '-1rem' }} />
                </ListItem>
              </List>
              <Typography variant="body1">
                <strong>Sociālie mediji:</strong>
              </Typography>
              <List>
  {shelter.social_media.map((profile) => {
    let IconComponent;

    switch (profile.platform.toLowerCase()) {
      case 'facebook':
        IconComponent = FacebookIcon;
        break;
      case 'instagram':
        IconComponent = InstagramIcon;
        break;
      case 'linkedin':
        IconComponent = LinkedInIcon;
        break;
      case 'youtube':
        IconComponent = YouTubeIcon;
        break;
      case 'x':
        IconComponent = XIcon;
        break;
      case 'pinterest':
        IconComponent = PinterestIcon;
        break;
      default:
        IconComponent = PublicIcon; // fallback icon
    }

    return (
      <ListItem key={profile.id}>
        <ListItemIcon >
          <IconComponent style={{ color: '#6E6E6E' }} />
        </ListItemIcon >
        <ListItemText style={{ marginLeft: '-1rem' }}>
          <MuiLink
            href={profile.profile_url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            {profile.platform}
          </MuiLink>
        </ListItemText>
      </ListItem>
    );
  })}
</List>
         
          </Card>
        </Grid>
      </Grid>
      </Container>
 
  );
}



export default ShelterDetails;
