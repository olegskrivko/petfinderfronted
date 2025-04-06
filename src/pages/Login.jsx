// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Container, Typography, TextField, Button, Box } from "@mui/material";
// import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook

// const Login = () => {
//   const { login } = useAuth(); // Destructure the login method from the context
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }

//     try {
//       const success = await login(email, password); // login from AuthContext will handle the API request

//       if (success) {
//         navigate("/"); // Redirect to home page after login
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (err) {
//       console.error("Error logging in:", err);
//       setError("An error occurred during login");
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
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

//           {/* ✅ Forgot Password Link */}
//           <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
//             <Link to="/forgot-password">Aizmirsi paroli?</Link>
//           </Typography>

//           {/* ✅ Register Link */}
//           <Typography variant="body2" sx={{ textAlign: "center", mt: 1 }}>
//             Jums vēl nav konta? <Link to="/register">Reģistrējieties</Link>.
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Container, Typography, TextField, Button, Box, Grid } from "@mui/material";
// import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook

// const Login = () => {
//   const { login } = useAuth(); // Destructure the login method from the context
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }

//     try {
//       const success = await login(email, password); // login from AuthContext will handle the API request

//       if (success) {
//         navigate("/"); // Redirect to home page after login
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (err) {
//       console.error("Error logging in:", err);
//       setError("An error occurred during login");
//     }
//   };

//   return (
//     <Grid container sx={{ height: "100vh" }}>
//       {/* Left Side (Branding/Logo) */}
//       <Grid item xs={12} sm={6} sx={{
//         backgroundColor: "#22badf", 
//         display: "flex", 
//         justifyContent: "center", 
//         alignItems: "center", 
//         color: "#fff"
//       }}>
//         <Box>
//           {/* Branding or Logo */}
//           <Typography variant="h3" sx={{ fontWeight: 700 }}>Your Logo</Typography>
//           <Typography variant="h6" sx={{ marginTop: 2 }}>Lost & Found Pets</Typography>
//         </Box>
//       </Grid>

//       {/* Right Side (Login Form) */}
//       <Grid item xs={12} sm={6} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//         <Box sx={{ width: "80%", maxWidth: 400 }}>
//           <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//             Pieteikties
//           </Typography>

//           {error && (
//             <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
//               {error}
//             </Typography>
//           )}

//           <Box component="form" onSubmit={handleLogin} noValidate sx={{ display: "flex", flexDirection: "column" }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
//               Pieteikties
//             </Button>

//             {/* Forgot Password Link */}
//             <Typography variant="body2" align="center">
//               <Link to="/forgot-password">Aizmirsi paroli?</Link>
//             </Typography>

//             {/* Register Link */}
//             <Typography variant="body2" align="center" sx={{ mt: 1 }}>
//               Jums vēl nav konta? <Link to="/register">Reģistrējieties</Link>.
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Container, Typography, TextField, Button, Box, Grid } from "@mui/material";
// import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook

// const Login = () => {
//   const { login } = useAuth(); // Destructure the login method from the context
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }

//     try {
//       const success = await login(email, password); // login from AuthContext will handle the API request

//       if (success) {
//         navigate("/"); // Redirect to home page after login
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (err) {
//       console.error("Error logging in:", err);
//       setError("An error occurred during login");
//     }
//   };

//   return (
//     <Grid container sx={{ height: "100vh" }}>
//       {/* Left Side (Branding/Logo) - 3/5 of screen width */}
//       <Grid item xs={12} sm={7} sx={{
//         backgroundColor: "#22badf", 
//         display: "flex", 
//         justifyContent: "center", 
//         alignItems: "center", 
//         color: "#fff"
//       }}>
//         <Box>
//           {/* Branding or Logo */}
//           <Typography variant="h3" sx={{ fontWeight: 700 }}>Your Logo</Typography>
//           <Typography variant="h6" sx={{ marginTop: 2 }}>Lost & Found Pets</Typography>
//         </Box>
//       </Grid>

//       {/* Right Side (Login Form) - 2/5 of screen width */}
//       <Grid item xs={12} sm={5} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
//         <Box sx={{ width: "80%", maxWidth: 400 }}>
//           <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//             Pieteikties
//           </Typography>

//           {error && (
//             <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
//               {error}
//             </Typography>
//           )}

//           <Box component="form" onSubmit={handleLogin} noValidate sx={{ display: "flex", flexDirection: "column" }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
//               Pieteikties
//             </Button>

//             {/* Forgot Password Link */}
//             <Typography variant="body2" align="center">
//               <Link to="/forgot-password">Aizmirsi paroli?</Link>
//             </Typography>

//             {/* Register Link */}
//             <Typography variant="body2" align="center" sx={{ mt: 1 }}>
//               Jums vēl nav konta? <Link to="/register">Reģistrējieties</Link>.
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Container, Typography, TextField, Button, Box, Grid } from "@mui/material";
// import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook

