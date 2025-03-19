import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button, IconButton, TextField, Container } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { Link as MuiLink } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Import MUI Icons
import CopyAllIcon from '@mui/icons-material/CopyAll';
// import { useTranslation } from 'react-i18next';
// Import Custom hook
import useFontSizes from './utils/getFontSize';
// import { DOMAIN_URL } from '../../middleware/config';
// Import SVG Images
import SupportImg from './images/cat_stronaut_cuate.svg';

function Support() {
//   const { t } = useTranslation('supportPage'); // Initialize translation hook
  const { getTypography } = useFontSizes();
  const creditLink = 'https://storyset.com/business';
  const credit = 'Business illustrations by Storyset';
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCopyUrl = () => {
    navigator.clipboard.writeText('https://www.yourwebsite.com').then(
      () => {
        toast.success('URL copied to clipboard!');
      },
      (err) => {
        toast.error('Failed to copy URL');
      },
    );
  };

  return (
    <React.Fragment>
             <Container
                                                    component="main"
                                                    sx={{
                                                      flexGrow: 1,
                                                      py: '2rem',
                                                      // pb: '2rem',
                                                      width: '100%',
                                                      overflowX: 'hidden',
                                                    }}
                                         >
      <ToastContainer />

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
           variant="h3"
      textAlign="center"
      sx={{ mb: 3, fontWeight: "500" }}
      gutterBottom
          >
           ATBALSTĪT PROJEKTU
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="left">
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {/* Banner Image */}
            <CardMedia
              component="img"
              src={SupportImg}
              alt="Helping a partner"
              style={{
                width: isLargeScreen ? '400px' : '100%',
                maxHeight: isLargeScreen ? '100%' : '60vh', // Adjust height for large screens
                objectFit: 'cover',
              }}
            />
            <Box
              style={{
                marginTop: '0.5rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <MuiLink
                href={creditLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                {credit}
              </MuiLink>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="justify">
          <Typography variant="body1" paragraph>
          Mēs esam pateicīgi par jebkādu atbalstu vai sponsora palīdzību, kas var palīdzēt mums atklāt pilnu mūsu tīmekļa lietotnes potenciālu. Ja jūs dalāties mūsu redzējumā un vēlētos ieguldīt premium līmeņu un pakalpojumu izmantošanas izmaksās, lūdzu, sazinieties ar mums.
          </Typography>
          <Typography variant="body1" paragraph>
          Jūsu atbalsts ļaus mums uzlabot mūsu lietotni un sniegt vēl labāku pieredzi mūsu lietotājiem.
          </Typography>
          <Grid item mt={2} xs={12} sm={12} md={12} lg={12} textAlign="center" my={3}>
            <Link to="/feedback">
              <Button
                type="submit"
                size="small"
                variant="contained"
                style={{ backgroundColor: '#ffcb56', color: '#000' }}
              >
               Sazinieties
              </Button>
            </Link>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center" my={3}>
            <Button
              style={{ backgroundColor: '#ffcb56', color: '#000' }}
              onClick={() =>
                (window.location.href =
                  'https://www.paypal.com/donate/?hosted_button_id=7X42GYG39BMSG')
              }
            >
              {t('supportPage.button')}
            </Button>
          </Grid> */}
          <Typography variant="body1" paragraph>
          Jūs arī varat atbalstīt mūsu projektu, vienkārši daloties ar mūsu tīmekļa lietotni ar draugiem un citiem mājdzīvnieku īpašniekiem. Izplatiet ziņu sociālajos medijos vai pastāstiet par to saviem draugiem. Tas ir bezmaksas veids, kā palīdzēt mums augt un sasniegt vairāk cilvēku, kuri varētu gūt labumu no mūsu pakalpojuma.
          </Typography>

          {/* Shareable URL Box */}
          {/* Shareable URL Box */}

          <Typography variant="body1" paragraph>
          Dalieties ar šo saiti ar citiem:
          </Typography>
          <Box display="flex" alignItems="center" sx={{ color: 'orange !important' }}>
            <TextField
              fullWidth
              value={'pawclix.com'}
              variant="outlined"
              InputProps={{
                readOnly: true,

                endAdornment: (
                  <IconButton onClick={handleCopyUrl} color="primary">
                    <CopyAllIcon />
                  </IconButton>
                ),
              }}
            />
          </Box>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Support;
