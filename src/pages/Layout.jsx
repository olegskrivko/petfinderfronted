import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
// Custom Components
import Footer from '../components/Footer';
import DrawerAppBar from '../components/DrawerAppBar';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header>
        <DrawerAppBar />
      </header>
      <main style={{ flex: '1 0 auto', width: '100%' }}>
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
          {/* <Suspense fallback={<CircularProgress />}> */}
            <Outlet />
          {/* </Suspense> */}
        {/* </Container> */}
      </main>
      <footer>

        <Footer />
      </footer>

    </Box>
  );
};

export default Layout;