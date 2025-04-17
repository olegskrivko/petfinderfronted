// import React, { useState } from 'react';
// import {
//   Box, Typography, TextField, FormControl, InputLabel,
//   Select, MenuItem, Button
// } from '@mui/material';


// const ServiceSidebar = ({ filters, onFilterChange, onReset }) => {
//   const [localFilters, setLocalFilters] = useState(filters);
//   const categoryLabelsLv = {
//     1: "Dzīvnieku pieskatīšana",
//     2: "Suņu pastaigas",
//     3: "Kopšana",
//     4: "Apmācība",
//     5: "Izmitināšana",
//     6: "Veterinārārsts",
//     7: "Foto sesijas",
//     8: "Glābšana un meklēšana",
//     9: "Piederumi un aksesuāri",
//     10: "Māksla",
//     11: "Apbedīšana",
//     12: "Transports",
//     13: "Audzētavas",
//     14: "Apdrošināšana",
//     15: "Citi pakalpojumi"
//   };
//   const handleChange = (e) => {
//     setLocalFilters({ ...localFilters, [e.target.name]: e.target.value });
//   };

//   const applyFilters = () => {
//     onFilterChange(localFilters);
//   };

//   return (
//     <Box p={2}>
//       <Typography variant="h6" gutterBottom>
//         Filter Services
//       </Typography>

//       <FormControl fullWidth margin="normal">
//         <InputLabel>Category</InputLabel>
//         <Select
//           name="category"
//           value={localFilters.category}
//           onChange={handleChange}
//           label="Category"
//         >
//           <MenuItem value="">All</MenuItem>
//           <MenuItem value="training">Training</MenuItem>
//           <MenuItem value="grooming">Grooming</MenuItem>
//           <MenuItem value="boarding">Boarding</MenuItem>
//           <MenuItem value="veterinary">Veterinary</MenuItem>
//         </Select>
//       </FormControl>

//       <TextField
//         fullWidth
//         margin="normal"
//         name="search"
//         label="Search"
//         value={localFilters.search}
//         onChange={handleChange}
//       />

//       <Box mt={2} display="flex" justifyContent="space-between">
//         <Button variant="outlined" onClick={onReset}>
//           Reset
//         </Button>
//         <Button variant="contained" onClick={applyFilters}>
//           Apply
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// export default ServiceSidebar;
import React, { useState } from 'react';
import {
  Box, Typography, TextField, Button, Chip, InputLabel, ListItem
} from '@mui/material';

const categoryLabelsLv = {
  1: "Dzīvnieku pieskatīšana",
  2: "Suņu pastaigas",
  3: "Kopšana",
  4: "Apmācība",
  5: "Izmitināšana",
  6: "Veterinārārsts",
  7: "Foto sesijas",
  8: "Glābšana un meklēšana",
  9: "Piederumi un aksesuāri",
  10: "Māksla",
  11: "Apbedīšana",
  12: "Transports",
  13: "Audzētavas",
  14: "Apdrošināšana",
  15: "Citi pakalpojumi"
};

const ServiceSidebar = ({ filters, onFilterChange, onReset }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChipClick = (field, value) => {
    setLocalFilters((prev) => ({
      ...prev,
      [field]: prev[field] === value ? '' : value, // toggle on click
    }));
  };

  const handleChange = (e) => {
    setLocalFilters({ ...localFilters, [e.target.name]: e.target.value });
  };

  const applyFilters = () => {
    onFilterChange(localFilters);
  };

  return (
    <Box p={2}>
      <Typography variant="h6" gutterBottom>
        Filtri
      </Typography>

      {/* Category as chips */}
      <Box mb={2}>
        <InputLabel sx={{ fontWeight: '500', color: '#000', mb: 1 }}>
          Kategorija
        </InputLabel>
        {Object.entries(categoryLabelsLv).map(([value, label]) => (
          <Chip
            key={value}
            label={label}
            clickable
            color={parseInt(localFilters.category) === parseInt(value) ? 'primary' : 'default'}
            onClick={() => handleChipClick('category', value)}
            sx={{ marginRight: '5px', marginBottom: '5px' }}
          />
        ))}
      </Box>

      {/* Search */}
      <TextField
        fullWidth
        margin="normal"
        name="search"
        label="Meklēt"
        value={localFilters.search}
        onChange={handleChange}
      />

      <Box mt={2} display="flex" justifyContent="space-between">
        <Button variant="outlined" onClick={onReset}>
          Atiestatīt
        </Button>
        <Button variant="contained" onClick={applyFilters}>
          Filtrēt
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceSidebar;
