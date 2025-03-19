import { useState } from "react";
import { Button, CircularProgress, Snackbar, Alert } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleCheckout = async () => {
    if (!user) {
      setError("You need to be logged in to make a payment.");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const accessToken = localStorage.getItem("access_token");
      const response = await fetch(
        "http://127.0.0.1:8000/api/payments/create-checkout-session/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok && data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        setError(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setError("Failed to connect to the payment server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleCheckout}
        disabled={loading}
        sx={{ mt: 2, px: 4, py: 1.5, fontSize: "1rem" }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Pay Now"}
      </Button>

      {/* Error Snackbar */}
      <Snackbar
        open={!!error}
        autoHideDuration={5000}
        onClose={() => setError(null)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      </Snackbar>
    </>
  );
};

export default CheckoutButton;
