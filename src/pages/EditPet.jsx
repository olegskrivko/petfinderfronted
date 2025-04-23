// // import React, { useState, useEffect } from 'react';
// // import { useParams, useNavigate, Link } from 'react-router-dom';

// // import axios from 'axios';
// // import Grid from '@mui/material/Grid';
// // import TextField from '@mui/material/TextField';
// // import FormControl from '@mui/material/FormControl';
// // import InputLabel from '@mui/material/InputLabel';
// // import Select from '@mui/material/Select';
// // import MenuItem from '@mui/material/MenuItem';
// // import Typography from '@mui/material/Typography';
// // import Button from '@mui/material/Button';
// // import Box from '@mui/material/Box';
// // import CircularProgress from '@mui/material/CircularProgress';

// // import Alert from '@mui/material/Alert';
// // import IconButton from '@mui/material/IconButton';
// // import CloseIcon from '@mui/icons-material/Close';
// // // import ImageUploader from '../../components/pets/ImageUploader';
// // // import PetHealth from '../../components/petcard/PetHealth';
// // import Container from '@mui/material/Container';

// // // import { BASE_URL } from '../../middleware/config';
// // import LeafletEditPetMap from '../components/LeafletEditPetMap';
// // // import { AuthContext } from '../../middleware/AuthContext';
// // import { useAuth } from '../contexts/AuthContext';
// // import { STATUS_CHOICES, SPECIES_CHOICES, AGE_CHOICES_BY_SPECIES, SIZE_CHOICES, GENDER_CHOICES, BEHAVIOR_CHOICES, PHONE_CODE_CHOICES, COLOR_CHOICES, PATTERN_CHOICES } from '../constants/petOptions';


// // import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
// // import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// // const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
// // function EditPet() {
// //    const { user } = useAuth(); 
// //    const { id } = useParams(); // Get pet ID from URL
// //   const navigate = useNavigate(); // For redirecting after update
// // console.log("pet id", id)
// //    console.log("useeeer", user)
// // //   const { t } = useTranslation();
// // //   const { user } = useContext(AuthContext);
// // //   const { selectedLanguage } = useContext(LanguageContext);

// //   const getCurrentDate = () => {
// //     const now = new Date();
// //     return now.toISOString().slice(0, 10); // Returns date in YYYY-MM-DD format
// //   };

// //   const getCurrentTime = () => {
// //     const now = new Date();
// //     return now.toTimeString().slice(0, 5); // Returns time in HH:MM format
// //   };

// //    const [formState, setFormState] = useState({
// //      status: '',
// //      species: '',
// //      location: { lat: 56.946285, lng: 24.105078 },
     
// //      identifier: '',
// //      size: '',
// //      gender: '',
// //      behavior: '',
// //      age: '',
// //      breed: '',
// //      pattern: 1,
// //      primary_color: { hex: null, label: null, value: null },
// //      secondary_color: { hex: null, label: null, value: null },
// //      notes: '',
// //      contact_phone: '',
// //      phone_code: '',
// //      date: getCurrentDate(),
// //      time: getCurrentTime(),
// //      image: null,
// //      extra_image_1: null,
// //      extra_image_2: null,
// //      extra_image_3: null,
// //      extra_image_4: null,
// //  //     updatedStatus: '',
// //      isPublic: true,
// //      isImageBlurred: false,
// //      isClosed: false,
// //    });
// //   const [formErrors, setFormErrors] = useState({});
// //   const [imagePreview, setImagePreview] = useState(null);
// //   const [firstSighting, setFirstSighting] = useState(null);
// //   const [isFormActive, setIsFormActive] = useState(false);
  
// //   // const firstSighting = formState.sightings_history?.[0] || {};
// //   // useEffect(() => {
// //   //   if (firstSighting?.event_occurred_at) {
// //   //     const dateTime = new Date(firstSighting.event_occurred_at);
// //   //     const formattedDate = dateTime.toISOString().split("T")[0]; // "YYYY-MM-DD"
// //   //     const formattedTime = dateTime.toTimeString().slice(0, 5); // "HH:MM"
  
// //   //     setFormState((prevState) => ({
// //   //       ...prevState,
// //   //       date: prevState.date || formattedDate,
// //   //       time: prevState.time || formattedTime,
// //   //     }));
// //   //   }
// //   // }, [firstSighting.event_occurred_at]);
// //   useEffect(() => {
// //     console.log("formState.primary_color:", formState.primary_color);
// //   }, [formState]);
  
  
  
// //    // State for loading and errors
// //    const [loading, setLoading] = useState(true);
// //    const [error, setError] = useState(null);
// //    const [successMessage, setSuccessMessage] = useState('');

// //   const [ageChoices, setAgeChoices] = useState(AGE_CHOICES_BY_SPECIES[3]); // Default to "Cits"
// // // const [imagePreview, setImagePreview] = useState(null);
// //   const [extraImagesPreview, setExtraImagesPreview] = useState({
// //     image: null,
// //     extra_image_1: null,
// //     extra_image_2: null,
// //     extra_image_3: null,
// //     extra_image_4: null,
// //   });
// //   const [imageErrors, setImageErrors] = useState({
// //     image: null,
// //     extra_image_1: null,
// //     extra_image_2: null,
// //     extra_image_3: null,
// //     extra_image_4: null,
// //   });
// //   const [updatedStatusOptions, setUpdatedStatusOptions] = useState([]);


// //   const handleChange = (field, value) => {
// //     setFormState((prevState) => ({
// //       ...prevState,
// //       [field]: value,
// //     }));

// //     // Clear the error message for the field
// //     setFormErrors((prevErrors) => ({
// //       ...prevErrors,
// //       [field]: '', // Clear the error message for the field
// //     }));
// //   };


// //   const handleLocationChange = (coords) => {
// //     setFormState((prevState) => ({
// //       ...prevState,
// //       location: {
// //         lat: coords.lat,
// //         lng: coords.lng,
// //       },
// //     }));
// //   };


// //   const resizeAndCropImage = (file, callback) => {
// //     const reader = new FileReader();
// //     reader.onload = function (event) {
// //       const img = new Image();
// //       img.onload = function () {
// //         const canvas = document.createElement('canvas');
// //         const ctx = canvas.getContext('2d');

// //         // Set target dimensions for the canvas
// //         const targetAspectRatio = 4 / 3;
// //         const targetWidth = 800;
// //         const targetHeight = targetWidth / targetAspectRatio;

// //         // Calculate the source dimensions
// //         let srcX = 0,
// //           srcY = 0,
// //           srcWidth = img.width,
// //           srcHeight = img.height;

