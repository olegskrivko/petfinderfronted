import { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import InstallPWAButton from '../InstallPWAButton';
import { useTranslation } from 'react-i18next';
import { LanguageContext } from '../contexts/LanguageContext';
import {APP_NAME } from "../constants/config"
 
const Footer = () => {
  const year = new Date().getFullYear();

const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext);
const { t } = useTranslation('footer'); 
  const appLinks = [
  { path: '/', label: { lv: 'Galvenā', en: 'Home', ru: 'Главная' }},
  { path: '/about', label: { lv: 'Par mums', en: 'About us', ru: 'О нас' }},
  { path: '/pets', label: { lv: 'Meklēt mājdzīvniekus', en: 'Find a pet', ru: 'Найти питомца' }},
  { path: '/services', label: { lv: 'Pakalpojumi', en: 'Services', ru: 'Услуги' }},
];

  
  const exploreLinks = [
    { path: '/shelters', label: { lv: 'Dzīvnieku patversmes', en: 'Animal shelters', ru: 'Приюты для животных'}},
    { path: '/articles', label: { lv: 'Mājdzīvnieku aprūpes padomi', en: 'Pet care tips', ru: 'Советы по уходу за питомцами'}},
    { path: '/virtual-pet-training-classes', label: { lv: 'Virtuālās dresūras nodarbības', en: 'Virtual training classes', ru: 'Виртуальные тренировки'}},
  ];
  
  const policyLinks = [
    { path: '/policies',  label: { lv: 'Politikas un vadlīnijas', en: 'Policies and guidelines', ru: 'Политика и рекомендации'}},
    { path: '/pet-matching-quiz', label: { lv: 'Kādu mājdzīvnieku izvēlēties?', en: 'Which pet should I choose?', ru: 'Какого питомца выбрать?'}},
    { path: '/frequently-asked-questions', label: {lv: 'Biežāk uzdotie jautājumi', en: 'Frequently asked questions',  ru: 'Часто задаваемые вопросы'}},
    { path: '/pricing', label: { lv: 'Maksāšanas plāns', en: 'Pricing plan', ru: 'Платёжный план'}},
  ];  
  
const infoLinks = [
  { path: '/contact',  label: { lv: 'Kontakti', en: 'Contact', ru: 'Контакты' }},
  { path: '/feedback',  label: { lv: 'Atsauksmes', en: 'Feedback', ru: 'Отзывы' }},  
  { path: '/support',  label: { lv: 'Atbalsts',  en: 'Support',  ru: 'Поддержка'}}, 
  { path: '/collaborate',  label: { lv: 'Sadarbība', en: 'Collaboration', ru: 'Сотрудничество' }}
];


  return (
    <Box
      component="footer"
      sx={{
        padding: '20px 0',
        textAlign: 'center',
        marginTop: 'auto',
        width: '100%',
        margin: 0,
        // background: '#5B9BD5 !important',
        background: 'linear-gradient(to right, rgba(0,150,136,0.7), rgba(63,81,181,0.7))',
      }}
    >
      <Container
        component="main"
        sx={{
          flexGrow: 1,
          paddingTop: '2rem',
          paddingBottom: '2rem',
          width: '100%',
          overflowX: 'hidden',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
            {t("getStarted")}
            </Typography>
  {appLinks.map(link => (

<Typography
      key={link.path}
      variant="body1"
      style={{
        fontWeight: '400',
        color: "#fff",
        pointerEvents: 'auto',
      }}
    >
      <Link key={link.path} to={link.path} style={{color: "#fff", textDecoration: 'none'}}>
      {link.label[selectedLanguage] || link.label.en}
    </Link>
    </Typography>
  
))}
          </Grid>

          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
            {t("resources")}
            </Typography>
    
              {exploreLinks.map(link => (

<Typography
      key={link.path}
      variant="body1"
      style={{
        fontWeight: '400',
        color: "#fff",
        pointerEvents: 'auto',
      }}
    >
      <Link key={link.path} to={link.path} style={{color: "#fff", textDecoration: 'none'}}>
      {link.label[selectedLanguage] || link.label.en}
    </Link>
    </Typography>
))}
          </Grid>

          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
             {t("learnMore")}
            </Typography>
                         {policyLinks.map(link => (

<Typography
      key={link.path}
      variant="body1"
      style={{
        fontWeight: '400',
        color: "#fff",
        pointerEvents: 'auto',
      }}
    >
      <Link key={link.path} to={link.path} style={{color: "#fff", textDecoration: 'none'}}>
      {link.label[selectedLanguage] || link.label.en}
    </Link>
    </Typography>
))}
          </Grid>

          <Grid item xs={12} sm={3} textAlign="left">
            <Typography variant="h6" color="#ffcb56" style={{ fontWeight: '500' }}>
          {t("info")}
            </Typography>
            {/* {renderLinks(infoLinks)} */}
            {infoLinks.map(link => (

<Typography
      key={link.path}
      variant="body1"
      style={{
        fontWeight: '400',
        color: "#fff",
        pointerEvents: 'auto',
      }}
    >
      <Link key={link.path} to={link.path} style={{color: "#fff", textDecoration: 'none'}}>
      {link.label[selectedLanguage] || link.label.en}
    </Link>
    </Typography>
))}
          </Grid>
        </Grid>
      </Container>
   {/* Install PWA Button Section */}

        <InstallPWAButton />
      <Container>
        
        <Grid container>
          
          <Grid item xs={12} textAlign="center">
            <Typography
              gutterBottom
              variant="body2"
              style={{ fontSize: '0.8rem', color: '#fff', fontWeight: '300' }}
            >
              {t("supportMessage")} - <Link
                to="/support"
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                {t("support")}
              </Link>
            </Typography>
          </Grid>
          
          <Grid item xs={12} textAlign="center">
            <Typography variant="body2" color="#fff">
              &copy; {year} {APP_NAME}. {t("copyright")}
            </Typography>

          </Grid>
          
        </Grid>

      </Container> 

    </Box>
  );
};

export default Footer;
