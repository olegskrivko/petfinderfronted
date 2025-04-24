// import { Container, Typography, Paper, Box } from "@mui/material";
// import CheckoutButton from "./CheckoutButton";

// const CheckoutPage = () => {
//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ p: 4, mt: 5, textAlign: "center", borderRadius: 3 }}>
//         <Typography variant="h4" fontWeight="bold" gutterBottom>
//           Premium Subscription
//         </Typography>
//         <Typography variant="h6" color="text.secondary" gutterBottom>
//           Unlock exclusive features and enjoy premium content.
//         </Typography>
//         <Typography variant="h5" color="primary" fontWeight="bold" sx={{ my: 2 }}>
//           $50.00
//         </Typography>
//         <CheckoutButton />
//       </Paper>
//     </Container>
//   );
// };

// export default CheckoutPage;
import { Container, Typography, Paper } from "@mui/material";
import CheckoutButton from "./CheckoutButton";
import { useLocation } from "react-router-dom";

const CheckoutPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const plan = queryParams.get("plan");

  // Define plan pricing
  const planDetails = {
    plus: {
      name: "Plus Subscription",
      price: 5.00,
    },
    premium: {
      name: "Premium Subscription",
      price: 12.00,
    },
    freemium: {
      name: "Freemium Plan",
      price: 0.00,
    },
  };

  const selectedPlan = planDetails[plan] || planDetails["freemium"];

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, mt: 5, textAlign: "center", borderRadius: 3 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {selectedPlan.name}
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          Unlock exclusive features and enjoy premium content.
        </Typography>
        <Typography variant="h5" color="primary" fontWeight="bold" sx={{ my: 2 }}>
          {selectedPlan.price > 0 ? `€${selectedPlan.price.toFixed(2)}` : "Free"}
        </Typography>
        <CheckoutButton amount={selectedPlan.price} />
      </Paper>
    </Container>
  );
};

export default CheckoutPage;

