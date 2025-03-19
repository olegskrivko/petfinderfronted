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

function CommunityGuidelines() {
  // const { t } = useTranslation('communityGuidelinesPage');
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
            Kopienas vadlīnijas
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>Laipni lūdzam kopienā! Lai nodrošinātu pozitīvu un patīkamu pieredzi visiem lietotājiem, mēs esam izveidojuši šādus noteikumus dalībai:</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            1.Cieniet citus
          </Typography>
          <Typography paragraph>Izrādiet laipnību, empātiju un cieņu pret citiem kopienas dalībniekiem. Izvairieties no aizskarošas valodas, vajāšanas, diskriminācijas un personīgiem uzbrukumiem. Atcerieties, ka dažādi viedokļi un perspektīvas ir apsveicami, bet naidīgi vai aizskaroši komentāri netiks pieļauti.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            2. Esiet konstruktīvi
          </Typography>
          <Typography paragraph>Dalieties ar konstruktīvu atgriezenisko saiti un sniedziet nozīmīgu ieguldījumu diskusijās. Izvairieties no surogātpasta, troļļošanas un nepiemērota satura ievietošanas. Koncentrējieties uz atbalstošas un izglītojošas vides veidošanu, kurā ikviens var mācīties un attīstīties.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            3. Cieniet privātumu
          </Typography>
          <Typography paragraph>Aizsargājiet citu privātumu un neizpaužiet personīgu vai jutīgu informāciju bez piekrišanas. Cieniet lietotāju konfidencialitāti un izvairieties no privātu lietu apspriešanas publiskos forumos.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            4. Ievērojiet lietotnes noteikumus
          </Typography>
          <Typography paragraph>Ievērojiet platformas noteikumus, konfidencialitātes politiku un citus noteikumus. Ziņojiet lietotnes administratoriem par jebkādiem pārkāpumiem vai nepiemērotu uzvedību, lai tos izskatītu un veiktu atbilstošas darbības.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            5. Esiet atbildīgi
          </Typography>
          <Typography paragraph>Uzņemieties atbildību par savām darbībām un ieguldījumu kopienā. Palīdziet uzturēt pozitīvu un viesmīlīgu atmosfēru, ievērojot šos noteikumus un iedrošinot citus darīt to pašu.</Typography>
          <Typography paragraph>Piedaloties šajā kopienā, jūs piekrītat ievērot šos noteikumus un veicināt drošas, iekļaujošas un atbalstošas vides veidošanu visiem dalībniekiem. Paldies par jūsu sadarbību un apņemšanos veicināt kopienas attīstību!</Typography>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
}

export default CommunityGuidelines;
