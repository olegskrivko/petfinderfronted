import React, { useState, useEffect } from 'react';
import { Grid,Box,Typography, IconButton, FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import  { STATUS_CHOICES, SPECIES_CHOICES, AGE_CHOICES_BY_SPECIES, SIZE_CHOICES, GENDER_CHOICES, BEHAVIOR_CHOICES, AGE_CHOICES, PHONE_CODE_CHOICES, COLOR_CHOICES, PATTERN_CHOICES } from "../constants/petOptions";
import CloseIcon from '@mui/icons-material/Close';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const StepImages = ({ formState, handleChange }) => {
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


    const getImageBackground = (field) => {
        return extraImagesPreview[field] ? `url(${extraImagesPreview[field]}) center/cover` : '#f5f5f5';
      };
  return (
    <Grid container spacing={2} my={2}>
                  <Grid item xs={12}>
          <Grid container spacing={2}>

   {["pet_image_1", "pet_image_2", "pet_image_3", "pet_image_4"].map((field) => (
    <Grid item xs={6} md={6} key={field} >
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
            border: imageErrors[field] ? "1px solid red" : "1px solid #aaa",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            cursor: "pointer",
            borderRadius: "4px",
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
</Grid>
    </Grid>
  );
};

export default StepImages;
