import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

// Import MUI Icons
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import ArticleIcon from '@mui/icons-material/Article';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ShareIcon from '@mui/icons-material/Share';
import StorageIcon from '@mui/icons-material/Storage';
import TuneIcon from '@mui/icons-material/Tune';
import MapIcon from '@mui/icons-material/Map';
import PrintIcon from '@mui/icons-material/Print';
import WorkIcon from '@mui/icons-material/Work';
import PushPinIcon from '@mui/icons-material/PushPin';
import GroupsIcon from '@mui/icons-material/Groups';
import { Link as MuiLink } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets'; // Example MUI icon
import { Button } from '@mui/material';
// import { useTranslation } from 'react-i18next';
// Import Custom hook
import useFontSizes from './utils/getFontSize';

// import programmerImg from './images/programmer_cuate.svg';
// import lightBulbImg from './images/light_bulb_bro.svg';
// import scrumBoardImg from './images/scrum_board_pana.svg';
import mobileWireframeImg from './images/vision/mobile_wireframe_amico.svg';
import walkingAroundImg from './images/vision/walking_around_amico.svg';
import socialIdeasImg from './images/vision/social_ideas_cuate.svg';
import navigationImg from './images/vision/navigation_pana.svg';
import programmingImg from './images/vision/programming_pana.svg';
import Jumbotron from './Jumbotron';

