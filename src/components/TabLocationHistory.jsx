// import React from 'react';
// import {
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Avatar,
//   Tooltip,
// } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import EventIcon from '@mui/icons-material/Event';
// import moment from 'moment';

// const StatusHistory = ({ pet }) => {
//   return (
//     <Grid container spacing={2}>
//       {/* Title */}
//       {/* <Grid item xs={12}>
//         <Typography variant="h6" gutterBottom>
//           Status History
//         </Typography>
//       </Grid> */}

//       {/* Check if the pet has a statusHistory */}
//       {pet && pet.sightings_history && pet.sightings_history.length > 0 ? (
//         <Grid item xs={12}>
//           <Card>
//             <CardContent>
//               <List>
//                 {pet.sightings_history.map((status, index) => (
//                   <ListItem key={index} divider>
//                     <ListItemAvatar>
//                       <Tooltip title="Status Change">
//                         <Avatar style={{ backgroundColor: '#4caf50' }}>
//                           <CheckCircleIcon />
//                         </Avatar>
//                       </Tooltip>
//                     </ListItemAvatar>
//                     <ListItemText 
//                       primary={status.status + " mājdzīvnieks"} // Status description
//                       secondary={`${moment(status.event_occurred_at).format(
//                         'MMMM Do YYYY, h:mm a'
//                       )}`.toUpperCase()}
//                     />
//                   </ListItem>
//                 ))}
               
//               </List>
//             </CardContent>
//           </Card>
//         </Grid>
//       ) : (
//         <Grid item xs={12}>
//           <Typography variant="body2" color="textSecondary">
//             No status history available.
//           </Typography>
//         </Grid>
//       )}
//     </Grid>
//   );
// };

// export default StatusHistory;
// import React from 'react';
// import {
//   Grid,
//   Grid2,
//   Typography,
//   Card,
//   CardContent,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Avatar,
//   Tooltip,
// } from '@mui/material';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import EventIcon from '@mui/icons-material/Event';

// import moment from 'moment';

// const StatusHistory = ({ pet }) => {
//   return (

//     <>
//       {/* Check if the pet has a sightings_history */}
//       {pet && pet.sightings_history && pet.sightings_history.length > 0 ? (
    
//           <Card >
//             <CardContent style={{ paddingBottom: "1rem", paddingTop: "0.5rem" }}>
//               <List sx={{paddingTop: "0 !important"}}>
//                 {pet.sightings_history.map((status, index) => {
//                   let statusLabel = status.status;

//                   // For the first item, show "Pet is lost"
//                   if (index === 0) {
//                     statusLabel = `${status.status + " mājdzīvnieks"}`; // You can modify this message to fit your context
//                   } 
//                   // For the second item, show the timestamp of when the post was created
//                   else if (index === 1) {
//                     statusLabel = `Ziņa izveidota ${moment(status.event_occurred_at).format('MMMM Do YYYY, h:mm a')}`;
//                   } 
//                   // For subsequent items, show the status and timestamp
//                   else {
//                     statusLabel = `${status.status} (Update)`;
//                   }

//                   return (
//                     <ListItem key={index} divider sx={{margin: 0, padding: 0}}>
//                       <ListItemAvatar>
//                         <Tooltip title="Status Change">
//                           <Avatar style={{ backgroundColor: '#4caf50' }}>
//                             <EventIcon />
                         
//                           </Avatar>
//                         </Tooltip>
//                       </ListItemAvatar>
//                       <ListItemText 
//                         primary={statusLabel} // Conditional status label
//                         secondary={`${moment(status.event_occurred_at).format('MMMM Do YYYY, h:mm a')}`.toUpperCase()}
//                       />
//                     </ListItem>
//                   );
//                 })}
//               </List>
//             </CardContent>
//           </Card>
      
//       ) : (
    
//         <Grid item xs={12}>
//           <Typography variant="body2" color="textSecondary">
//             No status history available.
//           </Typography>
//         </Grid>
   
//       )}
//     </>
 
//   );
// };

// export default StatusHistory;
// import React from 'react';
// import {
//   Grid,
//   Typography,
//   Card,
//   CardContent,
//   List,
//   ListItem,
//   ListItemAvatar,
//   ListItemText,
//   Avatar,
//   Tooltip,
// } from '@mui/material';

// import WarningAmberIcon from '@mui/icons-material/WarningAmber'; // First item (Lost)
// import AccessTimeIcon from '@mui/icons-material/AccessTime'; // Second item (Timestamp)
// import CheckCircleIcon from '@mui/icons-material/CheckCircle'; // Other updates (Status Changed)
// import EditCalendarIcon from '@mui/icons-material/EditCalendar';
// import EventAvailableIcon from '@mui/icons-material/EventAvailable';
// import EventIcon from '@mui/icons-material/Event';
// import moment from 'moment';
// // style={{ backgroundColor: '#4caf50' }}
// const StatusHistory = ({ pet }) => {
//   return (
//     <>
//       {pet && pet.sightings_history && pet.sightings_history.length > 0 ? (
//         <Card>
//           <CardContent style={{ paddingBottom: '1rem', paddingTop: '0.5rem' }}>
//             <List sx={{ paddingTop: '0 !important' }}>
//               {pet.sightings_history.map((status, index) => {
//                 let statusLabel = status.status_display;
//                 let IconComponent = EventAvailableIcon; // Default icon for updates
//                 let tooltipText = 'Status Update'; // Default tooltip

