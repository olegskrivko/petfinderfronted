// import React from "react";
// import { Button, Box, Container, Typography, Grid, Card, CardContent, CardActions } from "@mui/material";
// import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import { List, ListItem, ListItemText } from '@mui/material';

// const PricingPage = () => {

//   const cardStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     boxShadow: 3,
//     borderRadius: "12px",
//     padding: "20px",
//     backgroundColor: "#f4f6f8",  // Subtle background color for cards
//     textAlign: "center",
//     height: "100%",
//     maxWidth: "350px",
//     margin: "20px",
//     border: "1px solid #ddd",  // Soft border for structure
//   };

//   const cardContentStyle = {
//     flexGrow: 1,  // This ensures the content grows and pushes the button to the bottom
//   };

//   const buttonStyle = {
//     backgroundColor: "#5B9BD5",
//     color: "#fff",
//     borderRadius: "8px",  // Rounded button edges
//     '&:hover': {
//       backgroundColor: "#4a89c0",
//     },
//   };

//   const compareTableStyle = {
//     marginTop: "40px",
//     borderCollapse: "collapse",
//     width: "100%",
//     textAlign: "left",
//     marginBottom: "40px",
//   };

//   const compareTableHeaderStyle = {
//     backgroundColor: "#f7f7f7",
//   };

//   const compareTableCellStyle = {
//     padding: "12px 15px",
//     border: "1px solid #ddd",
//   };

//   return (
//           <Container component="main" maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
  
//       <Typography variant="h3" style={{ textAlign: "center", marginBottom: "40px" }}>
//         Izvēlieties savu plānu
//       </Typography>

//       <Grid container spacing={3} justifyContent="center">
//         {/* Freemium Card */}
//         <Grid item xs={12} sm={6} md={4}>
//           <Card style={cardStyle}>
//             <CardContent style={cardContentStyle}>
//               <Typography variant="h5" style={{ fontWeight: "bold" }}>Freemium plāns</Typography>
//               <Typography variant="h6" color="textSecondary" gutterBottom>
//                 Bezmaksas
//               </Typography>
//               <List style={{ textAlign: 'left' }}>
//                 <ListItem>
//                   <ListItemText primary="🐾 Publicējiet pazudušos un atrastos dzīvniekus" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="🐾 Pārlūkojiet sludinājumus un meklējiet dzīvniekus" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="🐾 Pieeja vispārējiem paziņojumiem un atjauninājumiem" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemText primary="🐾 Kopienas pamata meklēšana un dalīšanās" />
//                 </ListItem>
//               </List>
//             </CardContent>
//             <CardActions style={{ width: "100%" }}>
//               <Button variant="contained" style={buttonStyle} fullWidth>
//                 Sāciet bez maksas
//               </Button>
//             </CardActions>
//           </Card>
//         </Grid>

//         {/* Premium Card */}
//         <Grid item xs={12} sm={6} md={4}>
          // <Card style={cardStyle}>
          //   <CardContent style={cardContentStyle}>
          //     <Typography variant="h5" style={{ fontWeight: "bold" }}>Premium plāns</Typography>
          //     <Typography variant="h6" color="textSecondary" gutterBottom>
          //       5€ / mēnesī vai 50€ / gadā
          //     </Typography>
          //     <List style={{ textAlign: 'left' }}>
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
          //   </CardContent>
          //   <CardActions style={{ width: "100%" }}>
          //     <Link to="/checkout" style={{ width: "100%" }}>
          //       <Button variant="contained" style={buttonStyle} fullWidth>
          //         Iegūstiet Premium
          //       </Button>
          //     </Link>
          //   </CardActions>
          // </Card>
//         </Grid>
//       </Grid>

//       {/* Pricing Comparison Table */}
//       {/* <Typography variant="h5" align="center" style={{ marginTop: "60px" }}>
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
//     */}
//     </Container>
//   );
// };

