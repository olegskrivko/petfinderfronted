import React, { useState } from "react";
import axios from "axios";
import {
  Typography,
  Grid,
  Box,
  Button,
  TextField,
  MenuItem,
  CardMedia,
  Container,
  Link as MuiLink,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import FeedbackImg from "./images/customer_feedback_amico_blue.svg";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Feedback = () => {
  const [subject, setSubject] = useState(1);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const subjects = [
    { value: 1, label: "Vispārējā atsauksme" },
    { value: 2, label: "Funkciju pieprasījums" },
    { value: 3, label: "Kļūdu ziņojums" },
    { value: 4, label: "Tehniskais atbalsts" },
    { value: 5, label: "Reklāma un sponsori" },
    { value: 6, label: "Partnerības iespējas" },
    { value: 7, label: "Cits" },
  ];

  const validate = () => {
    const tempErrors = {
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
      await axios.post(`${API_BASE_URL}/utilities/send-feedback`, {
        subject,
        email,
        message,
      });
      setLoading(false);
      toast.success("Atsauksme veiksmīgi nosūtīta!");
      setEmail("");
      setMessage("");
    } catch (error) {
      setLoading(false);
      toast.error("Radās kļūda. Mēģiniet vēlreiz vēlāk.");
      console.error("Feedback error:", error);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: 0, paddingRight: 0 }}>
        <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
          Atstājiet savu atsauksmi
        </Typography>

        <Grid container spacing={6} alignItems="center">
          {/* Illustration */}
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

          {/* Form */}
          <Grid item xs={12} md={6}>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Mēs priecājamies dzirdēt jūsu viedokli! Vai jums ir ideja, ierosinājums vai esat pamanījis kļūdu?
              Lūdzu, aizpildiet formu zemāk, un mēs ar jums sazināsimies, ja būs nepieciešams.
            </Typography>

            <form onSubmit={handleSubmit}>
              <Box mb={2}>
                <TextField
                  select
                  label="Temats"
                  fullWidth
                  value={subject}
                  onChange={(e) => setSubject(Number(e.target.value))}
                >
                  {subjects.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              <Box mb={2}>
                <TextField
                  label="E-pasts"
                  type="email"
                  fullWidth
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Box>

              <Box mb={2}>
                <TextField
                  label="Ziņa"
                  multiline
                  fullWidth
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  error={!!errors.message}
                  helperText={errors.message}
                />
              </Box>

              <Button
                type="submit"
                variant="contained"
                fullWidth
                disabled={loading}
                sx={{ backgroundColor: "#5B9BD5", mt: 1 }}
              >
                {loading ? "Nosūtīšana..." : "Iesniegt atsauksmi"}
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Feedback;
