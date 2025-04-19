// // // import React, { useEffect, useState } from 'react';
// // // import { Box, Typography, Card, CardContent, Grid, CircularProgress, Container, Alert } from '@mui/material';
// // // import { useParams } from 'react-router-dom'; // to get the service id from the URL
// // // import axios from 'axios';

// // // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// // // const ServiceDetail = () => {
// // //   const { id } = useParams();  // Get the id from the URL
// // //   const [service, setService] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState('');

// // //   useEffect(() => {
// // //     const fetchService = async () => {
// // //       const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
// // //       if (!accessToken) {
// // //         setError('You must be logged in to view shelters.');
// // //         setLoading(false);
// // //         return;
// // //       }
// // //       try {
// // //         const response = await axios.get(`${API_BASE_URL}/services/${id}`,
// // //           {
// // //             headers: {
// // //               Authorization: `Bearer ${accessToken}`,  // Add Authorization header with token
// // //             },
// // //           }
// // //         );
// // //         setService(response.data);
// // //         setLoading(false);
// // //       } catch (error) {
// // //         console.error('Error fetching service details:', error);
// // //         setError('Failed to load service details. Please try again later.');
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchService();
// // //   }, [id]);

// // //   if (loading) {
// // //     return (
// // //       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
// // //         <CircularProgress />
// // //       </Box>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <Container component="main" maxWidth="lg" sx={{ paddingLeft: '0rem !important', paddingRight: '0rem !important' }}>
// // //         <Alert severity="error">{error}</Alert>
// // //       </Container>
// // //     );
// // //   }

// // //   return (
// // //     <Container component="main" maxWidth="lg" sx={{ paddingLeft: '0rem !important', paddingRight: '0rem !important' }}>
// // //       <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
// // //         {service.title}
// // //       </Typography>

// // //       <Grid container spacing={4} mt={2}>
// // //         <Grid item xs={12} sm={12} md={6}>
// // //           <Card
// // //             elevation={3}
// // //             sx={{
// // //               borderRadius: 3,
// // //               overflow: 'hidden',
// // //             }}
// // //           >
// // //             <CardContent sx={{ p: 2 }}>
// // //               <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
// // //                 {service.title}
// // //               </Typography>
// // //               <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
// // //                 Category: {service.category}
// // //               </Typography>
// // //               <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
// // //                 {service.description}
// // //               </Typography>
// // //               <Typography variant="h6" color="text.primary">
// // //                 Price: {service.price} EUR
// // //               </Typography>
// // //             </CardContent>
// // //           </Card>
// // //         </Grid>

// // //         <Grid item xs={12} sm={12} md={6}>
// // //           <Typography variant="h5" sx={{ mb: 2 }}>
// // //             Service Locations:
// // //           </Typography>
// // //           {service.locations && service.locations.length > 0 ? (
// // //         service.locations.map((location, index) => (
// // //           <Card key={index} elevation={2} sx={{ mb: 2 }}>
// // //             <CardContent>
// // //               <Typography variant="h6" sx={{ fontWeight: 600 }}>
// // //                 {location.city}
// // //               </Typography>
// // //               <Typography variant="body2" color="text.secondary">
// // //                 {location.address}
// // //               </Typography>

// // //               <Typography variant="body2" color="text.secondary">
// // //                 Phone: {location.phone_number || 'N/A'}
// // //               </Typography>
// // //               <Typography variant="body2" color="text.secondary">
// // //                 Email: {location.email || 'N/A'}
// // //               </Typography>

// // //               {/* 💰 Show Price Per Location */}
// // //               {location.price && (
// // //                 <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
// // //                   Price: {location.price} EUR
// // //                 </Typography>
// // //               )}