// export default PricingPage;
import React from "react";
import { Button, Box, Container, Typography, Grid, Card, CardContent, CardActions } from "@mui/material";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { CheckCircle, Cancel } from "@mui/icons-material";
const PricingPage = () => {

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // boxShadow: 3,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    borderRadius: "12px",
    padding: "5px",
    backgroundColor: "#ffffff",
    //backgroundColor: "#f4f6f8",  // Subtle background color for cards
    textAlign: "center",
    height: "100%",
    maxWidth: "380px",
    // margin: "20px",
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

  // const compareTableStyle = {
  //   marginTop: "40px",
  //   borderCollapse: "collapse",
  //   width: "100%",
  //   textAlign: "left",
  //   marginBottom: "40px",
  // };

  // const compareTableHeaderStyle = {
  //   backgroundColor: "#f7f7f7",
  // };

  // const compareTableCellStyle = {
  //   padding: "12px 15px",
  //   border: "1px solid #ddd",
  // };

  return (
          <Container component="main" maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
  
      <Typography variant="h3" style={{ textAlign: "center", marginBottom: "40px" }}>
        Izvēlieties savu plānu
      </Typography>
     {/* Freemium Card */}
      <Grid container spacing={3} justifyContent="center">
   
    
        <Grid item xs={12} sm={8} md={4} display="flex" justifyContent="center">
     
          <Card style={cardStyle} sx={{backgroundColor: "#f9f9f9 !important", border: "1px solid #ddd !important", borderRadius: "8px"}}>
            <CardContent style={cardContentStyle}>
              <Typography variant="h3" style={{ fontWeight: "bold" }}>Freemium plāns</Typography>
              <Typography variant="h4" mt={1} sx={{color: "#5B9BD5"}} gutterBottom>
                Bezmaksas
              </Typography>
              <List style={{ textAlign: 'left'}}>
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Publicējiet 1 pazudušu, atrastu dzīvnieku" />
                </ListItem>
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Pārlūkojiet pakalpojumus un meklējiet dzīvniekus" />
                </ListItem>
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Saņemiet reāllaika paziņojumus" />
                </ListItem>
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Publicējiet 1 pakalpojumu" />
                </ListItem>
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Piekļuve pamata nodarbībām" />
                </ListItem>
               
              
             
            
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "#FF746C" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Sludinājuma laiks līdz 30 dienām" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "#FF746C" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Ekskluzīvas atlaides dzīvnieku pakalpojumiem" />
                </ListItem>
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "#FF746C" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Plus punkts karmai" />
                </ListItem>
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "#FF746C" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Piekļuve premium nodarbībām" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "#FF746C" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Sludinājums sociālajos tīklos" />
                </ListItem>
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "#FF746C" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Individuālās konsultācijas" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "#FF746C" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Bez reklāmām" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "#FF746C" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="AI chatbots" />
                </ListItem>
                
              </List>
            </CardContent>
            <CardActions style={{ width: "100%", padding: "1rem" }}>
              <Button variant="outlined" fullWidth>
                Bez maksas
              </Button>
            </CardActions>
          </Card>
        </Grid>

        {/* Plus Card */}

  <Grid item xs={12} sm={8} md={4} display="flex" justifyContent="center">
  <Card style={cardStyle}>
            <CardContent style={cardContentStyle}>
              <Typography variant="h3" style={{ fontWeight: "bold" }}>Plus plāns</Typography>
              <Typography variant="h4" mt={1} sx={{color: "#5B9BD5"}} gutterBottom>
                5€ / mēnesī
              </Typography>
              <List style={{ textAlign: 'left' }}>
              <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Prioritārie dzīvnieku sludinājumi (parādās augšā)" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Paplašināts sludinājumu laiks 90 dienas" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Publicējiet līdz 5 pazudušiem, atrastiem dzīvniekiem" />
                </ListItem>
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Saņemiet reāllaika paziņojumus" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Ekskluzīvas atlaides dzīvnieku pakalpojumiem" />
                </ListItem>
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Publicējiet līdz 3 pakalpojumiem" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Plus punkts karmai" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Piekļuve premium nodarbībām" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Sludinājums sociālajos tīklos" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "#FF746C" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Individuālās konsultācijas" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "#FF746C" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Bez reklāmām" />
                </ListItem>

                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "#FF746C" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="AI chatbots" />
                </ListItem>
              </List>
            </CardContent>
            <CardActions style={{ width: "100%", padding: "1rem" }}>
              {/* <Link to="/checkout" style={{ width: "100%" }}>
                <Button variant="contained" style={buttonStyle} fullWidth>
                  Plus
                </Button>
              </Link> */}
              <Link to="/checkout?plan=plus" style={{ width: "100%" }}>
  <Button variant="contained" style={buttonStyle} fullWidth>
    Plus
  </Button>
</Link>

            </CardActions>
          </Card>
  </Grid>

  <Grid item xs={12} sm={8} md={4} display="flex" justifyContent="center">
  <Card style={cardStyle}>
            <CardContent style={cardContentStyle}>
              <Typography variant="h3" style={{ fontWeight: "bold" }}>Premium plāns</Typography>
              <Typography variant="h4" mt={1} sx={{color: "#5B9BD5"}} gutterBottom>
                12€ / mēnesī
              </Typography>
              <List style={{ textAlign: 'left' }}>
              <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Prioritārie dzīvnieku sludinājumi (parādās augšā)" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Paplašināts sludinājumu laiks 90 dienas" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Publicējiet līdz 5 pazudušiem, atrastiem dzīvniekiem" />
                </ListItem>
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Saņemiet reāllaika paziņojumus" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Ekskluzīvas atlaides dzīvnieku pakalpojumiem" />
                </ListItem>
                <ListItem >  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Publicējiet līdz 5 pakalpojumiem" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Plus punkts karmai" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Piekļuve premium nodarbībām" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Sludinājums sociālajos tīklos" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Individuālās konsultācijas" />
                </ListItem>
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="Bez reklāmām" />
                </ListItem>
             
                <ListItem>  <ListItemIcon sx={{padding: "0 !important", margin: "0 !important"}}><CheckCircle sx={{ color: "green" }} /></ListItemIcon>
                  <ListItemText sx={{ marginLeft: "-1rem !important" }} primary="AI chatbots" />
                </ListItem>
              </List>
            </CardContent>
            <CardActions style={{ width: "100%", padding: "1rem" }}>
              {/* <Link to="/checkout" style={{ width: "100%" }}>
                <Button variant="contained" style={buttonStyle} fullWidth>
                  Premium
                </Button>
              </Link> */}
              <Link to="/checkout?plan=premium" style={{ width: "100%" }}>
  <Button variant="contained" style={buttonStyle} fullWidth>
    Premium
  </Button>
</Link>
            </CardActions>
          </Card>
  </Grid>



      </Grid>


    </Container>
  );
};

