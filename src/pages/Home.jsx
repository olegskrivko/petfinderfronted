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
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SimCardDownloadIcon from '@mui/icons-material/SimCardDownload';

import MapIcon from '@mui/icons-material/Map';
// Components

import { motion } from "framer-motion";
// Images
import petlisting from './images/features/petlisting.png';
import lostdogposter from './images/features/lostdogposter.png';
import studies from './images/features/studies.png';
import search from './images/features/search.png';
import share from './images/features/share.png';
import pathlocations from './images/features/pathlocations.png';
import BuildIcon from '@mui/icons-material/Build';
import RecentPets from '../components/RecentPets';
import ComputerIcon from '@mui/icons-material/Computer';
import mainIMG from './images/home_banner/404_Error_with_a_cute_animal_pana_blue.svg';
import secondaryIMG from './images/home_banner/dog_walking_bro_blue.svg';
import ChatBot from '../components/ChatBot';
import TestimonialSlider from '../shared/components/TestimonialSlider';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import QrCodeIcon from '@mui/icons-material/QrCode';
{/* <a href="https://storyset.com/animal">Animal illustrations by Storyset</a> */}
import Statistics from "../components/Statistics"
import PetPath from '../components/PetPath'
import PetCardsRow from '../components/PetCardsRow';
import DevicesIcon from '@mui/icons-material/Devices';
import MapBanner from '../components/MapBanner';
import MapBannerBottom from '../components/MapBannerBottom';
import MapBannerDeepBottom from '../components/MapBannerDeepBottom';
import GroupsIcon from '@mui/icons-material/Groups';
import PetPathVertical from "../components/PetPathVertical"


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
    <MapBanner />
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
            {/* <BannerSection
      title="Palīdzi pazudušiem mājdzīvniekiem atgriezties mājās!"
      imageSrc={mainIMG}
      btnPrimaryText="Meklēt mājdzīvnieku"
      btnPrimaryLink="/pets"
      btnSecondaryText="Ziņot par mājdzīvnieku"
      btnSecondaryLink="/add-pet"
      isSmallScreen={isSmallScreen}
      isLargeScreen={isLargeScreen}
    /> */}
           
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
<Container component="main" maxWidth="lg" sx={{ py: 4, paddingLeft: "0", paddingRight: "0"}}> 
      {/* <Grid container spacing={3} >
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
      </Grid> */}
   
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

     <Grid container spacing={3} >
        <Grid item xs={12} textAlign="center">
               <Typography
            variant="h4"
            style={{
              // fontSize: '1.6rem',
              fontWeight: '400',
              color: '#00b5ad',
              fontFamily: "Titillium Web, sans-serif",
              textTransform: "uppercase",
              marginBottom: '2rem',
             
            }}
          >
            Digitālais atbalsts
          </Typography>
          <Typography
            variant="h2"
            style={{
              // fontSize: '1.6rem',
              fontWeight: '500',
              color: '#16477c',
              // marginTop: '1rem',
              background: "linear-gradient(60deg, #16477c 0%, #00b5ad 100%)",
              WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
            }}
          >
            Kā tieši mēs jums palīdzam?
          </Typography>
        </Grid>
      </Grid>
      
  <Grid item xs={12} sm={12} md={6} lg={3} textAlign="center">
   
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        {/* <CardMedia
          component="img"
          alt="Iekļaušana mūsu mājaslapā"
          image={petlisting}
          style={{ width: 'auto', height: '80px', marginBottom: '1rem' }}
        /> */}
         <ComputerIcon sx={{ fontSize: 60, color: '#16477c', mb: 2 }} />
    
         
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', textAlign:  "center", color: '#00b5ad', fontFamily: "Titillium Web, sans-serif" }}>
            Iekļaušana mūsu mājaslapā
          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center", color: '#616f7d', fontFamily: "Titillium Web, sans-serif" }}>
            Jūsu mājdzīvnieks tiek pievienots mūsu lapai, padarot ziņošanu par novērojumiem īpaši ērtu.
          </Typography>
        </div>
      </CardContent>
  
  </Grid>

  <Grid item xs={12} sm={12} md={6} lg={3} textAlign="center">
   
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        {/* <CardMedia
          component="img"
          alt="Izdrukājams plakāts"
          image={lostdogposter}
          style={{ width: 'auto', height: '80px', marginBottom: '1rem' }}
        /> */}
          {/* <NotificationsIcon sx={{ fontSize: 60, color: '#00b5ad', mb: 2 }} /> */}
          <QrCodeIcon sx={{ fontSize: 60, color: '#16477c', mb: 2 }} />
          
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', textAlign:  "center", color: '#00b5ad', fontFamily: "Titillium Web, sans-serif" }}>
            Izdrukājams plakāts
          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center", color: '#616f7d', fontFamily: "Titillium Web, sans-serif"  }}>
            Saņemiet profesionāli izstrādātu pazudušā mājdzīvnieka plakātu ar QR kodu.
          </Typography>
        </div>
      </CardContent>
   
  </Grid>
  <Grid item xs={12} sm={12} md={6} lg={3} textAlign="center">
   
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
      <MapIcon sx={{ fontSize: 60, color: '#16477c', mb: 2 }} />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem',  textAlign:  "center", color: '#00b5ad', fontFamily: "Titillium Web, sans-serif" }}>
            Saņemiet novērojumu ziņojumus
          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center" , color: '#616f7d', fontFamily: "Titillium Web, sans-serif" }}>
            Pārbaudiet jaunus novērojumus, ko ziņojusi kopiena, lai sekotu līdzi norādēm par savu mājdzīvnieku.
          </Typography>
        </div>
      </CardContent>
   
  </Grid>


  <Grid item xs={12} sm={12} md={6} lg={3} textAlign="center">
   
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
      <NotificationsIcon sx={{ fontSize: 60, color: '#16477c', mb: 2 }} />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem',  textAlign:  "center", color: '#00b5ad', fontFamily: "Titillium Web, sans-serif" }}>
            Push paziņojumi
          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center" , color: '#616f7d', fontFamily: "Titillium Web, sans-serif" }}>
            Saņemiet tūlītējus brīdinājumus, kad jūsu tuvumā tiek ziņots par pazudušu vai atrastu mājdzīvnieku.
          </Typography>
        </div>
      </CardContent>
   
  </Grid>

