import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Grid, CircularProgress,Box, Alert, Chip, List, ListItem,TextField, InputLabel, Pagination, Container } from '@mui/material';
import PetCard from '../components/PetCard';
import LeafletClusterMap from '../components/LeafletClusterMap';
import Typography from '@mui/material/Typography';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
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

        const response = await fetch(`${API_BASE_URL}/pets/?${queryParams}`, {
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
  const handleSearchChange = (searchTerm) => {
    setFilters((prev) => {
      const newFilters = { ...prev, search: searchTerm };
      applyFiltersToURL(newFilters, 1); // Reset to page 1 when search term changes
      return newFilters;
    });
  };
  
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

  return (
      <Container component="main" maxWidth="lg" sx={{ py: 6, paddingLeft: 0, paddingRight: 0 }}>
    <Grid container spacing={3}>
       

    
     
     <Grid item xs={3} sm={4} md={3} sx={{ display: { xs: 'none', md: 'block', paddingLeft: "0 !important", paddingRight: "0 !important" } }}>
        <Box>
         <Sidebar filters={filters} handleChipClick={handleChipClick} handleDateChange={handleDateChange} handleSearchChange={handleSearchChange} />
        </Box>
    </Grid>


   

    <Grid item xs={12} sm={12} md={9}>
      <LeafletClusterMap pets={pets} centerCoords={centerCoords} />
        <Grid container spacing={3}  sx={{ mt: 2 }}>
        
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
  )}</Grid>

        <Pagination sx={{ mt: 2 }} page={pagination.page} count={pagination.totalPages} onChange={handlePaginationChange} color="primary" />
      </Grid>
      
    </Grid>
    </Container>
  );
};

export default PetsList;