// const Login = () => {
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }

//     try {
//       const success = await login(email, password);

//       if (success) {
//         navigate("/");
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (err) {
//       console.error("Error logging in:", err);
//       setError("An error occurred during login");
//     }
//   };

//   return (
//     <Grid container sx={{ height: "100vh" }}>
//       {/* Left Side (Branding/Logo) - 3/5 of screen width */}
//       <Grid
//         item
//         xs={12}
//         sm={7} // Adjusted for 3:2 ratio
//         sx={{
//           // backgroundColor: "#22badf",
//           backgroundColor: "#5B9BD5",
          
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "#fff",
//           padding: 4,
//         }}
//       >
//         <Box textAlign="center">
//           <Typography variant="h3" sx={{ fontWeight: 700 }}>PawClix</Typography>
//           <Typography variant="h6" sx={{ marginTop: 2 }}>Lost & Found Pets</Typography>
//         </Box>
//       </Grid>

//       {/* Right Side (Login Form) - 2/5 of screen width */}
//       <Grid
//         item
//         xs={12}
//         sm={5} // Adjusted for 3:2 ratio
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 3 }}
//       >
//         <Box sx={{ width: "80%", maxWidth: 400 }}>
//           <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//             Pieteikties
//           </Typography>

//           {error && (
//             <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
//               {error}
//             </Typography>
//           )}

//           <Box component="form" onSubmit={handleLogin} noValidate sx={{ display: "flex", flexDirection: "column" }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               autoComplete="email"
//               autoFocus
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
//               Pieteikties
//             </Button>

//             {/* Forgot Password Link */}
//             <Typography variant="body2" align="center">
//               <Link to="/forgot-password">Aizmirsi paroli?</Link>
//             </Typography>

//             {/* Register Link */}
//             <Typography variant="body2" align="center" sx={{ mt: 1 }}>
//               Jums vēl nav konta? <Link to="/register">Reģistrējieties</Link>.
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;
// import React, { useState, useRef, useEffect } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Container, Typography, TextField, Button, Box, Grid, IconButton, InputAdornment } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook

// const Login = () => {
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
//   const navigate = useNavigate();
//   const emailInputRef = useRef(null); // Create a ref for email input field

//   // Focus the email input field on page load
//   useEffect(() => {
//     if (emailInputRef.current) {
//       emailInputRef.current.focus();
//     }
//   }, []);

//   // Handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }

//     try {
//       const success = await login(email, password);

//       if (success) {
//         navigate("/");
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (err) {
//       console.error("Error logging in:", err);
//       setError("An error occurred during login");
//     }
//   };

//   return (
//     <Grid container sx={{ height: "100vh" }}>
//       {/* Left Side (Branding/Logo) - 3/5 of screen width */}
//       <Grid
//         item
//         xs={12}
//         sm={7}
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
//           <Typography variant="h3" sx={{ fontWeight: 700 }}>PawClix</Typography>
//           <Typography variant="h6" sx={{ marginTop: 2 }}>Lost & Found Pets</Typography>
//         </Box>
//       </Grid>

//       {/* Right Side (Login Form) - 2/5 of screen width */}
//       <Grid
//         item
//         xs={12}
//         sm={5}
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 3 }}
//       >
//         <Box sx={{ width: "80%", maxWidth: 400 }}>
//           <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//             Pieteikties
//           </Typography>

//           {error && (
//             <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
//               {error}
//             </Typography>
//           )}

