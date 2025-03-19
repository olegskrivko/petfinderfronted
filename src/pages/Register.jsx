import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
// import { BASE_URL } from '../../middleware/config';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Register = () => {
  // const [username, setUsername] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log("🔍 handleRegister called! Sending request...");
    try {
      
      const response = await fetch('http://127.0.0.1:8000/api/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ username, email, password }),
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        //alert('Account created successfully');
        setSuccess('Jauns lietotājs ir veiksmīgi izveidots');
      } else {
        setError(data.detail || 'Radās kļūda');
      }
    } catch (err) {
      //setError('Error: ' + err.message);
      setError('Kļūda piereģistrēt jaunu lietotāju');
      setSuccess('');
    }
  };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post(`${BASE_URL}/auth/register`, {
//         // username,
//         email,
//         password,
//       });
//       setSuccess('User registered successfully');
//       setError('');
//       navigate('/login');
//     } catch (err) {
//       setError('Error registering user');
//       setSuccess('');
//     }
//   };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Registrēties
        </Typography>
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
        {success && (
          <Typography variant="body2" color="success">
            {success}
          </Typography>
        )}
        <Box component="form" onSubmit={handleRegister} noValidate sx={{ mt: 1 }}>
          {/* <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /> */}
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
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
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Reģistrēties
          </Button>
          <Typography variant="body2">
          Jums jau ir konts? <Link to="/login">Pieteikties</Link>.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Register;
