import { useState } from "react";
import { Button, CircularProgress, Snackbar, Alert } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
// const CheckoutButton = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const { user } = useAuth();
//   const navigate = useNavigate();

//   const handleCheckout = async () => {
//     if (!user) {
//       setError("You need to be logged in to make a payment.");
//       return;
//     }

//     setLoading(true);
//     setError(null);
    
//     try {
//       const accessToken = localStorage.getItem("access_token");
//       const response = await fetch(
//         `${API_BASE_URL}/payments/create-checkout-session/`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${accessToken}`,
//           },
//         }
//       );

//       const data = await response.json();

//       if (response.ok && data.url) {
//         window.location.href = data.url; // Redirect to Stripe Checkout
//       } else {
//         setError(data.error || "Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setError("Failed to connect to the payment server.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <Button
//         variant="contained"
//         color="primary"
//         onClick={handleCheckout}
//         disabled={loading}
//         sx={{ mt: 2, px: 4, py: 1.5, fontSize: "1rem" }}
//       >
//         {loading ? <CircularProgress size={24} color="inherit" /> : "Pay Now"}
//       </Button>

//       {/* Error Snackbar */}
//       <Snackbar
//         open={!!error}
//         autoHideDuration={5000}
//         onClose={() => setError(null)}
//         anchorOrigin={{ vertical: "top", horizontal: "center" }}
//       >
//         <Alert severity="error" onClose={() => setError(null)}>
//           {error}
//         </Alert>
//       </Snackbar>
//     </>
//   );
// };
const CheckoutButton = ({ amount }) => {
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
        // `${API_BASE_URL}/payments/create-checkout-session/`,
        // `${API_BASE_URL}/payments/create-checkout-session/one-time/`,
        `${API_BASE_URL}/payments/create-checkout-session/subscription/`,
        
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ amount }), // 🔥 pass the amount here
        }
      );

      const data = await response.json();

      if (response.ok && data.url) {
        window.location.href = data.url;
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