//           <Box component="form" onSubmit={handleLogin} noValidate sx={{ display: "flex", flexDirection: "column" }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email"
//               name="email"
//               autoComplete="email"
//               ref={emailInputRef} // Focus on email field
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type={showPassword ? "text" : "password"} // Toggle password visibility
//               id="password"
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               sx={{ mb: 2 }}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       aria-label="toggle password visibility"
//                       onClick={() => setShowPassword((prev) => !prev)}
//                       edge="end"
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2, backgroundColor: "#5B9BD5" }}>
//               Pieteikties
//             </Button>

//             {/* Forgot Password Link */}
//             <Typography variant="body2" align="center">
//               <Link to="/forgot-password">Aizmirsi paroli?</Link>
//             </Typography>

//             {/* Register Link */}
//             <Typography variant="body2" align="center" sx={{ mt: 1 }}>
//               Jums vēl nav konta? <Link to="/register">Reģistrējieties</Link>.
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;
// import React, { useState, useLayoutEffect, useRef } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Typography, TextField, Button, Box, Grid, IconButton, InputAdornment } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook

// const Login = () => {
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const emailInputRef = useRef(null); // Create a ref for the email input
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }

//     try {
//       const success = await login(email, password);

//       if (success) {
//         navigate("/");
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (err) {
//       console.error("Error logging in:", err);
//       setError("An error occurred during login");
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
//           <Typography variant="h3" sx={{ fontWeight: 700 }}>PawClix</Typography>
//           <Typography variant="h6" sx={{ marginTop: 2 }}>Lost & Found Pets</Typography>
//         </Box>
//       </Grid>

//       {/* Right Side (Login Form) */}
//       <Grid
//         item
//         xs={12}
//         sm={5} // Adjusted for 3:2 ratio
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 3 }}
//       >
//         <Box sx={{ width: "80%", maxWidth: 400 }}>
//           <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//             Pieteikties
//           </Typography>

//           {error && (
//             <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
//               {error}
//             </Typography>
//           )}

//           <Box component="form" onSubmit={handleLogin} noValidate sx={{ display: "flex", flexDirection: "column" }}>
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
//               autoComplete="current-password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               sx={{ mb: 2 }}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleClickShowPassword} edge="end">
//                       {/* {showPassword ? <VisibilityOff /> : <Visibility />} */}
//                       {showPassword ? <Visibility /> : <VisibilityOff />}  {/* Open eye for visible, closed for hidden */}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
//             <Button type="submit" fullWidth variant="contained" sx={{ mt: 2, mb: 2 }}>
//               Pieteikties
//             </Button>

//             {/* Forgot Password Link */}
//             <Typography variant="body2" align="center">
//               <Link to="/forgot-password">Aizmirsi paroli?</Link>
//             </Typography>

//             {/* Register Link */}
//             <Typography variant="body2" align="center" sx={{ mt: 1 }}>
//               Jums vēl nav konta? <Link to="/register">Reģistrējieties</Link>.
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;
// import React, { useState, useLayoutEffect, useRef } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Typography, TextField, Button, Box, Grid, IconButton, InputAdornment, CircularProgress } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook
// import { motion } from "framer-motion";
// const Login = () => {
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false); // State to track loading
//   const emailInputRef = useRef(null); // Create a ref for the email input
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }

//     setLoading(true); // Start the loading spinner

//     try {
//       const success = await login(email, password);

//       if (success) {
//         setLoading(false); // Stop the loading spinner
//         navigate("/"); // Redirect to the main page
//       } else {
//         setError("Invalid email or password");
//         setLoading(false); // Stop the loading spinner if login fails
//       }
//     } catch (err) {
//       console.error("Error logging in:", err);
//       setError("An error occurred during login");
//       setLoading(false); // Stop the loading spinner if an error occurs
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
//                       <Link style={{ textDecoration: "none", color: "#fff" }} to="/">PawClix</Link>
//           </Typography>
//           <Typography variant="h6" sx={{ marginTop: 2 }}>
//             Lost & Found Pets
//           </Typography>
//         </Box>
//       </Grid>

//       {/* Right Side (Login Form) */}
//       <Grid
//         item
//         xs={12}
//         sm={5} // Adjusted for 3:2 ratio
//         sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: 3 }}
//       >
//         <Box sx={{ width: "80%", maxWidth: 400 }}>
//           <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//             Pieteikties
//           </Typography>

