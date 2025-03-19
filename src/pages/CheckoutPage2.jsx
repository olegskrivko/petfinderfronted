import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { Box, Button, CircularProgress, Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

// Styled CardElement container
const CardElementContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

const CheckoutPage = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      console.log("Payment successful!", paymentMethod);
      // Send `paymentMethod.id` to your Django backend for processing
    }
    setLoading(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
      bgcolor="#f4f6f8"
    >
      <Paper elevation={3} sx={{ p: 4, width: "400px", textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          Secure Checkout
        </Typography>
        <Typography variant="body2" color="textSecondary" gutterBottom>
          Enter your payment details below.
        </Typography>

        <CardElementContainer>
          <CardElement options={{ hidePostalCode: true }} />
        </CardElementContainer>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Pay Now"}
        </Button>
      </Paper>
    </Box>
  );
};

export default CheckoutPage;
