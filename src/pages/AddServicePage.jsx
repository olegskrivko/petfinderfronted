import React, { useState } from 'react';
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

export default function AddServicePage() {
  const [service, setService] = useState({
    image: '',
    title: '',
    description: '',
    price: '',
    priceUnit: 'hour',
    email: '',
    phone: '',
    website: '',
    facebook: '',
    youtube: '',
    instagram: '',
    showSocials: false,
    locations: []
  });

  const handleChange = (field) => (e) => {
    setService({ ...service, [field]: e.target.value });
  };

  const handleAddLocation = () => {
    setService({
      ...service,
      locations: [...service.locations, { title: '', description: '', lat: '', lng: '' }]
    });
  };

  const handleLocationChange = (index, field) => (e) => {
    const updated = [...service.locations];
    updated[index][field] = e.target.value;
    setService({ ...service, locations: updated });
  };

  const handleRemoveLocation = (index) => {
    const updated = service.locations.filter((_, i) => i !== index);
    setService({ ...service, locations: updated });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setService({ ...service, image: URL.createObjectURL(file) });
  };

  const handleSubmit = () => {
    console.log('Submitted data:', service);
    // Add submission logic here (e.g., send to API)
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Add a New Service
      </Typography>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Service Info</Typography>

          <Box my={2}>
            <Button variant="contained" component="label">
              Upload Picture
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {service.image && <img src={service.image} alt="Preview" style={{ width: 100, marginTop: 10 }} />}
          </Box>

          <TextField label="Title" fullWidth margin="normal" value={service.title} onChange={handleChange('title')} />
          <TextField label="Description" fullWidth multiline rows={4} margin="normal" value={service.description} onChange={handleChange('description')} />
          <TextField label="Price" type="number" fullWidth margin="normal" value={service.price} onChange={handleChange('price')} />

          <FormControl fullWidth margin="normal">
            <InputLabel>Price Unit</InputLabel>
            <Select value={service.priceUnit} label="Price Unit" onChange={handleChange('priceUnit')}>
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
          <TextField label="Email" fullWidth margin="normal" value={service.email} onChange={handleChange('email')} />
          <TextField label="Phone" fullWidth margin="normal" value={service.phone} onChange={handleChange('phone')} />
          <TextField label="Website" fullWidth margin="normal" value={service.website} onChange={handleChange('website')} />

          <FormControlLabel
            control={<Checkbox checked={service.showSocials} onChange={() => setService({ ...service, showSocials: !service.showSocials })} />}
            label="Add Social Networks"
          />

          {service.showSocials && (
            <>
              <TextField label="Facebook" fullWidth margin="normal" value={service.facebook} onChange={handleChange('facebook')} />
              <TextField label="YouTube" fullWidth margin="normal" value={service.youtube} onChange={handleChange('youtube')} />
              <TextField label="Instagram" fullWidth margin="normal" value={service.instagram} onChange={handleChange('instagram')} />
            </>
          )}
        </CardContent>
      </Card>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6">Locations</Typography>
          {service.locations.map((loc, index) => (
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
          ))}
          <Button startIcon={<AddCircle />} onClick={handleAddLocation}>
            Add Location
          </Button>
        </CardContent>
      </Card>

      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}
