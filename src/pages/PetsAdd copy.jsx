// import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Stack from '@mui/material/Stack';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import Typography from '@mui/material/Typography';
// import FormGroup from '@mui/material/FormGroup';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import RadioGroup from '@mui/material/RadioGroup';
// import Radio from '@mui/material/Radio';
// import FormLabel from '@mui/material/FormLabel';
// import Checkbox from '@mui/material/Checkbox';
// import LeafletAddPetMap from '../components/LeafletAddPetMap';
// import FormControlLabel from '@mui/material/FormControlLabel';
// // React MUI Icons
// import CloseIcon from '@mui/icons-material/Close';

// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { useAuth } from '../contexts/AuthContext';


// function PetsAdd() {

//   const { user } = useAuth(); 

//   const getCurrentDate = () => {
//     // Returns date in YYYY-MM-DD format
//     const now = new Date();
//     return now.toISOString().slice(0, 10); 
//   };

//   const getCurrentTime = () => {
//     // Returns time in HH:MM format
//     const now = new Date();
//     return now.toTimeString().slice(0, 5); 
//   };

//   const [formState, setFormState] = useState({
//     status: '',
//     location: { lat: null, lng: null },
//     species: '',
//     identifier: '',
//     size: '',
//     gender: '',
//     behavior: '',
//     age: '',
//     breed: '',
//     pattern: '',
//     primary_color: { hex: null, label: null },
//     secondary_color: { hex: null, label: null },
//     notes: '',
//     contact_phone: '',
//     phone_code: '',
//     date: getCurrentDate(),
//     time: getCurrentTime(),
//     extra_image_1: null,
//     extra_image_2: null,
//     extra_image_3: null,
//     extra_image_4: null,
//     updatedStatus: '',
//     isPublic: true,
//     isImageBlurred: false,
//     isClosed: false,
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [mainColorDialogOpen, setMainColorDialogOpen] = useState(false);
//   const [markingColorDialogOpen, setMarkingColorDialogOpen] = useState(false);
//   const [imagePreview, setImagePreview] = useState(null);
  
// const STATUS_CHOICES = [
//   { value: 1, label: "Pazudis" },
//   { value: 2, label: "Atrasts" },
//   { value: 3, label: "Redzēts" },
// ];

// const SPECIES_CHOICES = [
//   { value: 1, label: "Suns" },
//   { value: 2, label: "Kaķis" },
//   { value: 3, label: "Cits" },
// ]

// const SIZE_CHOICES = [
//   { value: '', label: "-" },
//   { value: 1, label: "Mazs" },
//   { value: 2, label: "Vidējs" },
//   { value: 3, label: "Liels" },
// ]

// const GENDER_CHOICES = [
//   { value: '', label: "-" },
//   { value: 1, label: "Tēviņš" },
//   { value: 2, label: "Mātīte" }
// ]

// const BEHAVIOR_CHOICES = [
//   { value: '', label: "-" },
//   { value: 1, label: "Draudzīgs" },
//   { value: 2, label: "Agresīvs" },
//   { value: 3, label: "Mierīgs" },
//   { value: 4, label: "Bailīgs" },
//   { value: 5, label: "Paklausīgs" }
// ]

// const AGE_CHOICES = [
//   { value: '', label: "-" },
//   { value: 1, label: "Mazulis" },
//   { value: 2, label: "Pieaugušais" },
//   { value: 3, label: "Seniors" }
// ]

// const PHONE_CODE_CHOICES = [
//   { value: '', label: "-" },
//   { value: '+371', label: "LV (+371)" },
//   { value: '+370', label: "LT (+370)" },
//   { value: '+372', label: "EE (+372)" }
// ]

// const COLOR_CHOICES = [
//   { value: 1, hex: "#000000", label: "Melns" },
//   { value: 2, hex: "#BEBEBE", label: "Pelēks" },
//   { value: 3, hex: "#f7f7f7", label: "Balts" },
//   { value: 4, hex: "#FFF1B9", label: "Krēmīgs" },
//   { value: 5, hex: "#FCDC5C", label: "Dzeltens" },
//   { value: 6, hex: "#FFA500", label: "Zeltains" },
//   { value: 7, hex: "#C37C4D", label: "Brūns" },
//   { value: 8, hex: "#A71A20", label: "Sarkans" },
//   { value: 9, hex: "#BA97AA", label: "Lillīgs" },
//   { value: 10, hex: "#1A355E", label: "Zils" },
//   { value: 11, hex: "#5F6F52", label: "Zaļš" },
//   { value: 12, hex: "#BDB76B", label: "Haki" },
//   { value: 13, hex: "#E5DECA", label: "Bēšīgs" },
//   { value: 14, hex: "#D2B48C", label: "Dzeltenbrūns" },
//   { value: 15, hex: "#954535", label: "Kaštanbrūns" },
// ]

// const PATTERN_CHOICES = [
//   { value: 1, label: "Vienkrāsains" },
//   { value: 2, label: "Strīpains" },
//   { value: 3, label: "Punktveida" },
//   { value: 4, label: "Plankumains" },
//   { value: 5, label: "Raibs" },
// ]


//   const [updatedStatusOptions, setUpdatedStatusOptions] = useState([]);


//   const handleChange = (field, value) => {
//     setFormState((prevState) => ({
//       ...prevState,
//       [field]: value,
//     }));

