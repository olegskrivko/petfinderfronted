import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

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

import programmerImg from './images/programmer_cuate.svg';
import lightBulbImg from './images/light_bulb_bro.svg';
import scrumBoardImg from './images/scrum_board_pana.svg';
import mobileWireframeImg from './images/mobile_wireframe_amico.svg';
import walkingAroundImg from './images/walking_around_amico.svg';
import socialIdeasImg from './images/social_ideas_cuate.svg';
import navigationImg from './images/navigation_pana.svg';
import programmingImg from './images/programming_pana.svg';

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
            Par mums
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
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
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1" paragraph>
          Mūsu lietotne izmanto modernākās tehnoloģijas, lai atvieglotu pazudušu mājdzīvnieku atgriešanos pie īpašniekiem. Piedāvājam ērtu platformu, kurā var ievietot pazudušu mājdzīvnieku sludinājumus, un aktīvi strādājam, lai savienotu īpašniekus ar cilvēkiem, kuri ir atraduši mājdzīvniekus, palielinot veiksmīgas atgriešanās iespējas.
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
          Es bieži pamanīju pazudušu mājdzīvnieku sludinājumus, kas piestiprināti pie laternu stabiem, lietū izmirkuši un gandrīz nesalasāma. Ierobežotā informācija un sliktā kvalitāte padarīja gandrīz neiespējamu palīdzēt. 
          Tā rezultātā radās vajadzība pēc efektīvāka risinājuma, kas sniegtu mājdzīvnieku īpašniekiem uzticamu veidu, kā atgriezt mājdzīvniekus mājās un nodrošinātu skaidrību sarežģītajā brīdī.
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
          Vadoties pēc vēlmes radīt kaut ko nozīmīgu, es sāku domāt par to, kā mūsdienu tehnoloģijas, piemēram, sociālie tīkli, varētu palīdzēt atrisināt šo problēmu. Latvijā ir neskaitāmas sociālo mediju grupas, kas veltītas pazudušiem mājdzīvniekiem, taču informācija ir izkliedēta dažādās platformās un grupās. Tas apgrūtina centienu centralizāciju un efektīvas palīdzības sniegšanu, it īpaši vecākiem cilvēkiem, kuri var neizmantot sociālos tīklus, piemēram, Facebook.
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
          Es vēlējos izveidot lietotni, kas apvienotu kopienas un vienkāršotu meklēšanas procesu. Bet man nebija nepieciešamo zināšanu, lai to izveidotu pašam, un nolīgt kādu, kas piepildītu manu vīziju, man bija pārāk dārgi. Tāpēc es pieņēmu lēmumu: es apgūšu programmēšanu.
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
          Tas bija ilgtermiņa mērķis, kas prasīja pacietību, neatlaidību un neskaitāmas stundas mācību. Vairāk nekā gadu es veltīju laiku, lai apgūtu prasmes, kas nepieciešamas šīs lietotnes izstrādei. Es izgāju cauri daudzām iterācijām, nepārtraukti uzlabojot, pārdomājot un pilnveidojot savu pieeju. Ceļš bija izaicinošs, bet es biju apņēmies padarīt šo ideju par realitāti. Pa ceļam es ieguvu milzīgu pieredzi IT jomā, kas ir bijusi nenovērtējama.
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
            Rezultāts
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>
          Beidzot, pēc smaga darba un izmantojot mākslīgā intelekta tehnoloģijas, es pabeidzu lietotni. Šodien tas, kas sākās kā vienkārša ideja, ir izaugusi par kaut ko daudz vairāk. Mana lietotne ir gatava dzīvot, piedāvājot mājdzīvnieku īpašniekiem spēcīgu rīku, lai palīdzētu atrast pazudušos mīluļus. Tomēr man joprojām ir daudz ideju par uzlabojumiem un jaunām funkcijām, kuras vēlos īstenot. Tā kā šis ir blakusprojekts, pie kura strādāju pēc regulārā darba, laika ir maz, bet es esmu apņēmies turpināt to attīstīt un padarīt to par labāko.
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

      {/* 
      <Grid container spacing={3}>
        <Grid item mt={3} xs={12} sm={12} md={8} lg={8}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title2')}
          </Typography>
          <Typography variant="body1" style={{ textAlign: 'left' }}>
            {t('ourJourney.description2')}
          </Typography>
          <Typography
            sx={{ mt: 2 }}
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title3')}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }} style={{ textAlign: 'left' }}>
            {t('ourJourney.description3')}
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
              src={programmerImg}
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
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            sx={{ mt: 2 }}
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title4')}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }} paragraph>
            {t('ourJourney.description4')}
          </Typography>
          <Typography
            variant="h3"
            textAlign="left"
            gutterBottom
            style={{
              fontSize: getTypography('h3').fontSize,
              fontWeight: getTypography('h3').fontWeight,
            }}
          >
            {t('ourJourney.title5')}
          </Typography>
          <Typography variant="body1" paragraph>
            {t('ourJourney.description5')}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: 3 }}
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            {t('features.title')}
          </Typography>
        </Grid>
      </Grid> */}
      {/* <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} mt={5}>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: 3 }}
            gutterBottom
            style={{
              fontSize: getTypography('h2').fontSize,
              fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Galvenās funkcijas
          </Typography>
        </Grid>
      </Grid> */}
      {/* features */}
      {/* <Grid container spacing={3}>
        {features.map((feature) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={feature.id}>
            <Card>
              <CardContent>
     
                <Box style={{ display: 'flex', alignItems: 'center', marginBottom: '0.4rem' }}>
                  {feature.icon}
                  <Typography
                    variant="h3"
                    gutterBottom
                    style={{
                      fontSize: getTypography('h3').fontSize,
                      fontWeight: getTypography('h3').fontWeight,
                    }}
                  >
                    {feature.title}
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="body1"> 
                    {feature.description}
                    </Typography>
                </Box>
              </CardContent>
            </Card>
           </Grid> 
        ))} 
      </Grid> */}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12} mt={5}>
          <Typography
            variant="h2"
            textAlign="center"
            gutterBottom
  
          >
       
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: '1rem' }}>
        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent>
              <Typography
                variant="h2"
                textAlign="center"
                style={{
                  marginBottom: '0.5rem',
                  fontSize: getTypography('h2').fontSize,
                  fontWeight: getTypography('h2').fontWeight,
                }}
              >
             Atbalstiet mūsu projektu
              </Typography>
              <Typography variant="body1">
              Jūsu atbalsts palīdzēs mums turpināt mūsu misiju apvienot pazudušos mājdzīvniekus ar viņu ģimenēm. Jūs varat arī atbalstīt mūs, daloties ar saiti sociālajos tīklos vai pastāstot draugiem par mūsu tīmekļa lietotni. Katrs ieguldījums, liels vai mazs, ir svarīgs, un mēs patiesi novērtējam jūsu atbalstu!
                </Typography>
              <Link to="/support" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: '1rem',
                  }}
                >
                  ATBALSTĪT
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        {/* <a href="https://storyset.com/work">Work illustrations by Storyset</a> */}
        {/* <a href="https://storyset.com/idea">Idea illustrations by Storyset</a> */}
        <Grid item xs={12} sm={12} md={6} lg={6} textAlign="center">
          <Card style={{ backgroundColor: '#f7f9fd' }}>
            <CardContent>
              <Typography
                variant="h2"
                textAlign="center"
                style={{
                  marginBottom: '0.5rem',
                  fontSize: getTypography('h2').fontSize,
                  fontWeight: getTypography('h2').fontWeight,
                }}
              >
               Dalieties ar savu viedokli
              </Typography>
              <Typography variant="body1">
              Jūsu atsauksmes ir svarīgas, jo mēs cenšamies uzlabot mūsu lietotni un sniegt labāko pakalpojumu mājdzīvnieku īpašniekiem. Lūdzu, dalieties ar saviem komentāriem, ieteikumiem vai kritiku, lai palīdzētu mums padarīt lietotni vēl labāku.
                </Typography>
              <Link to="/feedback" style={{ textDecoration: 'none' }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginTop: '1rem',
                  }}
                >
                  ATSTĀT ATSAUKSMI
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* <Grid container spacing={3} style={{ marginTop: "1rem" }}>
        <Grid item xs={12} sm={12} md={12} lg={12} textAlign="center">
          <Typography variant="h4" gutterBottom textAlign="center">
            Our Technology Stack
          </Typography>
          <Typography variant="body1" paragraph>
            We appreciate any help or collaboration from developers who share
            our passion for building amazing web applications. If you're
            interested in contributing, please don't hesitate to reach out.
            Together, we can create something incredible!
          </Typography>
        </Grid>
      </Grid> */}
    </React.Fragment>
  );
}

export default About;
