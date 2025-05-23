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
  Slider,
  Tooltip,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";
import axios from 'axios';


const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 


const urlBase64ToUint8Array = (base64String) => {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for (let i = 0; i < rawData.length; i++) {
    outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
};

const arrayBufferToBase64 = (buffer) => {
  const uint8Array = new Uint8Array(buffer);
  let binary = '';
  uint8Array.forEach(byte => {
    binary += String.fromCharCode(byte);
  });
  return window.btoa(binary);
};
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
  
 const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscription, setSubscription] = useState(null);
  const [lat, setLat] = useState(56.946);     // Default to Riga
  const [lon, setLon] = useState(24.1059);    // Default to Riga
  const [distance, setDistance] = useState(5); // Default 5 km

  const askForNotificationPermission = async () => {
    try {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        await subscribeUserToPush();
      }
    } catch (error) {
      console.error("Permission request failed", error);
    }
  };

  const subscribeUserToPush = async () => {
    try {
      const registration = await navigator.serviceWorker.register("/service-worker.js");

      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array("BOZTcqsdJXUbELTV3ax5lK3X3Wh4S33MuJAZ75MVWCxjtrcn7nVr2Xp-JPiPlVJCE9gqmLv23_PR_f-7uKgU8iU"),
      });

      setSubscription(subscription);
      setIsSubscribed(true);
      await saveSubscriptionToBackend(subscription);
    } catch (error) {
      console.error("Subscription error:", error);
    }
  };

  const saveSubscriptionToBackend = async (subscription) => {
    try {
      const accessToken = localStorage.getItem("access_token");
      const subscriptionData = {
        endpoint: subscription.endpoint,
        p256dh: arrayBufferToBase64(subscription.getKey("p256dh")),
        auth: arrayBufferToBase64(subscription.getKey("auth")),
        lat,
        lon,
        distance,
      };

      const response = await fetch(`${API_BASE_URL}/notifications/subscribe/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(subscriptionData),
      });

      if (!response.ok) {
        const error = await response.text();
        console.error("Subscription error:", error);
      }
    } catch (error) {
      console.error("Error saving subscription:", error);
    }
  };

  const checkExistingSubscription = async () => {
    try {
      const registration = await navigator.serviceWorker.ready;
      const existingSubscription = await registration.pushManager.getSubscription();

      if (!existingSubscription) return setIsSubscribed(false);

      setSubscription(existingSubscription);

      const accessToken = localStorage.getItem("access_token");
      const response = await fetch(
        `${API_BASE_URL}/notifications/is_subscribed/?endpoint=${encodeURIComponent(existingSubscription.endpoint)}`,
        {
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );

      const result = await response.json();
      setIsSubscribed(result.subscribed);

      if (!result.subscribed) {
        await saveSubscriptionToBackend(existingSubscription);
      }
    } catch (error) {
      console.error("Subscription check failed:", error);
    }
  };

  const unsubscribeUser = async () => {
    try {
      const registration = await navigator.serviceWorker.getRegistration();
      const subscription = await registration.pushManager.getSubscription();
      const accessToken = localStorage.getItem("access_token");

      if (subscription) {
        await subscription.unsubscribe();
        await fetch(`${API_BASE_URL}/notifications/unsubscribe/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ endpoint: subscription.endpoint }),
        });

        setIsSubscribed(false);
        setSubscription(null);
      }
    } catch (error) {
      console.error("Unsubscribe failed:", error);
    }
  };

  const sendTestNotification = async () => {
    try {
      const accessToken = localStorage.getItem("access_token");
      await fetch(`${API_BASE_URL}/notifications/send_notification/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          title: "Test Notification",
          body: "This is a test notification.",
          url: "https://example.com",
        }),
      });
    } catch (error) {
      console.error("Send notification failed:", error);
    }
  };

  useEffect(() => {
    checkExistingSubscription();
  }, []);
  if (!user) {
    return <Typography>Loading user data...</Typography>;
  }

  return (
    <>
  <Container component="main" maxWidth="lg" >
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
      <Grid item xs={12}>
      <Box sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Push Notifications
      </Typography>

      <Box sx={{ my: 3 }}>
        <TextField
          label="Latitude"
          type="number"
          value={lat}
          onChange={(e) => setLat(parseFloat(e.target.value))}
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          label="Longitude"
          type="number"
          value={lon}
          onChange={(e) => setLon(parseFloat(e.target.value))}
          fullWidth
          sx={{ mb: 2 }}
        />

        <Typography gutterBottom>Distance (km)</Typography>
        <Slider
          value={distance}
          onChange={(e, newValue) => setDistance(newValue)}
          min={1}
          max={50}
          step={1}
          valueLabelDisplay="auto"
        />
      </Box>

      {isSubscribed ? (
        <Box>
          <Typography>You are subscribed to push notifications.</Typography>
          <Button variant="contained" color="error" onClick={unsubscribeUser} sx={{ mt: 2, mr: 2 }}>
            Unsubscribe
          </Button>
          <Button variant="outlined" onClick={sendTestNotification} sx={{ mt: 2 }}>
            Send Test Notification
          </Button>
        </Box>
      ) : (
        <Box>
          <Typography>You are not subscribed yet.</Typography>
          <Button variant="contained" onClick={askForNotificationPermission} sx={{ mt: 2 }}>
            Subscribe
          </Button>
        </Box>
      )}
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