//     // Clear the error message for the field
//     setFormErrors((prevErrors) => ({
//       ...prevErrors,
//       [field]: '', // Clear the error message for the field
//     }));
//   };

  // // const handleMainColorChange = (colorName) => {
  // //   handleChange('mainColor', colorName);
  // //   setMainColorDialogOpen(false);
  // // };
  // const handleMainColorChange = (color) => {
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     mainColor: color, // Update with both hex and label
  //   }));
  //   setMainColorDialogOpen(false);
  // };

  // const handleLocationChange = (coords) => {
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     location: {
  //       lat: coords.lat,
  //       lng: coords.lng,
  //     },
  //   }));
  // };

//   const handleMarkingPatternChange = (event) => {
//     const value = event.target.value;
//     handleChange('markingPattern', value);
//   };



//   // Handler for changing marking colors
//   const handleMarkingColorChange = (color) => {
//     const currentMarkingColors = [...formState.markingColors];
//     const colorExists = currentMarkingColors.some((c) => c.hex === color.hex);

//     if (colorExists) {
//       // Remove color if it already exists
//       handleChange(
//         'markingColors',
//         currentMarkingColors.filter((c) => c.hex !== color.hex),
//       );
//     } else {
//       // Add color if it doesn't exist, but limit to 3 colors
//       if (currentMarkingColors.length < 2) {
//         handleChange('markingColors', [...currentMarkingColors, color]);
//       }
//     }
//   };

//   // const handleImageUpload = (file) => {
//   //   handleChange('image', file);
//   // };

//   // Utility function to resize image
//   // Utility function to resize and crop image
//   const resizeAndCropImage = (file, callback) => {
//     const reader = new FileReader();
//     reader.onload = function (event) {
//       const img = new Image();
//       img.onload = function () {
//         const canvas = document.createElement('canvas');
//         const ctx = canvas.getContext('2d');

//         // Set target dimensions for the canvas
//         const targetAspectRatio = 4 / 3;
//         const targetWidth = 800;
//         const targetHeight = targetWidth / targetAspectRatio;

//         // Calculate the source dimensions
//         let srcX = 0,
//           srcY = 0,
//           srcWidth = img.width,
//           srcHeight = img.height;

//         if (img.width / img.height > targetAspectRatio) {
//           // Source is wider than target aspect ratio
//           srcWidth = img.height * targetAspectRatio;
//           srcX = (img.width - srcWidth) / 2;
//         } else {
//           // Source is taller than target aspect ratio
//           srcHeight = img.width / targetAspectRatio;
//           srcY = (img.height - srcHeight) / 2;
//         }

//         // Set canvas dimensions
//         canvas.width = targetWidth;
//         canvas.height = targetHeight;

//         // Draw image on canvas with cropping
//         ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);

//         // Convert canvas to Blob
//         canvas.toBlob(
//           (blob) => {
//             callback(blob);
//           },
//           'image/jpeg',
//           0.7,
//         ); // Adjust quality as needed
//       };
//       img.src = event.target.result;
//     };
//     reader.readAsDataURL(file);
//   };

//   // Handler for image upload
//   // const handleImageUpload = (file) => {
//   //   setFormState((prevState) => ({
//   //     ...prevState,
//   //     image: file,
//   //   }));

//   //   // Create a URL for the image and set it as preview
//   //   const previewUrl = URL.createObjectURL(file);
//   //   setImagePreview(previewUrl);
//   // };
//   const handleImageUpload = (file) => {
//     resizeAndCropImage(file, (resizedImage) => {
//       setFormState((prevState) => ({
//         ...prevState,
//         image: resizedImage,
//       }));
//       const previewUrl = URL.createObjectURL(resizedImage);
//       setImagePreview(previewUrl);
//     });
//   };

//   // Cleanup image URL when component unmounts
//   useEffect(() => {
//     return () => {
//       if (imagePreview) {
//         URL.revokeObjectURL(imagePreview);
//       }
//     };
//   }, [imagePreview]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // const token = localStorage.getItem('token');
//       const accessToken = localStorage.getItem('access_token');

//       // Create FormData object to send the form data and the file
//       const formData = new FormData();
//       Object.keys(formState).forEach((key) => {
//         if (key === 'image' && formState[key]) {
//           formData.append(key, formState[key]); // Append the image file
//         } else if (key === 'location') {
//           formData.append('location[lat]', formState.location.lat);
//           formData.append('location[lng]', formState.location.lng);
//         formData.append('author', user.userId);
//         } else if (key === 'mainColor' && formState[key]) {
//           formData.append(`${key}[hex]`, formState[key].hex);
//           formData.append(`${key}[label]`, formState[key].label);
//         } else if (Array.isArray(formState[key])) {
//           formState[key].forEach((item, index) => {
//             if (typeof item === 'object' && item !== null) {
//               Object.keys(item).forEach((nestedKey) => {
//                 formData.append(`${key}[${index}][${nestedKey}]`, item[nestedKey]);
//               });
//             } else {
//               formData.append(`${key}[]`, item);
//             }
//           });
//         } else {
//           formData.append(key, formState[key]);
//         }
//       });

//       // Append user ID to the form data if needed
//       //  console.log('User:', user.id); // Log user object (for debugging
//       // formData.append('author', user.id);
//       const objectFromFormData = {};
//       formData.forEach((value, key) => {
//         objectFromFormData[key] = value;
//       });
//       console.log('aaaa', objectFromFormData.image);

//       console.log('FormData:', formData); // Log FormData before making the request
//       console.log(JSON.stringify(objectFromFormData));

//       // const response = await axios.post(`https://petfinderbackend-production.up.railway.app/api/pets/`, formData, {
//       //   headers: {
//       //     'Content-Type': 'multipart/form-data',
//       //     Authorization: `Bearer ${accessToken}`,
//       //   },
//       // });
//       console.log("formData", formData)
//       console.log('Pet details sent successfully to the backend.'); // Log success message
//     } catch (error) {
//       console.error('Error response from the backend:', error.response); // Log error response
//       if (
//         error.response &&
//         error.response.data &&
//         error.response.data.errors &&
//         Array.isArray(error.response.data.errors)
//       ) {
//         const receivedErrors = error.response.data.errors;
//         const newFormErrors = {};
//         receivedErrors.forEach((error) => {
//           newFormErrors[error.path] = error.msg;
//         });
//         setFormErrors(newFormErrors);
//         console.log('Form errors:', formErrors);
//       } else {
//         console.error('Failed to send pet details to the backend:', error);
//       }
//     }
//   };

//   // Handle removal of the selected option
//   //  const handleSizeRemove = () => {
//   //   setFormState({
//   //     ...formState,
//   //     size: '', // Reset the size value
//   //   });
//   // };

//   const handleClearSelect = (field) => {
//     setFormState((prevState) => ({
//       ...prevState,
//       [field]: '', // Reset the specified field
//     }));
//   };


//   // Function to get error message for a specific field
//   const getErrorMessage = (field) => {
//     return formErrors[field] ? formErrors[field].msg : '';
//   };

//   return (
//     <React.Fragment>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Typography variant="h4" gutterBottom textAlign="center">
//           Ziņot par mājdzīvnieku
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <Typography
//                   variant="body1"
//                   style={{ fontWeight: '500' }}
//                   gutterBottom
//                   textAlign="left"
//                 >
//                   Mājdzīvnieka raksturojums
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="status-label" shrink>
//                   Statuss
//                   </InputLabel>
//                   <Select
//                     labelId="status-label"
//                     id="status"
//                     value={formState.status}
//                     onChange={(e) => handleChange('status', e.target.value)}
//                     error={Boolean(formErrors.status)}
//                     label="Statuss"
//                     notched
//                   >
//                  {STATUS_CHOICES.map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                 </MenuItem>
//                     ))}
//                   </Select>
        
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="species-label" shrink>
//                   Suga
//                   </InputLabel>
//                   <Select
//                     labelId="species-label"
//                     id="species"
//                     value={formState.species}
//                     label="species"
//                     error={Boolean(formErrors.species)}
//                     notched
//                     onChange={(e) => {
//                       handleChange('species', e.target.value);
//                       handleChange('age', '');
//                       // handleChange('breed', '');
//                     }}
//                   >
//                     {SPECIES_CHOICES.map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))}
//                     {/* <MenuItem value="">None</MenuItem>
//                     {categoryOptions.map((category) => (
//                       <MenuItem key={category._id} value={category.value}>
//                         {category.translations[selectedLanguage]}
//                       </MenuItem>
//                     ))} */}
//                     {/* {t('selectOptions.categoryOptions', { returnObjects: true }).map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))} */}
//                   </Select>

//                   {formErrors.species && (
//                     <Typography variant="body2" color="error">
//                       {formErrors.species}
//                     </Typography>
//                   )}
//                 </FormControl>
//               </Grid>

              // <Grid item xs={12} sm={12} md={6} lg={6}>
              //   <TextField
              //     id="identifier"
              //     name="identifier"
              //     label="ID"
              //     fullWidth
              //     InputLabelProps={{
              //       shrink: true,
              //     }}
              //     variant="outlined"
              //     value={formState.identifier}
              //     placeholder="identifier"
              //     onChange={(e) => handleChange('identifier', e.target.value)}
              //   />
              // </Grid>

              // <Grid item xs={12} sm={12} md={6} lg={6}>
              //   <FormControl fullWidth variant="outlined">
              //     <InputLabel id="size-label" shrink>
              //     Izmērs
              //     </InputLabel>

              //     <Select
              //       labelId="size-label"
              //       id="size"
              //       value={formState.size}
              //       label="Izmērs"
              //       notched
              //       onChange={(e) => handleChange('size', e.target.value)}
              //       error={Boolean(formErrors.size)}
              //       fullWidth
              //     >
              //       {SIZE_CHOICES.map((option) => (
              //         <MenuItem key={option.value} value={option.value}>
              //           {option.label}
              //         </MenuItem>
              //       ))}
              //     </Select>
              //     {formState.size && (
              //       <IconButton
              //         size="small"
              //         onClick={() => handleClearSelect('size')} // Pass the field name here
              //         sx={{
              //           position: 'absolute',
              //           right: 8, // Adjust as needed
              //           top: '50%',
              //           transform: 'translateY(-50%)',
              //           zIndex: 1, // Ensure it is on top of the select
              //           backgroundColor: '#f5f5f5', // Light gray background
              //           '&:hover': {
              //             backgroundColor: '#e0e0e0', // Slightly darker on hover
              //           },
              //           borderRadius: '50%', // Round button
              //           boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
              //         }}
              //       >
              //         <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
              //       </IconButton>
              //     )}
              //   </FormControl>
              // </Grid>
              // <Grid item xs={12} sm={12} md={6} lg={6}>
              //   <FormControl fullWidth variant="outlined">
              //     <InputLabel id="gender-label" shrink>
              //     Dzimums
              //     </InputLabel>
              //     <Select
              //       labelId="gender-label"
              //       id="gender"
              //       value={formState.gender}
              //       label="Dzimums"
              //       notched
              //       onChange={(e) => handleChange('gender', e.target.value)}
              //     >
              //       {GENDER_CHOICES.map((option) => (
              //         <MenuItem key={option.value} value={option.value}>
              //           {option.label}
              //         </MenuItem>
              //       ))}
              //     </Select>
              //     {formState.gender && (
              //       <IconButton
              //         size="small"
              //         onClick={() => handleClearSelect('gender')} // Pass the field name here
              //         sx={{
              //           position: 'absolute',
              //           right: 8, // Adjust as needed
              //           top: '50%',
              //           transform: 'translateY(-50%)',
              //           zIndex: 1, // Ensure it is on top of the select
              //           backgroundColor: '#f5f5f5', // Light gray background
              //           '&:hover': {
              //             backgroundColor: '#e0e0e0', // Slightly darker on hover
              //           },
              //           borderRadius: '50%', // Round button
              //           boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
              //         }}
              //       >
              //         <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
              //       </IconButton>
              //     )}
              //   </FormControl>
              // </Grid>
              // <Grid item xs={12} sm={12} md={6} lg={6}>
              //   <FormControl fullWidth variant="outlined">
              //     <InputLabel id="behavior-label" shrink>
              //     Uzvedība
              //     </InputLabel>
              //     <Select
              //       labelId="behavior-label"
              //       id="behavior"
              //       value={formState.behavior}
              //       onChange={(e) => handleChange('behavior', e.target.value)}
              //       label="Uzvedība"
              //       notched
              //     >
              //       {BEHAVIOR_CHOICES.map((option) => (
              //         <MenuItem key={option.value} value={option.value}>
              //           {option.label}
              //         </MenuItem>
              //       ))}
              //     </Select>
              //     {formState.behavior && (
              //       <IconButton
              //         size="small"
              //         onClick={() => handleClearSelect('behavior')} // Pass the field name here
              //         sx={{
              //           position: 'absolute',
              //           right: 8, // Adjust as needed
              //           top: '50%',
              //           transform: 'translateY(-50%)',
              //           zIndex: 1, // Ensure it is on top of the select
              //           backgroundColor: '#f5f5f5', // Light gray background
              //           '&:hover': {
              //             backgroundColor: '#e0e0e0', // Slightly darker on hover
              //           },
              //           borderRadius: '50%', // Round button
              //           boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
              //         }}
              //       >
              //         <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
              //       </IconButton>
              //     )}
              //   </FormControl>
              // </Grid>

//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="age-label" shrink>
//                   Vecums
//                   </InputLabel>
//                   <Select
//                     labelId="age-label"
//                     id="age"
//                     value={formState.age}
//                     disabled={
//                       formState.species === null ||
//                       formState.species === '' ||
//                       formState.species === undefined
//                     }
//                     label="Vecums"
//                     notched
//                     onChange={(e) => handleChange('age', e.target.value)}
//                   >
//                     {AGE_CHOICES.map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                   {formState.age && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleClearSelect('age')} // Pass the field name here
//                       sx={{
//                         position: 'absolute',
//                         right: 8, // Adjust as needed
//                         top: '50%',
//                         transform: 'translateY(-50%)',
//                         zIndex: 1, // Ensure it is on top of the select
//                         backgroundColor: '#f5f5f5', // Light gray background
//                         '&:hover': {
//                           backgroundColor: '#e0e0e0', // Slightly darker on hover
//                         },
//                         borderRadius: '50%', // Round button
//                         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
//                       }}
//                     >
//                       <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
//                     </IconButton>
//                   )}
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <TextField
//                   id="breed"
//                   name="breed"
//                   label="Sķirne"
//                   fullWidth
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="outlined"
//                   value={formState.breed}
//                   placeholder=""
//                   onChange={(e) => handleChange('breed', e.target.value)}
//                 />
//               </Grid>

    
//               {/* {translations.formTitles && translations.formTitles.petDetails} */}
//               <Grid item xs={12} sm={12} md={12} lg={12}>
//                 {/* <PetHealth formState={formState} setFormState={setFormState} /> */}
//               </Grid>
//               <Grid item xs={12}>
//                 <Typography
//                   variant="body1"
//                   style={{ fontWeight: '500' }}
//                   gutterBottom
//                   textAlign="left"
//                 >
//                  Mājdzīvnieka atrašanās vieta
//                 </Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <LeafletAddPetMap onLocationChange={handleLocationChange} />
              
//       {/* Location Display */}
//       <Stack direction="row" alignItems="center" spacing={1} my={2}>
   
//         <Typography
//                     variant="body1"
//                     style={{ fontWeight: '500' }}
//                     gutterBottom
//                     textAlign="left"
//                   >
//                     {/* Does the pet have markings? */}
//                    Atrašanās vieta
//                   </Typography>
//       </Stack>

//       {/* Latitude & Longitude in One Line */}
//       <Box
//   sx={{
//     // backgroundColor: "#ffffff",
//     // padding: "12px 18px",
//     // borderRadius: "12px",
//     display: "flex",
//     alignItems: "center",
//     // gap: 1.5,
//     // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//     // border: "1px solid #ddd",
//   }}
// >
//   <LocationOnIcon color="primary" sx={{ fontSize: 28 }} />
//   <Typography variant="body1" fontWeight="600" color="text.primary">
//     {formState.location.lat}, {formState.location.lng}
//   </Typography>
// </Box>


             


//               </Grid>

//               <Grid item xs={12}>
//                 <FormControl component="fieldset">
//                   {/* <FormLabel component="legend">
//                     Does the pet have markings?
//                   </FormLabel> */}
//                   <Typography
//                     variant="body1"
//                     style={{ fontWeight: '500' }}
//                     gutterBottom
//                     textAlign="left"
//                   >
//                     {/* Does the pet have markings? */}
//                     Kažoka raksts
//                   </Typography>
//                   <RadioGroup
//                     style={{ display: 'flex !important', flexDirection: 'row' }}
//                     value={formState.markingPattern}
//                     onChange={handleMarkingPatternChange}
//                   >
//                     {PATTERN_CHOICES.map((pattern) => (
//                       <FormControlLabel
//                         key={pattern.value}
//                         value={pattern.value}
//                         control={<Radio />}
//                         label={pattern.label}
//                       />
//                     ))}
             
//                   </RadioGroup>
           
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <Typography
//                   variant="body1"
//                   style={{ fontWeight: '500' }}
//                   gutterBottom
//                   textAlign="left"
//                 >
//                   Pamatkrāsa
//                 </Typography>

//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     cursor: 'pointer',
//                     border: '1px solid #dadada',
//                     borderRadius: '5px',
//                     padding: '10px',
//                     justifyContent: 'flex-start',
//                   }}
//                   onClick={() => setMainColorDialogOpen(true)}
//                 >
//                   {formState?.mainColor?.hex ? (
//                     <div
//                       style={{
//                         width: '30px',
//                         height: '30px',
//                         borderRadius: '50%',
//                         backgroundColor: formState?.mainColor?.hex, // Use the stored hex value directly
//                         marginRight: '10px',
//                       }}
//                     />
//                   ) : null}

//                   <Typography variant="body1">
//                     {formState?.mainColor?.label
//                       ? formState?.mainColor?.label // Use the stored label directly
//                       : 'Click to choose one color'}
//                   </Typography>

//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <Typography
//                   variant="body1"
//                   style={{ fontWeight: '500' }}
//                   gutterBottom
//                   textAlign="left"
//                 >
//                   Sekundārā krāsa
//                 </Typography>
//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     cursor: formState?.markingPattern === '1' ? 'not-allowed' : 'pointer',
//                     border: '1px solid #dadada',
//                     borderRadius: '5px',
//                     padding: '10px',
//                     justifyContent: 'flex-start',
//                     opacity: formState?.markingPattern === '1' ? 0.5 : 1,
//                   }}
//                   onClick={() =>
//                     formState?.markingPattern !== '1' && setMarkingColorDialogOpen(true)
//                   }
//                 >
                
//                   {formState?.markingColors?.length > 0 ? (
//                     formState.markingColors.map((color, index) => (
//                       <div
//                         key={index}
//                         style={{
//                           display: 'flex',
//                           alignItems: 'center',

//                           marginRight: index === 0 ? '1rem' : '0',
//                         }}
//                       >
//                         <div
//                           style={{
//                             width: '30px',
//                             height: '30px',
//                             borderRadius: '50%',
//                             backgroundColor: color?.hex,
//                             marginRight: '10px',
//                           }}
//                         />
//                         {/* <Typography variant="body1">{color.label}</Typography> */}
//                         <Typography variant="body1">
//                           {formState.markingColors.find((color) => color?.value === formState?.markingColors?.hex).label}
//                         </Typography>

//                       </div>
//                     ))
//                   ) : (
//                     <Typography variant="body1">Click to choose up to three colors</Typography>
//                   )}
//                 {/* </div> */}

//                 </div>
//               </Grid>
//             </Grid>

//             {/* Main Color Dialog */}
//             <Dialog open={mainColorDialogOpen} onClose={() => setMainColorDialogOpen(false)}>
//               <DialogTitle>
//                 Select Main Color
//                 <IconButton
//                   aria-label="close"
//                   onClick={() => setMainColorDialogOpen(false)}
//                   style={{
//                     position: 'absolute',
//                     right: 8,
//                     top: 8,
//                   }}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//               </DialogTitle>
//               <DialogContent>
//                 <FormGroup row>
//                   {COLOR_CHOICES.map((color) => (
//                     <div
//                       key={color.value}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         marginRight: '1rem',
//                         marginBottom: '1rem',
//                         cursor: 'pointer',
//                         minWidth: '100px',
//                       }}
//                       onClick={() =>
//                         handleMainColorChange({ hex: color.hex, label: color.label })
//                       }
//                     >
//                       <div
//                         style={{
//                           width: '30px',
//                           height: '30px',
//                           borderRadius: '50%',
//                           backgroundColor: color.hex,
//                           marginRight: '8px',
//                           border:
//                             formState?.mainColor?.hex === color.hex
//                               ? '2px solid #2a9df4'
//                               : '0px solid #dadada',
//                         }}
//                       />
//                       <Typography variant="body1">{color.label}</Typography>
//                     </div>
//                   ))}
//                 </FormGroup>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={() => setMainColorDialogOpen(false)} color="primary">
//                   Close
//                 </Button>
//               </DialogActions>
//             </Dialog>
//             {/* Marking Color Dialog */}
//             <Dialog open={markingColorDialogOpen} onClose={() => setMarkingColorDialogOpen(false)}>
//               <DialogTitle>
//                 Select Marking Colors
//                 <IconButton
//                   aria-label="close"
//                   onClick={() => setMarkingColorDialogOpen(false)}
//                   style={{ position: 'absolute', right: 8, top: 8 }}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//               </DialogTitle>
//               <DialogContent>
//                 <FormGroup row>
//                   {COLOR_CHOICES.map((color) => (
//                     <div
//                       key={color.value}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         marginRight: '1rem',
//                         marginBottom: '1rem',
//                         cursor: 'pointer',
//                         minWidth: '100px',
//                       }}
//                       onClick={() =>
//                         handleMarkingColorChange({ hex: color.hex, label: color.label })
//                       }
//                     >
//                       <div
//                         style={{
//                           width: '30px',
//                           height: '30px',
//                           borderRadius: '50%',
//                           backgroundColor: color.hex,
//                           marginRight: '8px',
//                           border: formState?.markingColors?.some((c) => c?.hex === color?.hex)
//                             ? '2px solid #2a9df4'
//                             : '0px solid #dadada',
//                         }}
//                       />
//                       <Typography variant="body1">{color?.label}</Typography>
//                     </div>
//                   ))}
//                 </FormGroup>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={() => setMarkingColorDialogOpen(false)} color="primary">
//                   Close
//                 </Button>
//               </DialogActions>
//             </Dialog>

//             <Grid item xs={12}>
//               <Typography
//                 variant="body1"
//                 style={{ fontWeight: '500' }}
//                 gutterBottom
//                 textAlign="left"
//               >
//                 Datums un laiks
//               </Typography>
//             </Grid>

            // <Grid container spacing={2}>
            //   <Grid item xs={12} sm={12} md={6} lg={6}>
            //     <TextField
            //       // required
            //       id="date"
            //       name="date"
            //       label="Datums"
            //       type="date"
            //       fullWidth
            //       InputLabelProps={{
            //         shrink: true,
            //       }}
            //       variant="outlined"
            //       value={formState.date}
            //       onChange={(e) => handleChange('date', e.target.value)}
            //     />
            //   </Grid>
            //   <Grid item xs={12} sm={12} md={6} lg={6}>
            //     <TextField
            //       // required
            //       id="time"
            //       name="time"
            //       label="Laiks"
            //       type="time"
            //       fullWidth
            //       InputLabelProps={{
            //         shrink: true,
            //       }}
            //       variant="outlined"
            //       value={formState.time}
            //       onChange={(e) => handleChange('time', e.target.value)}
            //     />
            //   </Grid>
            // </Grid>
       
           
//             <Grid item xs={12}>
//               <Typography
//                 variant="body1"
//                 style={{ fontWeight: '500' }}
//                 gutterBottom
//                 textAlign="left"
//               >
//                uploadFile
//               </Typography>
//               <input
//                 accept="image/*"
//                 id="image"
//                 type="file"
//                 onChange={(e) => handleImageUpload(e.target.files[0])}
//                 style={{ display: 'none' }}
//               />
//               <label htmlFor="image">
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   component="span"
//                   fullWidth
//                   style={{ marginTop: '20px' }}
//                 >
//                   Upload Image
//                 </Button>
//               </label>
//               {imagePreview && (
//                 // <div style={{ marginTop: '20px' }}>
//                 //   <img
//                 //     src={imagePreview}
//                 //     alt="Preview"
//                 //     style={{ maxWidth: '100%', height: 'auto' }}
//                 //   />
//                 // </div>
//                 <Box mb={2} style={{ width: '100%', marginTop: '20px' }}>
//                   <img src={imagePreview} alt="Preview" style={{ width: '100%', height: 'auto' }} />
//                 </Box>
//               )}
//             </Grid>
//             <Grid item xs={12}>
//               {/* <ImageUploader /> */}
//             </Grid>
//             {/* add code here to upload image */}
//             <Grid container spacing={2}>
              
//             <Grid item xs={12}>
//                 <Typography
//                   variant="body1"
//                   style={{ fontWeight: '500' }}
//                   gutterBottom
//                   textAlign="left"
//                 >
//                   Apraksts
//                 </Typography>
//               </Grid>
//             <Grid item xs={12}>
//                 <TextField
//                   id="notes"
//                   name="notes"
//                   label="Piezīmes"
//                   fullWidth
//                   multiline
//                   rows={4}
//                   variant="outlined"
//                   value={formState.notes}
//                   onChange={(e) => handleChange('notes', e.target.value)}
//                   placeholder="īss apraksts"
//                   InputLabelProps={{
//                     shrink: true, // Always shrink the label
//                   }}
//                 />
//                 {/* <InputLabel htmlFor="notes">Notes</InputLabel> */}
//               </Grid>
//             </Grid>
//             <Grid container spacing={2}>
         
//               <Grid item xs={12}>
//                 <Typography
//                   variant="body1"
//                   style={{ fontWeight: '500' }}
//                   gutterBottom
//                   textAlign="left"
//                 >
//                   Kontaktinformācija
//                 </Typography>
//               </Grid>

              

//               <Grid item xs={4} sm={4} md={4} lg={4}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="phoneCode-label" shrink>
//                   Telefona kods
//                   </InputLabel>
//                   <Select
//                     labelId="phoneCode-label"
//                     id="phoneCode"
//                     value={formState.phoneCode}
//                     onChange={(e) => handleChange('phoneCode', e.target.value)}
//                     label="Telefona kods"
//                     notched
//                   >
//                     {PHONE_CODE_CHOICES.map((code) => (
//                       <MenuItem key={code.value} value={code.value}>
//                         {code.label}
//                       </MenuItem>
//                     ))}

//                   </Select>
//                   {formState.phoneCode && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleClearSelect('phoneCode')} // Pass the field name here
//                       sx={{
//                         position: 'absolute',
//                         right: 8, // Adjust as needed
//                         top: '50%',
//                         transform: 'translateY(-50%)',
//                         zIndex: 1, // Ensure it is on top of the select
//                         backgroundColor: '#f5f5f5', // Light gray background
//                         '&:hover': {
//                           backgroundColor: '#e0e0e0', // Slightly darker on hover
//                         },
//                         borderRadius: '50%', // Round button
//                         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
//                       }}
//                     >
//                       <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
//                     </IconButton>
//                   )}
//                 </FormControl>
//               </Grid>
//               <Grid item xs={8} sm={8} md={8} lg={8}>
//                 <TextField
//                   id="phone"
//                   name="phone"
//                   label="Telefona numurs"
//                   type="text"
//                   fullWidth
//                   placeholder="12345678"
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="outlined"
//                   value={formState.phone}
//                   onChange={(e) => handleChange('phone', e.target.value)}
//                 />
//               </Grid>
             
             

//               <Grid item xs={12} style={{ display: 'none' }}>
//                 <Typography
//                   variant="body1"
//                   style={{ fontWeight: '500' }}
//                   gutterBottom
//                   textAlign="left"
//                 >
//                   currentStatus
//                 </Typography>
//               </Grid>

//               <Grid item xs={12} sm={12} md={12} lg={12} style={{ display: 'none' }}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="updatedStatus-label" shrink>
//                   updatedStatus
//                   </InputLabel>
//                   <Select
//                     labelId="updatedStatus-label"
//                     id="updatedStatus"
//                     value={formState.updatedStatus}
//                     disabled={!formState.status}
//                     label="updatedStatus"
//                     notched
//                     onChange={(e) => handleChange('updatedStatus', e.target.value)}
//                   >
                
//                     {updatedStatusOptions.map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} style={{ display: 'none' }}>
//                 <TextField
//                   id="updatedStatusDescription"
//                   name="updatedStatusDescription"
//                   label="updatedStatusDescription"
//                   disabled={!formState.updatedStatus}
//                   fullWidth
//                   // multiline
//                   // rows={4}
//                   variant="outlined"
//                   value={formState.updatedStatusDescription}
//                   onChange={(e) => handleChange('updatedStatusDescription', e.target.value)}
//                   placeholder="updatedStatusDescription"
//                   InputLabelProps={{
//                     shrink: true, // Always shrink the label
//                   }}
//                 />
//                 {/* <InputLabel htmlFor="notes">Notes</InputLabel> */}
//               </Grid>
//               <Grid item xs={12}>
//               <FormGroup>
           
//               <FormControlLabel control={<Checkbox />} label="Aizsmērēt bildi" />
            
//     </FormGroup>
//     </Grid>
//               {/* <Grid item xs={12}>
//                 Follow-Up Actions: Update on Pet's Status (e.g., Reunited,
//                 Adopted) Feedback on Services Provided
//               </Grid>
//               <Grid item xs={12}>
//                 Emergency Contacts: Local Animal Shelters Veterinary Clinics
//                 Animal Control Agencies
//               </Grid> */}
//               <Grid item xs={12}>
//                 <Alert severity="info">
//                   <AlertTitle>{'INFORMATION'}</AlertTitle>
//                   {
//                     'This will be made public, please do not provide sensitive information that you would like kept private!'
//                   }
//                 </Alert>
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   // startIcon={<SearchIcon />}
//                   // size="large"
//                   style={{
//                     // marginTop: "2rem",
//                     marginLeft: 'auto',
//                     marginRight: '0',
//                     display: 'flex',
//                     backgroundColor: '#ffcb56',
//                     color: 'rgba(0, 0, 0, 0.87)',
//                   }}
//                 >
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }



