import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { stores } from '../data/sampleData';

function StoreFilter({ selectedStore, onChange }) {
  const theme = useTheme();

  return (
    <FormControl
      sx={{
        minWidth: 200,
        [theme.breakpoints.down('sm')]: {
          minWidth: '100%',
        },
      }}
    >
      <InputLabel>Filter by Store</InputLabel>
      <Select
        value={selectedStore}
        onChange={onChange}
        sx={{ '& .MuiSelect-select': { bgcolor: 'white' } }}
      >
        <MenuItem value="">All Stores</MenuItem>
        {stores.map(store => (
          <MenuItem key={store.id} value={store.id}>{store.name}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default StoreFilter;