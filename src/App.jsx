import './App.css';

import React, { Suspense, lazy, useEffect, useState } from 'react';
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { BrowserRouter as Router, Route, Routes, useNavigate,Link  } from 'react-router-dom';
import { DrawerProvider } from './contexts/DrawerContext'
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProviderContext, useDarkTheme } from './contexts/ThemeContext';
import { SnackbarProvider } from 'notistack';
import { HelmetProvider } from 'react-helmet-async';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import PetsListPage from './pages/pets/views/PetsList'; // Your pets list page
import EditPet from './pages/pets/views/EditPet'
import PetsAdd from './pages/pets/views/PetsAdd';
import Poster from './pages/pets/views/Poster';
import PetDetailsPage from './pages/pets/views/PetDetails'; // Your pet details page

import ServicesListPage from './pages/services/views/ServicesList'; // Your pets list page
import ServiceDetailsPage from './pages/services/views/ServiceDetails';
import AddServicePage from "./pages/services/views/AddServicePage"

import SheltersListPage from './pages/shelters/views/SheltersList'; // Your pets list page
import ShelterDetailsPage from './pages/shelters/views/ShelterDetails'; // Your pet details page

import ArticlesListPage from './pages/articles/views/ArticlesList'; // Your pets list page
import ArticleDetailsPage from './pages/articles/views/ArticleDetails'; // Your pets list page

import Collaborate from './pages/static/Collaborate'; // Your pets list page
import Notifications from './pages/Notifications';


import LoadingScreen from './pages/LoadingScreen';
import Layout from './pages/Layout';
import AuthLayout from './pages/AuthLayout'; // Layout without Navigation and Footer (for login/register)
import Home from './pages/Home';
import About from './pages/static/About';
import Feedback from './pages/static/Feedback';
import Support from './pages/static/Support';
import Contact from './pages/static/Contact';

import Login from './pages/auth/views/Login';
import Register from './pages/auth/views/Register';
import ForgotPassword from './pages/auth/views/ForgotPassword';
import ResetPassword from "./pages/auth/views/ResetPassword";
import Logout from './pages/auth/views/Logout';


import Fun from './pages/Fun';

import Profile from './pages/profile/views/Profile'
import UserSettings from './pages/profile/views/UserSettings'
import UserPets from './pages/profile/views/UserPets'
import UserServices from './pages/profile/views/UserServices'
import BookmarksIndexPage from './pages/profile/views/BookmarksIndexPage'
import UserPetBookmarks from './pages/profile/views/UserPetBookmarks'
import UserServiceBookmarks from './pages/profile/views/UserServiceBookmarks'

import PetTraining from './pages/static/PetTraining'


import PolicyPage from './pages/static/PolicyPage';


import PetQuiz from './pages/static/PetQuiz';
import AccountDeleted from './pages/auth/views/AccountDeleted';

import CheckoutPage from './pages/payments/views/CheckoutPage';
import SuccessPage from "./pages/payments/views/SuccessPage";
import CancelPage from "./pages/payments/views/CancelPage";
import Pricing from "./pages/payments/views/Pricing";

import WorkInProgress from "./pages/static/WorkInProgress";
import PartnersAndSponsors from "./pages/static/PartnersAndSponsors"


import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PetAddStepper from "./pages/pets/views/PetAddStepper";
import PageNotFound from './pages/PageNotFound'; // Add a PageNotFound component
// import InstallPWAButton from './InstallPWAButton';
import { CssBaseline } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext'; // Path to AuthContext
import { useAuth } from './contexts/AuthContext'; // Adjust the path as needed
import CookieConsent from 'react-cookie-consent';
import SubscribePage from './pages/SubscribePage';
import FrequentlyAskedQuestions from './pages/static/FrequentlyAskedQuestions';


// import CookieBanner from 'react-cookie-banner';
import cookieIcon from '../src/pages/images/paw.png';



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


