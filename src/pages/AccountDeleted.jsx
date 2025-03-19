// import React from "react";
// import { Container, Typography, Button, Box } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// const AccountDeleted = () => {
//   const navigate = useNavigate();

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ marginTop: 8, textAlign: "center" }}>
//         <Typography variant="h4" gutterBottom>
//           Your Account Has Been Deleted
//         </Typography>
//         <Typography variant="body1" color="textSecondary" sx={{ mt: 2, mb: 4 }}>
//           Thank you for being a part of our community. We're sad to see you go!  
//           If you ever decide to return, we'll be here to welcome you back.
//         </Typography>
//         <Typography variant="body2" color="textSecondary">
//           If you deleted your account by mistake or need help, please contact our support team.
//         </Typography>
//         <Box sx={{ mt: 4 }}>
//           <Button
//             variant="contained"
//             color="primary"
//             sx={{ mr: 2 }}
//             onClick={() => navigate("/")}
//           >
//             Return to Homepage
//           </Button>
//           <Button
//             variant="outlined"
//             color="secondary"
//             onClick={() => window.location.href = "mailto:support@example.com"}
//           >
//             Contact Support
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default AccountDeleted;
import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AccountDeleted = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box sx={{ marginTop: 8, textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Jūsu konts ir izdzēsts
        </Typography>
        <Typography variant="body1" color="textSecondary" sx={{ mt: 2, mb: 4 }}>
          Paldies, ka bijāt daļa no mūsu kopienas. Mums žēl, ka jūs aizejat!  
          Ja kādreiz izlemsiet atgriezties, mēs jūs labprāt uzņemsim atpakaļ.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Ja nejauši izdzēsāt savu kontu vai nepieciešama palīdzība, lūdzu, sazinieties ar mūsu atbalsta komandu.
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            sx={{ mr: 2 }}
            onClick={() => navigate("/")}
          >
            Atgriezties sākumlapā
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => window.location.href = "mailto:support@example.com"}
          >
            Sazināties ar atbalstu
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AccountDeleted;
