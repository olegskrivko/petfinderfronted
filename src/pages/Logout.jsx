// import React from "react";
// import { Link } from "react-router-dom";
// import { Container, Typography, Button, Box } from "@mui/material";

// const Logout = () => {
//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           textAlign: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Paldies, ka bijāt ar mums! 👋
//         </Typography>
//         <Typography variant="body1" sx={{ mt: 2 }}>
//           Jūs esat veiksmīgi izrakstījies no sistēmas. Mēs ceram jūs atkal redzēt drīzumā!
//         </Typography>
        
//         <Button
//           variant="contained"
//           sx={{ mt: 3 }}
//           component={Link}
//           to="/login"
//         >
//           Pieteikties vēlreiz
//         </Button>
        
//         <Button
//           variant="outlined"
//           sx={{ mt: 2 }}
//           component={Link}
//           to="/"
//         >
//           Atpakaļ uz sākumlapu
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default Logout;
import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, Button, Box, Grid } from "@mui/material";

const Logout = () => {
  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Side (Branding/Logo) */}
      <Grid
        item
        xs={12}
        sm={7} // Adjusted for 3:2 ratio
        sx={{
          backgroundColor: "#5B9BD5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          padding: 4,
        }}
      >
        <Box textAlign="center">
          <Typography variant="h3" sx={{ fontWeight: 700 }}>
            PawClix
          </Typography>
          <Typography variant="h6" sx={{ marginTop: 2 }}>
            Lost & Found Pets
          </Typography>
        </Box>
      </Grid>

      {/* Right Side (Logout Message and Buttons) */}
      <Grid
        item
        xs={12}
        sm={5} // Adjusted for 3:2 ratio
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 3 }}
      >
        <Box sx={{ width: "80%", maxWidth: 400 }}>
          <Typography component="h1" variant="h5" align="center" sx={{ mb: 2, color: "#5B5B5B" }}>
            Paldies, ka bijāt ar mums!
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: "#5B5B5B" }} align="center">
            Jūs esat veiksmīgi izrakstījies no sistēmas. Mēs ceram jūs atkal redzēt drīzumā!
          </Typography>

          <Button
            variant="contained"
            sx={{ mt: 3, backgroundColor: "#5B9BD5" }}
            component={Link}
            to="/login"
            fullWidth
          >
            Pieteikties vēlreiz
          </Button>
          
          <Button
            variant="outlined"
            sx={{ mt: 2, color: "#5B9BD5" }}
            component={Link}
            to="/"
            fullWidth
          >
            Atpakaļ uz sākumlapu
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Logout;
