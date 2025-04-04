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

const TermsOfService = () => {
  // const { t } = useTranslation('termsOfServicePage');
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
            Pakalpojumu sniegšanas noteikumi
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography paragraph>Šie Pakalpojumu sniegšanas noteikumi ("Noteikumi") regulē jūsu lietotnes ("Lietotne"), ko pārvalda mūsu komanda ("mēs", "mūsu" vai "mūsējo"), izmantošanu.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Piekrišana noteikumiem
          </Typography>
          <Typography paragraph>Piekļūstot vai izmantojot Lietotni, jūs piekrītat būt saistīts ar šiem Noteikumiem. Ja jūs nepiekrītat kādai no Noteikumu daļām, tad jums nav tiesību piekļūt Lietotnei.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Izmaiņas noteikumos
          </Typography>
          <Typography paragraph>Mēs paturam tiesības atjaunināt vai mainīt šos Noteikumus jebkurā laikā bez iepriekšēja brīdinājuma. Izmaiņas stājas spēkā uzreiz pēc to publicēšanas Lietotnē. Jūsu turpmāka Lietotnes izmantošana pēc izmaiņām nozīmē, ka jūs piekrītat izmainītajiem Noteikumiem.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
        Atbildības atruna
          </Typography>
          <Typography paragraph>Lietotne un tās saturs tiek nodrošināti "kā ir" un "kā pieejams". Mēs nesniedzam nekādas garantijas, izteiktas vai netiešas, par informācijas precizitāti, pietiekamību, uzticamību vai pilnību Lietotnē. Mēs atsakāmies no jebkādas atbildības par jebkādām kļūdām vai izlaidumiem saturā vai par jebkādiem zaudējumiem vai bojājumiem, kas izriet no Lietotnes izmantošanas vai paļaušanās uz tās saturu.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Lietotāja atbildība un drošība
          </Typography>
          <Typography paragraph>Lietotāji ir atbildīgi par sava konta piekļuves datu, tostarp paroli, konfidencialitāti un drošību. Mēs iesakām lietotājiem izveidot spēcīgas, unikālas paroles un izvairīties no vienas un tās pašas paroles izmantošanas vairākiem kontiem.</Typography>
          <Typography paragraph>Lai gan mēs īstenojam drošības pasākumus, lai aizsargātu lietotāju datus, tostarp paroļu šifrēšanu, mēs nevaram garantēt lietotāju informācijas absolūtu drošību. Lietotāji apzinās un pieņem ar informācijas pārsūtīšanu internetā un tiešsaistes pakalpojumu izmantošanu saistītos riskus.</Typography>
          <Typography paragraph>Gadījumā, ja notiek drošības pārkāpums vai nesankcionēta piekļuve lietotāju kontiem, mēs nekavējoties informēsim skartos lietotājus un veiksim atbilstošus pasākumus, lai mazinātu pārkāpuma sekas. Tomēr mēs atsakāmies no jebkādas atbildības par jebkādiem zaudējumiem vai bojājumiem, kas radušies nesankcionētas piekļuves lietotāju kontiem dēļ, tostarp, bet ne tikai, datu pārkāpumiem vai nesankcionētai konta piekļuves datu izmantošanai.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
           Intelektuālā īpašuma tiesības
          </Typography>
          <Typography paragraph>Lietotnes saturs un materiāli, tostarp, bet neaprobežojoties ar tekstu, attēliem, logotipiem un preču zīmēm, pieder mums vai ir licencēti un ir aizsargāti ar intelektuālā īpašuma likumiem. Jūs nedrīkstat izmantot, reproducēt vai izplatīt jebkādu Lietotnes saturu bez mūsu iepriekšējas rakstiskas piekrišanas.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
         Lietotāja uzvedība
          </Typography>
          <Typography paragraph>Lietotāji piekrīt neveikt nekādas darbības, kas varētu traucēt vai traucēt Lietotnes vai tās pakalpojumu darbību. Aizliegtas darbības ietver, bet neaprobežojas ar, ļaunprātīgu uzvedību, surogātpasta sūtīšanu, nesankcionētu piekļuvi vai nelikumīgām darbībām.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
        Kontu izbeigšana
          </Typography>
          <Typography paragraph>Mēs paturam tiesības izbeigt vai apturēt lietotāju kontus pēc mūsu ieskatiem jebkura iemesla dēļ, tostarp, bet ne tikai, Noteikumu pārkāpumu vai Lietotnes ļaunprātīgas izmantošanas gadījumā.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
          Atlīdzināšana
          </Typography>
          <Typography paragraph>Lietotāji piekrīt atlīdzināt un aizsargāt mūs no jebkādām prasībām, zaudējumiem vai bojājumiem, kas izriet no Lietotnes izmantošanas vai šo Noteikumu pārkāpumiem.</Typography>
          <Typography
            variant="h2"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
           Governing Law
          </Typography>
          <Typography paragraph>Šie Noteikumi tiek regulēti un interpretēti saskaņā ar Latvijas likumiem, neņemot vērā tās tiesību kolīziju principus.</Typography>
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
          <Typography paragraph>Ja jums ir kādi jautājumi vai bažas par šiem Noteikumiem, lūdzu, sazinieties ar mums, izmantojot kontaktinformāciju, kas norādīta mūsu kontaktu lapā.</Typography>
        </Grid>
      </Grid>
      </Container>
    </React.Fragment>
  );
};

export default TermsOfService;