// //         if (img.width / img.height > targetAspectRatio) {
// //           // Source is wider than target aspect ratio
// //           srcWidth = img.height * targetAspectRatio;
// //           srcX = (img.width - srcWidth) / 2;
// //         } else {
// //           // Source is taller than target aspect ratio
// //           srcHeight = img.width / targetAspectRatio;
// //           srcY = (img.height - srcHeight) / 2;
// //         }

// //         // Set canvas dimensions
// //         canvas.width = targetWidth;
// //         canvas.height = targetHeight;

// //         // Draw image on canvas with cropping
// //         ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);

// //         // Convert canvas to Blob
// //         canvas.toBlob(
// //           (blob) => {
// //             callback(blob);
// //           },
// //           'image/jpeg',
// //           0.7,
// //         ); // Adjust quality as needed
// //       };
// //       img.src = event.target.result;
// //     };
// //     reader.readAsDataURL(file);
// //   };

// //   const handleImageUpload = (file) => {
// //     resizeAndCropImage(file, (resizedImage) => {
// //       setFormState((prevState) => ({
// //         ...prevState,
// //         image: resizedImage,
// //       }));
// //       const previewUrl = URL.createObjectURL(resizedImage);
// //       setImagePreview(previewUrl);
// //     });
// //   };

// //   // Cleanup image URL when component unmounts
// //   useEffect(() => {
// //     return () => {
// //       if (imagePreview) {
// //         URL.revokeObjectURL(imagePreview);
// //       }
// //     };
// //   }, [imagePreview]);

 

// //   // Fetch existing pet data
// //   useEffect(() => {
// //     const fetchPetData = async () => {
// //       console.log("hello")
// //       const accessToken = localStorage.getItem('access_token'); 
// //       if (!accessToken) {
// //         setError('You must be logged in to view shelters.');
// //         setLoading(false);
// //         return;
// //     }
// //       try {
     

// //             // ✅ Fetch data from the backend
// //             const response = await axios.get(`${API_BASE_URL}/pets/${id}/`, {
// //               headers: {
// //                 Authorization: `Bearer ${accessToken}`,
// //                 'Content-Type': 'application/json',
// //               },
// //             });

// //         console.log("🐶 Pet Data Fetched:", response.data); // Debugging line ✅
// //         //setFormState(response.data); // Set form data with API response
// //         // If `response.data` has `date` and `time` in the correct format, we don't need to do anything special
// //       setFormState((prevState) => ({
// //         ...prevState,
// //         ...response.data, // Spread the fetched data into the form state
// //         date: response.data.date || getCurrentDate(),  // Ensure default date if not in response
// //         time: response.data.time || getCurrentTime(),  // Ensure default time if not in response
// //         status: response.data.sightings_history[0].status,
// //         image: response.data.image,
// //         extra_image_1: response.data.extra_image_1,
// //         extra_image_2: response.data.extra_image_2,
// //         extra_image_3: response.data.extra_image_3,
// //         extra_image_4: response.data.extra_image_4,
// //         location: {
// //           lat: parseFloat(response.data.sightings_history[0].latitude), 
// //           lng: parseFloat(response.data.sightings_history[0].longitude)
// //         },
// //       }));
// //         setLoading(false);
// //       } catch (err) {
// //         setError('Failed to fetch pet data.');
// //         setLoading(false);
// //       }
// //     };
 
// //     fetchPetData();
// //   }, [id]);

// //   // Handle form submission (Update pet details)
// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     try {
// //       const accessToken = localStorage.getItem('access_token');

// //       await axios.put(`${API_BASE_URL}/pets/${id}/`, formState, {
// //         headers: {
// //           Authorization: `Bearer ${accessToken}`,
// //         },
// //       });

// //       setSuccessMessage('Pet details updated successfully!');
// //       setTimeout(() => navigate(`/pets/${id}`), 2000); // Redirect after success
// //     } catch (err) {
// //       setError('Failed to update pet details.');
// //     }
// //   };
// //   const getImageBackground = (field) => {
// //     const imageUrl = field === "main_image" ? imagePreview : extraImagesPreview[field];
// //     return imageUrl ? `url(${imageUrl}) center/cover` : "#f5f5f5";
// //   };
// //   const handleClearSelect = (field) => {
// //     setFormState((prevState) => ({
// //       ...prevState,
// //       [field]: '', // Reset the specified field
// //     }));
// //   };

// //   // const handleClearSelect = () => {
// //   //   handleChange('size', ''); // Clear the select value
// //   // };
// //    /** Update age choices when species changes */
// //    useEffect(() => {
// //     setAgeChoices(AGE_CHOICES_BY_SPECIES[formState.species] || AGE_CHOICES_BY_SPECIES[3]); 
// //   }, [formState.species]);
// //   // Function to get error message for a specific field
// //   const getErrorMessage = (field) => {
// //     return formErrors[field] ? formErrors[field].msg : '';
// //   };
// //   if (loading) return <CircularProgress />;
// //   if (error) return <Alert severity="error">{error}</Alert>;
// //   return (
// //     <React.Fragment>
// //                    <Container
// //                                                                 component="main"
// //                                                                 sx={{
// //                                                                   flexGrow: 1,
// //                                                                   py: '2rem',
// //                                                                   // pb: '2rem',
// //                                                                   width: '100%',
// //                                                                   overflowX: 'hidden',
// //                                                                 }}
// //                                                      >
// //       <Grid container spacing={2} my={2}>
 
        
  

       

// //         <Grid item xs={12}>
       
// //         {successMessage && <Alert severity="success">{successMessage}</Alert>}

// //           <Typography variant="h4" gutterBottom textAlign="center">
// //           Mainīt informāciju par mājdzīvnieku
// //           </Typography>

 
// //           <form onSubmit={handleSubmit}>
// //             <Grid container spacing={2}>
// //               <Grid item xs={12}>
// //                 <Typography
// //                   variant="body1"
// //                   style={{ fontWeight: '500' }}
// //                   gutterBottom
// //                   textAlign="left"
// //                 >
// //                   Mājdzīvnieka raksturojums
// //                 </Typography>
// //               </Grid>
// //                           {/* Status Field */}
// //                           <Grid item xs={12} sm={12} md={6} lg={6}>
// //                             <FormControl fullWidth variant="outlined">
// //                               <InputLabel id="status-label" shrink>
// //                                 Statuss
// //                               </InputLabel>
// //                               <Select
// //                                 labelId="status-label"
// //                                 disabled
// //                                 value={formState.status}
// //                                 onChange={(e) => handleChange('status', e.target.value)}
// //                                 label="Statuss"
// //                                 notched
// //                               >
// //                                 {STATUS_CHOICES.map((option) => (
// //                                   <MenuItem key={option.value} value={option.value}>
// //                                     {option.label}
// //                                   </MenuItem>
// //                                 ))}
// //                               </Select>
// //                             </FormControl>
// //                           </Grid>
              
