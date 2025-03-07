import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { stores } from '../data/sampleData';

function ProductForm({ open, onClose, onSubmit, productToEdit }) {
  const [formData, setFormData] = useState({
    storeId: '',
    name: '',
    description: '',
    regularPrice: '',
    dealPrice: '',
    taxRate: '',
  });
  const theme = useTheme();

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        storeId: productToEdit.storeId || '',
        name: productToEdit.name || '',
        description: productToEdit.description || '',
        regularPrice: productToEdit.regularPrice || '',
        dealPrice: productToEdit.dealPrice || '',
        taxRate: productToEdit.taxRate || '',
      });
    } else {
      setFormData({
        storeId: '',
        name: '',
        description: '',
        regularPrice: '',
        dealPrice: '',
        taxRate: '',
      });
    }
  }, [productToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const newProduct = {
      ...formData,
      id: productToEdit ? productToEdit.id : `p${Date.now()}`,
      storeId: parseInt(formData.storeId),
      regularPrice: parseFloat(formData.regularPrice),
      dealPrice: parseFloat(formData.dealPrice),
      taxRate: parseFloat(formData.taxRate),
    };
    onSubmit(newProduct);
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      sx={{
        [theme.breakpoints.down('sm')]: {
          '& .MuiDialog-paper': { width: '90%', margin: '16px' },
        },
      }}
    >
      <DialogTitle sx={{ bgcolor: 'primary.main', color: 'white' }}>
        {productToEdit ? 'Edit Product' : 'Add Product'}
      </DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <FormControl fullWidth sx={{ mb: 2, mt: 1 }}>
          <InputLabel>Store</InputLabel>
          <Select name="storeId" value={formData.storeId} onChange={handleChange}>
            {stores.map(store => (
              <MenuItem key={store.id} value={store.id}>{store.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Product Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          sx={{ mb: 2, '& .MuiInputBase-root': { bgcolor: 'white' } }}
        />
        <TextField
          fullWidth
          label="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          multiline
          rows={3}
          sx={{ mb: 2, '& .MuiInputBase-root': { bgcolor: 'white' } }}
        />
        <TextField
          fullWidth
          label="Regular Price"
          name="regularPrice"
          type="number"
          value={formData.regularPrice}
          onChange={handleChange}
          sx={{ mb: 2, '& .MuiInputBase-root': { bgcolor: 'white' } }}
        />
        <TextField
          fullWidth
          label="Deal Price"
          name="dealPrice"
          type="number"
          value={formData.dealPrice}
          onChange={handleChange}
          sx={{ mb: 2, '& .MuiInputBase-root': { bgcolor: 'white' } }}
        />
        <TextField
          fullWidth
          label="Tax Rate (e.g., 0.1 for 10%)"
          name="taxRate"
          type="number"
          step="0.01"
          value={formData.taxRate}
          onChange={handleChange}
          sx={{ '& .MuiInputBase-root': { bgcolor: 'white' } }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          color="secondary"
          sx={{ [theme.breakpoints.down('sm')]: { width: '45%' } }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          sx={{ [theme.breakpoints.down('sm')]: { width: '45%' } }}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductForm;