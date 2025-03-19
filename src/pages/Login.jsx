// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Container, Typography, TextField, Button, Box } from '@mui/material';
// import { useAuth } from '../contexts/AuthContext'; // Import the useAuth hook

// const Login = () => {
//   const { login } = useAuth();  // Destructure the login method from the context
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Check if email and password are provided (optional, you can add more validation)
//     if (!email || !password) {
//       setError('Please enter both email and password');
//       return;
//     }

//     try {
//       // Use the login method from AuthContext
//       const success = await login(email, password); // login from AuthContext will handle the API request

//       if (success) {
//         // Redirect to the home page after successful login
//         navigate('/');
//       } else {
//         setError('Invalid email or password');
//       }
//     } catch (err) {
//       console.error('Error logging in:', err);
//       setError('An error occurred during login');
//     }
//   };

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
//           Pieteikties
//         </Typography>
//         {error && (
//           <Typography variant="body2" color="error">
//             {error}
//           </Typography>
//         )}
//         <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
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
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
//             Pieteikties
//           </Button>
//           <Typography variant="body2">
//             Jums vēl nav konta? <Link to="/register">Reģistrējieties</Link>.
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook

const Login = () => {
  const { login } = useAuth(); // Destructure the login method from the context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    try {
      const success = await login(email, password); // login from AuthContext will handle the API request

      if (success) {
        navigate("/"); // Redirect to home page after login
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("An error occurred during login");
    }
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Pieteikties
        </Typography>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
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
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Pieteikties
          </Button>

          {/* ✅ Forgot Password Link */}
          <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
            <Link to="/forgot-password">Aizmirsi paroli?</Link>
          </Typography>

          {/* ✅ Register Link */}
          <Typography variant="body2" sx={{ textAlign: "center", mt: 1 }}>
            Jums vēl nav konta? <Link to="/register">Reģistrējieties</Link>.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