export default PricingPage;
// import React from "react";
// import { Button, Box, Container, Typography, Grid, Card, CardContent, CardActions } from "@mui/material";
// import { CheckCircle, Cancel } from "@mui/icons-material";
// import { green, red, blue } from "@mui/material/colors";
// import { Link } from "react-router-dom";
// import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

// const PricingPage = () => {

//   const cardStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//     borderRadius: "12px",
//     padding: "20px",
//     backgroundColor: "#ffffff",
//     textAlign: "center",
//     height: "100%",
//     maxWidth: "360px",
//     margin: "20px",
//   };

//   const cardContentStyle = {
//     flexGrow: 1,
//   };

//   const priceStyle = {
//     fontSize: "28px",
//     fontWeight: "bold",
//     marginBottom: "16px",
//     color: "#333",
//   };

//   const buttonStyle = {
//     backgroundColor: "#1976d2",
//     color: "#fff",
//     borderRadius: "8px",
//     '&:hover': {
//       backgroundColor: "#1565c0",
//     },
//   };

//   return (
//     <Container component="main" maxWidth="lg" sx={{ paddingY: 5 }}>
//       <Typography variant="h3" align="center" gutterBottom fontWeight="bold">
//         🐶 Izvēlieties piemērotāko plānu
//       </Typography>
//       <Typography variant="subtitle1" align="center" gutterBottom color="textSecondary">
//         Premium iespējas dzīvnieku meklēšanas platformai
//       </Typography>

