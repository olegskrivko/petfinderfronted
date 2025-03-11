import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, IconButton } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import DeleteIcon from '@mui/icons-material/Delete';

const ImageUploader = ({ onImageUpload }) => {
  const [mainImage, setMainImage] = useState(null);
  const [extraImages, setExtraImages] = useState([]);

  const handleMainImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setMainImage(previewUrl);
      onImageUpload(file, 'main');
    }
  };

  const handleExtraImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && extraImages.length < 4) {
      const previewUrl = URL.createObjectURL(file);
      setExtraImages([...extraImages, previewUrl]);
      onImageUpload(file, `extra_${extraImages.length + 1}`);
    }
  };

  const removeExtraImage = (index) => {
    setExtraImages(extraImages.filter((_, i) => i !== index));
  };

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {/* Main Image Upload */}
      <Grid item xs={12} md={6}>
        <input
          accept="image/*"
          id="main-image"
          type="file"
          onChange={handleMainImageUpload}
          style={{ display: 'none' }}
        />
        <label htmlFor="main-image">
          <Box
            sx={{
              width: '250px',
              height: '250px',
              border: '2px dashed gray',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              borderRadius: '8px',
              background: mainImage ? `url(${mainImage}) center/cover` : '#f0f0f0',
            }}
          >
            {!mainImage && <AddPhotoAlternateIcon fontSize="large" color="disabled" />}
          </Box>
        </label>
      </Grid>

      {/* Extra Images Upload */}
      <Grid item xs={12} md={6}>
        <Grid container spacing={1}>
          {extraImages.map((src, index) => (
            <Grid item xs={6} key={index}>
              <Box
                sx={{
                  width: '100px',
                  height: '100px',
                  borderRadius: '8px',
                  position: 'relative',
                }}
              >
                <img src={src} alt={`Extra ${index}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <IconButton
                  size="small"
                  onClick={() => removeExtraImage(index)}
                  sx={{ position: 'absolute', top: 0, right: 0, backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }}
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            </Grid>
          ))}
          {extraImages.length < 4 && (
            <Grid item xs={6}>
              <input
                accept="image/*"
                id="extra-image"
                type="file"
                onChange={handleExtraImageUpload}
                style={{ display: 'none' }}
              />
              <label htmlFor="extra-image">
                <Box
                  sx={{
                    width: '100px',
                    height: '100px',
                    border: '2px dashed gray',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    borderRadius: '8px',
                  }}
                >
                  <AddPhotoAlternateIcon fontSize="small" color="disabled" />
                </Box>
              </label>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageUploader;