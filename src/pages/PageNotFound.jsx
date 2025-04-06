// // PageNotFound.js
// import React from 'react';

// const PageNotFound = () => {
//   return (
//     <div>
//       <h1>404 - Page Not Found</h1>
//     </div>
//   );
// };

// export default PageNotFound;
// import React from "react";
// import { Link } from "react-router-dom";
// import { Typography, Box, Grid, Button } from "@mui/material";
// import { motion } from "framer-motion";

// const PageNotFound = () => {
//   return (
//     <Grid container sx={{ height: "100vh" }}>
//       {/* Left Side (Branding/Logo) */}
//       <Grid
//         item
//         xs={12}
//         sm={7} // Adjusted for 3:2 ratio
//         sx={{
//           backgroundColor: "#5B9BD5",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "#fff",
//           padding: 4,
//         }}
//       >
//         <Box textAlign="center">
//           <Typography variant="h3" sx={{ fontWeight: 700 }}>
//             PawClix
//           </Typography>
//           <Typography variant="h6" sx={{ marginTop: 2 }}>
//             Lost & Found Pets
//           </Typography>
//         </Box>
//       </Grid>

//       {/* Right Side (Page Not Found Message) */}
//       <Grid
//         item
//         xs={12}
//         sm={5} // Adjusted for 3:2 ratio
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           padding: 3,
//         }}
//       >
//         <Box sx={{ width: "80%", maxWidth: 400 }}>
//           <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//             404 - Page Not Found
//           </Typography>

//           <Typography variant="body2" align="center" sx={{ mb: 4 }}>
//             Oops! The page you're looking for doesn't exist.
//           </Typography>

//           <Box sx={{ display: "flex", justifyContent: "center" }}>
//             <Button
//               variant="contained"
//               sx={{ backgroundColor: "#5B9BD5", px: 4 }}
//               component={Link}
//               to="/" // Redirect to home page
//             >
//               Go Back Home
//             </Button>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default PageNotFound;
// import React from "react";
// import { Link } from "react-router-dom";
// import { Typography, Box, Button, Container } from "@mui/material";

// const PageNotFound = () => {
//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//           404 - Page Not Found
//         </Typography>
//         <Typography variant="body2" align="center" sx={{ mb: 4 }}>
//           Oops! The page you're looking for doesn't exist.
//         </Typography>

//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#5B9BD5", px: 4 }}
//           component={Link}
//           to="/" // Redirect to home page
//           fullWidth
//         >
//           Go Back Home
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default PageNotFound;
// import React from "react";
// import { Link } from "react-router-dom";
// import { Typography, Box, Button, Container } from "@mui/material";
// // import NotFoundImage from "./images/404_error_with_a_cute_animal_cuate.svg";
// import NotFoundImage from "./images/monster_404_error_rafiki.svg"; // Assuming you have a 404 image in the assets folder
// {/* <a href="https://storyset.com/internet">Internet illustrations by Storyset</a> */}
// {/* <a href="https://storyset.com/web">Web illustrations by Storyset</a> */}
// const PageNotFound = () => {
//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         {/* Image Above Text */}
//         <img
//           src={NotFoundImage}
//           alt="404 Not Found"
//           style={{ width: "150px", marginBottom: "20px" }} // Adjust size and margin
//         />

//         <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//           404 - Page Not Found
//         </Typography>
//         <Typography variant="body2" align="center" sx={{ mb: 4 }}>
//           Oops! The page you're looking for doesn't exist.
//         </Typography>

//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#5B9BD5", px: 4 }}
//           component={Link}
//           to="/" // Redirect to home page
//           fullWidth
//         >
//           Go Back Home
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default PageNotFound;
// import React from "react";
// import { Link } from "react-router-dom";
// import { Typography, Box, Button, Container } from "@mui/material";
// // import NotFoundImage from "./images/404_error_with_a_cute_animal_cuate.svg";
// import NotFoundImage from "./images/monster_404_error_rafiki.svg"; // Assuming you have a 404 image in the assets folder

