// // CheckoutButton.js
// import { useStripe } from "@stripe/react-stripe-js";

// const CheckoutButton = () => {
//   const stripe = useStripe();

//   const handleCheckout = async () => {
//     const response = await fetch("https://petfinderbackend-production.up.railway.app/api/payments/create-checkout-session/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//     });

//     const { sessionId } = await response.json();
//     stripe.redirectToCheckout({ sessionId });
//   };

//   return <button onClick={handleCheckout}>Pay Now</button>;
// };

// export default CheckoutButton;
import { useState } from "react";
import { Button, CircularProgress } from "@mui/material";

const CheckoutButton = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://petfinderbackend-production.up.railway.app/api/payments/create-checkout-session/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url; // Redirect to Stripe
      }
    } catch (error) {
      console.error("Checkout error:", error);
    }
    setLoading(false);
  };

  return (
    <Button variant="contained" color="primary" onClick={handleCheckout} disabled={loading}>
      {loading ? <CircularProgress size={24} color="inherit" /> : "Pay Now"}
    </Button>
  );
};

export default CheckoutButton;
