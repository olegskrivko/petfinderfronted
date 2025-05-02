// // import React, { useState, useContext, useEffect } from 'react';
// // import { Typography, Grid, Button, TextField, Box, Slider, Snackbar, Alert } from '@mui/material';
// // import { Link } from 'react-router-dom';
// // import { useTranslation } from 'react-i18next';
// // import OneSignal from 'react-onesignal';
// // import Map from '../components/map/LeafletSubscribeMap'; // Assuming you have a Map component for location selection
// // import { AuthContext } from '../middleware/AuthContext';
// // const ProfileNotificationsPage = () => {
// //   const { t } = useTranslation();
// //   //const [radius, setRadius] = useState(20); // Default radius
// //   //const [location, setLocation] = useState(null); // To hold location data
// //   const [openSnackbar, setOpenSnackbar] = useState(false);

// //   // Handle radius change
// //   //   const handleRadiusChange = (event, newValue) => {
// //   //     setRadius(newValue);
// //   //   };

// //   // Handle subscribe button click
// //   const handleSubscribe = () => {
// //     // Logic to subscribe to notifications
// //     setOpenSnackbar(true); // Show success message
// //   };

// //   // Handle map location selection or get current location
// //   const handleLocationChange = (newLocation) => {
// //     setLocation(newLocation);
// //   };

// //   const { user, logout } = useContext(AuthContext);
// //   console.log('user', user);
// //   const [location, setLocation] = useState({
// //     latitude: localStorage.getItem('latitude') || '',
// //     longitude: localStorage.getItem('longitude') || '',
// //   });
// //   const [distance, setDistance] = useState(localStorage.getItem('distance') || '');

// //   // Function to initialize OneSignal
// //   const initOneSignal = async () => {
// //     await OneSignal.init({
// //       appId: '07831676-ef12-409c-895e-3352642c136d',
// //     });

// //     console.log('OneSignal initialized');
// //     OneSignal.Slidedown.promptPush(); // Show subscription prompt after initialization
// //   };

// //   const getLocation = () => {
// //     if (navigator.geolocation) {
// //       navigator.geolocation.getCurrentPosition(
// //         (position) => {
// //           const { latitude, longitude } = position.coords;
// //           setLocation({
// //             latitude: latitude.toString(),
// //             longitude: longitude.toString(),
// //           });
// //           localStorage.setItem('latitude', latitude.toString());
// //           localStorage.setItem('longitude', longitude.toString());
// //         },
// //         (error) => {
// //           console.error('Error getting geolocation: ', error);
// //         },
// //       );
// //     } else {
// //       console.error('Geolocation is not supported by this browser.');
// //     }
// //   };

