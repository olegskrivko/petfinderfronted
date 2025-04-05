import React, { useState, useEffect } from 'react';
import { Grid,TextField, Box, FormControl,IconButton, InputLabel, Select, MenuItem } from "@mui/material";
import  { STATUS_CHOICES, SPECIES_CHOICES, AGE_CHOICES_BY_SPECIES, SIZE_CHOICES, GENDER_CHOICES, BEHAVIOR_CHOICES, AGE_CHOICES, PHONE_CODE_CHOICES, COLOR_CHOICES, PATTERN_CHOICES } from "../constants/petOptions";
import CloseIcon from '@mui/icons-material/Close';
const StepCharacteristics = ({ formState,formErrors, handleChange }) => {
    const [ageChoices, setAgeChoices] = useState(AGE_CHOICES_BY_SPECIES[3]);
        /** Update age choices when species changes */
        useEffect(() => {
          setAgeChoices(AGE_CHOICES_BY_SPECIES[formState.characteristics.species] || AGE_CHOICES_BY_SPECIES[3]); 
        }, [formState.characteristics.species]);
  return (
    <Grid container spacing={2} my={2}>
          {/* Status Field */}
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <InputLabel shrink>Statuss <span style={{ color: 'red' }}>*</span></InputLabel>
          <Select
            required
            value={formState.characteristics.status}
            onChange={(e) => handleChange("characteristics", "status", e.target.value)}
            notched
            label="Statuss *">
            {STATUS_CHOICES.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      
      {/* Species Field */}
      <Grid item xs={12}>
        <FormControl fullWidth variant="outlined">
          <InputLabel shrink>Suga <span style={{ color: 'red' }}>*</span></InputLabel>
          <Select
            required
            value={formState.characteristics.species}
            onChange={(e) => handleChange("characteristics", "species", e.target.value)}
            notched
            label="Suga *"
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
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <TextField
                        id="identifier"
                        name="identifier"
                        label="Unikāls identifikators"
                        fullWidth
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="outlined"
                        value={formState.characteristics.identifier}
                        // placeholder="Mikročipa numurs"
                        onChange={(e) => handleChange("characteristics", "identifier", e.target.value)}
     
                      />
                    </Grid>
      
                  {/* Size Field */}
                  {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                      <FormControl fullWidth variant="outlined">
                        <InputLabel id="size-label" shrink>
                        Izmērs
                        </InputLabel>
      
                        <Select
                          labelId="size-label"
                          id="size"
                          value={formState.characteristics.size}
                          label="Izmērs"
                          notched
       
                          onChange={(e) => handleChange("characteristics", "size", e.target.value)}
          
                          error={Boolean(formErrors.size)}
                          fullWidth
                        >
                          {SIZE_CHOICES.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </Select>
                        {formState.characteristics.size && (
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
                  </Grid> */}

                              {/* Gender Field */}
                              <Grid item xs={12} sm={12} md={12} lg={12}>
                                <FormControl fullWidth variant="outlined">
                                  <InputLabel id="gender-label" shrink>
                                    Dzimums
                                    </InputLabel>
                                    <Select
                                      labelId="gender-label"
                                      id="gender"
                                      value={formState.characteristics.gender}
                    
                                      label="Dzimums"
                                      notched
                               
                                      onChange={(e) => handleChange("characteristics", "gender", e.target.value)}
                                    >
                                      {GENDER_CHOICES.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                    {formState.characteristics.gender && (
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
                              {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                                  <FormControl fullWidth variant="outlined">
                                    <InputLabel id="behavior-label" shrink>
                                    Uzvedība
                                    </InputLabel>
                                    <Select
                                      labelId="behavior-label"
                                      id="behavior"
                                      value={formState.characteristics.behavior}
                                 
                                      onChange={(e) => handleChange("characteristics", "behavior", e.target.value)}
                                      label="Uzvedība"
                                      notched
                                    >
                                      {BEHAVIOR_CHOICES.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                          {option.label}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                    {formState.characteristics.behavior && (
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
                              </Grid> */}
                  
                              {/* Age Field */}
                              <Grid item xs={12} sm={12} md={12} lg={12}>
                                <FormControl fullWidth variant="outlined">
                                  <InputLabel id="age-label" shrink>
                                      Vecums
                                      </InputLabel>
                                      <Select
                                        labelId="age-label"
                                        id="age"
                                        value={formState.characteristics.age}
                                        disabled={
                                          formState.characteristics.species === null ||
                                          formState.characteristics.species === '' ||
                                          formState.characteristics.species === undefined
                                        }
                                        label="Vecums"
                                        notched
                                        onChange={(e) => handleChange("characteristics", "age", e.target.value)}
                               
                                      >
                                        {ageChoices.map((option) => (
                                          <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                          </MenuItem>
                                        ))}
                                      </Select>
                                      {formState.characteristics.age && (
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
                              <Grid item xs={12} sm={12} md={12} lg={12}>
                                <TextField
                                    id="breed"
                                    name="breed"
                                    label="Sķirne"
                                    fullWidth
                                    InputLabelProps={{
                                      shrink: true,
                                    }}
                                    variant="outlined"
                                    value={formState.characteristics.breed}
                                    placeholder=""
                                    
                                    onChange={(e) => handleChange("characteristics","breed", e.target.value)}
                                  />
                              </Grid>

  {/* Pattern Field */}
                              {/* <Grid item xs={12} sm={12} md={12} lg={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel id="pattern-label" shrink>
                  Kažoka raksts
                  </InputLabel>
                  <Select
                    labelId="pattern-label"
                    id="pattern"
                    value={formState.characteristics.pattern}
                    onChange={(e) => handleChange("characteristics", 'pattern', e.target.value)}
                    label="Kažoka raksts"
                    notched
                  >
                    {PATTERN_CHOICES.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </Select>
                  {formState.characteristics.pattern && (
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
            </Grid> */}

      {/* Primary Color Field */}
      {/* <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="primary-color-label" shrink>Pamatkrāsa</InputLabel>
                <Select
                displayEmpty
                  labelId="primary-color-label"
                  disabled={formState.characteristics.pattern === ""} // Disable if pattern is ""
                  value={formState.characteristics.primary_color.hex}
                  onChange={(e) => {
                    const selectedColor = COLOR_CHOICES.find(color => color.hex === e.target.value);
                    handleChange("characteristics", 'primary_color', selectedColor || { hex: "", label: "", value: "" });
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
                {formState.characteristics.primary_color && formState.characteristics.primary_color.value && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('primary_color')} // Pass the field name here
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
            </Grid> */}

            {/* Secondary Color Field */}
            {/* <Grid item xs={12} sm={12} md={12} lg={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="secondary-color-label" shrink>Sekundārā krāsa</InputLabel>
                <Select
                  labelId="secondary-color-label"
                  displayEmpty
                  disabled={formState.characteristics.pattern === 1 || formState.characteristics.pattern === "" } // Disable if pattern is "1"
                  value={formState.characteristics.secondary_color.hex || ''}
                  onChange={(e) => {
                    const selectedColor = COLOR_CHOICES.find(color => color.hex === e.target.value);
                    handleChange("characteristics", 'secondary_color', selectedColor || { hex: "", label: "", value: "" });

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
                {formState.characteristics.secondary_color && formState.characteristics.secondary_color.value && (
                    <IconButton
                      size="small"
                      onClick={() => handleClearSelect('secondary_color')} // Pass the field name here
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
            </Grid> */}


                
                        {/* Notes Field */}
                        {/* <Grid item xs={12}>
                            <TextField
                              id="notes"
                              name="notes"
                              label="Piezīmes"
                              fullWidth
                              multiline
                              rows={4}
                              variant="outlined"
                              value={formState.characteristics.notes}
                           
                              // onChange={(e) => handleChange('notes', e.target.value)}
                              onChange={(e) => {
                                const value = e.target.value.slice(0, 250); // ✅ Limit input to 250 characters
                                handleChange('characteristics',"notes", value);
                              }}
                              placeholder="Norādiet būtisku informāciju par izskatu, veselības stāvokli, zaudēšanas apstākļiem vai citus svarīgus faktus"
                              InputLabelProps={{
                                shrink: true, 
                              }}
                            />
                        </Grid> */}

    </Grid>
  );
};

export default StepCharacteristics;