//       <Grid container spacing={4} justifyContent="center">
//         {/* Freemium Card */}
//         <Grid item xs={12} sm={8} md={4} display="flex" justifyContent="center">
//           <Card style={cardStyle}>
//             <CardContent style={cardContentStyle}>
//               <Typography variant="h5" fontWeight="bold">Freemium plāns</Typography>
//               <div style={priceStyle}>Bezmaksas</div>
//               <List style={{ textAlign: 'left', marginTop: "10px" }}>
//                 <ListItem>
//                   <ListItemIcon><CheckCircle sx={{ color: green[600] }} /></ListItemIcon>
//                   <ListItemText primary="Publicējiet pazudušos un atrastos dzīvniekus" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon><CheckCircle sx={{ color: green[600] }} /></ListItemIcon>
//                   <ListItemText primary="Pārlūkojiet sludinājumus un meklējiet dzīvniekus" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon><CheckCircle sx={{ color: green[600] }} /></ListItemIcon>
//                   <ListItemText primary="Pieeja vispārējiem paziņojumiem un atjauninājumiem" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon><CheckCircle sx={{ color: green[600] }} /></ListItemIcon>
//                   <ListItemText primary="Kopienas pamata meklēšana un dalīšanās" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon><Cancel sx={{ color: red[500] }} /></ListItemIcon>
//                   <ListItemText primary="Prioritārie sludinājumi" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon><Cancel sx={{ color: red[500] }} /></ListItemIcon>
//                   <ListItemText primary="Reāllaika paziņojumi" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon><Cancel sx={{ color: red[500] }} /></ListItemIcon>
//                   <ListItemText primary="Bez reklāmām un ar premium atbalstu" />
//                 </ListItem>
//               </List>
//             </CardContent>
//             <CardActions style={{ width: "100%" }}>
//               <Button variant="contained" style={buttonStyle} fullWidth>
//                 Sāciet bez maksas
//               </Button>
//             </CardActions>
//           </Card>
//         </Grid>

//         {/* Premium Card */}
//         <Grid item xs={12} sm={8} md={4} display="flex" justifyContent="center">
//           <Card style={cardStyle}>
//             <CardContent style={cardContentStyle}>
//               <Typography variant="h5" fontWeight="bold">Premium plāns</Typography>
//               <div style={priceStyle}>5€ / mēn. vai 50€ / gadā</div>
//               <List style={{ textAlign: 'left', marginTop: "10px" }}>
//                 <ListItem>
//                   <ListItemIcon><CheckCircle sx={{ color: blue[500] }} /></ListItemIcon>
//                   <ListItemText primary="Prioritārie dzīvnieku sludinājumi (augšā)" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon><CheckCircle sx={{ color: blue[500] }} /></ListItemIcon>
//                   <ListItemText primary="Paplašināts sludinājumu laiks" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon><CheckCircle sx={{ color: blue[500] }} /></ListItemIcon>
//                   <ListItemText primary="Papildu, reāllaika paziņojumi" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon><CheckCircle sx={{ color: blue[500] }} /></ListItemIcon>
//                   <ListItemText primary="Bez reklāmām" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon><CheckCircle sx={{ color: blue[500] }} /></ListItemIcon>
//                   <ListItemText primary="Ekskluzīvas atlaides dzīvnieku pakalpojumiem" />
//                 </ListItem>
//                 <ListItem>
//                   <ListItemIcon><CheckCircle sx={{ color: blue[500] }} /></ListItemIcon>
//                   <ListItemText primary="Premium atbalsts un palīdzība" />
//                 </ListItem>
//               </List>
//             </CardContent>
//             <CardActions style={{ width: "100%" }}>
//               <Link to="/checkout" style={{ width: "100%" }}>
//                 <Button variant="contained" style={buttonStyle} fullWidth>
//                   Iegūstiet Premium
//                 </Button>
//               </Link>
//             </CardActions>
//           </Card>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default PricingPage;
