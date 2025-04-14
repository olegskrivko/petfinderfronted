// import React from "react";
// import { Button, Box, Typography, Grid, Card, CardContent, CardActions } from "@mui/material";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import { List, ListItem, ListItemText } from '@mui/material';
// const PricingPage = () => {

//   const cardStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     boxShadow: 3,
//     borderRadius: "8px",
//     padding: "20px",
//     backgroundColor: "#fff",
//     textAlign: "center",
//     height: "100%",
//     maxWidth: "350px",
//     margin: "20px",
//   };

//   const buttonStyle = {
//     backgroundColor: "#5B9BD5",
//     color: "#fff",
//     '&:hover': {
//       backgroundColor: "#4a89c0",
//     },
//   };

//   const compareTableStyle = {
//     marginTop: "40px",
//     borderCollapse: "collapse",
//     width: "100%",
//     textAlign: "left",
//   };

//   const compareTableHeaderStyle = {
//     backgroundColor: "#f7f7f7",
//   };

//   const compareTableCellStyle = {
//     padding: "12px 15px",
//     border: "1px solid #ddd",
//   };

//   return (
//     <Box style={{ marginTop: "50px", padding: "0 20px" }}>
//       <Typography variant="h3" style={{ textAlign: "center", marginBottom: "40px" }}>
//         Izvēlieties savu plānu
//       </Typography>

//       <Grid container spacing={3} justifyContent="center">
//         {/* Freemium Card */}
//         <Grid item xs={12} sm={6} md={6}>
//           <Card style={cardStyle}>
//             <CardContent>
//               <Typography variant="h5">Freemium plāns</Typography>
//               <Typography variant="h6" color="textSecondary" gutterBottom>
//                 Bezmaksas
//               </Typography>
//               <List style={{ textAlign: 'left' }}>
//       <ListItem>
//         <ListItemText primary="🐾 Publicējiet pazudušos un atrastos dzīvniekus" />
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="🐾 Pārlūkojiet sludinājumus un meklējiet dzīvniekus" />
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="🐾 Pieeja vispārējiem paziņojumiem un atjauninājumiem" />
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="🐾 Kopienas pamata meklēšana un dalīšanās" />
//       </ListItem>
//     </List>
//             </CardContent>
//             <CardActions>
//               <Button variant="contained" style={buttonStyle} fullWidth>
//                 Sāciet bez maksas
//               </Button>
//             </CardActions>
//           </Card>
//         </Grid>

