import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function ProductList({ products, onEdit, onDelete, onViewDetails }) {
  const theme = useTheme();

  return (
    <Paper
      elevation={3}
      sx={{
        overflowX: 'auto',
        mt: 2,
        borderRadius: '12px',
        [theme.breakpoints.down('sm')]: {
          width: '100%',
          overflowX: 'scroll',
        },
      }}
    >
      <Table sx={{ minWidth: 650, tableLayout: 'fixed' }}>
        <TableHead>
          <TableRow sx={{ bgcolor: 'primary.main', color: 'white' }}>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', width: '15%' }}>Store</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', width: '20%' }}>Product Name</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', width: '25%' }}>Description</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', width: '10%' }}>Regular Price</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', width: '10%' }}>Deal Price</TableCell>
            <TableCell sx={{ color: 'white', fontWeight: 'bold', width: '20%' }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, index) => (
            <TableRow
              key={product.id}
              sx={{
                '&:hover': { bgcolor: '#f0f0f0' },
                bgcolor: index % 2 === 0 ? '#ffffff' : '#f5f5f5',
                [theme.breakpoints.down('sm')]: {
                  '& td': { padding: '8px', fontSize: '14px' },
                },
              }}
            >
              <TableCell>{product.storeName}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>${product.regularPrice.toFixed(2)}</TableCell>
              <TableCell>${product.dealPrice.toFixed(2)}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => onViewDetails(product)}
                  sx={{ mr: 1, [theme.breakpoints.down('sm')]: { padding: '4px 8px', fontSize: '12px' } }}
                >
                  Details
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => onEdit(product)}
                  sx={{ mr: 1, [theme.breakpoints.down('sm')]: { padding: '4px 8px', fontSize: '12px' } }}
                >
                  Edit
                </Button>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => onDelete(product.id)}
                  sx={{ [theme.breakpoints.down('sm')]: { padding: '4px 8px', fontSize: '12px' } }}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default ProductList;