// //   const addLocationTags = () => {
// //     OneSignal.User.addTags({ ...location, distance });
// //     console.log('Tags added successfully');
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setLocation((prevLocation) => ({
// //       ...prevLocation,
// //       [name]: value,
// //     }));
// //     localStorage.setItem(name, value);
// //   };

// //   const handleDistanceChange = (e) => {
// //     setDistance(e.target.value);
// //     localStorage.setItem('distance', e.target.value);
// //   };

// //   useEffect(() => {
// //     // Retrieve location from localStorage on component mount
// //     const storedLatitude = localStorage.getItem('latitude');
// //     const storedLongitude = localStorage.getItem('longitude');
// //     const storedDistance = localStorage.getItem('distance');

// //     if (storedLatitude && storedLongitude) {
// //       setLocation({
// //         latitude: storedLatitude,
// //         longitude: storedLongitude,
// //       });
// //     }

// //     if (storedDistance) {
// //       setDistance(storedDistance);
// //     }
// //   }, []);

// //   return (
// //     <React.Fragment>
// //       <Grid container spacing={3}>
// //         <Grid item xs={12}>
// //           <Typography variant="h1" textAlign="center" gutterBottom>
// //             {t('profileNotificationsPage.title')}
// //           </Typography>
// //         </Grid>
// //         <Grid item xs={12}>
// //           <Typography variant="body1" paragraph>
// //             {t('profileNotificationsPage.step1')}
// //           </Typography>
// //           <Grid container spacing={2} sx={{ mt: 1, mb: 5 }} justifyContent="center">
// //             <Grid item xs={12}>
// //               <Box p={2} bgcolor="lightgray">
// //                 <Grid container spacing={1} alignItems="center">
// //                   <Grid item xs={12} sm={12}>
// //                     <Button variant="contained" onClick={initOneSignal} fullWidth>
// //                       Subscribe
// //                     </Button>
// //                   </Grid>
// //                 </Grid>
// //               </Box>
// //             </Grid>
// //             <Grid item xs={12}>
// //               <Typography variant="body1" paragraph>
// //                 {t('profileNotificationsPage.step2')}
// //               </Typography>
// //               <Box p={2} bgcolor="lightgray">
// //                 <Grid item xs={12} sm={12}>
// //                   <Button variant="contained" onClick={getLocation} fullWidth>
// //                     {t('profileNotificationsPage.getCurrentLocation')}
// //                   </Button>
// //                 </Grid>
// //               </Box>
// //               <Button
// //                 variant="contained"
// //                 color="primary"
// //                 onClick={() => handleLocationChange('current')}
// //               >
// //                 {t('profileNotificationsPage.getCurrentLocation')}
// //               </Button>
// //               {/* <Typography variant="body1" mt={2}>
// //               {t('profileNotificationsPage.chooseLocation')}
// //             </Typography> */}
// //               <Map onLocationSelect={handleLocationChange} />
// //             </Grid>
// //             <Grid item xs={12}>
// //               <Typography variant="body1" mt={2}>
// //                 {t('profileNotificationsPage.chooseLocation')}
// //               </Typography>
// //             </Grid>
// //             <Grid item xs={12}>
// //               <Typography variant="body1" paragraph>
// //                 {t('profileNotificationsPage.step3')}
// //               </Typography>
// //               <Box p={2} bgcolor="lightgray">
// //                 <Typography variant="body1" mt={2}>
// //                   {t('profileNotificationsPage.setRadius')}
// //                 </Typography>
// //                 <Slider
// //                   value={distance}
// //                   onChange={handleDistanceChange}
// //                   min={1}
// //                   max={20}
// //                   valueLabelDisplay="auto"
// //                   aria-labelledby="radius-slider"
// //                   sx={{ width: '100%' }}
// //                 />
// //               </Box>
// //             </Grid>
// //             <Grid item xs={12}>
// //               <Typography variant="body1" paragraph>
// //                 {t('profileNotificationsPage.step4')}
// //               </Typography>
// //               <Box p={2} bgcolor="lightgray">
// //                 <Grid item xs={12} sm={12}>
// //                   <Button variant="contained" onClick={addLocationTags} color="secondary" fullWidth>
// //                     {t('profileNotificationsPage.save')}
// //                   </Button>
// //                 </Grid>
// //               </Box>
// //             </Grid>
// //           </Grid>

// //           {/* <Typography variant="body1" paragraph>
// //             {t('profileNotificationsPage.step5')}
// //           </Typography> */}
// //         </Grid>
// // <Grid item xs={12}>
// //   <Box p={2} bgcolor="lightgray">
// //     <Grid item xs={12} sm={4}>
// //       <TextField
// //         variant="outlined"
// //         type="text"
// //         name="latitude"
// //         value={location.latitude}
// //         onChange={handleChange}
// //         fullWidth
// //         size="small"
// //         label="Latitude"
// //       />
// //     </Grid>
// //     <Grid item xs={12} sm={4}>
// //       <TextField
// //         variant="outlined"
// //         type="text"
// //         name="longitude"
// //         value={location.longitude}
// //         onChange={handleChange}
// //         fullWidth
// //         size="small"
// //         label="Longitude"
// //       />
// //     </Grid>
// //     <Grid item xs={12} sm={4}>
// //       <TextField
// //         variant="outlined"
// //         type="text"
// //         name="distance"
// //         value={distance}
// //         onChange={handleDistanceChange}
// //         fullWidth
// //         size="small"
// //         label="Distance"
// //       />
// //     </Grid>
// //   </Box>
// //         </Grid>
// //         <Grid item xs={12}>
// //           <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
// //             {/* <Typography variant="body1" mt={2}>
// //               {t('profileNotificationsPage.setRadius')}
// //             </Typography> */}
// //             {/* <Slider
// //               value={radius}
// //               onChange={handleRadiusChange}
// //               min={1}
// //               max={20}
// //               valueLabelDisplay="auto"
// //               aria-labelledby="radius-slider"
// //               sx={{ width: 300 }}
// //             /> */}
// //             <Box mt={2}>
// //               <Button variant="contained" color="secondary" onClick={handleSubscribe}>
// //                 {t('profileNotificationsPage.save')}
// //               </Button>
// //             </Box>
// //             <Typography variant="body2" mt={2}>
// //               {t('profileNotificationsPage.info')}
// //             </Typography>
// //           </Box>
// //         </Grid>
// //       </Grid>
// //       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
// //         <Alert onClose={() => setOpenSnackbar(false)} severity="success">
// //           {t('profileNotificationsPage.successMessage')}
// //         </Alert>
// //       </Snackbar>
// //     </React.Fragment>
// //   );
// // };

// // export default ProfileNotificationsPage;
// import React, { useState, useContext, useEffect } from 'react';
// import { Typography, Grid, Button, TextField, Box, Slider, Snackbar, Alert } from '@mui/material';

// import OneSignal from 'react-onesignal';
// //import Map from '../components/map/LeafletSubscribeMap'; // Ensure correct path
// import Map from "../components/LeafletSubscribeMap";
// // import { AuthContext } from '../middleware/AuthContext';
// import { useAuth } from '../contexts/AuthContext';



// const Notifications = () => {

//   const [openSnackbar, setOpenSnackbar] = useState(false);
//   const [location, setLocation] = useState({
//     latitude: localStorage.getItem('latitude') || '',
//     longitude: localStorage.getItem('longitude') || '',
//   });
//   const [distance, setDistance] = useState(localStorage.getItem('distance') || 20);

// //   const { user, logout } = useContext(AuthContext);
// const { user } = useAuth();
//   useEffect(() => {
//     // Retrieve location from localStorage on component mount
//     const storedLatitude = localStorage.getItem('latitude');
//     const storedLongitude = localStorage.getItem('longitude');
//     const storedDistance = localStorage.getItem('distance');

//     if (storedLatitude && storedLongitude) {
//       setLocation({
//         latitude: storedLatitude,
//         longitude: storedLongitude,
//       });
//     }

//     if (storedDistance) {
//       setDistance(parseInt(storedDistance, 10));
//     }
//   }, []);

//   const initOneSignal = async () => {
//     await OneSignal.init({
//       appId: '07831676-ef12-409c-895e-3352642c136d',
//     });
//     OneSignal.Slidedown.promptPush(); // Show subscription prompt
//   };

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (position) => {
//           const { latitude, longitude } = position.coords;
//           setLocation({
//             latitude: latitude.toString(),
//             longitude: longitude.toString(),
//           });
//           localStorage.setItem('latitude', latitude.toString());
//           localStorage.setItem('longitude', longitude.toString());
//         },
//         (error) => {
//           console.error('Error getting geolocation: ', error);
//         },
//       );
//     } else {
//       console.error('Geolocation is not supported by this browser.');
//     }
//   };

//   const handleLocationChange = (newLocation) => {
//     setLocation({
//       latitude: newLocation.lat.toString(),
//       longitude: newLocation.lng.toString(),
//     });
//     localStorage.setItem('latitude', newLocation.lat.toString());
//     localStorage.setItem('longitude', newLocation.lng.toString());
//   };

//   const handleDistanceChange = (event, newValue) => {
//     setDistance(newValue);
//     localStorage.setItem('distance', newValue);
//   };

//   const handleSubscribe = () => {
//     // 1st step
//     // can you add here initOneSignal(), but after its done, you can continue with next steps, so they should be in sync,

//     // 2nd step
//     OneSignal.User.addTags({ ...location, distance: distance.toString() });
//     setOpenSnackbar(true); // Show success message
//   };

//   //   const handleSubscribe = async () => {
//   //     try {
//   //       // 1st step: Initialize OneSignal
//   //       await initOneSignal();

//   //       // 2nd step: Add tags for notifications
//   //       OneSignal.User.addTags({ ...location, distance: distance.toString() });

//   //       // 3rd step: Show success message
//   //       setOpenSnackbar(true);
//   //     } catch (error) {
//   //       console.error('Subscription failed:', error);
//   //       // Optionally, handle errors here (e.g., show an error message)
//   //     }
//   //   };

//   return (
//     <React.Fragment>
//       <Grid container spacing={3}>
//         <Grid item xs={12} sm={12} md={12} lg={12}>
//           <Typography
//             variant="h1"
//             textAlign="center"
//             sx={{ mb: 3 }}
//             gutterBottom
       
//           >
//             notifications
//           </Typography>
//         </Grid>
//       </Grid>
//       <Grid container spacing={3}>
//         {/* <Grid item xs={12}>
//           <Typography variant="h1" textAlign="center" gutterBottom>
//             {t('profileNotificationsPage.title')}
//           </Typography>
//         </Grid> */}
//         <Grid item xs={12}>
//           <Typography variant="body1" paragraph>
//           step 1
//           </Typography>

//           <Grid container spacing={2} justifyContent="center">
//             <Grid item xs={12}>
//               <Button variant="contained" onClick={initOneSignal} fullWidth>
//               subscribe
//               </Button>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="body1" paragraph>
//            step 2
//           </Typography>

//           {/* <Grid container spacing={2} justifyContent="center">
//               <Grid item xs={12}>
//                 <Button variant="contained" onClick={getLocation} fullWidth>
//                   {t('profileNotificationsPage.getCurrentLocation')}
//                 </Button>
//               </Grid>
//             </Grid> */}
//           <Map onLocationChange={handleLocationChange} />
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="body1" paragraph>
//            step 3
//           </Typography>

//           <Typography variant="body1" mt={2}>
//           set Radius
//           </Typography>
//           <Slider
//             value={distance}
//             onChange={handleDistanceChange}
//             min={1}
//             max={20}
//             valueLabelDisplay="auto"
//             aria-labelledby="radius-slider"
//             sx={{ width: '100%' }}
//           />
//         </Grid>

//         <Grid item xs={12}>
//           <Typography variant="body1" paragraph>
//      step 4
//           </Typography>

//           <Button variant="contained" color="secondary" onClick={handleSubscribe} fullWidth>
//           save
//           </Button>
//         </Grid>
//         <Grid item xs={12}>
//           <Typography variant="body2" mt={2}>
//           info
//           </Typography>
//         </Grid>
//       </Grid>

//       {/* <Grid item xs={12}>
//         <TextField
//           variant="outlined"
//           type="text"
//           name="latitude"
//           value={location.latitude}
//           // onChange={handleChange}
//           fullWidth
//           size="small"
//           label="Latitude"
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           variant="outlined"
//           type="text"
//           name="longitude"
//           value={location.longitude}
//           // onChange={handleChange}
//           fullWidth
//           size="small"
//           label="Longitude"
//         />
//       </Grid>
//       <Grid item xs={12}>
//         <TextField
//           variant="outlined"
//           type="text"
//           name="distance"
//           value={distance}
//           onChange={handleDistanceChange}
//           fullWidth
//           size="small"
//           label="Distance"
//         />
//       </Grid> */}

//       <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={() => setOpenSnackbar(false)}>
//         <Alert onClose={() => setOpenSnackbar(false)} severity="success">
//         success Message
//         </Alert>
//       </Snackbar>
//     </React.Fragment>
//   );
// };

// export default Notifications;
// src/components/NotificationsPage.js
import React, { useState } from "react";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// Helper function to convert VAPID public key
const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
    .replace(/\-/g, "+")
    .replace(/\_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; i++) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
};

const NotificationsPage = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscription, setSubscription] = useState(null);

  // Function to request permission to show notifications
  const askForNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        console.log("Notification permission granted.");
        subscribeUserToPush();
      } else {
        console.log("Notification permission denied.");
      }
    } catch (error) {
      console.error("Permission request failed", error);
    }
  };

  // Function to subscribe user to push notifications
  const subscribeUserToPush = async () => {
    try {
      const registration = await navigator.serviceWorker.register("/service-worker.js");

      if (!registration.pushManager) {
        console.log("PushManager is not supported in this browser.");
        return;
      }

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array("BOZTcqsdJXUbELTV3ax5lK3X3Wh4S33MuJAZ75MVWCxjtrcn7nVr2Xp-JPiPlVJCE9gqmLv23_PR_f-7uKgU8iU"),
      });

      console.log("Push subscription:", subscription);
      setSubscription(subscription);
      setIsSubscribed(true);

      // Send the subscription details to your backend (Django)
      await saveSubscriptionToBackend(subscription);
    } catch (error) {
      console.error("Error subscribing user:", error);
    }
  };