// // //               {/* 🕒 Show Working Hours */}
// // //               {location.working_hours && (
// // //                 <Box sx={{ mt: 2 }}>
// // //                   <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
// // //                     Working Hours:
// // //                   </Typography>
// // //                   {location.working_hours
// // //                     .filter((time) => time.from_hour && time.to_hour) // Ensure that there are valid time ranges
// // //                     .map((time, index) => (
// // //                       <Typography key={index} variant="body2" color="text.secondary">
// // //                         {time.day_display}: {time.from_hour} - {time.to_hour}
// // //                       </Typography>
// // //                     ))}
// // //                 </Box>
// // //               )}
// // //             </CardContent>
// // //           </Card>
// // //         ))
// // //       ) : (
// // //         <Typography variant="body2" color="text.secondary">
// // //           No locations available.
// // //         </Typography>
// // //       )}

// // //           {/* {service.locations && service.locations.length > 0 ? (
// // //             service.locations.map((location, index) => (
// // //               <Card key={index} elevation={2} sx={{ mb: 2 }}>
// // //                 <CardContent>
// // //                   <Typography variant="h6" sx={{ fontWeight: 600 }}>
// // //                     {location.city}
// // //                   </Typography>
// // //                   <Typography variant="body2" color="text.secondary">
// // //                     {location.address}
// // //                   </Typography>
// // //                   <Typography variant="body2" color="text.secondary">
// // //                     Phone: {location.phone_number || 'N/A'}
// // //                   </Typography>
// // //                   <Typography variant="body2" color="text.secondary">
// // //                     Email: {location.email || 'N/A'}
// // //                   </Typography>
// // //                 </CardContent>
// // //               </Card>
// // //             ))
// // //           ) : (
// // //             <Typography variant="body2" color="text.secondary">
// // //               No locations available.
// // //             </Typography>
// // //           )} */}
// // //         </Grid>
// // //       </Grid>

// // //       <Box sx={{ mt: 4 }}>
// // //         <Alert severity="info">
// // //           If you are a service provider and would like to update your service details, please contact us.
// // //         </Alert>
// // //       </Box>
// // //     </Container>
// // //   );
// // // };

// // // export default ServiceDetail;
// // import React, { useEffect, useState } from 'react';
// // import {
// //   Box,
// //   Typography,
// //   Card,
// //   CardContent,
// //   Grid,
// //   CircularProgress,
// //   Container,
// //   Alert,
// //   Chip,
// //   Divider,
// // } from '@mui/material';
// // import { useParams } from 'react-router-dom';
// // import axios from 'axios';

// // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// // const ServiceDetail = () => {
// //   const { id } = useParams();
// //   const [service, setService] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const fetchService = async () => {
// //       const accessToken = localStorage.getItem('access_token');
// //       if (!accessToken) {
// //         setError('You must be logged in to view service details.');
// //         setLoading(false);
// //         return;
// //       }

// //       try {
// //         const response = await axios.get(`${API_BASE_URL}/services/${id}`, {
// //           headers: {
// //             Authorization: `Bearer ${accessToken}`,
// //           },
// //         });
// //         setService(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error('Error fetching service details:', error);
// //         setError('Failed to load service details. Please try again later.');
// //         setLoading(false);
// //       }
// //     };

// //     fetchService();
// //   }, [id]);

// //   if (loading) {
// //     return (
// //       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
// //         <CircularProgress />
// //       </Box>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <Container maxWidth="md">
// //         <Alert severity="error" sx={{ mt: 4 }}>
// //           {error}
// //         </Alert>
// //       </Container>
// //     );
// //   }

// //   return (
// //     <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
// //       {/* Header */}
// //       <Box textAlign="center" mb={6}>
// //         <Typography variant="h3" fontWeight={600} gutterBottom>
// //           {service.title}
// //         </Typography>
// //         {service.category && (
// //           <Chip
// //             label={service.category}
// //             color="primary"
// //             variant="outlined"
// //             sx={{ fontSize: '0.9rem', mt: 1 }}
// //           />
// //         )}
// //       </Box>

