// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// // import { BASE_URL } from '../../middleware/config';
// import { Container, Typography, TextField, Button, Box } from '@mui/material';

// const Register = () => {
//   // const [username, setUsername] = useState("");
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
//   const navigate = useNavigate();

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     console.log("🔍 handleRegister called! Sending request...");
//     try {
      
//       const response = await fetch(`${API_BASE_URL}/auth/register/`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         // body: JSON.stringify({ username, email, password }),
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         //alert('Account created successfully');
//         setSuccess('Jauns lietotājs ir veiksmīgi izveidots');
//       } else {
//         setError(data.detail || 'Radās kļūda');
//       }
//     } catch (err) {
//       //setError('Error: ' + err.message);
//       setError('Kļūda piereģistrēt jaunu lietotāju');
//       setSuccess('');
//     }
//   };

// //   const handleRegister = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await axios.post(`${BASE_URL}/auth/register`, {
// //         // username,
// //         email,
// //         password,
// //       });
// //       setSuccess('User registered successfully');
// //       setError('');
// //       navigate('/login');
// //     } catch (err) {
// //       setError('Error registering user');
// //       setSuccess('');
// //     }
// //   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Registrēties
//         </Typography>
//         {error && (
//           <Typography variant="body2" color="error">
//             {error}
//           </Typography>
//         )}
//         {success && (
//           <Typography variant="body2" color="success">
//             {success}
//           </Typography>
//         )}
//         <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
//           {/* <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="username"
//             label="Username"
//             name="username"
//             autoComplete="username"
//             autoFocus
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//           /> */}
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email"
//             name="email"
//             autoComplete="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="new-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
//             Reģistrēties
//           </Button>
//           <Typography variant="body2">
//           Jums jau ir konts? <Link to="/login">Pieteikties</Link>.
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Register;
// import React, { useState, useLayoutEffect, useRef } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Typography, TextField, Button, Box, Grid, IconButton, InputAdornment } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";

// const Register = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const emailInputRef = useRef(null); // Create a ref for the email input
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleRegister = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }

//     try {
//       const response = await fetch("/api/register", { // Replace with your API URL
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setSuccess("Account created successfully. Please log in.");
//         setError("");
//         navigate("/login"); // Redirect to login page after successful registration
//       } else {
//         setError(data.detail || "An error occurred during registration.");
//         setSuccess("");
//       }
//     } catch (err) {
//       setError("Error registering user. Please try again.");
//       setSuccess("");
//     }
//   };

//   // Use useLayoutEffect to focus the email input when the component is mounted
//   useLayoutEffect(() => {
//     if (emailInputRef.current) {
//       emailInputRef.current.focus(); // Focus the email input immediately after mount
//     }
//   }, []); // Empty dependency array to run once when the component mounts

//   const handleClickShowPassword = () => setShowPassword(!showPassword);

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
//             PawClix
//           </Typography>
//           <Typography variant="h6" sx={{ marginTop: 2 }}>
//             Lost & Found Pets
//           </Typography>
//         </Box>
//       </Grid>

//       {/* Right Side (Registration Form) */}
//       <Grid
//         item
//         xs={12}
//         sm={5} // Adjusted for 3:2 ratio
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 3 }}
//       >
//         <Box sx={{ width: "80%", maxWidth: 400 }}>
//           <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//           Reģistrēties
//           </Typography>

//           {error && (
//             <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
//               {error}
//             </Typography>
//           )}
//           {success && (
//             <Typography variant="body2" color="success" align="center" sx={{ mb: 2 }}>
//               {success}
//             </Typography>
//           )}

//           <Box component="form" onSubmit={handleRegister} noValidate sx={{ display: "flex", flexDirection: "column" }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               autoComplete="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               inputRef={emailInputRef} // Assign the ref to the email input
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type={showPassword ? "text" : "password"}
//               id="password"
//               autoComplete="new-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               sx={{ mb: 2 }}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleClickShowPassword} edge="end">
//                       {showPassword ? <Visibility /> : <VisibilityOff />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2, backgroundColor: "#5B9BD5"  }}>
//               Reģistrēties
//             </Button>

//             <Typography variant="body2" align="center">
//               Jums jau ir konts? <Link to="/login">Pieteikties</Link>.
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default Register;
import React, { useState, useLayoutEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Typography, TextField, Button, Box, IconButton, InputAdornment, CircularProgress } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // State to track loading
  const emailInputRef = useRef(null); // Create a ref for the email input
  const navigate = useNavigate();

  // Handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch(`${API_BASE_URL}/api/register`, { // Replace with your API URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        setSuccess("Account created successfully. Please log in.");
        setError("");
        setLoading(false);
        setTimeout(() => {
          navigate("/login"); // Redirect to login page after successful registration
        }, 2000);
      } else {
        setError(data.detail || "An error occurred during registration.");
        setSuccess("");
        setLoading(false);
      }
    } catch (err) {
      setError("Error registering user. Please try again.");
      setSuccess("");
      setLoading(false);
    }
  };

  // Focus the email input when the component is mounted
  useLayoutEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus();
    }
  }, []);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  return (
    <Container maxWidth="xs" sx={{ py: 6, paddingLeft: 0, paddingRight: 0 }}>
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5" align="center">
        Reģistrēties
      </Typography>

      {error && (
        <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
          {error}
        </Typography>
      )}

      {success && (
        <Typography variant="body2" color="success" align="center" sx={{ mb: 2 }}>
          {success}
        </Typography>
      )}

      <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
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
          inputRef={emailInputRef}
          sx={{ mb: 2 }}
        />

        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Parole"
          type={showPassword ? "text" : "password"}
          id="password"
          autoComplete="new-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 2 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 2, mb: 2, backgroundColor: "#5B9BD5" }}
          disabled={loading} // Disable button during loading
        >
          {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Reģistrēties"}
        </Button>

        <Typography variant="body2" align="center">
          Jums jau ir konts? <Link to="/login">Pieteikties</Link>.
        </Typography>


      </Box>
    </Box>
  </Container>
  );
};

export default Register;
