import React from 'react';
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  CardMedia,
  Link as MuiLink,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Pets } from '@mui/icons-material';
import collaborateImage from './images/creative_team_amico_blue.svg';

const collaborationPoints = [
  'Dzīvnieku patversmēm un glābšanas organizācijām – lai palīdzētu ātrāk atrast mājas pazudušajiem mājdzīvniekiem.',
  'Veterinārajām klīnikām un speciālistiem – lai sniegtu vērtīgus padomus mājdzīvnieku īpašniekiem.',
  'Tehnoloģiju un datu partnerībām – lai uzlabotu mākslīgā intelekta un datu analīzes iespējas pazudušo mājdzīvnieku atrašanā.',
  'Sociālo tīklu un mediju sadarbībām – lai informācija par pazudušiem dzīvniekiem izplatītos pēc iespējas plašāk.',
  'Izstrādātājiem un dizaineriem – ja jūs vēlaties pievienoties mūsu komandai, lai uzlabotu lietotnes funkcionalitāti vai dizainu, mēs būsim priecīgi sadarboties.',
];

const Collaborate = () => {
  return (
    <Container component="main" maxWidth="lg" sx={{ paddingLeft: "0", paddingRight: "0"}}> 
      <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
        Sadarbības iespējas
      </Typography>

      <Grid container spacing={6} alignItems="center">
        {/* Left Side - Illustration */}
        <Grid item xs={12} md={6}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <CardMedia
              component="img"
              src={collaborateImage}
              alt="Sadarbība"
              sx={{
                width: { xs: '100%', sm: '80%', md: '100%' },
                objectFit: 'contain',
                userSelect: 'none',
                pointerEvents: 'none',
                borderRadius: 2,
                mb: 1,
              }}
            />
            <MuiLink
              href="https://storyset.com/people"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                fontSize: '0.6rem',
                fontStyle: 'italic',
                color: '#999',
                fontWeight: 300,
              }}
            >
              People illustrations by Storyset
            </MuiLink>
          </Box>
        </Grid>

        {/* Right Side - Content */}
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ mb: 3 }}>
            Mēs ticam, ka kopīga sadarbība var padarīt mūsu platformu vēl labāku!
            Ja esat dzīvnieku patversme, veterinārā klīnika, tehnoloģiju uzņēmums
            vai vienkārši kaislīgs dzīvnieku mīļotājs, mēs labprāt uzklausītu jūsu idejas.
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
            Mēs esam atvērti dažāda veida partnerībām:
          </Typography>

          <List dense>
            {collaborationPoints.map((point, index) => (
              <ListItem key={index} sx={{ pl: 0 }}>
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <Pets fontSize="small" sx={{ color: '#5B9BD5' }} />
                </ListItemIcon>
                <ListItemText primary={point} />
              </ListItem>
            ))}
          </List>

          <Typography variant="body1" sx={{ mt: 3, mb: 4 }}>
            Ja jums ir idejas vai vēlme sadarboties, sazinieties ar mums! Kopā mēs
            varam radīt drošāku un atbalstošāku vidi mājdzīvnieku īpašniekiem.
          </Typography>

          <Button
            variant="contained"
            sx={{ backgroundColor: '#5B9BD5', px: 4 }}
            href="/feedback"
            fullWidth
          >
            Sazināties ar mums
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Collaborate;