// //       {/* Details & Locations */}
// //       <Grid container spacing={5}>
// //         {/* Service Details */}
// //         <Grid item xs={12} md={6}>
// //           <Card elevation={4} sx={{ borderRadius: 3 }}>
// //             <CardContent>
// //               <Typography variant="h5" fontWeight={600} gutterBottom>
// //                 About the Service
// //               </Typography>

// //               <Divider sx={{ mb: 2 }} />

// //               <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
// //                 {service.description || 'No description provided.'}
// //               </Typography>

// //               <Typography variant="h6" color="text.primary">
// //                 Price: {service.price} EUR
// //               </Typography>
// //             </CardContent>
// //           </Card>
// //         </Grid>

// //         {/* Service Locations */}
// //         <Grid item xs={12} md={6}>
// //           <Typography variant="h5" fontWeight={600} gutterBottom>
// //             Available Locations
// //           </Typography>

// //           {service.locations && service.locations.length > 0 ? (
// //             service.locations.map((location, index) => (
// //               <Card key={index} elevation={3} sx={{ mb: 3, borderRadius: 3 }}>
// //                 <CardContent>
// //                   <Typography variant="h6" fontWeight={600}>
// //                     {location.city}
// //                   </Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     {location.address}
// //                   </Typography>

// //                   {location.phone_number && (
// //                     <Typography variant="body2" color="text.secondary">
// //                       📞 {location.phone_number}
// //                     </Typography>
// //                   )}
// //                   {location.email && (
// //                     <Typography variant="body2" color="text.secondary">
// //                       ✉️ {location.email}
// //                     </Typography>
// //                   )}

// //                   {location.price && (
// //                     <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
// //                       Price at this location: {location.price} EUR
// //                     </Typography>
// //                   )}

// //                   {location.working_hours && location.working_hours.length > 0 && (
// //                     <Box sx={{ mt: 2 }}>
// //                       <Typography variant="subtitle2" fontWeight={500}>
// //                         Working Hours:
// //                       </Typography>
// //                       {location.working_hours
// //                         .filter((time) => time.from_hour && time.to_hour)
// //                         .map((time, idx) => (
// //                           <Typography key={idx} variant="body2" color="text.secondary">
// //                             {time.day_display}: {time.from_hour} - {time.to_hour}
// //                           </Typography>
// //                         ))}
// //                     </Box>
// //                   )}
// //                 </CardContent>
// //               </Card>
// //             ))
// //           ) : (
// //             <Typography variant="body2" color="text.secondary">
// //               No locations available for this service.
// //             </Typography>
// //           )}
// //         </Grid>
// //       </Grid>

// //       {/* Info Box */}
// //       <Box sx={{ mt: 6 }}>
// //         <Alert severity="info">
// //           If you are a service provider and would like to update your service details, please contact us.
// //         </Alert>
// //       </Box>
// //     </Container>
// //   );
// // };

// // export default ServiceDetail;
// import React, { useEffect, useState } from 'react';
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   Grid,
//   CircularProgress,
//   Container,
//   Alert,
//   Chip,
//   Divider,
//   CardMedia,
// } from '@mui/material';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const ServiceDetail = () => {
//   const { id } = useParams();
//   const [service, setService] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchService = async () => {
//       const accessToken = localStorage.getItem('access_token');
//       if (!accessToken) {
//         setError('You must be logged in to view service details.');
//         setLoading(false);
//         return;
//       }

//       try {
//         const response = await axios.get(`${API_BASE_URL}/services/${id}`, {
//           headers: {
//             Authorization: `Bearer ${accessToken}`,
//           },
//         });
//         setService(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching service details:', error);
//         setError('Failed to load service details. Please try again later.');
//         setLoading(false);
//       }
//     };

//     fetchService();
//   }, [id]);

//   if (loading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (error) {
//     return (
//       <Container maxWidth="md">
//         <Alert severity="error" sx={{ mt: 4 }}>
//           {error}
//         </Alert>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
//       {/* Title Section */}
//       <Box textAlign="center" mb={5}>
//         <Typography variant="h3" fontWeight={600}>
//           {service.title}
//         </Typography>

