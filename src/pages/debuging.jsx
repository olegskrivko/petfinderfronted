import React, { useState } from 'react';
import axios from 'axios';
import {
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
} from '@mui/material';
import { useAuth } from '../contexts/AuthContext';

function PetsAdd() {
  const { user } = useAuth(); // Get logged-in user

  /** State for form fields */
  const [formState, setFormState] = useState({
    status: '',
    species: '',
  });

  /** Handle field changes */
  const handleChange = (field, value) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  /** Dropdown options */
  const STATUS_CHOICES = [
    { value: 1, label: "Pazudis" },
    { value: 2, label: "Atrasts" },
    { value: 3, label: "Redzēts" },
  ];
  
  const SPECIES_CHOICES = [
    { value: 1, label: "Suns" },
    { value: 2, label: "Kaķis" },
    { value: 3, label: "Cits" },
  ];

  /** Submit form data to the backend */
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const accessToken = localStorage.getItem('access_token');
      const formData = new FormData();

      // Append form fields
      formData.append('status', formState.status);
      formData.append('species', formState.species);

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
            {/* Status Field */}
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