//           {error && (
//             <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
//               {error}
//             </Typography>
//           )}

//           <Box component="form" onSubmit={handleLogin} noValidate sx={{ display: "flex", flexDirection: "column" }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="E-pasts"
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
//               label="Parole"
//               type={showPassword ? "text" : "password"}
//               id="password"
//               autoComplete="current-password"
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
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 2, mb: 2, backgroundColor: "#5B9BD5"  }}
//               disabled={loading} // Disable button during loading
//             >
//               {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Pieteikties"}
//             </Button>

//             {/* Forgot Password Link */}
//             <Typography variant="body2" align="center">
//               <Link to="/forgot-password">Aizmirsi paroli?</Link>
//             </Typography>

//             {/* Register Link */}
//             <Typography variant="body2" align="center" sx={{ mt: 1 }}>
//               Jums vēl nav konta? <Link to="/register">Reģistrējieties</Link>.
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;
// import React, { useState, useLayoutEffect, useRef } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Typography, TextField, Button, Box, Grid, IconButton, InputAdornment, CircularProgress } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook

// const Login = () => {
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false); // State to track loading
//   const emailInputRef = useRef(null); // Create a ref for the email input
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }

//     setLoading(true); // Start the loading spinner

//     try {
//       const success = await login(email, password);

//       if (success) {
//         setLoading(false); // Stop the loading spinner
//         navigate("/"); // Redirect to the main page
//       } else {
//         setError("Invalid email or password");
//         setLoading(false); // Stop the loading spinner if login fails
//       }
//     } catch (err) {
//       console.error("Error logging in:", err);
//       setError("An error occurred during login");
//       setLoading(false); // Stop the loading spinner if an error occurs
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
//     <Grid container sx={{ height: "100vh" }} justifyContent="center" alignItems="center">
//       {/* Centered Login Form */}
//       <Grid item xs={12} sm={6} md={4}>
//         <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 3, border: "1px solid #ddd", borderRadius: "8px" }}>
//           <Typography component="h1" variant="h5" align="center" sx={{ mb: 2 }}>
//             Pieteikties
//           </Typography>

//           {error && (
//             <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
//               {error}
//             </Typography>
//           )}

//           <Box component="form" onSubmit={handleLogin} noValidate sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="E-pasts"
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
//               label="Parole"
//               type={showPassword ? "text" : "password"}
//               id="password"
//               autoComplete="current-password"
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
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 2, mb: 2, backgroundColor: "#5B9BD5" }}
//               disabled={loading} // Disable button during loading
//             >
//               {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Pieteikties"}
//             </Button>

//             {/* Forgot Password Link */}
//             <Typography variant="body2" align="center">
//               <Link to="/forgot-password">Aizmirsi paroli?</Link>
//             </Typography>

//             {/* Register Link */}
//             <Typography variant="body2" align="center" sx={{ mt: 1 }}>
//               Jums vēl nav konta? <Link to="/register">Reģistrējieties</Link>.
//             </Typography>
//           </Box>
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default Login;
// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Container, Typography, TextField, Button, Box } from "@mui/material";
// import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook

// const Login = () => {
//   const { login } = useAuth(); // Destructure the login method from the context
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }

//     try {
//       const success = await login(email, password); // login from AuthContext will handle the API request

//       if (success) {
//         navigate("/"); // Redirect to home page after login
//       } else {
//         setError("Invalid email or password");
//       }
//     } catch (err) {
//       console.error("Error logging in:", err);
//       setError("An error occurred during login");
//     }
//   };

//   return (
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
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

//           {/* ✅ Forgot Password Link */}
//           <Typography variant="body2" sx={{ textAlign: "center", mt: 2 }}>
//             <Link to="/forgot-password">Aizmirsi paroli?</Link>
//           </Typography>

//           {/* ✅ Register Link */}
//           <Typography variant="body2" sx={{ textAlign: "center", mt: 1 }}>
//             Jums vēl nav konta? <Link to="/register">Reģistrējieties</Link>.
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;
// import React, { useState, useLayoutEffect, useRef } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import { Container, Typography, TextField, Button, Box, IconButton, InputAdornment, CircularProgress } from "@mui/material";
// import { Visibility, VisibilityOff } from "@mui/icons-material";
// import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook

