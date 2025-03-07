import React from 'react';
import { TextField } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function SearchBar({ searchTerm, onChange }) {
  const theme = useTheme();

  return (
    <TextField
      label="Search by Product Name"
      value={searchTerm}
      onChange={onChange}
      sx={{
        minWidth: 200,
        [theme.breakpoints.down('sm')]: {
          minWidth: '100%',
        },
        '& .MuiInputBase-root': { bgcolor: 'white' },
      }}
    />
  );
}

export default SearchBar;