//       </Box>

//       {/* Service Description Section */}
//       <Box mb={6}>
//         <Card elevation={4} sx={{ borderRadius: 3 }}>
//           <CardContent sx={{ p: { xs: 3, md: 4 } }}>
//             <Typography variant="h5" fontWeight={600} gutterBottom>
//               About this service
//             </Typography>
//             <CardMedia
//               component="img"
//               alt={"x"}
//               // height="500"
//               image={service.service_image}
//               sx={{
//                 height: {
//                   xs: 380, 
//                   sm: 420,
//                   md: 460,
//                   lg: 500, 
//                 },
//                 objectFit: 'cover',
//               }}
//             />

//             <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//               {service.description || 'No description provided.'}
//             </Typography>

//             <Typography variant="h6" color="text.primary">
//               Price: {service.price} EUR
//             </Typography>
//           </CardContent>
//         </Card>
//       </Box>

//       {/* Locations Section - stacked below */}
//       <Box>
//         <Typography variant="h5" fontWeight={600} gutterBottom>
//           Available Locations
//         </Typography>

//         {service.locations && service.locations.length > 0 ? (
//           <Grid container spacing={4} mt={1}>
//             {service.locations.map((location, index) => (
//               <Grid item xs={12} sm={6} md={4} key={index}>
//                 <Card elevation={3} sx={{ borderRadius: 3, height: '100%' }}>
//                   <CardContent>
//                     <Typography variant="h6" fontWeight={600}>
//                       {location.city}
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                       {location.address}
//                     </Typography>

//                     {location.phone_number && (
//                       <Typography variant="body2" color="text.secondary">
//                         📞 {location.phone_number}
//                       </Typography>
//                     )}
//                     {location.email && (
//                       <Typography variant="body2" color="text.secondary">
//                         ✉️ {location.email}
//                       </Typography>
//                     )}

//                     {location.price && (
//                       <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
//                         Price: {location.price} EUR
//                       </Typography>
//                     )}

// {location.working_hours?.length > 0 && (
//   <Box sx={{ mt: 2 }}>
//     <Typography variant="subtitle2" fontWeight={500}>
//       Working Hours:
//     </Typography>
//     <Box component="ul" sx={{ listStyle: 'none', pl: 0, mt: 1 }}>
//       {location.working_hours
//         .filter((time) => time.from_hour && time.to_hour)
//         .map((time, idx) => (
//           <Box
//             key={idx}
//             component="li"
//             sx={{
//               display: 'flex',
//               justifyContent: 'space-between',
//               fontFamily: 'monospace', // Ensures time spacing looks cleaner
//               color: 'text.secondary',
//               fontSize: '0.875rem',
//               mb: 0.5,
//             }}
//           >
//             <span>{time.day_display}</span>
//             <span>
//               {time.from_hour.slice(0, 5)} - {time.to_hour.slice(0, 5)}
//             </span>
//           </Box>
//         ))}
//     </Box>
//   </Box>
// )}

//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         ) : (
//           <Typography variant="body2" color="text.secondary" mt={2}>
//             No locations available for this service.
//           </Typography>
//         )}
//       </Box>

//       {/* Contact Info */}
//       <Box sx={{ mt: 6 }}>
//         <Alert severity="info">
//           If you are a service provider and would like to update your service details, please contact us.
//         </Alert>
//       </Box>
//     </Container>
//   );
// };

// export default ServiceDetail;
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Alert,
  IconButton,
  Chip,
  Divider,
  CardMedia,
  Stack,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { LocationOn, AccessTime, Phone, Email, Euro } from '@mui/icons-material';
