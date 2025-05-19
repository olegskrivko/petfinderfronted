// import React, { useState, useEffect } from 'react';
// import { Autocomplete, TextField, CircularProgress } from '@mui/material';
// import axios from 'axios';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const SearchAutocomplete = ({ searchValue, onSearchSelect }) => {
//   const [inputValue, setInputValue] = useState('');
//   const [options, setOptions] = useState([]);
//   const [loading, setLoading] = useState(false);
//   console.log("value after reset", searchValue)
//   useEffect(() => {
//     // sync input when parent updates the value (like reset)
//     setInputValue(searchValue || '');
//   }, [searchValue]);

//   useEffect(() => {
//     if (inputValue.length >= 3) {
//       setLoading(true);
//       const fetchSuggestions = async () => {
//         try {
//           const res = await axios.get(`${API_BASE_URL}/pets/?search=${inputValue}`);
//           const suggestions = res.data.results.map(pet => ({
//             label: `${pet.identifier || ''} ${pet.notes || ''}`.trim(),
//             value: pet.identifier || '',
//           }));
//           setOptions(suggestions);
//         } catch (err) {
//           console.error('Failed to fetch suggestions:', err);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchSuggestions();
//     } else {
//       setOptions([]);
//     }
//   }, [inputValue]);

//   return (
//     <Autocomplete
//       freeSolo
//       options={options}
//       loading={loading}
//       getOptionLabel={(option) => option.label || ''}
//       onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
//       onChange={(e, newValue) => {
//         if (newValue) {
//           onSearchSelect(newValue.value); // Send back identifier
//         }
//       }}
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           label="Search Notes / ID"
//           variant="outlined"
//           size="small"
//           InputProps={{
//             ...params.InputProps,
//             endAdornment: (
//               <>
//                 {loading && <CircularProgress color="inherit" size={20} />}
//                 {params.InputProps.endAdornment}
//               </>
//             ),
//           }}
//         />
//       )}
//     />
//   );
// };

// export default SearchAutocomplete;
// import React, { useState, useEffect } from 'react';
// import { Autocomplete, InputLabel, Box, ListItem, TextField, CircularProgress } from '@mui/material';
// import axios from 'axios';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const SearchAutocomplete = ({ searchValue, onSearchSelect }) => {
//   const [inputValue, setInputValue] = useState('');

//   useEffect(() => {
//     // Whenever searchValue from parent changes, update the input
//     setInputValue(searchValue || '');
//   }, [searchValue]);

//   const [options, setOptions] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (inputValue.length >= 3) {
//       setLoading(true);
//       const fetchSuggestions = async () => {
//         try {
//           const res = await axios.get(`${API_BASE_URL}/pets/?search=${inputValue}`);
//           const suggestions = res.data.results.map(pet => ({
//             label: `${pet.identifier || ''} ${pet.notes || ''}`.trim(),
//             value: pet.identifier || '',
//           }));
//           setOptions(suggestions);
//         } catch (err) {
//           console.error('Failed to fetch suggestions:', err);
//         } finally {
//           setLoading(false);
//         }
//       };

//       fetchSuggestions();
//     } else {
//       setOptions([]);
//     }
//   }, [inputValue]);

//   return (
//       <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
//               <Box sx={{ width: '100%' }}>
//                 <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Meklēt</InputLabel>
//     <Autocomplete
//       freeSolo
//       options={options}
//       loading={loading}
//       inputValue={inputValue}
//       onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
//     //   onChange={(e, newValue) => {
//     //     if (newValue) {
//     //       onSearchSelect(newValue.value);
//     //     } else {
//     //       // Optional: notify parent search was cleared
//     //       onSearchSelect('');
//     //     }
//     //   }}
//     // onChange={(e, newValue) => {
//     //     if (typeof newValue === 'string') {
//     //       // User typed something directly
//     //       onSearchSelect(newValue);
//     //     } else if (newValue?.value) {
//     //       // User selected from dropdown
//     //       onSearchSelect(newValue.label); // Send full label with notes/street/etc
//     //     } else {
//     //       onSearchSelect('');
//     //     }
//     //   }}
//     onChange={(e, newValue) => {
//         if (newValue === null) {
//           // User clicked the clear (X) button
//           setInputValue('');
//           onSearchSelect('');
//         } else if (typeof newValue === 'string') {
//           onSearchSelect(newValue);
//         } else if (newValue?.value) {
//           onSearchSelect(newValue.label);
//         }
//       }}
      
//       renderInput={(params) => (
//         <TextField
//           {...params}
//         //   label="Search Notes / ID"
//         placeholder='Sāc rakstīt, lai meklētu...'
//           variant="outlined"
//           size="small"
//           InputProps={{
//             ...params.InputProps,
//             endAdornment: (
//               <>
//                 {loading && <CircularProgress color="inherit" size={20} />}
//                 {params.InputProps.endAdornment}
//               </>
//             ),
//           }}
//         />
//       )}
//     />
//     </Box>
//     </ListItem>
//   );
// };

// export default SearchAutocomplete;
// // Sāc rakstīt, lai meklētu...

// // Meklēt pēc ID vai piezīmēm...
import React, { useState, useEffect } from 'react';
import { Autocomplete, InputLabel, Box, ListItem, TextField, CircularProgress } from '@mui/material';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const SearchAutocomplete = ({ filters, searchValue, onSearchSelect }) => {
  const [inputValue, setInputValue] = useState('');
console.log("filtersfilters", filters)
  useEffect(() => {
    // Whenever searchValue from parent changes, update the input
    setInputValue(searchValue || '');
  }, [searchValue]);

  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (inputValue.length >= 3) {
      setLoading(true);
      const fetchSuggestions = async () => {
        try {
            // added part after ?search=${inputValue} so it would suggest based on already filtered pets
          const res = await axios.get(`${API_BASE_URL}/pets/?search=${inputValue}&status=${filters.status}&species=${filters.species}&gender=${filters.gender}&size=${filters.size}&pattern=${filters.pattern}&date=${filters.date}&color=${filters.color}`);
          const suggestions = res.data.results.map(pet => ({
            label: `${pet.identifier || ''} ${pet.notes || ''}`.trim(),
            value: pet.identifier || '',
          }));
          setOptions(suggestions);
        } catch (err) {
          console.error('Failed to fetch suggestions:', err);
        } finally {
          setLoading(false);
        }
      };

      fetchSuggestions();
    } else {
      setOptions([]);
    }
  }, [inputValue]);

  return (
      <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
              <Box sx={{ width: '100%' }}>
                <InputLabel sx={{ fontWeight: '500', color: '#16477c' }}>Meklēt</InputLabel>
    <Autocomplete
      freeSolo
      options={options}
      loading={loading}
      inputValue={inputValue}
      onInputChange={(e, newInputValue) => setInputValue(newInputValue)}
   
    onChange={(e, newValue) => {
        if (newValue === null) {
          // User clicked the clear (X) button
          setInputValue('');
          onSearchSelect('');
        } else if (typeof newValue === 'string') {
          onSearchSelect(newValue);
        } else if (newValue?.value) {
          onSearchSelect(newValue.label);
        }
      }}
      
      renderInput={(params) => (
        <TextField
          {...params}
        //   label="Search Notes / ID"
        placeholder='Sāc rakstīt, lai meklētu...'
          variant="outlined"
          size="small"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading && <CircularProgress color="inherit" size={20} />}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
    </Box>
    </ListItem>
  );
};

export default SearchAutocomplete;