</Grid>

</Container>
</Box>
<PetPath />
{/* <Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: "0", paddingRight: "0"}}> 
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
      </Container> */}
{/* <PetCardsRow /> */}
<MapBannerBottom />
  {/* <ZigzagDashedLine /> */}
  <TestimonialSlider />
  <MapBannerDeepBottom />

<Container component="main" maxWidth="lg" sx={{ py: 4, paddingLeft: "0", paddingRight: "0"}}> 
<Grid container spacing={3} style={{ marginTop: '1rem', marginBottom: '3rem' }}>

     <Grid container spacing={3} >
        <Grid item xs={12} textAlign="center">
               <Typography
            variant="h4"
            style={{
              // fontSize: '1.6rem',
              fontWeight: '400',
              color: '#00b5ad',
              fontFamily: "Titillium Web, sans-serif",
              textTransform: "uppercase",
              marginBottom: '2rem',
             
            }}
          >
             Mūsdienīgs risinājums
          </Typography>
          <Typography
            variant="h2"
            style={{
              // fontSize: '1.6rem',
              fontWeight: '500',
              color: '#16477c',
              // marginTop: '1rem',
              background: "linear-gradient(60deg, #16477c 0%, #00b5ad 100%)",
              WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
            }}
          >
            Tehnoloģijas, kas strādā Tavā labā
          </Typography>
        </Grid>
      </Grid>
      
  <Grid item xs={12} sm={12} md={6} lg={3} textAlign="center">
   
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        {/* <CardMedia
          component="img"
          alt="Iekļaušana mūsu mājaslapā"
          image={petlisting}
          style={{ width: 'auto', height: '80px', marginBottom: '1rem' }}
        /> */}
         <GroupsIcon sx={{ fontSize: 60, color: '#16477c', mb: 2 }} />
    
         
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', textAlign:  "center", color: '#00b5ad', fontFamily: "Titillium Web, sans-serif" }}>
            Tehnoloģija, kas vieno dzīvnieku draugus
          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center", color: '#616f7d', fontFamily: "Titillium Web, sans-serif" }}>
            Mūsu lietotne savieno cilvēkus ar kopīgu mērķi – palīdzēt atrast pazudušos mājdzīvniekus. Kopiena, kas sadarbojas un rūpējas.
          </Typography>
        </div>
      </CardContent>
  
  </Grid>

  <Grid item xs={12} sm={12} md={6} lg={3} textAlign="center">
   
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
        {/* <CardMedia
          component="img"
          alt="Izdrukājams plakāts"
          image={lostdogposter}
          style={{ width: 'auto', height: '80px', marginBottom: '1rem' }}
        /> */}
          {/* <NotificationsIcon sx={{ fontSize: 60, color: '#00b5ad', mb: 2 }} /> */}
          <DevicesIcon sx={{ fontSize: 60, color: '#16477c', mb: 2 }} />
          
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', textAlign:  "center", color: '#00b5ad', fontFamily: "Titillium Web, sans-serif" }}>
            Mobilajām ierīcēm optimizēta platforma
          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center", color: '#616f7d', fontFamily: "Titillium Web, sans-serif"  }}>
            
