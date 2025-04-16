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

// import logo from './images/paw.png'; 

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const ServicesList = () => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
 

//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {

//     const fetchServices = async () => {
//       const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
//       if (!accessToken) {
//         setError('You must be logged in to view shelters.');
//         setLoading(false);
//         return;
//       }
//       try {
//         const response = await axios.get(`${API_BASE_URL}/services/`,
//           {
//             headers: {
//               Authorization: `Bearer ${accessToken}`,  // Add Authorization header with token
//             },
//           }
//         );
//         setServices(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//         setError('Failed to load services. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, []);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Container component="main" maxWidth="lg" sx={{ paddingLeft: '0rem !important', paddingRight: '0rem !important' }}>
//       <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
//         Pakalpojumi
//       </Typography>

//       <Grid container spacing={4} mt={2}>
//         {services.map((service) => (
//           <Grid item key={service.id} xs={6} sm={6} md={4} lg={3}>
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
//               <Link to={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                 <CardMedia
//                   component="img"
//                   image={logo}
//                   alt={service.title}
//                   sx={{
//                     width: '100%',
//                     height: 'auto',
//                     objectFit: 'cover',
//                     objectPosition: 'top',
//                     transform: 'scale(0.95)',
//                     position: 'relative',
//                   }}
//                 />
//                 <CardContent sx={{ p: 2 }}>
//                   <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 600, fontSize: '1rem' }}>
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {service.category}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                     {service.description || 'No description available'}
//                   </Typography>
//                   <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
//                     Price: {service.price} EUR
//                   </Typography>
//                 </CardContent>
//               </Link>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Alert severity="info" sx={{ mt: 5 }}>
//         <AlertTitle>Note</AlertTitle>
//         If you are a service provider and would like to list your services on our platform, please contact us. We would be happy to collaborate with you.
//       </Alert>
//     </Container>
//   );
// };

// export default ServicesList;
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
  Button,
  ButtonGroup,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';

import logo from './images/paw.png';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const categoryMap = {
  1: 'Pet Sitting',
  2: 'Dog Walking',
  3: 'Grooming',
  4: 'Training',
  5: 'Boarding',
};

const ServicesList = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category');

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchServices = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        setError('You must be logged in to view services.');
        setLoading(false);
        return;
      }

      try {
        let url = `${API_BASE_URL}/services/`;
        if (selectedCategory) {
          url += `?category=${selectedCategory}`;
        }

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setServices(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching services:', error);
        setError('Failed to load services. Please try again later.');
        setLoading(false);
      }
    };

    fetchServices();
  }, [selectedCategory]);

  const handleCategoryClick = (categoryId) => {
    if (categoryId === null) {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container component="main" maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
      <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
        Pakalpojumi
      </Typography>

      <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} mb={4}>
        <Button
          variant={!selectedCategory ? 'contained' : 'outlined'}
          onClick={() => handleCategoryClick(null)}
        >
          All
        </Button>
        {Object.entries(categoryMap).map(([id, name]) => (
          <Button
            key={id}
            variant={selectedCategory === id ? 'contained' : 'outlined'}
            onClick={() => handleCategoryClick(id)}
          >
            {name}
          </Button>
        ))}
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

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
                  <Typography gutterBottom variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {categoryMap[service.category] || 'Other'}
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
        If you are a service provider and would like to list your services on our platform, please contact us.
      </Alert>
    </Container>
  );
};

export default ServicesList;
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
// import { Link, useSearchParams } from 'react-router-dom';

