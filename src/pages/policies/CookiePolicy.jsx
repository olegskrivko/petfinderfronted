import React from 'react';

// Import React MUI Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

// import { useTranslation } from 'react-i18next';
// Import Variables
// import { APP_NAME, EMAIL } from '../../middleware/config';

// Import Custom hook
import useFontSizes from '../utils/getFontSize';

function CookiePolicy() {
  // const { t } = useTranslation('cookiePolicyPage');
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
           Sīkdatņu politika
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>Šī sīkdatņu politika izskaidro, kā mēs izmantojam sīkdatnes un līdzīgas izsekošanas tehnoloģijas mūsu tīmekļa vietnē un mobilajā lietotnē (kopīgi sauktas par "Lietotni").</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
          Kas ir sīkdatnes?
          </Typography>
          <Typography paragraph>Sīkdatnes ir mazi teksta faili, kas tiek saglabāti jūsu ierīcē, kad apmeklējat tīmekļa vietni vai izmantojat mobilo lietotni. Tās ļauj tīmekļa vietnei vai lietotnei atcerēties jūsu darbības un preferences laika gaitā.</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
           Kā mēs izmantojam sīkdatnes
          </Typography>
          <Typography paragraph>Mēs izmantojam sīkdatnes un līdzīgas izsekošanas tehnoloģijas šādiem mērķiem:</Typography>
          <ul>
            <li>
              <Typography>Nepieciešamās sīkdatnes</Typography>
              <Typography>Šīs sīkdatnes ir nepieciešamas Lietotnes darbībai un pamata funkcionalitātes nodrošināšanai.</Typography>
            </li>
            <li>
              <Typography>Veiktspējas un analītiskās sīkdatnes</Typography>
              <Typography>Šīs sīkdatnes palīdz mums analizēt, kā lietotāji mijiedarbojas ar Lietotni, ļaujot uzlabot tās veiktspēju un lietotāja pieredzi.</Typography>
            </li>
            <li>
              <Typography>Funkcionalitātes sīkdatnes</Typography>
              <Typography>Šīs sīkdatnes aktivizē noteiktas Lietotnes funkcijas, piemēram, personalizāciju un valodas preferences.</Typography>
            </li>
            <li>
              <Typography>Reklāmas sīkdatnes</Typography>
              <Typography>Mēs varam izmantot trešo pušu reklāmas sīkdatnes, lai rādītu personalizētas reklāmas, pamatojoties uz jūsu pārlūkošanas uzvedību.</Typography>
            </li>
          </ul>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
           Jūsu izvēles attiecībā uz sīkdatnēm
          </Typography>
          <Typography paragraph>Jums ir iespēja pieņemt vai atteikt sīkdatnes. Lielākā daļa tīmekļa pārlūku automātiski pieņem sīkdatnes, taču jūs parasti varat mainīt pārlūka iestatījumus, lai atteiktos no sīkdatnēm, ja vēlaties. Tomēr tas var liedz jums piekļūt dažām Lietotnes funkcijām.</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
          Trešo pušu sīkdatnes
          </Typography>
          <Typography paragraph>Mēs varam atļaut trešo pušu pakalpojumu sniedzējiem novietot sīkdatnes uz Lietotnes, lai sniegtu mums analītiskos un reklāmas pakalpojumus. Šīs sīkdatnes ir pakļautas attiecīgo trešo pušu konfidencialitātes politikām.</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
           Šīs politikas atjauninājumi
          </Typography>
          <Typography paragraph>Mēs varam atjaunināt šo sīkdatņu politiku no laika uz laiku, lai atspoguļotu izmaiņas mūsu praksē vai juridiskajos prasībās. Mēs aicinām jūs periodiski pārskatīt šo politiku, lai uzzinātu par jebkādām izmaiņām.</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
          Sazinieties ar mums
          </Typography>
          <Typography paragraph>Ja jums ir kādi jautājumi vai bažas par mūsu sīkdatņu izmantošanu, lūdzu, sazinieties ar mums, izmantojot informāciju, kas sniegta mūsu kontaktu lapā.</Typography>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
}

export default CookiePolicy;
