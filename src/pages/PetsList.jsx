
// import React, { useState, useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
// import {Grid, CircularProgress, Alert,Box, Button } from '@mui/material';
// //import Grid2 from '@mui/material/Unstable_Grid2'; // Grid system from MUI
// import PetCard from '../components/PetCard';
// // import Sidebar from '../components/Siderbar';
// import LeafletClusterMap from '../components/LeafletClusterMap';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import Pagination from '@mui/material/Pagination';


// // import React, { useState } from 'react';
// //import { Chip, Box, List, InputLabel, TextField, ListItem, Button, Slider } from '@mui/material';
// import { Chip, List, InputLabel, TextField, ListItem, Slider } from '@mui/material';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import LocationOffIcon from '@mui/icons-material/LocationOff';

// const Sidebar = ({ filters, setFilters, applyFilters }) => {
//   const [identifier, setIdentifier] = useState('');
//   const [date, setDate] = useState('');
//   const [distance, setDistance] = useState(25);
//   const [isLocationEnabled, setIsLocationEnabled] = useState(true);

//   const handleLocationToggle = () => {
//     setFilters((prevState) => ({ ...prevState, locationEnabled: !prevState.locationEnabled }));
//   };

//   const handleSliderChange = (event, newValue) => {
//     setFilters((prevState) => ({ ...prevState, distance: newValue }));
//   };

//   const handleTextChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prevState) => ({ ...prevState, [name]: value }));
//   };

//   // Hardcoded options for filters


//   const genders = [
//     { label: 'Male', value: '1' },
//     { label: 'Female', value: '2' },
//   ];

//   const sizes = [
//     { label: 'Small', value: '1' },
//     { label: 'Medium', value: '2' },
//     { label: 'Large', value: '3' },
//   ];


//   return (
//     <form>
//       <List>

//         {/* Filter by Gender */}
//         <ListItem>
//         <InputLabel>Gender</InputLabel>
//         {genders.map((gender) => (
//           <Chip
//             key={gender.value}
//             size="small"
//             label={gender.label}
//             onClick={() => setFilters((prevState) => ({ ...prevState, gender: gender.value }))}
//           />
//         ))}
//       </ListItem>

//         {/* Filter by Size */}
//         <ListItem>
//         <InputLabel>Size</InputLabel>
//         {sizes.map((size) => (
//           <Chip
//             key={size.value}
//             size="small"
//             label={size.label}
//             onClick={() => setFilters((prevState) => ({ ...prevState, size: size.value }))}
//           />
//         ))}
//       </ListItem>

    
//       <ListItem>
//         <Chip
//           size="small"
//           onClick={handleLocationToggle}
//           label={filters.locationEnabled ? 'Location Enabled' : 'Location Disabled'}
//         />
//       </ListItem>

//   {/* Apply Filters Button */}
//   <Button type="button" variant="contained" color="primary" onClick={() => applyFilters(filters)}>
//   Apply Filters
// </Button>

//         {/* Reset Filters Button */}
//         <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important', paddingBottom: '0.8rem !important' }}>
//           <Button variant="outlined" sx={{ width: '100%' }} color="primary">
//             Reset Filters
//           </Button>
//         </ListItem>
//       </List>
//     </form>
//   );
// };




// const PetsList = () => {
//   const [pets, setPets] = useState([]); // Store fetched pets
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state
//   // State for map center coordinates
//   // const [pagination, setPagination] = useState({});
//   const [pagination, setPagination] = useState({
//     page: 1,
//     totalPages: 1,
//     totalPets: 0,
//   }); // Pagination state
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [centerCoords, setCenterCoords] = useState([56.946285, 24.105078]); // Initial center coordinates

//   const [filters, setFilters] = useState({
//     identifier: '',
//     status: '',
//     category: '',
//     gender: '',
//     size: '',
//     date: '',
//     distance: 25,
//     locationEnabled: true,
//   });
  
//   const applyFilters = (filters) => {
//     // Update search params in the URL with current filter values
//     const queryParams = new URLSearchParams(filters);
//     queryParams.set('page', pagination.page); // Ensure that page number is included in the filters
//     setSearchParams(queryParams); // Update URL search params
//   };
  
//   const handlePanToLocation = (lat, lng) => {
//     console.log('lat, lng', lat, lng);
//     setCenterCoords([lat, lng]);
//   };
//  // Fetch pets data

// useEffect(() => {
//   const queryParams = new URLSearchParams(filters);
//   queryParams.set('page', pagination.page); // Make sure to include the page number
//   fetchPets(queryParams.toString()); // Pass the query string to the API
// }, [filters, pagination.page]); // Re-fetch pets when filters change or pagination page changes


// const fetchPets = async (queryParams) => {
//   const accessToken = localStorage.getItem('access_token');
//   if (!accessToken) {
//     setError('You must be logged in to view pets.');
//     setLoading(false);
//     return;
//   }

//   try {
//     setLoading(true);
//     setError(null);
//     const response = await fetch(`http://127.0.0.1:8000/api/pets/?${queryParams}`, {
//       headers: { Authorization: `Bearer ${accessToken}` },
//     });
//     const data = await response.json();

//     if (data?.results) {
//       setPets(data.results);
//       setPagination({
//         page: pagination.page,
//         totalPages: Math.ceil(data.count / 3),
//         totalPets: data.count,
//       });
//     } else {
//       throw new Error('Unexpected response structure');
//     }
//   } catch (err) {
//     setError('Failed to fetch pets. Please try again later.');
//   } finally {
//     setLoading(false);
//   }
// };



// const handlePaginationChange = (event, page) => {
//   setPagination((prevState) => ({ ...prevState, page }));
//   setSearchParams({ ...filters, page }); // Update URL with current filters and page
// };


//   if (loading) {
//     // Show spinner while loading
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <CircularProgress size={80} style={{ color: '#ff6600' }} />
//       </div>
//     );
//   }

//   if (error) {
//     // Show error message if fetch fails
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Alert severity="error">{error}</Alert>
//       </div>
//     );
//   }

//   if (pets.length === 0) {
//     // Show message if no pets are found
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
//         <Alert severity="info">No pets available at the moment. Please check back later.</Alert>
//       </div>
//     );
//   }

//   // Render pets in a grid
//   return (
//     <Grid container spacing={3}>

// <Grid item xs={3} sm={4} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
//         <Box>
     
//         <Sidebar filters={filters} setFilters={setFilters} applyFilters={applyFilters} />

     
//         </Box>
//       </Grid>
      // <Grid item xs={12} sm={12} md={9}>
      // <LeafletClusterMap pets={pets} 
      //  centerCoords={centerCoords} 
      // />
        //       <Box
        //   sx={{
        //     display: { xs: 'flex', md: 'flex' },
        //     justifyContent: 'flex-end',
        //     alignItems: 'center',
        //     padding: '16px 0 16px 0',
        //     // marginBottom: '16px',
        //     // backgroundColor: '#f9f9f9',
        //     backgroundColor: '#fff',
        //   }}
        // >
        //   {/* <Typography variant="body1" component="div">
        //     Discover {pagination.totalPets} Pet Listings Across {pagination.totalPages} Pages
        //   </Typography> */}

        //   <Button
        //     variant="contained"
        //     sx={{ display: { xs: 'flex', md: 'none' } }}
        //     color="primary"
        //     size="small"
        //     // onClick={handleDrawerToggle}
        //     startIcon={<FilterListIcon />}
        //   >
        //     Filter
        //   </Button>
        // </Box>
