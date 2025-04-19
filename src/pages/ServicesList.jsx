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
      // const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
      // if (!accessToken) {
      //   setError('You must be logged in to view shelters.');
      //   setLoading(false);
      //   return;
      // }
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
// Good chips
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
//   Button,
//   ButtonGroup,
// } from '@mui/material';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import axios from 'axios';
// import { Link, useSearchParams } from 'react-router-dom';

// import logo from './images/paw.png';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const categoryMap = {
//   1: 'Pet Sitting',
//   2: 'Dog Walking',
//   3: 'Grooming',
//   4: 'Training',
//   5: 'Boarding',
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

//       <Box display="flex" justifyContent="center" flexWrap="wrap" gap={2} mb={4}>
//         <Button
//           variant={!selectedCategory ? 'contained' : 'outlined'}
//           onClick={() => handleCategoryClick(null)}
//         >
//           All
//         </Button>
//         {Object.entries(categoryMap).map(([id, name]) => (
//           <Button
//             key={id}
//             variant={selectedCategory === id ? 'contained' : 'outlined'}
//             onClick={() => handleCategoryClick(id)}
//           >
//             {name}
//           </Button>
//         ))}
//       </Box>

//       {error && (
//         <Alert severity="error" sx={{ mb: 3 }}>
//           {error}
//         </Alert>
//       )}

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
//                     {categoryMap[service.category] || 'Other'}
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
              // <Link to={`/services/${service.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              //   <CardMedia
              //     component="img"
              //     image={logo}
              //     alt={service.title}
              //     sx={{
              //       width: '100%',
              //       height: 'auto',
              //       objectFit: 'cover',
              //       objectPosition: 'top',
              //       transform: 'scale(0.95)',
              //       position: 'relative',
              //     }}
              //   />
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
// import React, { useState, useEffect } from 'react';
// import {
//   Grid, Button, CircularProgress, Box, Container,
//   Alert, Drawer, useTheme, useMediaQuery, Pagination
// } from '@mui/material';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { useLocation, useNavigate } from 'react-router-dom';

