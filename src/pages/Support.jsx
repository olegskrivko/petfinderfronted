import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Box,
  CardMedia,
  Link as MuiLink,
  Button,
  IconButton,
  TextField,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Pets, CopyAll } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SupportImg from './images/cat_astronaut_cuate_blue.svg';

const supportPoints = [
  'Finansiāls atbalsts hostinga vai mākoņservisu segšanai.',
  'Sponsorēšana lietotnes jaunu funkciju attīstībai.',
  'Dalīšanās mūsu projektā sociālajos medijos.',
  'Ieteikumi vai kontakti, kas var palīdzēt izaugsmei.',
];

const Support = () => {
  const handleCopyUrl = () => {
    navigator.clipboard.writeText('https://pawclix.com').then(
      () => toast.success('URL nokopēta!'),
      () => toast.error('Neizdevās nokopēt URL')
    );
  };

  return (
    <>
      <ToastContainer />
      <Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: 0, paddingRight: 0 }}>
        <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
          ATBALSTĪT PROJEKTU
        </Typography>

        <Grid container spacing={6} alignItems="center">
          {/* Left Side - Illustration */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <CardMedia
                component="img"
                src={SupportImg}
                alt="Atbalsts"
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
                href="https://storyset.com/business"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: 300,
                }}
              >
                Business illustrations by Storyset
              </MuiLink>
            </Box>
          </Grid>

          {/* Right Side - Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Mēs esam pateicīgi par jebkādu atbalstu vai sponsora palīdzību, kas var
              palīdzēt mums atklāt pilnu mūsu tīmekļa lietotnes potenciālu. Ja jūs dalāties
              mūsu redzējumā un vēlētos ieguldīt premium līmeņu un pakalpojumu izmantošanas izmaksās, lūdzu, sazinieties ar mums.
            </Typography>

            <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
              Veidi, kā jūs varat palīdzēt:
            </Typography>

            <List dense>
              {supportPoints.map((point, index) => (
                <ListItem key={index} sx={{ pl: 0 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <Pets fontSize="small" sx={{ color: '#5B9BD5' }} />
                  </ListItemIcon>
                  <ListItemText primary={point} />
                </ListItem>
              ))}
            </List>

            <Typography variant="body1" sx={{ mt: 3 }}>
              Jūs arī varat atbalstīt mūsu projektu, vienkārši daloties ar šo saiti:
            </Typography>

            {/* Shareable URL */}
            <Box display="flex" alignItems="center" sx={{ my: 2 }}>
              <TextField
                fullWidth
                value="https://pawclix.com"
                variant="outlined"
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <IconButton onClick={handleCopyUrl} color="primary">
                      <CopyAll />
                    </IconButton>
                  ),
                }}
              />
            </Box>

            {/* CTA Button */}
            <Button
              variant="contained"
              fullWidth
              sx={{ backgroundColor: '#5B9BD5', px: 4 }}
              component={Link}
              to="/feedback"
            >
              Sazināties ar mums
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Support;