import './App.css';
import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

import PrivacyPolicy from './pages/policies/PrivacyPolicy';
import TermsOfService from './pages/policies/TermsOfService';
import CookiePolicy from './pages/policies/CookiePolicy';
import Disclaimer from './pages/policies/Disclaimer';
import DataProtectionPolicy from './pages/policies/DataProtectionPolicy';
import CommunityGuidelines from './pages/policies/CommunityGuidelines';
import { AuthProvider } from './contexts/AuthContext'; // Path to AuthContext
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
// import InstallPWAButton from './InstallPWAButton';

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
            <Route path="/support" element={<Support />} />
            <Route path="/virtual-pet-training-classes" element={<PetTraining />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/collaborate" element={<Collaborate />} />
            {/* <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Logout" element={<Logout />} /> */}
            <Route path="/account-deleted" element={<AccountDeleted />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/cancel" element={<CancelPage />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/data-protection-policy" element={<DataProtectionPolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/community-guidelines" element={<CommunityGuidelines />} />
            <Route path="/add-pet" element={<PetsAdd />} />
            <Route path="/pets" element={<PetsListPage />} />
            <Route path="/pets/:id" element={<PetDetailsPage />} />
            <Route path="/pets/:id/poster" element={<Poster />} />
           
            
            <Route path="/user-profile" element={<Profile />} />
            <Route path="/user-profile/settings" element={<UserSettings />} />
            <Route path="/user-profile/bookmarks" element={<UserBookmarks />} />
            <Route path="/user-profile/pets" element={<UserPets />} />
            <Route path="/user-profile/edit-pet/:id" element={<EditPet />} />
            <Route path="/shelters" element={<SheltersListPage />} />
            <Route path="/shelters/:id" element={<ShelterDetailsPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            {/* <Route path="/articles/:id" element={<ArticleDetailsPage />} /> */}
            <Route path="/articles/:slug" element={<ArticleDetailsPage />} />
          </Route>

           {/* Routes for Login/Register pages with separate layout (without Navigation and Footer) */}
            <Route path='/login' element={<AuthLayout />}>
              <Route index element={<Login />} />
            </Route>
            <Route path='/register' element={<AuthLayout />}>
              <Route index element={<Register />} />
            </Route>
            <Route path='/Logout' element={<AuthLayout />}>
              <Route index element={<Logout />} />
            </Route>

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