// export default PetsAdd;

// import React, { useState, useContext, useEffect } from 'react';
// import axios from 'axios';
// import Grid from '@mui/material/Grid';
// import TextField from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import Stack from '@mui/material/Stack';
// import Select from '@mui/material/Select';
// import MenuItem from '@mui/material/MenuItem';
// import Typography from '@mui/material/Typography';
// import FormGroup from '@mui/material/FormGroup';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';
// import IconButton from '@mui/material/IconButton';
// import RadioGroup from '@mui/material/RadioGroup';
// import Radio from '@mui/material/Radio';
// import FormLabel from '@mui/material/FormLabel';
// import Checkbox from '@mui/material/Checkbox';
// import LeafletAddPetMap from '../components/LeafletAddPetMap';
// import FormControlLabel from '@mui/material/FormControlLabel';
// // React MUI Icons
// import CloseIcon from '@mui/icons-material/Close';

// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { useAuth } from '../contexts/AuthContext';


// function PetsAdd() {

//   const { user } = useAuth(); 

//   const getCurrentDate = () => {
//     // Returns date in YYYY-MM-DD format
//     const now = new Date();
//     return now.toISOString().slice(0, 10); 
//   };

//   const getCurrentTime = () => {
//     // Returns time in HH:MM format
//     const now = new Date();
//     return now.toTimeString().slice(0, 5); 
//   };