//       <Grid item xs={12}>
//           <Grid container spacing={3}>
//             {pets.length === 0 && loading && (
//               <Grid item xs={12} style={{ textAlign: 'center' }}>
//                 <CircularProgress />
//               </Grid>
//             )}
//             {pets.length === 0 && !loading && (
//               <Grid item xs={12} sm={12} md={12} lg={12}>
//                 {/* <Typography variant="h6" align="center" style={{ marginBottom: '1rem' }}>
//                   **No Listings Available**
//                 </Typography> */}
// No Listings Available

         
//               </Grid>
//             )}
//             {pets.map((pet) => (
//               <Grid item xs={12} sm={6} md={4} key={pet.id}>
//                 <PetCard pet={pet} 
//                  onPanToLocation={handlePanToLocation} 
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         </Grid>
    
//       {/* {pets.map((pet) => (
//         <Grid item xs={12} sm={6} md={4} key={pet.id}>
//           <PetCard pet={pet} />
//         </Grid>
//       ))} */}
//     </Grid>
//     <Grid
//         item
//         xs={12}
//         sm={4}
//         md={3}
//         sx={{ display: { xs: 'none', sm: 'block', md: 'block' } }}
//       ></Grid>

//       <Grid item xs={12} sm={8} md={9}>
//         <Pagination
//           sx={{ mt: 2 }}
//           page={pagination.page}
//           count={pagination.totalPages}
//           onChange={handlePaginationChange}
//           // page={pagination.page}
//           // count={pagination.totalPages}
//           // onChange={handlePaginationChange}
//           size="small"
//           color="primary"
//         />
//       </Grid>
//     </Grid>
//   );
// };

// export default PetsList;
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, CircularProgress,Box, Alert, Chip, List, ListItem,TextField, InputLabel, Pagination, Container } from '@mui/material';
import PetCard from '../components/PetCard';
import LeafletClusterMap from '../components/LeafletClusterMap';
import Typography from '@mui/material/Typography';

