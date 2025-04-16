// // import React, { useEffect, useState } from 'react';
// // import { Box, Typography, Card, CardContent, Grid, CircularProgress, Container, Alert } from '@mui/material';
// // import { useParams } from 'react-router-dom'; // to get the service id from the URL
// // import axios from 'axios';

// // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// // const ServiceDetail = () => {
// //   const { id } = useParams();  // Get the id from the URL
// //   const [service, setService] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const fetchService = async () => {
// //       const accessToken = localStorage.getItem('access_token');  // Retrieve the access token from localStorage
// //       if (!accessToken) {
// //         setError('You must be logged in to view shelters.');
// //         setLoading(false);
// //         return;
// //       }
// //       try {
// //         const response = await axios.get(`${API_BASE_URL}/services/${id}`,
// //           {
// //             headers: {
// //               Authorization: `Bearer ${accessToken}`,  // Add Authorization header with token
// //             },
// //           }
// //         );
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
// //       <Container component="main" maxWidth="lg" sx={{ paddingLeft: '0rem !important', paddingRight: '0rem !important' }}>
// //         <Alert severity="error">{error}</Alert>
// //       </Container>
// //     );
// //   }

// //   return (
// //     <Container component="main" maxWidth="lg" sx={{ paddingLeft: '0rem !important', paddingRight: '0rem !important' }}>
// //       <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
// //         {service.title}
// //       </Typography>

// //       <Grid container spacing={4} mt={2}>
// //         <Grid item xs={12} sm={12} md={6}>
// //           <Card
// //             elevation={3}
// //             sx={{
// //               borderRadius: 3,
// //               overflow: 'hidden',
// //             }}
// //           >
// //             <CardContent sx={{ p: 2 }}>
// //               <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 600 }}>
// //                 {service.title}
// //               </Typography>
// //               <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
// //                 Category: {service.category}
// //               </Typography>
// //               <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
// //                 {service.description}
// //               </Typography>
// //               <Typography variant="h6" color="text.primary">
// //                 Price: {service.price} EUR
// //               </Typography>
// //             </CardContent>
// //           </Card>
// //         </Grid>

// //         <Grid item xs={12} sm={12} md={6}>
// //           <Typography variant="h5" sx={{ mb: 2 }}>
// //             Service Locations:
// //           </Typography>
// //           {service.locations && service.locations.length > 0 ? (
// //         service.locations.map((location, index) => (
// //           <Card key={index} elevation={2} sx={{ mb: 2 }}>
// //             <CardContent>
// //               <Typography variant="h6" sx={{ fontWeight: 600 }}>
// //                 {location.city}
// //               </Typography>
// //               <Typography variant="body2" color="text.secondary">
// //                 {location.address}
// //               </Typography>

// //               <Typography variant="body2" color="text.secondary">
// //                 Phone: {location.phone_number || 'N/A'}
// //               </Typography>
// //               <Typography variant="body2" color="text.secondary">
// //                 Email: {location.email || 'N/A'}
// //               </Typography>

// //               {/* 💰 Show Price Per Location */}
// //               {location.price && (
// //                 <Typography variant="body2" color="text.primary" sx={{ mt: 1 }}>
// //                   Price: {location.price} EUR
// //                 </Typography>
// //               )}

// //               {/* 🕒 Show Working Hours */}
// //               {location.working_hours && (
// //                 <Box sx={{ mt: 2 }}>
// //                   <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
// //                     Working Hours:
// //                   </Typography>
// //                   {location.working_hours
// //                     .filter((time) => time.from_hour && time.to_hour) // Ensure that there are valid time ranges
// //                     .map((time, index) => (
// //                       <Typography key={index} variant="body2" color="text.secondary">
// //                         {time.day_display}: {time.from_hour} - {time.to_hour}
// //                       </Typography>
// //                     ))}
// //                 </Box>
// //               )}
// //             </CardContent>
// //           </Card>
// //         ))
// //       ) : (
// //         <Typography variant="body2" color="text.secondary">
// //           No locations available.
// //         </Typography>
// //       )}

// //           {/* {service.locations && service.locations.length > 0 ? (
// //             service.locations.map((location, index) => (
// //               <Card key={index} elevation={2} sx={{ mb: 2 }}>
// //                 <CardContent>
// //                   <Typography variant="h6" sx={{ fontWeight: 600 }}>
// //                     {location.city}
// //                   </Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     {location.address}
// //                   </Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     Phone: {location.phone_number || 'N/A'}
// //                   </Typography>
// //                   <Typography variant="body2" color="text.secondary">
// //                     Email: {location.email || 'N/A'}
// //                   </Typography>
// //                 </CardContent>
// //               </Card>
// //             ))
// //           ) : (
// //             <Typography variant="body2" color="text.secondary">
// //               No locations available.
// //             </Typography>
// //           )} */}
// //         </Grid>
// //       </Grid>

// //       <Box sx={{ mt: 4 }}>
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
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 6 }}>
//       {/* Header */}
//       <Box textAlign="center" mb={6}>
//         <Typography variant="h3" fontWeight={600} gutterBottom>
//           {service.title}
//         </Typography>
//         {service.category && (
//           <Chip
//             label={service.category}
//             color="primary"
//             variant="outlined"
//             sx={{ fontSize: '0.9rem', mt: 1 }}
//           />
//         )}
//       </Box>

