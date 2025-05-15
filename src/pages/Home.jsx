import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
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
import petlisting from './images/features/petlisting.png';
import lostdogposter from './images/features/lostdogposter.png';
import studies from './images/features/studies.png';
import search from './images/features/search.png';
import share from './images/features/share.png';
import pathlocations from './images/features/pathlocations.png';

import RecentPets from '../components/RecentPets';

import mainIMG from './images/home_banner/404_Error_with_a_cute_animal_pana_blue.svg';
import secondaryIMG from './images/home_banner/dog_walking_bro_blue.svg';
import ChatBot from '../components/ChatBot';
{/* <a href="https://storyset.com/animal">Animal illustrations by Storyset</a> */}
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

function Home() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

 
  return (
    <React.Fragment>
       <Helmet>
      <title>Galvenā - Atrodi savu pazudušo mājdzīvnieku</title>
      <meta
        name="description"
        content="Palīdzi atrast pazudušus mājdzīvniekus un atkalapvienot ģimenes ar saviem mīluļiem. Ziņo, meklē un dalies ar svarīgu informāciju savā reģionā."
      />
      <meta
        name="keywords"
        content="pazudis dzīvnieks, atrast suni, atrast kaķi, mājdzīvnieks pazudis, PetRescue, meklēt mīluli, atrasti dzīvnieki Latvija"
      />
      <meta property="og:title" content="Galvenā - Atrodi savu pazudušo mājdzīvnieku" />
      <meta property="og:description" content="Kopā palīdzam pazudušiem mājdzīvniekiem atgriezties mājās. Ziņojiet vai meklējiet pazudušu mīluli savā apkārtnē." />
      <meta property="og:type" content="website" />
    </Helmet>
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
      btnPrimaryText="Meklēt mājdzīvnieku"
      btnPrimaryLink="/pets"
      btnSecondaryText="Ziņot par mājdzīvnieku"
      btnSecondaryLink="/add-pet"
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
*/}
      {/* <RecentPets />  */}
</Container>
    <Box >
<Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: "0", paddingRight: "0"}}> 
      <Grid container spacing={3} >
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h2"
            style={{
              // fontSize: '1.6rem',
              fontWeight: '500',
              color: '#16477c',
              // marginTop: '1rem',
              background: "linear-gradient(60deg, #16477c 0%, #00b5ad 100%)",
              "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent"
            }}
          >
            Kā tieši mēs jums palīdzam?
          </Typography>
        </Grid>
      </Grid>
   
      {/* <Grid container spacing={3} style={{ marginTop: '1rem' }}> */}
      {/* <Grid container spacing={3} style={{ marginTop: '1rem', marginBottom: '3rem' }}>
  
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
</Grid> */}
<Grid container spacing={3} style={{ marginTop: '1rem', marginBottom: '3rem' }}>
  
  <Grid item xs={12} sm={12} md={6} lg={4} textAlign="center">
    {/* <Card style={{ backgroundColor: 'transparent', display: 'flex', flexDirection: 'column', height: '100%' }}> */}
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        <CardMedia
          component="img"
          alt="Iekļaušana mūsu mājaslapā"
          image={petlisting}
          style={{ width: 'auto', height: '80px', marginBottom: '1rem' }}
        />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', textAlign:  "center", color: '#16477c' }}>
            Iekļaušana mūsu mājaslapā
          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center", color: '#616f7d' }}>
            Jūsu mājdzīvnieks tiek pievienots mūsu lapai, padarot ziņošanu par novērojumiem īpaši ērtu.
          </Typography>
        </div>
      </CardContent>
    {/* </Card> */}
  </Grid>

  <Grid item xs={12} sm={12} md={6} lg={4} textAlign="center">
    {/* <Card style={{ backgroundColor: '#f7f9fd', display: 'flex', flexDirection: 'column', height: '100%' }}> */}
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        <CardMedia
          component="img"
          alt="Izdrukājams plakāts"
          image={lostdogposter}
          style={{ width: 'auto', height: '80px', marginBottom: '1rem' }}
        />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', textAlign:  "center", color: '#16477c' }}>
            Izdrukājams plakāts
          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center", color: '#616f7d'  }}>
            Saņemiet profesionāli izstrādātu pazudušā mājdzīvnieka plakātu ar QR kodu.
          </Typography>
        </div>
      </CardContent>
    {/* </Card> */}
  </Grid>
  <Grid item xs={12} sm={12} md={6} lg={4} textAlign="center">
    {/* <Card style={{ backgroundColor: '#f7f9fd', display: 'flex', flexDirection: 'column', height: '100%' }}> */}
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        <CardMedia
          component="img"
          alt="Saņemiet novērojumu ziņojumus"
          image={pathlocations}
          style={{ width: 'auto', height: '80px', marginBottom: '1rem' }}
        />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem',  textAlign:  "center", color: '#16477c' }}>
            Saņemiet novērojumu ziņojumus
          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center" , color: '#616f7d' }}>
            Pārbaudiet jaunus novērojumus, ko ziņojusi kopiena, lai sekotu līdzi norādēm par savu mājdzīvnieku.
          </Typography>
        </div>
      </CardContent>
    {/* </Card> */}
  </Grid>




</Grid>

</Container>
</Box>
<Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: "0", paddingRight: "0"}}> 
<BannerSection
      title="Pakalpojumi mājdzīvniekiem!"
      imageSrc={secondaryIMG}
      btnPrimaryText="Meklēt pakalpojumu"
      btnPrimaryLink="/services"
      btnSecondaryText="Pievienot pakalpojumu"
      btnSecondaryLink="/add-service"
      isSmallScreen={isSmallScreen}
      isLargeScreen={isLargeScreen}
    />


{/* </Grid> */}

{/* <Statistics /> */}
<ChatBot />
      </Container>
    </React.Fragment>
  );
}

export default Home;
