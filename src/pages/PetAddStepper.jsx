// import React, { useState, useEffect } from 'react';
// import { Stepper, Step,Grid, Container, StepLabel, StepContent,InputLabel, Button, TextField, IconButton, Box, FormControl, Select, MenuItem } from "@mui/material";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { useAuth } from '../contexts/AuthContext';
// import { STATUS_CHOICES, SPECIES_CHOICES, AGE_CHOICES_BY_SPECIES, SIZE_CHOICES, GENDER_CHOICES, BEHAVIOR_CHOICES, AGE_CHOICES, PHONE_CODE_CHOICES, COLOR_CHOICES, PATTERN_CHOICES } from '../constants/petOptions';


// import PetsIcon from "@mui/icons-material/Pets";
// import ScheduleIcon from "@mui/icons-material/Schedule";
// import ImageIcon from "@mui/icons-material/Image";
// import LeafletAddPetMap from '../components/LeafletAddPetMap';
// // React MUI Icons
// import CloseIcon from '@mui/icons-material/Close';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';


// import StepLocation from "./StepLocation";
// import StepCharacteristics from "./StepCharacteristics";
// import StepLostTime from "./StepLostTime";
// import StepImages from "./StepImages";

// import { getCurrentDate, getCurrentTime } from '../utils/formHelpers';
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 

// const steps = [
//     { label: "Pet Location", icon: <LocationOnIcon /> },
//     { label: "Pet Characteristics", icon: <PetsIcon /> },
//     { label: "Pet Lost Time", icon: <ScheduleIcon /> },
//     { label: "Pet Images", icon: <ImageIcon /> },
//   ];

// const PetAddStepper = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [formErrors, setFormErrors] = useState({});
// const [formState, setFormState] = useState({
//         location: { lat: 56.946285, lng: 24.105078 },
//           characteristics: { status: "", species: "", breed: "", primary_color: { hex: "", label: "", value: "" }, secondary_color: { hex: "", label: "", value: "" },  identifier: "", size: "", gender: "", behavior: "", age: "", pattern: "", phone_code: "371", contact_phone: "", notes: "" 
//           },
//           lostTime: { date: getCurrentDate(), time: getCurrentTime() },
//           images: { petImage: null },
//         });
  
  
//         const handleNext = () => setActiveStep((prev) => prev + 1);
//         const handleBack = () => setActiveStep((prev) => prev - 1);
      
//         const handleChange = (section, field, value) => {
//           setFormState((prev) => ({
//             ...prev,
//             [section]: { ...prev[section], [field]: value },
//           }));
//         };
      
//         const handleFileUpload = (e) => {
//           setFormState((prev) => ({
//             ...prev,
//             images: { petImage: URL.createObjectURL(e.target.files[0]) },
//           }));
//         };

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return <StepLocation formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//       case 1:
//         return <StepCharacteristics formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//       case 2:
//         return <StepLostTime formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//       case 3:
//         return <StepImages formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//       default:
//         return null;
//     }
//   };

//   return (
    
//               <Container
//                                                                   component="main"
//                                                                   sx={{
//                                                                     flexGrow: 1,
//                                                                     py: '2rem',
//                                                                     // pb: '2rem',
//                                                                     width: '100%',
//                                                                     overflowX: 'hidden',
//                                                                   }}
//                                                        >
//         <Box sx={{ width: "100%", maxWidth: "600px", mx: "auto", mt: 4 }}>
//           <Stepper activeStep={activeStep} orientation="vertical">
//             {steps.map((step, index) => (
//               <Step key={index}>
//                 <StepLabel icon={<IconButton sx={{ backgroundColor: "#e0e0e0", borderRadius: "50%", padding: "10px" }}>{step.icon}</IconButton>}>
//                   {step.label}
//                 </StepLabel>
//                 <StepContent>
//                   {getStepContent(index)}
//                   <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
//                     <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
//                     <Button variant="contained" onClick={handleNext}>{activeStep === steps.length - 1 ? "Submit" : "Next"}</Button>
//                   </Box>
//                 </StepContent>
//               </Step>
//             ))}
//           </Stepper>
//         </Box>
//         </Container>
//   );
// };

// export default PetAddStepper;
// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   Typography,
// } from '@mui/material';
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import CloseIcon from '@mui/icons-material/Close';
// import StepLocation from "./StepLocation";
// import StepCharacteristics from "./StepCharacteristics";
// import StepLostTime from "./StepLostTime";
// import StepImages from "./StepImages";
// import StepContact from "./StepContact";
// import StepAppearance from "./StepAppearance";

// import { getCurrentDate, getCurrentTime } from '../utils/formHelpers';

// const steps = [
//     "Pet Characteristics",
//     "Pet Location",
//     "Pet Images",
//     "Pet Appearance",
//     "Pet Contact"
// ];

