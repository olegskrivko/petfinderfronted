import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
  Grid,
  IconButton,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
// import { useTranslation } from 'react-i18next';
// Import Custom hook
// import useFontSizes from '../../utils/getFontSize';

const trainingTips = [

  {
    title: 'Sāciet ar pamata komandām',
    description:
      'Sāciet ar pamatkomandām, piemēram, sēdi, paliec un nāc. Tās nodrošina pamatu turpmākai apmācībai un palīdz nostiprināt jūsu lomu kā līderim.',
  },
  {
    title: 'Izmantojiet pozitīvu pastiprinājumu',
    description:
      'Apbalvojiet savu mājdzīvnieku ar kārumiem, uzslavām vai spēlēm, kad tas izrāda vēlamo uzvedību. Pozitīvs pastiprinājums veicina šīs uzvedības atkārtošanu.',
  },
  {
    title: 'Esi konsekvents',
    description:
      'Konsekvence ir veiksmīgas apmācības atslēga. Pastāvīgi izmantojiet vienas un tās pašas norādes un atlīdzības, lai jūsu mājdzīvnieks saprastu, kas no viņa tiek gaidīts.',
  },
  {
    title: 'Saglabājiet treniņu sesijas īsas un pozitīvas',
    description:
      'Mājdzīvniekiem ir īss uzmanības noturības laiks, tāpēc treniņu sesijas saglabājiet īsas (apmēram 10-15 minūtes) un pozitīvas. Beidziet uz pozitīvas nots, lai viņi saglabātu interesi un gaidītu nākamo sesiju.',
  },
  {
    title: "Pacietība ir būtiska",
    description:
      "Saprotiet, ka apmācībai nepieciešams laiks un pacietība. Izvairieties no vilšanās, ja progress ir lēns. Katrs mājdzīvnieks mācās savā tempā.",
  },
  {
    title: 'Izprotiet sava mājdzīvnieka šķirni un personību',
    description:
      'Dažādām šķirnēm ir dažādi temperamenti un uzvedība. Pielāgojiet savu apmācības pieeju, lai tā atbilstu jūsu mājdzīvnieka īpašajām vajadzībām un personībai.',
  },
  {
    title: 'Socializācija it atslēga',
    description:
      "No agrīna vecuma iepazīstiniet savu mājdzīvnieku ar dažādām vidēm, cilvēkiem un dzīvniekiem. Pareiza socializācija palīdz novērst uzvedības problēmas un veido pārliecību.",
  },
  {
    title: 'Meklējiet profesionālu palīdzību, ja nepieciešams',
    description:
      'Ja jums ir grūtības ar apmācību vai sastopaties ar uzvedības problēmām, kuras nevarat atrisināt, nevilcinieties meklēt palīdzību pie profesionāla trenera vai uzvedības speciālista.',
  },
  {
    title: 'Palieciet mierīgs un pozitīvs',
    description:
      'Mājdzīvnieki spēj sajust jūsu emocijas, tāpēc saglabājiet mieru un pacietību apmācību laikā. Jūsu pozitīvā attieksme palīdzēs radīt pozitīvu mācību vidi.',
  },
  {
    title: 'Izbaudiet procesu',
    description:
      'Jūsu mājdzīvnieka apmācībai vajadzētu būt jautram un vienojošam pieredzei jums abiem. Svērtiet katru sasniegumu un izbaudiet skatīšanos, kā jūsu mājdzīvnieks aug un mācās.',
  },
];

