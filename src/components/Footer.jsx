import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import InstallPWAButton from '../InstallPWAButton';

const Footer = () => {

  const appLinks = [
    { path: '/about', label: 'Par mums' },
    { path: '/pets', label: 'Meklēt mājdzīvniekus' },
    // { path: '/services', label: 'Pakalpojumi' },
    { path: '/virtual-pet-training-classes', label: 'Virtuālās dresūras nodarbības' },
  ];

  const exploreLinks = [
    { path: '/shelters', label: 'Adoptējiet, nepērciet!' },
    { path: '/articles', label: 'Mājdzīvnieku aprūpes padomi' },
    // { path: '/articles/66c908b1635093acc0b86190', label: 'links.howToFindALostCat' },
    // { path: '/articles/66c90b03635093acc0b861cd', label: 'links.howToFindALostDog' },
  ];

  const policyLinks = [
    { path: '/privacy-policy', label: 'Privātuma politika' },
    { path: '/terms-of-service', label: 'Pakalpojumu noteikumi' },
    { path: '/cookie-policy', label: 'Sīkdatņu politika' },
    { path: '/data-protection-policy', label: 'Datu aizsardzības politika' },
    { path: '/disclaimer', label: 'Atruna' },
    { path: '/community-guidelines', label: 'Kopienas vadlīnijas' },
  ];

  const infoLinks = [
    { path: '/contact', label: 'Kontakti' },
    { path: '/feedback', label: 'Atsauksmes' },
    { path: '/support', label: 'Atbalsts' },
    { path: '/socials', label: 'Sociālie tīkli' },
    { path: '/collaborate', label: 'Sadarbība' },
    
  ];

  const renderLinks = (linksArray) =>
    linksArray.map((link) => (
      <Typography key={link.path} variant="body1" color="#fff" style={{ fontWeight: '400' }}>
        <Link to={link.path} style={{ color: '#fff', textDecoration: 'none' }}>
          {link.label}
        </Link>
      </Typography>
    ));

  return (
    <Box
      component="footer"
      sx={{
        padding: '20px 0',
        textAlign: 'center',
        marginTop: 'auto',
        width: '100%',
        margin: 0,
        background: '#5B9BD5 !important',
      }}
    >
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          paddingTop: '2rem',
          paddingBottom: '2rem',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
            Lietotne
            </Typography>
            {renderLinks(appLinks)}
          </Grid>

          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
            Izpētīt
            </Typography>
            {renderLinks(exploreLinks)}
          </Grid>

          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
            Politikas un vadlīnijas
            </Typography>
            {renderLinks(policyLinks)}
          </Grid>

          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
            Informācija
            </Typography>
            {renderLinks(infoLinks)}
          </Grid>
        </Grid>
      </Container>
   {/* Install PWA Button Section */}
   {/* <Box sx={{ width: '100%', padding: '10px 0', background: '#4682B4', textAlign: 'center' }}> */}
        <InstallPWAButton />
      {/* </Box> */}
      <Container>
        
        <Grid container>
          
          <Grid item xs={12} textAlign="center">
            <Typography
              gutterBottom
              variant="body2"
              style={{ fontSize: '0.8rem', color: '#fff', fontWeight: '300' }}
            >
              Mēs esam pateicīgi par jebkādu atbalstu vai sponsora palīdzību, kas var palīdzēt atklāt lietotnes pilno potenciālu - 
              <Link
                to="/support"
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                Atbalsts
              </Link>
            </Typography>
          </Grid>
          
          <Grid item xs={12} textAlign="center">
            <Typography variant="body2" color="#fff">
              &copy; 2024 Pawclix. Visas tiesības aizsargātas.
            </Typography>

          </Grid>
          
        </Grid>

      </Container> 

    </Box>
  );
};

export default Footer;
// ✅ Scientifically Calming Blues:
// #5B9BD5 (Soft Sky Blue) – Used in healthcare & corporate design for its soothing effect.
// #6FA3EF (Periwinkle Blue) – Gentle and peaceful, often used in wellness branding.
// #87CEEB (Sky Blue) – A natural, widely recognized calming blue.
// #A7C7E7 (Baby Blue) – Light, airy, and psychologically linked to relaxation.
// #4682B4 (Steel Blue) – Slightly deeper but still very calming and professional.