// //                           {/* Species Field */}
// //                           <Grid item xs={12} sm={12} md={6} lg={6}>
// //                             <FormControl fullWidth variant="outlined">
// //                               <InputLabel id="species-label" shrink>
// //                                 Suga
// //                               </InputLabel>
// //                               <Select
// //                                 labelId="species-label"
// //                                 disabled
// //                                 value={formState.species}
// //                                 onChange={(e) => handleChange('species', e.target.value)}
// //                                 label="Suga"
// //                                 notched
// //                               >
// //                                 {SPECIES_CHOICES.map((option) => (
// //                                   <MenuItem key={option.value} value={option.value}>
// //                                     {option.label}
// //                                   </MenuItem>
// //                                 ))}
// //                               </Select>
// //                             </FormControl>
// //                           </Grid>
              
// //                           {/* Identifier Field */}
// //                           <Grid item xs={12} sm={12} md={6} lg={6}>
// //                             <TextField
// //                                 id="identifier"
// //                                 disabled
// //                                 name="identifier"
// //                                 label="Unikāls identifikators"
// //                                 fullWidth
// //                                 InputLabelProps={{
// //                                   shrink: true,
// //                                 }}
// //                                 variant="outlined"
// //                                 value={formState.identifier}
// //                                 // placeholder="Mikročipa numurs"
// //                                 onChange={(e) => handleChange('identifier', e.target.value)}
// //                               />
// //                             </Grid>
              
// //                           {/* Size Field */}
// //                           <Grid item xs={12} sm={12} md={6} lg={6}>
// //                               <FormControl fullWidth variant="outlined">
// //                                 <InputLabel id="size-label" shrink>
// //                                 Izmērs
// //                                 </InputLabel>
              
// //                                 <Select
// //                                   labelId="size-label"
// //                                   id="size"
// //                                   disabled
// //                                   value={formState.size}
// //                                   label="Izmērs"
// //                                   notched
// //                                   onChange={(e) => handleChange('size', e.target.value)}
// //                                   error={Boolean(formErrors.size)}
// //                                   fullWidth
// //                                 >
// //                                   {SIZE_CHOICES.map((option) => (
// //                                     <MenuItem key={option.value} value={option.value}>
// //                                       {option.label}
// //                                     </MenuItem>
// //                                   ))}
// //                                 </Select>
// //                                 {isFormActive && formState.size && (
// //                                   <IconButton
// //                                     size="small"
// //                                     onClick={() => handleClearSelect('size')} // Pass the field name here
// //                                     sx={{
// //                                       position: 'absolute',
// //                                       right: 8, // Adjust as needed
// //                                       top: '50%',
// //                                       transform: 'translateY(-50%)',
// //                                       zIndex: 1, // Ensure it is on top of the select
// //                                       backgroundColor: '#f5f5f5', // Light gray background
// //                                       '&:hover': {
// //                                         backgroundColor: '#e0e0e0', // Slightly darker on hover
// //                                       },
// //                                       borderRadius: '50%', // Round button
// //                                       boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
// //                                     }}
// //                                   >
// //                                     <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
// //                                   </IconButton>
// //                                 )}
// //                               </FormControl>
// //                           </Grid>
              
// //                           {/* Gender Field */}
// //                           <Grid item xs={12} sm={12} md={6} lg={6}>
// //                             <FormControl fullWidth variant="outlined">
// //                               <InputLabel id="gender-label" shrink>
// //                                 Dzimums
// //                                 </InputLabel>
// //                                 <Select
// //                                   labelId="gender-label"
// //                                   disabled
// //                                   id="gender"
// //                                   value={formState.gender}
// //                                   label="Dzimums"
// //                                   notched
// //                                   onChange={(e) => handleChange('gender', e.target.value)}
// //                                 >
// //                                   {GENDER_CHOICES.map((option) => (
// //                                     <MenuItem key={option.value} value={option.value}>
// //                                       {option.label}
// //                                     </MenuItem>
// //                                   ))}
// //                                 </Select>
// //                                 {isFormActive && formState.gender && (
// //                                   <IconButton
// //                                     size="small"
// //                                     onClick={() => handleClearSelect('gender')} // Pass the field name here
// //                                     sx={{
// //                                       position: 'absolute',
// //                                       right: 8, // Adjust as needed
// //                                       top: '50%',
// //                                       transform: 'translateY(-50%)',
// //                                       zIndex: 1, // Ensure it is on top of the select
// //                                       backgroundColor: '#f5f5f5', // Light gray background
// //                                       '&:hover': {
// //                                         backgroundColor: '#e0e0e0', // Slightly darker on hover
// //                                       },
// //                                       borderRadius: '50%', // Round button
// //                                       boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
// //                                     }}
// //                                   >
// //                                     <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
// //                                   </IconButton>
// //                                 )}
// //                               </FormControl>
// //                           </Grid>
              
// //                           {/* Behavior Field */}
// //                           <Grid item xs={12} sm={12} md={6} lg={6}>
// //                               <FormControl fullWidth variant="outlined">
// //                                 <InputLabel id="behavior-label" shrink>
// //                                 Uzvedība
// //                                 </InputLabel>
// //                                 <Select
// //                                   labelId="behavior-label"
// //                                   id="behavior"
// //                                   disabled
// //                                   value={formState.behavior}
// //                                   onChange={(e) => handleChange('behavior', e.target.value)}
// //                                   label="Uzvedība"
// //                                   notched
// //                                 >
// //                                   {BEHAVIOR_CHOICES.map((option) => (
// //                                     <MenuItem key={option.value} value={option.value}>
// //                                       {option.label}
// //                                     </MenuItem>
// //                                   ))}
// //                                 </Select>
// //                                 {isFormActive && formState.behavior && (
// //                                   <IconButton
// //                                     size="small"
// //                                     onClick={() => handleClearSelect('behavior')} // Pass the field name here
// //                                     sx={{
// //                                       position: 'absolute',
// //                                       right: 8, // Adjust as needed
// //                                       top: '50%',
// //                                       transform: 'translateY(-50%)',
// //                                       zIndex: 1, // Ensure it is on top of the select
// //                                       backgroundColor: '#f5f5f5', // Light gray background
// //                                       '&:hover': {
// //                                         backgroundColor: '#e0e0e0', // Slightly darker on hover
// //                                       },
// //                                       borderRadius: '50%', // Round button
// //                                       boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
// //                                     }}
// //                                   >
// //                                     <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
// //                                   </IconButton>
// //                                 )}
// //                               </FormControl>
// //                           </Grid>
           
