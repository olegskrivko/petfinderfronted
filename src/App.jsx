import './App.css';
import React, { Suspense, lazy, useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { BrowserRouter as Router, Route, Routes, useNavigate  } from 'react-router-dom';
import { DrawerProvider } from './pages/DrawerContext'
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import PetList from './components/PetList';
import PetsListPage from './pages/PetsList'; // Your pets list page
import PetDetailsPage from './components/PetDetails'; // Your pet details page
import SheltersListPage from './pages/SheltersList'; // Your pets list page
import ShelterDetailsPage from './pages/ShelterDetails'; // Your pet details page
import ArticlesListPage from './pages/ArticlesList'; // Your pets list page
import ArticleDetailsPage from './pages/ArticleDetails'; // Your pets list page
import Collaborate from './pages/Collaborate'; // Your pets list page


import LoadingScreen from './pages/LoadingScreen';
import Layout from './pages/Layout';
import AuthLayout from './pages/AuthLayout'; // Layout without Navigation and Footer (for login/register)
import Home from './pages/Home';
import About from './pages/About';
import Feedback from './pages/Feedback';
import Support from './pages/Support';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Poster from './pages/Poster';
import Fun from './pages/Fun';
import PetsAdd from './pages/PetsAdd';
import Profile from './pages/Profile'

import UserSettings from './pages/UserSettings'
import UserPets from './pages/UserPets'
import UserBookmarks from './pages/UserBookmarks'

import PetTraining from './pages/PetTraining'
import EditPet from './pages/EditPet'

import TermsOfService from './pages/policies/TermsOfService';
import Disclaimer from './pages/policies/Disclaimer';
import DataProtectionPolicy from './pages/policies/DataProtectionPolicy';
import CommunityGuidelines from './pages/policies/CommunityGuidelines';
import PrivacyAndCookiePolicy from './pages/policies/PrivacyAndCookiePolicy';
import PolicyPage from './pages/PolicyPage';
import { SnackbarProvider } from 'notistack';
import { HelmetProvider } from 'react-helmet-async';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from "./pages/ResetPassword";
import Logout from './pages/Logout';
import AccountDeleted from './pages/AccountDeleted';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from "./pages/SuccessPage";
import CancelPage from "./pages/CancelPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutButton from "./pages/CheckoutButton";
import PetAddStepper from "./pages/PetAddStepper";
import PageNotFound from './pages/PageNotFound'; // Add a PageNotFound component
// import InstallPWAButton from './InstallPWAButton';
import { CssBaseline } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext'; // Path to AuthContext
import { useAuth } from './contexts/AuthContext'; // Adjust the path as needed


const PrivateRoute = ({ element }) => {
  const { user, isAuthLoading } = useAuth();
  const navigate = useNavigate();

  // 🚨 Redirect if user is not logged in (and if the auth state is not loading)
  useEffect(() => {
    if (!isAuthLoading && !user) {
      navigate("/login");  // Redirect to login if not logged in
    }
  }, [user, isAuthLoading, navigate]);

  if (!user) return null;  // If user is not logged in, return nothing

  return element; // If user is authenticated, render the route element
};
// Private Route component
// Private Route component
// const PrivateRoute = ({ element, ...rest }) => {
//   const { user } = useAuth(); // Get user from AuthContext
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate('/login'); // Redirect to login if not logged in
//     }
//   }, [user, navigate]); // Only run effect if `user` changes

//   if (!user) {
//     return null; // Return nothing or a loading indicator while checking
//   }

//   return element; // If logged in, render the route
// };
// const PrivateRoute = ({ element }) => {
//   const { user, isAuthLoading } = useAuth();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!isAuthLoading && !user) {
//       navigate("/login");
//     }
//   }, [isAuthLoading, user, navigate]);

//   if (isAuthLoading) {
//     return (
//       <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!user) return null;

//   return element;
// };

// import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const MyComponent = () => {
//   const navigate = useNavigate();

//   // Using useEffect to trigger navigation after component has mounted
//   useEffect(() => {
//     navigate("/some-path");  // Navigate to the new route after the component mounts
//   }, [navigate]);  // Empty dependency array ensures it runs once on mount

//   return <div>Content goes here</div>;
// };

// if ("serviceWorker" in navigator) {
//   window.addEventListener("load", () => {
//     navigator.serviceWorker.register("/service-worker.js").then(
//       (registration) => {
//         console.log("Service Worker registered:", registration);
//       },
//       (error) => {
//         console.log("Service Worker registration failed:", error);
//       }
//     );
//   });
// }

// const theme = createTheme({
//   typography: {
//     h1: { fontSize: "2em" },   // 32px
//     h2: { fontSize: "1.5em" }, // 24px
//     h3: { fontSize: "1.17em" },// 18.72px
//     h4: { fontSize: "1em" },   // 16px
//     h5: { fontSize: "0.83em" },// 13.28px
//     h6: { fontSize: "0.67em" },// 10.72px
//   },
// });
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#5B9BD5', 
//     },
//     secondary: {
//       main: '#FF5733', // Custom secondary color (e.g., soft blue)
//     },
//   },
//   typography: {
//     h1: { fontSize: '3rem', fontWeight: '400' },
//     h2: { fontSize: '2rem' },
//     h3: { fontSize: '1.6rem' },
//     h4: { fontSize: '1.4rem' },
//     h5: { fontSize: '1.2rem' },
//     h6: { fontSize: '1rem' },
//     body1: { fontSize: '1rem' },
//     body2: { fontSize: '0.875rem' },
//   },
// });
const theme = createTheme({
  typography: {
    h1: {
      fontSize: '3rem', // Adjust the font size for h1
      '@media (max-width:600px)': {
        fontSize: '2rem', // Responsive adjustment for small screens
      },
      fontWeight: '400'
    },
    h2: {
      fontSize: '2rem', // Adjust the font size for h2
      '@media (max-width:600px)': {
        fontSize: '1.6rem', // Responsive adjustment for small screens
      },
    },
    h3: {
      fontSize: '1.6rem', // Adjust the font size for h3
      '@media (max-width:600px)': {
        fontSize: '1.4rem', // Responsive adjustment for small screens
      },
    },
    h4: {
      fontSize: '1.4rem', // Adjust the font size for h4
      '@media (max-width:600px)': {
        fontSize: '1.2rem', // Responsive adjustment for small screens
      },
    },
    h5: {
      fontSize: '1.2rem', // Adjust the font size for h5
      '@media (max-width:600px)': {
        fontSize: '1rem', // Responsive adjustment for small screens
      },
    },
    h6: {
      fontSize: '1rem', // Adjust the font size for h6
      '@media (max-width:600px)': {
        fontSize: '0.8rem', // Responsive adjustment for small screens
      },
    },
    body1: {
      fontSize: '1rem', // Adjust the font size for body1
      '@media (max-width:600px)': {
        fontSize: '0.875rem', // Responsive adjustment for small screens
      },
    },
    body2: {
      fontSize: '0.875rem', // Adjust the font size for body2
      '@media (max-width:600px)': {
        fontSize: '0.75rem', // Responsive adjustment for small screens
      },
    },
  },})


  const stripePromise = loadStripe("pk_test_51MsAnbFtt77ZbwT7jUTgepakOdkTikP2RJ3kzrwX5Gb87hbTQidZ6ZGzUFkPxdsEuZ8pBrQUihsEcV2JefMUXRWE00it4TPUPI");

function App() {
  return (
    <HelmetProvider>
       <ThemeProvider theme={theme}>
       <CssBaseline /> {/* Ensures global styles */}
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
    <Elements stripe={stripePromise}>
    <Router>
    <AuthProvider>
      <DrawerProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            {/* <Route path="/support" element={<Support />} /> */}
            <Route 
            path="/support" 
            element={<PrivateRoute element={<Support />} />} 
          />
            <Route path="/virtual-pet-training-classes" element={<PetTraining />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
    
            <Route path="/account-deleted" element={<AccountDeleted />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/cancel" element={<CancelPage />} />
            <Route path="/fun" element={<Fun />} />
            
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            
            <Route path="/policies" element={<PolicyPage />} />
            <Route path="/privacy-and-cookie-policy" element={<PrivacyAndCookiePolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/data-protection-policy" element={<DataProtectionPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/community-guidelines" element={<CommunityGuidelines />} />
            {/* <Route path="/add-pet" element={<PetsAdd />} /> */}
            {/* <Route path="/add-pet" element={<PetAddStepper />} /> */}
            <Route 
            path="/add-pet" 
            element={<PrivateRoute element={<PetAddStepper />} />} 
          />
            
            <Route path="/pets" element={<PetsListPage />} />
            <Route path="/pets/:id" element={<PetDetailsPage />} />
         
            <Route path="/pets/:id/poster" element={<Poster />} />
           
            
            <Route path="/user-profile" element={<Profile />} />
            <Route path="/user-profile/settings" element={<UserSettings />} />
            <Route path="/user-profile/bookmarks" element={<UserBookmarks />} />
            <Route path="/user-profile/pets" element={<UserPets />} />
            {/* <Route path="/user-profile/edit-pet/:id" element={<EditPet />} /> */}
            <Route 
            path="/user-profile/edit-pet/:id" 
            element={<PrivateRoute element={<EditPet />} />} 
          />
         
            <Route path="/shelters" element={<SheltersListPage />} />
            <Route path="/shelters/:id" element={<ShelterDetailsPage />} />
            {/* <Route path="/articles" element={<ArticlesListPage />} /> */}

            <Route 
            path="/articles" 
            element={<PrivateRoute element={<ArticlesListPage />} />} 
          />
            {/* <Route path="/articles/:id" element={<ArticleDetailsPage />} /> */}
            <Route path="/articles/:slug" element={<ArticleDetailsPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>

           {/* Routes for Login/Register pages with separate layout (without Navigation and Footer) */}
            {/* <Route path='/login' element={<AuthLayout />}>
              <Route index element={<Login />} />
            </Route> */}
{/*         
            <Route path='/register' element={<AuthLayout />}>
              <Route index element={<Register />} />
            </Route>
            <Route path='/logout' element={<AuthLayout />}>
              <Route index element={<Logout />} />
            </Route>

            <Route path='/forgot-password' element={<AuthLayout />}>
              <Route index element={<ForgotPassword />} />
            </Route> */}

    

            {/* Catch-all Route for Page Not Found */}
            {/* <Route path="*" element={<PageNotFound />} /> */}

        </Routes>
      </DrawerProvider>
    </AuthProvider>
  </Router>
  </Elements>
  </SnackbarProvider>
  </ThemeProvider>
  </HelmetProvider>
  );
}

export default App;