// const PetAddStepper = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [formErrors, setFormErrors] = useState({});
//   const [formState, setFormState] = useState({
//     location: { lat: 56.946285, lng: 24.105078, date: getCurrentDate(), time: getCurrentTime()  },
//     characteristics: {
//       status: "", species: "", breed: "",
//     //   primary_color: { hex: "", label: "", value: "" },
//     //   secondary_color: { hex: "", label: "", value: "" },
//       identifier: "", 
//     //   size: "", 
//       gender: "",
//       age: "", 
//     //   pattern: ""
     
//     },
//     // lostTime: { date: getCurrentDate(), time: getCurrentTime() },
//     images: { petImage: null },
//     appearance: {
//         primary_color: { hex: "", label: "", value: "" },
//         secondary_color: { hex: "", label: "", value: "" },
//         size: "",
//         age: "",
//         pattern: "",
//       },
//     contact: { contact_phone: "", phone_code: "371",  notes: "" },
//   });

//   const handleNext = () => {
//     if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
//     else console.log("Submit form here");
//   };

//   const handleBack = () => {
//     if (activeStep > 0) setActiveStep((prev) => prev - 1);
//   };

// //   const handleChange = (section, field, value) => {
// //     setFormState((prev) => ({
// //       ...prev,
// //       [section]: { ...prev[section], [field]: value },
// //     }));
// //   };

// const handleChange = (section, field, value) => {
//     if (typeof field === 'object') {
//       return setFormState((prev) => ({
//         ...prev,
//         [section]: { ...prev[section], ...field },
//       }));
//     }
  
//     setFormState((prev) => ({
//       ...prev,
//       [section]: { ...prev[section], [field]: value },
//     }));
//   };
  

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return <StepCharacteristics formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//     case 1:
//         return <StepLocation formState={formState} formErrors={formErrors}  handleChange={handleChange} />;
//       case 2:
//         return <StepImages formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//       case 3:
//         return <StepAppearance formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//     case 4:
//             return <StepContact formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//       default:
//         return null;
//     }
//   };

//   const progress = ((activeStep + 1) / steps.length) * 100;

//   return (
//                  <Container
//                                                               component="main"
                                                        
//                                                               sx={{
//                                                                 flexGrow: 1,
//                                                                 py: '2rem',
//                                                                 // pb: '2rem',
//                                                                 width: '100%',
//                                                                 overflowX: 'hidden',
//                                                               }}
//                                                    >
//     <Container maxWidth="md" sx={{ py: 4 }}>
//       {/* Donut progress + step name */}
//       <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
//         <Box sx={{ width: 70, height: 70, mr: 2 }}>
//           <CircularProgressbar
//             value={progress}
//             text={`${activeStep + 1}/${steps.length}`}
//             styles={buildStyles({
//               textSize: "18px",
//               pathColor: "#1976d2",
//               textColor: "#333",
//               trailColor: "#ddd",
//             })}
//           />
//         </Box>
//         <Typography variant="h6">{steps[activeStep]}</Typography>
//       </Box>

//       {/* Current Step Content */}
//       <Box>{getStepContent(activeStep)}</Box>

//       {/* Navigation Buttons */}
//       <Box sx={{ mt: 4, display: "flex", justifyContent: "space-between" }}>
//         <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack}>
//           Back
//         </Button>
//         <Button variant="contained" onClick={handleNext}>
//           {activeStep === steps.length - 1 ? "Submit" : "Next"}
//         </Button>
//       </Box>
//     </Container>
//     </Container>
//   );
// };

// export default PetAddStepper;
// import React, { useState } from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   Typography,
// } from '@mui/material';
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import CloseIcon from '@mui/icons-material/Close';
// import StepLocation from "./StepLocation";
// import StepCharacteristics from "./StepCharacteristics";
// import StepLostTime from "./StepLostTime";
// import StepImages from "./StepImages";
// import StepContact from "./StepContact";
// import StepAppearance from "./StepAppearance";

// import { getCurrentDate, getCurrentTime } from '../utils/formHelpers';

// const steps = [
//   "Pet Characteristics",
//   "Pet Location",
//   "Pet Images",
//   "Pet Appearance",
//   "Pet Contact"
// ];

// const PetAddStepper = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [formErrors, setFormErrors] = useState({});
//   const [formState, setFormState] = useState({
//     location: { lat: 56.946285, lng: 24.105078, date: getCurrentDate(), time: getCurrentTime()  },
//     characteristics: {
//       status: "", species: "", breed: "",
//       identifier: "", 
//       gender: "",
//       age: "",
//     },
//     images: { petImage: null },
//     appearance: {
//       primary_color: { hex: "", label: "", value: "" },
//       secondary_color: { hex: "", label: "", value: "" },
//       size: "",
//       age: "",
//       pattern: "",
//     },
//     contact: { contact_phone: "", phone_code: "371",  notes: "" },
//   });

//   const handleNext = () => {
//     if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
//     else console.log("Submit form here");
//   };

//   const handleBack = () => {
//     if (activeStep > 0) setActiveStep((prev) => prev - 1);
//   };

//   const handleChange = (section, field, value) => {
//     if (typeof field === 'object') {
//       return setFormState((prev) => ({
//         ...prev,
//         [section]: { ...prev[section], ...field },
//       }));
//     }