// //                           {/* Age Field */}
// //                           <Grid item xs={12} sm={12} md={6} lg={6}>
// //                             <FormControl fullWidth variant="outlined">
// //                               <InputLabel id="age-label" shrink>
// //                                   Vecums
// //                                   </InputLabel>
// //                                   <Select
// //                                     labelId="age-label"
                                    
// //                                     id="age"
// //                                     value={formState.age}
// //                                     // disabled={
// //                                     //   formState.species === null ||
// //                                     //   formState.species === '' ||
// //                                     //   formState.species === undefined 
// //                                     // }
// //                                     disabled
// //                                     label="Vecums"
// //                                     notched
// //                                     onChange={(e) => handleChange('age', e.target.value)}
// //                                   >
// //                                     {ageChoices.map((option) => (
// //                                       <MenuItem key={option.value} value={option.value}>
// //                                         {option.label}
// //                                       </MenuItem>
// //                                     ))}
// //                                   </Select>
// //                                   {isFormActive && formState.age && (
// //                                     <IconButton
// //                                       size="small"
// //                                       onClick={() => handleClearSelect('age')} // Pass the field name here
                                      
// //                                       sx={{
// //                                         position: 'absolute',
// //                                         right: 8, // Adjust as needed
// //                                         top: '50%',
// //                                         transform: 'translateY(-50%)',
// //                                         zIndex: 1, // Ensure it is on top of the select
// //                                         backgroundColor: '#f5f5f5', // Light gray background
// //                                         '&:hover': {
// //                                           backgroundColor: '#e0e0e0', // Slightly darker on hover
// //                                         },
// //                                         borderRadius: '50%', // Round button
// //                                         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
// //                                       }}
// //                                     >
// //                                       <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
// //                                     </IconButton>
// //                                   )}
// //                             </FormControl>
// //                           </Grid>
                          
// //                           {/* Breed Field */}
// //                           <Grid item xs={12} sm={12} md={6} lg={6}>
// //                             <TextField
// //                                 id="breed"
// //                                 name="breed"
// //                                 disabled
// //                                 label="Sķirne"
// //                                 fullWidth
// //                                 InputLabelProps={{
// //                                   shrink: true,
// //                                 }}
// //                                 variant="outlined"
// //                                 value={formState.breed}
// //                                 placeholder=""
// //                                 onChange={(e) => handleChange('breed', e.target.value)}
// //                               />
// //                           </Grid>
              
              
              
// //                      {/* Pattern Field2 */}
// //                      <Grid item xs={12} sm={12} md={6} lg={4}>
// //                               <FormControl fullWidth variant="outlined">
// //                                 <InputLabel id="pattern-label" shrink>
// //                                 Kažoka raksts
// //                                 </InputLabel>
// //                                 <Select
// //                                   labelId="pattern-label"
// //                                   disabled
// //                                   id="pattern"
// //                                   value={formState.pattern}
// //                                   onChange={(e) => handleChange('pattern', e.target.value)}
// //                                   label="Kažoka raksts"
// //                                   notched
// //                                 >
// //                                   {PATTERN_CHOICES.map((option) => (
// //                                     <MenuItem key={option.value} value={option.value}>
// //                                       {option.label}
// //                                     </MenuItem>
// //                                   ))}
// //                                 </Select>
                              
// //                               </FormControl>
// //                           </Grid>
              
              
// //                           {/* Primary Color Field */}
// //                           <Grid item xs={12} sm={12} md={6} lg={4}>
// //                             <FormControl fullWidth variant="outlined">
// //                               <InputLabel id="primary-color-label" shrink>Pamatkrāsa</InputLabel>
// //                               <Select
// //   displayEmpty
// //   labelId="primary-color-label"
// //   disabled
// //   value={COLOR_CHOICES.find(color => color.value === formState.primary_color)?.hex || ''}  // Use hex here
// //   onChange={(e) => {
// //     const selectedColor = COLOR_CHOICES.find(color => color.hex === e.target.value);
// //     handleChange('primary_color', selectedColor ? selectedColor.value : null); // Set the `value`, not the hex
// //   }}
// //   label="Pamatkrāsa"
// //   renderValue={(selected) => {
// //     if (!selected) return 'Izvēlieties krāsu';  // If no color is selected, show placeholder
// //     const color = COLOR_CHOICES.find(color => color.hex === selected);
// //     return color ? (
// //       <Box display="flex" alignItems="center">
// //         <Box
// //           sx={{
// //             width: 24,
// //             height: 24,
// //             borderRadius: '50%',
// //             backgroundColor: color.hex,
// //             display: 'inline-block',
// //             marginRight: 1,
// //           }}
// //         />
// //         {color.label}
// //       </Box>
// //     ) : 'Izvēlieties krāsu';
// //   }}
// // >
// //   {COLOR_CHOICES.map((color) => (
// //     <MenuItem key={color.value} value={color.hex}>
// //       <Box display="flex" alignItems="center">
// //         <Box
// //           sx={{
// //             width: 24,
// //             height: 24,
// //             borderRadius: '50%',
// //             backgroundColor: color.hex,
// //             display: 'inline-block',
// //             marginRight: 1,
// //           }}
// //         />
// //         {color.label}
// //       </Box>
// //     </MenuItem>
// //   ))}
// // </Select>

// //                               {/* <Select
// //                               displayEmpty
// //                                 labelId="primary-color-label"
// //                                 value={formState.primary_color.hex || ''}
                                
// //                                 onChange={(e) => {
// //                                   const selectedColor = COLOR_CHOICES.find(color => color.hex === e.target.value);
// //                                   handleChange('primary_color', selectedColor || { hex: null, label: null, value: null });
// //                                 }}
// //                                 label="Pamatkrāsa"
// //                                 renderValue={(selected) => {
// //                                   const color = COLOR_CHOICES.find(color => color.hex === selected);
// //                                   return color ? (
// //                                     <Box display="flex" alignItems="center">
// //                                       <Box
// //                                         sx={{
// //                                           width: 24,
// //                                           height: 24,
// //                                           borderRadius: '50%',
// //                                           backgroundColor: color.hex,
// //                                           display: 'inline-block',
// //                                           marginRight: 1,
// //                                         }}
// //                                       />
// //                                       {color.label}
// //                                     </Box>
// //                                   ) : 'Izvēlieties krāsu';
// //                                 }}
// //                               >
// //                                 {COLOR_CHOICES.map((color) => (
// //                                   <MenuItem key={color.value} value={color.hex}>
// //                                     <Box display="flex" alignItems="center">
// //                                       <Box
// //                                         sx={{
// //                                           width: 24,
// //                                           height: 24,
// //                                           borderRadius: '50%',
// //                                           backgroundColor: color.hex,
// //                                           display: 'inline-block',
// //                                           marginRight: 1,
// //                                         }}
// //                                       />
// //                                       {color.label}
// //                                     </Box>
// //                                   </MenuItem>
// //                                 ))}
// //                               </Select> */}
// //                             </FormControl>
// //                           </Grid>
              