// import logo from './images/paw.png'; // This is your default logo
// import petSittingImage from './images/services/pet_sitting.svg';  // Category Image for Pet Sitting
// import dogWalkingImage from './images/services/pet_walking.svg';  // Category Image for Dog Walking
// import groomingImage from './images/services/pet_grooming.svg';  // Category Image for Grooming
// import trainingImage from './images/services/pet_training.svg';  // Category Image for Training
// import boardingImage from './images/services/pet_boarding.svg';  // Category Image for Boarding
// import artImage from './images/services/pet_art.svg'; 
// import breedersImage from './images/services/pet_breeders.svg';
// import burialImage from './images/services/pet_burial_services.svg'; 
// import insuranceImage from './images/services/pet_insurance.svg'; 
// import legalImage from './images/services/pet_legal_services.svg'; 
// import photographyImage from './images/services/pet_photography.svg'; 
// import rescueImage from './images/services/pet_rescue_and_search.svg'; 
// import suppliesImage from './images/services/pet_supplies_and_accessories.svg';
// import transportationImage from './images/services/pet_transportation.svg'; 
// import veterinaryImage from './images/services/pet_veterinary_services.svg'; 
// import otherImage from './images/services/other_services.svg'; 

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const categoryMap = {
//   1: { name: 'Pet Sitting', image: petSittingImage },
//   2: { name: 'Dog Walking', image: dogWalkingImage },
//   3: { name: 'Grooming', image: groomingImage },
//   4: { name: 'Training', image: trainingImage },
//   5: { name: 'Boarding', image: boardingImage },
//   6: { name: 'Art', image: artImage },
//   7: { name: 'Pet Breeders', image: breedersImage },
//   8: { name: 'Pet Burial', image: burialImage },
//   9: { name: 'Pet Insurance', image: insuranceImage },
//   10: { name: 'Legal', image: legalImage },
//   11: { name: 'Photography', image: photographyImage },
//   11: { name: 'Pet Rescue', image: rescueImage },
//   12: { name: 'Accessories', image: suppliesImage },
//   13: { name: 'Transportation', image: transportationImage },
//   14: { name: 'Veterinary', image: veterinaryImage },
//   15: { name: 'Other', image: otherImage },

// };

// const ServicesList = () => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));

//   const [searchParams, setSearchParams] = useSearchParams();
//   const selectedCategory = searchParams.get('category');

//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchServices = async () => {
//       const accessToken = localStorage.getItem('access_token');
//       if (!accessToken) {
//         setError('You must be logged in to view services.');
//         setLoading(false);
//         return;
//       }

//       try {
//         let url = `${API_BASE_URL}/services/`;
//         if (selectedCategory) {
//           url += `?category=${selectedCategory}`;
//         }

//         const response = await axios.get(url, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });

//         setServices(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching services:', error);
//         setError('Failed to load services. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchServices();
//   }, [selectedCategory]);

//   const handleCategoryClick = (categoryId) => {
//     if (categoryId === null) {
//       setSearchParams({});
//     } else {
//       setSearchParams({ category: categoryId });
//     }
//   };

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   return (
//     <Container component="main" maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
//       <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
//         Pakalpojumi
//       </Typography>

//       {/* Category Cards */}
//       <Grid container spacing={4} mb={5} justifyContent="center">
//         {Object.entries(categoryMap).map(([id, { name, image }]) => (
//           <Grid item key={id} xs={6} sm={4} md={3} lg={2}>
//             <Card
//               elevation={3}
//               sx={{
//                 borderRadius: 3,
//                 overflow: 'hidden',
//                 cursor: 'pointer'
//                 // transition: 'transform 0.2s ease',
//                 // '&:hover': {
//                 //   transform: 'scale(1.05)',
//                 // },
//               }}
//               onClick={() => handleCategoryClick(id)}
//               // sx={{ cursor: 'pointer' }}
//             >
//               <CardMedia
//                 component="img"
//                 image={image}
//                 alt={name}
//                 sx={{
//                   width: '100%',
//                   height: 150,
//                   objectFit: 'cover',
//                   objectPosition: 'center',
//                 }}
//               />
//               <CardContent sx={{ textAlign: 'center' }}>
//                 <Typography variant="h6">{name}</Typography>
//               </CardContent>
//             </Card>
//           </Grid>
//         ))}

//         {/* 'All' Category */}
//         <Grid item xs={6} sm={4} md={3} lg={2}>
//           <Card
//             elevation={3}
//             sx={{
//               borderRadius: 3,
//               overflow: 'hidden',
//               transition: 'transform 0.2s ease',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//               },
//             }}
//             onClick={() => handleCategoryClick(null)}
//             // sx={{ cursor: 'pointer' }}
//           >
//             <CardMedia
//               component="img"
//               image={logo}
//               alt="All Services"
//               sx={{
//                 width: '100%',
//                 height: 150,
//                 objectFit: 'cover',
//                 objectPosition: 'center',
//               }}
//             />
//             <CardContent sx={{ textAlign: 'center' }}>
//               <Typography variant="h6">All Services</Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {error && (
//         <Alert severity="error" sx={{ mb: 3 }}>
//           {error}
//         </Alert>
//       )}

//       {/* Service Cards */}
//       <Grid container spacing={4} mt={2}>
//         {services.map((service) => (
//           <Grid item key={service.id} xs={6} sm={6} md={4} lg={3}>
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
//               <Link to={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
//                 <CardMedia
//                   component="img"
//                   image={logo}
//                   alt={service.title}
//                   sx={{
//                     width: '100%',
//                     height: 'auto',
//                     objectFit: 'cover',
//                     objectPosition: 'top',
//                     transform: 'scale(0.95)',
//                     position: 'relative',
//                   }}
//                 />
//                 <CardContent sx={{ p: 2 }}>
//                   <Typography gutterBottom variant="h6" sx={{ fontWeight: 600, fontSize: '1rem' }}>
//                     {service.title}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {categoryMap[service.category]?.name || 'Other'}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
//                     {service.description || 'No description available'}
//                   </Typography>
//                   <Typography variant="body2" color="text.primary" sx={{ mt: 2 }}>
//                     Price: {service.price} EUR
//                   </Typography>
//                 </CardContent>
//               </Link>
//             </Card>
//           </Grid>
//         ))}
//       </Grid>

//       <Alert severity="info" sx={{ mt: 5 }}>
//         <AlertTitle>Note</AlertTitle>
//         If you are a service provider and would like to list your services on our platform, please contact us.
//       </Alert>
//     </Container>
//   );
// };

// export default ServicesList;