//     setFormState((prev) => ({
//       ...prev,
//       [section]: { ...prev[section], [field]: value },
//     }));
//   };

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return <StepCharacteristics formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//       case 1:
//         return <StepLocation formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//       case 2:
//         return <StepImages formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//       case 3:
//         return <StepAppearance formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//       case 4:
//         return <StepContact formState={formState} formErrors={formErrors} handleChange={handleChange} />;
//       default:
//         return null;
//     }
//   };

//   const progress = ((activeStep + 1) / steps.length) * 100;

//   return (
//     <Container
//       component="main"
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         minHeight: '100vh', // Ensure it takes the full height
//         py: '2rem',
//         overflowX: 'hidden',
//       }}
//     >
//       <Container maxWidth="md" sx={{ py: 4, flexGrow: 1 }}>
//         {/* Donut progress + step name */}
//         <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
//           <Box sx={{ width: 70, height: 70, mr: 2 }}>
//             <CircularProgressbar
//               value={progress}
//               text={`${activeStep + 1}/${steps.length}`}
//               styles={buildStyles({
//                 textSize: "18px",
//                 pathColor: "#1976d2",
//                 textColor: "#333",
//                 trailColor: "#ddd",
//               })}
//             />
//           </Box>
//           <Typography variant="h6">{steps[activeStep]}</Typography>
//         </Box>

//         {/* Current Step Content */}
//         <Box sx={{ mb: 4 }}>
//           {getStepContent(activeStep)}
//         </Box>
//       </Container>

//       {/* Navigation Buttons */}
//       <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, p: 2 }}>
//         <Button variant="outlined" disabled={activeStep === 0} onClick={handleBack}>
//           Back
//         </Button>
//         <Button variant="contained" onClick={handleNext}>
//           {activeStep === steps.length - 1 ? "Submit" : "Next"}
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default PetAddStepper;
import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CloseIcon from '@mui/icons-material/Close';
import StepLocation from "./StepLocation";
import StepCharacteristics from "./StepCharacteristics";
import StepLostTime from "./StepLostTime";
import StepImages from "./StepImages";
import StepContact from "./StepContact";
import StepAppearance from "./StepAppearance";

import { getCurrentDate, getCurrentTime } from '../utils/formHelpers';

const steps = [
  "Pet Characteristics",
  "Pet Location",
  "Pet Images",
  "Pet Appearance",
  "Pet Contact"
];

const PetAddStepper = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [formState, setFormState] = useState({
    location: { lat: 56.946285, lng: 24.105078, date: getCurrentDate(), time: getCurrentTime()  },
    characteristics: {
      status: "", species: "", breed: "",
      identifier: "", 
      gender: "",
      age: "",
    },
    images: { petImage: null },
    appearance: {
      primary_color: { hex: "", label: "", value: "" },
      secondary_color: { hex: "", label: "", value: "" },
      size: "",
      age: "",
      pattern: "",
    },
    contact: { contact_phone: "", phone_code: "371",  notes: "" },
  });

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
    else console.log("Submit form here");
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const handleChange = (section, field, value) => {
    if (typeof field === 'object') {
      return setFormState((prev) => ({
        ...prev,
        [section]: { ...prev[section], ...field },
      }));
    }

    setFormState((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <StepCharacteristics formState={formState} formErrors={formErrors} handleChange={handleChange} />;
      case 1:
        return <StepLocation formState={formState} formErrors={formErrors} handleChange={handleChange} />;
      case 2:
        return <StepImages formState={formState} formErrors={formErrors} handleChange={handleChange} />;
      case 3:
        return <StepAppearance formState={formState} formErrors={formErrors} handleChange={handleChange} />;
      case 4:
        return <StepContact formState={formState} formErrors={formErrors} handleChange={handleChange} />;
      default:
        return null;
    }
  };

  const progress = ((activeStep + 1) / steps.length) * 100;

  return (
    <Container
      component="main"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Ensure it takes the full height
        py: '2rem',
        overflowX: 'hidden',
      }}
    >
      <Container maxWidth="md" sx={{ py: 4, flexGrow: 1 }}>
        {/* Donut progress + step name */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <Box sx={{ width: 70, height: 70, mr: 2 }}>
            <CircularProgressbar
              value={progress}
              text={`${activeStep + 1}/${steps.length}`}
              styles={buildStyles({
                textSize: "18px",
                pathColor: "#1976d2",
                textColor: "#333",
                trailColor: "#ddd",
              })}
            />
          </Box>
          <Typography variant="h6">{steps[activeStep]}</Typography>
        </Box>

        {/* Current Step Content */}
        <Box sx={{ mb: 4 }}>
          {getStepContent(activeStep)}
        </Box>
      </Container>

      {/* Navigation Buttons (Inside Container) */}
      <Container maxWidth="md" sx={{ display: 'flex', justifyContent: 'space-between', mb: 4, px: 2 }}>
        <Button
          variant="outlined"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ flex: 1, mr: 1 }}
        >
          Back
        </Button>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{ flex: 1, ml: 1 }}
        >
          {activeStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </Container>
    </Container>
  );
};

export default PetAddStepper;