import { Facebook, Instagram, Language, YouTube, Twitter, LinkedIn } from '@mui/icons-material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MapIcon from '@mui/icons-material/Map';
import {  Link as MuiLink} from '@mui/material';
import LeafletServiceDetailsMap from '../components/LeafletServiceDetailsMap';
import HolidayCard from './HolidayCard';
import PublicIcon from '@mui/icons-material/Public';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// You can define this helper map at the top of your component file
const platformIcons = {
  Facebook: <Facebook color="primary" fontSize="large" />,
  Instagram: <Instagram sx={{ color: '#E4405F' }} fontSize="large" />,
  Twitter: <Twitter sx={{ color: '#1DA1F2' }} fontSize="large" />,
  LinkedIn: <LinkedIn sx={{ color: '#0077B5' }} fontSize="large" />,
  YouTube: <YouTube sx={{ color: '#FF0000' }} fontSize="large" />,
};


const ServiceDetail = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchService = async () => {
      const accessToken = localStorage.getItem('access_token');
      if (!accessToken) {
        setError('You must be logged in to view service details.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URL}/services/${id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setService(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching service details:', error);
        setError('Failed to load service details. Please try again later.');
        setLoading(false);
      }
    };

    fetchService();
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container maxWidth="md">
        <Alert severity="error" sx={{ mt: 4 }}>
          {error}
        </Alert>
      </Container>
    );
  }

  return (
    // <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
            <Container component="main" maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>

      {/* Service Image */}
      <Box mb={5}>
        <Card elevation={4} sx={{ borderRadius: 4, overflow: 'hidden' }}>
          <CardMedia
            component="img"
            image={service.service_image}
            alt={service.title}
            sx={{ maxHeight: 500, objectFit: 'cover' }}
          />
          <CardContent sx={{ p: { xs: 2, md: 3 }}}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              {service.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {service.description || 'No description provided.'}
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
              <Euro color="action" />
              <Typography variant="body1" fontWeight={500}>
                Base Price: {service.price} EUR
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center" mb={2}>
              <Euro color="action" />
              <Typography variant="body2">
                Price Range: {service.price_min} – {service.price_max} EUR
              </Typography>
            </Stack>

            <Stack direction="row" spacing={2} alignItems="center"  mb={2}>
              <AccessTime color="action" />
              <Typography variant="body2">Price per hour: {service.price_per_hour} EUR</Typography>
            </Stack>
            <Stack direction="row" spacing={2} alignItems="center">
              <AccessTime color="action" />
              <Typography variant="body2">Duration: {service.duration} min</Typography>
            </Stack>
            <Stack direction="row" spacing={1} justifyContent="center" mt={2}>
          <Chip label="Dogs" variant="outlined" />
          <Chip label="Cats" variant="outlined" />
          <Chip label="Veterinary" variant="outlined" />
        </Stack>
          </CardContent>
        </Card>
      </Box>

      {/* <HolidayCard /> */}


      <LeafletServiceDetailsMap shelters={service.locations} />

      {/* Locations */}
        <Typography variant="h5" fontWeight={600} my={3}>
        Vietas
      </Typography>

      {service.locations?.length > 0 ? (
        service.locations.map((location, index) => (
          <Card
            key={index}
            elevation={3}
            sx={{ borderRadius: 4, mb: 4, p: { xs: 2, md: 3 }, backgroundColor: '#fafafa' }}
          >
            {/* <Stack spacing={2}> */}
              {/* <Typography variant="h6" fontWeight={600}>
              <LocationOn fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />{location.city}, {location.street}
              </Typography> */}
              <Box display="flex" alignItems="center" gap={2}>
                                    <IconButton style={{ backgroundColor: '#555', color: '#fff', pointerEvents: 'none' }}>
                                      <LocationOn />
                                    </IconButton> {location.city}, {location.street}
                                  </Box>

              {/* {location.full_address && (
                <Typography variant="body2" color="text.secondary">
                  <LocationOn fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                  {location.full_address}
                </Typography>
              )} */}
              {/* {location.full_address && (
  <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
    <MapIcon fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
    <MuiLink
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.full_address)}`}
      target="_blank"
      rel="noopener"
      underline="hover"
      color="inherit"
    >
      Parādīt google kartē

    </MuiLink>
  </Typography>
)} */}

              {/* {location.phone_number && (
                <Typography variant="body2">
                  <Phone fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                  {location.phone_number}
                </Typography>
              )} */}

              {/* {location.email && (
                <Typography variant="body2">
                  <Email fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
                  {location.email}
                </Typography>
              )} */}

{/* {location.working_hours && (
  <Box mt={2}>
    <Typography variant="subtitle2" fontWeight={500} gutterBottom>
      Darba laiks:
    </Typography>

    <Box component="ul" sx={{ listStyle: 'none', pl: 0, mt: 1 }}>
      {[
        { id: 0, label: 'Pirmdiena' },
        { id: 1, label: 'Otrdiena' },
        { id: 2, label: 'Trešdiena' },
        { id: 3, label: 'Ceturtdiena' },
        { id: 4, label: 'Piektdiena' },
        { id: 5, label: 'Sestdiena' },
        { id: 6, label: 'Svētdiena' },
      ].map((day) => {
        const entry = location.working_hours.find((time) => time.day === day.id);

        return (
          <Box
            key={day.id}
            component="li"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace',
              color: 'text.secondary',
              fontSize: '0.875rem',
              mb: 0.5,
            }}
          >
            <span>{day.label}</span>
            <span>
              {entry && entry.from_hour && entry.to_hour
                ? `${entry.from_hour.slice(0, 5)} - ${entry.to_hour.slice(0, 5)}`
                : 'Brīvdiena'}
            </span>
          </Box>
        );
      })}
    </Box>
  </Box>
)} */}
{/* {location.full_address && (
  <Typography variant="body2" color="text.secondary" sx={{ display: 'flex', alignItems: 'center' }}>
    <LocationOn fontSize="small" sx={{ verticalAlign: 'middle', mr: 1 }} />
    <MuiLink
      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.full_address)}`}
      target="_blank"
      rel="noopener"
      underline="hover"
      color="inherit"
    >
      {location.full_address}
    </MuiLink>
  </Typography>
)} */}


            {/* </Stack> */}
          </Card>
        ))
      ) : (
        <Typography variant="body2" color="text.secondary">
          No locations available for this service.
        </Typography>
      )}
{/* Contact & Social Info */}
<Box mt={6}>
  <Typography variant="h5" fontWeight={600} gutterBottom>
    Kontakti un socilālie tīkli
  </Typography>

  <Card elevation={3} sx={{ borderRadius: 3,p: { xs: 2, md: 3 } }}>
    <Stack spacing={2}>
      {/* Phone */}
      {/* {service.phone_number && service.phone_code && (
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
          <WhatsAppIcon sx={{ mr: 1, color: '#4FCE5D' }} />
          <MuiLink
            href={`tel:${service.phone_code}${service.phone_number}`}
            underline="hover"
            color="inherit"
          >
            {service.phone_code} {service.phone_number}
          </MuiLink>
        </Typography>
      )} */}
            {/* {service.phone_number && service.phone_code && (
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
          <WhatsAppIcon sx={{ mr: 1, color: '#4FCE5D' }} />
          <MuiLink
            href={`tel:${service.phone_code}${service.phone_number}`}
            underline="hover"
            color="inherit"
          >
            {service.phone_code} {service.phone_number}
          </MuiLink>
        </Typography>
      )} */}
       {service.phone_number && service.phone_code && (
      <Box display="flex" alignItems="center" gap={2}>
      <IconButton style={{ backgroundColor: '#555', color: '#4FCE5D', pointerEvents: 'none' }}>
      <WhatsAppIcon />
      </IconButton>   <MuiLink
            href={`tel:${service.phone_code}${service.phone_number}`}
            underline="hover"
            color="inherit"
          >
            {service.phone_code} {service.phone_number}
          </MuiLink>
      </Box>
           )}
      {/* Email */}
      {/* {service.email && (
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
          <Email sx={{ mr: 1, color: '#FFDE21' }} />
          <MuiLink
            href={`mailto:${service.email}`}
            underline="hover"
            color="inherit"
          >
            {service.email}
          </MuiLink>
        </Typography>
      )} */}

{service.email && (
      <Box display="flex" alignItems="center" gap={2}>
      <IconButton style={{ backgroundColor: '#555', color: '#FFDE21', pointerEvents: 'none' }}>
      <Email />
      </IconButton>   <MuiLink
                 href={`mailto:${service.email}`}
            underline="hover"
            color="inherit"
          >
              {service.email}
          </MuiLink>
      </Box>
           )}

      {/* Website */}
      {/* {service.website && (
        <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
          <Language sx={{ mr: 1, color: '#115588' }} />
          <MuiLink
            href={service.website}
            target="_blank"
            rel="noopener"
            underline="hover"
            color="inherit"
          >
            {service.website.replace(/^https?:\/\//, '')}
          </MuiLink>
        </Typography>
      )} */}

{service.website && (
      <Box display="flex" alignItems="center" gap={2}>
      <IconButton style={{ backgroundColor: '#555', color: '#90D5FF', pointerEvents: 'none' }}>
      <Language />
      </IconButton>   <MuiLink
               href={service.website}
               target="_blank"
               rel="noopener"
               underline="hover"
               color="inherit"
          >
               {service.website.replace(/^https?:\/\//, '')}
          </MuiLink>
      </Box>
           )}

      {/* Socials */}
      {Array.isArray(service.social_media) && service.social_media.length > 0 && (
        <>
          {service.social_media.map((social, idx) => {
            const iconMap = {
              Facebook: <Facebook color="primary"  />,
              Instagram: <Instagram sx={{ color: '#E4405F', }} />,
              Twitter: <Twitter sx={{ color: '#1DA1F2',  }} />,
              LinkedIn: <LinkedIn sx={{ color: '#0077B5',  }} />,
              YouTube: <YouTube sx={{ color: '#FF0000',  }} />,
            };

            const icon = iconMap[social.platform] || null;

            return (
              <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}  gap={2}>
                  <IconButton style={{ backgroundColor: '#555', color: '#90D5FF', pointerEvents: 'none' }}>
                  {icon}
      </IconButton> 
              
              <MuiLink
                href={social.profile_url}
                target="_blank"
                rel="noopener"
                underline="hover"
                color="inherit"
              >
                {social.profile_url.replace(/^https?:\/\//, '')}
              </MuiLink>
            </Typography>
              // <Typography
              //   key={idx}
              //   variant="body1"
              //   sx={{ display: 'flex', alignItems: 'center' }}
              // >
              //   {icon}
              //   <MuiLink
              //     href={social.profile_url}
              //     target="_blank"
              //     rel="noopener"
              //     underline="hover"
              //     color="inherit"
              //   >
              //     {social.profile_url.replace(/^https?:\/\//, '')}
              //   </MuiLink>
              // </Typography>
            );
          })}
        </>
      )}
    </Stack>
  </Card>
</Box>


      {/* Footer Contact */}
      {/* <Box sx={{ mt: 6 }}>
  <Alert severity="info">
    Ja esat pakalpojuma sniedzējs un vēlaties atjaunināt sava pakalpojuma informāciju, lūdzu, sazinieties ar mums.
  </Alert>
</Box> */}
<Box sx={{ mt: 4 }}>
  <Alert severity="warning">
    Uzmanību! Pirms jebkādu maksājumu veikšanas pārliecinieties par pakalpojuma sniedzēja uzticamību. Mēs iesakām tikties sabiedriskā vietā un būt piesardzīgiem. Mūsu platforma neuzņemas atbildību par jebkādiem zaudējumiem, krāpniecību vai nesaskaņām starp lietotājiem.
  </Alert>
</Box>


    </Container>
  );
};

export default ServiceDetail;
