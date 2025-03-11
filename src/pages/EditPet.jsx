import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import axios from 'axios';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import CircularProgress from '@mui/material/CircularProgress';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import CloseIcon from '@mui/icons-material/Close';
import FormControlLabel from '@mui/material/FormControlLabel';
// import ImageUploader from '../../components/pets/ImageUploader';
// import PetHealth from '../../components/petcard/PetHealth';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

// import { BASE_URL } from '../../middleware/config';
import LeafletEditPetMap from '../components/LeafletEditPetMap';
// import { AuthContext } from '../../middleware/AuthContext';
import { useAuth } from '../contexts/AuthContext';
import { STATUS_CHOICES, SPECIES_CHOICES, AGE_CHOICES_BY_SPECIES, SIZE_CHOICES, GENDER_CHOICES, BEHAVIOR_CHOICES, AGE_CHOICES, PHONE_CODE_CHOICES, COLOR_CHOICES, PATTERN_CHOICES } from '../constants/petOptions';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function EditPet() {
   const { user } = useAuth(); 
   const { id } = useParams(); // Get pet ID from URL
  const navigate = useNavigate(); // For redirecting after update
console.log("pet id", id)
   console.log("useeeer", user)
//   const { t } = useTranslation();
//   const { user } = useContext(AuthContext);
//   const { selectedLanguage } = useContext(LanguageContext);

  const getCurrentDate = () => {
    const now = new Date();
    return now.toISOString().slice(0, 10); // Returns date in YYYY-MM-DD format
  };

  const getCurrentTime = () => {
    const now = new Date();
    return now.toTimeString().slice(0, 5); // Returns time in HH:MM format
  };

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
  const [firstSighting, setFirstSighting] = useState(null);
  const [isFormActive, setIsFormActive] = useState(false);
  
  // const firstSighting = formState.sightings_history?.[0] || {};
  // useEffect(() => {
  //   if (firstSighting?.event_occurred_at) {
  //     const dateTime = new Date(firstSighting.event_occurred_at);
  //     const formattedDate = dateTime.toISOString().split("T")[0]; // "YYYY-MM-DD"
  //     const formattedTime = dateTime.toTimeString().slice(0, 5); // "HH:MM"
  
  //     setFormState((prevState) => ({
  //       ...prevState,
  //       date: prevState.date || formattedDate,
  //       time: prevState.time || formattedTime,
  //     }));
  //   }
  // }, [firstSighting.event_occurred_at]);
  useEffect(() => {
    console.log("formState.primary_color:", formState.primary_color);
  }, [formState]);
  
  
  
   // State for loading and errors
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [successMessage, setSuccessMessage] = useState('');

  const [ageChoices, setAgeChoices] = useState(AGE_CHOICES_BY_SPECIES[3]); // Default to "Cits"
// const [imagePreview, setImagePreview] = useState(null);
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
  const [updatedStatusOptions, setUpdatedStatusOptions] = useState([]);


  const handleChange = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));

    // Clear the error message for the field
    setFormErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '', // Clear the error message for the field
    }));
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


  const resizeAndCropImage = (file, callback) => {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Set target dimensions for the canvas
        const targetAspectRatio = 4 / 3;
        const targetWidth = 800;
        const targetHeight = targetWidth / targetAspectRatio;

        // Calculate the source dimensions
        let srcX = 0,
          srcY = 0,
          srcWidth = img.width,
          srcHeight = img.height;

        if (img.width / img.height > targetAspectRatio) {
          // Source is wider than target aspect ratio
          srcWidth = img.height * targetAspectRatio;
          srcX = (img.width - srcWidth) / 2;
        } else {
          // Source is taller than target aspect ratio
          srcHeight = img.width / targetAspectRatio;
          srcY = (img.height - srcHeight) / 2;
        }

        // Set canvas dimensions
        canvas.width = targetWidth;
        canvas.height = targetHeight;

        // Draw image on canvas with cropping
        ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);

        // Convert canvas to Blob
        canvas.toBlob(
          (blob) => {
            callback(blob);
          },
          'image/jpeg',
          0.7,
        ); // Adjust quality as needed
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleImageUpload = (file) => {
    resizeAndCropImage(file, (resizedImage) => {
      setFormState((prevState) => ({
        ...prevState,
        image: resizedImage,
      }));
      const previewUrl = URL.createObjectURL(resizedImage);
      setImagePreview(previewUrl);
    });
  };

  // Cleanup image URL when component unmounts
  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

 

  // Fetch existing pet data
  useEffect(() => {
    const fetchPetData = async () => {
      console.log("hello")
      const accessToken = localStorage.getItem('access_token'); 
      if (!accessToken) {
        setError('You must be logged in to view shelters.');
        setLoading(false);
        return;
    }
      try {
     

            // ✅ Fetch data from the backend
            const response = await axios.get(`http://127.0.0.1:8000/api/pets/${id}/`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
              },
            });

        console.log("🐶 Pet Data Fetched:", response.data); // Debugging line ✅
        //setFormState(response.data); // Set form data with API response
        // If `response.data` has `date` and `time` in the correct format, we don't need to do anything special
      setFormState((prevState) => ({
        ...prevState,
        ...response.data, // Spread the fetched data into the form state
        date: response.data.date || getCurrentDate(),  // Ensure default date if not in response
        time: response.data.time || getCurrentTime(),  // Ensure default time if not in response
        status: response.data.sightings_history[0].status,
        image: response.data.image,
        extra_image_1: response.data.extra_image_1,
        extra_image_2: response.data.extra_image_2,
        extra_image_3: response.data.extra_image_3,
        extra_image_4: response.data.extra_image_4,
        location: {
          lat: parseFloat(response.data.sightings_history[0].latitude), 
          lng: parseFloat(response.data.sightings_history[0].longitude)
        },
      }));
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch pet data.');
        setLoading(false);
      }
    };
 
    fetchPetData();
  }, [id]);

  // Handle form submission (Update pet details)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const accessToken = localStorage.getItem('access_token');

      await axios.put(`http://127.0.0.1:8000/api/pets/${id}/`, formState, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setSuccessMessage('Pet details updated successfully!');
      setTimeout(() => navigate(`/pets/${id}`), 2000); // Redirect after success
    } catch (err) {
      setError('Failed to update pet details.');
    }
  };
  const getImageBackground = (field) => {
    const imageUrl = field === "main_image" ? imagePreview : extraImagesPreview[field];
    return imageUrl ? `url(${imageUrl}) center/cover` : "#f5f5f5";
  };
  const handleClearSelect = (field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: '', // Reset the specified field
    }));
  };

  // const handleClearSelect = () => {
  //   handleChange('size', ''); // Clear the select value
  // };
   /** Update age choices when species changes */
   useEffect(() => {
    setAgeChoices(AGE_CHOICES_BY_SPECIES[formState.species] || AGE_CHOICES_BY_SPECIES[3]); 
  }, [formState.species]);
  // Function to get error message for a specific field
  const getErrorMessage = (field) => {
    return formErrors[field] ? formErrors[field].msg : '';
  };
  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">{error}</Alert>;
  return (
    <React.Fragment>
      <Grid container spacing={2} my={2}>
 
        
  

       

        <Grid item xs={12}>
       
        {successMessage && <Alert severity="success">{successMessage}</Alert>}

          <Typography variant="h4" gutterBottom textAlign="center">
          Mainīt informāciju par mājdzīvnieku
          </Typography>

 
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: '500' }}
                  gutterBottom
                  textAlign="left"
                >
                  Mājdzīvnieka raksturojums
                </Typography>
              </Grid>
                          {/* Status Field */}
                          <Grid item xs={12} sm={12} md={6} lg={6}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel id="status-label" shrink>
                                Statuss
                              </InputLabel>
                              <Select
                                labelId="status-label"
                                disabled
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
                                disabled
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
                                disabled
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
                                  disabled
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
                                {isFormActive && formState.size && (
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
                                  disabled
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
                                {isFormActive && formState.gender && (
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
                                  disabled
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
                                {isFormActive && formState.behavior && (
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
                                    // disabled={
                                    //   formState.species === null ||
                                    //   formState.species === '' ||
                                    //   formState.species === undefined 
                                    // }
                                    disabled
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
                                  {isFormActive && formState.age && (
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
                                disabled
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
                                  disabled
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
                              
                              </FormControl>
                          </Grid>
              
              
                          {/* Primary Color Field */}
                          <Grid item xs={12} sm={12} md={6} lg={4}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel id="primary-color-label" shrink>Pamatkrāsa</InputLabel>
                              <Select
  displayEmpty
  labelId="primary-color-label"
  disabled
  value={COLOR_CHOICES.find(color => color.value === formState.primary_color)?.hex || ''}  // Use hex here
  onChange={(e) => {
    const selectedColor = COLOR_CHOICES.find(color => color.hex === e.target.value);
    handleChange('primary_color', selectedColor ? selectedColor.value : null); // Set the `value`, not the hex
  }}
  label="Pamatkrāsa"
  renderValue={(selected) => {
    if (!selected) return 'Izvēlieties krāsu';  // If no color is selected, show placeholder
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

                              {/* <Select
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
                              </Select> */}
                            </FormControl>
                          </Grid>
              
                          {/* Secondary Color Field */}
                          <Grid item xs={12} sm={12} md={6} lg={4}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel id="secondary-color-label" shrink>Sekundārā krāsa</InputLabel>
                              <Select
  displayEmpty
  disabled
  labelId="secondary-color-label"
  value={COLOR_CHOICES.find(color => color.value === formState.secondary_color)?.hex || ''}  // Use hex here
  onChange={(e) => {
    const selectedColor = COLOR_CHOICES.find(color => color.hex === e.target.value);
    handleChange('secondary_color', selectedColor ? selectedColor.value : null); // Set the `value`, not the hex
  }}
  label="Pamatkrāsa"
  renderValue={(selected) => {
    if (!selected) return 'Izvēlieties krāsu';  // If no color is selected, show placeholder
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

                              {/* <Select
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
                              </Select> */}
                            </FormControl>
                          </Grid>
   

              
              {/* {translations.formTitles && translations.formTitles.petDetails} */}
              <Grid item xs={12} sm={12} md={12} lg={12}>
                {/* <PetHealth formState={formState} setFormState={setFormState} /> */}
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  style={{ fontWeight: '500' }}
                  gutterBottom
                  textAlign="left"
                >
                 Mājdzīvnieka atrašanās vieta
                </Typography>
              </Grid>
              
              <Grid item xs={12}>
             
                {/* <LeafletEditPetMap onLocationChange={handleLocationChange} location={formState.location}  /> */}
                <LeafletEditPetMap location={formState.location} onLocationChange={handleLocationChange} isEditable={false} />

              </Grid>
     
              {/* {formState.sightings_history[0].event_occured_at} */}
  
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
                  // value={formState.location.lat}
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
                  // value={formState.location.lng}
                  // placeholder="Identifier"
                  // onChange={(e) => handleChange('identifier', e.target.value)}
                />
              </Grid>
              {/* {firstSighting.event_occurred_at} */}
              {/* {firstSighting.event_occured_at} */}
            {/* Date Field */}
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <TextField
                  // required
                  error={!!formErrors.date}
                  helperText={formErrors.date || ""}
                  id="date"
                  name="date"
                  label="Datums"
                  disabled
                  type="date"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.date || ""}
                  onChange={(e) => handleChange("date", e.target.value)}
                />
            </Grid>
            
            {/* Time Field */}
            <Grid item xs={6} sm={6} md={6} lg={6}>
                <TextField
                  // required
                  id="time"
                  name="time"
                  label="Laiks"
                  disabled
                  type="time"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  value={formState.time || ""}
                  onChange={(e) => handleChange("time", e.target.value)}
                />
            </Grid>

            {/* Phone Code Field */}
            <Grid item xs={4} sm={4} md={4} lg={4}>
            <FormControl fullWidth variant="outlined">
                  <InputLabel id="phone_code-label" shrink>
                  Telefona kods
                  </InputLabel>
                  <Select
                    labelId="phone_code-label"
                    id="phone_code"
                    name="phone_code"
                    readOnly
                    disabled
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
      {[formState.image, formState.extra_image_1, formState.extra_image_2, formState.extra_image_3].map((field, index) => {
        const previewUrl = extraImagesPreview[`extra_image_${index}`] || field; // Fallback to existing image if no preview
        return (
          <Grid item xs={6} md={3} key={field || index}>
            <input
              accept="image/*"
              id={field || `extra_image_${index}`}  // Use a unique ID
              type="file"
              onChange={(e) => handleImageUpload(e.target.files[0], `extra_image_${index}`)}
              style={{ display: "none" }}
            />
            <label htmlFor={field || `extra_image_${index}`}>
              <Box
                sx={{
                  width: "100%",
                  aspectRatio: "4 / 3",
                  background: previewUrl ? `url(${previewUrl}) center/cover` : "#f5f5f5", // Show background image if available
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
                {!previewUrl && (
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
            {!imageErrors[field] && previewUrl && (
              <Typography color="green" variant="body2" mt={1} textAlign="center">
                ✅ Bilde veiksmīgi augšupielādēta!
              </Typography>
            )}
          </Grid>
        );
      })}
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
                  to={`/user-profile/pets`}
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
                      Saglabāt
                </Button>
              </Box>
            </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}



export default EditPet;

