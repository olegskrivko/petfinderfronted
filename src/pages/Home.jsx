import React from 'react';
import { Link } from 'react-router-dom';

// React MUI components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
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

// Images
import petlisting from './images/petlisting.png';
import lostdogposter from './images/lostdogposter.png';
import BannerImg from './images/catdog.jpg'
import studies from './images/studies.png';
import search from './images/search.png';
import share from './images/share.png';
import pathlocations from './images/pathlocations.png';




function Home() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

 
  return (
    <React.Fragment>
      <Grid container spacing={3}>
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
        {/* <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          sx={{ paddingTop: '0 !important', marginBottom: '2rem' }}
        >
          
          <Box style={{ display: 'flex', justifyContent: 'center' }}>
            <Link to="/pets" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  size={isSmallScreen ? 'small' : 'large'}
                  style={{
                    marginTop: '2rem',
                    marginLeft: 'auto',
                    marginRight: '1rem',
                    display: 'flex',
                    backgroundColor: '#ffcb56',
                    color: "#5B5B5B",
                  }}
                >
                 Meklēt mājdzīvnieku
                </Button>
            </Link>

            <Link to="/add-pet" style={{ textDecoration: 'none' }}>
                <Button
                  variant="outlined"
                  color="warning"
                    size={isSmallScreen ? 'small' : 'large'}
                  style={{
                    marginTop: '2rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    display: 'flex',
                    color: '#ffcb56',
                    borderColor: '#ffcb56',
                    '&:hover': {
                      color: '#ffcb56',
                      borderColor: '#ffcb56',
                      backgroundColor: 'rgba(255, 193, 7, 0.08)',
                    },
                  }}
                >
                 Ziņot par mājdzīvnieku
                </Button>
            </Link>
          </Box>
        </Grid> */}
      </Grid>
      <Grid container spacing={3} justifyContent="center" style={{ marginTop: '2rem' }}>
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
    </Grid>
      {/* <PetCounter dailyCount={20} yearlyCount={7300} /> */}

      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} textAlign="center">
          <Typography
            variant="h2"
            style={{
              fontSize: '1.6rem',
              fontWeight: '500',
              marginTop: '1rem',
            }}
          >
            Kā tieši mēs jums palīdzam?
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <CardMedia
                component="img"
                alt=""
                image={petlisting}
                style={{ width: 'auto', height: '120px' }}
              />
              <Typography variant="h6" style={{ marginBottom: '0.5rem', color: '#22badf' }}>
              Iekļaušana mūsu mājaslapā
              </Typography>
              <Typography variant="body2">Jūsu mājdzīvnieks tiek pievienots mūsu lapai, padarot ziņošanu par novērojumiem īpaši ērtu.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <CardMedia
                component="img"
                alt=""
                image={lostdogposter}
                style={{ width: 'auto', height: '120px' }}
              />
              <Typography variant="h6" style={{ marginBottom: '0.5rem', color: '#22badf' }}>
              Izdrukājams plakāts
              </Typography>
              <Typography variant="body2">Saņemiet profesionāli izstrādātu pazudušā mājdzīvnieka plakātu ar QR kodu.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <CardMedia
                component="img"
                alt=""
                image={studies}
                style={{ width: 'auto', height: '120px' }}
              />
              <Typography variant="h6" style={{ marginBottom: '0.5rem', color: '#22badf' }}>
              Personīga vadība un atbalsts
              </Typography>
              <Typography variant="body2">Mēs sniedzam atbalstu katrā solī, piedāvājot ekspertu rakstus un padomus, lai palīdzētu jums.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <CardMedia
                component="img"
                alt=""
                image={search}
                style={{ width: 'auto', height: '120px' }}
              />
              <Typography variant="h6" style={{ marginBottom: '0.5rem', color: '#22badf' }}>
              Sāciet PawClix meklēšanu
              </Typography>
              <Typography variant="body2">Noskaidrojiet, vai kāds cits jau ir pamanījis vai ziņojis par jūsu mājdzīvnieku.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <CardMedia
                component="img"
                alt=""
                image={share}
                style={{ width: 'auto', height: '120px' }}
              />
              <Typography variant="h6" style={{ marginBottom: '0.5rem', color: '#22badf' }}>
              Koplietošana sociālajos tīklos
              </Typography>
              <Typography variant="body2">Dalieties ar sava mājdzīvnieka informāciju sociālajos tīklos, lai palielinātu redzamību.</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={6} lg={4} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <CardMedia
                component="img"
                alt=""
                image={pathlocations}
                style={{ width: 'auto', height: '120px' }}
              />
              <Typography variant="h6" style={{ marginBottom: '0.5rem', color: '#22badf' }}>
              Saņemiet novērojumu ziņojumus
              </Typography>
              <Typography variant="body2">Pārbaudiet jaunus novērojumus, ko ziņojusi kopiena, lai sekotu līdzi norādēm par savu mājdzīvnieku.</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

    </React.Fragment>
  );
}

export default Home;