//         {/* Premium Card */}
//         <Grid item xs={12} sm={6} md={6}>
//           <Card style={cardStyle}>
//             <CardContent>
//               <Typography variant="h5">Premium plāns</Typography>
//               <Typography variant="h6" color="textSecondary" gutterBottom>
//                 5€ / mēnesī vai 50€ / gadā
//               </Typography>
//               <List style={{ textAlign: 'left' }}>
//       <ListItem>
//         <ListItemText primary="🐾 Prioritārie dzīvnieku sludinājumi (parādās augšā)" />
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="🐾 Paplašināts sludinājumu laiks" />
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="🐾 Papildu, reāllaika paziņojumi" />
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="🐾 Bez reklāmām" />
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="🐾 Ekskluzīvas atlaides dzīvnieku pakalpojumiem" />
//       </ListItem>
//       <ListItem>
//         <ListItemText primary="🐾 Premium atbalsts" />
//       </ListItem>
//     </List>
//             </CardContent>
//             <CardActions>
//               <Link to="/checkout" style={{ width: "100%" }}>
//                 <Button variant="contained" style={buttonStyle} fullWidth>
//                   Iegūstiet Premium
//                 </Button>
//               </Link>
//             </CardActions>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* Pricing Comparison Table */}
//       <Typography variant="h5" align="center" style={{ marginTop: "60px" }}>
//         Salīdzināt plānus
//       </Typography>
//       <table style={compareTableStyle}>
//         <thead style={compareTableHeaderStyle}>
//           <tr>
//             <th style={compareTableCellStyle}>Funkcijas</th>
//             <th style={compareTableCellStyle}>Freemium</th>
//             <th style={compareTableCellStyle}>Premium</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td style={compareTableCellStyle}>Publicēt pazudušos/atrastos dzīvniekus</td>
//             <td style={compareTableCellStyle}>✅</td>
//             <td style={compareTableCellStyle}>✅</td>
//           </tr>
//           <tr>
//             <td style={compareTableCellStyle}>Pārlūkot sludinājumus</td>
//             <td style={compareTableCellStyle}>✅</td>
//             <td style={compareTableCellStyle}>✅</td>
//           </tr>
//           <tr>
//             <td style={compareTableCellStyle}>Piekļuve paziņojumiem</td>
//             <td style={compareTableCellStyle}>✅</td>
//             <td style={compareTableCellStyle}>✅</td>
//           </tr>
//           <tr>
//             <td style={compareTableCellStyle}>Prioritārie sludinājumi</td>
//             <td style={compareTableCellStyle}>❌</td>
//             <td style={compareTableCellStyle}>✅</td>
//           </tr>
//           <tr>
//             <td style={compareTableCellStyle}>Paplašināts sludinājuma laiks</td>
//             <td style={compareTableCellStyle}>❌</td>
//             <td style={compareTableCellStyle}>✅</td>
//           </tr>
//           <tr>
//             <td style={compareTableCellStyle}>Papildu paziņojumi</td>
//             <td style={compareTableCellStyle}>❌</td>
//             <td style={compareTableCellStyle}>✅</td>
//           </tr>
//           <tr>
//             <td style={compareTableCellStyle}>Bez reklāmām</td>
//             <td style={compareTableCellStyle}>❌</td>
//             <td style={compareTableCellStyle}>✅</td>
//           </tr>
//           <tr>
//             <td style={compareTableCellStyle}>Ekskluzīvas dzīvnieku pakalpojumu atlaides</td>
//             <td style={compareTableCellStyle}>❌</td>
//             <td style={compareTableCellStyle}>✅</td>
//           </tr>
//           <tr>
//             <td style={compareTableCellStyle}>Premium atbalsts</td>
//             <td style={compareTableCellStyle}>❌</td>
//             <td style={compareTableCellStyle}>✅</td>
//           </tr>
//         </tbody>
//       </table>
//     </Box>
//   );
// };

// export default PricingPage;
import React from "react";
import { Button, Box, Typography, Grid, Card, CardContent, CardActions } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { List, ListItem, ListItemText } from '@mui/material';

