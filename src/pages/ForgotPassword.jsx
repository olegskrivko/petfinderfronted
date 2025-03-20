import React, { useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch("https://petfinderbackend-production.up.railway.app/api/auth/forgot-password/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage("A password reset link has been sent to your email.");
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Typography component="h1" variant="h5">
          Aizmirsi paroli?
        </Typography>
        {message && (
          <Typography variant="body2" color="success">
            {message}
          </Typography>
        )}
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleForgotPassword} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Saņemt paroles atiestatīšanas saiti
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
