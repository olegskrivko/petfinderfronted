import React, { useState } from 'react';
import { Chip, Box, List, InputLabel, TextField, ListItem, Button, Slider } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocationOffIcon from '@mui/icons-material/LocationOff';

const Sidebar = () => {
  const [identifier, setIdentifier] = useState('');
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState(25);
  const [isLocationEnabled, setIsLocationEnabled] = useState(true);

  // Hardcoded options for filters
  const statuses = [
    { label: 'Found', value: 'found' },
    { label: 'Lost', value: 'lost' },
    { label: 'Adopted', value: 'adopted' },
  ];

  const categories = [
    { label: 'Dog', value: 'dog' },
    { label: 'Cat', value: 'cat' },
    { label: 'Rabbit', value: 'rabbit' },
  ];

  const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  const sizes = [
    { label: 'Small', value: 'small' },
    { label: 'Medium', value: 'medium' },
    { label: 'Large', value: 'large' },
  ];

  // Handling toggle for location enabled/disabled
  const handleLocationToggle = () => {
    setIsLocationEnabled((prevState) => !prevState);
  };

  const handleSliderChange = (event, newValue) => {
    setDistance(newValue);
  };

  return (
    <form>
      <List>
        {/* Filter by Status */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Status</InputLabel>
            {statuses.map((status) => (
              <Chip key={status.value} sx={{ marginRight: '5px', marginBottom: '5px' }} size="small" label={status.label} />
            ))}
          </Box>
        </ListItem>

        {/* Filter by Category */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Category</InputLabel>
            {categories.map((category) => (
              <Chip key={category.value} sx={{ marginRight: '5px', marginBottom: '5px' }} size="small" label={category.label} />
            ))}
          </Box>
        </ListItem>

        {/* Filter by Gender */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Gender</InputLabel>
            {genders.map((gender) => (
              <Chip key={gender.value} sx={{ marginRight: '5px', marginBottom: '5px' }} size="small" label={gender.label} />
            ))}
          </Box>
        </ListItem>

        {/* Filter by Size */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Size</InputLabel>
            {sizes.map((size) => (
              <Chip key={size.value} sx={{ marginRight: '5px', marginBottom: '5px' }} size="small" label={size.label} />
            ))}
          </Box>
        </ListItem>

        {/* Search by Identifier or Name */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box sx={{ width: '100%' }}>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Identifier or Name</InputLabel>
            <TextField
              size="small"
              variant="outlined"
              value={identifier}
              placeholder="Type pet identifier or name here..."
              fullWidth
              onChange={(e) => setIdentifier(e.target.value)}
            />
          </Box>
        </ListItem>

        {/* Filter by Date */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box sx={{ width: '100%' }}>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Date</InputLabel>
            <TextField
              label=""
              type="date"
              variant="outlined"
              size="small"
              fullWidth
              onChange={(e) => setDate(e.target.value)}
              value={date}
            />
          </Box>
        </ListItem>

        {/* Location Toggle */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Chip
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
            size="small"
            onClick={handleLocationToggle}
            icon={isLocationEnabled ? <LocationOnIcon /> : <LocationOffIcon />}
            label={isLocationEnabled ? 'Current Location Enabled' : 'Current Location Disabled'}
            color={isLocationEnabled ? 'primary' : 'default'}
          />
        </ListItem>

        {/* Slider for Distance */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box sx={{ width: '100%' }}>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>
              Distance {'<'} {distance && distance < 100 ? distance : '100'} km
            </InputLabel>
            <Slider
              color="primary"
              value={distance}
              onChange={handleSliderChange}
              step={5}
              min={5}
              max={100}
              marks={[
                { value: 5, label: 5 },
                { value: 25 },
                { value: 50 },
                { value: 75 },
                { value: 100, label: 100 },
              ]}
            />
          </Box>
        </ListItem>

        {/* Apply Filters Button */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Button type="submit" variant="contained" color="primary" sx={{ width: '100%' }}>
            Apply Filters
          </Button>
        </ListItem>

        {/* Reset Filters Button */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important', paddingBottom: '0.8rem !important' }}>
          <Button variant="outlined" sx={{ width: '100%' }} color="primary">
            Reset Filters
          </Button>
        </ListItem>
      </List>
    </form>
  );
};

export default Sidebar;
