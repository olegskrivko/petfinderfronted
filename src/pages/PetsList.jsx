// import React, { useState, useEffect } from 'react';
// import { Grid,Button, CircularProgress, Box, Container, Alert, Pagination } from '@mui/material';
// // import { Skeleton } from '@mui/material'; // Add this at the top
// import PetCardSkeleton from './PetCardSkeleton'; // adjust path if needed
// import Sidebar from '../components/Sidebar';
// import PetCard from '../components/PetCard';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { useLocation, useNavigate } from 'react-router-dom'; 

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const PetsList = () => {
//   const [pets, setPets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
//   const [filters, setFilters] = useState({ species: [], gender: [] });

//   const location = useLocation();
//   const navigate = useNavigate();

//   // Effect to read URL query parameters on page load and whenever URL changes
//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const species = queryParams.get('species') ? queryParams.get('species').split(',') : [];
//     const gender = queryParams.get('gender') ? queryParams.get('gender').split(',') : [];
//     const page = parseInt(queryParams.get('page')) || 1;

//     setFilters({ species, gender });
//     setPagination({ page, totalPages: pagination.totalPages });
    
//     // Fetch pets based on the updated filters and pagination
//     fetchPets({ species, gender, page });
//   }, [location.search]);  // This dependency ensures the effect runs when the URL changes

//   const fetchPets = async ({ species, gender, page }) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const queryParams = new URLSearchParams();
//       if (species.length) queryParams.append('species', species.join(','));
//       if (gender.length) queryParams.append('gender', gender.join(','));
//       queryParams.append('page', page);

//       const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
//       navigate(newUrl, { replace: true });  // This updates the URL without refreshing the page

//       const res = await fetch(`${API_BASE_URL}/pets/?${queryParams}`);
//       if (!res.ok) throw new Error('Failed to fetch pets');
      
//       const data = await res.json();
//       setPets(data.results);
//       setPagination((prev) => ({
//         ...prev,
//         totalPages: Math.ceil(data.count / 6),  // Update totalPages based on the response count
//       }));
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePaginationChange = (e, page) => {
//     // Update the pagination state and URL with the new page
//     setPagination((prev) => ({ ...prev, page }));
    
//     const queryParams = new URLSearchParams(location.search);
//     queryParams.set('page', page);
    
//     navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
//   };

//   // Handle resetting the filters
//   const handleResetFilters = () => {
//     setFilters({ species: [], gender: [] });
//     setPagination((prev) => ({ ...prev, page: 1 }));

//     // Manually reset the URL when filters are cleared
//     const queryParams = new URLSearchParams();
//     queryParams.append('page', 1);  // Keep the page parameter at 1
//     navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
//   };

//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//     setPagination((prev) => ({ ...prev, page: 1 }));
  
//     const queryParams = new URLSearchParams();
//     if (newFilters.species.length) queryParams.append('species', newFilters.species.join(','));
//     if (newFilters.gender.length) queryParams.append('gender', newFilters.gender.join(','));
//     queryParams.append('page', 1);
  
//     navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
//   };

//   return (
//     <Container maxWidth="lg">
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={3}>
//           {/* <Sidebar
//             filters={filters}
//             setFilters={setFilters}
//             onApply={() => fetchPets({ ...filters, page: 1 })}
//             onReset={handleResetFilters}
//           /> */}
//           <Sidebar
//   filters={filters}
//   setFilters={setFilters}
//   onFilterChange={handleFilterChange}
//   onReset={handleResetFilters}
// />

//         </Grid>
//         <Grid item xs={12} md={9}>
//         {loading ? (
//           <Grid container spacing={2}>
//           {[...Array(6)].map((_, index) => (
//             <Grid item xs={12} sm={6} md={4} key={index}>
//               <PetCardSkeleton />
//             </Grid>
//           ))}
//         </Grid>

// ) : error ? (
//   <Alert severity="error">{error}</Alert>
// ) : (
//   <>

// <Box py={2} sx={{
//             display: { xs: 'flex', md: 'flex' },
//             justifyContent: 'flex-end',
//             alignItems: 'center',
//           }}
//         >
       

//           <Button
//             variant="contained"
//             sx={{ display: { xs: 'flex', md: 'none' } }}
//             color="primary"
//             size="small"
//             // onClick={handleDrawerToggle}
//             startIcon={<FilterListIcon />}
//           >
//             Filter
//           </Button>
//         </Box>
//     <Grid container spacing={2}>
//       {pets.map((pet) => {
//         const petDetailUrl = `/pets/${pet.id}?species=${filters.species.join(',')}&gender=${filters.gender.join(',')}&page=${pagination.page}`;
//         return (
//           <Grid item xs={12} sm={6} md={4} key={pet.id}>
//             <PetCard 
//               pet={pet} 
//               filters={filters} 
//               pagination={pagination} 
//               petDetailUrl={petDetailUrl} 
//             />
//           </Grid>
//         );
//       })}
//     </Grid>
//     <Pagination
//       color="primary"
//       sx={{ mt: "2rem" }}
//       page={pagination.page}
//       count={pagination.totalPages}
//       onChange={handlePaginationChange}
//     />
//   </>
// )}


//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default PetsList;






// // it doesnt work find where is the issue, Requirements i do pagination then filters must be the same, only page number should change
// // when i click on chip by adding filter then page should change in url to 1, because new start your new listing.  
// // when you open pet details go back then filters must be the same, and page the same
// WORKING CODE MULTIPLE VALUES
// import React, { useState, useEffect } from 'react';
// import {
//   Grid, Button, CircularProgress, Box, Container,
//   Alert, Pagination, Drawer, useTheme, useMediaQuery
// } from '@mui/material';
// import PetCardSkeleton from './PetCardSkeleton';
// import Sidebar from '../components/Sidebar';
// import PetCard from '../components/PetCard';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { useLocation, useNavigate } from 'react-router-dom';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const PetsList = () => {
//   const [pets, setPets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
//   const [filters, setFilters] = useState({ status: [], species: [], gender: [] });
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const status = queryParams.get('status') ? queryParams.get('status').split(',') : [];
//     const species = queryParams.get('species') ? queryParams.get('species').split(',') : [];
//     const gender = queryParams.get('gender') ? queryParams.get('gender').split(',') : [];
//     const page = parseInt(queryParams.get('page')) || 1;

//     setFilters({ status, species, gender });
//     setPagination({ page, totalPages: pagination.totalPages });

//     fetchPets({ status, species, gender, page });
//   }, [location.search]);

//   const fetchPets = async ({ status, species, gender, page }) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const queryParams = new URLSearchParams();
//       if (status.length) queryParams.append('status', status.join(','));
//       if (species.length) queryParams.append('species', species.join(','));
//       if (gender.length) queryParams.append('gender', gender.join(','));
//       queryParams.append('page', page);

//       const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
//       navigate(newUrl, { replace: true });

//       const res = await fetch(`${API_BASE_URL}/pets/?${queryParams}`);
//       if (!res.ok) throw new Error('Failed to fetch pets');

//       const data = await res.json();
//       setPets(data.results);
//       setPagination((prev) => ({
//         ...prev,
//         totalPages: Math.ceil(data.count / 6),
//       }));
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePaginationChange = (e, page) => {
//     setPagination((prev) => ({ ...prev, page }));
//     const queryParams = new URLSearchParams(location.search);
//     queryParams.set('page', page);
//     navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
//   };

//   const handleResetFilters = () => {
//     setFilters({ status: [], species: [], gender: [] });
//     setPagination((prev) => ({ ...prev, page: 1 }));
//     navigate(`${window.location.pathname}?page=1`, { replace: true });
//   };

//   const handleFilterChange = (newFilters) => {
//     setFilters(newFilters);
//     setPagination((prev) => ({ ...prev, page: 1 }));

//     const queryParams = new URLSearchParams();
//     if (newFilters.status.length) queryParams.append('status', newFilters.status.join(','));
//     if (newFilters.species.length) queryParams.append('species', newFilters.species.join(','));
//     if (newFilters.gender.length) queryParams.append('gender', newFilters.gender.join(','));
//     queryParams.append('page', 1);

//     navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });

//     // Close drawer after applying filters on mobile
//     // if (isMobile) setDrawerOpen(false);
//   };

//   return (
//     <Container maxWidth="lg">
//       <Grid container spacing={3}>
//         {!isMobile && (
//           <Grid item xs={12} md={3}>
//             <Sidebar
//               filters={filters}
//               setFilters={setFilters}
//               onFilterChange={handleFilterChange}
//               onReset={handleResetFilters}
//             />
//           </Grid>
//         )}

//         <Grid item xs={12} md={isMobile ? 12 : 9}>
//           <Box
//             py={2}
//             sx={{
//               display: { xs: 'flex', md: 'none' },
//               justifyContent: 'flex-end',
//             }}
//           >
//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               onClick={() => setDrawerOpen(true)}
//               startIcon={<FilterListIcon />}
//             >
//               Filter
//             </Button>
//           </Box>

//           {/* Drawer for mobile */}
//           <Drawer
//             anchor="left"
//             open={drawerOpen}
//             onClose={() => setDrawerOpen(false)}
//           >
//             <Box sx={{ width: 250, p: 2 }}>
//               <Sidebar
//                 filters={filters}
//                 setFilters={setFilters}
//                 onFilterChange={handleFilterChange}
//                 onReset={handleResetFilters}
//               />
//             </Box>
//           </Drawer>

//           {loading ? (
//             <Grid container spacing={2}>
//               {[...Array(6)].map((_, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                   <PetCardSkeleton />
//                 </Grid>
//               ))}
//             </Grid>
//           ) : error ? (
//             <Alert severity="error">{error}</Alert>
//           ) : (
//             <>
//               <Grid container spacing={2}>
//                 {pets.map((pet) => {
//                   const petDetailUrl = `/pets/${pet.id}?status=${filters.status.join(',')}&species=${filters.species.join(',')}&gender=${filters.gender.join(',')}&page=${pagination.page}`;
//                   return (
//                     <Grid item xs={12} sm={6} md={4} key={pet.id}>
//                       <PetCard
//                         pet={pet}
//                         filters={filters}
//                         pagination={pagination}
//                         petDetailUrl={petDetailUrl}
//                       />
//                     </Grid>
//                   );
//                 })}
//               </Grid>
//               <Pagination
//                 color="primary"
//                 sx={{ mt: '2rem' }}
//                 page={pagination.page}
//                 count={pagination.totalPages}
//                 onChange={handlePaginationChange}
//               />
//             </>
//           )}
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default PetsList;
// import React, { useState, useEffect } from 'react';
// import {
//   Grid, Button, CircularProgress, Box, Container,
//   Alert, Pagination, Drawer, useTheme, useMediaQuery
// } from '@mui/material';
// import PetCardSkeleton from './PetCardSkeleton';
// import Sidebar from '../components/Sidebar';
// import PetCard from '../components/PetCard';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import { useLocation, useNavigate } from 'react-router-dom';

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// const PetsList = () => {
//   const [pets, setPets] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
//   const [filters, setFilters] = useState({ status: [], species: [], gender: [] });
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const location = useLocation();
//   const navigate = useNavigate();

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   useEffect(() => {
//     const queryParams = new URLSearchParams(location.search);
//     const status = queryParams.get('status') ? queryParams.get('status').split(',') : [];
//     const species = queryParams.get('species') ? queryParams.get('species') : '';  // One value only
//     const gender = queryParams.get('gender') ? queryParams.get('gender') : '';  // One value only
//     const page = parseInt(queryParams.get('page')) || 1;

//     setFilters({ status, species, gender });
//     setPagination({ page, totalPages: pagination.totalPages });

//     fetchPets({ status, species, gender, page });
//   }, [location.search]);

//   const fetchPets = async ({ status, species, gender, page }) => {
//     try {
//       setLoading(true);
//       setError(null);

//       const queryParams = new URLSearchParams();
//       if (status.length) queryParams.append('status', status.join(','));
//       if (species) queryParams.append('species', species); // One value only
//       if (gender) queryParams.append('gender', gender); // One value only
//       queryParams.append('page', page);

//       const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
//       navigate(newUrl, { replace: true });

//       const res = await fetch(`${API_BASE_URL}/pets/?${queryParams}`);
//       if (!res.ok) throw new Error('Failed to fetch pets');

//       const data = await res.json();
//       setPets(data.results);
//       setPagination((prev) => ({
//         ...prev,
//         totalPages: Math.ceil(data.count / 6),
//       }));
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePaginationChange = (e, page) => {
//     setPagination((prev) => ({ ...prev, page }));
//     const queryParams = new URLSearchParams(location.search);
//     queryParams.set('page', page);
//     navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
//   };

//   const handleResetFilters = () => {
//     setFilters({ status: [], species: '', gender: '' }); // Reset species and gender to empty string
//     setPagination((prev) => ({ ...prev, page: 1 }));
//     navigate(`${window.location.pathname}?page=1`, { replace: true });
//   };

//   const handleFilterChange = (newFilters) => {
//     // Restrict species and gender to one value only
//     if (newFilters.species.length > 1) {
//       newFilters.species = [newFilters.species[0]];  // Only allow the first selected species
//     }
//     if (newFilters.gender.length > 1) {
//       newFilters.gender = [newFilters.gender[0]];  // Only allow the first selected gender
//     }

//     setFilters(newFilters);
//     setPagination((prev) => ({ ...prev, page: 1 }));

//     const queryParams = new URLSearchParams();
//     if (newFilters.status.length) queryParams.append('status', newFilters.status.join(','));
//     if (newFilters.species) queryParams.append('species', newFilters.species);
//     if (newFilters.gender) queryParams.append('gender', newFilters.gender);
//     queryParams.append('page', 1);

//     navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
//   };

//   return (
//     <Container maxWidth="lg">
//       <Grid container spacing={3}>
//         {!isMobile && (
//           <Grid item xs={12} md={3}>
//             <Sidebar
//               filters={filters}
//               setFilters={setFilters}
//               onFilterChange={handleFilterChange}
//               onReset={handleResetFilters}
//             />
//           </Grid>
//         )}

//         <Grid item xs={12} md={isMobile ? 12 : 9}>
//           <Box
//             py={2}
//             sx={{
//               display: { xs: 'flex', md: 'none' },
//               justifyContent: 'flex-end',
//             }}
//           >
//             <Button
//               variant="contained"
//               color="primary"
//               size="small"
//               onClick={() => setDrawerOpen(true)}
//               startIcon={<FilterListIcon />}
//             >
//               Filter
//             </Button>
//           </Box>

//           {/* Drawer for mobile */}
//           <Drawer
//             anchor="left"
//             open={drawerOpen}
//             onClose={() => setDrawerOpen(false)}
//           >
//             <Box sx={{ width: 250, p: 2 }}>
//               <Sidebar
//                 filters={filters}
//                 setFilters={setFilters}
//                 onFilterChange={handleFilterChange}
//                 onReset={handleResetFilters}
//               />
//             </Box>
//           </Drawer>

//           {loading ? (
//             <Grid container spacing={2}>
//               {[...Array(6)].map((_, index) => (
//                 <Grid item xs={12} sm={6} md={4} key={index}>
//                   <PetCardSkeleton />
//                 </Grid>
//               ))}
//             </Grid>
//           ) : error ? (
//             <Alert severity="error">{error}</Alert>
//           ) : (
//             <>
//               <Grid container spacing={2}>
//                 {pets.map((pet) => {
//                   const petDetailUrl = `/pets/${pet.id}?status=${filters.status.join(',')}&species=${filters.species}&gender=${filters.gender}&page=${pagination.page}`;
//                   return (
//                     <Grid item xs={12} sm={6} md={4} key={pet.id}>
//                       <PetCard
//                         pet={pet}
//                         filters={filters}
//                         pagination={pagination}
//                         petDetailUrl={petDetailUrl}
//                       />
//                     </Grid>
//                   );
//                 })}
//               </Grid>
//               <Pagination
//                 color="primary"
//                 sx={{ mt: '2rem' }}
//                 page={pagination.page}
//                 count={pagination.totalPages}
//                 onChange={handlePaginationChange}
//               />
//             </>
//           )}
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default PetsList;
import React, { useState, useEffect } from 'react';
import {
  Grid, Button, CircularProgress, Box, Container,
  Alert, Pagination, Drawer, useTheme, useMediaQuery
} from '@mui/material';
import PetCardSkeleton from './PetCardSkeleton';
import Sidebar from '../components/Sidebar';
import PetCard from '../components/PetCard';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useLocation, useNavigate } from 'react-router-dom';
import LeafletClusterMap from '../components/LeafletClusterMap';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const PetsList = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });
  const [filters, setFilters] = useState({ status: '', species: '', gender: '', size: '', pattern: '', date: '', search: '', color: '', });
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [centerCoords, setCenterCoords] = useState([56.946285, 24.105078]); 
  const location = useLocation();
  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handlePanToLocation = (lat, lng) => {
    console.log('lat, lng', lat, lng);
    setCenterCoords([lat, lng]);
  };
 

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const status = queryParams.get('status') || '';  // One value only
    const species = queryParams.get('species') || '';  // One value only
    const gender = queryParams.get('gender') || '';  // One value only
    const size = queryParams.get('size') || '';  // One value only
    const pattern = queryParams.get('pattern') || '';  // One value only
    const date = queryParams.get('date') || '';
    const search = queryParams.get('search') || ''; 
    const color = queryParams.get('color') || '';     
    const page = parseInt(queryParams.get('page')) || 1;

    setFilters({ status, species, gender, size, pattern, date, search, color });
    setPagination({ page, totalPages: pagination.totalPages });

    fetchPets({ status, species, gender, size, pattern, date, search, color, page });
  }, [location.search]);

  const fetchPets = async ({ status, species, gender, size, pattern, date, search, color, page }) => {
    try {
      setLoading(true);
      setError(null);

      const queryParams = new URLSearchParams();
      if (status) queryParams.append('status', status);  // One status only
      if (species) queryParams.append('species', species);  // One species only
      if (gender) queryParams.append('gender', gender);  // One gender only
      if (size) queryParams.append('size', size);  // One size only
      if (pattern) queryParams.append('pattern', pattern);  // One pattern only
      if (date) queryParams.append('date', date);  // One pattern only
      if (search) queryParams.append('search', search);  // One pattern only
      if (color) queryParams.append('color', color);  // One pattern only
      queryParams.append('page', page);

      const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
      navigate(newUrl, { replace: true });

      const res = await fetch(`${API_BASE_URL}/pets/?${queryParams}`);
      if (!res.ok) throw new Error('Failed to fetch pets');

      const data = await res.json();
      setPets(data.results);
      setPagination((prev) => ({
        ...prev,
        totalPages: Math.ceil(data.count / 6),
      }));
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handlePaginationChange = (e, page) => {
    setPagination((prev) => ({ ...prev, page }));
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', page);
    navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
  };

  const handleResetFilters = () => {
    setFilters({ status: '', species: '', gender: '', size: '', pattern: '', date: '', search: '', color: '', }); // Reset to empty values
    setPagination((prev) => ({ ...prev, page: 1 }));
    navigate(`${window.location.pathname}?page=1`, { replace: true });
  };

  const handleFilterChange = (newFilters) => {
    // Ensure each filter only has one value
    if (newFilters.species) {
      newFilters.species = newFilters.species;  // One value only
    }
    if (newFilters.gender) {
      newFilters.gender = newFilters.gender;  // One value only
    }
    if (newFilters.status) {
      newFilters.status = newFilters.status;  // One value only
    }
    if (newFilters.size) {
      newFilters.size = newFilters.size;  // One value only
    }
    if (newFilters.pattern) {
      newFilters.pattern = newFilters.pattern;  // One value only
    }
    if (newFilters.date) {
      newFilters.date = newFilters.date;  // One value only
    }
    if (newFilters.search) {
      newFilters.search = newFilters.search;  // One value only
    }
    if (newFilters.color) {
      newFilters.color = newFilters.color;  // One value only
    }


    
    setFilters(newFilters);
    setPagination((prev) => ({ ...prev, page: 1 }));

    const queryParams = new URLSearchParams();

    // Add status filter to query params (only one value allowed)
    if (newFilters.status) queryParams.append('status', newFilters.status);
    if (newFilters.species) queryParams.append('species', newFilters.species);
    if (newFilters.gender) queryParams.append('gender', newFilters.gender);
    if (newFilters.size) queryParams.append('size', newFilters.size);
    if (newFilters.pattern) queryParams.append('pattern', newFilters.pattern);
    if (newFilters.date) queryParams.append('date', newFilters.date);
    if (newFilters.search) queryParams.append('search', newFilters.search);
    if (newFilters.color) queryParams.append('color', newFilters.color);

    // Add the page number
    queryParams.append('page', 1);

    // Update the URL with the new query params
    navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
  };

  return (
    <Container maxWidth="lg" sx={{ paddingLeft: "0rem !important", paddingRight: "0rem !important" }}>
      <Grid container spacing={3}>
        {!isMobile && (
          <Grid item xs={12} md={3}>
            <Sidebar
              filters={filters}
              setFilters={setFilters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
            />
          </Grid>
        )}

        <Grid item xs={12} md={isMobile ? 12 : 9}>
        <Box
    
            sx={{
              marginBottom: { xs: 'none', md: '1rem' },
              justifyContent: 'flex-end',
            }}
          >
          <LeafletClusterMap pets={pets} centerCoords={centerCoords} />
          </Box>
          <Box
            py={2}
            sx={{
              display: { xs: 'flex', md: 'none' },
              justifyContent: 'flex-end',
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => setDrawerOpen(true)}
              startIcon={<FilterListIcon />}
            >
              Filter
            </Button>
          </Box>

          {/* Drawer for mobile */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
          >
            <Box sx={{ width: 300, p: 2 }}>
              <Sidebar
                filters={filters}
                setFilters={setFilters}
                onFilterChange={handleFilterChange}
                onReset={handleResetFilters}
              />
            </Box>
          </Drawer>

          {loading ? (
            <Grid container spacing={2}>
              {[...Array(6)].map((_, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <PetCardSkeleton />
                </Grid>
              ))}
            </Grid>
          ) : error ? (
            <Alert severity="error">{error}</Alert>
          ) : (
            <>
              <Grid container spacing={2}>
                {pets.map((pet) => {
                  const petDetailUrl = `/pets/${pet.id}?status=${filters.status}&species=${filters.species}&gender=${filters.gender}&size=${filters.size}&pattern=${filters.pattern}&date=${filters.date}&search=${filters.search}&color=${filters.color}&page=${pagination.page}`;
                  return (
                    <Grid item xs={12} sm={6} md={4} key={pet.id}>
                      <PetCard
                        pet={pet}
                        filters={filters}
                        pagination={pagination}
                        petDetailUrl={petDetailUrl}
                        onPanToLocation={handlePanToLocation}
                      />
                    </Grid>
                  );
                })}
              </Grid>
              <Pagination
                color="primary"
                sx={{ mt: '2rem' }}
                page={pagination.page}
                count={pagination.totalPages}
                onChange={handlePaginationChange}
              />
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default PetsList;
