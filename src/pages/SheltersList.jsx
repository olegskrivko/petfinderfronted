// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Grid,
//   CircularProgress,
//   Container,
//   Alert,
//   AlertTitle,
// } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import useFontSizes from './utils/getFontSize';
// import LeafletSheltersMap from '../components/LeafletSheltersMap';
// import logo from './images/animal_shelter.png'

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const SheltersList = () => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//   const { getTypography } = useFontSizes();

//   const [shelters, setShelters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchShelters = async () => {
//       const accessToken = localStorage.getItem('access_token');
    
//       try {
//         const response = await axios.get(`${API_BASE_URL}/shelters`, {
//           headers: accessToken ? { Authorization: `Bearer ${accessToken}` } : {},
//         });
//         setShelters(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching shelters:', error);
//         setError('Failed to load shelters. Please try again later.');
//         setLoading(false);
//       }
//     };
    

//     fetchShelters();
//   }, []);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//      <Container component="main" maxWidth="lg" sx={{ paddingLeft: "0rem !important", paddingRight: "0rem !important" }}>
//                  <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
//                  Dzīvnieku patversmes
//                  </Typography>

//       <LeafletSheltersMap shelters={shelters} />

//       <Grid container spacing={4} mt={1}>
//         {shelters.map((shelter) => (
//           <Grid item key={shelter.id} xs={12} sm={6} md={4} lg={3}>
//             <Card
//               elevation={3}
//               sx={{
//                 borderRadius: 3,
//                 overflow: 'hidden',
//                 transition: 'transform 0.2s ease',
//                 '&:hover': {
//                   transform: 'scale(1.015)',
//                 },
//               }}
//             >
//               <Link to={`/shelters/${shelter.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//               <CardMedia
//       component="img"
//       image={logo}
//       alt={shelter.name}
//       sx={{
//         width: '100%',
//         height: 'auto', // Adjust height as needed
//         objectFit: 'cover',
//         objectPosition: 'top',
//         transform: 'scale(0.95)', // Scale down the image
//         position: 'relative', // Needed to position the icon inside the image
//       }}
//     >

//     </CardMedia>
   
//                 <CardContent sx={{ p: 2 }}>
//                   <Typography
//                     gutterBottom
//                     variant="h6"
//                     component="div"
//                     sx={{ fontWeight: 600, fontSize: '1rem', letterSpacing: "1.2px" }}
//                   >
//                     {shelter.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary"  sx={{ fontWeight: 600, fontSize: '0.8rem' }}>
//                   {shelter.full_address || 'Adrese nav norādīta'}
              
//                   </Typography>
//                 </CardContent>
//               </Link>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Alert severity="info" sx={{ mt: 5 }}>
//         <AlertTitle>Piezīme patversmēm</AlertTitle>
//         Ja jūs pārstāvat patversmi un vēlaties, lai tā tiktu parādīta mūsu lietotnē, lūdzu, sazinieties ar mums. Mēs ar prieku sadarbosimies ar jums, lai izceltu jūsu organizāciju un palīdzētu vairāk dzīvniekiem atrast savas mūžīgās mājas.
//       </Alert>
//     </Container>
//   );
// };

// export default SheltersList;
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
import useFontSizes from './utils/getFontSize';
import LeafletSheltersMap from '../components/LeafletSheltersMap';
import logo from './images/animal_shelter.png';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SheltersList = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const { getTypography } = useFontSizes();

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
    <Container component="main" maxWidth="lg" sx={{ paddingLeft: "0rem !important", paddingRight: "0rem !important" }}>
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
                <CardContent sx={{ p: 2, paddingBottom: "1rem !important" }}>
                  <Typography
                    // gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 600, fontSize: '0.7rem', letterSpacing: "1px" }}
                  >
                    {shelter.name}
                  </Typography>
                  {/* <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, fontSize: '0.8rem' }}>
                    {shelter.full_address || 'Adrese nav norādīta'}
                  </Typography> */}
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