function PetTraining() {
//   const { t } = useTranslation('virtualPetTrainingClassesPage');
//   const { getTypography } = useFontSizes();
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
//   const trainingTips = t('tips', { returnObjects: true });
  const videos = [
    {
      title: 'FREE DOG TRAINING SERIES – Lesson 1: how to teach your dog to sit and drop',
      src: 'https://www.youtube.com/embed/NFSkzAuCjcI',
    },
    {
      title: 'FREE DOG TRAINING SERIES – Lesson 2: how to teach your dog to touch or target',
      src: 'https://www.youtube.com/embed/VJczka-U0D8?list=PLkvsL5zUVV5FJhwRnWXfAF96ss2vvltJ1', // Replace with actual video URL
    },
    {
      title: 'FREE DOG TRAINING SERIES – Lesson 3: how to teach your dog to walk on a loose lead',
      src: 'https://www.youtube.com/embed/Ya72yz1X40g?list=PLkvsL5zUVV5FJhwRnWXfAF96ss2vvltJ1', // Replace with actual video URL
    },
    {
      title: 'FREE DOG TRAINING SERIES – Lesson 4: how to teach your dog to come or recall',
      src: 'https://www.youtube.com/embed/CUbZ6refFKA?list=PLkvsL5zUVV5FJhwRnWXfAF96ss2vvltJ1', // Replace with actual video URL
    },
    {
      title: 'FREE DOG TRAINING SERIES – Lesson 5: how to teach your dog to wait',
      src: 'https://www.youtube.com/embed/jnKxnUvlZcU?list=PLkvsL5zUVV5FJhwRnWXfAF96ss2vvltJ1', // Replace with actual video URL
    },
    {
      title: 'FREE DOG TRAINING SERIES – Lesson 6: how to teach your dog tricks',
      src: 'https://www.youtube.com/embed/7qW2OU8n9ZM?list=PLkvsL5zUVV5FJhwRnWXfAF96ss2vvltJ1', // Replace with actual video URL
    },
  ];

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ mb: 3 }}
            gutterBottom
            style={{
            //   fontSize: getTypography('h1').fontSize,
            //   fontWeight: getTypography('h1').fontWeight,
            }}
          >
            Virtuālās mājdzīvnieku apmācības nodarbības
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="body1" sx={{ mb: 3 }} gutterBottom>
          Laipni lūdzam mūsu visaptverošajā ceļvedī par mājdzīvnieku apmācību, izmantojot atlasītus video pamācības! Šeit jūs atradīsiet saistošus resursus, kas palīdzēs jums apgūt būtiskās prasmes efektīvai mājdzīvnieku apmācībai. Neatkarīgi no tā, vai esat jauns mājdzīvnieka īpašnieks vai vēlaties pilnveidot savas metodes, šie video aptver visu, sākot no pamata komandām līdz pat uzlabotām uzvedības stratēģijām.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }} gutterBottom>
          Mājdzīvnieku apmācības apgūšana ir būtiska, lai veidotu stipru saikni, kas balstīta uz uzticēšanos un komunikāciju. Apgūstot šīs metodes, jūs uzlabosiet sava mājdzīvnieka paklausību un socializāciju, bagātinot savas attiecības ar savu pūkaino draugu.
          </Typography>
          <Typography variant="body1" sx={{ mb: 3 }} gutterBottom>
          Iedziļinieties šajās pamācībās un uzsāciet apbalvojošu ceļojumu, lai izprastu un koptu sava mājdzīvnieka uzvedību.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {videos.map((video, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 800, boxShadow: 5, borderRadius: 2 }}>
              <CardMedia
                component="div"
                sx={{
                  position: 'relative',
                  paddingTop: '56.25%', // 16:9 aspect ratio
                }}
              >
                <iframe
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                  }}
                />
              </CardMedia>
              <CardContent>
                <Typography
                  variant="h6"
                  gutterBottom
                  style={{
                    // fontSize: getTypography('h3').fontSize,
                    // fontWeight: getTypography('h3').fontWeight,
                  }}
                >
                  {video.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  style={{
                    // fontSize: getTypography('body2').fontSize,
                    // fontWeight: getTypography('body2').fontWeight,
                  }}
                >
                  Author: RSPCA South Australia
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography
            variant="h4"
            textAlign="center"
            sx={{ mb: 3, mt: 5 }}
            gutterBottom
            style={{
            //   fontSize: getTypography('h2').fontSize,
            //   fontWeight: getTypography('h2').fontWeight,
            }}
          >
            Būtiski padomi efektīvai mājdzīvnieku apmācībai
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container spacing={3}>
            {trainingTips.map((tip, index) => (
              <Grid item xs={12} key={index}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index + 1}-content`}
                    id={`panel${index + 1}-header`}
                  >
                    <Typography
                      variant="h6"
                      style={{
                        // fontSize: getTypography('h3').fontSize,
                        // fontWeight: getTypography('h3').fontWeight,
                      }}
                    >
                          <IconButton color="primary" style={{ backgroundColor: '#f7f9fd', marginRight: "1rem" }}>
                      <TipsAndUpdatesIcon />
                    </IconButton>
                     {tip.title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">{tip.description}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid>
          {/* <Grid container spacing={3}>
            
            {trainingTips.map((tip, index) => (
              <Grid item key={index} xs={12}>
                {tip.title}
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                  >
                    <Typography
                      variant="h3"
                      style={{
                        // fontSize: getTypography('h3').fontSize,
                        // fontWeight: getTypography('h3').fontWeight,
                      }}
                    >
                      {tip[`title${index + 1}`]}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1">{tip[`description${index + 1}`]}</Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            ))}
          </Grid> */}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default PetTraining;
