import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import axios from "axios";
import {
  Typography,
  Grid,
  Box,
  Button,
  TextField,
  CardMedia,
  Container,
  Link as MuiLink,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from '../../contexts/AuthContext';
import FeedbackImg from "../images/feedback_banner/customer_feedback_amico_blue.svg";

// Getting API base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Feedback = () => {
  const { user } = useAuth(); // Accessing the user context (if logged in)
  
  // States to manage form fields and loading state
  const [subject, setSubject] = useState("Atsauksme");  // Default subject for feedback
  const [sender, setSender] = useState("");  // Sender's name
  const [email, setEmail] = useState("");  // Sender's email
  const [message, setMessage] = useState("");  // Message field
  const [loading, setLoading] = useState(false);  // Loading state to show progress
  const [errors, setErrors] = useState({});  // Validation errors

  // Validation function to check if the form fields are filled out correctly
  const validate = () => {
    const tempErrors = {
      sender: sender ? "" : "Lūdzu, ievadiet savu vārdu.",  // Name is required
      email: email ? "" : "Lūdzu, ievadiet e-pastu.",  // Email is required
      message: message ? "" : "Lūdzu, ievadiet ziņu.",  // Message is required
    };
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");  // Returns true if no errors
  };

  // Prefill email field if user is logged in
  useEffect(() => {
    if (user) {
      setEmail(user.email || "");  // Set logged-in user's email (if available)
    }
  }, [user]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevent page reload on form submit
    if (!validate()) {  // Check if form validation passes
      toast.error("Lūdzu, aizpildiet visus obligātos laukus.");  // Show error message if validation fails
      return;
    }
    setLoading(true);  // Set loading to true to show progress
    try {
      // Get access token from local storage (used for authentication)
      const accessToken = localStorage.getItem('access_token');
      await axios.post(`${API_BASE_URL}/feedback/`, {
        sender,   
        subject,    
        email,
        message,
      }, {
        headers: {
          'Content-Type': 'application/json', 
          Authorization: `Bearer ${accessToken}`,  // Sending the token for authorization
        },
      });
      setLoading(false);  // Set loading to false after request
      toast.success("Atsauksme veiksmīgi nosūtīta!");  // Success message
      // Reset form fields after successful submission
      setSender("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setLoading(false);  // Set loading to false after error
      toast.error("Radās kļūda. Mēģiniet vēlreiz vēlāk.");  // Error message
      console.error("Feedback error:", error);  // Log error to the console
    }
  };

  return (
    <>
     <Helmet>
        <title>Atsauksmes - Sazinieties ar mums</title>  {/* Set the title for this page */}
        <meta name="description" content="Atstājiet atsauksmi par mūsu pakalpojumiem. Mēs vēlamies dzirdēt jūsu viedokli un uzlabot mūsu piedāvājumu." />  {/* Set meta description */}
        <meta name="keywords" content="atsauksmes, klientu atsauksmes, feedback, viedokļi, pakalpojumi, sazināties, ieteikumi" /> {/* Meta keywords */}
        <meta property="og:title" content="Atsauksmes - Sazinieties ar mums" />  {/* Open Graph title */}
        <meta property="og:description" content="Atstājiet atsauksmi un palīdziet mums uzlabot pakalpojumus. Mēs novērtējam jūsu viedokli." />  {/* Open Graph description */}
        <meta property="og:type" content="website" />
      </Helmet>
      <ToastContainer position="top-right" autoClose={3000} /> {/* Toast notifications for feedback */}
      
      <Container component="main" maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
          Atstājiet savu atsauksmi
        </Typography>

        <Grid container spacing={6} alignItems="center">
          {/* Left Section: Feedback Illustration */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <CardMedia
                component="img"
                src={FeedbackImg}
                alt="Atsauksmes"
                sx={{
                  width: { xs: "100%", sm: "80%", md: "100%" },
                  objectFit: "contain",
                  userSelect: "none",
                  pointerEvents: "none",
                  borderRadius: 2,
                  mb: 1,
                }}
              />
              <MuiLink
                href="https://storyset.com/people"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: "0.6rem",
                  fontStyle: "italic",
                  color: "#999",
                  fontWeight: 300,
                }}
              >
                People illustrations by Storyset
              </MuiLink>
            </Box>
          </Grid>

          {/* Right Section: Feedback Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Mēs priecājamies dzirdēt jūsu viedokli! Vai jums ir ideja, ierosinājums vai esat pamanījis kļūdu?
              Lūdzu, aizpildiet formu zemāk, un mēs ar jums sazināsimies, ja būs nepieciešams.
            </Typography>

            {/* Feedback Form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {/* Name Input */}
              <TextField
                label="Jūsu vārds"
                fullWidth
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                error={!!errors.sender}
                helperText={errors.sender}
                type="text"
              />
              {/* Email Input */}
              <TextField
                label="Jūsu e-pasts"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
                type="email"
              />
              {/* Message Input */}
              <TextField
                label="Jūsu ziņa"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={!!errors.message}
                helperText={errors.message}
                type="text"
              />
              {/* Submit Button */}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}  // Disable button while loading
                sx={{ backgroundColor: "#5B9BD5", mt: 1 }}
              >
                {loading ? "Nosūtīšana..." : "Iesniegt atsauksmi"}  {/* Dynamic button text */}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Feedback;
