// import React, { useState } from "react";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   Container,
//   Grid,
//   Paper,
//   Link as MuiLink,
//   Button,
//   CardMedia,
//   TextField,
// } from "@mui/material";
// import {
//   Phone as PhoneIcon,
//   Mail as MailIcon,
//   LocationOn as LocationOnIcon,
//   Facebook as FacebookIcon,
//   Instagram as InstagramIcon,
// } from "@mui/icons-material";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useAuth } from '../contexts/AuthContext';

// import contactImage from "./images/mobile_marketing_cuate_blue.svg";
// import { EMAIL, PHONE, COUNTRY, CITY, FACEBOOK, INSTAGRAM } from "./config/config";
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const Contact = () => {
//    const { user } = useAuth();
//   const handleLocationClick = () => {
//     const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//       `${COUNTRY}, ${CITY}`
//     )}`;
//     window.open(googleMapsUrl, "_blank");
//   };

//   const [subject, setSubject] = useState("Ziņa");
//   const [sender, setSender] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState({});

//   // Inside Contact component, add above return:
// const validate = () => {
//   const tempErrors = {
//     sender: sender ? "" : "Lūdzu, ievadiet savu vārdu.",
//     email: email ? "" : "Lūdzu, ievadiet e-pastu.",
//     message: message ? "" : "Lūdzu, ievadiet ziņu.",
//   };
//   setErrors(tempErrors);
//   return Object.values(tempErrors).every((x) => x === "");
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   if (!validate()) {
//     toast.error("Lūdzu, aizpildiet visus obligātos laukus.");
//     return;
//   }
//   setLoading(true);
//   try {
//     const accessToken = localStorage.getItem('access_token');
//     await axios.post(`${API_BASE_URL}/feedback/`, {
//       subject, 
//       sender,
//       email,
//       message,
//     }, {
//       headers: {
//         'Content-Type': 'application/json', 
//         Authorization: `Bearer ${accessToken}`,
//       },
//     });
//     toast.success("Ziņa veiksmīgi nosūtīta!");
//     setSender("");
//     setEmail("");
//     setMessage("");
//   } catch (error) {
//     const errorMessage = error?.response?.data?.detail || "Radās kļūda. Mēģiniet vēlreiz vēlāk.";
//     toast.error(errorMessage);
//     console.error("Contact error:", error);
//   } finally {
//     setLoading(false);
//   }
// };

//   const contactDetails = [
//     {
//       icon: <MailIcon fontSize="large" sx={{ color: "#F0F4F9" }} />,
//       label: "E-pasts",
//       href: `mailto:${EMAIL}`,
//       description: "Jautājumi, atsauksmes vai sadarbība? Rakstiet mums!",
//     },
//     {
//       icon: <PhoneIcon fontSize="large" sx={{ color: "#F0F4F9" }} />,
//       label: "Tālrunis",
//       href: `tel:${PHONE}`,
//       description: "Zvaniet mums darba laikā – mēs vienmēr esam gatavi palīdzēt.",
//     },
//     {
//       icon: <LocationOnIcon fontSize="large" sx={{ color: "#F0F4F9" }} />,
//       label: "Atrašanās vieta",
//       onClick: handleLocationClick,
//       description: "Mēs atrodamies Rīgā – esat laipni gaidīti!",
//     },
//   ];

//   return (
//     <>
//     <ToastContainer position="top-right" autoClose={3000} />
//     <Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: 0, paddingRight: 0 }}>
//       <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
//         Sazinieties ar mums
//       </Typography>
//       <Grid container spacing={6} alignItems="center">
//         {/* Image */}
//             <Grid item xs={12} md={6}>
//                     <Box display="flex" flexDirection="column" alignItems="center">
//                       <CardMedia
//                         component="img"
//                         src={contactImage}
//                         alt="Saziņas ilustrācija"
//                         sx={{
//                           width: { xs: "100%", sm: "80%", md: "100%" },
//                           objectFit: "contain",
//                           userSelect: "none",
//                           pointerEvents: "none",
//                           borderRadius: 2,
//                           mb: 1,
//                         }}
//                       />
//                       <MuiLink
//                         href="https://storyset.com/business"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         sx={{
//                           fontSize: "0.6rem",
//                           fontStyle: "italic",
//                           color: "#999",
//                           fontWeight: 300,
//                         }}
//                       >
//                         Business illustrations by Storyset
//                       </MuiLink>
//                     </Box>
//                   </Grid>

//         {/* Form */}
//         <Grid item xs={12} md={6}>
//           <Typography variant="body1" sx={{ mb: 3 }}>
//             Ja jums ir jautājumi, ierosinājumi vai vienkārši vēlaties ar mums sazināties — aizpildiet formu
//             zemāk, un mēs ar prieku atbildēsim.
//           </Typography>

          
// <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
//   <TextField
//     label="Jūsu vārds"
//     fullWidth
//     value={sender}
//     onChange={(e) => setSender(e.target.value)}
//     error={!!errors.sender}
//     helperText={errors.sender}
//   />
//   <TextField
//     label="Jūsu e-pasts"
//     type="email"
//     fullWidth
//     value={email}
//     onChange={(e) => setEmail(e.target.value)}
//     error={!!errors.email}
//     helperText={errors.email}
//   />
//   <TextField
//     label="Jūsu ziņa"
//     multiline
//     rows={4}
//     fullWidth
//     value={message}
//     onChange={(e) => setMessage(e.target.value)}
//     error={!!errors.message}
//     helperText={errors.message}
//   />
//   <Button
//     type="submit"
//     variant="contained"
//     fullWidth
//     disabled={loading}
//     sx={{ backgroundColor: "#5B9BD5", mt: 1 }}
//   >
//     {loading ? "Nosūtīšana..." : "Nosūtīt ziņu"}
//   </Button>
// </Box>
//         </Grid>
//       </Grid>

//       {/* Contact Info */}
//       <Typography variant="h4" align="center" sx={{ mt: 8, mb: 4 }}>
//         Kontaktinformācija
//       </Typography>

//       <Grid container spacing={5} justifyContent="center" sx={{ textAlign: "center" }}>
//         {contactDetails.map(({ icon, label, href, onClick, description }, index) => (
//           <Grid item xs={12} sm={4} key={index}>
//             <Box display="flex" flexDirection="column" alignItems="center">
//               <Paper
//                 sx={{
//                   width: 80,
//                   height: 80,
//                   display: "flex",
//                   justifyContent: "center",
//                   alignItems: "center",
//                   borderRadius: "50%",
//                   backgroundColor: "#5B9BD5",
//                   cursor: onClick ? "pointer" : "default",
//                 }}
//                 onClick={onClick}
//               >
//                 {icon}
//               </Paper>

//               {href ? (
//                 <MuiLink
//                   variant="body1"
//                   href={href}
//                   sx={{
//                     textDecoration: "none",
//                     color: "black",
//                     mt: 1,
//                     fontWeight: "bold",
//                   }}
//                 >
//                   {label}
//                 </MuiLink>
//               ) : (
//                 <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
//                   {label}
//                 </Typography>
//               )}
//               <Typography variant="body2" sx={{ mt: 1, maxWidth: "220px" }}>
//                 {description}
//               </Typography>
//             </Box>
//           </Grid>
//         ))}
//       </Grid>

//       {/* Socials */}
//       <Grid container spacing={3} justifyContent="center">
//       <Grid item xs={12} md={12}>
//     <Typography variant="h4" align="center" sx={{ mt: 8, mb: 4 }}>
//     Sekojiet mums sociālajos tīklos
//           </Typography>

//       <Typography variant="body1" align="center" sx={{ maxWidth: 700, mx: "auto", mb: 3, color: "#555" }}>
//         Mēs dalāmies ar noderīgiem padomiem, jaunākajām ziņām, sadarbībām un stāstiem par pazudušiem mājdzīvniekiem.
//         Pievienojieties mums Facebook un Instagram, lai vienmēr būtu lietas kursā un kļūtu par daļu no mūsu kopienas.
//       </Typography>
// </Grid>
// </Grid>
// <Grid container spacing={3} justifyContent="center">
//   {[
//     { href: FACEBOOK, icon: <FacebookIcon fontSize="large" />, color: "#3b5998" }, // Muted Facebook Blue
//     { href: INSTAGRAM, icon: <InstagramIcon fontSize="large" />, color: "#E1306C" }, // Deep Instagram Pink
//   ].map(({ href, icon, color }, index) => (
//     <Grid item key={index}>
//       <MuiLink href={href} target="_blank" rel="noopener" underline="none">
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             color: color,
//             transition: "color 0.3s ease",
//             "&:hover": {
//               color: "#000", // Change to dark on hover for contrast
//             },
//           }}
//         >
//           {icon}
//         </Box>
//       </MuiLink>
//     </Grid>
//   ))}
// </Grid>

//     </Container>
//     </>
//   );
// };

// export default Contact;
import React, { useState } from "react";
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
  TextField,
} from "@mui/material";
import {
  Phone as PhoneIcon,
  Mail as MailIcon,
  LocationOn as LocationOnIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from '../contexts/AuthContext';

import contactImage from "./images/mobile_marketing_cuate_blue.svg";
import { EMAIL, PHONE, COUNTRY, CITY, FACEBOOK, INSTAGRAM } from "./config/config";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Contact = () => {
  const { user } = useAuth();
  const handleLocationClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${COUNTRY}, ${CITY}`
    )}`;
    window.open(googleMapsUrl, "_blank");
  };

  const [subject, setSubject] = useState("Ziņa");
  const [sender, setSender] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {
      sender: sender ? "" : "Lūdzu, ievadiet savu vārdu.",
      email: email ? "" : "Lūdzu, ievadiet e-pastu.",
      message: message ? "" : "Lūdzu, ievadiet ziņu.",
    };
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      toast.error("Lūdzu, aizpildiet visus obligātos laukus.");
      return;
    }
    setLoading(true);
    try {
      const accessToken = localStorage.getItem('access_token');
      await axios.post(`${API_BASE_URL}/feedback/`, {
        subject, 
        sender,
        email,
        message,
      }, {
        headers: {
          'Content-Type': 'application/json', 
          Authorization: `Bearer ${accessToken}`,
        },
      });
      toast.success("Ziņa veiksmīgi nosūtīta!");
      setSender("");
      setEmail("");
      setMessage("");
    } catch (error) {
      const errorMessage = error?.response?.data?.detail || "Radās kļūda. Mēģiniet vēlreiz vēlāk.";
      toast.error(errorMessage);
      console.error("Contact error:", error);
    } finally {
      setLoading(false);
    }
  };

  const contactDetails = [
    {
      icon: <MailIcon fontSize="large" sx={{ color: "#F0F4F9" }} />,
      label: "E-pasts",
      href: `mailto:${EMAIL}`,
      description: "Jautājumi, atsauksmes vai sadarbība? Rakstiet mums!",
    },
    {
      icon: <PhoneIcon fontSize="large" sx={{ color: "#F0F4F9" }} />,
      label: "Tālrunis",
      href: `tel:${PHONE}`,
      description: "Zvaniet mums darba laikā – mēs vienmēr esam gatavi palīdzēt.",
    },
    {
      icon: <LocationOnIcon fontSize="large" sx={{ color: "#F0F4F9" }} />,
      label: "Atrašanās vieta",
      onClick: handleLocationClick,
      description: "Mēs atrodamies Rīgā – esat laipni gaidīti!",
    },
  ];

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Container component="main" maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
        <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
          Sazinieties ar mums
        </Typography>
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

            <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
                sx={{ backgroundColor: "#5B9BD5", mt: 1 }}
              >
                {loading ? "Nosūtīšana..." : "Nosūtīt ziņu"}
              </Button>
            </Box>
          </Grid>
        </Grid>

        {/* Contact Info */}
        <Typography variant="h4" align="center" sx={{ mt: 8, mb: 4 }}>
          Kontaktinformācija
        </Typography>

        <Grid container spacing={5} justifyContent="center" sx={{ textAlign: "center" }}>
          {contactDetails.map(({ icon, label, href, onClick, description }, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Paper
                  sx={{
                    width: 80,
                    height: 80,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    backgroundColor: "#5B9BD5",
                    cursor: onClick ? "pointer" : "default",
                  }}
                  onClick={onClick}
                >
                  {icon}
                </Paper>

                {href ? (
                  <MuiLink
                    variant="body1"
                    href={href}
                    sx={{
                      textDecoration: "none",
                      color: "black",
                      mt: 1,
                      fontWeight: "bold",
                    }}
                  >
                    {label}
                  </MuiLink>
                ) : (
                  <Typography variant="body1" sx={{ mt: 1, fontWeight: "bold" }}>
                    {label}
                  </Typography>
                )}
                <Typography variant="body2" sx={{ mt: 1, maxWidth: "220px" }}>
                  {description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Socials */}
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={12}>
            <Typography variant="h4" align="center" sx={{ mt: 8, mb: 4 }}>
              Sekojiet mums sociālajos tīklos
            </Typography>

            <Typography variant="body1" align="center" sx={{ maxWidth: 700, mx: "auto", mb: 3, color: "#555" }}>
              Mēs dalāmies ar noderīgiem padomiem, jaunākajām ziņām, sadarbībām un stāstiem par pazudušiem mājdzīvniekiem.
              Pievienojieties mums Facebook un Instagram, lai vienmēr būtu lietas kursā un kļūtu par daļu no mūsu kopienas.
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={3} justifyContent="center">
          {[{ href: FACEBOOK, icon: <FacebookIcon fontSize="large" />, color: "#3b5998" }, { href: INSTAGRAM, icon: <InstagramIcon fontSize="large" />, color: "#E1306C" }].map(({ href, icon, color }, index) => (
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
                      color: "#000", // Change to dark on hover for contrast
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