const Sidebar = ({ filters, handleChipClick, handleDateChange, handleSearchChange}) => {
  const GENDER_CHOICES = [
    { label: 'Tēviņš', value: '1' },
    { label: 'Mātīte', value: '2' },
  ];

  const SIZE_CHOICES = [
    { label: 'Mazs', value: '1' },
    { label: 'Vidējs', value: '2' },
    { label: 'Liels', value: '3' },
  ];

  const SPECIES_CHOICES = [
    { label: 'Suns', value: '1' },
    { label: 'Kaķis', value: '2' },
    { label: 'Cits', value: '3' },
  ];

  const AGE_CHOICES = [
    { label: 'Mazulis', value: '1' },
    { label: 'Pieaugušais', value: '2' },
    { label: 'Seniors', value: '3' },
  ];

  const STATUS_CHOICES = [
    { label: 'Pazudis', value: '1' },
    { label: 'Atrasts', value: '2' },
    { label: 'Redzēts', value: '3' },
  ];

const PATTERN_CHOICES = [
    { label: 'Vienkrāsains', value: '1' },
    { label: 'Strīpains', value: '2' },
    { label: 'Punktveida', value: '3' },
    { label: 'Plankumains', value: '4' },
    { label: 'Raibs', value: '5' },
  ];

  const COLOR_CHOICES = [
    { label: 'Melns', value: '1' },
    { label: 'Pelēks', value: '2' },
    { label: 'Balts', value: '3' },
    { label: 'Krēmīgs', value: '4' },
    { label: 'Dzeltens', value: '5' },
    { label: 'Zeltains', value: '6' },
    { label: 'Brūns', value: '7' },
    { label: 'Sarkans', value: '8' },
    { label: 'Lillīgs', value: '9' },
    { label: 'Zils', value: '10' },
    { label: 'Zaļš', value: '11' },
    { label: 'Haki', value: '12' },
    { label: 'Bēšīgs', value: '13' },
    { label: 'Dzeltenbrūns', value: '14' },
    { label: 'Kaštanbrūns', value: '15' }
  ];


  return (
    <form>
      <List>
        {/* Filter by Status */}
       <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Statuss</InputLabel>
              {STATUS_CHOICES.map((status) => (
              <Chip key={status.value} color={filters.status === status.value ? 'primary' : 'default'} onClick={() => handleChipClick('status', status.value)} sx={{ marginRight: '5px',  marginBottom: '5px' }} size="small" label={status.label} />
            ))}
          </Box>
        </ListItem>

        {/* Filter by Species */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Suga</InputLabel>
              {SPECIES_CHOICES.map((option) => (
              <Chip key={option.value} color={filters.species === option.value ? 'primary' : 'default'} onClick={() => handleChipClick('species', option.value)} sx={{ marginRight: '5px',  marginBottom: '5px' }} size="small" label={option.label} />
            ))}
          </Box>
        </ListItem>

        {/* Gender Filters */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Dzimums</InputLabel>
              {GENDER_CHOICES.map((gender) => (
              <Chip key={gender.value}  color={filters.gender === gender.value ? 'primary' : 'default'} onClick={() => handleChipClick('gender', gender.value)} sx={{ marginRight: '5px', marginBottom: '5px' }} size="small" label={gender.label} />
            ))}
          </Box>
        </ListItem>
        {/* Filter by Size */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Augums</InputLabel>
              {SIZE_CHOICES.map((size) => (
              <Chip key={size.value} color={filters.size === size.value ? 'primary' : 'default'} onClick={() => handleChipClick('size', size.value)} sx={{ marginRight: '5px',  marginBottom: '5px' }} size="small" label={size.label} />
            ))}
          </Box>
        </ListItem>

        {/* Filter by Age */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Vecums</InputLabel>
              {AGE_CHOICES.map((age) => (
              <Chip key={age.value} color={filters.age === age.value ? 'primary' : 'default'} onClick={() => handleChipClick('age', age.value)} sx={{ marginRight: '5px',  marginBottom: '5px' }} size="small" label={age.label} />
            ))}
          </Box>
        </ListItem>

        {/* Filter by Pattern */}
        <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Kažoka raksts</InputLabel>
              {PATTERN_CHOICES.map((pattern) => (
              <Chip key={pattern.value} color={filters.pattern === pattern.value ? 'primary' : 'default'} onClick={() => handleChipClick('pattern', pattern.value)} sx={{ marginRight: '5px',  marginBottom: '5px' }} size="small" label={pattern.label} />
            ))}
          </Box>
        </ListItem>

          {/* Filter by Primary Color */}
          <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Krāsa</InputLabel>
              {COLOR_CHOICES.map((color) => (
              <Chip key={color.value} color={filters.color === color.value ? 'primary' : 'default'} onClick={() => handleChipClick('color', color.value)} sx={{ marginRight: '5px',  marginBottom: '5px' }} size="small" label={color.label} />
            ))}
          </Box>
        </ListItem>




                {/* Filter by Date */}
                <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
                  <Box sx={{ width: '100%' }}>
                    <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Datums</InputLabel>
                    <TextField
                      label=""
                      type="date"
                      variant="outlined"
                      size="small"
                      fullWidth
                      onChange={(e) => handleDateChange(e.target.value)}  // Update state on change
                      value={filters.date || ''}  // Bind the value of the input to the state
                    />

                  </Box>
                </ListItem>
        {/* Search by Notes or Name */}
        {/* <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box sx={{ width: '100%' }}>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Meklēt</InputLabel>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Type to search"
              fullWidth
              onChange={(e) => handleSearchChange(e.target.value)}
            />
          </Box>
        </ListItem> */}
                <ListItem sx={{ padding: '0 !important', paddingTop: '0.8rem !important' }}>
          <Box sx={{ width: '100%' }}>
            <InputLabel sx={{ fontWeight: '500', color: '#000' }}>Meklēt</InputLabel>
            <TextField
              size="small"
              variant="outlined"
              placeholder="Type to search"
              fullWidth
              // onChange={(e) => handleSearchChange(e.target.value)}
  onKeyDown={(e) => {if (e.key === 'Enter') {
    handleSearchChange(e.target.value);  // Trigger search when Enter is pressed
  } }}
            />
          </Box>
        </ListItem>
      </List>
    </form>
  );
};

const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [filters, setFilters] = useState({ gender: '', size: '', species: '', age: '', status: '', pattern: '', color: '', date: '', search: '' });
  const [searchParams, setSearchParams] = useSearchParams();
  const [centerCoords, setCenterCoords] = useState([56.946285, 24.105078]); // Initial center coordinates
  // Apply filters to the URL and trigger data fetch
  const applyFiltersToURL = (newFilters, page = 1) => {
    const queryParams = new URLSearchParams(newFilters);
    queryParams.set('page', page); // Add the page parameter
    setSearchParams(queryParams); // Update the URL with filters
  };

  // Fetch pets based on filters and page
  const fetchPets = async (filters, page) => {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      setError('You must be logged in to view pets.');
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError(null);

      // Ensure filters and page are in the queryParams
      const queryParams = new URLSearchParams(filters);
      queryParams.set('page', page);

      const response = await fetch(`http://127.0.0.1:8000/api/pets/?${queryParams}`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch pets');
      }

      const data = await response.json();

      if (data?.results) {
        setPets(data.results);
        setPagination({
          page: page,
          totalPages: Math.ceil(data.count / 6), // Assuming 3 pets per page
        });
      } else {
        throw new Error('Unexpected response structure');
      }
    } catch (err) {
      setError('Failed to fetch pets. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Sync filters from URL and trigger fetch on URL change
  useEffect(() => {
    const genderFilter = searchParams.get('gender') || '';
    const sizeFilter = searchParams.get('size') || '';
    const speciesFilter = searchParams.get('species') || '';
    const ageFilter = searchParams.get('age') || '';
    const statusFilter = searchParams.get('status') || '';
    const patternFilter = searchParams.get('pattern') || '';
    const colorFilter = searchParams.get('color') || '';
    const dateFilter = searchParams.get('date') || '';
    const searchFilter = searchParams.get('search') || '';

    const page = parseInt(searchParams.get('page'), 10) || 1;
    
    const updatedFilters = { gender: genderFilter, size: sizeFilter, species: speciesFilter, age: ageFilter, status: statusFilter, pattern: patternFilter, color: colorFilter, date: dateFilter, search: searchFilter };
    
    setFilters(updatedFilters);
    setPagination((prev) => ({ ...prev, page }));

    // Fetch pets when searchParams (URL) changes
    fetchPets(updatedFilters, page);
    // fetchPets(updatedFilters, pagination.page); maybe need to use one?
  }, [searchParams]); // This effect runs when searchParams changes

  // Handle page change in pagination
  const handlePaginationChange = (event, page) => {
    setPagination((prevState) => ({ ...prevState, page }));
    applyFiltersToURL(filters, page); // Update page number in URL and trigger fetch
  };

  // Handle chip click to immediately fetch based on updated filters
  const handleChipClick = (type, value) => {
    setFilters((prev) => {
      const newFilters = { ...prev };
      newFilters[type] = newFilters[type] === value ? '' : value; // Toggle filter value
      applyFiltersToURL(newFilters, 1); // Update URL and fetch data for the first page
      return newFilters;
    });
  };

  const handleDateChange = (date) => {
    setFilters((prev) => {
      const newFilters = { ...prev, date: date };  // Store the date in the state
      applyFiltersToURL(newFilters, 1);  // Update URL and fetch data for the first page
      return newFilters;
    });
  };

    // Handle search input change
    // const handleSearchChange = (searchTerm) => {
    //   if (searchTerm.length >= 3 || searchTerm === '') {
    //     setFilters((prev) => {
    //       const newFilters = { ...prev, search: searchTerm };
    //       applyFiltersToURL(newFilters, 1); // Update URL and fetch data for the first page
    //       return newFilters;
    //     });
    //   }
    // };

    // Handle search input change only when 'Enter' is pressed
// const handleSearchChange = (searchTerm) => {
//   setFilters((prev) => {
//     const newFilters = { ...prev, search: searchTerm };
//     applyFiltersToURL(newFilters, 1); // Update URL and fetch data for the first page
//     return newFilters;
//   });
// };

  // Handle search input change
  const handleSearchChange = (searchTerm) => {
    setFilters((prev) => {
      const newFilters = { ...prev, search: searchTerm };
      applyFiltersToURL(newFilters, 1); // Reset to page 1 when search term changes
      return newFilters;
    });
  };

  // const handleDateChange = (date) => {
  //   const isoDate = new Date(date).toISOString(); // Converts to ISO format
  //   setFilters((prev) => {
  //     const newFilters = { ...prev, date: isoDate };  // Use ISO date format
  //     applyFiltersToURL(newFilters, 1);  // Update URL and fetch data for the first page
  //     return newFilters;
  //   });
  // };
  
  // const handleDateChange = (date) => {
  //   // Ensure the date is in YYYY-MM-DD format
  //   const formattedDate = new Date(date).toISOString().split('T')[0]; // Format to YYYY-MM-DD
  //   setFilters((prev) => {
  //     const newFilters = { ...prev, date: formattedDate };  // Store the date in the correct format
  //     applyFiltersToURL(newFilters, 1);  // Update URL and fetch data for the first page
  //     return newFilters;
  //   });
  // };
  
  const handlePanToLocation = (lat, lng) => {
    console.log('lat, lng', lat, lng);
    setCenterCoords([lat, lng]);
  };
 

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress size={80} style={{ color: '#ff6600' }} />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Alert severity="error">{error}</Alert>
      </div>
    );
  }

  // if (pets.length === 0) {
  //   return (
  //     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
  //       <Alert severity="info">No pets available at the moment. Please check back later.</Alert>
  //     </div>
  //   );
  // }

  return (
    <Container
                                  component="main"
                                  sx={{
                                    flexGrow: 1,
                                    py: '2rem',
                                    // pb: '2rem',
                                    width: '100%',
                                    overflowX: 'hidden',
                                  }}
                       >
    <Grid container spacing={3}>
       


     
     <Grid item xs={3} sm={4} md={3} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box>
         <Sidebar filters={filters} handleChipClick={handleChipClick} handleDateChange={handleDateChange} handleSearchChange={handleSearchChange} />
        </Box>
    </Grid>


   

    <Grid item xs={12} sm={12} md={9}>
      <LeafletClusterMap pets={pets} 
       centerCoords={centerCoords} 
      />
                    <Box
          sx={{
            display: { xs: 'flex', md: 'flex' },
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '16px 0 16px 0',
            // marginBottom: '16px',
            // backgroundColor: '#f9f9f9',
            backgroundColor: '#fff',
          }}
        >

        </Box>

        <Grid container spacing={3}>
        
  {pets.length === 0 ? (
    <Grid item xs={12}>
      <Typography variant="h6" color="textSecondary" textAlign="center">
        No pets found
      </Typography>
    </Grid>
  ) : (
    pets.map((pet) => (
      <Grid item xs={12} sm={6} md={4} key={pet.id}>
        <PetCard pet={pet} onPanToLocation={handlePanToLocation} />
      </Grid>
    ))
  )}
</Grid>


        <Pagination
          sx={{ mt: 2 }}
          page={pagination.page}
          count={pagination.totalPages}
          onChange={handlePaginationChange}
          size="small"
          color="primary"
        />
      </Grid>
      
    </Grid>
    </Container>
  );
};

export default PetsList;
