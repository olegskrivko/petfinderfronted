import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  CircularProgress,
  Container,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { BASE_URL } from './config/config';
// import { useTranslation } from 'react-i18next';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
// Import Custom hook
import useFontSizes from './utils/getFontSize';
import LeafletSheltersMap from '../components/LeafletSheltersMap';

const SheltersList = () => {
   // Retrieve the access token from localStorage
  
  // const { t } = useTranslation(); // Initialize translation hook
  const { getTypography } = useFontSizes();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const colors = ['2474A3', '21ABCD', '31758D', '006980', '476997', '666699', '88AFD2', '8AB9F1'];
  function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }
  const fontColor = 'white';
  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   const fetchShelters = async () => {
  //     const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
  //     try {
  //       const response = await axios.get(`https://petfinderbackend-production.up.railway.app/api/shelters`);
  //       setShelters(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error('Error fetching shelters:', error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchShelters();
  // }, []);

  useEffect(() => {
    const fetchShelters = async () => {
      const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
      if (!accessToken) {
        setError('You must be logged in to view shelters.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://petfinderbackend-production.up.railway.app/api/shelters`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,  // Add Authorization header with token
          },
        });
        setShelters(response.data);
        console.log("datashelter", response.data)
        setLoading(false);
      } catch (error) {
        console.error('Error fetching shelters:', error);
        setError('Failed to load shelters. Please try again later.');
        setLoading(false);
      }
    };

    fetchShelters();
  }, []);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <React.Fragment>
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
            PATVERSMES
          </Typography>
      <LeafletSheltersMap shelters={shelters}/>
      <Grid container spacing={3}>
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
            {/* {t('sheltersPage.title')} */}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>
            {/* {t('sheltersPage.description1')} */}
            </Typography>
          <Typography paragraph>
            {/* {t('sheltersPage.description2')} */}
            </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {shelters.map((shelter) => (
          <Grid item key={shelter._id} xs={12} sm={6} md={3}>
            <Card>
              <Link
                to={`/shelters/${shelter.id}`}
                color="inherit"
                underline="none"
                style={{ textDecoration: 'none' }}
              >
                <CardMedia
                  component="img"
                  image={`https://placehold.co/600x400/${getRandomColor()}/${fontColor}?text=${
                    shelter.name
                  }&font=roboto`}
                  alt={shelter.name}
                />
              </Link>

            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Alert severity="info" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
            <AlertTitle>
            Piezīme patversmēm
              </AlertTitle>
              Ja jūs pārstāvat patversmi un vēlaties, lai tā tiktu parādīta mūsu lietotnē, lūdzu, sazinieties ar mums. Mēs ar prieku sadarbosimies ar jums, lai izceltu jūsu organizāciju un palīdzētu vairāk dzīvniekiem atrast savas mūžīgās mājas.
          </Alert>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
};

export default SheltersList;
