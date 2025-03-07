import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function ProductDetail({ product, open, onClose }) {
  const theme = useTheme();

  if (!product) return null;

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
      <DialogTitle sx={{ bgcolor: 'primary.main', color: 'white' }}>Product Details</DialogTitle>
      <DialogContent sx={{ mt: 2 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h6">Store: {product.storeName}</Typography>
          <Typography>Name: {product.name}</Typography>
          <Typography>Description: {product.description}</Typography>
          <Typography>Regular Price: ${product.regularPrice.toFixed(2)}</Typography>
          <Typography>Deal Price: ${product.dealPrice.toFixed(2)}</Typography>
          <Typography>Tax Rate: {(product.taxRate * 100).toFixed(2)}%</Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onClose}
          variant="contained"
          color="primary"
          sx={{ [theme.breakpoints.down('sm')]: { width: '100%' } }}
        >
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductDetail;