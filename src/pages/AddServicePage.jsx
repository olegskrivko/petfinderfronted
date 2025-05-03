// import React, { useState } from 'react';
// import {
//   Box,
//   Card,
//   CardContent,
//   TextField,
//   Typography,
//   Button,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem,
//   Checkbox,
//   FormControlLabel,
//   Grid,
//   IconButton
// } from '@mui/material';
// import { AddCircle, Delete } from '@mui/icons-material';

// export default function AddServicePage() {
//   const [service, setService] = useState({
//     image: '',
//     title: '',
//     description: '',
//     price: '',
//     priceUnit: 'hour',
//     email: '',
//     phone: '',
//     website: '',
//     facebook: '',
//     youtube: '',
//     instagram: '',
//     showSocials: false,
//     locations: []
//   });

//   const handleChange = (field) => (e) => {
//     setService({ ...service, [field]: e.target.value });
//   };

//   const handleAddLocation = () => {
//     setService({
//       ...service,
//       locations: [...service.locations, { title: '', description: '', lat: '', lng: '' }]
//     });
//   };

//   const handleLocationChange = (index, field) => (e) => {
//     const updated = [...service.locations];
//     updated[index][field] = e.target.value;
//     setService({ ...service, locations: updated });
//   };

//   const handleRemoveLocation = (index) => {
//     const updated = service.locations.filter((_, i) => i !== index);
//     setService({ ...service, locations: updated });
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) setService({ ...service, image: URL.createObjectURL(file) });
//   };

//   const handleSubmit = () => {
//     console.log('Submitted data:', service);
//     // Add submission logic here (e.g., send to API)
//   };

//   return (
//     <Box p={4}>
//       <Typography variant="h4" gutterBottom>
//         Add a New Service
//       </Typography>

//       <Card sx={{ mb: 3 }}>
//         <CardContent>
//           <Typography variant="h6">Service Info</Typography>

//           <Box my={2}>
//             <Button variant="contained" component="label">
//               Upload Picture
//               <input type="file" hidden onChange={handleFileChange} />
//             </Button>
//             {service.image && <img src={service.image} alt="Preview" style={{ width: 100, marginTop: 10 }} />}
//           </Box>

//           <TextField label="Title" fullWidth margin="normal" value={service.title} onChange={handleChange('title')} />
//           <TextField label="Description" fullWidth multiline rows={4} margin="normal" value={service.description} onChange={handleChange('description')} />
//           <TextField label="Price" type="number" fullWidth margin="normal" value={service.price} onChange={handleChange('price')} />

//           <FormControl fullWidth margin="normal">
//             <InputLabel>Price Unit</InputLabel>
//             <Select value={service.priceUnit} label="Price Unit" onChange={handleChange('priceUnit')}>
//               <MenuItem value="hour">Per Hour</MenuItem>
//               <MenuItem value="day">Per Day</MenuItem>
//               <MenuItem value="item">Per Item</MenuItem>
//             </Select>
//           </FormControl>
//         </CardContent>
//       </Card>

//       <Card sx={{ mb: 3 }}>
//         <CardContent>
//           <Typography variant="h6">Contacts</Typography>
//           <TextField label="Email" fullWidth margin="normal" value={service.email} onChange={handleChange('email')} />
//           <TextField label="Phone" fullWidth margin="normal" value={service.phone} onChange={handleChange('phone')} />
//           <TextField label="Website" fullWidth margin="normal" value={service.website} onChange={handleChange('website')} />

//           <FormControlLabel
//             control={<Checkbox checked={service.showSocials} onChange={() => setService({ ...service, showSocials: !service.showSocials })} />}
//             label="Add Social Networks"
//           />

//           {service.showSocials && (
//             <>
//               <TextField label="Facebook" fullWidth margin="normal" value={service.facebook} onChange={handleChange('facebook')} />
//               <TextField label="YouTube" fullWidth margin="normal" value={service.youtube} onChange={handleChange('youtube')} />
//               <TextField label="Instagram" fullWidth margin="normal" value={service.instagram} onChange={handleChange('instagram')} />
//             </>
//           )}
//         </CardContent>
//       </Card>

//       <Card sx={{ mb: 3 }}>
//         <CardContent>
//           <Typography variant="h6">Locations</Typography>
//           {service.locations.map((loc, index) => (
//             <Grid container spacing={2} alignItems="center" key={index} sx={{ mb: 2 }}>
//               <Grid item xs={12} sm={3}>
//                 <TextField label="Title" fullWidth value={loc.title} onChange={handleLocationChange(index, 'title')} />
//               </Grid>
//               <Grid item xs={12} sm={4}>
//                 <TextField label="Description" fullWidth value={loc.description} onChange={handleLocationChange(index, 'description')} />
//               </Grid>
//               <Grid item xs={12} sm={2}>
//                 <TextField label="Lat" fullWidth value={loc.lat} onChange={handleLocationChange(index, 'lat')} />
//               </Grid>
//               <Grid item xs={12} sm={2}>
//                 <TextField label="Lng" fullWidth value={loc.lng} onChange={handleLocationChange(index, 'lng')} />
//               </Grid>
//               <Grid item xs={12} sm={1}>
//                 <IconButton color="error" onClick={() => handleRemoveLocation(index)}>
//                   <Delete />
//                 </IconButton>
//               </Grid>
//             </Grid>
//           ))}
//           <Button startIcon={<AddCircle />} onClick={handleAddLocation}>
//             Add Location
//           </Button>
//         </CardContent>
//       </Card>