//       {/* Details & Locations */}
//       <Grid container spacing={5}>
//         {/* Service Details */}
//         <Grid item xs={12} md={6}>
//           <Card elevation={4} sx={{ borderRadius: 3 }}>
//             <CardContent>
//               <Typography variant="h5" fontWeight={600} gutterBottom>
//                 About the Service
//               </Typography>

//               <Divider sx={{ mb: 2 }} />

//               <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
//                 {service.description || 'No description provided.'}
//               </Typography>

//               <Typography variant="h6" color="text.primary">
//                 Price: {service.price} EUR
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Service Locations */}
//         <Grid item xs={12} md={6}>
//           <Typography variant="h5" fontWeight={600} gutterBottom>
//             Available Locations
//           </Typography>

//           {service.locations && service.locations.length > 0 ? (
//             service.locations.map((location, index) => (
//               <Card key={index} elevation={3} sx={{ mb: 3, borderRadius: 3 }}>
//                 <CardContent>
//                   <Typography variant="h6" fontWeight={600}>
//                     {location.city}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     {location.address}
//                   </Typography>

//                   {location.phone_number && (
//                     <Typography variant="body2" color="text.secondary">
//                       📞 {location.phone_number}
//                     </Typography>
//                   )}
//                   {location.email && (
//                     <Typography variant="body2" color="text.secondary">
//                       ✉️ {location.email}
//                     </Typography>
//                   )}

//                   {location.price && (
//                     <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
//                       Price at this location: {location.price} EUR
//                     </Typography>
//                   )}

//                   {location.working_hours && location.working_hours.length > 0 && (
//                     <Box sx={{ mt: 2 }}>
//                       <Typography variant="subtitle2" fontWeight={500}>
//                         Working Hours:
//                       </Typography>
//                       {location.working_hours
//                         .filter((time) => time.from_hour && time.to_hour)
//                         .map((time, idx) => (
//                           <Typography key={idx} variant="body2" color="text.secondary">
//                             {time.day_display}: {time.from_hour} - {time.to_hour}
//                           </Typography>
//                         ))}
//                     </Box>
//                   )}
//                 </CardContent>
//               </Card>
//             ))
//           ) : (
//             <Typography variant="body2" color="text.secondary">
//               No locations available for this service.
//             </Typography>
//           )}
//         </Grid>
//       </Grid>

//       {/* Info Box */}
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
  Grid,
  CircularProgress,
  Container,
  Alert,
  Chip,
  Divider,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

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
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      {/* Title Section */}
      <Box textAlign="center" mb={5}>
        <Typography variant="h3" fontWeight={600}>
          {service.title}
        </Typography>
        {service.category && (
          <Chip
            label={service.category}
            color="primary"
            variant="outlined"
            sx={{ mt: 2, fontSize: '0.9rem' }}
          />
        )}
      </Box>

      {/* Service Description Section */}
      <Box mb={6}>
        <Card elevation={4} sx={{ borderRadius: 3 }}>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              About this service
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {service.description || 'No description provided.'}
            </Typography>

            <Typography variant="h6" color="text.primary">
              Price: {service.price} EUR
            </Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Locations Section - stacked below */}
      <Box>
        <Typography variant="h5" fontWeight={600} gutterBottom>
          Available Locations
        </Typography>

        {service.locations && service.locations.length > 0 ? (
          <Grid container spacing={4} mt={1}>
            {service.locations.map((location, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card elevation={3} sx={{ borderRadius: 3, height: '100%' }}>
                  <CardContent>
                    <Typography variant="h6" fontWeight={600}>
                      {location.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {location.address}
                    </Typography>

                    {location.phone_number && (
                      <Typography variant="body2" color="text.secondary">
                        📞 {location.phone_number}
                      </Typography>
                    )}
                    {location.email && (
                      <Typography variant="body2" color="text.secondary">
                        ✉️ {location.email}
                      </Typography>
                    )}

                    {location.price && (
                      <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
                        Price: {location.price} EUR
                      </Typography>
                    )}

{location.working_hours?.length > 0 && (
  <Box sx={{ mt: 2 }}>
    <Typography variant="subtitle2" fontWeight={500}>
      Working Hours:
    </Typography>
    <Box component="ul" sx={{ listStyle: 'none', pl: 0, mt: 1 }}>
      {location.working_hours
        .filter((time) => time.from_hour && time.to_hour)
        .map((time, idx) => (
          <Box
            key={idx}
            component="li"
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'monospace', // Ensures time spacing looks cleaner
              color: 'text.secondary',
              fontSize: '0.875rem',
              mb: 0.5,
            }}
          >
            <span>{time.day_display}</span>
            <span>
              {time.from_hour.slice(0, 5)} - {time.to_hour.slice(0, 5)}
            </span>
          </Box>
        ))}
    </Box>
  </Box>
)}

                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography variant="body2" color="text.secondary" mt={2}>
            No locations available for this service.
          </Typography>
        )}
      </Box>

      {/* Contact Info */}
      <Box sx={{ mt: 6 }}>
        <Alert severity="info">
          If you are a service provider and would like to update your service details, please contact us.
        </Alert>
      </Box>
    </Container>
  );
};

export default ServiceDetail;
