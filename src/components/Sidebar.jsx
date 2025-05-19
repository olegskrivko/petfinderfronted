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
// WORKING CODE MULTIPLE
// import React from 'react';
// import { Chip, Box, List, InputLabel, ListItem, Button } from '@mui/material';
// import { STATUS_CHOICES, SPECIES_CHOICES, GENDER_CHOICES } from '../pages/Choices';

// const Sidebar = ({ filters, setFilters, onFilterChange, onReset }) => {
//   const handleChipClick = (type, value) => {
//     // Update the filter state
//     const newFilters = {
//       ...filters,
//       [type]: filters[type].includes(value)
//         ? filters[type].filter((item) => item !== value)
//         : [...filters[type], value],
//     };

//     setFilters(newFilters);

//     // Call parent function to apply the filter instantly
//     if (onFilterChange) {
//       onFilterChange(newFilters);
//     }
//   };

//   return (
//     <form>
//       <List sx={{ paddingTop: '0' }}>
//         {/* Status Filter */}
//         <ListItem sx={{ padding: '0 !important' }}>
//           <Box>
//             <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Status</InputLabel>
//             {STATUS_CHOICES.map((status) => (
//               <Chip
//                 key={status.value}
//                 label={status.label}
//                 clickable
//                 color={filters.status.includes(status.value) ? 'primary' : 'default'}
//                 onClick={() => handleChipClick('status', status.value)}
//                 sx={{ marginRight: '5px', marginBottom: '5px' }}
//               />
//             ))}
//           </Box>
//         </ListItem>

//         {/* Species Filter */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
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

//         {/* Gender Filter */}
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

//         {/* Reset Filters */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important', paddingBottom: '0.8rem !important' }}>
//           <Button
//             variant="outlined"
//             sx={{ width: '100%' }}
//             color="primary"
//             onClick={onReset}
//           >
//             Reset Filters
//           </Button>
//         </ListItem>
//       </List>
//     </form>
//   );
// };

// export default Sidebar;
// import React from 'react';
// import { Chip, Box, List, InputLabel, ListItem, Button } from '@mui/material';
// import { STATUS_CHOICES, SPECIES_CHOICES, GENDER_CHOICES } from '../pages/Choices';

// const Sidebar = ({ filters, setFilters, onFilterChange, onReset }) => {
//   const handleChipClick = (type, value) => {
//     // For 'status' (multiple values), toggle the selection
//     if (type === 'status') {
//       const newFilters = {
//         ...filters,
//         [type]: filters[type].includes(value)
//           ? filters[type].filter((item) => item !== value) // Deselect if already selected
//           : [...filters[type], value], // Add if not selected
//       };
//       setFilters(newFilters);
//       if (onFilterChange) onFilterChange(newFilters);
//     } 
//     // For 'species' and 'gender' (only one value), select the clicked value or deselect if it's already selected
//     else {
//       const newFilters = {
//         ...filters,
//         [type]: filters[type].includes(value)
//           ? []  // Deselect if already selected (clear the filter)
//           : [value], // Otherwise, select the new value
//       };
//       setFilters(newFilters);
//       if (onFilterChange) onFilterChange(newFilters);
//     }
//   };

//   return (
//     <form>
//       <List sx={{ paddingTop: '0' }}>
//         {/* Status Filter */}
//         <ListItem sx={{ padding: '0 !important' }}>
//           <Box>
//             <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Status</InputLabel>
//             {STATUS_CHOICES.map((status) => (
//               <Chip
//                 key={status.value}
//                 label={status.label}
//                 clickable
//                 color={filters.status.includes(status.value) ? 'primary' : 'default'}
//                 onClick={() => handleChipClick('status', status.value)}
//                 sx={{ marginRight: '5px', marginBottom: '5px' }}
//               />
//             ))}
//           </Box>
//         </ListItem>

//         {/* Species Filter */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
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

//         {/* Gender Filter */}
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

//         {/* Reset Filters */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important', paddingBottom: '0.8rem !important' }}>
//           <Button
//             variant="outlined"
//             sx={{ width: '100%' }}
//             color="primary"
//             onClick={onReset}
//           >
//             Reset Filters
//           </Button>
//         </ListItem>
//       </List>
//     </form>
//   );
// };

// export default Sidebar;
// import React from 'react';
// import { Chip, Box, List, TextField, InputLabel, ListItem, Button } from '@mui/material';
// import { STATUS_CHOICES, PATTERN_CHOICES, SIZE_CHOICES, SPECIES_CHOICES, GENDER_CHOICES } from '../pages/Choices';