function About() {
   const { getTypography } = useFontSizes();
  {
    /* <a href="https://storyset.com/technology">Technology illustrations by Storyset</a> */
  }
  // <a href="https://storyset.com/people">People illustrations by Storyset</a>

  const features = [
    {
      id: 1,
      title: 'Pazuduša vai atrasta mājdzīvnieka ziņojums',
      description: 'Ātri iesniedziet informāciju par savu pazudušo vai atrasto mājdzīvnieku mūsu kopienai un palieliniet atkalredzēšanās iespējas.',
      icon: (
        <PostAddIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 2,
      title: 'Ziņot par pēdējo redzēto atrašanās vietu',
      description: 'Ļaujiet lietotājiem ziņot par pēdējo redzēto atrašanās vietu pazudušā mājdzīvnieka kartē, palīdzot citiem kopienas lietotājiem atrast un atkalredzēt mājdzīvniekus.',
      icon: (
        <PushPinIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 3,
      title: 'Pazudušo un atrasto mājdzīvnieku karte',
      description: 'Funkcija, kas attēlo karti ar pazudušajiem un atrastajiem mājdzīvniekiem apkārtnē, ļaujot lietotājiem viegli atrast un identificēt pazudušos mājdzīvniekus.',
      icon: (
        <MapIcon style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }} />
      ),
    },
    {
      id: 4,
      title: 'Mobilajām ierīcēm optimizēta platforma',
      description: 'Mūsu mobilajām ierīcēm draudzīgā lietotne izmanto jaunākās tehnoloģijas, lai piedāvātu inovāciju platformu mājdzīvnieku atkalredzēšanai ar viņu īpašniekiem.',
      icon: (
        <AppShortcutIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 5,
      title: 'Mājdzīvnieku veselības ieskati',
      description: 'Atklājiet svarīgus ieskatus mājdzīvnieku veselībā un iegūstiet rīkus, lai pārvaldītu un sekotu līdzi vakcinācijām, nodrošinot, ka jūsu mīlulis paliek vesels un laimīgs.',
      icon: (
        <HealthAndSafetyIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 6,
      title: 'Push paziņojumi',
      description: 'Saņemiet tūlītējus brīdinājumus, kad jūsu tuvumā tiek ziņots par pazudušu vai atrastu mājdzīvnieku. Esiet pirmais, kas palīdzēs atkalredzēt pūkainos draugus ar viņu īpašniekiem.',
      icon: (
        <NotificationsIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 7,
      title: 'Padomi un resursi',
      description: 'Piekļūstiet resursiem mājdzīvnieku īpašniekiem, kas piedāvā vadlīnijas, kā novērst mājdzīvnieku pazušanu un ko darīt, ja jūsu mājdzīvnieks ir pazudis.',
      icon: (
        <TipsAndUpdatesIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 8,
      title: 'Sociālo mediju integrācija',
      description: 'Integrācija ar sociālajiem medijiem, lai palīdzētu izplatīt informāciju par pazudušiem mājdzīvniekiem un veicinātu saziņu starp lietotājiem.',
      icon: (
        <ShareIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 9,
      title: 'Meklēšanas filtri',
      description: 'Ļaujiet lietotājiem filtrēt pazudušo un atrasto mājdzīvnieku sludinājumus pēc atrašanās vietas, sugas, šķirnes, krāsas un citiem kritērijiem.',
      icon: (
        <TuneIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 10,
      title: 'Pazudušu mājdzīvnieku plakāti',
      description: 'Funkcija, kas ļauj lietotājiem viegli izveidot un drukāt plakātus par pazudušiem mājdzīvniekiem, lai izplatītu tos vietējā kopienā.',
      icon: (
        <PrintIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 11,
      title: 'Mājdzīvnieku pakalpojumu katalogs',
      description: 'Atklājiet plašu mājdzīvnieku pakalpojumu klāstu, ieskaitot veterinārārstus, patversmes, frizierus, trenerus un citus.',
      icon: (
        <WorkIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
    {
      id: 12,
      title: 'Kopienas Sasaistīšana',
      description: 'Tiek apvienoti dzīvnieku mīļotāji ar kopīgu mērķi—palīdzēt pazudušiem mājdzīvniekiem atgriezties mājās. Lietotne savieno cilvēkus, kuri var atbalstīt viens otru meklēšanā.',
      icon: (
        <GroupsIcon
          style={{ width: '40px', height: '40px', marginRight: '1rem', color: '#22badf' }}
        />
      ),
    },
  ];

  return (
<Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: "0", paddingRight: "0" }}>
<Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
Mūsu Vīzija
      </Typography>
      {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Mūsu mērķis
          </Typography>
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1" paragraph>

          Lietotne ir radīta, lai apvienotu sabiedrību kopīgā mērķī – palīdzēt pazudušiem mājdzīvniekiem ātrāk atgriezties pie to īpašniekiem. Ar mūsdienu tehnoloģiju, tostarp mākslīgā intelekta un reāllaika paziņojumu izmantošanu, tā nodrošina efektīvu, vienkāršu un drošu platformu, kurā dzīvnieku īpašnieki var dalīties ar informāciju, kā arī sekot dzīvnieka meklēšanas gaitai. Turklāt, lietotne kļūs par galveno resursu, kas ietver arī citus dzīvnieku saistītus pakalpojumus, padomus un informāciju, palīdzot radīt vienotu un pārskatāmu vidi, kas veicina veiksmīgu dzīvnieku atgriešanos pie to īpašniekiem.

          </Typography>
        
        </Grid>
      </Grid>

      <Grid container spacing={3} mt={2}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Mūsu Ceļš
          </Typography>
        </Grid>
      </Grid>
      {/* <a href="https://storyset.com/work">Work illustrations by Storyset</a> */}
      {/* lefttext */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
           Problēma
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>

          Cik bieži ir redzēti pazuduša dzīvnieka plakāti uz stabiem? Vai ir bijušas domas – vai dzīvnieks jau ir atrasts, vai joprojām tiek meklēts? Bez papildu informācijas šie jautājumi paliek neatbildēti, un, ja dzīvnieks ir atrasts, plakāts joprojām karājas, radot maldinošu priekšstatu. Piedāvātais risinājums – profesionāli izstrādāti plakāti ar QR kodu, kuru var noskenēt, lai piekļūtu aplikācijai un iegūtu aktuālāko informāciju par konkrēto dzīvnieku. Plakāti ārā neiztur ilgi – lietus, vējš un saule tos ātri sabojā. Risinājums ļauj sekot dzīvnieka meklēšanas gaitai aplikācijā, kur informācija vienmēr ir aktuāla, skaidra un pārskatāma.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={walkingAroundImg}
              alt="Feedabck"
            //   style={{
            //     width: 'auto',
            //     maxHeight: '380px',
            //     objectFit: 'cover',
            //   }}
            />
            <Box
              style={{
                marginTop: '0.5rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <MuiLink
                href="https://storyset.com/people"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                People illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* rightext */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4} order={{ xs: 2, md: 1 }}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={socialIdeasImg}
              alt="Feedabck"
              style={{
                width: 'auto',
                maxHeight: '380px',
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
                href="https://storyset.com/social-media"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                Social media illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} order={{ xs: 1, md: 2 }}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            Ideja
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>
          Ir iespēja risināt šo problēmu, izmantojot mūsdienu tehnoloģijas, īpaši sociālos medijus. Lai gan Latvijā pastāv vairākas sociālo mediju grupas, kas veltītas pazudušiem dzīvniekiem, informācija ir izkliedēta dažādās platformās, kas apgrūtina efektīvu palīdzības sniegšanu. Šī problēma ir īpaši izteikta cilvēkiem, kuriem ir grūtības izmantot populāras platformas, piemēram, Facebook.
          </Typography>
        </Grid>
      </Grid>
      {/* lefttext */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
        Izaicinājums
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>

          Izstrādāta lietotne, kas spēj apvienot kopienu un vienkāršot pazudušo dzīvnieku meklēšanas procesu. Tās mērķis ir radīt risinājumu, kas būtu ne tikai efektīvs, bet arī tehnoloģiski moderns. Lietotnē ietvertas jaunākās iespējas, tostarp paziņojumu sistēma, kas ļauj savlaicīgi saņemt informāciju par tuvumā pazudušiem vai atrastiem dzīvniekiem. Šāda pieeja ļauj ātrāk reaģēt, palielinot dzīvnieku atgriešanās iespējas mājās.


          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={programmingImg}
              alt="Feedabck"
              style={{
                width: 'auto',
                maxHeight: '380px',
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
                href="https://storyset.com/technology"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                Technology illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {/* <a href="https://storyset.com/technology">Technology illustrations by Storyset</a> */}
      {/* <a href="https://storyset.com/technology">Technology illustrations by Storyset</a> */}

      {/* <a href="https://storyset.com/user">User illustrations by Storyset</a> */}
      {/* rightext */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4} order={{ xs: 2, md: 1 }}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={mobileWireframeImg}
              alt="Feedabck"
              style={{
                width: 'auto',
                maxHeight: '380px',
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
                href="https://storyset.com/web"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                Web illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={8} order={{ xs: 1, md: 2 }}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            Ceļš
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>
          Lietotnes izstrādes ceļš prasīja pacietību, neatlaidību un mērķtiecīgu pieeju, pārejot cauri vairākiem posmiem, vienmēr uzlabojot un pilnveidojot risinājumu. Šī pieredze ļāva iegūt vērtīgas zināšanas un prasmes IT jomā, kas būs nozīmīgas arī nākotnē. Lietotne atrodas savā sākotnējā posmā, un tās attīstībā ir vēl garš ceļš ejams, lai tā kļūtu par pilnīgu risinājumu.          </Typography>
        </Grid>
      </Grid>
      {/* lefttext */}
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            Rezultāts
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>
          Ideja, kas sākās kā vienkāršs iecerējums, ir attīstījusies par nozīmīgu un noderīgu rīku mājdzīvnieku īpašniekiem. Izmantojot mākslīgā intelekta tehnoloģijas, ir izstrādāta lietotne, kas efektīvi palīdz meklēt un atrast pazudušos dzīvniekus. Projekts turpina attīstīties, ar plāniem pievienot jaunas funkcijas, lai padarītu lietotni vēl efektīvāku un noderīgāku. Mērķis ir sniegt praktisku un ilgtspējīgu risinājumu tiem, kam tas visvairāk nepieciešams.
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box
            position="relative"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <CardMedia
              component="img"
              src={navigationImg}
              alt="Feedabck"
              style={{
                width: 'auto',
                maxHeight: '380px',
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
                href="https://storyset.com/city"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.6rem',
                  fontStyle: 'italic',
                  color: '#999',
                  fontWeight: '300',
                }}
              >
                City illustrations by Storyset
              </MuiLink>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Jumbotron />



      </Container>

  );
}

export default About;