const PricingPage = () => {

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: 3,
    borderRadius: "12px",
    padding: "20px",
    backgroundColor: "#f4f6f8",  // Subtle background color for cards
    textAlign: "center",
    height: "100%",
    maxWidth: "350px",
    margin: "20px",
    border: "1px solid #ddd",  // Soft border for structure
  };

  const cardContentStyle = {
    flexGrow: 1,  // This ensures the content grows and pushes the button to the bottom
  };

  const buttonStyle = {
    backgroundColor: "#5B9BD5",
    color: "#fff",
    borderRadius: "8px",  // Rounded button edges
    '&:hover': {
      backgroundColor: "#4a89c0",
    },
  };

  const compareTableStyle = {
    marginTop: "40px",
    borderCollapse: "collapse",
    width: "100%",
    textAlign: "left",
    marginBottom: "40px",
  };

  const compareTableHeaderStyle = {
    backgroundColor: "#f7f7f7",
  };

  const compareTableCellStyle = {
    padding: "12px 15px",
    border: "1px solid #ddd",
  };

  return (
    <Box style={{ marginTop: "50px", padding: "0 20px" }}>
      <Typography variant="h3" style={{ textAlign: "center", marginBottom: "40px" }}>
        Izvēlieties savu plānu
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {/* Freemium Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card style={cardStyle}>
            <CardContent style={cardContentStyle}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>Freemium plāns</Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Bezmaksas
              </Typography>
              <List style={{ textAlign: 'left' }}>
                <ListItem>
                  <ListItemText primary="🐾 Publicējiet pazudušos un atrastos dzīvniekus" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="🐾 Pārlūkojiet sludinājumus un meklējiet dzīvniekus" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="🐾 Pieeja vispārējiem paziņojumiem un atjauninājumiem" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="🐾 Kopienas pamata meklēšana un dalīšanās" />
                </ListItem>
              </List>
            </CardContent>
            <CardActions style={{ width: "100%" }}>
              <Button variant="contained" style={buttonStyle} fullWidth>
                Sāciet bez maksas
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Premium Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card style={cardStyle}>
            <CardContent style={cardContentStyle}>
              <Typography variant="h5" style={{ fontWeight: "bold" }}>Premium plāns</Typography>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                5€ / mēnesī vai 50€ / gadā
              </Typography>
              <List style={{ textAlign: 'left' }}>
                <ListItem>
                  <ListItemText primary="🐾 Prioritārie dzīvnieku sludinājumi (parādās augšā)" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="🐾 Paplašināts sludinājumu laiks" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="🐾 Papildu, reāllaika paziņojumi" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="🐾 Bez reklāmām" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="🐾 Ekskluzīvas atlaides dzīvnieku pakalpojumiem" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="🐾 Premium atbalsts" />
                </ListItem>
              </List>
            </CardContent>
            <CardActions style={{ width: "100%" }}>
              <Link to="/checkout" style={{ width: "100%" }}>
                <Button variant="contained" style={buttonStyle} fullWidth>
                  Iegūstiet Premium
                </Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      {/* Pricing Comparison Table */}
      <Typography variant="h5" align="center" style={{ marginTop: "60px" }}>
        Salīdzināt plānus
      </Typography>
      <table style={compareTableStyle}>
        <thead style={compareTableHeaderStyle}>
          <tr>
            <th style={compareTableCellStyle}>Funkcijas</th>
            <th style={compareTableCellStyle}>Freemium</th>
            <th style={compareTableCellStyle}>Premium</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={compareTableCellStyle}>Publicēt pazudušos/atrastos dzīvniekus</td>
            <td style={compareTableCellStyle}>✅</td>
            <td style={compareTableCellStyle}>✅</td>
          </tr>
          <tr>
            <td style={compareTableCellStyle}>Pārlūkot sludinājumus</td>
            <td style={compareTableCellStyle}>✅</td>
            <td style={compareTableCellStyle}>✅</td>
          </tr>
          <tr>
            <td style={compareTableCellStyle}>Piekļuve paziņojumiem</td>
            <td style={compareTableCellStyle}>✅</td>
            <td style={compareTableCellStyle}>✅</td>
          </tr>
          <tr>
            <td style={compareTableCellStyle}>Prioritārie sludinājumi</td>
            <td style={compareTableCellStyle}>❌</td>
            <td style={compareTableCellStyle}>✅</td>
          </tr>
          <tr>
            <td style={compareTableCellStyle}>Paplašināts sludinājuma laiks</td>
            <td style={compareTableCellStyle}>❌</td>
            <td style={compareTableCellStyle}>✅</td>
          </tr>
          <tr>
            <td style={compareTableCellStyle}>Papildu paziņojumi</td>
            <td style={compareTableCellStyle}>❌</td>
            <td style={compareTableCellStyle}>✅</td>
          </tr>
          <tr>
            <td style={compareTableCellStyle}>Bez reklāmām</td>
            <td style={compareTableCellStyle}>❌</td>
            <td style={compareTableCellStyle}>✅</td>
          </tr>
          <tr>
            <td style={compareTableCellStyle}>Ekskluzīvas dzīvnieku pakalpojumu atlaides</td>
            <td style={compareTableCellStyle}>❌</td>
            <td style={compareTableCellStyle}>✅</td>
          </tr>
          <tr>
            <td style={compareTableCellStyle}>Premium atbalsts</td>
            <td style={compareTableCellStyle}>❌</td>
            <td style={compareTableCellStyle}>✅</td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

export default PricingPage;
