import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Box } from "@mui/material";

const Logout = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Paldies, ka bijāt ar mums! 👋
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Jūs esat veiksmīgi izrakstījies no sistēmas. Mēs ceram jūs atkal redzēt drīzumā!
        </Typography>
        
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          component={Link}
          to="/login"
        >
          Pieteikties vēlreiz
        </Button>
        
        <Button
          variant="outlined"
          sx={{ mt: 2 }}
          component={Link}
          to="/"
        >
          Atpakaļ uz sākumlapu
        </Button>
      </Box>
    </Container>
  );
};

export default Logout;