// const PageNotFound = () => {
//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         {/* Image Above Text */}
//         <img
//           src={NotFoundImage}
//           alt="404 Not Found"
//           style={{ width: "300px", marginBottom: "20px" }} // Increased size
//         />

//         <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//           404 - Page Not Found
//         </Typography>
//         <Typography variant="body2" align="center" sx={{ mb: 4 }}>
//           Oops! The page you're looking for doesn't exist.
//         </Typography>

//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#5B9BD5", px: 4 }}
//           component={Link}
//           to="/" // Redirect to home page
//           fullWidth
//         >
//           Go Back Home
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default PageNotFound;
// import React from "react";
// import { Link } from "react-router-dom";
// import { Typography, Box, Button, Container } from "@mui/material";
// // import NotFoundImage from "./images/404_error_with_a_cute_animal_cuate.svg";
// import NotFoundImage from "./images/monster_404_error_rafiki.svg"; // Assuming you have a 404 image in the assets folder

// const PageNotFound = () => {
//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         {/* Image Above Text */}
//         <img
//           src={NotFoundImage}
//           alt="404 Not Found"
//           style={{
//             width: "300px",
//             marginBottom: "20px",
//             userSelect: "none", // Prevent text selection
//             border: "none", // Remove any border on click
//           }}
//         />
//         {/* Reference Link in Small Font */}
//         <Typography
//           variant="body2"
//           align="center"
//           sx={{
//             mt: 2,
//             fontSize: "0.7rem", // Smaller font size for the reference text
//             color: "#5B9BD5", // Optional color for the link
//           }}
//         >
//           <a
//             href="https://storyset.com/web"
//             target="_blank"
//             rel="noopener noreferrer"
//             style={{ textDecoration: "none" }}
//           >
//             Web illustrations by Storyset
//           </a>
//         </Typography>
//         <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//           404 - Page Not Found
//         </Typography>
//         <Typography variant="body2" align="center" sx={{ mb: 4 }}>
//           Oops! The page you're looking for doesn't exist.
//         </Typography>

//         <Button
//           variant="contained"
//           sx={{ backgroundColor: "#5B9BD5", px: 4 }}
//           component={Link}
//           to="/" // Redirect to home page
//           fullWidth
//         >
//           Go Back Home
//         </Button>

//       </Box>
//     </Container>
//   );
// };

// export default PageNotFound;
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography,
  Box,
  Button,
  Container,
  CardMedia,
  Link as MuiLink,
} from '@mui/material';

// Assuming you have a 404 image in the assets folder
import NotFoundImage from './images/monster_404_error_rafiki.svg';

const PageNotFound = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Image Above Text */}
        <CardMedia
  component="img"
  src={NotFoundImage}
  alt="404 Not Found"
  sx={{
    width: {
      xs: '100%',   // full width on extra small screens
      sm: '400px',  // medium size on small screens
      md: '600px',  // larger on medium screens
      lg: '800px',  // even bigger on large screens
    },
    objectFit: 'contain',
 
    pointerEvents: 'none',
    userSelect: 'none',
    border: 'none',
  }}
/>
        {/* Image Credit */}
        <MuiLink
          href="https://storyset.com/web"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            fontSize: '0.6rem', // Smaller font size for the reference link
            fontStyle: 'italic', // Italicized font for the credit
            color: '#999', // Lighter color for the credit
            fontWeight: '300', // Lighter weight for the credit
           
          }}
        >
          Web illustrations by Storyset
        </MuiLink>
        {/* 404 Page Text */}
        <Typography
          component="h1"
          variant="h5"
          align="center"
          sx={{ mb: 2, mt: 4 }}
        >
          404 - Lapa Nav Atrasta
        </Typography>
        <Typography variant="body2" align="center" sx={{ mb: 4 }}>
          Oops! Lapa, kuru meklējat, neeksistē.
        </Typography>

        {/* Button to Go Back Home */}
        <Button
          variant="contained"
          sx={{ backgroundColor: '#5B9BD5', px: 4 }}
          component={Link}
          to="/" // Redirect to home page
          fullWidth
        >
          Atpakaļ uz sākumlapu
        </Button>
      </Box>
    </Container>
  );
};

export default PageNotFound;
