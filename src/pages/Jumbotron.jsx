// import React from 'react';
// import { Grid, Card, CardContent, Typography, Button, useMediaQuery } from '@mui/material';
// import { Link } from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';

// const Jumbotron = () => {
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Adjust for small screens

//   return (
//     <Grid container spacing={3} sx={{ padding: '20px', marginTop: '30px' }}>
//       {/* Left Side: Paragraph */}
//       <Grid item xs={12} md={6}>
//         <Card sx={{ padding: '20px' }}>
//           <CardContent>
//             <Typography variant="h4" gutterBottom>
//               Welcome to Our Pet Adoption Platform
//             </Typography>
//             <Typography variant="body1" color="textSecondary" paragraph>
//               Join us today and discover a variety of pets looking for a new home. Our platform makes it easy to find your perfect companion.
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>

//       {/* Right Side: Call-to-Action Card */}
//       <Grid item xs={12} md={6}>
//         <Card sx={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
//           <CardContent sx={{ textAlign: 'center' }}>
//             <Typography variant="h5" gutterBottom>
//               Find Your Perfect Pet
//             </Typography>
//             <Typography variant="body2" color="textSecondary" paragraph>
//               Browse through our collection of pets and start the adoption process today. You won't regret it!
//             </Typography>
//             <Button
//               component={Link}
//               to="/pets"
//               variant="contained"
//               color="primary"
//               sx={{
//                 marginTop: '20px',
//                 padding: '10px 20px',
//                 fontSize: isSmallScreen ? '1rem' : '1.2rem',
//                 width: isSmallScreen ? 'auto' : '200px',
//               }}
//             >
//               Meklēt mājdzīvnieku
//             </Button>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };

// export default Jumbotron;
import React from 'react';
import { Grid, Card, CardContent, Typography, Button, useMediaQuery, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

const Jumbotron = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Adjust for small screens

  return (
    <Grid container spacing={3} mt={4}>
      {/* Left Side: Paragraph */}
      <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: "#f7f9fd" }}>
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="h5"  gutterBottom >
            Atbalstiet mūsu projektu
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph >
            Jūsu atbalsts palīdzēs mums turpināt mūsu misiju apvienot pazudušos mājdzīvniekus ar viņu ģimenēm. Jūs varat arī atbalstīt mūs, daloties ar saiti sociālajos tīklos vai pastāstot draugiem par mūsu tīmekļa lietotni. Katrs ieguldījums, liels vai mazs, ir svarīgs, un mēs patiesi novērtējam jūsu atbalstu!
            </Typography>
            <Button
              component={Link}
              to="/support"
              variant="contained"
               sx={{backgroundColor: "#5B9BD5", color: "#fff"}}
            >
              Atbalstīt
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Right Side: Call-to-Action Card */}
      <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
            Dalieties ar savu viedokli
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
            Jūsu atsauksmes ir svarīgas, jo mēs cenšamies uzlabot mūsu lietotni un sniegt labāko pakalpojumu mājdzīvnieku īpašniekiem. Lūdzu, dalieties ar saviem komentāriem, ieteikumiem vai kritiku, lai palīdzētu mums padarīt lietotni vēl labāku.
            </Typography>
            <Button
              component={Link}
              to="/feedback"
              variant="outlined"
              sx={{ color: "#5B9BD5" }}
            >
              Atstāt atsauksmi
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Jumbotron;