const theme = createTheme({
  palette: {
    primary: {
      main: '#00b3a4',
      contrastText: '#ffffff', // This ensures white text on primary background 
    },
    secondary: {
      main: '#FF5733', // Custom secondary color (e.g., soft blue)
      contrastText: '#ffffff', // Optional: also white text for secondary if needed
    },
  },
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

}});



  const stripePromise = loadStripe("pk_test_51MsAnbFtt77ZbwT7jUTgepakOdkTikP2RJ3kzrwX5Gb87hbTQidZ6ZGzUFkPxdsEuZ8pBrQUihsEcV2JefMUXRWE00it4TPUPI");

  // Define themes
// const lightTheme = createTheme({ palette: { mode: 'light' } });
// const darkTheme = createTheme({ palette: { mode: 'dark' } });

function App() {

  //   const { darkMode } = useDarkTheme();
  // const theme = darkMode ? darkTheme : lightTheme;
  // const [showBanner, setShowBanner] = useState(true);

  // const handleAccept = () => {
  //   console.log("Show Banner state:", showBanner);
  //   // Handle what happens after accepting cookies
  //   setShowBanner(false);
  // };

  const [hasAcceptedCookies, setHasAcceptedCookies] = useState(false);

  const handleAcceptCookies = () => {
    // Set state to true when the user accepts the cookies
    setHasAcceptedCookies(true);
    console.log('User accepted cookies');
    // You can also perform other actions here, such as updating a global state or sending the acceptance to an analytics service
  };
  return (
    <HelmetProvider>
       <ThemeProvider theme={theme}>
        
       <CssBaseline /> {/* Ensures global styles */}
    <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
    <Elements stripe={stripePromise}>
    <Router>
    <AuthProvider>
      <LanguageProvider>
      <DrawerProvider>
      {/* {showBanner && (
                    <div
                      style={{
                        position: 'fixed',
                        bottom: '0',
                        left: '0',
                        right: '0',
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '20px',
                        zIndex: 1000
                      }}
                    >
                      <p>We use cookies to improve your experience.</p>
                      <button onClick={handleAccept}>Accept</button>
                    </div>
                  )} */}
               
        <Routes>
        <Route path='/' element={<AuthLayout />}>
              <Route index element={<Home />} />
            </Route> 

          <Route path='/' element={<Layout />}>
            {/* <Route index element={<Home />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/add-service" element={<AddServicePage />} />
            
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/support" element={<Support />} />
            <Route path="/virtual-pet-training-classes" element={<PetTraining />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicesListPage />} />
            <Route path="/services/:id" element={<ServiceDetailsPage />} />
            <Route path="/collaborate" element={<Collaborate />} />
            <Route path="/frequently-asked-questions" element={<FrequentlyAskedQuestions />} />
            <Route path="/pricing" element={<Pricing />} />

            <Route path="/shelters" element={<SheltersListPage />} />
            <Route path="/shelters/:id" element={<ShelterDetailsPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:slug" element={<ArticleDetailsPage />} />

            <Route path="/pet-matching-quiz" element={<PetQuiz />} />        
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/account-deleted" element={<AccountDeleted />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
            <Route path="/subscription-success" element={<SuccessPage />} />
            <Route path="/cancel" element={<CancelPage />} />
            <Route path="/fun" element={<Fun />} />
            <Route path="/reset-password/:token" element={<ResetPassword />} />
            <Route path="/policies" element={<PolicyPage />} />
            <Route 
            path="/add-pet" 
            element={<PrivateRoute element={<PetAddStepper />} />} 
          />
            
            <Route path="/pets" element={<PetsListPage />} />
            <Route path="/pets/:id" element={<PetDetailsPage />} />
            <Route path="/pets/:id/poster" element={<Poster />} />
            <Route path="/adopt-a-pet" element={<WorkInProgress />} />
            <Route path="/partners-and-sponsors" element={<PartnersAndSponsors />} />
            <Route path="/user-profile" element={<Profile />} />
            <Route path="/user-profile/settings" element={<UserSettings />} />
            <Route path="/user-profile/bookmarks/pets" element={<UserPetBookmarks />} />
            <Route path="/user-profile/bookmarks/services" element={<UserServiceBookmarks />} />
            <Route path="/user-profile/bookmarks" element={<BookmarksIndexPage />} />
            <Route path="/user-profile/notifications" element={<Notifications />} />
            <Route path="/user-profile/pets" element={<UserPets />} />
            <Route path="/user-profile/services" element={<UserServices />} />
            {/* <Route path="/user-profile/edit-pet/:id" element={<EditPet />} /> */}
            <Route path="*" element={<PageNotFound />} />
            </Route>
            </Routes>
{/*         
            <Route path='/register' element={<AuthLayout />}>
              <Route index element={<Register />} />
            </Route>
            <Route path='/logout' element={<AuthLayout />}>
              <Route index element={<Logout />} />
            </Route>
*/}
         

    

            {/* Catch-all Route for Page Not Found */}
        
            {/* colors = ['2474A3', '21ABCD', '31758D', '006980', '476997', '666699', '88AFD2', '8AB9F1']; */}
            <CookieConsent
        location="bottom"
        buttonText="I Accept"
        cookieName="userAcceptedCookies"
        style={{
          background: '#2474A3', // Elegant green background
          color: '#fff',
          fontFamily: 'Arial, sans-serif',
          borderTop: '1px solid #ddd', // Add subtle border at the top
          padding: '15px 20px',
          boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for a premium look
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999, // Ensure it appears on top
        }}
        buttonStyle={{
          background: '#21ABCD', // Slightly darker green for the button
          color: '#fff',
          fontSize: '14px',
          borderRadius: '30px',
          padding: '12px 25px',
          marginLeft: '20px',
          cursor: 'pointer',
          transition: 'background 0.3s ease',
        }}
        buttonWrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        expires={150}
        onAccept={handleAcceptCookies}
      >
        {/* Add image on the left side */}
        <Box style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src={cookieIcon} 
            alt="Cookie Icon" 
            style={{
              width: '30px', // Adjust size
              height: 'auto',
              marginRight: '10px',
            }} 
          />
          <span style={{ fontSize: '14px', fontWeight: '500' }}>
            This website uses cookies to enhance the user experience. <span style={{ fontSize: '12px' }}> Read our </span>
            <Link to='/policies' style={{fontSize: '12px', color: 'inherit',  }}>
            Privacy Policy
        </Link>
            {/* <span style={{ fontSize: '12px' }}> Read our Privacy Policy</span> */}
          </span>
        </Box>

        {/* Accept button */}
        {/* <div>
          <button onClick={handleAcceptCookies}>I Accept</button>
        </div> */}
      </CookieConsent>

      {/* Optional: Add a message after user accepts */}
      {/* {hasAcceptedCookies && <p>Thank you for accepting cookies!</p>} */}
     
        {/* <CookieConsent
        location="bottom"
        buttonText="I Accept"
        cookieName="userAcceptedCookies"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          background: "#4e503b",
          color: "#fff",
          fontSize: "13px",
          borderRadius: "5px",
          padding: "10px 20px"
        }}
        expires={150}
        onAccept={handleAcceptCookies}  
      >
        This website uses cookies to enhance the user experience.{" "}
        <span style={{ fontSize: "10px" }}>Read our Privacy Policy</span>
      </CookieConsent> */}
      {/* {hasAcceptedCookies && <p>Thank you for accepting cookies!</p>} */}
       
  
      </DrawerProvider>
      </LanguageProvider>
    </AuthProvider>
  </Router>
  </Elements>
  </SnackbarProvider>
  </ThemeProvider>
  </HelmetProvider>
  );
}

export default App;