// const Sidebar = ({ filters, setFilters, onFilterChange, onReset }) => {
//   const handleChipClick = (type, value) => {
//     // For all filters (status, species, gender), only allow 1 selection
//     const newFilters = {
//       ...filters,
//       [type]: filters[type][0] === value ? [] : [value], // Deselect if already selected (clear the filter), otherwise select the new value
//     };

//     setFilters(newFilters);
//     if (onFilterChange) onFilterChange(newFilters);
//   };
  

//   return (
//     <form>
//       <List sx={{ paddingTop: '0' }}>
//         {/* Status Filter (Only one value allowed) */}
//         <ListItem sx={{ padding: '0 !important' }}>
//           <Box>
//             <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Statuss</InputLabel>
//             {STATUS_CHOICES.map((status) => (
//               <Chip
//                 key={status.value}
//                 label={status.label}
//                 clickable
//                 color={filters.status.includes(status.value) ? 'primary' : 'default'}
//                 onClick={() => handleChipClick('status', status.value)}
//                 sx={{ marginRight: '5px', marginBottom: '5px' }}
//               />
//             ))}
//           </Box>
//         </ListItem>

//         {/* Species Filter (Only one value allowed) */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
//           <Box>
//             <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Suga</InputLabel>
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

//         {/* Gender Filter (Only one value allowed) */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
//           <Box>
//             <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Mājdzīvnieka dzimums</InputLabel>
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

//         {/* Size Filter (Only one value allowed) */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
//           <Box>
//             <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Mājdzīvnieka izmērs</InputLabel>
//             {SIZE_CHOICES.map((size) => (
//               <Chip
//                 key={size.value}
//                 label={size.label}
//                 clickable
//                 color={filters.size.includes(size.value) ? 'primary' : 'default'}
//                 onClick={() => handleChipClick('size', size.value)}
//                 sx={{ marginRight: '5px', marginBottom: '5px' }}
//               />
//             ))}
//           </Box>
//         </ListItem>

//         {/* Pattern Filter (Only one value allowed) */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
//           <Box>
//             <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Kažoka raksts</InputLabel>
//             {PATTERN_CHOICES.map((pattern) => (
//               <Chip
//                 key={pattern.value}
//                 label={pattern.label}
//                 clickable
//                 color={filters.pattern.includes(pattern.value) ? 'primary' : 'default'}
//                 onClick={() => handleChipClick('pattern', pattern.value)}
//                 sx={{ marginRight: '5px', marginBottom: '5px' }}
//               />
//             ))}
//           </Box>
//         </ListItem>

//         {/* Date Filter */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
//         <Box sx={{ width: '100%' }}>
//           <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Datums</InputLabel>
//           <TextField
//   label=""
//   type="date"
//   variant="outlined"
//   size="small"
//   fullWidth
//   value={filters.date}
//   onChange={(e) => {
//     const newFilters = {
//       ...filters,
//       date: e.target.value,
//     };
//     setFilters(newFilters);
//     if (onFilterChange) onFilterChange(newFilters);
//   }}
// />
      
//           </Box>
//         </ListItem>


//         {/* Reset Filters */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important', paddingBottom: '0.8rem !important' }}>
//           <Button
//             variant="outlined"
//             sx={{ width: '100%' }}
//             color="primary"
//             onClick={onReset}
//           >
//             Reset Filters
//           </Button>
//         </ListItem>
//       </List>
//     </form>
//   );
// };

// export default Sidebar;
import React from 'react';
import {
  Chip,
  Box,
  List,
  TextField,
  InputLabel,
  ListItem,
  Button
} from '@mui/material';
import {
  STATUS_CHOICES,
  PATTERN_CHOICES,
  SIZE_CHOICES,
  SPECIES_CHOICES,
  GENDER_CHOICES,
  COLOR_CHOICES
} from '../pages/Choices';
import SearchAutocomplete from './SearchAutocomplete';

