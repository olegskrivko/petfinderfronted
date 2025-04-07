import React from 'react';
import { Link } from 'react-router-dom';
{/* <a href="https://storyset.com/web">Web illustrations by Storyset</a> */}
// React MUI components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CardActionArea from '@mui/material/CardActionArea';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
// Components
import PetCounter from '../components/PetCounter'
import { motion } from "framer-motion";
// Images
import petlisting from './images/petlisting.png';
import lostdogposter from './images/lostdogposter.png';
// import Banner from '../components/Banner';
// import BannerImg from './images/catdog.jpg'
import studies from './images/studies.png';
import search from './images/search.png';
import share from './images/share.png';
import pathlocations from './images/pathlocations.png';
import RecentPets from '../components/RecentPets';
import Jumbotron from './Jumbotron';
import mainIMG from './images/404_Error_with_a_cute_animal_pana_blue.svg';
import Statistics from "../components/Statistics"
const LiquidBlob = () => (
  <motion.div
    style={{
      width: 150,
      height: 150,
      backgroundColor: "#FF6B6B",
      borderRadius: "50%",
    }}
    animate={{
      borderRadius: ["50%", "40% 60% 60% 40%", "50%"],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
    }}
  />
);



const BannerSection = ({
  title,
  imageSrc,
  btnPrimaryText,
  btnPrimaryLink,
  btnSecondaryText,
  btnSecondaryLink,
  isSmallScreen,
  isLargeScreen,
}) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
      {/* <Box
  sx={{
    position: "absolute",
    top: "20%",
    left: "-50px", // Move it out of the viewport a little
    width: 200,
    height: 200,
    backgroundColor: "#FF6B6B",
    borderRadius: "50%",
    // filter: "blur(50px)",
    zIndex: -1, // Behind everything
  }}
/> */}
{/* <Box
  sx={{
    position: "absolute",
    top: "80%",
    right: "-20%", // Move it out of the viewport a little
    width: "40%",
    height: "60%",
    backgroundColor: "#6B6BFF",
    overflow: "hidden",
    borderRadius: "50%",
    // filter: "blur(50px)",
    zIndex: -1,
  }}
/> */}


        {/* Banner Image with Title on Top */}
        <Box position="relative" display="flex" justifyContent="center">
          {/* Title */}
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              position: "absolute", // Position the title over the image
              top: "5%", // Adjust the vertical position as needed
              left: "50%",
              width: "90%",
              transform: "translateX(-50%)", // Center the title horizontally
              fontSize: isSmallScreen ? "2.2rem" : "3.2rem",
              color: "#5B5B5B",
              fontWeight: "700",
              textAlign: "center",
              letterSpacing: "2px",
              
              zIndex: 1, // Ensure the title is in front of the image
            }}
          >
            {title}
          </Typography>

          {/* Banner Image */}
          <img
            src={imageSrc}
            alt="Banner"
            style={{
              width: isLargeScreen ? "50%" : "100%",
              maxHeight: isLargeScreen ? "70vh" : "600px",
              objectFit: "cover",
            }}
          />
        </Box>
      </Grid>

      {/* Buttons */}
      <Grid item xs={12} sx={{ paddingTop: "0 !important", marginBottom: "2rem" }}>
        <Box display="flex" justifyContent="center" alignItems="center">
          {btnPrimaryText && (
            <Link to={btnPrimaryLink}>
              <Button
                variant="contained"
                size={isSmallScreen ? "small" : "large"}
                // color="primary"
                sx={{ marginRight: "20px", backgroundColor: "#5B9BD5", marginTop: isSmallScreen ? "0" : "2rem" }}
              >
                {btnPrimaryText}
              </Button>
            </Link>
          )}

          {btnSecondaryText && (
            <Link to={btnSecondaryLink}>
              <Button
                variant="outlined"
                size={isSmallScreen ? "small" : "large"}
                // color="primary"
                sx={{ color: "#5B9BD5", marginTop: isSmallScreen ? "0" : "2rem" }}
              >
                {btnSecondaryText}
              </Button>
            </Link>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};


// const BannerSection = ({
//   title,
//   imageSrc,
//   btnPrimaryText,
//   btnPrimaryLink,
//   btnSecondaryText,
//   btnSecondaryLink,
//   isSmallScreen,
//   isLargeScreen,
// }) => {
//   return (
//     <Grid container spacing={3}>
//       <Grid item xs={12}>
//         {/* Title */}
//         <Typography
//           variant="h3"
//           gutterBottom
//           sx={{
//             fontSize: isSmallScreen ? "2.2rem" : "3.2rem",
//             color: "#5B5B5B",
//             fontWeight: "700",
//             textAlign: "center",
//             letterSpacing: "2px",
//           }}
//         >
//           {title}
//         </Typography>

//         {/* Banner Image */}
//         <Box position="relative" display="flex" justifyContent="center">
//           <img
//             src={imageSrc}
//             alt="Banner"
//             style={{
//               width: isLargeScreen ? "90%" : "100%",
//               maxHeight: isLargeScreen ? "60vh" : "600px",
//               objectFit: "cover",
//             }}
//           />
//         </Box>
//       </Grid>

//       {/* Buttons */}
//       <Grid item xs={12} sx={{ paddingTop: "0 !important", marginBottom: "2rem" }}>
//         <Box display="flex" justifyContent="center" alignItems="center">
//           {btnPrimaryText && (
//             <Link to={btnPrimaryLink}>
//               <Button
//                 variant="contained"
//                 size={isSmallScreen ? "small" : "large"}
//                 color="primary"
//                 sx={{ marginRight: "20px",  marginTop: isSmallScreen ? "0" : "2rem" }}
//               >
//                 {btnPrimaryText}
//               </Button>
//             </Link>
//           )}

//           {btnSecondaryText && (
//             <Link to={btnSecondaryLink}>
//               <Button
//                 variant="outlined"
//                 size={isSmallScreen ? "small" : "large"}
//                 color="primary"
//                 sx={{  marginTop: isSmallScreen ? "0" : "2rem" }}
//               >
//                 {btnSecondaryText}
//               </Button>
//             </Link>
//           )}
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };


function Home() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

 
  return (
    <React.Fragment>
      {/* <Container
          component="main"
          sx={{
            flexGrow: 1,
            // pt: '2rem',
            // pb: '2rem',
            width: '100%',
            overflowX: 'hidden',
          }}
        > */}
      {/* <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography
            variant="h1"
            textAlign="center"
            style={{
              fontWeight: '700',
              fontSize: isSmallScreen ? '2.2rem' : '2.6rem',
            }}
          >
            <span style={{color: '#FFCB56'}}>PawClix</span> - atrodi pazudušo mājdzīvnieku ar vienu klikšķi!
          </Typography>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={BannerImg}
              alt="Dog and cat floating with balloons"
              style={{
                width: isLargeScreen ? '30%' : '100%',
                maxHeight: isLargeScreen ? '60vh' : '600px',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>
  
      </Grid> */}
      {/* <Grid container spacing={3} justifyContent="center" style={{ marginTop: '2rem' }}>
      <Grid item xs={12} sm={6} md={4}>
        <Link to="/pets" style={{ textDecoration: 'none' }}>
          <Card sx={{ backgroundColor: '#ffcb56', color: '#5B5B5B', textAlign: 'center' }}>
            <CardActionArea>
            <CardContent>
                <SearchIcon fontSize="large" />
                <Typography variant={isSmallScreen ? "h5" : "h4"}>
                  Meklēt mājdzīvnieku
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>

      <Grid item xs={12} sm={6} md={4}>
        <Link to="/add-pet" style={{ textDecoration: 'none' }}>
          <Card sx={{ backgroundColor: '#5B9BD5', color: 'white', textAlign: 'center' }}>
            <CardActionArea>
            <CardContent>
                <NotificationsActiveIcon fontSize="large" />
                <Typography variant={isSmallScreen ? "h5" : "h4"}>
                  Ziņot par mājdzīvnieku
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Link>
      </Grid>
    </Grid> */}
      {/* <PetCounter dailyCount={20} yearlyCount={7300} /> */}
      {/* </Container> */}
  
{/* <Banner /> */}
<Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: "0", paddingRight: "0"}}> 
{/* <Container
          component="main"
          sx={{
            flexGrow: 1,
            pt: '2rem',
            pb: '2rem',
            width: '100%',
            overflowX: 'hidden',
          }}
        > */}
            <BannerSection
      title="Palīdzi pazudušiem mājdzīvniekiem atgriezties mājās!"
      imageSrc={mainIMG}
      btnPrimaryText="Ziņot par mājdzīvnieku"
      btnPrimaryLink="/add-pet"
      btnSecondaryText="Meklēt mājdzīvnieku"
      btnSecondaryLink="/pets"
      isSmallScreen={isSmallScreen}
      isLargeScreen={isLargeScreen}
    />
           
                {/* <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h2"
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              marginTop: '1rem',
            }}
          >
           Pēdējie pievienotie mājdzīvnieki
          </Typography>
        </Grid>
      </Grid>

      <RecentPets /> */}
      {/* <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h2"
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              marginTop: '1rem',
            }}
          >
           Palīdzi mājdzīvniekiem atgriezties mājās
          </Typography>
        </Grid>
      </Grid> */}
      {/* <Jumbotron /> */}
      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h2"
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              color: "#5B5B5B",
              // marginTop: '1rem',
            }}
          >
            Kā tieši mēs jums palīdzam?
          </Typography>
        </Grid>
      </Grid>

      {/* <Grid container spacing={3} style={{ marginTop: '1rem' }}> */}
      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
  {/* First Card */}
  <Grid item xs={12} sm={12} md={6} lg={4} textAlign="center">
    <Card style={{ backgroundColor: '#f7f9fd', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>
        <CardMedia
          component="img"
          alt=""
          image={petlisting}
          style={{ width: 'auto', height: '80px', marginRight: '1rem' }}
        />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', color: '#5B9BD5', textAlign: isSmallScreen ? "left" : "center" }}>
            Iekļaušana mūsu mājaslapā
          </Typography>
          <Typography variant="body2" style={{textAlign: isSmallScreen ? "left" : "center"}}>
            Jūsu mājdzīvnieks tiek pievienots mūsu lapai, padarot ziņošanu par novērojumiem īpaši ērtu.
          </Typography>
        </div>
      </CardContent>
    </Card>
  </Grid>

  {/* Second Card */}
  <Grid item xs={12} sm={12} md={6} lg={4} textAlign="center">
    <Card style={{ backgroundColor: '#f7f9fd', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>
        <CardMedia
          component="img"
          alt=""
          image={lostdogposter}
          style={{ width: 'auto', height: '80px', marginRight: '1rem' }}
        />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', color: '#5B9BD5', textAlign: isSmallScreen ? "left" : "center" }}>
            Izdrukājams plakāts
          </Typography>
          <Typography variant="body2" style={{textAlign: isSmallScreen ? "left" : "center"}}>
            Saņemiet profesionāli izstrādātu pazudušā mājdzīvnieka plakātu ar QR kodu.
          </Typography>
        </div>
      </CardContent>
    </Card>
  </Grid>

  {/* Third Card */}
  <Grid item xs={12} sm={12} md={6} lg={4} textAlign="center">
    <Card style={{ backgroundColor: '#f7f9fd', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>
        <CardMedia
          component="img"
          alt=""
          image={studies}
          style={{ width: 'auto', height: '80px', marginRight: '1rem' }}
        />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', color: '#5B9BD5', textAlign: isSmallScreen ? "left" : "center" }}>
            Personīga vadība un atbalsts
          </Typography>
          <Typography variant="body2" style={{textAlign: isSmallScreen ? "left" : "center"}}>
            Mēs sniedzam atbalstu katrā solī, piedāvājot ekspertu rakstus un padomus, lai palīdzētu jums.
          </Typography>
        </div>
      </CardContent>
    </Card>
  </Grid>

  {/* Fourth Card */}
  <Grid item xs={12} sm={12} md={6} lg={4} textAlign="center">
    <Card style={{ backgroundColor: '#f7f9fd', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>
        <CardMedia
          component="img"
          alt=""
          image={search}
          style={{ width: 'auto', height: '80px', marginRight: '1rem' }}
        />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', color: '#5B9BD5', textAlign: isSmallScreen ? "left" : "center" }}>
            Sāciet PawClix meklēšanu
          </Typography>
          <Typography variant="body2" style={{textAlign: isSmallScreen ? "left" : "center"}}>
            Noskaidrojiet, vai kāds cits jau ir pamanījis vai ziņojis par jūsu mājdzīvnieku.
          </Typography>
        </div>
      </CardContent>
    </Card>
  </Grid>

  {/* Fifth Card */}
  <Grid item xs={12} sm={12} md={6} lg={4} textAlign="center">
    <Card style={{ backgroundColor: '#f7f9fd', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>
        <CardMedia
          component="img"
          alt=""
          image={share}
          style={{ width: 'auto', height: '80px', marginRight: '1rem' }}
        />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', color: '#5B9BD5', textAlign: isSmallScreen ? "left" : "center" }}>
            Koplietošana sociālajos tīklos
          </Typography>
          <Typography variant="body2" style={{textAlign: isSmallScreen ? "left" : "center"}}>
            Dalieties ar sava mājdzīvnieka informāciju sociālajos tīklos, lai palielinātu redzamību.
          </Typography>
        </div>
      </CardContent>
    </Card>
  </Grid>

  {/* Sixth Card */}
  <Grid item xs={12} sm={12} md={6} lg={4} textAlign="center">
    <Card style={{ backgroundColor: '#f7f9fd', display: 'flex', flexDirection: 'column', height: '100%' }}>
      <CardContent style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', flex: 1 }}>
        <CardMedia
          component="img"
          alt=""
          image={pathlocations}
          style={{ width: 'auto', height: '80px', marginRight: '1rem' }}
        />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', color: '#5B9BD5', textAlign: isSmallScreen ? "left" : "center" }}>
            Saņemiet novērojumu ziņojumus
          </Typography>
          <Typography variant="body2" style={{textAlign: isSmallScreen ? "left" : "center"}}>
            Pārbaudiet jaunus novērojumus, ko ziņojusi kopiena, lai sekotu līdzi norādēm par savu mājdzīvnieku.
          </Typography>
        </div>
      </CardContent>
    </Card>
  </Grid>
</Grid>
{/* <Box
  sx={{
    width: 200,
    height: 200,
    backgroundColor: "#FF6B6B",
    clipPath: "circle(50% at 50% 50%)",
    animation: "morph 5s infinite alternate ease-in-out"
  }}
/> */}



{/* </Grid> */}
{/* <Statistics /> */}

      </Container>
    </React.Fragment>
  );
}

export default Home;