// //                           {/* Secondary Color Field */}
// //                           <Grid item xs={12} sm={12} md={6} lg={4}>
// //                             <FormControl fullWidth variant="outlined">
// //                               <InputLabel id="secondary-color-label" shrink>Sekundārā krāsa</InputLabel>
// //                               <Select
// //   displayEmpty
// //   disabled
// //   labelId="secondary-color-label"
// //   value={COLOR_CHOICES.find(color => color.value === formState.secondary_color)?.hex || ''}  // Use hex here
// //   onChange={(e) => {
// //     const selectedColor = COLOR_CHOICES.find(color => color.hex === e.target.value);
// //     handleChange('secondary_color', selectedColor ? selectedColor.value : null); // Set the `value`, not the hex
// //   }}
// //   label="Pamatkrāsa"
// //   renderValue={(selected) => {
// //     if (!selected) return 'Izvēlieties krāsu';  // If no color is selected, show placeholder
// //     const color = COLOR_CHOICES.find(color => color.hex === selected);
// //     return color ? (
// //       <Box display="flex" alignItems="center">
// //         <Box
// //           sx={{
// //             width: 24,
// //             height: 24,
// //             borderRadius: '50%',
// //             backgroundColor: color.hex,
// //             display: 'inline-block',
// //             marginRight: 1,
// //           }}
// //         />
// //         {color.label}
// //       </Box>
// //     ) : 'Izvēlieties krāsu';
// //   }}
// // >
// //   {COLOR_CHOICES.map((color) => (
// //     <MenuItem key={color.value} value={color.hex}>
// //       <Box display="flex" alignItems="center">
// //         <Box
// //           sx={{
// //             width: 24,
// //             height: 24,
// //             borderRadius: '50%',
// //             backgroundColor: color.hex,
// //             display: 'inline-block',
// //             marginRight: 1,
// //           }}
// //         />
// //         {color.label}
// //       </Box>
// //     </MenuItem>
// //   ))}
// // </Select>

// //                               {/* <Select
// //                                 labelId="secondary-color-label"
// //                                 displayEmpty
// //                                 disabled={formState.pattern === 1} // Disable if pattern is "1"
// //                                 value={formState.secondary_color.hex || ''}
// //                                 onChange={(e) => {
// //                                   const selectedColor = COLOR_CHOICES.find(color => color.hex === e.target.value);
// //                                   handleChange('secondary_color', selectedColor || { hex: null, label: null, value: null });
              
// //                                 }}
// //                                 label="Sekundārā krāsa"
// //                                 renderValue={(selected) => {
// //                                   const color = COLOR_CHOICES.find(color => color.hex === selected);
// //                                   return color ? (
// //                                     <Box display="flex" alignItems="center">
// //                                       <Box
// //                                         sx={{
// //                                           width: 24,
// //                                           height: 24,
// //                                           borderRadius: '50%',
// //                                           backgroundColor: color.hex,
// //                                           display: 'inline-block',
// //                                           marginRight: 1,
// //                                         }}
// //                                       />
// //                                       {color.label}
// //                                     </Box>
// //                                   ) : 'Izvēlieties krāsu';
// //                                 }}
// //                               >
// //                                 {COLOR_CHOICES.map((color) => (
// //                                   <MenuItem key={color.value} value={color.hex}>
// //                                     <Box display="flex" alignItems="center">
// //                                       <Box
// //                                         sx={{
// //                                           width: 24,
// //                                           height: 24,
// //                                           borderRadius: '50%',
// //                                           backgroundColor: color.hex,
// //                                           display: 'inline-block',
// //                                           marginRight: 1,
// //                                         }}
// //                                       />
// //                                       {color.label}
// //                                     </Box>
// //                                   </MenuItem>
// //                                 ))}
// //                               </Select> */}
// //                             </FormControl>
// //                           </Grid>
   

              
// //               {/* {translations.formTitles && translations.formTitles.petDetails} */}
// //               <Grid item xs={12} sm={12} md={12} lg={12}>
// //                 {/* <PetHealth formState={formState} setFormState={setFormState} /> */}
// //               </Grid>
// //               <Grid item xs={12}>
// //                 <Typography
// //                   variant="body1"
// //                   style={{ fontWeight: '500' }}
// //                   gutterBottom
// //                   textAlign="left"
// //                 >
// //                  Mājdzīvnieka atrašanās vieta
// //                 </Typography>
// //               </Grid>
              
// //               <Grid item xs={12}>
             
// //                 {/* <LeafletEditPetMap onLocationChange={handleLocationChange} location={formState.location}  /> */}
// //                 <LeafletEditPetMap location={formState.location} onLocationChange={handleLocationChange} isEditable={false} />

// //               </Grid>
     
// //               {/* {formState.sightings_history[0].event_occured_at} */}
  
// //             <Grid item xs={6} sm={6} md={6} lg={6}>
// //               <TextField
// //                   // id="identifier"
// //                   // name="location"
// //                   label="Ģeogrāfiskais platums"
// //                   disabled={true}
           
// //                   style={{ display: 'none' }} // Hides the field
// //                   fullWidth
// //                   InputLabelProps={{
// //                     shrink: true,
// //                   }}
// //                   variant="outlined"
// //                   // value={formState.location.lat}
// //                   // placeholder="Identifier"
// //                   // onChange={(e) => handleChange('identifier', e.target.value)}
// //                 />
// //               </Grid>