//   const [formState, setFormState] = useState({
//     status: '',
//     location: { lat: null, lng: null },
//     species: '',
//     identifier: '',
//     size: '',
//     gender: '',
//     behavior: '',
//     age: '',
//     breed: '',
//     pattern: '',
//     primary_color: { hex: null, label: null },
//     secondary_color: { hex: null, label: null },
//     notes: '',
//     contact_phone: '',
//     phone_code: '',
//     date: getCurrentDate(),
//     time: getCurrentTime(),
//     extra_image_1: null,
//     extra_image_2: null,
//     extra_image_3: null,
//     extra_image_4: null,
//     updatedStatus: '',
//     isPublic: true,
//     isImageBlurred: false,
//     isClosed: false,
//   });
//   const [formErrors, setFormErrors] = useState({});
//   const [mainColorDialogOpen, setMainColorDialogOpen] = useState(false);
//   const [markingColorDialogOpen, setMarkingColorDialogOpen] = useState(false);
//   const [imagePreview, setImagePreview] = useState(null);
  
// const STATUS_CHOICES = [
//   { value: 1, label: "Pazudis" },
//   { value: 2, label: "Atrasts" },
//   { value: 3, label: "Redzēts" },
// ];

// const SPECIES_CHOICES = [
//   { value: 1, label: "Suns" },
//   { value: 2, label: "Kaķis" },
//   { value: 3, label: "Cits" },
// ]

// const SIZE_CHOICES = [
//   { value: '', label: "-" },
//   { value: 1, label: "Mazs" },
//   { value: 2, label: "Vidējs" },
//   { value: 3, label: "Liels" },
// ]

// const GENDER_CHOICES = [
//   { value: '', label: "-" },
//   { value: 1, label: "Tēviņš" },
//   { value: 2, label: "Mātīte" }
// ]

// const BEHAVIOR_CHOICES = [
//   { value: '', label: "-" },
//   { value: 1, label: "Draudzīgs" },
//   { value: 2, label: "Agresīvs" },
//   { value: 3, label: "Mierīgs" },
//   { value: 4, label: "Bailīgs" },
//   { value: 5, label: "Paklausīgs" }
// ]

// const AGE_CHOICES = [
//   { value: '', label: "-" },
//   { value: 1, label: "Mazulis" },
//   { value: 2, label: "Pieaugušais" },
//   { value: 3, label: "Seniors" }
// ]

// const PHONE_CODE_CHOICES = [
//   { value: '', label: "-" },
//   { value: '+371', label: "LV (+371)" },
//   { value: '+370', label: "LT (+370)" },
//   { value: '+372', label: "EE (+372)" }
// ]

// const COLOR_CHOICES = [
//   { value: 1, hex: "#000000", label: "Melns" },
//   { value: 2, hex: "#BEBEBE", label: "Pelēks" },
//   { value: 3, hex: "#f7f7f7", label: "Balts" },
//   { value: 4, hex: "#FFF1B9", label: "Krēmīgs" },
//   { value: 5, hex: "#FCDC5C", label: "Dzeltens" },
//   { value: 6, hex: "#FFA500", label: "Zeltains" },
//   { value: 7, hex: "#C37C4D", label: "Brūns" },
//   { value: 8, hex: "#A71A20", label: "Sarkans" },
//   { value: 9, hex: "#BA97AA", label: "Lillīgs" },
//   { value: 10, hex: "#1A355E", label: "Zils" },
//   { value: 11, hex: "#5F6F52", label: "Zaļš" },
//   { value: 12, hex: "#BDB76B", label: "Haki" },
//   { value: 13, hex: "#E5DECA", label: "Bēšīgs" },
//   { value: 14, hex: "#D2B48C", label: "Dzeltenbrūns" },
//   { value: 15, hex: "#954535", label: "Kaštanbrūns" },
// ]

// const PATTERN_CHOICES = [
//   { value: 1, label: "Vienkrāsains" },
//   { value: 2, label: "Strīpains" },
//   { value: 3, label: "Punktveida" },
//   { value: 4, label: "Plankumains" },
//   { value: 5, label: "Raibs" },
// ]


//   const [updatedStatusOptions, setUpdatedStatusOptions] = useState([]);


//   const handleChange = (field, value) => {
//     setFormState((prevState) => ({
//       ...prevState,
//       [field]: value,
//     }));

//     // Clear the error message for the field
//     setFormErrors((prevErrors) => ({
//       ...prevErrors,
//       [field]: '', // Clear the error message for the field
//     }));
//   };

//   // const handleMainColorChange = (colorName) => {
//   //   handleChange('mainColor', colorName);
//   //   setMainColorDialogOpen(false);
//   // };
//   const handleMainColorChange = (color) => {
//     setFormState((prevState) => ({
//       ...prevState,
//       mainColor: color, // Update with both hex and label
//     }));
//     setMainColorDialogOpen(false);
//   };

//   const handleLocationChange = (coords) => {
//     setFormState((prevState) => ({
//       ...prevState,
//       location: {
//         lat: coords.lat,
//         lng: coords.lng,
//       },
//     }));
//   };

//   const handleMarkingPatternChange = (event) => {
//     const value = event.target.value;
//     handleChange('markingPattern', value);
//   };



//   // Handler for changing marking colors
//   const handleMarkingColorChange = (color) => {
//     const currentMarkingColors = [...formState.markingColors];
//     const colorExists = currentMarkingColors.some((c) => c.hex === color.hex);

//     if (colorExists) {
//       // Remove color if it already exists
//       handleChange(
//         'markingColors',
//         currentMarkingColors.filter((c) => c.hex !== color.hex),
//       );
//     } else {
//       // Add color if it doesn't exist, but limit to 3 colors
//       if (currentMarkingColors.length < 2) {
//         handleChange('markingColors', [...currentMarkingColors, color]);
//       }
//     }
//   };

  // // const handleImageUpload = (file) => {
  // //   handleChange('image', file);
  // // };

  // // Utility function to resize image
  // // Utility function to resize and crop image
  // const resizeAndCropImage = (file, callback) => {
  //   const reader = new FileReader();
  //   reader.onload = function (event) {
  //     const img = new Image();
  //     img.onload = function () {
  //       const canvas = document.createElement('canvas');
  //       const ctx = canvas.getContext('2d');

  //       // Set target dimensions for the canvas
  //       const targetAspectRatio = 4 / 3;
  //       const targetWidth = 800;
  //       const targetHeight = targetWidth / targetAspectRatio;

  //       // Calculate the source dimensions
  //       let srcX = 0,
  //         srcY = 0,
  //         srcWidth = img.width,
  //         srcHeight = img.height;

  //       if (img.width / img.height > targetAspectRatio) {
  //         // Source is wider than target aspect ratio
  //         srcWidth = img.height * targetAspectRatio;
  //         srcX = (img.width - srcWidth) / 2;
  //       } else {
  //         // Source is taller than target aspect ratio
  //         srcHeight = img.width / targetAspectRatio;
  //         srcY = (img.height - srcHeight) / 2;
  //       }

  //       // Set canvas dimensions
  //       canvas.width = targetWidth;
  //       canvas.height = targetHeight;

  //       // Draw image on canvas with cropping
  //       ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);

  //       // Convert canvas to Blob
  //       canvas.toBlob(
  //         (blob) => {
  //           callback(blob);
  //         },
  //         'image/jpeg',
  //         0.7,
  //       ); // Adjust quality as needed
  //     };
  //     img.src = event.target.result;
  //   };
  //   reader.readAsDataURL(file);
  // };

  // // Handler for image upload
  // // const handleImageUpload = (file) => {
  // //   setFormState((prevState) => ({
  // //     ...prevState,
  // //     image: file,
  // //   }));

  // //   // Create a URL for the image and set it as preview
  // //   const previewUrl = URL.createObjectURL(file);
  // //   setImagePreview(previewUrl);
  // // };
  // const handleImageUpload = (file) => {
  //   resizeAndCropImage(file, (resizedImage) => {
  //     setFormState((prevState) => ({
  //       ...prevState,
  //       image: resizedImage,
  //     }));
  //     const previewUrl = URL.createObjectURL(resizedImage);
  //     setImagePreview(previewUrl);
  //   });
  // };

  // // Cleanup image URL when component unmounts
  // useEffect(() => {
  //   return () => {
  //     if (imagePreview) {
  //       URL.revokeObjectURL(imagePreview);
  //     }
  //   };
  // }, [imagePreview]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       // const token = localStorage.getItem('token');
//       const accessToken = localStorage.getItem('access_token');

//       // Create FormData object to send the form data and the file
//       const formData = new FormData();
//       Object.keys(formState).forEach((key) => {
//         if (key === 'image' && formState[key]) {
//           formData.append(key, formState[key]); // Append the image file
//         } else if (key === 'location') {
//           formData.append('location[lat]', formState.location.lat);
//           formData.append('location[lng]', formState.location.lng);
//         formData.append('author', user.userId);
//         } else if (key === 'mainColor' && formState[key]) {
//           formData.append(`${key}[hex]`, formState[key].hex);
//           formData.append(`${key}[label]`, formState[key].label);
//         } else if (Array.isArray(formState[key])) {
//           formState[key].forEach((item, index) => {
//             if (typeof item === 'object' && item !== null) {
//               Object.keys(item).forEach((nestedKey) => {
//                 formData.append(`${key}[${index}][${nestedKey}]`, item[nestedKey]);
//               });
//             } else {
//               formData.append(`${key}[]`, item);
//             }
//           });
//         } else {
//           formData.append(key, formState[key]);
//         }
//       });

//       // Append user ID to the form data if needed
//       //  console.log('User:', user.id); // Log user object (for debugging
//       // formData.append('author', user.id);
//       const objectFromFormData = {};
//       formData.forEach((value, key) => {
//         objectFromFormData[key] = value;
//       });
//       console.log('aaaa', objectFromFormData.image);

//       console.log('FormData:', formData); // Log FormData before making the request
//       console.log(JSON.stringify(objectFromFormData));

//       // const response = await axios.post(`https://petfinderbackend-production.up.railway.app/api/pets/`, formData, {
//       //   headers: {
//       //     'Content-Type': 'multipart/form-data',
//       //     Authorization: `Bearer ${accessToken}`,
//       //   },
//       // });
//       console.log("formData", formData)
//       console.log('Pet details sent successfully to the backend.'); // Log success message
//     } catch (error) {
//       console.error('Error response from the backend:', error.response); // Log error response
//       if (
//         error.response &&
//         error.response.data &&
//         error.response.data.errors &&
//         Array.isArray(error.response.data.errors)
//       ) {
//         const receivedErrors = error.response.data.errors;
//         const newFormErrors = {};
//         receivedErrors.forEach((error) => {
//           newFormErrors[error.path] = error.msg;
//         });
//         setFormErrors(newFormErrors);
//         console.log('Form errors:', formErrors);
//       } else {
//         console.error('Failed to send pet details to the backend:', error);
//       }
//     }
//   };

//   // Handle removal of the selected option
//   //  const handleSizeRemove = () => {
//   //   setFormState({
//   //     ...formState,
//   //     size: '', // Reset the size value
//   //   });
//   // };

//   const handleClearSelect = (field) => {
//     setFormState((prevState) => ({
//       ...prevState,
//       [field]: '', // Reset the specified field
//     }));
//   };


//   // Function to get error message for a specific field
//   const getErrorMessage = (field) => {
//     return formErrors[field] ? formErrors[field].msg : '';
//   };

