import React from "react";
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
import contactImage from "./images/mobile_marketing_cuate_blue.svg";
import { EMAIL, PHONE, COUNTRY, CITY, FACEBOOK, INSTAGRAM } from "./config/config";

const Contact = () => {
  const handleLocationClick = () => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${COUNTRY}, ${CITY}`
    )}`;
    window.open(googleMapsUrl, "_blank");
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
    <Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: 0, paddingRight: 0 }}>
      <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
        SAZINIETIES AR MUMS
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

          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField label="Jūsu vārds" fullWidth />
            <TextField label="Jūsu e-pasts" type="email" fullWidth />
            <TextField label="Jūsu ziņa" multiline rows={4} fullWidth />
            <Button
              variant="contained"
              fullWidth
              sx={{ backgroundColor: "#5B9BD5", mt: 1 }}
            >
              Nosūtīt ziņu
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
<Typography variant="h4" align="center" sx={{ mt: 8, mb: 4 }}>
Sekojiet mums sociālajos tīklos
      </Typography>

<Typography variant="body1" align="center" sx={{ maxWidth: 700, mx: "auto", mb: 3, color: "#555" }}>
  Mēs dalāmies ar noderīgiem padomiem, jaunākajām ziņām, sadarbībām un stāstiem par pazudušiem mājdzīvniekiem.
  Pievienojieties mums Facebook un Instagram, lai vienmēr būtu lietas kursā un kļūtu par daļu no mūsu kopienas.
</Typography>

<Grid container spacing={3} justifyContent="center">
  {[
    { href: FACEBOOK, icon: <FacebookIcon fontSize="large" />, color: "#3b5998" }, // Muted Facebook Blue
    { href: INSTAGRAM, icon: <InstagramIcon fontSize="large" />, color: "#E1306C" }, // Deep Instagram Pink
  ].map(({ href, icon, color }, index) => (
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
  );
};

export default Contact;
