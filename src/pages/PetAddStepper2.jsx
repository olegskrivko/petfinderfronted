
// import React, { useState } from "react";
// import {
//   Box,
//   Button,
//   Step,
//   StepLabel,
//   Stepper,
//   StepContent,
//   TextField,
//   IconButton,
//   Container,
//   Grid,
//   Typography,
// } from "@mui/material";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import PetsIcon from "@mui/icons-material/Pets";
// import ScheduleIcon from "@mui/icons-material/Schedule";
// import ImageIcon from "@mui/icons-material/Image";

// const steps = [
//   { label: "Pet Location", icon: <LocationOnIcon /> },
//   { label: "Pet Characteristics", icon: <PetsIcon /> },
//   { label: "Pet Lost Time", icon: <ScheduleIcon /> },
//   { label: "Pet Images", icon: <ImageIcon /> },
// ];

// export default function PetAddStepper() {
//   const [activeStep, setActiveStep] = useState(0);
//   const [formState, setformState] = useState({
//     location: { city: "", street: "" },
//     characteristics: { type: "", breed: "" },
//     lostTime: { date: "", time: "" },
//     images: { petImage: null },
//   });

//   const handleNext = () => setActiveStep((prevStep) => prevStep + 1);
//   const handleBack = () => setActiveStep((prevStep) => prevStep - 1);

//   const handleChange = (e, stepKey, field) => {
//     setformState((prev) => ({
//       ...prev,
//       [stepKey]: { ...prev[stepKey], [field]: e.target.value },
//     }));
//   };

//   const handleFileUpload = (e) => {
//     setformState((prev) => ({
//       ...prev,
//       images: { petImage: URL.createObjectURL(e.target.files[0]) },
//     }));
//   };

//   const getStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <Box>
//             <TextField
//               fullWidth
//               label="City"
//               variant="outlined"
//               margin="normal"
//               value={formState.location.city}
//               onChange={(e) => handleChange(e, "location", "city")}
//             />
//             <TextField
//               fullWidth
//               label="Street"
//               variant="outlined"
//               margin="normal"
//               value={formState.location.street}
//               onChange={(e) => handleChange(e, "location", "street")}
//             />
//           </Box>
//         );
//       case 1:
//         return (
//           <Box>
//             <TextField
//               fullWidth
//               label="Pet Type"
//               variant="outlined"
//               margin="normal"
//               value={formState.characteristics.type}
//               onChange={(e) => handleChange(e, "characteristics", "type")}
//             />
//             <TextField
//               fullWidth
//               label="Breed"
//               variant="outlined"
//               margin="normal"
//               value={formState.characteristics.breed}
//               onChange={(e) => handleChange(e, "characteristics", "breed")}
//             />
//           </Box>
//         );
//       case 2:
//         return (
//           <Box>
//             <TextField
//               fullWidth
//               label="Lost Date"
//               type="date"
//               InputLabelProps={{ shrink: true }}
//               variant="outlined"
//               margin="normal"
//               value={formState.lostTime.date}
//               onChange={(e) => handleChange(e, "lostTime", "date")}
//             />
//             <TextField
//               fullWidth
//               label="Lost Time"
//               type="time"
//               InputLabelProps={{ shrink: true }}
//               variant="outlined"
//               margin="normal"
//               value={formState.lostTime.time}
//               onChange={(e) => handleChange(e, "lostTime", "time")}
//             />
//           </Box>
//         );
//       case 3:
//         return (
//           <Box>
//             <input accept="image/*" type="file" onChange={handleFileUpload} />
//             {formState.images.petImage && (
//               <Box sx={{ mt: 2, textAlign: "center" }}>
//                 <img src={formState.images.petImage} alt="Preview" width="100%" style={{ borderRadius: 8 }} />
//               </Box>
//             )}
//           </Box>
//         );
//       default:
//         return "Unknown step";
//     }
//   };

//   return (
//      <Container
//                                                               component="main"
//                                                               sx={{
//                                                                 flexGrow: 1,
//                                                                 py: '2rem',
//                                                                 // pb: '2rem',
//                                                                 width: '100%',
//                                                                 overflowX: 'hidden',
//                                                               }}
//                                                    >
//           <Grid item xs={12}>
//             <Typography variant="h4" gutterBottom textAlign="center">
//               Ziņot par mājdzīvnieku
//             </Typography>
    