//   return (
//     <React.Fragment>
//       <Grid container spacing={3}>
//         <Grid item xs={12}>
//           <Typography variant="h4" gutterBottom textAlign="center">
//           Ziņot par mājdzīvnieku
//           </Typography>
//           <form onSubmit={handleSubmit}>
//             <Grid container spacing={2}>
//               <Grid item xs={12}>
//                 <Typography
//                   variant="body1"
//                   style={{ fontWeight: '500' }}
//                   gutterBottom
//                   textAlign="left"
//                 >
//                   Mājdzīvnieka raksturojums
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="status-label" shrink>
//                   Statuss
//                   </InputLabel>
//                   <Select
//                     labelId="status-label"
//                     id="status"
//                     value={formState.status}
//                     onChange={(e) => handleChange('status', e.target.value)}
//                     error={Boolean(formErrors.status)}
//                     label="Statuss"
//                     notched
//                   >
//                  {STATUS_CHOICES.map((option) => (
//                     <MenuItem key={option.value} value={option.value}>
//                     {option.label}
//                 </MenuItem>
//                     ))}
//                   </Select>
        
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="species-label" shrink>
//                   Suga
//                   </InputLabel>
//                   <Select
//                     labelId="species-label"
//                     id="species"
//                     value={formState.species}
//                     label="species"
//                     error={Boolean(formErrors.species)}
//                     notched
//                     onChange={(e) => {
//                       handleChange('species', e.target.value);
//                       handleChange('age', '');
//                       // handleChange('breed', '');
//                     }}
//                   >
//                     {SPECIES_CHOICES.map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))}
//                     {/* <MenuItem value="">None</MenuItem>
//                     {categoryOptions.map((category) => (
//                       <MenuItem key={category._id} value={category.value}>
//                         {category.translations[selectedLanguage]}
//                       </MenuItem>
//                     ))} */}
//                     {/* {t('selectOptions.categoryOptions', { returnObjects: true }).map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))} */}
//                   </Select>

//                   {formErrors.species && (
//                     <Typography variant="body2" color="error">
//                       {formErrors.species}
//                     </Typography>
//                   )}
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <TextField
//                   id="identifier"
//                   name="identifier"
//                   label="ID"
//                   fullWidth
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="outlined"
//                   value={formState.identifier}
//                   placeholder="identifier"
//                   onChange={(e) => handleChange('identifier', e.target.value)}
//                 />
//               </Grid>

//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="size-label" shrink>
//                   Izmērs
//                   </InputLabel>

//                   <Select
//                     labelId="size-label"
//                     id="size"
//                     value={formState.size}
//                     label="Izmērs"
//                     notched
//                     onChange={(e) => handleChange('size', e.target.value)}
//                     error={Boolean(formErrors.size)}
//                     fullWidth
//                   >
//                     {SIZE_CHOICES.map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                   {formState.size && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleClearSelect('size')} // Pass the field name here
//                       sx={{
//                         position: 'absolute',
//                         right: 8, // Adjust as needed
//                         top: '50%',
//                         transform: 'translateY(-50%)',
//                         zIndex: 1, // Ensure it is on top of the select
//                         backgroundColor: '#f5f5f5', // Light gray background
//                         '&:hover': {
//                           backgroundColor: '#e0e0e0', // Slightly darker on hover
//                         },
//                         borderRadius: '50%', // Round button
//                         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
//                       }}
//                     >
//                       <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
//                     </IconButton>
//                   )}
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="gender-label" shrink>
//                   Dzimums
//                   </InputLabel>
//                   <Select
//                     labelId="gender-label"
//                     id="gender"
//                     value={formState.gender}
//                     label="Dzimums"
//                     notched
//                     onChange={(e) => handleChange('gender', e.target.value)}
//                   >
//                     {GENDER_CHOICES.map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                   {formState.gender && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleClearSelect('gender')} // Pass the field name here
//                       sx={{
//                         position: 'absolute',
//                         right: 8, // Adjust as needed
//                         top: '50%',
//                         transform: 'translateY(-50%)',
//                         zIndex: 1, // Ensure it is on top of the select
//                         backgroundColor: '#f5f5f5', // Light gray background
//                         '&:hover': {
//                           backgroundColor: '#e0e0e0', // Slightly darker on hover
//                         },
//                         borderRadius: '50%', // Round button
//                         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
//                       }}
//                     >
//                       <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
//                     </IconButton>
//                   )}
//                 </FormControl>
//               </Grid>
//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="behavior-label" shrink>
//                   Uzvedība
//                   </InputLabel>
//                   <Select
//                     labelId="behavior-label"
//                     id="behavior"
//                     value={formState.behavior}
//                     onChange={(e) => handleChange('behavior', e.target.value)}
//                     label="Uzvedība"
//                     notched
//                   >
//                     {BEHAVIOR_CHOICES.map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                   {formState.behavior && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleClearSelect('behavior')} // Pass the field name here
//                       sx={{
//                         position: 'absolute',
//                         right: 8, // Adjust as needed
//                         top: '50%',
//                         transform: 'translateY(-50%)',
//                         zIndex: 1, // Ensure it is on top of the select
//                         backgroundColor: '#f5f5f5', // Light gray background
//                         '&:hover': {
//                           backgroundColor: '#e0e0e0', // Slightly darker on hover
//                         },
//                         borderRadius: '50%', // Round button
//                         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
//                       }}
//                     >
//                       <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
//                     </IconButton>
//                   )}
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="age-label" shrink>
//                   Vecums
//                   </InputLabel>
//                   <Select
//                     labelId="age-label"
//                     id="age"
//                     value={formState.age}
//                     disabled={
//                       formState.species === null ||
//                       formState.species === '' ||
//                       formState.species === undefined
//                     }
//                     label="Vecums"
//                     notched
//                     onChange={(e) => handleChange('age', e.target.value)}
//                   >
//                     {AGE_CHOICES.map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                   {formState.age && (
//                     <IconButton
//                       size="small"
//                       onClick={() => handleClearSelect('age')} // Pass the field name here
//                       sx={{
//                         position: 'absolute',
//                         right: 8, // Adjust as needed
//                         top: '50%',
//                         transform: 'translateY(-50%)',
//                         zIndex: 1, // Ensure it is on top of the select
//                         backgroundColor: '#f5f5f5', // Light gray background
//                         '&:hover': {
//                           backgroundColor: '#e0e0e0', // Slightly darker on hover
//                         },
//                         borderRadius: '50%', // Round button
//                         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
//                       }}
//                     >
//                       <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
//                     </IconButton>
//                   )}
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <TextField
//                   id="breed"
//                   name="breed"
//                   label="Sķirne"
//                   fullWidth
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="outlined"
//                   value={formState.breed}
//                   placeholder=""
//                   onChange={(e) => handleChange('breed', e.target.value)}
//                 />
//               </Grid>

    
//               {/* {translations.formTitles && translations.formTitles.petDetails} */}
//               <Grid item xs={12} sm={12} md={12} lg={12}>
//                 {/* <PetHealth formState={formState} setFormState={setFormState} /> */}
//               </Grid>
//               <Grid item xs={12}>
//                 <Typography
//                   variant="body1"
//                   style={{ fontWeight: '500' }}
//                   gutterBottom
//                   textAlign="left"
//                 >
//                  Mājdzīvnieka atrašanās vieta
//                 </Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <LeafletAddPetMap onLocationChange={handleLocationChange} />
              
//       {/* Location Display */}
//       <Stack direction="row" alignItems="center" spacing={1} my={2}>
   
//         <Typography
//                     variant="body1"
//                     style={{ fontWeight: '500' }}
//                     gutterBottom
//                     textAlign="left"
//                   >
//                     {/* Does the pet have markings? */}
//                    Atrašanās vieta
//                   </Typography>
//       </Stack>

//       {/* Latitude & Longitude in One Line */}
//       <Box
//   sx={{
//     // backgroundColor: "#ffffff",
//     // padding: "12px 18px",
//     // borderRadius: "12px",
//     display: "flex",
//     alignItems: "center",
//     // gap: 1.5,
//     // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//     // border: "1px solid #ddd",
//   }}
// >
//   <LocationOnIcon color="primary" sx={{ fontSize: 28 }} />
//   <Typography variant="body1" fontWeight="600" color="text.primary">
//     {formState.location.lat}, {formState.location.lng}
//   </Typography>
// </Box>


             


//               </Grid>

              // <Grid item xs={12}>
              //   <FormControl component="fieldset">
              //     {/* <FormLabel component="legend">
              //       Does the pet have markings?
              //     </FormLabel> */}
              //     <Typography
              //       variant="body1"
              //       style={{ fontWeight: '500' }}
              //       gutterBottom
              //       textAlign="left"
              //     >
              //       {/* Does the pet have markings? */}
              //       Kažoka raksts
              //     </Typography>
              //     <RadioGroup
              //       style={{ display: 'flex !important', flexDirection: 'row' }}
              //       value={formState.markingPattern}
              //       onChange={handleMarkingPatternChange}
              //     >
              //       {PATTERN_CHOICES.map((pattern) => (
              //         <FormControlLabel
              //           key={pattern.value}
              //           value={pattern.value}
              //           control={<Radio />}
              //           label={pattern.label}
              //         />
              //       ))}
             
              //     </RadioGroup>
           
              //   </FormControl>
              // </Grid>

//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <Typography
//                   variant="body1"
//                   style={{ fontWeight: '500' }}
//                   gutterBottom
//                   textAlign="left"
//                 >
//                   Pamatkrāsa
//                 </Typography>
//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     cursor: 'pointer',
//                     border: '1px solid #dadada',
//                     borderRadius: '5px',
//                     padding: '10px',
//                     justifyContent: 'flex-start',
//                   }}
//                   onClick={() => setMainColorDialogOpen(true)}
//                 >
//                   {formState?.mainColor?.hex ? (
//                     <div
//                       style={{
//                         width: '30px',
//                         height: '30px',
//                         borderRadius: '50%',
//                         backgroundColor: formState?.mainColor?.hex, // Use the stored hex value directly
//                         marginRight: '10px',
//                       }}
//                     />
//                   ) : null}

//                   <Typography variant="body1">
//                     {formState?.mainColor?.label
//                       ? formState?.mainColor?.label // Use the stored label directly
//                       : 'Click to choose one color'}
//                   </Typography>

//                 </div>
//               </Grid>
//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <Typography
//                   variant="body1"
//                   style={{ fontWeight: '500' }}
//                   gutterBottom
//                   textAlign="left"
//                 >
//                   Sekundārā krāsa
//                 </Typography>
//                 <div
//                   style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     cursor: formState?.markingPattern === '1' ? 'not-allowed' : 'pointer',
//                     border: '1px solid #dadada',
//                     borderRadius: '5px',
//                     padding: '10px',
//                     justifyContent: 'flex-start',
//                     opacity: formState?.markingPattern === '1' ? 0.5 : 1,
//                   }}
//                   onClick={() =>
//                     formState?.markingPattern !== '1' && setMarkingColorDialogOpen(true)
//                   }
//                 >
                
//                   {formState?.markingColors?.length > 0 ? (
//                     formState.markingColors.map((color, index) => (
//                       <div
//                         key={index}
//                         style={{
//                           display: 'flex',
//                           alignItems: 'center',

//                           marginRight: index === 0 ? '1rem' : '0',
//                         }}
//                       >
//                         <div
//                           style={{
//                             width: '30px',
//                             height: '30px',
//                             borderRadius: '50%',
//                             backgroundColor: color?.hex,
//                             marginRight: '10px',
//                           }}
//                         />
//                         {/* <Typography variant="body1">{color.label}</Typography> */}
//                         <Typography variant="body1">
//                           {formState.markingColors.find((color) => color?.value === formState?.markingColors?.hex).label}
//                         </Typography>

//                       </div>
//                     ))
//                   ) : (
//                     <Typography variant="body1">Click to choose up to three colors</Typography>
//                   )}
//                 {/* </div> */}

//                 </div>
//               </Grid>
//             </Grid>

