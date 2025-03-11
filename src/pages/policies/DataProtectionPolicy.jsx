import React from 'react';

// Import React MUI Components
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
// import { useTranslation } from 'react-i18next';
// Import Variables
// import { APP_NAME, EMAIL } from '../../middleware/config';

// Import Custom hook
import useFontSizes from '../utils/getFontSize';

function DataProtectionPolicy() {
  // const { t } = useTranslation('dataProtectionPolicyPage');
  const { getTypography } = useFontSizes();
  return (
    <React.Fragment>
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
           Datu aizsardzības politika
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>Šī datu aizsardzības politika izskaidro, kā mēs aizsargājam lietotāju personīgo informāciju, kas tiek ievākta caur mūsu tīmekļa vietni un mobilo lietotni (kopīgi sauktas par "Lietotni").</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
          Informācija, ko mēs vācam
          </Typography>
          <Typography paragraph>Mēs varam vākt personīgo informāciju no lietotājiem, tostarp, bet ne tikai:</Typography>
          <ul>
            <li>Avatar</li>
            <li>Lietotājvārds</li>
            <li>Vārds</li>
            <li>Uzvārds</li>
            <li>E-pasta adrese</li>
            <li>Tālruņa numurs</li>
            <li>Tālruņa kods</li>
            <li>Parole (uzglabāta droši šifrētā formātā)</li>
            <li>Izvēlētie mājdzīvnieki</li>
            <li>Piederīgie mājdzīvnieki</li>
            <li>Komentāri</li>
            <li>Adrese (pilsēta, valsts)</li>
            <li>Preferēta valoda</li>
            <li>Noklusējuma atrašanās vieta (ģeogrāfiskās koordinātas)</li>
            <li>Tēmas preference (gaišs vai tumšs režīms)</li>
            <li>Paziņojumu preference</li>
            <li>Jaunumu abonēšanas statuss</li>
            <li>Lietotāja loma (lietotājs vai administrators)</li>
            <li>Verifikācijas statuss (e-pasts un tālrunis)</li>
            <li>Konts aktīvs status</li>
            <li>E-pasta verifikācijas tokens un tā derīguma termiņš</li>
            <li>Tālruņa verifikācijas tokens un tā derīguma termiņš</li>
            <li>Paroles atjaunošanas tokens un tā derīguma termiņš</li>
          </ul>

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
          <Typography paragraph>Mēs izmantojam ievākto informāciju šādiem mērķiem:</Typography>
          <ul>
            <li>Lai sniegtu un uzlabotu mūsu pakalpojumus</li>
            <li>Lai personalizētu lietotāja pieredzi</li>
            <li>Lai sazinātos ar lietotājiem</li>
            <li>Lai atbildētu uz pieprasījumiem un sniegtu atbalstu</li>
            <li>Lai ievērotu juridiskās saistības</li>
          </ul>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
           Data Security
          </Typography>
          <Typography paragraph>Mēs īstenojam atbilstošus drošības pasākumus, lai aizsargātu personīgo informāciju no nesankcionētas piekļuves, atklāšanas, izmaiņām vai iznīcināšanas. Lietotāju paroles ir šifrētas, lai nodrošinātu drošību.</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
           Datu glabāšana un dzēšana
          </Typography>
          <Typography paragraph>Lietotājiem ir tiesības piekļūt, atjaunināt vai dzēst savu personīgo informāciju, kas uzglabāta Lietotnē. Pēc pieprasījuma mēs dzēsīsim lietotāju datus, tostarp personīgo informāciju, ziņas un citus saistītos datus.</Typography>

          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Trešo pušu atklāšana
          </Typography>
          <Typography paragraph>Mēs nepārdodam, nemainām un citādi netransferējam personīgo informāciju trešām personām bez lietotāja piekrišanas, izņemot gadījumus, kas nepieciešami likuma prasību izpildei vai pakalpojumu nodrošināšanai, ko sniedz Lietotne.</Typography>

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
          <Typography paragraph>Mēs ievērojam piemērojamos konfidencialitātes likumus un noteikumus, tostarp Vispārīgo datu aizsardzības regulu (GDPR) un Kalifornijas patērētāju konfidencialitātes likumu (CCPA).</Typography>

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
          <Typography paragraph>Ja jums ir jautājumi vai bažas par mūsu datu aizsardzības politiku vai mūsu datu praksēm, lūdzu, sazinieties ar mums, izmantojot informāciju, kas sniegta mūsu kontaktu lapā.</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default DataProtectionPolicy;
