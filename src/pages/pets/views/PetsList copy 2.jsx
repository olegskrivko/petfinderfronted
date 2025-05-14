// import React, { useState, useEffect } from 'react';
// import { Grid, CircularProgress, Box, Container, Alert, Pagination } from '@mui/material';
// // import { Skeleton } from '@mui/material'; // Add this at the top
// import PetCardSkeleton from '../components/PetCardSkeleton'; // adjust path if needed
// import Sidebar from '../../../components/Sidebar';
// import PetCard from '../../../components/PetCard';
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
//   // <Grid container spacing={2}>
//   //   {[...Array(6)].map((_, index) => (
//   //     <Grid item xs={12} sm={6} md={4} key={index}>
//   //       <Box sx={{ p: 1 }}>
//   //         <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 2 }} />
//   //         <Skeleton height={30} width="80%" sx={{ mt: 1 }} />
//   //         <Skeleton height={20} width="60%" />
//   //       </Box>
//   //     </Grid>
//   //   ))}
//   // </Grid>
// ) : error ? (
//   <Alert severity="error">{error}</Alert>
// ) : (
//   <>
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

//           {/* {loading ? (
//             <Box display="flex" justifyContent="center"><CircularProgress /></Box>
//           ) : error ? (
//             <Alert severity="error">{error}</Alert>
//           ) : (
//             <>
//               <Grid container spacing={2}>
//                 {pets.map((pet) => {
//                   const petDetailUrl = `/pets/${pet.id}?species=${filters.species.join(',')}&gender=${filters.gender.join(',')}&page=${pagination.page}`;
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
//                 sx={{ mt: "2rem" }}
//                 page={pagination.page}
//                 count={pagination.totalPages}
//                 onChange={handlePaginationChange}
//               />
//             </>
//           )} */}
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default PetsList;






// // it doesnt work find where is the issue, Requirements i do pagination then filters must be the same, only page number should change
// // when i click on chip by adding filter then page should change in url to 1, because new start your new listing.  
// // when you open pet details go back then filters must be the same, and page the same