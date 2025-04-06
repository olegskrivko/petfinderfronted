import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import InstallPWAButton from '../InstallPWAButton';

const Footer = () => {

  const appLinks = [
    { path: '/about', label: 'Par mums', active: true },
    { path: '/pets', label: 'Meklēt mājdzīvniekus', active: true },
    { path: '/virtual-pet-training-classes', label: 'Virtuālās dresūras nodarbības', active: true },
    { path: '/services', label: 'Pakalpojumi', active: false },
    { path: '/adopt-a-pet', label: 'Adoptējiet, nepērciet!', active: false },
  ];
  
  const exploreLinks = [
    { path: '/shelters', label: 'Dzīvnieku patversmes', active: true },
    { path: '/articles', label: 'Mājdzīvnieku aprūpes padomi', active: true },
    { path: '/articles/ko-darit-ja-pazudis-kakis', label: 'Ko darīt, ja pazudis kaķis?', active: true },
    { path: '/articles/ka-rikoties-ja-pazudis-suns', label: 'Kā rīkoties, ja pazudis suns?', active: true },
    { path: '/submit-your-story', label: 'Iesūtīt savu stāstu', active: false },
  ];
  
  const policyLinks = [
    { path: '/policies', label: 'Politikas un vadlīnijas', active: true },
    { path: '/how-to-use', label: 'Kā lietot lietotni', active: false },
    { path: '/whats-new', label: 'Kas jauns?', active: false },
    { path: '/pet-matching-quiz', label: 'Kādu mājdzīvnieku izvēlēties?', active: false },
  ];  
  
  const infoLinks = [
    { path: '/contact', label: 'Kontakti', active: true },
    { path: '/feedback', label: 'Atsauksmes', active: true },
    { path: '/support', label: 'Atbalsts', active: true },
    { path: '/collaborate', label: 'Sadarbība', active: true },
    { path: '/faq', label: 'Biežāk uzdotie jautājumi', active: false },
  ];

// Function to render links with the active/inactive state
const renderLinks = (linksArray) =>
  linksArray.map((link) => (
    <Typography
      key={link.path}
      variant="body1"
      style={{
        fontWeight: '400',
        color: link.active ? '#fff' : '#D3D3D3',
        pointerEvents: link.active ? 'auto' : 'none',
      }}
    >
      {link.active ? (
        <Link to={link.path} style={{ color: 'inherit', textDecoration: 'none' }}>
          {link.label}
        </Link>
      ) : (
        link.label
      )}
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
            Izpēti iespējas
            </Typography>
            {renderLinks(exploreLinks)}
          </Grid>

          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
            Uzzini vairāk
            </Typography>
            {renderLinks(policyLinks)}
          </Grid>

          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
            Noderīga informācija
            </Typography>
            {renderLinks(infoLinks)}
          </Grid>
        </Grid>
      </Container>
   {/* Install PWA Button Section */}

        <InstallPWAButton />
      <Container>
        
        <Grid container>
          
          <Grid item xs={12} textAlign="center">
            <Typography
              gutterBottom
              variant="body2"
              style={{ fontSize: '0.8rem', color: '#fff', fontWeight: '300' }}
            >
              Mēs esam pateicīgi par jebkādu atbalstu vai sponsora palīdzību, kas var palīdzēt atklāt lietotnes pilno potenciālu - <Link
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
              &copy; 2025 PawClix. Visas tiesības aizsargātas.
            </Typography>

          </Grid>
          
        </Grid>

      </Container> 

    </Box>
  );
};

export default Footer;
