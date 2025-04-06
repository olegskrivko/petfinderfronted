// import React, { useState } from "react";
// import { Container, Typography, TextField, Button, Box } from "@mui/material";
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");

//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/forgot-password/`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("A password reset link has been sent to your email.");
//       } else {
//         setError(data.error || "Something went wrong. Please try again.");
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again later.");
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center" }}>
//         <Typography component="h1" variant="h5">
//           Aizmirsi paroli?
//         </Typography>
//         {message && (
//           <Typography variant="body2" color="success">
//             {message}
//           </Typography>
//         )}
//         {error && (
//           <Typography variant="body2" color="error">
//             {error}
//           </Typography>
//         )}
//         <Box component="form" onSubmit={handleForgotPassword} noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email"
//             name="email"
//             autoComplete="email"
//             autoFocus
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
//             Saņemt paroles atiestatīšanas saiti
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default ForgotPassword;
// import React, { useState } from "react";
// import { Container, Typography, TextField, Button, Box, Grid } from "@mui/material";
// import { useNavigate, Link } from "react-router-dom";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);  // Track loading state
//   const navigate = useNavigate();

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");
//     setLoading(true); // Start loading

//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/forgot-password/`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("A password reset link has been sent to your email.");
//         setLoading(false);
//       } else {
//         setError(data.error || "Something went wrong. Please try again.");
//         setLoading(false);
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again later.");
//       setLoading(false);
//     }
//   };

//   return (
//     <Grid container sx={{ height: "100vh" }}>
//       {/* Left Side (Branding/Logo) */}
//       <Grid
//         item
//         xs={12}
//         sm={7} // Adjusted for 3:2 ratio
//         sx={{
//           backgroundColor: "#5B9BD5",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "#fff",
//           padding: 4,
//         }}
//       >
//         <Box textAlign="center">
//           <Typography variant="h3" sx={{ fontWeight: 700 }}>
//             <Link style={{ textDecoration: "none", color: "#fff" }} to="/">PawClix</Link>
//           </Typography>
//           <Typography variant="h6" sx={{ marginTop: 2 }}>
//             Lost & Found Pets
//           </Typography>
//         </Box>
//       </Grid>

//       {/* Right Side (Forgot Password Form) */}
//       <Grid
//         item
//         xs={12}
//         sm={5} // Adjusted for 3:2 ratio
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 3 }}
//       >
//         <Box sx={{ width: "80%", maxWidth: 400 }}>
//           <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//             Aizmirsi paroli?
//           </Typography>

//           {message && (
//             <Typography variant="body2" color="success" align="center" sx={{ mb: 2 }}>
//               {message}
//             </Typography>
//           )}
//           {error && (
//             <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
//               {error}
//             </Typography>
//           )}

//           <Box component="form" onSubmit={handleForgotPassword} noValidate sx={{ display: "flex", flexDirection: "column" }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="E-pasts"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 2, mb: 2, backgroundColor: "#5B9BD5" }}
//               disabled={loading}
//             >
//               {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Saņemt paroles atiestatīšanas saiti"}
//             </Button>

//             <Typography variant="body2" align="center">
//               <Link to="/login">Atpakaļ uz pieteikšanās lapu</Link>
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default ForgotPassword;
// import React, { useState } from "react";
// import { Container, Typography, TextField, Button, Box, Grid, CircularProgress } from "@mui/material";
// import { useNavigate, Link } from "react-router-dom";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);  // Track loading state
//   const navigate = useNavigate();

//   const handleForgotPassword = async (e) => {
//     e.preventDefault();
//     setMessage("");
//     setError("");
//     setLoading(true); // Start loading

//     try {
//       const response = await fetch(`${API_BASE_URL}/auth/forgot-password/`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("A password reset link has been sent to your email.");
//         setLoading(false);
//       } else {
//         setError(data.error || "Something went wrong. Please try again.");
//         setLoading(false);
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again later.");
//       setLoading(false);
//     }
//   };

//   return (
//     <Grid container sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}>
//       {/* Right Side (Forgot Password Form) */}
//       <Grid
//         item
//         xs={12}
//         sm={5} // Adjusted for 3:2 ratio
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 3 }}
//       >
//         <Box sx={{ width: "80%", maxWidth: 400 }}>
//           <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//             Aizmirsi paroli?
//           </Typography>

//           {message && (
//             <Typography variant="body2" color="success" align="center" sx={{ mb: 2 }}>
//               {message}
//             </Typography>
//           )}
//           {error && (
//             <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
//               {error}
//             </Typography>
//           )}

//           <Box component="form" onSubmit={handleForgotPassword} noValidate sx={{ display: "flex", flexDirection: "column" }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="E-pasts"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 2, mb: 2, backgroundColor: "#5B9BD5" }}
//               disabled={loading}
//             >
//               {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Saņemt paroles atiestatīšanas saiti"}
//             </Button>

//             <Typography variant="body2" align="center">
//               <Link to="/login">Atpakaļ uz pieteikšanās lapu</Link>
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default ForgotPassword;
import React, { useState } from 'react';
import {
  Typography,
  Container,
  TextField,
  Button,
  Box,
  CircularProgress,
} from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/forgot-password/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('A password reset link has been sent to your email.');
        setLoading(false);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ py: 6, paddingLeft: 0, paddingRight: 0 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
          Aizmirsi paroli?
        </Typography>

        {message && (
          <Typography
            variant="body2"
            color="success"
            align="center"
            sx={{ mb: 2 }}
          >
            {message}
          </Typography>
        )}
        {error && (
          <Typography
            variant="body2"
            color="error"
            align="center"
            sx={{ mb: 2 }}
          >
            {error}
          </Typography>
        )}

        <Box
          component="form"
          onSubmit={handleForgotPassword}
          noValidate
          sx={{ width: '100%' }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-pasts"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2, backgroundColor: '#5B9BD5' }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} sx={{ color: 'white' }} />
            ) : (
              'Saņemt paroles atiestatīšanas saiti'
            )}
          </Button>

          <Typography variant="body2" align="center">
            <Link to="/login">Atpakaļ uz pieteikšanās lapu</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default ForgotPassword;