// const Login = () => {
//   const { login } = useAuth(); // Destructure the login method from the context
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false); // State to track loading
//   const emailInputRef = useRef(null); // Create a ref for the email input
//   const navigate = useNavigate();

//   // Handle form submission
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       setError("Please enter both email and password");
//       return;
//     }

//     setLoading(true); // Start the loading spinner

//     try {
//       const success = await login(email, password); // login from AuthContext will handle the API request

//       if (success) {
//         setLoading(false); // Stop the loading spinner
//         navigate("/"); // Redirect to home page after login
//       } else {
//         setError("Invalid email or password");
//         setLoading(false); // Stop the loading spinner if login fails
//       }
//     } catch (err) {
//       console.error("Error logging in:", err);
//       setError("An error occurred during login");
//       setLoading(false); // Stop the loading spinner if an error occurs
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
//     <Container maxWidth="xs">
//       <Box
//         sx={{
//           marginTop: 8,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <Typography component="h1" variant="h5" align="center">
//           Pieteikties
//         </Typography>

//         {error && (
//           <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
//             {error}
//           </Typography>
//         )}

//         <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="E-pasts"
//             name="email"
//             autoComplete="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             inputRef={emailInputRef} // Focus the email input immediately
//             sx={{ mb: 2 }}
//           />
          
//           <TextField
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Parole"
//             type={showPassword ? "text" : "password"}
//             id="password"
//             autoComplete="current-password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             sx={{ mb: 2 }}
//             InputProps={{
//               endAdornment: (
//                 <InputAdornment position="end">
//                   <IconButton onClick={handleClickShowPassword} edge="end">
//                     {showPassword ? <Visibility /> : <VisibilityOff />}
//                   </IconButton>
//                 </InputAdornment>
//               ),
//             }}
//           />

//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 2, mb: 2, backgroundColor: "#5B9BD5" }}
//             disabled={loading} // Disable button during loading
//           >
//             {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Pieteikties"}
//           </Button>

//           {/* Forgot Password Link */}
//           <Typography variant="body2" align="center">
//             <Link to="/forgot-password">Aizmirsi paroli?</Link>
//           </Typography>

//           {/* Register Link */}
//           <Typography variant="body2" align="center" sx={{ mt: 1 }}>
//             Jums vēl nav konta? <Link to="/register">Reģistrējieties</Link>.
//           </Typography>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Login;
import React, { useState, useLayoutEffect, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Container, Typography, TextField, Button, Box, IconButton, InputAdornment, CircularProgress } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../contexts/AuthContext"; // Import the useAuth hook

const Login = () => {
  const { login } = useAuth(); // Destructure the login method from the context
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false); // State to track loading
  const emailInputRef = useRef(null); // Create a ref for the email input
  const navigate = useNavigate();

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Lūdzu, ievadiet savu e-pastu un paroli");
      return;
    }

    setLoading(true); // Start the loading spinner

    try {
      const success = await login(email, password); // login from AuthContext will handle the API request

      if (success) {
        setLoading(false); // Stop the loading spinner
        navigate("/"); // Redirect to home page after login
      } else {
        setError("Nepareizs e-pasts vai parole");
        setLoading(false); // Stop the loading spinner if login fails
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("Radās kļūda pieteikšanās laikā");
      setLoading(false); // Stop the loading spinner if an error occurs
    }
  };

  // Use useLayoutEffect to focus the email input when the component is mounted
  useLayoutEffect(() => {
    if (emailInputRef.current) {
      emailInputRef.current.focus(); // Focus the email input immediately after mount
    }
  }, []); // Empty dependency array to run once when the component mounts

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
          Pieteikties
        </Typography>
        {error && (
          <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
            {error}
          </Typography>
        )}

        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
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
            inputRef={emailInputRef} // Focus the email input immediately
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
            autoComplete="current-password"
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
            {loading ? <CircularProgress size={24} sx={{ color: "white" }} /> : "Pieteikties"}
          </Button>

          {/* Register Link */}
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Jums vēl nav konta? <Link to="/register">Reģistrējieties tagad!</Link>
          </Typography>

          {/* Forgot Password Link */}
          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            <Link to="/forgot-password">Aizmirsi paroli?</Link>
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
