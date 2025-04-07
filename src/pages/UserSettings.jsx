import React, { useState, useEffect } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
  TextField,
  Button,
  Card,
  IconButton,
  Tooltip,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
function UserSettings() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username,
        email: user.email,
      });
    }
  }, [user]);

  console.log("User:", user);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    logout();
    navigate("/logout");
  };

  const handleDeleteAccount = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
  
      if (!accessToken) {
        console.error("No access token found");
        return;
      }
  
      await axios.delete(`${API_BASE_URL}/auth/user/delete/`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
  
      // Logout the user after account deletion
      logout();
      navigate("/account-deleted"); // Redirect to signup or homepage
    } catch (err) {
      console.error("Error deleting account:", err);
    }
  };
  

  if (!user) {
    return <Typography>Loading user data...</Typography>;
  }

  return (
    <>
 <Container component="main" maxWidth="sm" sx={{ py: 6, paddingLeft: 0, paddingRight: 0 }}>
      <Grid item xs={12}>
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ mb: 3, fontWeight: "500" }}>
            LIETOTĀJA IESTATĪJUMI
          </Typography>
          <Box sx={{ textAlign: "start" }}>
            <TextField
              fullWidth
              margin="normal"
              label="Lietotājvārds"
              name="username"
              value={formData.username}
              onChange={handleChange}
              InputProps={{ readOnly: true }}
            />
            <TextField
              fullWidth
              margin="normal"
              label="E-pasts"
              name="email"
              value={formData.email}
              onChange={handleChange}
              InputProps={{ readOnly: true }}
            />
          </Box>
        </Box>
      </Grid>

      

      <Grid container spacing={2} sx={{ mt: 4 }}>
        {/* Logout Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "0.5rem !important",
                paddingTop: "0.5rem !important",
              }}
            >
              <Typography variant="body1">Izrakstīties</Typography>
              <Tooltip title="Izrakstīties">
                <IconButton
                  edge="end"
                  color="primary"
                  aria-label="logout"
                  onClick={handleLogout}
                  sx={{ cursor: "pointer" }}
                >
                  <ExitToAppIcon />
                </IconButton>
              </Tooltip>
            </CardContent>
          </Card>
        </Grid>

        {/* Delete Account Card */}
        <Grid item xs={12}>
          <Card>
            <CardContent
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingBottom: "0.5rem !important",
                paddingTop: "0.5rem !important",
              }}
            >
              <Typography variant="body1" color="error" fontWeight="bold">
                Dzēst profilu
              </Typography>
              <Tooltip title="Izdzēst">
                <IconButton
                  edge="end"
                  color="error"
                  aria-label="delete"
                  onClick={() => setOpenDialog(true)}
                  sx={{ cursor: "pointer" }}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Delete Confirmation Dialog */}
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Vai tiešām vēlaties dzēst savu profilu?</DialogTitle>
        <DialogContent>
          <Typography>Šī darbība neatgriezeniski dzēsīs jūsu kontu un visus datus.</Typography>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleDeleteAccount} color="error">Dzēst</Button>
          <Button onClick={() => setOpenDialog(false)} color="primary">Atcelt</Button>
        </DialogActions>
      </Dialog>

      {/* Back Button */}
      <Grid container spacing={2} sx={{ mt: 4 }}>
        <Grid item xs={12}>
          <Box textAlign="left">
            <Button
              variant="outlined"
              color="primary"
              startIcon={<ArrowBackIcon />}
              component={Link}
              to={`/user-profile`}
            >
              Atpakaļ
            </Button>
          </Box>
        </Grid>
      </Grid>
      </Container>
    </>
  );
}

export default UserSettings;
