import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

const PrivacyAndCookiePolicy = () => {
  return (
    <Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: "0", paddingRight: "0" }}>
      
      {/* Main Title */}
      <Typography component="h1" variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
        Privātuma un Sīkdatņu politika
      </Typography>
      {/* Privacy Policy Content */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          
          {/* Privacy Policy Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Privātuma politika
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Mēs ("mēs", "mūs" vai "mūsu") pārvaldām tīmekļa lietotni (turpmāk "Lietotne"). Šī Privātuma politika apraksta mūsu praksi attiecībā uz personiskās informācijas vākšanu, izmantošanu un izpaušanu, ko sniedz Lietotnes lietotāji.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              1. Informācija, ko mēs vācām
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Personīgā informācija: mēs varam vākt personīgu informāciju, piemēram, vārdu, uzvārdu, e-pasta adresi, tālruņa numuru, saglabātās vietas, mājdzīvnieku datus, valsti un vēlamo valodu.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              2. Kā mēs izmantojam jūsu informāciju
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Mēs izmantojam savākto informāciju, lai nodrošinātu un uzlabotu mūsu pakalpojumus, tostarp atvieglotu mājdzīvnieku atgriešanos, personalizētu lietotāja pieredzi un sazinātos ar lietotājiem. Jūsu personīgā informācija var tikt izmantota, lai atbildētu uz pieprasījumiem, sniegtu tehnisko atbalstu un sūtītu paziņojumus, kas saistīti ar Lietotni.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              3. Datu drošība
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Mēs īstenojam atbilstošus drošības pasākumus, lai aizsargātu jūsu personīgo informāciju no nesankcionētas piekļuves, izpaušanas, izmaiņām vai iznīcināšanas. Lietotāju paroles ir šifrētas, lai nodrošinātu drošību.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              4. Datu saglabāšana un dzēšana
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Lietotājiem ir tiesības piekļūt, atjaunināt vai dzēst savu personīgo informāciju, kas uzglabāta Lietotnē. Pēc pieprasījuma mēs dzēsīsim lietotāja datus, tostarp personīgo informāciju, ziņas un citus saistītus datus.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              5. Informācijas izpaušana trešajām personām
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Mēs nepārdodam, nenododam un nepārvedam jūsu personīgo informāciju trešajām personām bez jūsu piekrišanas, izņemot gadījumus, kad to prasa likums vai lai atvieglotu Lietotnes nodrošinātos pakalpojumus.
            </Typography>
          </Box>

          {/* Cookie Policy Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              Sīkdatņu politika
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Šī sīkdatņu politika izskaidro, kā mēs izmantojam sīkdatnes un līdzīgas izsekošanas tehnoloģijas mūsu tīmekļa vietnē un mobilajā lietotnē (kopīgi sauktas par "Lietotni").
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              1. Kas ir sīkdatnes?
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Sīkdatnes ir mazi teksta faili, kas tiek saglabāti jūsu ierīcē, kad apmeklējat tīmekļa vietni vai izmantojat mobilo lietotni. Tās ļauj tīmekļa vietnei vai lietotnei atcerēties jūsu darbības un iestatījumus laika gaitā.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              2. Kā mēs izmantojam sīkdatnes
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Mēs izmantojam sīkdatnes un līdzīgas izsekošanas tehnoloģijas šādiem mērķiem:
            </Typography>
            <ul>
              <li>
                <Typography sx={{ fontSize: '1rem', lineHeight: 1.6 }}>Nepieciešamās sīkdatnes - Šīs sīkdatnes ir nepieciešamas Lietotnes darbībai un pamata funkcionalitātes nodrošināšanai.</Typography>
              </li>
              <li>
                <Typography sx={{ fontSize: '1rem', lineHeight: 1.6 }}>Veiktspējas un analītiskās sīkdatnes - Šīs sīkdatnes palīdz mums analizēt, kā lietotāji mijiedarbojas ar Lietotni, ļaujot uzlabot tās veiktspēju un lietotāja pieredzi.</Typography>
              </li>
              <li>
                <Typography sx={{ fontSize: '1rem', lineHeight: 1.6 }}>Funkcionalitātes sīkdatnes - Šīs sīkdatnes aktivizē noteiktas Lietotnes funkcijas, piemēram, personalizāciju un valodas iestatījumus.</Typography>
              </li>
              <li>
                <Typography sx={{ fontSize: '1rem', lineHeight: 1.6 }}>Reklāmas sīkdatnes - Mēs varam izmantot trešo pušu reklāmas sīkdatnes, lai rādītu personalizētas reklāmas, pamatojoties uz jūsu pārlūkošanas uzvedību.</Typography>
              </li>
            </ul>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              3. Jūsu izvēles attiecībā uz sīkdatnēm
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Jums ir iespēja pieņemt vai atteikt sīkdatnes. Lielākā daļa tīmekļa pārlūku automātiski pieņem sīkdatnes, taču jūs parasti varat mainīt pārlūka iestatījumus, lai atteiktos no sīkdatnēm, ja vēlaties. Tomēr tas var liegt jums piekļūt dažām Lietotnes funkcijām.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              4. Trešo pušu sīkdatnes
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Mēs varam atļaut trešo pušu pakalpojumu sniedzējiem novietot sīkdatnes uz Lietotnes, lai sniegtu mums analītiskos un reklāmas pakalpojumus. Šīs sīkdatnes ir pakļautas attiecīgo trešo pušu konfidencialitātes politikām.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              5. Šīs politikas atjauninājumi
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
                Mēs periodiski atjaunināsim šo privātuma un sīkdatņu politiku, lai atspoguļotu izmaiņas mūsu praksē vai juridiskajās prasībās. Aicinām jūs regulāri pārskatīt šo politiku, lai būtu informēti par jebkādām izmaiņām.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              6. Sazinieties ar mums
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Ja jums ir jautājumi vai bažas par šo Privātuma politiku, Sīkdatņu politiku vai mūsu datu praksi, lūdzu, sazinieties ar mums, izmantojot informāciju, kas sniegta mūsu kontaktu lapā.
            </Typography>
          </Box>

        </Grid>
      </Grid>
    </Container>
  );
};

export default PrivacyAndCookiePolicy;
