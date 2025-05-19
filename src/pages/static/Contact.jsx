import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import axios from "axios";
import {
  Box,
  Typography,
  Container,
  Grid,
  Paper,
  Link as MuiLink,
  Button,
  CardMedia,
  CardContent,
  TextField,
  CircularProgress,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
  LocationOn as LocationOnIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
  YouTube as YouTubeIcon, 
  X as XIcon, 
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../contexts/AuthContext";
import contactImage from "../images/contact_banner/mobile_marketing_cuate_blue.svg";
import { EMAIL, PHONE_CODE, PHONE_NUMBER, COUNTRY, CITY, FACEBOOK, INSTAGRAM, YOUTUBE, X } from "../../constants/config";
// Getting API base URL from environment variable
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
 
const Contact = () => {
  const { user } = useAuth(); // Accessing the user context (if logged in)

  const [subject] = useState("Ziņa");
  const [sender, setSender] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Prefill email from logged-in user (if available)
  useEffect(() => {
    if (user) {
      setEmail(user.email || "");
    }
  }, [user]);

  // Validate form fields before submission
  const validate = () => {
    const tempErrors = {
      sender: sender ? "" : "Lūdzu, ievadiet savu vārdu.",
      email: email
        ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
          ? ""
          : "Nederīgs e-pasts."
        : "Lūdzu, ievadiet e-pastu.",
      message: message ? "" : "Lūdzu, ievadiet ziņu.",
    };
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Lūdzu, aizpildiet visus obligātos laukus.");
      return;
    }
    setLoading(true);
    try {
      const accessToken = localStorage.getItem("access_token");
      await axios.post(
        `${API_BASE_URL}/feedback/`,
        {
          subject,
          sender,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      toast.success("Ziņa veiksmīgi nosūtīta!");
      setSender("");
      setEmail("");
      setMessage("");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.detail || "Radās kļūda. Mēģiniet vēlreiz vēlāk.";
      toast.error(errorMessage);
      console.error("Contact error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleLocationClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${COUNTRY}, ${CITY}`
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  const contactDetails = [
    {
      icon: <MailIcon fontSize="large" sx={{ color: "#F0F4F9" }} />,
      label: `${EMAIL}`,
      href: `mailto:${EMAIL}`,
      description: "Jautājumi, atsauksmes vai sadarbība? Rakstiet mums!",
    },
    {
      icon: <PhoneIcon fontSize="large" sx={{ color: "#F0F4F9" }} />,
      label: `${PHONE_CODE} ${PHONE_NUMBER}`,
      href: `tel:${PHONE_CODE}${PHONE_NUMBER}`,
      description: "Zvaniet mums darba laikā – mēs vienmēr esam gatavi palīdzēt.",
    },
    {
      icon: <LocationOnIcon fontSize="large" sx={{ color: "#F0F4F9" }} />,
      label: `${COUNTRY}, ${CITY}`,
      onClick: handleLocationClick,
      description: "Mēs atrodamies šajā reģionā, bet vienmēr esam gatavi palīdzēt attālināti!",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Sazinieties ar mums | PawClix</title>
        <meta name="description" content="Sazinieties ar PawClix komandu, lai uzdotu jautājumus, saņemtu atsauksmes vai piedāvātu sadarbību." />
        <meta name="keywords" content="kontaktēties, PawClix, jautājumi, atsauksmes, sadarbība, palīdzība" />
        <meta property="og:title" content="Sazinieties ar mums | PawClix" />
        <meta property="og:description" content="Sazinieties ar PawClix komandu, lai uzdotu jautājumus, saņemtu atsauksmes vai piedāvātu sadarbību." />
        <meta property="og:type" content="website" />
      </Helmet>
      <ToastContainer position="top-right" autoClose={3000} />
      <Container component="main" maxWidth="lg" >

<Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500,
      
              
              background: "linear-gradient(60deg, #16477c 0%, #00b5ad 100%)",
              WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
   }}>Sazinieties ar mums</Typography>
        <Grid container spacing={6} alignItems="center">
          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <CardMedia
                component="img"
                src={contactImage}
                alt="Saziņas ilustrācija"
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
                href="https://storyset.com/business"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  fontSize: "0.6rem",
                  fontStyle: "italic",
                  color: "#999",
                  fontWeight: 300,
                }}
              >
                Business illustrations by Storyset
              </MuiLink>
            </Box>
          </Grid>

          {/* Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Ja jums ir jautājumi, ierosinājumi vai vienkārši vēlaties ar mums sazināties — aizpildiet formu
              zemāk, un mēs ar prieku atbildēsim.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField
                label="Jūsu vārds"
                fullWidth
                value={sender}
                onChange={(e) => setSender(e.target.value)}
                error={!!errors.sender}
                helperText={errors.sender}
              />
              <TextField
                label="Jūsu e-pasts"
                type="email"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                label="Jūsu ziņa"
                multiline
                rows={4}
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                error={!!errors.message}
                helperText={errors.message}
              />
<Button
  type="submit"
  variant="contained"
  fullWidth
  disabled={loading}
       sx={{ background: "linear-gradient(0deg, #0994ba 30%, #02b4c4 90%)" }}
  startIcon={loading ? <CircularProgress size={20} color="inherit" /> : null}
>
  {loading ? "Nosūtīšana..." : "Nosūtīt ziņu"}
</Button>

            </Box>
          </Grid>
        </Grid>

        {/* Contact Info */}
        <Typography variant="h4" align="center" sx={{color: "#16477c", mt: 8, mb: 4 }}>
          Kontaktinformācija
        </Typography>
<Grid container spacing={3} style={{ marginTop: '1rem', marginBottom: '3rem' }}>
       
  <Grid item xs={12} sm={12} md={6} lg={4} textAlign="center">
   
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>

         <MailIcon sx={{ fontSize: 60, color: '#16477c', mb: 2 }} />
    
         
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', textAlign:  "center", color: '#00b5ad', fontFamily: "Titillium Web, sans-serif" }}>
            <MuiLink  variant="body1"
                    href={`mailto:${EMAIL}`}
                    sx={{ textDecoration: "none", color: "inherit"  }}
                  >
                  {EMAIL}
                  </MuiLink>

          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center", color: '#616f7d', fontFamily: "Titillium Web, sans-serif" }}>
            Jautājumi, atsauksmes vai sadarbība? Rakstiet mums!
          </Typography>
        </div>
      </CardContent>
  
  </Grid>

  <Grid item xs={12} sm={12} md={6} lg={4} textAlign="center">
   
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>

          <PhoneIcon sx={{ fontSize: 60, color: '#16477c', mb: 2 }} />
          
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem', textAlign:  "center", color: '#00b5ad', fontFamily: "Titillium Web, sans-serif" }}>
              <MuiLink  variant="body1"
                    href={`tel:${PHONE_CODE}${PHONE_NUMBER}`}
                    sx={{ textDecoration: "none", color: "inherit"  }}
                  >
                  {`${PHONE_CODE} ${PHONE_NUMBER}`}
                  </MuiLink>
      
          </Typography>
          <Typography variant="body2" style={{ textAlign:  "center", color: '#616f7d', fontFamily: "Titillium Web, sans-serif"  }}>
            
Zvaniet mums darba laikā – mēs vienmēr esam gatavi palīdzēt.
          </Typography>
        </div>
      </CardContent>
   
  </Grid>
  <Grid item xs={12} sm={12} md={6} lg={4} textAlign="center">
   
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
      <LocationOnIcon sx={{ fontSize: 60, color: '#16477c', mb: 2 }} />
        <div>
          <Typography variant="h6" style={{ marginBottom: '0.5rem',  textAlign:  "center", color: '#00b5ad', fontFamily: "Titillium Web, sans-serif" }}>
               <MuiLink  variant="body1"
                    href="#"
                    onClick={handleLocationClick}
                    sx={{ textDecoration: "none", color: "inherit"  }}
                  >
                  {`${COUNTRY}, ${CITY}`}
                  </MuiLink>
          </Typography>
     
          <Typography variant="body2" style={{ textAlign:  "center" , color: '#616f7d', fontFamily: "Titillium Web, sans-serif" }}>
            Mēs atrodamies šajā reģionā, bet vienmēr esam gatavi palīdzēt attālināti!


          </Typography>
        </div>
      </CardContent>
   
  </Grid>




  </Grid>
        {/* Social Media */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center" sx={{color: "#16477c", mt: 8, mb: 4 }}>
              Sekojiet mums sociālajos tīklos
            </Typography>

            <Typography
              variant="body1"
              align="center"
              sx={{ maxWidth: 700, mx: "auto", mb: 3, color: "#555" }}
            >
              Mēs dalāmies ar noderīgiem padomiem, jaunākajām ziņām, sadarbībām un stāstiem par pazudušiem
              mājdzīvniekiem. Pievienojieties mums Facebook un Instagram, lai vienmēr būtu lietas kursā.
            </Typography>
          </Grid>

          {[{ href: FACEBOOK, icon: <FacebookIcon fontSize="large" />, color: "#3b5998" }, 
          { href: INSTAGRAM, icon: <InstagramIcon fontSize="large" />, color: "#E1306C" },
          { href: YOUTUBE, icon: <YouTubeIcon fontSize="large" />, color: "#FF0000" }, 
          { href: X, icon: <XIcon fontSize="large" />, color: "#00040d" }].map(({ href, icon, color }, index) => (
            <Grid item key={index}>
              <MuiLink href={href} target="_blank" rel="noopener" underline="none">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: color,
                    transition: "color 0.3s ease",
                    "&:hover": {
                      color: "#000",
                    },
                  }}
                >
                  {icon}
                </Box>
              </MuiLink>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Contact;