//             {/* Main Color Dialog */}
//             <Dialog open={mainColorDialogOpen} onClose={() => setMainColorDialogOpen(false)}>
//               <DialogTitle>
//                 Select Main Color
//                 <IconButton
//                   aria-label="close"
//                   onClick={() => setMainColorDialogOpen(false)}
//                   style={{
//                     position: 'absolute',
//                     right: 8,
//                     top: 8,
//                   }}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//               </DialogTitle>
//               <DialogContent>
//                 <FormGroup row>
//                   {COLOR_CHOICES.map((color) => (
//                     <div
//                       key={color.value}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         marginRight: '1rem',
//                         marginBottom: '1rem',
//                         cursor: 'pointer',
//                         minWidth: '100px',
//                       }}
//                       onClick={() =>
//                         handleMainColorChange({ hex: color.hex, label: color.label })
//                       }
//                     >
//                       <div
//                         style={{
//                           width: '30px',
//                           height: '30px',
//                           borderRadius: '50%',
//                           backgroundColor: color.hex,
//                           marginRight: '8px',
//                           border:
//                             formState?.mainColor?.hex === color.hex
//                               ? '2px solid #2a9df4'
//                               : '0px solid #dadada',
//                         }}
//                       />
//                       <Typography variant="body1">{color.label}</Typography>
//                     </div>
//                   ))}
//                 </FormGroup>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={() => setMainColorDialogOpen(false)} color="primary">
//                   Close
//                 </Button>
//               </DialogActions>
//             </Dialog>
//             {/* Marking Color Dialog */}
//             <Dialog open={markingColorDialogOpen} onClose={() => setMarkingColorDialogOpen(false)}>
//               <DialogTitle>
//                 Select Marking Colors
//                 <IconButton
//                   aria-label="close"
//                   onClick={() => setMarkingColorDialogOpen(false)}
//                   style={{ position: 'absolute', right: 8, top: 8 }}
//                 >
//                   <CloseIcon />
//                 </IconButton>
//               </DialogTitle>
//               <DialogContent>
//                 <FormGroup row>
//                   {COLOR_CHOICES.map((color) => (
//                     <div
//                       key={color.value}
//                       style={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         marginRight: '1rem',
//                         marginBottom: '1rem',
//                         cursor: 'pointer',
//                         minWidth: '100px',
//                       }}
//                       onClick={() =>
//                         handleMarkingColorChange({ hex: color.hex, label: color.label })
//                       }
//                     >
//                       <div
//                         style={{
//                           width: '30px',
//                           height: '30px',
//                           borderRadius: '50%',
//                           backgroundColor: color.hex,
//                           marginRight: '8px',
//                           border: formState?.markingColors?.some((c) => c?.hex === color?.hex)
//                             ? '2px solid #2a9df4'
//                             : '0px solid #dadada',
//                         }}
//                       />
//                       <Typography variant="body1">{color?.label}</Typography>
//                     </div>
//                   ))}
//                 </FormGroup>
//               </DialogContent>
//               <DialogActions>
//                 <Button onClick={() => setMarkingColorDialogOpen(false)} color="primary">
//                   Close
//                 </Button>
//               </DialogActions>
//             </Dialog>

//             <Grid item xs={12}>
//               <Typography
//                 variant="body1"
//                 style={{ fontWeight: '500' }}
//                 gutterBottom
//                 textAlign="left"
//               >
//                 Datums un laiks
//               </Typography>
//             </Grid>

//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <TextField
//                   // required
//                   id="date"
//                   name="date"
//                   label="Datums"
//                   type="date"
//                   fullWidth
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="outlined"
//                   value={formState.date}
//                   onChange={(e) => handleChange('date', e.target.value)}
//                 />
//               </Grid>
//               <Grid item xs={12} sm={12} md={6} lg={6}>
//                 <TextField
//                   // required
//                   id="time"
//                   name="time"
//                   label="Laiks"
//                   type="time"
//                   fullWidth
//                   InputLabelProps={{
//                     shrink: true,
//                   }}
//                   variant="outlined"
//                   value={formState.time}
//                   onChange={(e) => handleChange('time', e.target.value)}
//                 />
//               </Grid>
//             </Grid>
       
           
            // <Grid item xs={12}>
            //   <Typography
            //     variant="body1"
            //     style={{ fontWeight: '500' }}
            //     gutterBottom
            //     textAlign="left"
            //   >
            //    uploadFile
            //   </Typography>
            //   <input
            //     accept="image/*"
            //     id="image"
            //     type="file"
            //     onChange={(e) => handleImageUpload(e.target.files[0])}
            //     style={{ display: 'none' }}
            //   />
            //   <label htmlFor="image">
            //     <Button
            //       variant="contained"
            //       color="primary"
            //       component="span"
            //       fullWidth
            //       style={{ marginTop: '20px' }}
            //     >
            //       Upload Image
            //     </Button>
            //   </label>
            //   {imagePreview && (
            //     // <div style={{ marginTop: '20px' }}>
            //     //   <img
            //     //     src={imagePreview}
            //     //     alt="Preview"
            //     //     style={{ maxWidth: '100%', height: 'auto' }}
            //     //   />
            //     // </div>
            //     <Box mb={2} style={{ width: '100%', marginTop: '20px' }}>
            //       <img src={imagePreview} alt="Preview" style={{ width: '100%', height: 'auto' }} />
            //     </Box>
            //   )}
            // </Grid>
            // <Grid item xs={12}>
            //   {/* <ImageUploader /> */}
            // </Grid>
//             {/* add code here to upload image */}
//             <Grid container spacing={2}>
              
            // <Grid item xs={12}>
            //     <Typography
            //       variant="body1"
            //       style={{ fontWeight: '500' }}
            //       gutterBottom
            //       textAlign="left"
            //     >
            //       Apraksts
            //     </Typography>
            //   </Grid>
            // <Grid item xs={12}>
            //     <TextField
            //       id="notes"
            //       name="notes"
            //       label="Piezīmes"
            //       fullWidth
            //       multiline
            //       rows={4}
            //       variant="outlined"
            //       value={formState.notes}
            //       onChange={(e) => handleChange('notes', e.target.value)}
            //       placeholder="īss apraksts"
            //       InputLabelProps={{
            //         shrink: true, // Always shrink the label
            //       }}
            //     />
            //     {/* <InputLabel htmlFor="notes">Notes</InputLabel> */}
            //   </Grid>
            // </Grid>
            // <Grid container spacing={2}>
         
            //   <Grid item xs={12}>
            //     <Typography
            //       variant="body1"
            //       style={{ fontWeight: '500' }}
            //       gutterBottom
            //       textAlign="left"
            //     >
            //       Kontaktinformācija
            //     </Typography>
            //   </Grid>

              

            //   <Grid item xs={4} sm={4} md={4} lg={4}>
            //     <FormControl fullWidth variant="outlined">
            //       <InputLabel id="phoneCode-label" shrink>
            //       Telefona kods
            //       </InputLabel>
            //       <Select
            //         labelId="phoneCode-label"
            //         id="phoneCode"
            //         value={formState.phoneCode}
            //         onChange={(e) => handleChange('phoneCode', e.target.value)}
            //         label="Telefona kods"
            //         notched
            //       >
            //         {PHONE_CODE_CHOICES.map((code) => (
            //           <MenuItem key={code.value} value={code.value}>
            //             {code.label}
            //           </MenuItem>
            //         ))}

            //       </Select>
            //       {formState.phoneCode && (
            //         <IconButton
            //           size="small"
            //           onClick={() => handleClearSelect('phoneCode')} // Pass the field name here
            //           sx={{
            //             position: 'absolute',
            //             right: 8, // Adjust as needed
            //             top: '50%',
            //             transform: 'translateY(-50%)',
            //             zIndex: 1, // Ensure it is on top of the select
            //             backgroundColor: '#f5f5f5', // Light gray background
            //             '&:hover': {
            //               backgroundColor: '#e0e0e0', // Slightly darker on hover
            //             },
            //             borderRadius: '50%', // Round button
            //             boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
            //           }}
            //         >
            //           <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
            //         </IconButton>
            //       )}
            //     </FormControl>
            //   </Grid>
            //   <Grid item xs={8} sm={8} md={8} lg={8}>
            //     <TextField
            //       id="phone"
            //       name="phone"
            //       label="Telefona numurs"
            //       type="text"
            //       fullWidth
            //       placeholder="12345678"
            //       InputLabelProps={{
            //         shrink: true,
            //       }}
            //       variant="outlined"
            //       value={formState.phone}
            //       onChange={(e) => handleChange('phone', e.target.value)}
            //     />
            //   </Grid>
             
             

//               <Grid item xs={12} style={{ display: 'none' }}>
//                 <Typography
//                   variant="body1"
//                   style={{ fontWeight: '500' }}
//                   gutterBottom
//                   textAlign="left"
//                 >
//                   currentStatus
//                 </Typography>
//               </Grid>

//               <Grid item xs={12} sm={12} md={12} lg={12} style={{ display: 'none' }}>
//                 <FormControl fullWidth variant="outlined">
//                   <InputLabel id="updatedStatus-label" shrink>
//                   updatedStatus
//                   </InputLabel>
//                   <Select
//                     labelId="updatedStatus-label"
//                     id="updatedStatus"
//                     value={formState.updatedStatus}
//                     disabled={!formState.status}
//                     label="updatedStatus"
//                     notched
//                     onChange={(e) => handleChange('updatedStatus', e.target.value)}
//                   >
                
//                     {updatedStatusOptions.map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))}
//                   </Select>
//                 </FormControl>
//               </Grid>

//               <Grid item xs={12} style={{ display: 'none' }}>
//                 <TextField
//                   id="updatedStatusDescription"
//                   name="updatedStatusDescription"
//                   label="updatedStatusDescription"
//                   disabled={!formState.updatedStatus}
//                   fullWidth
//                   // multiline
//                   // rows={4}
//                   variant="outlined"
//                   value={formState.updatedStatusDescription}
//                   onChange={(e) => handleChange('updatedStatusDescription', e.target.value)}
//                   placeholder="updatedStatusDescription"
//                   InputLabelProps={{
//                     shrink: true, // Always shrink the label
//                   }}
//                 />
//                 {/* <InputLabel htmlFor="notes">Notes</InputLabel> */}
//               </Grid>
//               <Grid item xs={12}>
//               <FormGroup>
           
//               <FormControlLabel control={<Checkbox />} label="Aizsmērēt bildi" />
            
//     </FormGroup>
//     </Grid>
//               {/* <Grid item xs={12}>
//                 Follow-Up Actions: Update on Pet's Status (e.g., Reunited,
//                 Adopted) Feedback on Services Provided
//               </Grid>
//               <Grid item xs={12}>
//                 Emergency Contacts: Local Animal Shelters Veterinary Clinics
//                 Animal Control Agencies
//               </Grid> */}
//               <Grid item xs={12}>
//                 <Alert severity="info">
//                   <AlertTitle>{'INFORMATION'}</AlertTitle>
//                   {
//                     'This will be made public, please do not provide sensitive information that you would like kept private!'
//                   }
//                 </Alert>
//               </Grid>
//               <Grid item xs={12}>
//                 <Button
//                   type="submit"
//                   variant="contained"
//                   // startIcon={<SearchIcon />}
//                   // size="large"
//                   style={{
//                     // marginTop: "2rem",
//                     marginLeft: 'auto',
//                     marginRight: '0',
//                     display: 'flex',
//                     backgroundColor: '#ffcb56',
//                     color: 'rgba(0, 0, 0, 0.87)',
//                   }}
//                 >
//                   Submit
//                 </Button>
//               </Grid>
//             </Grid>
//           </form>
//         </Grid>
//       </Grid>
//     </React.Fragment>
//   );
// }



// export default PetsAdd;

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  Grid,
  Grid2,
  Box,
  Stack,
  FormControlLabel,
  FormControl,
  FormGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  IconButton,
  TextField,
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';
import { STATUS_CHOICES, SPECIES_CHOICES, AGE_CHOICES_BY_SPECIES, SIZE_CHOICES, GENDER_CHOICES, BEHAVIOR_CHOICES, AGE_CHOICES, PHONE_CODE_CHOICES, COLOR_CHOICES, PATTERN_CHOICES } from '../constants/petOptions';
import { getCurrentDate, getCurrentTime } from '../utils/formHelpers';
import LeafletAddPetMap from '../components/LeafletAddPetMap';
// React MUI Icons
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';