//     <Box sx={{ width: "100%", maxWidth: "600px", mx: "auto", mt: 4 }}>
//       <Stepper activeStep={activeStep} orientation="vertical">
//         {steps.map((step, index) => (
//           <Step key={index}>
//              <StepLabel
//             icon={
//               <IconButton
//                 sx={{
//                   backgroundColor: "#e0e0e0",
//                   borderRadius: "50%",
//                 //   padding: "10px",
//                 }}
//               >
//                 {step.icon}
//               </IconButton>
//             }
//           >
//             {step.label}
//           </StepLabel>
//             <StepContent>
//               {getStepContent(index)}
//               <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
//                 <Button disabled={activeStep === 0} onClick={handleBack}>
//                   Back
//                 </Button>
//                 <Button variant="contained" onClick={handleNext}>
//                   {activeStep === steps.length - 1 ? "Submit" : "Next"}
//                 </Button>
//               </Box>
//             </StepContent>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>
//     </Grid>
//     </Container>
//   );
// }
import React, { useState } from "react";
import { Stepper, Step,Grid, StepLabel, StepContent,InputLabel, Button, TextField, IconButton, Box, FormControl, Select, MenuItem } from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useAuth } from '../contexts/AuthContext';
import { STATUS_CHOICES, SPECIES_CHOICES, AGE_CHOICES_BY_SPECIES, SIZE_CHOICES, GENDER_CHOICES, BEHAVIOR_CHOICES, AGE_CHOICES, PHONE_CODE_CHOICES, COLOR_CHOICES, PATTERN_CHOICES } from '../constants/petOptions';
import { getCurrentDate, getCurrentTime } from '../utils/formHelpers';

import PetsIcon from "@mui/icons-material/Pets";
import ScheduleIcon from "@mui/icons-material/Schedule";
import ImageIcon from "@mui/icons-material/Image";
import LeafletAddPetMap from '../components/LeafletAddPetMap';
// React MUI Icons
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 

const steps = [
  { label: "Pet Location", icon: <LocationOnIcon /> },
  { label: "Pet Characteristics", icon: <PetsIcon /> },
  { label: "Pet Lost Time", icon: <ScheduleIcon /> },
  { label: "Pet Images", icon: <ImageIcon /> },
];

