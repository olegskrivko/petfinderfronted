// import React from 'react';
// import { Chip, Box, List, InputLabel, ListItem, Button } from '@mui/material';
// import { SPECIES_CHOICES, GENDER_CHOICES } from '../pages/Choices';

// const Sidebar = ({ filters, setFilters, onApply, onReset }) => {
//   const handleChipClick = (type, value) => {
//     setFilters((prev) => {
//       const newFilters = { ...prev };
//       const currentFilters = newFilters[type];

//       // Add or remove the clicked value
//       if (currentFilters.includes(value)) {
//         newFilters[type] = currentFilters.filter((item) => item !== value); // Remove
//       } else {
//         newFilters[type] = [...currentFilters, value]; // Add
//       }

//       return newFilters;
//     });
//   };

//   return (
//     <form>
//       <List sx={{ paddingTop: '0' }}>
//         {/* Filter by Species */}
//         <ListItem sx={{ padding: '0 !important' }}>
//           <Box>
//             <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Species</InputLabel>
//             {SPECIES_CHOICES.map((species) => (
//               <Chip
//                 key={species.value}
//                 label={species.label}
//                 clickable
//                 color={filters.species.includes(species.value) ? 'primary' : 'default'}
//                 onClick={() => handleChipClick('species', species.value)}
//                 sx={{ marginRight: '5px', marginBottom: '5px' }}
//               />
//             ))}
//           </Box>
//         </ListItem>

//         {/* Filter by Gender */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
//           <Box>
//             <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Gender</InputLabel>
//             {GENDER_CHOICES.map((gender) => (
//               <Chip
//                 key={gender.value}
//                 label={gender.label}
//                 clickable
//                 color={filters.gender.includes(gender.value) ? 'primary' : 'default'}
//                 onClick={() => handleChipClick('gender', gender.value)}
//                 sx={{ marginRight: '5px', marginBottom: '5px' }}
//               />
//             ))}
//           </Box>
//         </ListItem>

//         {/* Apply Filters Button */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
//           <Button
//             type="button"
//             variant="contained"
//             color="primary"
//             sx={{ width: '100%' }}
//             onClick={onApply}
//           >
//             Apply Filters
//           </Button>
//         </ListItem>

//         {/* Reset Filters Button */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important', paddingBottom: '0.8rem !important' }}>
//           <Button variant="outlined" sx={{ width: '100%' }} color="primary" onClick={onReset}>
//             Reset Filters
//           </Button>
//         </ListItem>
//       </List>
//     </form>
//   );
// };

// export default Sidebar;

// Sidebar.jsx

import React from 'react';
import { Chip, Box, List, InputLabel, ListItem, Button } from '@mui/material';
import { SPECIES_CHOICES, GENDER_CHOICES } from '../pages/Choices';

const Sidebar = ({ filters, setFilters, onFilterChange, onReset }) => {
  const handleChipClick = (type, value) => {
    // Update the filter state
    const newFilters = {
      ...filters,
      [type]: filters[type].includes(value)
        ? filters[type].filter((item) => item !== value)
        : [...filters[type], value],
    };

    setFilters(newFilters);

    // Call parent function to apply the filter instantly
    if (onFilterChange) {
      onFilterChange(newFilters);
    }
  };

  return (
    <form>
      <List sx={{ paddingTop: '0' }}>
        {/* Species Filter */}
        <ListItem sx={{ padding: '0 !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Species</InputLabel>
            {SPECIES_CHOICES.map((species) => (
              <Chip
                key={species.value}
                label={species.label}
                clickable
                color={filters.species.includes(species.value) ? 'primary' : 'default'}
                onClick={() => handleChipClick('species', species.value)}
                sx={{ marginRight: '5px', marginBottom: '5px' }}
              />
            ))}
          </Box>
        </ListItem>

        {/* Gender Filter */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Gender</InputLabel>
            {GENDER_CHOICES.map((gender) => (
              <Chip
                key={gender.value}
                label={gender.label}
                clickable
                color={filters.gender.includes(gender.value) ? 'primary' : 'default'}
                onClick={() => handleChipClick('gender', gender.value)}
                sx={{ marginRight: '5px', marginBottom: '5px' }}
              />
            ))}
          </Box>
        </ListItem>

        {/* Reset Filters */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important', paddingBottom: '0.8rem !important' }}>
          <Button
            variant="outlined"
            sx={{ width: '100%' }}
            color="primary"
            onClick={onReset}
          >
            Reset Filters
          </Button>
        </ListItem>
      </List>
    </form>
  );
};

export default Sidebar;