function PetsAdd() {
  const { user } = useAuth(); // Get logged-in user
  
  /** State for form fields */
  const [formState, setFormState] = useState({
    status: '',
    species: '',
    location: { lat: 56.946285, lng: 24.105078 },
    
    identifier: '',
    size: '',
    gender: '',
    behavior: '',
    age: '',
    breed: '',
    pattern: 1,
    primary_color: { hex: null, label: null, value: null },
    secondary_color: { hex: null, label: null, value: null },
    notes: '',
    contact_phone: '',
    phone_code: '',
    date: getCurrentDate(),
    time: getCurrentTime(),
    image: null,
    extra_image_1: null,
    extra_image_2: null,
    extra_image_3: null,
    extra_image_4: null,
//     updatedStatus: '',
    isPublic: true,
    isImageBlurred: false,
    isClosed: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(null);
  const [extraImagesPreview, setExtraImagesPreview] = useState({
    extra_image_1: null,
    extra_image_2: null,
    extra_image_3: null,
    extra_image_4: null,
  });
/** State for dynamically updating age options */
const [ageChoices, setAgeChoices] = useState(AGE_CHOICES_BY_SPECIES[3]); // Default to "Cits"

    /** Handle input changes */
    // const handleChange = (field, value) => {
    //   setFormState((prevState) => ({
    //     ...prevState,
    //     [field]: value,
    //   }));
    // };
    const handleChange = (field, value) => {
      setFormState((prevState) => {
        let newState = { ...prevState, [field]: value };
    
        // Reset secondary color when pattern changes
        if (field === 'pattern') {
          newState.secondary_color = { hex: null, label: null, value: null };
        }
    
        return newState;
      });
    };
    

    const handleLocationChange = (coords) => {
      setFormState((prevState) => ({
        ...prevState,
        location: {
          lat: coords.lat,
          lng: coords.lng,
        },
      }));
    };
  
    /** Update age choices when species changes */
    useEffect(() => {
      setAgeChoices(AGE_CHOICES_BY_SPECIES[formState.species] || AGE_CHOICES_BY_SPECIES[3]); 
    }, [formState.species]);
  
  /** Handle field changes */
  // const handleChange = (field, value) => {
  //   setFormState((prevState) => ({
  //     ...prevState,
  //     [field]: value,
  //   }));
  // };

  // const handleMarkingPatternChange = (event) => {
  //   const value = event.target.value;
  //   handleChange('pattern', value);
  // };


  /** Handle field clear select */
  const handleClearSelect = (field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: '',
    }));
  };

    // Utility function to resize and crop image
    // const resizeAndCropImage = (file, callback) => {
    //   const reader = new FileReader();
    //   reader.onload = function (event) {
    //     const img = new Image();
    //     img.onload = function () {
    //       const canvas = document.createElement('canvas');
    //       const ctx = canvas.getContext('2d');
  
    //       // Set target dimensions for the canvas
    //       const targetAspectRatio = 4 / 3;
    //       const targetWidth = 800;
    //       const targetHeight = targetWidth / targetAspectRatio;
  
    //       // Calculate the source dimensions
    //       let srcX = 0,
    //         srcY = 0,
    //         srcWidth = img.width,
    //         srcHeight = img.height;
  
    //       if (img.width / img.height > targetAspectRatio) {
    //         // Source is wider than target aspect ratio
    //         srcWidth = img.height * targetAspectRatio;
    //         srcX = (img.width - srcWidth) / 2;
    //       } else {
    //         // Source is taller than target aspect ratio
    //         srcHeight = img.width / targetAspectRatio;
    //         srcY = (img.height - srcHeight) / 2;
    //       }
  
    //       // Set canvas dimensions
    //       canvas.width = targetWidth;
    //       canvas.height = targetHeight;
  
    //       // Draw image on canvas with cropping
    //       ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);
  
    //       // Convert canvas to Blob
    //       canvas.toBlob(
    //         (blob) => {
    //           callback(blob);
    //         },
    //         'image/jpeg',
    //         0.7,
    //       ); // Adjust quality as needed
    //     };
    //     img.src = event.target.result;
    //   };
    //   reader.readAsDataURL(file);
    // };
    const resizeAndCropImage = (file, callback) => {
      const reader = new FileReader();
      
      reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
    
          // ✅ Define target width, aspect ratio & quality
          const targetWidth = 800;
          const targetAspectRatio = 4 / 3; 
          const targetHeight = targetWidth / targetAspectRatio;
          const quality = 0.8; // Compression quality (0.1 - 1)
    
          // ✅ Calculate crop area
          let srcX = 0, srcY = 0, srcWidth = img.width, srcHeight = img.height;
          if (img.width / img.height > targetAspectRatio) {
            srcWidth = img.height * targetAspectRatio;
            srcX = (img.width - srcWidth) / 2;
          } else {
            srcHeight = img.width / targetAspectRatio;
            srcY = (img.height - srcHeight) / 2;
          }
    
          // ✅ Set canvas size
          canvas.width = targetWidth;
          canvas.height = targetHeight;
    
          // ✅ Draw cropped image onto canvas
          ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);
    
          // ✅ Preserve file extension
          const fileExtension = file.name.split('.').pop().toLowerCase();
          const mimeType = fileExtension === 'png' ? 'image/png' : 'image/jpeg';
    
          // ✅ Convert canvas to Blob & then File
          canvas.toBlob((blob) => {
            const resizedFile = new File([blob], `resized_pet.${fileExtension}`, { type: mimeType });
            callback(resizedFile); // Return the File instead of Blob
          }, mimeType, quality);
        };
        img.src = event.target.result;
      };
    
      reader.readAsDataURL(file);
    };
    const handleImageUpload = (file) => {
      if (!file) return;
    
      resizeAndCropImage(file, (resizedFile) => {
        setFormState((prevState) => ({
          ...prevState,
          image: resizedFile,  // ✅ Store as File, not Blob
        }));
    
        // ✅ Create preview URL
        const previewUrl = URL.createObjectURL(resizedFile);
        setImagePreview(previewUrl);
      });
    };
    const handleExtraImageUpload = (file, field) => {
      if (!file) return;
      const previewUrl = URL.createObjectURL(file);
      setExtraImagesPreview((prevState) => ({ ...prevState, [field]: previewUrl }));
      setFormState((prevState) => ({ ...prevState, [field]: file }));
    };
    // const handleExtraImageUpload = (file, index) => {
    //   if (!file) return;
    //   const previewUrl = URL.createObjectURL(file);
      
    //   // Store the image in formState for each extra image slot
    //   setExtraImagesPreview((prevState) => ({ ...prevState, [index]: previewUrl }));
      
    //   // Add file to formState
    //   setFormState((prevState) => ({
    //     ...prevState,
    //     [`extra_image_${index}`]: file, // This will store the actual image file in formState
    //   }));
    // };
    
    // const handleImageUpload = (file) => {
      // resizeAndCropImage(file, (resizedImage) => {
      //   setFormState((prevState) => ({
      //     ...prevState,
      //     image: resizedImage,
      //   }));
    //     const previewUrl = URL.createObjectURL(resizedImage);
    //     setImagePreview(previewUrl);
    //   });
    // };
    // const handleImageUpload = (file) => {
    //   if (!file) return;
    
    //   // ✅ Store file in formState
    //   setFormState((prevState) => ({
    //     ...prevState,
    //     image: file,  // Store original file (not Blob)
    //   }));
    
    //   // ✅ Create preview URL
    //   const previewUrl = URL.createObjectURL(file);
    //   setImagePreview(previewUrl);
    // };
    
    // Cleanup image URL when component unmounts
    // useEffect(() => {
    //   return () => {
    //     if (imagePreview) {
    //       URL.revokeObjectURL(imagePreview);
    //     }
    //   };
    // }, [imagePreview]);
    useEffect(() => {
      return () => {
        if (imagePreview) URL.revokeObjectURL(imagePreview);
        Object.values(extraImagesPreview).forEach((preview) => {
          if (preview) URL.revokeObjectURL(preview);
        });
      };
    }, [imagePreview, extraImagesPreview]);

  /** Submit form data to the backend */
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('🚀 Submitting form:', formState);

    try {
      const accessToken = localStorage.getItem('access_token');
      const formData = new FormData();

      // Round latitude & longitude to 6 decimal places
      const latitude = parseFloat(formState.location.lat).toFixed(6);
      const longitude = parseFloat(formState.location.lng).toFixed(6);
    

      if (isNaN(latitude) || isNaN(longitude)) {
        console.error("❌ Invalid latitude or longitude");
        return;
      }

      // Append form fields
      formData.append('status', formState.status);
      formData.append('species', formState.species);
      formData.append('identifier', formState.identifier);
      formData.append('size', formState.size);
      formData.append('gender', formState.gender);
      formData.append('behavior', formState.behavior);
      formData.append('age', formState.age);
      formData.append('breed', formState.breed);
      formData.append('date', formState.date);
      formData.append('time', formState.time);
      formData.append('latitude', latitude);
      formData.append('longitude', longitude);
      formData.append('pattern', formState.pattern);
      formData.append('primary_color', formState.primary_color.value);
      formData.append('secondary_color', formState.secondary_color.value);
      formData.append('notes', formState.notes);
      formData.append('phone_code', formState.phone_code);
      formData.append('contact_phone', formState.contact_phone);

      // Append image (Only if user uploaded one)
      if (formState.image) {
        formData.append('image', formState.image);
      }
      
      if (formState.extra_image_1) {
        formData.append('extra_image_1', formState.extra_image_1);
      }
      if (formState.extra_image_2) {
        formData.append('extra_image_2', formState.extra_image_2);
      } 
      if (formState.extra_image_3) {
        formData.append('extra_image_3', formState.extra_image_3);
      } 
      if (formState.extra_image_4) {
        formData.append('extra_image_4', formState.extra_image_4);
      } 

      // Append the author (logged-in user)
      if (user?.userId) {
        formData.append('author', user.userId);
      }

      console.log('🚀 FormData ready to send:', Object.fromEntries(formData.entries()));

      // Send request to backend
      const response = await axios.post('https://petfinderbackend-production.up.railway.app/api/pets/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log('✅ Pet successfully added!', response.data);
    } catch (error) {
      console.error('❌ Error sending pet data:', error.response?.data || error.message);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Ziņot par mājdzīvnieku
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>

      
        {/* MAIN IMAGE (Grid 6) */}
        <Grid item xs={12} md={6}>
          <input
            accept="image/*"
            id="main-image"
            type="file"
            onChange={(e) => handleImageUpload(e.target.files[0])}
            style={{ display: "none" }}
          />
          <label htmlFor="main-image">
            <Box
              sx={{
                width: "100%",
                aspectRatio: "4/3",  // Aspect ratio (e.g., 4:3)
                background: imagePreview ? `url(${imagePreview}) center/cover` : "#f0f0f0",
                border: "2px dashed gray",
                // border: "2px dashed #22badf",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                borderRadius: "8px",
                
              }}
            >
              {!imagePreview && <Typography variant="body2" color="gray"><AddPhotoAlternateIcon /></Typography>}
            </Box>
          </label>
        </Grid>

        {/* EXTRA IMAGES (Grid 6, 2x2 layout) */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2}>
          {["extra_image_1", "extra_image_2", "extra_image_3", "extra_image_4"].map((field, index) => (
              <Grid item xs={6} key={field}>
                <input
                  accept="image/*"
                  id={field}
                  type="file"
                  onChange={(e) => handleExtraImageUpload(e.target.files[0], field)}
                  style={{ display: "none" }}
                />
                <label htmlFor={field}>
                  <Box
                    sx={{
                      width: "100%",
                      aspectRatio: "4/3",  // Matching aspect ratio
                      backgroundColor: extraImagesPreview[field] ? "transparent" : "#f5f5f5",
                      border: "2px dashed gray",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      borderRadius: "8px",
                    }}
                  >
                    {extraImagesPreview[field] ? (
                    <img src={extraImagesPreview[field]} alt="Preview" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} />
                  ) : (
                    <Typography variant="body" color="gray">
                      <AddPhotoAlternateIcon />
                      {/* Pievienot bildi */}
                    </Typography>
                  )}
                  </Box>
                </label>
              </Grid>
            ))}
          </Grid>
        </Grid>
    






            {/* Status Field */}
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="status-label" shrink>
                  Statuss
                </InputLabel>
                <Select
                  labelId="status-label"
                  value={formState.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  label="Statuss"
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
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="species-label" shrink>
                  Suga
                </InputLabel>
                <Select
                  labelId="species-label"
                  value={formState.species}
                  onChange={(e) => handleChange('species', e.target.value)}
                  label="Suga"
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

            {/* Identifier Field */}
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                  id="identifier"
                  name="identifier"
                  label="Unikāls identifikators"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.identifier}
                  // placeholder="Mikročipa numurs"
                  onChange={(e) => handleChange('identifier', e.target.value)}
                />
              </Grid>

            {/* Size Field */}
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="size-label" shrink>
                  Izmērs
                  </InputLabel>

                  <Select
                    labelId="size-label"
                    id="size"
                    value={formState.size}
                    label="Izmērs"
                    notched
                    onChange={(e) => handleChange('size', e.target.value)}
                    error={Boolean(formErrors.size)}
                    fullWidth
                  >
                    {SIZE_CHOICES.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formState.size && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('size')} // Pass the field name here
                      sx={{
                        position: 'absolute',
                        right: 8, // Adjust as needed
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1, // Ensure it is on top of the select
                        backgroundColor: '#f5f5f5', // Light gray background
                        '&:hover': {
                          backgroundColor: '#e0e0e0', // Slightly darker on hover
                        },
                        borderRadius: '50%', // Round button
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
                      }}
                    >
                      <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                    </IconButton>
                  )}
                </FormControl>
            </Grid>

            {/* Gender Field */}
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="gender-label" shrink>
                  Dzimums
                  </InputLabel>
                  <Select
                    labelId="gender-label"
                    id="gender"
                    value={formState.gender}
                    label="Dzimums"
                    notched
                    onChange={(e) => handleChange('gender', e.target.value)}
                  >
                    {GENDER_CHOICES.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formState.gender && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('gender')} // Pass the field name here
                      sx={{
                        position: 'absolute',
                        right: 8, // Adjust as needed
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1, // Ensure it is on top of the select
                        backgroundColor: '#f5f5f5', // Light gray background
                        '&:hover': {
                          backgroundColor: '#e0e0e0', // Slightly darker on hover
                        },
                        borderRadius: '50%', // Round button
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
                      }}
                    >
                      <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                    </IconButton>
                  )}
                </FormControl>
            </Grid>

            {/* Behavior Field */}
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="behavior-label" shrink>
                  Uzvedība
                  </InputLabel>
                  <Select
                    labelId="behavior-label"
                    id="behavior"
                    value={formState.behavior}
                    onChange={(e) => handleChange('behavior', e.target.value)}
                    label="Uzvedība"
                    notched
                  >
                    {BEHAVIOR_CHOICES.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formState.behavior && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('behavior')} // Pass the field name here
                      sx={{
                        position: 'absolute',
                        right: 8, // Adjust as needed
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1, // Ensure it is on top of the select
                        backgroundColor: '#f5f5f5', // Light gray background
                        '&:hover': {
                          backgroundColor: '#e0e0e0', // Slightly darker on hover
                        },
                        borderRadius: '50%', // Round button
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
                      }}
                    >
                      <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                    </IconButton>
                  )}
                </FormControl>
            </Grid>

            {/* Age Field */}
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="age-label" shrink>
                    Vecums
                    </InputLabel>
                    <Select
                      labelId="age-label"
                      id="age"
                      value={formState.age}
                      disabled={
                        formState.species === null ||
                        formState.species === '' ||
                        formState.species === undefined
                      }
                      label="Vecums"
                      notched
                      onChange={(e) => handleChange('age', e.target.value)}
                    >
                      {ageChoices.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                    {formState.age && (
                      <IconButton
                        size="small"
                        onClick={() => handleClearSelect('age')} // Pass the field name here
                        sx={{
                          position: 'absolute',
                          right: 8, // Adjust as needed
                          top: '50%',
                          transform: 'translateY(-50%)',
                          zIndex: 1, // Ensure it is on top of the select
                          backgroundColor: '#f5f5f5', // Light gray background
                          '&:hover': {
                            backgroundColor: '#e0e0e0', // Slightly darker on hover
                          },
                          borderRadius: '50%', // Round button
                          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
                        }}
                      >
                        <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                      </IconButton>
                    )}
              </FormControl>
            </Grid>
            
            {/* Breed Field */}
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <TextField
                  id="breed"
                  name="breed"
                  label="Sķirne"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.breed}
                  placeholder=""
                  onChange={(e) => handleChange('breed', e.target.value)}
                />
            </Grid>

            {/* Map Display */}
            <Grid item xs={12}>
            <LeafletAddPetMap onLocationChange={handleLocationChange} location={formState.location}  />
              
       {/* Location Display */}
       {/* <Stack direction="row" alignItems="center" spacing={1} my={1}>
   
         <Typography
                    variant="body1"
                    style={{ fontWeight: '500' }}
                    gutterBottom
                    textAlign="left"
                  >
                
                   Atrašanās vieta
                  </Typography>
      </Stack> */}

      {/* Latitude & Longitude in One Line */}
      {/* <Box
  sx={{
    // backgroundColor: "#ffffff",
    // padding: "12px 18px",
    // borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    // gap: 1.5,
    // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    // border: "1px solid #ddd",
  }}
>
      <LocationOnIcon color="primary" sx={{ fontSize: 28 }} />
        <Typography variant="body1" fontWeight="600" >
          {formState.location.lat}, {formState.location.lng}
        </Typography>
      </Box> */}


             


            </Grid>

             {/* Location Field */}
             {/* <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField
                  // id="identifier"
                  // name="location"
                  label="Atrašanās vieta"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={`${formState.location.lat}, ${formState.location.lng}`}
                  // placeholder="Identifier"
                  // onChange={(e) => handleChange('identifier', e.target.value)}
                />
              </Grid> */}