const Sidebar = ({ filters, setFilters, onFilterChange, onReset }) => {
  const handleChipClick = (type, value) => {
    const newFilters = {
      ...filters,
      [type]: filters[type] === value ? '' : value, // toggle selection
    };

    setFilters(newFilters);
    if (onFilterChange) onFilterChange(newFilters);
  };

  const handleDateChange = (e) => {
    const newFilters = {
      ...filters,
      date: e.target.value,
    };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };
  // const handleSearchSelect = (identifier) => {
  //   const newFilters = {
  //     ...filters,
  //     search: identifier,
  //   };
  //   setFilters(newFilters);
  //   if (onFilterChange) onFilterChange(newFilters);
  // };

  const handleSearchSelect = (searchTerm) => {
    const newFilters = {
      ...filters,
      search: searchTerm,
    };
    setFilters(newFilters);
    onFilterChange?.(newFilters);
  };
  return (
    <form>
      <List sx={{ paddingTop: '0' }}>
        {/* Status Filter */}
        <ListItem sx={{ padding: '0 !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#16477c' }}>Status</InputLabel>
            {STATUS_CHOICES.map((status) => (
              <Chip
                key={status.value}
                label={status.label}
                clickable
                color={filters.status === status.value ? 'primary' : 'default'}
                onClick={() => handleChipClick('status', status.value)}
                sx={{ marginRight: '5px', marginBottom: '5px' }}
              />
            ))}
          </Box>
        </ListItem>

        {/* Species Filter */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#16477c' }}>Suga</InputLabel>
            {SPECIES_CHOICES.map((species) => (
              <Chip
                key={species.value}
                label={species.label}
                clickable
                color={filters.species === species.value ? 'primary' : 'default'}
                onClick={() => handleChipClick('species', species.value)}
                sx={{ marginRight: '5px', marginBottom: '5px' }}
              />
            ))}
          </Box>
        </ListItem>

        {/* Gender Filter */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#16477c' }}>Dzimums</InputLabel>
            {GENDER_CHOICES.map((gender) => (
              <Chip
                key={gender.value}
                label={gender.label}
                clickable
                color={filters.gender === gender.value ? 'primary' : 'default'}
                onClick={() => handleChipClick('gender', gender.value)}
                sx={{ marginRight: '5px', marginBottom: '5px' }}
              />
            ))}
          </Box>
        </ListItem>

        {/* Size Filter */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#16477c' }}>Izmērs</InputLabel>
            {SIZE_CHOICES.map((size) => (
              <Chip
                key={size.value}
                label={size.label}
                clickable
                color={filters.size === size.value ? 'primary' : 'default'}
                onClick={() => handleChipClick('size', size.value)}
                sx={{ marginRight: '5px', marginBottom: '5px' }}
              />
            ))}
          </Box>
        </ListItem>

        {/* Pattern Filter */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#16477c' }}>Kažoka raksts</InputLabel>
            {PATTERN_CHOICES.map((pattern) => (
              <Chip
                key={pattern.value}
                label={pattern.label}
                clickable
                color={filters.pattern === pattern.value ? 'primary' : 'default'}
                onClick={() => handleChipClick('pattern', pattern.value)}
                sx={{ marginRight: '5px', marginBottom: '5px' }}
              />
            ))}
          </Box>
        </ListItem>

          {/* Color Filter */}
          <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#16477c' }}>Krāsa</InputLabel>
            {COLOR_CHOICES.map((color) => (
              <Chip
                key={color.value}
                label={color.label}
                clickable
                color={filters.color === color.value ? 'primary' : 'default'}
                onClick={() => handleChipClick('color', color.value)}
                sx={{ marginRight: '5px', marginBottom: '5px' }}
              />
            ))}
          </Box>
        </ListItem>

        {/* Date Filter */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box sx={{ width: '100%' }}>
            <InputLabel sx={{ fontWeight: '500', color: '#16477c' }}>Datums</InputLabel>
            {/* <TextField
              type="date"
              variant="outlined"
              size="small"
              fullWidth
              value={filters.date || ''}
              onChange={(e) => {
                const newFilters = {
                  ...filters,
                  date: e.target.value,
                };
                setFilters(newFilters);
                if (onFilterChange) onFilterChange(newFilters);
              }}
            /> */}
             <TextField
              type="date"
              variant="outlined"
              size="small"
              fullWidth
              value={filters.date || ''}
              onChange={handleDateChange}
            />
          </Box>
        </ListItem>

        {/* Search Filter */}
        {/* <SearchAutocomplete onSearchSelect={handleSearchSelect} /> */}
        <SearchAutocomplete
        filters={filters}
  searchValue={filters.search} // ✅ pass down current search from filters
  onSearchSelect={handleSearchSelect}
/>


        {/* Reset Filters */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '2rem !important', paddingBottom: '0.8rem !important' }}>
          {/* <Button
            variant="outlined"
            sx={{ width: '100%' }}
            color="primary"
            onClick={onReset}
          >
            Atiestatīt filtrus
          </Button> */}
          
           <Button
      style={{
        // padding: '12px 28px',
        // fontSize: '1rem',
        // fontWeight: 'bold',
        // backgroundColor: 'transparent',
          background: "linear-gradient(0deg, #0994ba 30%, #02b4c4 90%)",
         width: '100%',
        color: 'white',
        // border: '2px solid #0EB9F0',
        // border: "2px solid  #0994ba ",
        // borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
         onClick={onReset}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#e5faff';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'transparent';
      }}
    >
      Atiestatīt filtrus
    </Button>
        </ListItem>
      </List>
    </form>
  );
};

export default Sidebar;
