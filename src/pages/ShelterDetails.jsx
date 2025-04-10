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
import { BASE_URL } from './config/config';
import { useParams } from 'react-router-dom'; // Import useParams hook
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PublicIcon from '@mui/icons-material/Public';
import LocationOnIcon from '@mui/icons-material/LocationOn';
// Import Custom hook
import useFontSizes from './utils/getFontSize';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
// import { useTranslation } from 'react-i18next';
function ShelterDetails() {
  // const { t } = useTranslation(); // Initialize translation hook
  const { getTypography } = useFontSizes();
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
      const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
      if (!accessToken) {
        setError('You must be logged in to view shelters.');
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${API_BASE_URL}/shelters/${id}/?format=json`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,  // Add Authorization header with token
          },
        });
        setShelter(response.data);
      } catch (error) {
        console.error('Error fetching shelter:', error);
        // Handle error (e.g., show error message)
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

  const handleLocationClick = () => {
    const latitude = shelter.latitude;
    const longitude = shelter.longitude;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
     <React.Fragment>
      <Container component="main" maxWidth="lg" sx={{ paddingLeft: "0rem !important", paddingRight: "0rem !important" }}>
              <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
              {shelter.name}
                      </Typography>
      {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h1"
            textAlign="center"
            sx={{ mb: 3 }}
            gutterBottom
            style={{
              fontSize: getTypography('h1').fontSize,
              fontWeight: getTypography('h1').fontWeight,
            }}
          >
            {shelter.name}
          </Typography>
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5}>
          <Card style={{ boxShadow: 'none' }}>
            <CardMedia
              component="img"
              image={`https://placehold.co/600x400/${getRandomColor()}/${fontColor}?text=${
                shelter.name
              }&font=roboto`}
              title={shelter.name}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Card style={{ boxShadow: 'none' }}>
            <CardContent style={{ paddingTop: '0' }}>
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

              {/* <Box>
                <strong>Address:</strong>{' '}
                <MuiLink onClick={handleLocationClick}>
                  <Typography variant="body1" sx={{ display: 'inline-block' }}>
                    {shelter.addressDetails?.address}, {shelter.addressDetails?.city},{' '}
                    {shelter.addressDetails?.country}
                  </Typography>
                </MuiLink>
              </Box> */}

              {/* <Typography variant="body1">
                <strong>Coordinates:</strong> Latitude: {shelter.location.coordinates[1]},
                Longitude: {shelter.location.coordinates[0]}
              </Typography> */}
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
                {shelter.social_media.map((profile) => (
                  <ListItem key={profile.id}>
                    <MuiLink
                      href={profile.profile_url}
                      style={{ textDecoration: 'none' }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {profile.platform}
                    </MuiLink>
                  </ListItem>
                ))}

                {/* <ListItem>
                  <ListItemIcon>
                    <InstagramIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={shelter.socialMedia.instagram.name}
                    style={{ marginLeft: '-1rem' }}
                  />
                </ListItem> */}
                {/* <ListItem>
                  <ListItemIcon>
                    <LinkedInIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={shelter.socialMedia.linkedin.name}
                    style={{ marginLeft: '-1rem' }}
                  />
                </ListItem> */}
                {/* <ListItem>
                  <ListItemIcon>
                    <YouTubeIcon style={{ color: '#6E6E6E' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={shelter.socialMedia.youtube.name}
                    style={{ marginLeft: '-1rem' }}
                  />
                </ListItem> */}
              </List>

              {/* <Typography variant="body1">
                <strong>{t('sheltersDetailsPage.labels.tags')}:</strong>{' '}
                {shelter.tags.map((tag) => (
                  <Chip
                    key={tag}
                    label={tag}
                    size="small"
                    variant="contained"
                    sx={{
                      textTransform: 'capitalize',
                      backgroundColor: '#6E6E6E',
                      // backgroundColor: '#20c997',
                      // backgroundColor: 'rgba(0,0,0,0.5)',
                      color: 'white',
                      position: 'relative', // Changed from 'absolute' to 'relative'
                      marginRight: '4px',
                    }}
                  />
                ))}
              </Typography> */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      </Container>
     </React.Fragment>
  );
}



export default ShelterDetails;