Neatkarīgi no tā, vai lieto telefonu vai planšeti – mūsu platforma ir pielāgota ērtai un ātrai lietošanai visās ierīcēs. Piekļūsti vajadzīgajam jebkurā laikā un vietā.
          </Typography>
        </div>
      </CardContent>
   
  </Grid>
  <Grid item xs={12} sm={12} md={6} lg={3} textAlign="center">
   
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
      <SmartphoneIcon sx={{ fontSize: 60, color: '#16477c', mb: 2 }} />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem',  textAlign:  "center", color: '#00b5ad', fontFamily: "Titillium Web, sans-serif" }}>
            Lietotnes pieredze – pārlūkā
          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center" , color: '#616f7d', fontFamily: "Titillium Web, sans-serif" }}>
            Pievieno mūsu platformu savam ierīces sākuma ekrānam un izmanto to kā īstu lietotni. Bez lejupielādes no veikala – vienkārši, ātri un vienmēr pieejami.


          </Typography>
        </div>
      </CardContent>
   
  </Grid>


  <Grid item xs={12} sm={12} md={6} lg={3} textAlign="center">
   
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
      <AutoFixHighIcon sx={{ fontSize: 60, color: '#16477c', mb: 2 }} />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem',  textAlign:  "center", color: '#00b5ad', fontFamily: "Titillium Web, sans-serif" }}>
            Mākslīgais intelekts Tava mīluļa labā
          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center" , color: '#616f7d', fontFamily: "Titillium Web, sans-serif" }}>
            Mūsu AI asistents atbild uz jautājumiem par mājdzīvniekiem – no ikdienas aprūpes līdz ārkārtas situācijām. Zināšanas vienmēr pa rokai, lai Tu justos droši un informēti.
          </Typography>
        </div>
      </CardContent>
   
  </Grid>

</Grid>

</Container>
{/* <PetPathVertical /> */}

<Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: "0", paddingRight: "0"}}> 
  

{/* <BannerSection
      title="Pakalpojumi mājdzīvniekiem!"
      imageSrc={secondaryIMG}
      btnPrimaryText="Meklēt pakalpojumu"
      btnPrimaryLink="/services"
      btnSecondaryText="Pievienot pakalpojumu"
      btnSecondaryLink="/add-service"
      isSmallScreen={isSmallScreen}
      isLargeScreen={isLargeScreen}
    /> */}


{/* </Grid> */}

{/* <Statistics /> */}
<ChatBot />
      </Container>
    </React.Fragment>
  );
}

export default Home;
