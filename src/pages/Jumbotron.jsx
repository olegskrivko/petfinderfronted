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
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%', backgroundColor: "#5B9BD5" }}>
        <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom sx={{color: "white"}}>
            Ziņot par mājdzīvnieku
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph sx={{color: "white"}}>
            Ziņojiet par atrasto vai pazaudēto mājdzīvnieku, lai palīdzētu tam atgriezties mājās!
            </Typography>
            <Button
              component={Link}
              to="/add-pet"
              variant="contained"
             
               size="large"
               sx={{backgroundColor: "#f1c40f", color: "#5B5B5B"}}
            //   sx={{
            //     marginTop: '20px',
            //     padding: '10px 20px',
            //     fontSize: isSmallScreen ? '1rem' : '1.2rem',
            //     width: isSmallScreen ? 'auto' : '200px',
            //   }}
            >
              Ziņot
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Right Side: Call-to-Action Card */}
      <Grid item xs={12} md={6}>
        <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
            Meklēt mājdzīvnieku
            </Typography>
            <Typography variant="body2" color="textSecondary" paragraph>
            Meklējiet mūsu sarakstā, lai atrastu savu pazaudēto mājdzīvnieku!
            </Typography>
            <Button
              component={Link}
              to="/pets"
              variant="contained"
              color="primary"
              size="large"
            //   sx={{
            //     marginTop: '20px',
            //     padding: '10px 20px',
            //     fontSize: isSmallScreen ? '1rem' : '1.2rem',
            //     width: isSmallScreen ? 'auto' : '200px',
            //   }}
            >
              Meklēt
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Jumbotron;