// //               <Grid item xs={6} sm={6} md={6} lg={6}>
// //               <TextField
// //                   // id="identifier"
// //                   // name="location"
// //                   label="Ģeogrāfiskais garums"
// //                   disabled={true}
// //                   style={{ display: 'none' }} // Hides the field
// //                   fullWidth
// //                   InputLabelProps={{
// //                     shrink: true,
// //                   }}
// //                   variant="outlined"
// //                   // value={formState.location.lng}
// //                   // placeholder="Identifier"
// //                   // onChange={(e) => handleChange('identifier', e.target.value)}
// //                 />
// //               </Grid>
// //               {/* {firstSighting.event_occurred_at} */}
// //               {/* {firstSighting.event_occured_at} */}
// //             {/* Date Field */}
// //             <Grid item xs={6} sm={6} md={6} lg={6}>
// //                 <TextField
// //                   // required
// //                   error={!!formErrors.date}
// //                   helperText={formErrors.date || ""}
// //                   id="date"
// //                   name="date"
// //                   label="Datums"
// //                   disabled
// //                   type="date"
// //                   fullWidth
// //                   InputLabelProps={{
// //                     shrink: true,
// //                   }}
// //                   variant="outlined"
// //                   value={formState.date || ""}
// //                   onChange={(e) => handleChange("date", e.target.value)}
// //                 />
// //             </Grid>
            
// //             {/* Time Field */}
// //             <Grid item xs={6} sm={6} md={6} lg={6}>
// //                 <TextField
// //                   // required
// //                   id="time"
// //                   name="time"
// //                   label="Laiks"
// //                   disabled
// //                   type="time"
// //                   fullWidth
// //                   InputLabelProps={{
// //                     shrink: true,
// //                   }}
// //                   variant="outlined"
// //                   value={formState.time || ""}
// //                   onChange={(e) => handleChange("time", e.target.value)}
// //                 />
// //             </Grid>

// //             {/* Phone Code Field */}
// //             <Grid item xs={4} sm={4} md={4} lg={4}>
// //             <FormControl fullWidth variant="outlined">
// //                   <InputLabel id="phone_code-label" shrink>
// //                   Telefona kods
// //                   </InputLabel>
// //                   <Select
// //                     labelId="phone_code-label"
// //                     id="phone_code"
// //                     name="phone_code"
// //                     readOnly
// //                     disabled
// //                     value={formState.phone_code}
// //                     onChange={(e) => handleChange('phone_code', e.target.value)}
// //                     label="Telefona kods"
// //                     notched
// //                   >
// //                     {PHONE_CODE_CHOICES.map((code) => (
// //                       <MenuItem key={code.value} value={code.value}>
// //                         {code.label}
// //                       </MenuItem>
// //                     ))}

// //                   </Select>
// //                   {/* {formState.phone_code && (
// //                     <IconButton
// //                       size="small"
// //                       onClick={() => handleClearSelect('phone_code')} // Pass the field name here
// //                       sx={{
// //                         position: 'absolute',
// //                         right: 8, // Adjust as needed
// //                         top: '50%',
// //                         transform: 'translateY(-50%)',
// //                         zIndex: 1, // Ensure it is on top of the select
// //                         backgroundColor: '#f5f5f5', // Light gray background
// //                         '&:hover': {
// //                           backgroundColor: '#e0e0e0', // Slightly darker on hover
// //                         },
// //                         borderRadius: '50%', // Round button
// //                         boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow
// //                       }}
// //                     >
// //                       <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
// //                     </IconButton>
// //                   )} */}
// //                 </FormControl>
// //             </Grid>

// //             {/* Phone Number Field */}
// //             <Grid item xs={8} sm={8} md={8} lg={8}>
// //                 <TextField
                
// //                   id="phone"
// //                   name="phone"
// //                   label="Telefona numurs"
// //                   type="text"
// //                   fullWidth
// //                   placeholder="12345678"
// //                   InputLabelProps={{
// //                     shrink: true,
// //                   }}
// //                   variant="outlined"
// //                   value={formState.contact_phone}
// //                   onChange={(e) => handleChange('contact_phone', e.target.value)}
// //                 />
// //             </Grid>
    
// //             {/* Notes Field */}
// //             <Grid item xs={12}>
// //                 <TextField
// //                   id="notes"
// //                   name="notes"
// //                   label="Piezīmes"
// //                   fullWidth
// //                   multiline
// //                   rows={4}
// //                   variant="outlined"
// //                   value={formState.notes}
               
// //                   // onChange={(e) => handleChange('notes', e.target.value)}
// //                   onChange={(e) => {
// //                     const value = e.target.value.slice(0, 250); // ✅ Limit input to 250 characters
// //                     handleChange("notes", value);
// //                   }}
// //                   placeholder="Norādiet būtisku informāciju par izskatu, veselības stāvokli, zaudēšanas apstākļiem vai citus svarīgus faktus"
// //                   InputLabelProps={{
// //                     shrink: true, 
// //                   }}
// //                 />
// //             </Grid>
// //             <Grid item xs={12}>
// //     <Grid container spacing={2}>
// //       {[formState.image, formState.extra_image_1, formState.extra_image_2, formState.extra_image_3].map((field, index) => {
// //         const previewUrl = extraImagesPreview[`extra_image_${index}`] || field; // Fallback to existing image if no preview
// //         return (
// //           <Grid item xs={6} md={3} key={field || index}>
// //             <input
// //               accept="image/*"
// //               id={field || `extra_image_${index}`}  // Use a unique ID
// //               type="file"
// //               onChange={(e) => handleImageUpload(e.target.files[0], `extra_image_${index}`)}
// //               style={{ display: "none" }}
// //             />
// //             <label htmlFor={field || `extra_image_${index}`}>
// //               <Box
// //                 sx={{
// //                   width: "100%",
// //                   aspectRatio: "4 / 3",
// //                   background: previewUrl ? `url(${previewUrl}) center/cover` : "#f5f5f5", // Show background image if available
// //                   border: `2px dashed ${imageErrors[field] ? "red" : "#aaa"}`,
// //                   display: "flex",
// //                   flexDirection: "column",
// //                   alignItems: "center",
// //                   justifyContent: "center",
// //                   textAlign: "center",
// //                   cursor: "pointer",
// //                   borderRadius: "12px",
// //                   color: "#666",
// //                   transition: "border 0.3s ease",
// //                   "&:hover": { borderColor: "#666" },
// //                 }}
// //               >
// //                 {!previewUrl && (
// //                   <>
// //                     <AddPhotoAlternateIcon sx={{ fontSize: 40, mb: 1, color: "#999" }} />
// //                     <Typography variant="body2">Izvēlēties bildi</Typography>
// //                     <Typography variant="caption">Atļautais formāts: JPG, Max 5MB</Typography>
// //                   </>
// //                 )}
// //               </Box>
// //             </label>
// //             {/* Error Message */}
// //             {imageErrors[field] && (
// //               <Typography color="red" variant="body2" mt={1} textAlign="center">
// //                 {imageErrors[field]}
// //               </Typography>
// //             )}
// //             {/* Success Message */}
// //             {!imageErrors[field] && previewUrl && (
// //               <Typography color="green" variant="body2" mt={1} textAlign="center">
// //                 ✅ Bilde veiksmīgi augšupielādēta!
// //               </Typography>
// //             )}
// //           </Grid>
// //         );
// //       })}
// //     </Grid>
// //   </Grid>
// //             {/* Buttons */}
// //             <Grid item xs={12} mt={2}>
// //               <Box textAlign="center" style={{ display: "flex", justifyContent: "space-between" }} >
// //                 <Button
// //                   variant="outlined"
// //                   color="primary"
// //                   startIcon={<ArrowBackIcon />}
// //                   component={Link}
// //                   to={`/user-profile/pets`}
// //                   style={{ textDecoration: "none", color: "inherit" }}
// //                 >
// //                   Atpakaļ
// //                 </Button>
// //                 <Button
// //                       type="submit"
// //                       variant="contained"
// //                       style={{
// //                         marginLeft: 'auto',
// //                         display: 'flex',
// //                         backgroundColor: '#ffcb56',
// //                         color: 'rgba(0, 0, 0, 0.87)',
// //                       }}
// //                     >
// //                       Saglabāt
// //                 </Button>
// //               </Box>
// //             </Grid>
// //             </Grid>
// //           </form>
// //         </Grid>
// //       </Grid>
// //       </Container>
// //     </React.Fragment>
// //   );
// // }