// Convert ArrayBuffer to Base64 string
const arrayBufferToBase64 = (buffer) => {
  const uint8Array = new Uint8Array(buffer);
  let binary = '';
  uint8Array.forEach(byte => {
    binary += String.fromCharCode(byte);
  });
  return window.btoa(binary);
};
  // Function to save subscription to backend
  const saveSubscriptionToBackend = async (subscription) => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const subscriptionData = {
        endpoint: subscription.endpoint,
        // p256dh: subscription.getKey("p256dh"),
        // auth: subscription.getKey("auth"),
        p256dh: arrayBufferToBase64(subscription.getKey("p256dh")),  // Convert p256dh to base64
        auth: arrayBufferToBase64(subscription.getKey("auth")),      // Convert auth to base64
      };
console.log("endpoint", subscriptionData.endpoint)
console.log("p256dh", subscriptionData.p256dh)
console.log("auth", subscriptionData.auth)
      const response = await fetch(`${API_BASE_URL}/notifications/subscribe/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(subscriptionData),
      });

      if (response.ok) {
        console.log("Subscription saved successfully");
      } else {
        console.log("Error saving subscription:", await response.text());
      }
    } catch (error) {
      console.error("Error saving subscription to backend:", error);
    }
  };

  // Function to unsubscribe user
  const unsubscribeUser = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const registration = await navigator.serviceWorker.getRegistration();
      const subscription = await registration.pushManager.getSubscription();

      if (subscription) {
        await subscription.unsubscribe();
        await deleteSubscriptionFromBackend(subscription);
      }
    } catch (error) {
      console.error("Error unsubscribing:", error);
    }
  };

  // Function to delete subscription from backend
  const deleteSubscriptionFromBackend = async (subscription) => {
    try {
      const response = await fetch(`${API_BASE_URL}/notifications/unsubscribe/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({ endpoint: subscription.endpoint }),
      });

      if (response.ok) {
        console.log("Successfully unsubscribed from backend");
        setIsSubscribed(false);
        setSubscription(null);
      } else {
        console.log("Error unsubscribing from backend:", await response.text());
      }
    } catch (error) {
      console.error("Error deleting subscription from backend:", error);
    }
  };

  // Function to trigger a test notification
  const sendTestNotification = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      const response = await fetch(`${API_BASE_URL}/notifications/send_notification/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          title: "Test Notification",
          body: "This is a test notification sent from the backend.",
          url: "https://your-website.com",
        }),
      });

      if (response.ok) {
        console.log("Test notification sent!");
      } else {
        console.log("Error sending notification:", await response.text());
      }
    } catch (error) {
      console.error("Error sending test notification:", error);
    }
  };

  return (
    <div>
      <h1>Push Notifications</h1>
      {isSubscribed ? (
        <div>
          <p>You are subscribed to push notifications.</p>
          <button onClick={unsubscribeUser}>Unsubscribe</button>
          <button onClick={sendTestNotification}>Send Test Notification</button>
        </div>
      ) : (
        <div>
          <p>You are not subscribed to push notifications.</p>
          <button onClick={askForNotificationPermission}>
            Subscribe to Notifications
          </button>
        </div>
      )}
    </div>
  );
};

export default NotificationsPage;
