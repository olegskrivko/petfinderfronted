// import React from 'react';
// import { Outlet } from 'react-router-dom';

// const AuthLayout = () => {
//   return (
//     <div>
//       {/* Auth layout might just include a background, form container, etc. */}
//       <Outlet />  {/* This renders the Login or Register page */}
//     </div>
//   );
// };

// export default AuthLayout;

import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

import Footer from '../shared/components/Footer';
import DrawerAppBar from '../shared/components/DrawerAppBar';

const AuthLayout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Box component="header">
      <DrawerAppBar />
</Box>
      <Box
        component="main"
        sx={{
          flex: '1 0 auto',
          width: '100%',
          // pt: {
          //   xs: 1,
          //   sm: 3,
          //   md: 4,
          //   lg: 4
          // },
        }}
      
      >
        {/* <Container
          component="main"
          sx={{
            flexGrow: 1,
            pt: '2rem',
            pb: '2rem',
            width: '100%',
            overflowX: 'hidden',
          }}
        > */}
          {/* <Suspense fallback={<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><CircularProgress color="primary" /><Typography sx={{ ml: 2 }}>Loading...</Typography></Box>}> */}
            <Outlet />
          {/* </Suspense> */}
        {/* </Container> */}
      </Box>

      <Box component="footer">
      <Footer />
</Box>
    </Box>

  );
};

export default AuthLayout;