// // export default EditPet;

// import React, { useState, useEffect  } from 'react';
// import {
//   Box,
//   Button,
//   Container,
//   Typography,
// } from '@mui/material';
// import axios from 'axios';
// import { useNavigate, Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
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
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
// const steps = [
// "Dzīvnieka raksturojums",
//   "Atrašanās vieta",
//   "Attēli",
//   "Izskats",
//   "Kontakta informācija",

// ];

// const EditPet = () => {
//   const { petId } = useParams();
//   const navigate = useNavigate();
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
//     images: {    
//       pet_image_1: "",
//       pet_image_2: "",
//       pet_image_3: "",
//       pet_image_4: "" },
//     appearance: {
//       primary_color: { hex: "", label: "", value: "" },
//       secondary_color: { hex: "", label: "", value: "" },
//       size: "",
//       age: "",
//       pattern: "",
//     },
//     contact: { contact_phone: "", phone_code: "371",  notes: "" },
//   });
//   useEffect(() => {
//     const fetchPet = async () => {
//       try {
//         const accessToken = localStorage.getItem('access_token');
//         const response = await axios.get(`${API_BASE_URL}/pets/${petId}/`, {
//           headers: { Authorization: `Bearer ${accessToken}` },
//         });
//         const data = response.data;
  
//         setFormState({
//           location: {
//             lat: data.latitude,
//             lng: data.longitude,
//             date: data.date,
//             time: data.time,
//           },
//           characteristics: {
//             status: data.status,
//             species: data.species,
//             breed: data.breed,
//             identifier: data.identifier,
//             gender: data.gender,
//             age: data.age,
//           },
//           images: {
//             pet_image_1: null,
//             pet_image_2: null,
//             pet_image_3: null,
//             pet_image_4: null,
//           },
//           appearance: {
//             primary_color: { value: data.primary_color },
//             secondary_color: { value: data.secondary_color },
//             size: data.size,
//             pattern: data.pattern,
//             age: data.age,
//           },
//           contact: {
//             phone_code: data.phone_code,
//             contact_phone: data.contact_phone,
//             notes: data.notes,
//           },
//         });
  
//       } catch (err) {
//         console.error("❌ Failed to load pet data", err);
//       }
//     };
  
//     fetchPet();
//   }, [petId]);
//     const [extraImagesPreview, setExtraImagesPreview] = useState({
//       pet_image_1: "",
//       pet_image_2: "",
//       pet_image_3: "",
//       pet_image_4: "",
//     });
//     const [imageErrors, setImageErrors] = useState({
//       pet_image_1: "",
//       pet_image_2: "",
//       pet_image_3: "",
//       pet_image_4: "",
//     });

//   const handleNext = () => {
//     if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
//     else {
//       console.log("Submit form here")
//       handleSubmit();

//     };
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

//   const handleSubmit = async (event) => {
//     event?.preventDefault(); // make it optional for programmatic calls

//     console.log('🚀 Submitting form:', formState);

//     try {
//       const accessToken = localStorage.getItem('access_token');
//       const formData = new FormData();

//       const latitude = parseFloat(formState.location.lat).toFixed(6);
//       const longitude = parseFloat(formState.location.lng).toFixed(6);

//       if (isNaN(latitude) || isNaN(longitude)) {
//         console.error("❌ Invalid latitude or longitude");
//         return;
//       }

//       // Append form fields
//       formData.append('status', formState.characteristics.status);
//       formData.append('species', formState.characteristics.species);
//       formData.append('identifier', formState.characteristics.identifier);
//       formData.append('size', formState.appearance.size);
//       formData.append('gender', formState.characteristics.gender);
//       formData.append('age', formState.characteristics.age);
//       formData.append('breed', formState.characteristics.breed);

//       formData.append('date', formState.location.date);
//       formData.append('time', formState.location.time);

//       formData.append('latitude', latitude);
//       formData.append('longitude', longitude);
//       formData.append('pattern', formState.appearance.pattern);
//       formData.append('primary_color', formState.appearance.primary_color.value);
//       formData.append('secondary_color', formState.appearance.secondary_color.value);
//       formData.append('notes', formState.contact.notes);
//       formData.append('phone_code', formState.contact.phone_code);
//       formData.append('contact_phone', formState.contact.contact_phone);

//       // Append image if exists
//               // Append images
//               ['pet_image_1', 'pet_image_2', 'pet_image_3', 'pet_image_4'].forEach((field) => {
//                 if (formState.images[field]) {
//                   formData.append(`${field}_media`, formState.images[field]);
//                 }
//               });
  

//       // Optionally, if you have a user context:
//       const userId = localStorage.getItem('user_id'); // or from context
//       if (userId) {
//         formData.append('author', userId);
//       }

//       console.log('📦 FormData to send:', Object.fromEntries(formData.entries()));

//       const response = await axios.post(`${API_BASE_URL}/pets/${petId}/`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           Authorization: `Bearer ${accessToken}`,
//         },
//       });

//       console.log('✅ Pet successfully added!', response.data);
//       navigate(`/pets/${response.data.id}`);
//     } catch (error) {
//       console.error('❌ Error sending pet data:', error.response?.data || error.message);
//     }
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
    
