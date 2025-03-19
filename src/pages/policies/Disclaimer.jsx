import React from 'react';

// Import React MUI Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
// import { useTranslation } from 'react-i18next';
// Import Variables
// import { APP_NAME } from '../../middleware/config';

// Import Custom hook
import useFontSizes from '../utils/getFontSize';

function Disclaimer() {
  // const { t } = useTranslation('disclaimerPage');
  const { getTypography } = useFontSizes();
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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h1"
            textAlign="center"
            sx={{ mb: 3 }}
            gutterBottom
            style={{
              fontSize: getTypography('h1').fontSize,
              fontWeight: getTypography('h1').fontWeight,
            }}
          >
            Atruna
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>Informācija, kas tiek sniegta tīmekļa lietotnē, ir paredzēta tikai vispārīgiem informatīviem nolūkiem. Lai gan mēs cenšamies uzturēt informāciju aktuālu un precīzu, mēs nesniedzam nekādas garantijas, izteiktas vai netiešas, par tīmekļa lietotnes vai tajā esošās informācijas, produktu, pakalpojumu vai saistīto grafiku pilnīgumu, precizitāti, uzticamību, piemērotību vai pieejamību jebkuram mērķim.</Typography>
          <Typography paragraph>Jebkāda paļaušanās uz šādu informāciju ir tikai jūsu pašu risks. Mēs neuzņemamies atbildību par jebkādiem zaudējumiem vai bojājumiem, tostarp, bez ierobežojumiem, netiešiem vai izrietošiem zaudējumiem vai bojājumiem, vai jebkādiem zaudējumiem vai bojājumiem, kas radušies datu vai peļņas zaudēšanas rezultātā, kas izriet no tīmekļa lietotnes izmantošanas vai saistībā ar to.</Typography>
          <Typography paragraph>Caur šo tīmekļa lietotni jūs varat izveidot saites uz citām tīmekļa vietnēm, kuras nav mūsu kontrolē. Mēs nekontrolējam šo vietņu dabu, saturu un pieejamību. Jebkuru saišu iekļaušana ne vienmēr nozīmē, ka mēs tās iesakām vai atbalstām tajās izteiktos viedokļus.</Typography>
          <Typography paragraph>Mēs darām visu iespējamo, lai tīmekļa lietotne darbotos nevainojami. Tomēr mēs neuzņemamies atbildību par to, ja tīmekļa vietne vai lietotne īslaicīgi nav pieejama tehnisku problēmu dēļ, kas ir ārpus mūsu kontroles.</Typography>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Disclaimer;
