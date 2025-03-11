import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
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
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



function PetsAdd() {
  const { user } = useAuth(); // Get logged-in user
  const navigate = useNavigate();
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
    phone_code: '371',
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
    image: null,
    extra_image_1: null,
    extra_image_2: null,
    extra_image_3: null,
    extra_image_4: null,
  });
  const [imageErrors, setImageErrors] = useState({
    image: null,
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
    const validateImage = (file, field) => {
      let errors = {};
      let success = {};
    
      // ✅ Allowed file types
      const allowedTypes = ["image/jpeg", "image/jpg"];
      if (!allowedTypes.includes(file.type)) {
        errors[field] = "❌ Atļauts tikai JPG formāts.";
      }
    
      // ✅ Max file size (5MB)
      if (file.size > 5 * 1024 * 1024) {
        errors[field] = "❌ Maksimālais bildes izmērs ir 5MB.";
      }
    
      // ✅ Check file name length
      if (file.name.length > 50) {
        errors[field] = "❌ Faila nosaukums ir pārāk garš.";
      }
    
      // ✅ If no errors, show success message
      if (Object.keys(errors).length === 0) {
        success[field] = "✅ Faila formāts un izmērs ir pareizs!";
      }
    
      return { errors, success };
    };
    
    const handleImageUpload = (file, field) => {
      if (!file) return;
    
      let errorMsg = null;
    
      // ✅ Check file type
      if (!["image/jpeg", "image/jpg"].includes(file.type)) {
        errorMsg = "❌ Atļauts tikai JPG formāts.";
      }
    
      // ✅ Check file size (Max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        errorMsg = "❌ Maksimālais bildes izmērs ir 5MB.";
      }

           // ✅ Check file name length
           if (file.name.length > 50) {
            errorMsg = "❌ Faila nosaukums ir pārāk garš.";
          }
    
      if (errorMsg) {
        setImageErrors((prev) => ({ ...prev, [field]: errorMsg }));
        return;
      }
    
      // ✅ Reset errors if valid
      setImageErrors((prev) => ({ ...prev, [field]: null }));
    
      resizeAndCropImage(file, (resizedFile) => {
        setFormState((prevState) => ({
          ...prevState,
          [field]: resizedFile, 
        }));
    
        const previewUrl = URL.createObjectURL(resizedFile);
        setExtraImagesPreview((prev) => ({ ...prev, [field]: previewUrl }));
      });
    };
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
  //   const handleImageUpload = (file) => {
  //     if (!file) return;

  //      // ✅ Check file type
  // if (file.type !== "image/jpeg" && file.type !== "image/jpg") {
  //   alert("Atļauts tikai JPG formāts.");
  //   // setFormErrors("Faila tips nav atļauts")
  //   return;
  // }

  // // ✅ Check file size (Max 5MB)
  // if (file.size > 5 * 1024 * 1024) {
  //   alert("Maksimālais bildes izmērs ir 5MB.");
  //   return;
  // }
    
  //     resizeAndCropImage(file, (resizedFile) => {
  //       setFormState((prevState) => ({
  //         ...prevState,
  //         image: resizedFile,  // ✅ Store as File, not Blob
  //       }));
    
  //       // ✅ Create preview URL
  //       const previewUrl = URL.createObjectURL(resizedFile);
  //       setImagePreview(previewUrl);
  //     });
  //   };
    const handleExtraImageUpload = (file, field) => {
      if (!file) return;
      const previewUrl = URL.createObjectURL(file);
      setExtraImagesPreview((prevState) => ({ ...prevState, [field]: previewUrl }));
      setFormState((prevState) => ({ ...prevState, [field]: file }));
    };
   
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
      const response = await axios.post('http://127.0.0.1:8000/api/pets/', formData, {
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
  const getImageBackground = (field) => {
    const imageUrl = field === "main_image" ? imagePreview : extraImagesPreview[field];
    return imageUrl ? `url(${imageUrl}) center/cover` : "#f5f5f5";
  };
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom textAlign="center">
          Ziņot par mājdzīvnieku
        </Typography>
        {/* {Object.keys(formErrors).length > 0 && (
  <div style={{ color: "red" }}>
   
    {Object.entries(formErrors).map(([field, error]) => (
      <span key={field}>{error}</span>
    ))}
  </div>
)} */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} my={2}>

            {/* Status Field */}
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="status-label" shrink>
                  Statuss <span style={{ color: 'red' }}>*</span>
                </InputLabel>
                <Select
                  required
                  labelId="status-label"
                  value={formState.status}
                  onChange={(e) => handleChange('status', e.target.value)}
                  label="Statuss *"
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
                Suga <span style={{ color: 'red' }}>*</span>
                </InputLabel>
                <Select
                  required
                  labelId="species-label"
                  value={formState.species}
                  onChange={(e) => handleChange('species', e.target.value)}
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
                  {/* {formState.pattern && (
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
                  )} */}
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




            </Grid>

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
                  value={formState.time}
                  onChange={(e) => handleChange('time', e.target.value)}
                />
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
                    readOnly
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
                  {/* {formState.phone_code && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('phone_code')} // Pass the field name here
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
                  )} */}
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
               
                  // onChange={(e) => handleChange('notes', e.target.value)}
                  onChange={(e) => {
                    const value = e.target.value.slice(0, 250); // ✅ Limit input to 250 characters
                    handleChange("notes", value);
                  }}
                  placeholder="Norādiet būtisku informāciju par izskatu, veselības stāvokli, zaudēšanas apstākļiem vai citus svarīgus faktus"
                  InputLabelProps={{
                    shrink: true, 
                  }}
                />
            </Grid>
            <Grid item xs={12}>
          <Grid container spacing={2}>
  {["image", "extra_image_1", "extra_image_2", "extra_image_3"].map((field) => (
    <Grid item xs={6} md={3} key={field}>
      <input
        accept="image/*"
        id={field}
        type="file"
        onChange={(e) => handleImageUpload(e.target.files[0], field)}
        style={{ display: "none" }}
      />
      <label htmlFor={field}>
        <Box
          sx={{
            width: "100%",
            aspectRatio: "4 / 3",
            background: getImageBackground(field),
            border: `2px dashed ${imageErrors[field] ? "red" : "#aaa"}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "12px",
            color: "#666",
            transition: "border 0.3s ease",
            "&:hover": { borderColor: "#666" },
          }}
        >
          {!extraImagesPreview[field] && (
            <>
              <AddPhotoAlternateIcon sx={{ fontSize: 40, mb: 1, color: "#999" }} />
              <Typography variant="body2">Izvēlēties bildi</Typography>
              <Typography variant="caption">Atļautais formāts: JPG, Max 5MB</Typography>
            </>
          )}
        </Box>
      </label>
      {/* Error Message */}
      {imageErrors[field] && (
        <Typography color="red" variant="body2" mt={1} textAlign="center">
          {imageErrors[field]}
        </Typography>
      )}
      {/* Success Message */}
      {!imageErrors[field] && extraImagesPreview[field] && (
        <Typography color="green" variant="body2" mt={1} textAlign="center">
          ✅ Bilde veiksmīgi augšupielādēta!
        </Typography>
      )}
    </Grid>
  ))}
</Grid>
</Grid>
            {/* Buttons */}
            <Grid item xs={12} mt={2}>
              <Box textAlign="center" style={{ display: "flex", justifyContent: "space-between" }} >
                <Button
                  variant="outlined"
                  color="primary"
                  startIcon={<ArrowBackIcon />}
                  component={Link}
                  to={`/`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Atpakaļ
                </Button>
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
                      Izveidot
                </Button>
              </Box>
            </Grid>
    </Grid>
      
        </form>
      </Grid>
    </Grid>
  );
}

export default PetsAdd;