//      <Container component="main" maxWidth="lg" sx={{ paddingLeft: 0, paddingRight: 0 }}>

//     <Box sx={{ display: 'flex', alignItems: 'center',  }}>
//       <Box sx={{ width: 70, height: 70, mr: 2 }}>
//         <CircularProgressbar
//           value={progress}
//           text={`${activeStep + 1}/${steps.length}`}
//           styles={buildStyles({
//             textSize: "18px",
//             pathColor: "#1976d2",
//             textColor: "#333",
//             trailColor: "#ddd",
//           })}
//         />
//       </Box>
//       <Box>
//       <Typography variant="h6">{steps[activeStep]}</Typography>
//        {/* Subtitle: Next Step */}
//     {activeStep < steps.length - 1 && (
//       <Typography variant="body2" sx={{ mt: 1, color: 'gray' }}>
//         Nākamais solis: {steps[activeStep + 1]} {/* Next step name as subtitle */}
//       </Typography>
      
//     )}
//     </Box>
//     </Box>

//     {/* Middle section: Step Content (this should take available space) */}
//     <Box sx={{ flexGrow: 1, mb: 3 }}>
//       {getStepContent(activeStep)}
//     </Box>

//     {/* Bottom section: Sticky Buttons */}
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         px: 2,
//         pt: 2,
//         padding: "0 !important" 
//         // borderTop: '1px solid #eee',
//       }}
//     >
//       <Button
//         variant="outlined"
//         disabled={activeStep === 0}
//         onClick={handleBack}
//         sx={{ flex: 1, mr: 1 }}
//       >
//         Back
//       </Button>
//       <Button
//         variant="contained"
//         onClick={handleNext}
//         sx={{ flex: 1, ml: 1 }}
//       >
//         {/* {activeStep === steps.length - 1 ? "Submit" : "Next"} */}
//         {activeStep === steps.length - 1 ? "Save Changes" : "Next"}
//       </Button>
//     </Box>
//   </Container>
//   );
// };

// export default EditPet;
import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import StepLocation from "./StepLocation";
import StepCharacteristics from "./StepCharacteristics";
import StepLostTime from "./StepLostTime";
import StepImages from "./StepImages";
import StepContact from "./StepContact";
import StepAppearance from "./StepAppearance";

import { getCurrentDate, getCurrentTime } from '../utils/formHelpers';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const steps = [
  "Dzīvnieka raksturojums",
  "Atrašanās vieta",
  "Attēli",
  "Izskats",
  "Kontakta informācija",
];

const EditPet = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [activeStep, setActiveStep] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [formState, setFormState] = useState({
    location: { lat: 56.946285, lng: 24.105078, date: getCurrentDate(), time: getCurrentTime() },
    characteristics: {
      status: "", species: "", breed: "", identifier: "", gender: "", age: "",
    },
    images: {
      pet_image_1: "", pet_image_2: "", pet_image_3: "", pet_image_4: ""
    },
    appearance: {
      primary_color: { hex: "", label: "", value: "" },
      secondary_color: { hex: "", label: "", value: "" },
      size: "", pattern: "",
    },
    contact: { contact_phone: "", phone_code: "371", notes: "" },
  });

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const accessToken = localStorage.getItem('access_token');
        const response = await axios.get(`${API_BASE_URL}/pets/${id}/`, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });

        const data = response.data;

        setFormState({
          location: {
            lat: data.latitude,
            lng: data.longitude,
            date: data.date,
            time: data.time,
          },
          characteristics: {
            status: data.status || "",
            species: data.species || "",
            breed: data.breed || "",
            identifier: data.identifier || "",
            gender: data.gender || "",
            age: data.age || "",
          },
          images: {
            pet_image_1: data.pet_image_1 || "",
            pet_image_2: data.pet_image_2 || "",
            pet_image_3: data.pet_image_3 || "",
            pet_image_4: data.pet_image_4 || "",
          },
          appearance: {
            primary_color: {
              value: data.primary_color,
              label: data.primary_color,
              hex: data.primary_color,
            },
            secondary_color: {
              value: data.secondary_color,
              label: data.secondary_color,
              hex: data.secondary_color,
            },
            size: data.size || "",
            pattern: data.pattern || "",
          },
          contact: {
            phone_code: data.phone_code || "371",
            contact_phone: data.contact_phone || "",
            notes: data.notes || "",
          },
        });

      } catch (err) {
        console.error("❌ Failed to load pet data", err);
      }
    };

    fetchPet();
  }, [id]);

  const handleNext = () => {
    if (activeStep < steps.length - 1) setActiveStep((prev) => prev + 1);
    else handleSubmit();
  };

  const handleBack = () => {
    if (activeStep > 0) setActiveStep((prev) => prev - 1);
  };

  const handleChange = (section, field, value) => {
    if (typeof field === 'object') {
      setFormState((prev) => ({
        ...prev,
        [section]: { ...prev[section], ...field },
      }));
    } else {
      setFormState((prev) => ({
        ...prev,
        [section]: { ...prev[section], [field]: value },
      }));
    }
  };

  const handleSubmit = async (event) => {
    event?.preventDefault();

    try {
      const accessToken = localStorage.getItem('access_token');
      const formData = new FormData();

      const latitude = parseFloat(formState.location.lat).toFixed(6);
      const longitude = parseFloat(formState.location.lng).toFixed(6);

      if (isNaN(latitude) || isNaN(longitude)) {
        console.error("❌ Invalid latitude or longitude");
        return;
      }

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

      ['pet_image_1', 'pet_image_2', 'pet_image_3', 'pet_image_4'].forEach((field) => {
        if (formState.images[field] instanceof File) {
          formData.append(`${field}_media`, formState.images[field]);
        }
      });

      const userId = localStorage.getItem('user_id');
      if (userId) {
        formData.append('author', userId);
      }

      const response = await axios.patch(`${API_BASE_URL}/pets/${id}/`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log('✅ Pet successfully updated!', response.data);
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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
          {activeStep < steps.length - 1 && (
            <Typography variant="body2" sx={{ mt: 1, color: 'gray' }}>
              Nākamais solis: {steps[activeStep + 1]}
            </Typography>
          )}
        </Box>
      </Box>

      <Box sx={{ flexGrow: 1, mb: 3 }}>
        {getStepContent(activeStep)}
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: 2,
          pt: 2,
          padding: "0 !important"
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
          {activeStep === steps.length - 1 ? "Save Changes" : "Next"}
        </Button>
      </Box>
    </Container>
  );
};

export default EditPet;