//       <Button variant="contained" color="primary" onClick={handleSubmit}>
//         Submit
//       </Button>
//     </Box>
//   );
// }
import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  Typography,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton
} from '@mui/material';
import { AddCircle, Delete } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
export default function AddServicePage() {
//     const [formState, setFormState] = useState({
//     image: '',
//     title: '',
//     description: '',
//     price: '',
//     priceUnit: 'hour',
//     email: '',
//     phone: '',
//     website: '',
//     facebook: '',
//     youtube: '',
//     instagram: '',
//     showSocials: false,
//     locations: []
//   });
const [formState, setFormState] = useState({
    title: '',
    description: '',
    price: '',
    priceUnit: 'hour',
    email: '',
    phone: '',
    website: '',

    species: '',
    location: { lat: 56.946285, lng: 24.105078 },
    identifier: '',
    size: '',
    gender: '',
    behavior: '',
    age: '',
    breed: '',
    pattern: "",
    primary_color: { hex: "", label: "", value: "" },
    secondary_color: { hex: "", label: "", value: "" },
    notes: '',
    contact_phone: '',
    phone_code: '371',

    pet_image_1: "",
    pet_image_2: "",
    pet_image_3: "",
    pet_image_4: ""
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

// const [ageChoices, setAgeChoices] = useState(AGE_CHOICES_BY_SPECIES[3]);

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
  
      const { errors } = validateImage(file, field);
      if (Object.keys(errors).length > 0) {
        setImageErrors((prev) => ({ ...prev, [field]: errors[field] }));
        return;
      }
  
      // Reset errors if valid
      setImageErrors((prev) => ({ ...prev, [field]: null }));
  
      // Resize and store image in state
      resizeAndCropImage(file, (resizedFile) => {
        setFormState((prevState) => ({
          ...prevState,
          [field]: resizedFile
        }));
  
        const previewUrl = URL.createObjectURL(resizedFile);
        setExtraImagesPreview((prev) => ({
          ...prev,
          [field]: previewUrl
        }));
      });
    };
   
    const handleChange = (field, value) => {
      setFormState((prevState) => {
        let newState = { ...prevState, [field]: value };
    
        // Reset secondary color when pattern changes
        if (field === 'pattern') {
          newState.secondary_color = { hex: "", label: "", value: "", };
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
    // useEffect(() => {
    //   setAgeChoices(AGE_CHOICES_BY_SPECIES[formState.species] || AGE_CHOICES_BY_SPECIES[3]); 
    // }, [formState.species]);
  


  const handleClearSelect = (field) => {
    setFormState((prevState) => {
      let updatedState = { ...prevState };
  
      // Check the field passed and clear corresponding fields
      if (field === 'pattern') {
        updatedState.pattern = '';
        updatedState.primary_color = { hex: "", label: "", value: "" };
        updatedState.secondary_color = { hex: "", label: "", value: "" };
      } else if (field === 'primary_color') {
        updatedState.primary_color = { hex: "", label: "", value: "" };
        updatedState.secondary_color = { hex: "", label: "", value: "" };
      } else if (field === 'secondary_color') {
        updatedState.secondary_color = { hex: "", label: "", value: "" };
      }
  
      return updatedState;
    });
  };
  

  const resizeAndCropImage = (file, callback) => {
    const reader = new FileReader();

    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const targetWidth = 800;
        const targetAspectRatio = 4 / 3;
        const targetHeight = targetWidth / targetAspectRatio;
        const quality = 0.8;

        let srcX = 0, srcY = 0, srcWidth = img.width, srcHeight = img.height;
        if (img.width / img.height > targetAspectRatio) {
          srcWidth = img.height * targetAspectRatio;
          srcX = (img.width - srcWidth) / 2;
        } else {
          srcHeight = img.width / targetAspectRatio;
          srcY = (img.height - srcHeight) / 2;
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;
        ctx.drawImage(img, srcX, srcY, srcWidth, srcHeight, 0, 0, targetWidth, targetHeight);

        const fileExtension = file.name.split('.').pop().toLowerCase();
        const mimeType = fileExtension === 'png' ? 'image/png' : 'image/jpeg';

        canvas.toBlob((blob) => {
          const resizedFile = new File([blob], `resized_pet.${fileExtension}`, { type: mimeType });
          callback(resizedFile);
        }, mimeType, quality);
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };
  const handleClearImage = (field) => {
    // Clear the image from form state and preview
    setFormState((prevState) => ({ ...prevState, [field]: "" }));
    setExtraImagesPreview((prev) => ({ ...prev, [field]: "" }));
  };
  
    useEffect(() => {
      return () => {
        Object.values(extraImagesPreview).forEach((preview) => {
          if (preview) URL.revokeObjectURL(preview);
        });
      };
    }, [extraImagesPreview]);

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
          console.log("formState", formState)
        
    
          if (isNaN(latitude) || isNaN(longitude)) {
            console.error("❌ Invalid latitude or longitude");
            return;
          }
    
          // Append form fields
          formData.append('title', formState.title);
          formData.append('description', formState.description);
          formData.append('price', formState.price);
          formData.append('priceUnit', formState.priceUnit);
          formData.append('email', formState.email);
          formData.append('phone', formState.phone);
          formData.append('website', formState.website);

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
    
                // Append images
                ['pet_image_1', 'pet_image_2', 'pet_image_3', 'pet_image_4'].forEach((field) => {
                  if (formState[field]) {
                    formData.append(`${field}_media`, formState[field]);
                  }
                });
    
    
    
    
          // Append the author (logged-in user)
          if (user?.userId) {
            formData.append('author', user.userId);
          }
    
          console.log('🚀 FormData ready to send:', Object.fromEntries(formData.entries()));
    
          // Send request to backend
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
    
      const getImageBackground = (field) => {
        return extraImagesPreview[field] ? `url(${extraImagesPreview[field]}) center/cover` : '#f5f5f5';
      };  
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Add a New Service
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Service Info</Typography>

          {/* <Box my={2}>
            <Button variant="contained" component="label">
              Upload Picture
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {service.image && <img src={URL.createObjectURL(service.image)} alt="Preview" style={{ width: 100, marginTop: 10 }} />}
          </Box> */}
          <Box my={2}>
                <Grid container spacing={2}>
            
               {["pet_image_1", "pet_image_2", "pet_image_3", "pet_image_4"].map((field) => (
                <Grid item xs={6} md={3} key={field} >
                  <Box sx={{ position: "relative" }}>
                  <input
                    accept="image/*"
                    id={field}
                    type="file"
                    onChange={(e) => handleImageUpload(e.target.files[0], field)}
                    style={{ display: "none" }}
                  />
                  <label htmlFor={field} style={{ display: "block" }}>
                    <Box
                   
                      sx={{
                        
                        width: "100%",
                        aspectRatio: "4 / 3",
                        background: getImageBackground(field),
                        // border: `2px dashed ${imageErrors[field] ? "red" : "#aaa"}`,
                        // border: extraImagesPreview[field] ? "none" : "1px solid #aaa",
                        border: imageErrors[field] ? "1px solid red" : "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        textAlign: "center",
                        cursor: "pointer",
                        borderRadius: "12px",
                        color: "#666",
                        position: "relative",
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
            
                    {/* Close IconButton placed outside the label */}
                {extraImagesPreview[field] && (
                  <IconButton
                    size="small"
                    onClick={(e) => {
                      e.stopPropagation(); // Prevents event from bubbling up
                      handleClearImage(field);
                    }}
                    sx={{
                      position: "absolute",
                      top: 4,  // Adjust positioning
                      right: 4, // Adjust positioning
                      zIndex: 10, // Ensure it's above other elements
                      backgroundColor: "#f5f5f5",
                      '&:hover': { backgroundColor: '#e0e0e0' },
                      borderRadius: '50%',
            
                      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    <CloseIcon fontSize="small" sx={{ color: '#616161' }} />
                  </IconButton>
                )}
            </Box>
                  {imageErrors[field] && (
                    <Typography color="red" variant="body2" mt={1} textAlign="center">
                      {imageErrors[field]}
                    </Typography>
                  )}
            
                </Grid>
              ))}
            </Grid>
            {/* <Button variant="contained" component="label">
              Upload Picture
              <input type="file" hidden accept="image/jpeg, image/jpg" onChange={(e) => handleImageUpload(e.target.files[0])} />
            </Button> */}
            {/* {extraImagePreview && (
              <Box sx={{ position: 'relative', display: 'inline-block', width: 100, height: 100 }}>
                <img src={extraImagePreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <IconButton
                  onClick={handleClearImage}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.8)' }
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            )}
            {imageErrors && <Typography color="red" variant="body2">{imageErrors}</Typography>} */}
          </Box>

          <TextField label="Title" fullWidth margin="normal" value={formState.title}  onChange={(e) => handleChange('title', e.target.value)} />
          <TextField label="Description" fullWidth multiline rows={4} margin="normal" value={formState.description} onChange={(e) => handleChange('description', e.target.value)} />
          <TextField label="Price" type="number" fullWidth margin="normal" value={formState.price} onChange={(e) => handleChange('price', e.target.value)} />

          <FormControl fullWidth margin="normal">
            <InputLabel>Price Unit</InputLabel>
            <Select value={formState.priceUnit} label="Price Unit"  onChange={(e) => handleChange('priceUnit', e.target.value)}>
              <MenuItem value="hour">Per Hour</MenuItem>
              <MenuItem value="day">Per Day</MenuItem>
              <MenuItem value="item">Per Item</MenuItem>
            </Select>
          </FormControl>
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Contacts</Typography>
          <TextField label="Email" fullWidth margin="normal" value={formState.email}  onChange={(e) => handleChange('email', e.target.value)} />
          <TextField label="Phone" fullWidth margin="normal" value={formState.phone}  onChange={(e) => handleChange('phone', e.target.value)} />
          <TextField label="Website" fullWidth margin="normal" value={formState.website}  onChange={(e) => handleChange('website', e.target.value)} />

          {/* <FormControlLabel
            control={<Checkbox checked={service.showSocials} onChange={() => setService({ ...service, showSocials: !service.showSocials })} />}
            label="Add Social Networks"
          />

          {service.showSocials && (
            <>
              <TextField label="Facebook" fullWidth margin="normal" value={service.facebook} onChange={handleChange('facebook')} />
              <TextField label="YouTube" fullWidth margin="normal" value={service.youtube} onChange={handleChange('youtube')} />
              <TextField label="Instagram" fullWidth margin="normal" value={service.instagram} onChange={handleChange('instagram')} />
            </>
          )} */}
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Locations</Typography>
          {/* {service.locations.map((loc, index) => (
            <Grid container spacing={2} alignItems="center" key={index} sx={{ mb: 2 }}>
              <Grid item xs={12} sm={3}>
                <TextField label="Title" fullWidth value={loc.title} onChange={handleLocationChange(index, 'title')} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField label="Description" fullWidth value={loc.description} onChange={handleLocationChange(index, 'description')} />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Lat" fullWidth value={loc.lat} onChange={handleLocationChange(index, 'lat')} />
              </Grid>
              <Grid item xs={12} sm={2}>
                <TextField label="Lng" fullWidth value={loc.lng} onChange={handleLocationChange(index, 'lng')} />
              </Grid>
              <Grid item xs={12} sm={1}>
                <IconButton color="error" onClick={() => handleRemoveLocation(index)}>
                  <Delete />
                </IconButton>
              </Grid>
            </Grid>
          ))} */}
          {/* <Button startIcon={<AddCircle />} onClick={handleAddLocation}>
            Add Location
          </Button> */}
        </CardContent>
      </Card>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}
