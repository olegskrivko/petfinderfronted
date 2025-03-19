// import React from "react";
// import { Link } from 'react-router-dom';
// import { Box, Typography, Container, Grid, Grid2,  Card, CardActionArea, CardContent } from "@mui/material";
// import banner from '../pages/images/banner3.jpeg'; // Ensure the path is correct
// import SearchIcon from '@mui/icons-material/Search';
// import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import { useTheme } from '@mui/material/styles';
// const Banner = () => {
//   const theme = useTheme();
//   const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   return (
//     <Box

//               >
//     <Box
//       sx={{
//         width: "100%",
//         height: { xs: 250, md: 800 }, // Responsive height
//         backgroundImage: `url(${banner})`, // Use url() function
//         backgroundSize: "cover",
//         backgroundPosition: "bottom",
//         position: "relative",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "white",
//         textAlign: "center",
//         "&::before": {
//           content: '""',
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
//         },
//       }}
//     >
//       <Container sx={{ position: "relative", zIndex: 1 }}>
//         <Typography variant="h1" fontWeight="bold" style={{
//               fontWeight: '700',
//               fontSize: isSmallScreen ? '2.2rem' : '2.6rem',
//             }}>
//         Laipni lūdzam mūsu lietotnē PawClix
//         </Typography>
//         {/* <Typography variant="h6">
//           Discover the best experiences with us!
//         </Typography> */}
//          <Typography variant="h3" style={{
//               fontWeight: '700',
//               fontSize: isSmallScreen ? '2.2rem' : '2.6rem',
//             }}>
//          Atrodi pazudušo mājdzīvnieku ar vienu klikšķi!
//         </Typography>
//         <Grid container spacing={3} justifyContent="center" style={{ marginTop: '2rem' }}>
//       <Grid item xs={12} sm={6} md={4}>
//         <Link to="/pets"  style={{ textDecoration: 'none' }}>
//           <Card sx={{ backgroundColor: '#ffcb56', color: '#5B5B5B', textAlign: 'center' }}>
//             <CardActionArea>
//             <CardContent>
//                 <SearchIcon fontSize="large" />
//                 <Typography variant={isSmallScreen ? "h5" : "h4"}>
//                   Meklēt mājdzīvnieku
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Link>
//       </Grid>

//       <Grid item xs={12} sm={6} md={4}>
//         <Link to="/add-pet" style={{ textDecoration: 'none' }}>
//           <Card sx={{ backgroundColor: '#5B9BD5', color: 'white', textAlign: 'center' }}>
//             <CardActionArea>
//             <CardContent>
//                 <NotificationsActiveIcon fontSize="large" />
//                 <Typography variant={isSmallScreen ? "h5" : "h4"}>
//                   Ziņot par mājdzīvnieku
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Link>
//       </Grid>
//     </Grid>
        
//       </Container>
//     </Box>
//     </Box>
//   );
// };

// export default Banner;
// import React from "react";
// import { Link } from "react-router-dom";
// import { Box, Typography, Container, Grid, Card, CardActionArea, CardContent } from "@mui/material";
// import banner from "../pages/images/banner3.jpeg"; // Ensure the path is correct
// import SearchIcon from "@mui/icons-material/Search";
// import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";

// const Banner = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Small screens (xs, sm)

//   return (
//     <Box>
//       <Box
//         sx={{
//           width: "100%",
//           height: { xs: 250, md: 800 }, // Responsive height
//           backgroundImage: `url(${banner})`,
//           backgroundSize: "cover",
//           backgroundPosition: "bottom",
//           position: "relative",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           color: "white",
//           textAlign: "center",
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
//           },
//         }}
//       >
//         <Container sx={{ position: "relative", zIndex: 1 }}>
//           <Typography
//             variant="h1"
//             fontWeight="bold"
//             sx={{
//               fontSize: { xs: "2rem", sm: "2.2rem", md: "2.6rem" }, // Responsive font sizes
//               fontWeight: "700",
//             }}
//           >
//             Laipni lūdzam mūsu lietotnē PawClix
//           </Typography>

