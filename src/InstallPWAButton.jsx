// // import React, { useEffect, useState } from "react";

// // const InstallPWAButton = () => {
// //   const [deferredPrompt, setDeferredPrompt] = useState(null);
// //   const [showButton, setShowButton] = useState(false);

// //   useEffect(() => {
// //     const handleBeforeInstallPrompt = (event) => {
// //       event.preventDefault(); // Prevent auto-prompt
// //       setDeferredPrompt(event);
// //       setShowButton(true); // Show button when installable
// //     };

// //     window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

// //     return () => {
// //       window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
// //     };
// //   }, []);

// //   const handleInstallClick = async () => {
// //     if (deferredPrompt) {
// //       deferredPrompt.prompt(); // Show the install prompt
// //       const { outcome } = await deferredPrompt.userChoice; // Wait for user choice
// //       console.log("User response:", outcome);
// //       setDeferredPrompt(null);
// //       setShowButton(false); // Hide button after install attempt
// //     }
// //   };

// //   return showButton ? (
// //     <button
// //       onClick={handleInstallClick}
// //       style={{
// //         position: "fixed",
// //         bottom: 0,
// //         left: 0,
// //         width: "100%",
// //         padding: "16px",
// //         backgroundColor: "#007bff",
// //         color: "white",
// //         fontSize: "18px",
// //         border: "none",
// //         cursor: "pointer",
// //       }}
// //     >
// //       📲 Install App
// //     </button>
// //   ) : null;
// // };

// // export default InstallPWAButton;
// import React, { useState, useEffect } from "react";
// import Button from "@mui/material/Button";

// const InstallPWAButton = () => {
//   const [deferredPrompt, setDeferredPrompt] = useState(null);
//   const [showInstallButton, setShowInstallButton] = useState(false);

//   useEffect(() => {
//     const handler = (e) => {
//       e.preventDefault();
//       setDeferredPrompt(e);
//       setShowInstallButton(true);
//     };

//     window.addEventListener("beforeinstallprompt", handler);

//     return () => window.removeEventListener("beforeinstallprompt", handler);
//   }, []);

//   const installPWA = () => {
//     if (deferredPrompt) {
//       deferredPrompt.prompt();
//       deferredPrompt.userChoice.then((choice) => {
//         if (choice.outcome === "accepted") {
//           console.log("User installed the PWA");
//         }
//         setDeferredPrompt(null);
//         setShowInstallButton(false);
//       });
//     }
//   };

//   if (!showInstallButton) return null;

//   return (
//     <Button
//       variant="contained"
//       sx={{
//         width: "100%",
//         backgroundColor: "#ffcb56",
//         color: "#000",
//         fontWeight: "bold",
//         padding: "12px",
//         fontSize: "16px",
//       }}
//       onClick={installPWA}
//     >
//       📲 Instalēt Lietotni
//     </Button>
//   );
// };

// export default InstallPWAButton;
// import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';

// const InstallPWAButton = () => {
//   const [deferredPrompt, setDeferredPrompt] = useState(null);
//   const [showInstallButton, setShowInstallButton] = useState(false);

//   useEffect(() => {
//     window.addEventListener('beforeinstallprompt', (event) => {
//       console.log("✅ PWA Install Prompt is available!");
//       event.preventDefault();
//       setDeferredPrompt(event);
//       setShowInstallButton(true);
//     });

//     return () => {
//       window.removeEventListener('beforeinstallprompt', () => {});
//     };
//   }, []);

//   const installApp = () => {
//     if (deferredPrompt) {
//       deferredPrompt.prompt();
//       deferredPrompt.userChoice.then((choiceResult) => {
//         if (choiceResult.outcome === 'accepted') {
//           console.log('User accepted PWA install');
//         } else {
//           console.log('User dismissed PWA install');
//         }
//         setDeferredPrompt(null);
//         setShowInstallButton(false);
//       });
//     }
//   };

//   return (
//     showInstallButton && (
//       <Button
//         variant="contained"
//         color="primary"
//         fullWidth
//         style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1000 }}
//         onClick={installApp}
//       >
//         📲 Install App
//       </Button>
//     )
//   );
// };

// export default InstallPWAButton;
import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import InstallMobileIcon from '@mui/icons-material/InstallMobile';
const InstallPWAButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const beforeInstallPromptHandler = (event) => {
      console.log("✅ PWA Install Prompt is available!");
      event.preventDefault();  // Prevent the default install prompt
      setDeferredPrompt(event); // Save the event to prompt later
      setShowInstallButton(true); // Show the install button
    };

    window.addEventListener('beforeinstallprompt', beforeInstallPromptHandler);

    return () => {
      window.removeEventListener('beforeinstallprompt', beforeInstallPromptHandler);  // Properly clean up
    };
  }, []);

  const installApp = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();  // Trigger the install prompt
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted PWA install');
        } else {
          console.log('User dismissed PWA install');
        }
        setDeferredPrompt(null);
        setShowInstallButton(false);
      });
    }
  };

  return (
    showInstallButton && (
      <Button
        variant="contained"
        // color="primary"
        fullWidth
        style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 1000, backgroundColor: "#4682B4" }}
        onClick={installApp}
        startIcon={<InstallMobileIcon />}
      >
      Instalēt Lietotni
      </Button>
    )
  );
};

export default InstallPWAButton;