<Grid item xs={6} sm={6} md={6} lg={6}>
              <TextField
                  // id="identifier"
                  // name="location"
                  label="Ģeogrāfiskais platums"
                  disabled={true}
           
                  style={{ display: 'none' }} // Hides the field
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.location.lat}
                  // placeholder="Identifier"
                  // onChange={(e) => handleChange('identifier', e.target.value)}
                />
              </Grid>

              <Grid item xs={6} sm={6} md={6} lg={6}>
              <TextField
                  // id="identifier"
                  // name="location"
                  label="Ģeogrāfiskais garums"
                  disabled={true}
                  style={{ display: 'none' }} // Hides the field
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.location.lng}
                  // placeholder="Identifier"
                  // onChange={(e) => handleChange('identifier', e.target.value)}
                />
              </Grid>

            {/* Date Field */}
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <TextField
                  // required
                  id="date"
                  name="date"
                  label="Datums"
                  type="date"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                />
            </Grid>
            
            {/* Time Field */}
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <TextField
                  // required
                  id="time"
                  name="time"
                  label="Laiks"
                  type="time"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.time}
                  onChange={(e) => handleChange('time', e.target.value)}
                />
            </Grid>

            {/* Pattern Field2 */}
            <Grid item xs={12} sm={12} md={6} lg={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="pattern-label" shrink>
                  Kažoka raksts
                  </InputLabel>
                  <Select
                    labelId="pattern-label"
                    id="pattern"
                    value={formState.pattern}
                    onChange={(e) => handleChange('pattern', e.target.value)}
                    label="Kažoka raksts"
                    notched
                  >
                    {PATTERN_CHOICES.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formState.pattern && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('pattern')} // Pass the field name here
                      sx={{
                        position: 'absolute',
                        right: 8, // Adjust as needed
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1, // Ensure it is on top of the select
                        backgroundColor: '#f5f5f5', // Light gray background
                        '&:hover': {
                          backgroundColor: '#e0e0e0', // Slightly darker on hover
                        },
                        borderRadius: '50%', // Round button
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
                      }}
                    >
                      <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                    </IconButton>
                  )}
                </FormControl>
            </Grid>

            {/* Pattern Field */}
            {/* <Grid item xs={12}>
                <FormControl component="fieldset">
                 
                  <Typography
                    variant="body1"
                    style={{ fontWeight: '500' }}
                    gutterBottom
                    textAlign="left"
                  >

                    Kažoka raksts
                  </Typography>
                  <RadioGroup
  style={{ display: 'flex !important', flexDirection: 'row' }}
  value={formState.pattern}
  onChange={(e) => handleChange('pattern', e.target.value)}
>
  {PATTERN_CHOICES.map((pattern) => (
    <FormControlLabel
      key={pattern.value}
      value={pattern.value}
      control={<Radio />}
      label={pattern.label}
    />
  ))}
</RadioGroup>

           
                </FormControl>
            </Grid> */}

            {/* Primary Color Field */}
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="primary-color-label" shrink>Pamatkrāsa</InputLabel>
                <Select
                displayEmpty
                  labelId="primary-color-label"
                  value={formState.primary_color.hex || ''}
                  onChange={(e) => {
                    const selectedColor = COLOR_CHOICES.find(color => color.hex === e.target.value);
                    handleChange('primary_color', selectedColor || { hex: null, label: null, value: null });
                  }}
                  label="Pamatkrāsa"
                  renderValue={(selected) => {
                    const color = COLOR_CHOICES.find(color => color.hex === selected);
                    return color ? (
                      <Box display="flex" alignItems="center">
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: color.hex,
                            display: 'inline-block',
                            marginRight: 1,
                          }}
                        />
                        {color.label}
                      </Box>
                    ) : 'Izvēlieties krāsu';
                  }}
                >
                  {COLOR_CHOICES.map((color) => (
                    <MenuItem key={color.value} value={color.hex}>
                      <Box display="flex" alignItems="center">
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: color.hex,
                            display: 'inline-block',
                            marginRight: 1,
                          }}
                        />
                        {color.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Secondary Color Field */}
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="secondary-color-label" shrink>Sekundārā krāsa</InputLabel>
                <Select
                  labelId="secondary-color-label"
                  displayEmpty
                  disabled={formState.pattern === 1} // Disable if pattern is "1"
                  value={formState.secondary_color.hex || ''}
                  onChange={(e) => {
                    const selectedColor = COLOR_CHOICES.find(color => color.hex === e.target.value);
                    handleChange('secondary_color', selectedColor || { hex: null, label: null, value: null });

                  }}
                  label="Sekundārā krāsa"
                  renderValue={(selected) => {
                    const color = COLOR_CHOICES.find(color => color.hex === selected);
                    return color ? (
                      <Box display="flex" alignItems="center">
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: color.hex,
                            display: 'inline-block',
                            marginRight: 1,
                          }}
                        />
                        {color.label}
                      </Box>
                    ) : 'Izvēlieties krāsu';
                  }}
                >
                  {COLOR_CHOICES.map((color) => (
                    <MenuItem key={color.value} value={color.hex}>
                      <Box display="flex" alignItems="center">
                        <Box
                          sx={{
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: color.hex,
                            display: 'inline-block',
                            marginRight: 1,
                          }}
                        />
                        {color.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Phone Code Field */}
            <Grid item xs={4} sm={4} md={4} lg={4}>
            <FormControl fullWidth variant="outlined">
                  <InputLabel id="phoneCode-label" shrink>
                  Telefona kods
                  </InputLabel>
                  <Select
                    labelId="phoneCode-label"
                    id="phoneCode"
                    name="phone_code"
                    value={formState.phone_code}
                    onChange={(e) => handleChange('phone_code', e.target.value)}
                    label="Telefona kods"
                    notched
                  >
                    {PHONE_CODE_CHOICES.map((code) => (
                      <MenuItem key={code.value} value={code.value}>
                        {code.label}
                      </MenuItem>
                    ))}

                  </Select>
                  {formState.phoneCode && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('phoneCode')} // Pass the field name here
                      sx={{
                        position: 'absolute',
                        right: 8, // Adjust as needed
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 1, // Ensure it is on top of the select
                        backgroundColor: '#f5f5f5', // Light gray background
                        '&:hover': {
                          backgroundColor: '#e0e0e0', // Slightly darker on hover
                        },
                        borderRadius: '50%', // Round button
                        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
                      }}
                    >
                      <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                    </IconButton>
                  )}
                </FormControl>
            </Grid>

            {/* Phone Number Field */}
            <Grid item xs={8} sm={8} md={8} lg={8}>
                <TextField
                  id="phone"
                  name="phone"
                  label="Telefona numurs"
                  type="text"
                  fullWidth
                  placeholder="12345678"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.contact_phone}
                  onChange={(e) => handleChange('contact_phone', e.target.value)}
                />
            </Grid>
    
            {/* Notes Field */}
            <Grid item xs={12}>
                <TextField
                  id="notes"
                  name="notes"
                  label="Piezīmes"
                  fullWidth
                  multiline
                  rows={4}
                  variant="outlined"
                  value={formState.notes}
                  onChange={(e) => handleChange('notes', e.target.value)}
                  placeholder="Izskats uzvedība, īpaša medicīniskā aprūpe, zaudēšanas apstākļi vai citas būtiskas piezīmes."
                  InputLabelProps={{
                    shrink: true, 
                  }}
                />
            </Grid>


            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                style={{
                  marginLeft: 'auto',
                  display: 'flex',
                  backgroundColor: '#ffcb56',
                  color: 'rgba(0, 0, 0, 0.87)',
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
}

export default PetsAdd;