// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Chip,
//   Grid,
//   CircularProgress,
//   Container,
// } from '@mui/material';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// import axios from 'axios';
// import { useParams, Link } from 'react-router-dom';
// import { BASE_URL } from './config/config';
// // import { useTranslation } from 'react-i18next';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// // Import Custom hook
// import useFontSizes from './utils/getFontSize';
// import LeafletSheltersMap from '../components/LeafletSheltersMap';
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
// const SheltersList = () => {
//    // Retrieve the access token from localStorage
  
//   // const { t } = useTranslation(); // Initialize translation hook
//   const { getTypography } = useFontSizes();
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const colors = ['2474A3', '21ABCD', '31758D', '006980', '476997', '666699', '88AFD2', '8AB9F1'];
//   function getRandomColor() {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     return colors[randomIndex];
//   }
//   const fontColor = 'white';
//   const [shelters, setShelters] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');


//   useEffect(() => {
//     const fetchShelters = async () => {
//       const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
//       if (!accessToken) {
//         setError('You must be logged in to view shelters.');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get(`${API_BASE_URL}/shelters`, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,  // Add Authorization header with token
//           },
//         });
//         setShelters(response.data);
//         console.log("datashelter", response.data)
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
//     <Container component="main" maxWidth="lg" sx={{ paddingLeft: "0rem !important", paddingRight: "0rem !important" }}>
  
//            <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
//            Dzīvnieku patversmes
//                   </Typography>
//       <LeafletSheltersMap shelters={shelters}/>

//       <Grid container spacing={3} style={{ marginTop: '1rem' }}>
//         {shelters.map((shelter) => (
//           <Grid item key={shelter._id} xs={12} sm={6} md={3}>
//             <Card>
//               <Link
//                 to={`/shelters/${shelter.id}`}
//                 color="inherit"
//                 underline="none"
//                 style={{ textDecoration: 'none' }}
//               >
//                 <CardMedia
//                   component="img"
//                   image={`https://placehold.co/600x400/${getRandomColor()}/${fontColor}?text=${
//                     shelter.name
//                   }&font=roboto`}
//                   alt={shelter.name}
//                 />
//               </Link>

//             </Card>
//           </Grid>
//         ))}
//       </Grid>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <Alert severity="info" style={{ marginTop: '1rem', marginBottom: '1rem' }}>
//             <AlertTitle>
//             Piezīme patversmēm
//               </AlertTitle>
//               Ja jūs pārstāvat patversmi un vēlaties, lai tā tiktu parādīta mūsu lietotnē, lūdzu, sazinieties ar mums. Mēs ar prieku sadarbosimies ar jums, lai izceltu jūsu organizāciju un palīdzētu vairāk dzīvniekiem atrast savas mūžīgās mājas.
//           </Alert>
//         </Grid>
//       </Grid>
//       </Container>
 
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
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useFontSizes from './utils/getFontSize';
import LeafletSheltersMap from '../components/LeafletSheltersMap';
import logo from './images/animal_shelter.png'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SheltersList = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const { getTypography } = useFontSizes();

  const [shelters, setShelters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchShelters = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        setError('You must be logged in to view shelters.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URL}/shelters`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
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
                 <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
                 Dzīvnieku patversmes
                 </Typography>

      <LeafletSheltersMap shelters={shelters} />

      <Grid container spacing={4} mt={2}>
        {shelters.map((shelter) => (
          <Grid item key={shelter._id} xs={6} sm={6} md={4} lg={3}>
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
        height: 'auto', // Adjust height as needed
        objectFit: 'cover',
        objectPosition: 'top',
        transform: 'scale(0.95)', // Scale down the image
        position: 'relative', // Needed to position the icon inside the image
      }}
    >

    </CardMedia>
   
                <CardContent sx={{ p: 2 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: 600, fontSize: '1rem' }}
                  >
                    {shelter.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {shelter.street + ", " + shelter.city + ", " + shelter.postal_code || 'Adrese nav norādīta'}
              
                  </Typography>
                </CardContent>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Alert severity="info" sx={{ mt: 5 }}>
        <AlertTitle>Piezīme patversmēm</AlertTitle>
        Ja jūs pārstāvat patversmi un vēlaties, lai tā tiktu parādīta mūsu lietotnē, lūdzu, sazinieties ar mums. Mēs ar prieku sadarbosimies ar jums, lai izceltu jūsu organizāciju un palīdzētu vairāk dzīvniekiem atrast savas mūžīgās mājas.
      </Alert>
    </Container>
  );
};

export default SheltersList;
