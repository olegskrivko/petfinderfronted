import React, { createContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// Create the context
const FilterPaginationContext = createContext();

// FilterPaginationProvider component
const FilterPaginationProvider = ({ children }) => {
  const [filters, setFilters] = useState({ species: [], gender: [] });
  const [pagination, setPagination] = useState({ page: 1, totalPages: 1 });

  const location = useLocation();
  const navigate = useNavigate();

  // Sync filters and pagination with the URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    
    // Load filters from the URL
    const species = queryParams.get('species')?.split(',') || [];
    const gender = queryParams.get('gender')?.split(',') || [];
    const page = parseInt(queryParams.get('page')) || 1;

    // Set filters and pagination based on URL
    setFilters({ species, gender });
    setPagination({ page, totalPages: pagination.totalPages });
  }, [location.search]);

  // Update filters and reset page to 1 when filters change
  const updateFilters = (newFilters) => {
    setFilters(newFilters);
    setPagination({ ...pagination, page: 1 }); // Reset to page 1 when filters are updated
    updateURL(newFilters, 1); // Update URL with new filters and page 1
  };

  // Update pagination (page) and sync it to the URL
  const updatePagination = (newPage) => {
    setPagination({ ...pagination, page: newPage });
    updateURL(filters, newPage); // Update URL with new page
  };

  // Function to update the URL based on filters and pagination
  const updateURL = (currentFilters, currentPage) => {
    const queryParams = new URLSearchParams();

    if (currentFilters.species.length) queryParams.append('species', currentFilters.species.join(','));
    if (currentFilters.gender.length) queryParams.append('gender', currentFilters.gender.join(','));
    queryParams.append('page', currentPage);

    navigate(`${window.location.pathname}?${queryParams.toString()}`, { replace: true });
  };

  // Function to reset filters and pagination
  const resetFilters = () => {
    setFilters({ species: [], gender: [] });
    setPagination({ page: 1, totalPages: 1 });
    updateURL({ species: [], gender: [] }, 1); // Reset URL when filters are reset
  };

  return (
    <FilterPaginationContext.Provider
      value={{
        filters,
        setFilters: updateFilters,
        pagination,
        setPagination: updatePagination,
        resetFilters,
      }}
    >
      {children}
    </FilterPaginationContext.Provider>
  );
};

export { FilterPaginationProvider, FilterPaginationContext };