const PetAddStepper2 = () => {
  const [activeStep, setActiveStep] = useState(0);
    // const [formState, setFormState] = useState({
    //   status: '',
    //   species: '',
    //   location: { lat: 56.946285, lng: 24.105078 },
    //   identifier: '',
    //   size: '',
    //   gender: '',
    //   behavior: '',
    //   age: '',
    //   breed: '',
    //   pattern: "",
    //   primary_color: { hex: "", label: "", value: "" },
    //   secondary_color: { hex: "", label: "", value: "" },
    //   notes: '',
    //   contact_phone: '',
    //   phone_code: '371',
    //   date: getCurrentDate(),
    //   time: getCurrentTime(),
    //   pet_image_1: "",
    //   pet_image_2: "",
    //   pet_image_3: "",
    //   pet_image_4: ""
    // });
    const [formErrors, setFormErrors] = useState({});
    const [formState, setFormState] = useState({
        location: { city: "", street: "" },
        characteristics: { status: "", species: "", breed: "",  identifier: "", size: "", gender: "", behavior: "", age: "", pattern: "" 
        },
        lostTime: { date: getCurrentDate(), time: getCurrentTime() },
        images: { petImage: null },
      });


      const handleNext = () => setActiveStep((prev) => prev + 1);
      const handleBack = () => setActiveStep((prev) => prev - 1);
    
      const handleChange = (section, field, value) => {
        setFormState((prev) => ({
          ...prev,
          [section]: { ...prev[section], [field]: value },
        }));
      };
    
      const handleFileUpload = (e) => {
        setFormState((prev) => ({
          ...prev,
          images: { petImage: URL.createObjectURL(e.target.files[0]) },
        }));
      };

//   const handleFileUpload = (e) => {
//     setformState((prev) => ({
//       ...prev,
//       images: { petImage: URL.createObjectURL(e.target.files[0]) },
//     }));
//   };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Box>
            <Grid container spacing={2} my={2}>
              {/* Status Field */}
               <Grid item xs={12} sm={12} md={12} lg={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="status-label" shrink>
                Status <span style={{ color: 'red' }}>*</span>
              </InputLabel>
              <Select
                required
                labelId="status-label"
                value={formState.characteristics.status}
                onChange={(e) => handleChange('characteristics', 'status', e.target.value)}
                label="Status *"
                notched
              >
                {STATUS_CHOICES.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </Grid>
           {/* Species Field */}
           <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="species-label" shrink>
                Suga <span style={{ color: 'red' }}>*</span>
                </InputLabel>
                <Select
                  required
                  labelId="species-label"
                  value={formState.characteristics.species}
                  onChange={(e) => handleChange('characteristics', 'species', e.target.value)}
                  label="Suga *"
                  notched
                >
                  {SPECIES_CHOICES.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            
            </Grid>
          </Box>
        );
      case 1:
        return (
          <Box>
            <Grid container spacing={2} my={2}>
            {/* Status Field */}
            <Grid item xs={12} sm={12} md={12} lg={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="status-label" shrink>
                Status <span style={{ color: 'red' }}>*</span>
              </InputLabel>
              <Select
                required
                labelId="status-label"
                value={formState.characteristics.status}
                onChange={(e) => handleChange('characteristics', 'status', e.target.value)}
                label="Status *"
                notched
              >
                {STATUS_CHOICES.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            </Grid>
           {/* Species Field */}
           <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="species-label" shrink>
                Suga <span style={{ color: 'red' }}>*</span>
                </InputLabel>
                <Select
                  required
                  labelId="species-label"
                  value={formState.characteristics.species}
                  onChange={(e) => handleChange('characteristics', 'species', e.target.value)}
                  label="Suga *"
                  notched
                >
                  {SPECIES_CHOICES.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>


            </Grid>
          
            <TextField fullWidth label="Breed" variant="outlined" margin="normal" value={formState.characteristics.breed} onChange={(e) => handleChange(e, "characteristics", "breed")} />
            <TextField fullWidth label="Identifier" variant="outlined" margin="normal" value={formState.characteristics.identifier} onChange={(e) => handleChange(e, "characteristics", "identifier")} />
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Status</InputLabel>
              <Select value={formState.characteristics.status} onChange={(e) => handleChange(e, "characteristics", "status")}> 
                <MenuItem value="missing">Missing</MenuItem>
                <MenuItem value="found">Found</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Size</InputLabel>
              <Select value={formState.characteristics.size} onChange={(e) => handleChange(e, "characteristics", "size")}>
                <MenuItem value="small">Small</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="large">Large</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth variant="outlined" margin="normal">
              <InputLabel>Gender</InputLabel>
              <Select value={formState.characteristics.gender} onChange={(e) => handleChange(e, "characteristics", "gender")}>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
              </Select>
            </FormControl>
            <TextField fullWidth label="Behavior" variant="outlined" margin="normal" value={formState.characteristics.behavior} onChange={(e) => handleChange(e, "characteristics", "behavior")} />
            <TextField fullWidth label="Age" variant="outlined" margin="normal" value={formState.characteristics.age} onChange={(e) => handleChange(e, "characteristics", "age")} />
            <TextField fullWidth label="Pattern" variant="outlined" margin="normal" value={formState.characteristics.pattern} onChange={(e) => handleChange(e, "characteristics", "pattern")} />
          </Box>
        );
      case 2:
        return (
          <Box>
          
             <Grid container spacing={2} my={2}>
                        {/* Date Field */}
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                              error={!!formErrors.date}
                              helperText={formErrors.date || ""}
                              id="date"
                              name="date"
                              label={
                                <span>
                                  Datums <span style={{ color: 'red' }}>*</span>
                                </span>
                              }
                              type="date"
                              fullWidth
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="outlined"
                              value={formState.lostTime.date}
                              onChange={(e) => handleChange("lostTime", "date", e.target.value)}

                            />
                        </Grid>
                        
                        {/* Time Field */}
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <TextField
                         
                              id="time"
                              name="time"
                              label={
                                <span>
                                  Laiks <span style={{ color: 'red' }}>*</span>
                                </span>
                              }
                              type="time"
                              fullWidth
                              InputLabelProps={{
                                shrink: true,
                              }}
                              variant="outlined"
                              value={formState.lostTime.time}
                              onChange={(e) => handleChange("lostTime", "time", e.target.value)}
                          
                            />
                        </Grid>
          
          </Grid>
          </Box>
        );
      case 3:
        return (
          <Box>
            <input accept="image/*" type="file" onChange={handleFileUpload} />
            {formState.images.petImage && (
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <img src={formState.images.petImage} alt="Preview" width="100%" style={{ borderRadius: 8 }} />
              </Box>
            )}
          </Box>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box sx={{ width: "100%", maxWidth: "600px", mx: "auto", mt: 4 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel icon={<IconButton sx={{ backgroundColor: "#e0e0e0", borderRadius: "50%", padding: "10px" }}>{step.icon}</IconButton>}>
              {step.label}
            </StepLabel>
            <StepContent>
              {getStepContent(index)}
              <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
                <Button disabled={activeStep === 0} onClick={handleBack}>Back</Button>
                <Button variant="contained" onClick={handleNext}>{activeStep === steps.length - 1 ? "Submit" : "Next"}</Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default PetAddStepper2;
