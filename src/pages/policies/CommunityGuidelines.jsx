import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';

function CommunityGuidelines() {
  return (
    <Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: "0", paddingRight: "0" }}>
    <Typography component="h1" variant="h3" align="center" sx={{mb: 5, fontWeight: 500}}>Kopienas vadlīnijas</Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
            Laipni lūdzam kopienā! Lai nodrošinātu pozitīvu un patīkamu pieredzi visiem lietotājiem, mēs esam izveidojuši šādus noteikumus dalībai:
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              1. Cieniet citus
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Izrādiet laipnību, empātiju un cieņu pret citiem kopienas dalībniekiem. Izvairieties no aizskarošas valodas, vajāšanas, diskriminācijas un personīgiem uzbrukumiem. Atcerieties, ka dažādi viedokļi un perspektīvas ir apsveicami, bet naidīgi vai aizskaroši komentāri netiks pieļauti.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              2. Esiet konstruktīvi
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Dalieties ar konstruktīvu atgriezenisko saiti un sniedziet nozīmīgu ieguldījumu diskusijās. Izvairieties no surogātpasta, troļļošanas un nepiemērota satura ievietošanas. Koncentrējieties uz atbalstošas un izglītojošas vides veidošanu, kurā ikviens var mācīties un attīstīties.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              3. Cieniet privātumu
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Aizsargājiet citu privātumu un neizpaudiet personīgu vai sensitīvu informāciju bez piekrišanas. Cieniet lietotāju konfidencialitāti un izvairieties no privātu lietu apspriešanas publiskos forumos.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              4. Ievērojiet lietotnes noteikumus
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Ievērojiet platformas noteikumus, konfidencialitātes politiku un citus noteikumus. Ziņojiet lietotnes administratoriem par jebkādiem pārkāpumiem vai nepiemērotu uzvedību, lai tos izskatītu un veiktu atbilstošas darbības.
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h5" sx={{ fontWeight: 600 }}>
              5. Esiet atbildīgi
            </Typography>
            <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
              Uzņemieties atbildību par savām darbībām un ieguldījumu kopienā. Palīdziet uzturēt pozitīvu un viesmīlīgu atmosfēru, ievērojot šos noteikumus un iedrošinot citus darīt to pašu.
            </Typography>
          </Box>

          <Typography paragraph sx={{ fontSize: '1rem', lineHeight: 1.6 }}>
            Piedaloties šajā kopienā, jūs piekrītat ievērot šos noteikumus un veicināt drošas, iekļaujošas un atbalstošas vides veidošanu visiem dalībniekiem. Paldies par jūsu sadarbību un apņemšanos veicināt kopienas attīstību!
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CommunityGuidelines;