//           <Typography
//             variant="h3"
//             sx={{
//               fontSize: { xs: "1.8rem", sm: "2rem", md: "2.6rem" }, // Adjust font size for small screens
//               fontWeight: "700",
//             }}
//           >
//             Atrodi pazudušo mājdzīvnieku ar vienu klikšķi!
//           </Typography>

//           <Grid container spacing={isSmallScreen ? 1 : 3} justifyContent="center" sx={{ marginTop: "2rem" }}>
//             {/* Card 1: Search Pet */}
//             <Grid item xs={6} sm={6} md={4}>
//               <Link to="/pets" style={{ textDecoration: "none" }}>
//                 <Card
//                   sx={{
//                     backgroundColor: "#ffcb56",
//                     color: "#5B5B5B",
//                     textAlign: "center",
//                     width: isSmallScreen ? "80%" : "100%", // Smaller width on small screens
//                     margin: "auto", // Center align
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardContent sx={{ padding: isSmallScreen ? "10px" : "16px" }}>
//                       <SearchIcon fontSize={isSmallScreen ? "medium" : "large"} />
//                       <Typography variant={isSmallScreen ? "h6" : "h4"}>Meklēt mājdzīvnieku</Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Link>
//             </Grid>

//             {/* Card 2: Report Pet */}
//             <Grid item xs={6} sm={6} md={4}>
//               <Link to="/add-pet" style={{ textDecoration: "none" }}>
//                 <Card
//                   sx={{
//                     backgroundColor: "#5B9BD5",
//                     color: "white",
//                     textAlign: "center",
//                     width: isSmallScreen ? "80%" : "100%", // Smaller width for small screens
//                     margin: "auto",
//                   }}
//                 >
//                   <CardActionArea>
//                     <CardContent sx={{ padding: isSmallScreen ? "10px" : "16px" }}>
//                       <NotificationsActiveIcon fontSize={isSmallScreen ? "medium" : "large"} />
//                       <Typography variant={isSmallScreen ? "h6" : "h4"}>Ziņot par mājdzīvnieku</Typography>
//                     </CardContent>
//                   </CardActionArea>
//                 </Card>
//               </Link>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>
//     </Box>
//   );
// };

// export default Banner;
import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import banner from "../pages/images/banner3.jpeg"; // Ensure the path is correct
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Banner = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Small screens (xs, sm)

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: 250, md: 800 }, // Responsive height
          backgroundImage: `url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay
          },
        }}
      >
        <Container sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h1"
            fontWeight="bold"
            sx={{
              fontSize: { xs: "2rem", sm: "2.2rem", md: "2.6rem" }, // Responsive font sizes
              fontWeight: "700",
            }}
          >
            Laipni lūdzam mūsu lietotnē PawClix
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "1.8rem", sm: "2rem", md: "2.6rem" }, // Adjust font size for small screens
              fontWeight: "700",
            }}
          >
            Atrodi pazudušo mājdzīvnieku ar vienu klikšķi!
          </Typography>

          <Grid container spacing={2} justifyContent="center" sx={{ marginTop: "2rem" }}>
            {/* Button 1: Search Pet */}
            <Grid item xs={6} sm={6} md={4}>
              <Button
                component={Link}
                to="/pets"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: "#ffcb56",
                  color: "#5B5B5B",
                  fontSize: isSmallScreen ? "1rem" : "1.2rem",
                  padding: isSmallScreen ? "10px" : "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&:hover": { backgroundColor: "#f1b847" },
                }}
              >
                {/* <SearchIcon fontSize={isSmallScreen ? "medium" : "large"} /> */}
                Meklēt mājdzīvnieku
              </Button>
            </Grid>

            {/* Button 2: Report Pet */}
            <Grid item xs={6} sm={6} md={4}>
              <Button
                component={Link}
                to="/add-pet"
                variant="outlined"
                fullWidth
                sx={{
                  backgroundColor: "#5B9BD5",
                  color: "white",
                  fontSize: isSmallScreen ? "1rem" : "1.2rem",
                  padding: isSmallScreen ? "10px" : "16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  "&:hover": { backgroundColor: "#4a8cc7" },
                }}
              >
                {/* <NotificationsActiveIcon fontSize={isSmallScreen ? "medium" : "large"} /> */}
                Ziņot par mājdzīvnieku
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Banner;