//                 // First Item: Pet is Lost
//                 if (index === 0) {
//                   statusLabel = `${status.status_display} mājdzīvnieks`;
//                   IconComponent = EventIcon;
//                   tooltipText = 'Reported as Lost';
//                 } 
//                 // Second Item: Initial Report Timestamp
//                 else if (index === 1) {
//                   statusLabel = `Ziņa izveidota ${moment(status.event_occurred_at).format('MMMM Do YYYY, h:mm a')}`;
//                   IconComponent = EditCalendarIcon;
//                   tooltipText = 'Initial Report';
//                 } 
//                 // All other status updates
//                 else {
//                   statusLabel = `${status.status_display} (Update)`;
//                 }

//                 return (
//                   <ListItem key={index} divider sx={{ margin: 0, padding: 0 }}>
//                     <ListItemAvatar>
//                       <Tooltip title={tooltipText}>
//                         <Avatar style={{ backgroundColor: '#555', color: '#fff' }} >
//                           <IconComponent />
//                         </Avatar>
//                       </Tooltip>
//                     </ListItemAvatar>
//                     <ListItemText
//                       primary={statusLabel}
//                       secondary={`${moment(status.event_occurred_at).format('MMMM Do YYYY, h:mm a')}`.toUpperCase()}
//                     />
//                   </ListItem>
//                 );
//               })}
//             </List>
//           </CardContent>
//         </Card>
//       ) : (
//         <Grid item xs={12}>
//           <Typography variant="body2" color="textSecondary">
//             No status history available.
//           </Typography>
//         </Grid>
//       )}
//     </>
//   );
// };

// export default StatusHistory;
import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Tooltip,
} from '@mui/material';

import EventIcon from '@mui/icons-material/Event'; // Pet Lost
import EditCalendarIcon from '@mui/icons-material/EditCalendar'; // Report Created
import LocationOnIcon from '@mui/icons-material/LocationOn';
import moment from 'moment';

const StatusHistory = ({ pet, sightings }) => {
    // Filter sightings where both latitude and longitude are available
    const validSightings = sightings.filter(
      (sighting) => sighting.latitude && sighting.longitude && !isNaN(sighting.latitude) && !isNaN(sighting.longitude)
    );
  return (
    <>
      {pet ? (
        <Card>
          <CardContent style={{ paddingBottom: '1rem', paddingTop: '0.5rem' }}>
            <List sx={{ paddingTop: '0 !important' }}>
         
              {/* First Item: When the pet was actually lost */}
              {pet.event_occurred_at && (
                <ListItem divider sx={{ margin: 0, padding: 0 }}>
                  <ListItemAvatar>
                    <Tooltip title="Notikuma laiks (Kad mājdzīvnieks pazuda)">
                      <Avatar style={{ backgroundColor: '#555', color: '#fff' }}>
                        <EventIcon />
                      </Avatar>
                    </Tooltip>
             
                  </ListItemAvatar>
                  <ListItemText
                    primary="Mājdzīvnieks pazuda"
                    secondary={moment(pet.event_occurred_at).format('MMMM Do YYYY, h:mm a').toUpperCase()}
                  />
                </ListItem>
              )}

              {/* Second Item: When the report was created */}
              {pet.created_at && (
                <ListItem divider sx={{ margin: 0, padding: 0 }}>
                  <ListItemAvatar>
                    <Tooltip title="Ziņas izveides laiks">
                      <Avatar style={{ backgroundColor: '#555', color: '#fff' }}>
                        <EditCalendarIcon />
                      </Avatar>
                    </Tooltip>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Ziņa izveidota"
                    secondary={moment(pet.created_at).format('MMMM Do YYYY, h:mm a').toUpperCase()}
                  />
                </ListItem>
              )}

            

                 {/* Sightings History: Display only sightings with valid latitude and longitude */}
              {validSightings.length > 0 ? (
                validSightings.slice().reverse().map((sighting, index) => {
                  return (
                    <ListItem divider sx={{ margin: 0, padding: 0 }} key={index}>
                      <ListItemAvatar>
                        <Tooltip title={`Mājdzīvnieks redzēts`}>
                          <Avatar style={{ backgroundColor: '#555', color: '#fff' }}>
                            <LocationOnIcon />
                          </Avatar>
                        </Tooltip>
                      </ListItemAvatar>
                      <ListItemText
                        primary={`Mājdzīvnieks redzēts`}
                        secondary={moment(sighting.event_occurred_at).format('MMMM Do YYYY, h:mm a').toUpperCase()}
                      />
                    </ListItem>
                  )})
        
     
              ) : (
                <Grid item xs={12}>
                  <Typography variant="body2" color="textSecondary">
                    Nav pieejami novērojumi.
                  </Typography>
                </Grid>
              )}


              {/* Future: Add pet.sightings_history here when ready */}

            </List>
          </CardContent>
        </Card>
      ) : (
        <Grid item xs={12}>
          <Typography variant="body2" color="textSecondary">
            Nav pieejama statusa vēsture.
          </Typography>
        </Grid>
      )}
    </>
  );
};

export default StatusHistory;