// import ServiceCard from './ServiceCard';
// import ServiceCardSkeleton from './ServiceCardSkeleton';
// import Sidebar from './ServiceSidebar'; // You need to implement this
// import LeafletServicesMap from '../components/LeafletServicesMap';
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const ServicesList = () => {
//   const [services, setServices] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
//   const [filters, setFilters] = useState({ category: '', search: '' });

//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//  const [centerCoords, setCenterCoords] = useState([56.946285, 24.105078]); 
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const category = queryParams.get('category') || '';
//     const search = queryParams.get('search') || '';
//     const page = parseInt(queryParams.get('page')) || 1;

//     setFilters({ category, search });
//     setPagination((prev) => ({ ...prev, page }));

//     fetchServices({ category, search, page });
//   }, [location.search]);

//   const fetchServices = async ({ category, search, page }) => {
//     try {
//       const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
//       if (!accessToken) {
//         setError('You must be logged in to view shelters.');
//         setLoading(false);
//         return;
//       }
//       setLoading(true);
//       setError(null);

//       const queryParams = new URLSearchParams();
//       if (category) queryParams.append('category', category);
//       if (search) queryParams.append('search', search);
//       queryParams.append('page', page);

//       const res = await fetch(`${API_BASE_URL}/services/?${queryParams}`,  {
//                   headers: {
//                     Authorization: `Bearer ${accessToken}`,
//                   },
//                 });
//       if (!res.ok) throw new Error('Failed to fetch services');

//       const data = await res.json();
//       setServices(data.results);
//       setPagination((prev) => ({
//         ...prev,
//         totalPages: Math.ceil(data.count / 8),
//       }));
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePaginationChange = (e, page) => {
//     setPagination((prev) => ({ ...prev, page }));
//     const queryParams = new URLSearchParams(location.search);
//     queryParams.set('page', page);
//     navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
//   };

//   const handleResetFilters = () => {
//     setFilters({ category: '', search: '' });
//     navigate(`${window.location.pathname}?page=1`, { replace: true });
//   };

//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//     setPagination((prev) => ({ ...prev, page: 1 }));

//     const queryParams = new URLSearchParams();
//     if (newFilters.category) queryParams.append('category', newFilters.category);
//     if (newFilters.search) queryParams.append('search', newFilters.search);
//     queryParams.append('page', 1);

//     navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
//   };

//   return (
//     <Container maxWidth="lg" sx={{ paddingLeft: "0rem !important", paddingRight: "0rem !important" }}>
//       <Grid container spacing={3}>
//         {!isMobile && (
//           <Grid item xs={12} md={3}>
//             <Sidebar
//               filters={filters}
//               onFilterChange={handleFilterChange}
//               onReset={handleResetFilters}
//             />
//           </Grid>
//         )}

//         <Grid item xs={12} md={isMobile ? 12 : 9}>
//           {/* <Box
//             py={2}
//             sx={{
//               display: { xs: 'flex', md: 'none' },
//               justifyContent: 'flex-end',
//             }}
//           >
//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               onClick={() => setDrawerOpen(true)}
//               startIcon={<FilterListIcon />}
//             >
//               Filter
//             </Button>
//           </Box> */}

//              <Box
              
//                       sx={{
//                         marginBottom: { xs: 'none', md: '1rem' },
//                         justifyContent: 'flex-end',
//                       }}
//                     >
//                       <LeafletServicesMap services={services} centerCoords={centerCoords} />
//                     {/* <LeafletClusterMap pets={pets} centerCoords={centerCoords} /> */}
//                     </Box>
//                     <Box
//                       py={2}
//                       sx={{
//                         display: { xs: 'flex', md: 'none' },
//                         justifyContent: 'flex-end',
//                       }}
//                     >
//                       <Button
//                         variant="contained"
//                         color="primary"
//                         size="small"
//                         onClick={() => setDrawerOpen(true)}
//                         startIcon={<FilterListIcon />}
//                       >
//                         Filter
//                       </Button>
//                     </Box>

//           {/* Drawer for mobile */}
//           <Drawer
//             anchor="left"
//             open={drawerOpen}
//             onClose={() => setDrawerOpen(false)}
//           >
//             <Box sx={{ width: 320, p: 2 }}>
//               <Sidebar
//                 filters={filters}
//                 onFilterChange={handleFilterChange}
//                 onReset={handleResetFilters}
//               />
//             </Box>
//           </Drawer>
// {/* <LeafletServicesMap services={services} centerCoords={centerCoords} /> */}
//           {loading ? (
//             <Grid container spacing={2}>
//               {[...Array(8)].map((_, index) => (
//                 <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
//                   <ServiceCardSkeleton />
//                 </Grid>
//               ))}
//             </Grid>
//           ) : error ? (
//             <Alert severity="error">{error}</Alert>
//           ) : (
//             <>
//               <Grid container spacing={2}>
//                 {services && services.length > 0 && services.map((service) => (
//                   <Grid item xs={12} sm={6} md={4} lg={3} key={service.id}>
//                     <ServiceCard service={service} />
//                   </Grid>
//                 ))}
//               </Grid>
              
//               <Pagination
//                 color="primary"
//                 sx={{ mt: '2rem' }}
//                 page={pagination.page}
//                 count={pagination.totalPages}
//                 onChange={handlePaginationChange}
//               />
//             </>
//           )}
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ServicesList;
import React, { useState, useEffect } from 'react';
import {
  Grid, Button, CircularProgress, Box, Container,
  Alert, Drawer, useTheme, useMediaQuery, Pagination
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLocation, useNavigate } from 'react-router-dom';

import ServiceCard from './ServiceCard';
import ServiceCardSkeleton from './ServiceCardSkeleton';
import Sidebar from './ServiceSidebar'; // You need to implement this
import LeafletServicesMap from '../components/LeafletServicesMap';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [filters, setFilters] = useState({ category: '', search: '' });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [centerCoords, setCenterCoords] = useState([56.946285, 24.105078]);
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // const handlePanToLocation = (lat, lng) => {
  //   console.log('lat, lng', lat, lng);
  //   setCenterCoords([lat, lng]);
  // };



  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get('category') || ''; // One value only
    const search = queryParams.get('search') || ''; // One value only
    const page = parseInt(queryParams.get('page')) || 1;

    setFilters({ category, search });
    setPagination({page, totalPages: pagination.totalPages });

    fetchServices({ category, search, page });
  }, [location.search]);

  const fetchServices = async ({ category, search, page }) => {
    try {
      // const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
      // if (!accessToken) {
      //   setError('You must be logged in to view shelters.');
      //   setLoading(false);
      //   return;
      // }
      setLoading(true);
      setError(null);

      const queryParams = new URLSearchParams();
      if (category) queryParams.append('category', category); // One category only
      if (search) queryParams.append('search', search);
      queryParams.append('page', page);

      const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
      navigate(newUrl, { replace: true });

      const res = await fetch(`${API_BASE_URL}/services/?${queryParams}`);
      if (!res.ok) throw new Error('Failed to fetch services');

      const data = await res.json();
      setServices(data.results);
      setPagination((prev) => ({
        ...prev,
        totalPages: Math.ceil(data.count / 8),
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePaginationChange = (e, page) => {
    setPagination((prev) => ({ ...prev, page }));
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', page);
    navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
  };

  const handleResetFilters = () => {
    setFilters({ category: '', search: '' }); // Reset to empty values
    setPagination((prev) => ({ ...prev, page: 1 }));
    navigate(`${window.location.pathname}?page=1`, { replace: true });
  };

  const handleFilterChange = (newFilters) => {
    // Ensure each filter only has one value
    if (newFilters.category) {
      newFilters.category = newFilters.category;  // One value only
    }
    if (newFilters.search) {
      newFilters.search = newFilters.search;  // One value only
    }

    setFilters(newFilters);
    setPagination((prev) => ({ ...prev, page: 1 }));

    const queryParams = new URLSearchParams();

    // Add status filter to query params (only one value allowed)
    if (newFilters.category) queryParams.append('category', newFilters.category);
    if (newFilters.search) queryParams.append('search', newFilters.search);

    // Add the page number
    queryParams.append('page', 1);

    // Update the URL with the new query params
    navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
  };

  return (
    <Container maxWidth="lg" sx={{ paddingLeft: "0rem !important", paddingRight: "0rem !important" }}>
      <Grid container spacing={3}>
        {!isMobile && (
          <Grid item xs={12} md={3}>
            <Sidebar
              filters={filters}
              setFilters={setFilters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
            />
          </Grid>
        )}

        <Grid item xs={12} md={isMobile ? 12 : 9}>
                <Box
              
                      sx={{
                        marginBottom: { xs: 'none', md: '1rem' },
                        justifyContent: 'flex-end',
                      }}
                    >
                      <LeafletServicesMap services={services} centerCoords={centerCoords} />
                    </Box>
                    <Box
                      py={2}
                      sx={{
                        display: { xs: 'flex', md: 'none' },
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => setDrawerOpen(true)}
                        startIcon={<FilterListIcon />}
                      >
                        Filter
                      </Button>
                    </Box>

          {/* Drawer for mobile */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box sx={{ width: 300, p: 2 }}>
              <Sidebar
                filters={filters}
                setFilters={setFilters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
            </Box>
          </Drawer>

          {loading ? (
            <Grid container spacing={2}>
              {[...Array(8)].map((_, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <ServiceCardSkeleton />
                </Grid>
              ))}
            </Grid>
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <>
              <Grid container spacing={2}>
                {services && services.length > 0 && services.map((service) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={service.id}>
                    <ServiceCard service={service}  
                    filters={filters}
                        pagination={pagination}
                         />
                  </Grid>
                ))}
              </Grid>
              
              <Pagination
                color="primary"
                sx={{ mt: '2rem' }}
                page={pagination.page}
                count={pagination.totalPages}
                onChange={handlePaginationChange}
              />
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default ServicesList;
