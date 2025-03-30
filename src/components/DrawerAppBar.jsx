// DrawerAppBar.js
import React, { useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// React MUI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
// import SearchIcon from '@mui/icons-material/Search';
// import { BASE_URL } from '../../middleware/config';
import PetsIcon from '@mui/icons-material/Pets';
import Logout from './Logout'; 
// import LanguageSelector from '../LanguageSelector';
// import ManageSearchIcon from '@mui/icons-material/ManageSearch';

// Custom Components

import { useAuth } from '../contexts/AuthContext';
// import { LanguageContext } from '../../middleware/LanguageContext';
// import { useDrawer } from '../../context/DrawerContext';

const drawerWidth = 240;

const navItems = {
  "/": "Galvenā",
  '/pets': 'Mājdzīvnieki',
  '/shelters': 'Patversmes',
  '/articles': 'Padomi',
  // "/login": "Login",
  // '/services': 'Pakalpojumi',
  // '/add-service-category': 'Add service category',
  // '/service-categories': 'services',
  // '/create-service': 'Add Service',
  // '/create-business': 'Add Business',
  // '/create-article': 'Create Article',
  // "/contact": "Contact",
  // '/user-profile': 'Profils',
  // '/admin/dashboard': 'Dashboard',
  // ...(user ? { '/user-profile': 'Profils' } : { '/login': 'Login' }) // Conditional Profile/Login

};

function DrawerAppBar(props) {
  // const { openDrawer } = useDrawer();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { user, logout } = useAuth(); // Get user and logout from AuthContext
  // const { isAuthenticated, logout } = useAuth();
  // const { user, logout } = useAuth();

  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogout = () => {
    console.log('Logging out...');
    logout();
    console.log('Logout successful');
    navigate('/login'); // Redirect to login page after logout
  };

  
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center',  }}>
      <Box 
        style={{
          width: '100%',
          height: '3.5rem',
          backgroundColor: '#5B9BD5',
       
          // backgroundColor: '#03a9f4',
          // backgroundColor: '#4B5AED', cool violet
          
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'left',
        }}
      >
       
        <Typography variant="body1"  ml={2} >
          <Link 
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              
        
            }}
          >
            <PetsIcon sx={{ marginRight: '0.4rem', color: '#ffcb56' }} /> PawClix
          </Link>
        </Typography>
      
      </Box>

      <Divider />
      <List>
      {Object.entries(navItems).map(([path, itemName]) => (
          <ListItem  key={path} disablePadding>
            <ListItemButton sx={{ textAlign: 'left' }}>
              <Link to={path} style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemText primary={itemName} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        
        {/* {user && (
          <Button
            variant="contained"
            size="small"
            onClick={handleLogout}
            sx={{ marginLeft: '10px', color: '#000', fontWeight: '500', backgroundColor: '#ffcb56',
              '&:hover': { backgroundColor: '#e0a800' },
            }}
          >
            Logout
          </Button>
        )} */}
          {/* {user ? (
          <>
            <Button
              variant="contained"
              size="small"
              onClick={handleLogout}
              sx={{
                marginLeft: '10px',
                color: '#000',
                fontWeight: '500',
                backgroundColor: '#ffcb56',
                '&:hover': {
                  backgroundColor: '#e0a800',
                },
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <Link to="/login">
            <Button
              size="small"
              sx={{
                color: '#000',
                fontWeight: '500',
                backgroundColor: '#ffcb56',
                '&:hover': {
                  backgroundColor: '#e0a800',
                },
              }}
            >
              Login
            </Button>
          </Link>
        )} */}
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: 'left' }}>
            <Link to={user ? "/user-profile" : "/login"} style={{ textDecoration: 'none', width: '100%' }}>
              <ListItemText primary={user ? "Profils" : "Login"} />
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box  mb={5} sx={{ flexGrow: 1 }}>
      <AppBar component="nav"
        sx={{
          background: '#5B9BD5' ,   
        }}
      >
        <Container disableGutters>
          <Toolbar
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div">
              <Link
                to="/"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <PetsIcon sx={{ marginRight: '0.4rem', color: '#ffcb56' }} />
                PawClix
              </Link>
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {Object.entries(navItems).map(([path, itemName]) => (
              <Link key={path} to={path}>
                <Button size='small' sx={{ color: '#fff', fontWeight: '400' }}>{itemName}</Button>
              </Link>
            ))}
             {/* {user && (
                <Button onClick={handleLogout} sx={{ color: '#fff' }}>
                  Logout
                </Button>
              )} */}
              {/* {user ? (
              <Button onClick={handleLogout} sx={{ color: '#fff' }}>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button sx={{ color: '#fff' }}>Login</Button>
              </Link>
            )} */}

             {/* Show Profile or Login Button */}
             <Link to={user ? "/user-profile" : "/login"}>
                <Button size='small' sx={{ color: '#5B5B5B', backgroundColor: "#ffcb56" }}>
                  {user ? "Profils" : "Login"}
                </Button>
              </Link>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default DrawerAppBar;