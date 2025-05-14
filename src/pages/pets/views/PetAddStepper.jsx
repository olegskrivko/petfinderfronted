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
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CloseIcon from '@mui/icons-material/Close';
import StepLocation from "../components/StepLocation";
import StepCharacteristics from "../components/StepCharacteristics";
import StepLostTime from "../components/StepLostTime";
import StepImages from "../components/StepImages";
import StepContact from "../components/StepContact";
import StepAppearance from "../components/StepAppearance";

import { getCurrentDate, getCurrentTime } from '../../../utils/formHelpers';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
const steps = [
"Dzīvnieka raksturojums",
  "Atrašanās vieta",
  "Attēli",
  "Izskats",
  "Kontakta informācija",

];

const PetAddStepper = () => {
  const navigate = useNavigate();
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
    images: {    
      pet_image_1: "",
      pet_image_2: "",
      pet_image_3: "",
      pet_image_4: "" },
    appearance: {
      primary_color: { hex: "", label: "", value: "" },
      secondary_color: { hex: "", label: "", value: "" },
      size: "",
      age: "",
      pattern: "",
    },
    contact: { contact_phone: "", phone_code: "371",  notes: "" },
  });

    const [extraImagesPreview, setExtraImagesPreview] = useState({
      pet_image_1: "",
      pet_image_2: "",
      pet_image_3: "",
      pet_image_4: "",
    });
    const [imageErrors, setImageErrors] = useState({
      pet_image_1: "",
      pet_image_2: "",
      pet_image_3: "",
      pet_image_4: "",
    });

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
    else {
      console.log("Submit form here")
      handleSubmit();

    };
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

  const handleSubmit = async (event) => {
    event?.preventDefault(); // make it optional for programmatic calls

    console.log('🚀 Submitting form:', formState);

    try {
      const accessToken = localStorage.getItem('access_token');
      const formData = new FormData();

      const latitude = parseFloat(formState.location.lat).toFixed(6);
      const longitude = parseFloat(formState.location.lng).toFixed(6);

      if (isNaN(latitude) || isNaN(longitude)) {
        console.error("❌ Invalid latitude or longitude");
        return;
      }

      // Append form fields
      formData.append('status', formState.characteristics.status);
      formData.append('species', formState.characteristics.species);
      formData.append('identifier', formState.characteristics.identifier);
      formData.append('size', formState.appearance.size);
      formData.append('gender', formState.characteristics.gender);
      formData.append('age', formState.characteristics.age);
      formData.append('breed', formState.characteristics.breed);

      formData.append('date', formState.location.date);
      formData.append('time', formState.location.time);

      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
      formData.append('pattern', formState.appearance.pattern);
      formData.append('primary_color', formState.appearance.primary_color.value);
      formData.append('secondary_color', formState.appearance.secondary_color.value);
      formData.append('notes', formState.contact.notes);
      formData.append('phone_code', formState.contact.phone_code);
      formData.append('contact_phone', formState.contact.contact_phone);

      // Append image if exists
              // Append images
              ['pet_image_1', 'pet_image_2', 'pet_image_3', 'pet_image_4'].forEach((field) => {
                if (formState.images[field]) {
                  formData.append(`${field}_media`, formState.images[field]);
                }
              });
  

      // Optionally, if you have a user context:
      const userId = localStorage.getItem('user_id'); // or from context
      if (userId) {
        formData.append('author', userId);
      }

      console.log('📦 FormData to send:', Object.fromEntries(formData.entries()));

      const response = await axios.post(`${API_BASE_URL}/pets/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log('✅ Pet successfully added!', response.data);
      navigate(`/pets/${response.data.id}`);
    } catch (error) {
      console.error('❌ Error sending pet data:', error.response?.data || error.message);
    }
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
    
     <Container component="main" maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>
        {/* <Typography variant="h3" align="center" sx={{ mb: 5, fontWeight: 500 }}>
        Ziņot par mājdzīvnieku
        </Typography> */}
    {/* Top section: Progress and Step Title */}
    <Box sx={{ display: 'flex', alignItems: 'center',  }}>
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
      <Box>
      <Typography variant="h6">{steps[activeStep]}</Typography>
       {/* Subtitle: Next Step */}
    {activeStep < steps.length - 1 && (
      <Typography variant="body2" sx={{ mt: 1, color: 'gray' }}>
        Nākamais solis: {steps[activeStep + 1]} {/* Next step name as subtitle */}
      </Typography>
      
    )}
    </Box>
    </Box>

    {/* Middle section: Step Content (this should take available space) */}
    <Box sx={{ flexGrow: 1, mb: 3 }}>
      {getStepContent(activeStep)}
    </Box>

    {/* Bottom section: Sticky Buttons */}
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        px: 2,
        pt: 2,
        padding: "0 !important" 
        // borderTop: '1px solid #eee',
      }}
    >
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
    </Box>
  </Container>
  );
};

export default PetAddStepper;
