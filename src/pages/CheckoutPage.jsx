import { Container, Typography, Paper, Box } from "@mui/material";
import CheckoutButton from "./CheckoutButton";

const CheckoutPage = () => {
  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5, textAlign: "center", borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Premium Subscription
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Unlock exclusive features and enjoy premium content.
        </Typography>
        <Typography variant="h5" color="primary" fontWeight="bold" sx={{ my: 2 }}>
          $50.00
        </Typography>
        <CheckoutButton />
      </Paper>
    </Container>
  );
};

export default CheckoutPage;
