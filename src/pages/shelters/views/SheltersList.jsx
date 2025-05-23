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
  Dialog,
  DialogContent,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LeafletSheltersMap from '../../../components/LeafletSheltersMap';
import logo from '../../images/animal_shelter.png';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SheltersList = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));


  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem('sheltersPopupShown');

    if (!popupShown) {
      setShowPopup(true);
      localStorage.setItem('sheltersPopupShown', 'true');
    }
  }, []);

  useEffect(() => {
    const fetchShelters = async () => {
      const accessToken = localStorage.getItem('access_token');
    
      try {
        const response = await axios.get(`${API_BASE_URL}/shelters`, {
          headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
        });
        setShelters(response.data);
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
    <Container component="main" maxWidth="lg">
      {/* <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
        Dzīvnieku patversmes
      </Typography> */}

      <LeafletSheltersMap shelters={shelters} />

      <Grid container spacing={2} mt={1}>
        {shelters.map((shelter) => (
          <Grid item key={shelter.id} xs={6} sm={6} md={3} lg={2}>
            <Card
              elevation={3}
              sx={{
                borderRadius: 3,
                overflow: 'hidden',
                // background: "linear-gradient(135deg, #0f4c81, #00b3a4)",

                transition: 'transform 0.2s ease',
                '&:hover': {
                  transform: 'scale(1.015)',
                },
              }}
            >
              <Link to={`/shelters/${shelter.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <CardMedia
                  component="img"
                  image={logo}
                  alt={shelter.name}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    transform: 'scale(0.95)',
                    position: 'relative',
                  }}
                />
                <CardContent sx={{  paddingBottom: "1rem !important", paddingTop: "1rem !important" }}>
                  <Typography
                    // gutterBottom
                    variant="h6"
                    component="div"
                    textAlign="center"
                    sx={{ fontWeight: 600,  letterSpacing: "1px" }}
                  >
                    {shelter.name}
                  </Typography>

                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Pop-up alert as Dialog */}
      <Dialog open={showPopup} onClose={() => setShowPopup(false)}>
        <DialogContent sx={{ position: 'relative', p: 4 }}>
          <IconButton
            aria-label="close"
            onClick={() => setShowPopup(false)}
            sx={{ position: 'absolute', right: 8, top: 8 }}
          >
            <CloseIcon />
          </IconButton>
          <Alert severity="info">
            <AlertTitle>Piezīme patversmēm</AlertTitle>
            Ja jūs pārstāvat patversmi un vēlaties, lai tā tiktu parādīta mūsu lietotnē, lūdzu, sazinieties ar mums.
            Mēs ar prieku sadarbosimies ar jums, lai izceltu jūsu organizāciju un palīdzētu vairāk dzīvniekiem atrast savas mūžīgās mājas.
          </Alert>
        </DialogContent>
      </Dialog>

    </Container>
  );
};

export default SheltersList;
