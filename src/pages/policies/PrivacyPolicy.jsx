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

const PrivacyPolicy = () => {
  // const { t } = useTranslation('privacyPolicyPage');

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
           Privātuma politika
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>Mēs ("mēs", "mūs" vai "mūsu") pārvaldām tīmekļa lietotni (turpmāk "Lietotne"). Šī Privātuma politika apraksta mūsu praksi attiecībā uz personiskās informācijas vākšanu, izmantošanu un izpaušanu, ko sniedz Lietotnes lietotāji.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
           Informācija, ko mēs vācām
          </Typography>
          <Typography paragraph>Personīgā informācija: mēs varam vākt personīgu informāciju, piemēram, vārdu, uzvārdu, e-pasta adresi, tālruņa numuru, saglabātās vietas, mājdzīvnieku datus, valsti un vēlamo valodu.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
        Kā mēs izmantojam jūsu informāciju
          </Typography>
          <Typography paragraph>Mēs izmantojam savākto informāciju, lai nodrošinātu un uzlabotu mūsu pakalpojumus, tostarp atvieglotu mājdzīvnieku atgriešanos, personalizētu lietotāja pieredzi un sazinātos ar lietotājiem.</Typography>
          <Typography paragraph>Jūsu personīgā informācija var tikt izmantota, lai atbildētu uz pieprasījumiem, sniegtu tehnisko atbalstu un sūtītu paziņojumus, kas saistīti ar Lietotni. Mēs varam izmantot apkopotu un anonimizētu informāciju analītiskām vajadzībām un lai uzlabotu mūsu pakalpojumus. Jūsu personīgā informācija var tikt izmantota, lai atbildētu uz pieprasījumiem, sniegtu tehnisko atbalstu un sūtītu paziņojumus, kas saistīti ar Lietotni.</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
           Datu drošība
          </Typography>
          <Typography paragraph>Mēs īstenojam atbilstošus drošības pasākumus, lai aizsargātu jūsu personīgo informāciju no nesankcionētas piekļuves, izpaušanas, izmaiņām vai iznīcināšanas. Lietotāju paroli ir šifrētas, lai nodrošinātu drošību.</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
          Datu saglabāšana un dzēšana
          </Typography>
          <Typography paragraph>Lietotājiem ir tiesības piekļūt, atjaunināt vai dzēst savu personīgo informāciju, kas uzglabāta Lietotnē. Pēc pieprasījuma mēs dzēsīsim lietotāja datus, tostarp personīgo informāciju, ziņas un citus saistītus datus.</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
          Informācijas izpaušana trešajām personām
          </Typography>
          <Typography paragraph>Mēs nepārdodam, nenododam un nepārvedam jūsu personīgo informāciju trešajām personām bez jūsu piekrišanas, izņemot gadījumus, kad to prasa likums vai lai atvieglotu Lietotnes nodrošinātos pakalpojumus.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
         Sīkfailu politika
          </Typography>
          <Typography paragraph>Mēs varam izmantot sīkfailus un līdzīgas izsekošanas tehnoloģijas, lai uzlabotu lietotāja pieredzi un vāktu lietošanas datus. Lietotāji var kontrolēt sīkfailu iestatījumus caur savu pārlūkprogrammu iestatījumiem.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
           Atbilstība likumiem
          </Typography>
          <Typography paragraph>Mēs ievērojam attiecīgos privātuma likumus un noteikumus, tostarp Vispārējo datu aizsardzības regulu (GDPR) un Kalifornijas patērētāju privātuma aktu (CCPA).</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
           Bērnu privātums
          </Typography>
          <Typography paragraph>Lietotne nav paredzēta bērniem, kas jaunāki par 13 gadiem. Mēs apzināti nenoņemam personīgu informāciju no bērniem.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
          Izmaiņas šajā politikā
          </Typography>
          <Typography paragraph>Mēs paturam tiesības jebkurā laikā atjaunināt vai grozīt šo Privātuma politiku. Izmaiņas stājas spēkā nekavējoties pēc to publicēšanas Lietotnē.</Typography>
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
          <Typography paragraph>Ja jums ir jautājumi vai bažas par šo Privātuma politiku vai mūsu datu praksi, lūdzu, sazinieties ar mums, izmantojot informāciju, kas sniegta mūsu kontaktu lapā.</Typography>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
};

export default PrivacyPolicy;
