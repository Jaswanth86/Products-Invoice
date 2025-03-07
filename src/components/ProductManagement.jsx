import React, { useState, useEffect } from 'react';
import { Container, Typography, Box, Button, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { products as initialProducts, stores } from '../data/sampleData';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import ProductForm from './ProductForm';
import StoreFilter from './StoreFilter';
import SearchBar from './SearchBar';

function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedStore, setSelectedStore] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const productsWithStoreName = initialProducts.map(product => ({
      ...product,
      storeName: stores.find(store => store.id === product.storeId)?.name || 'Unknown Store',
    }));
    setProducts(productsWithStoreName);
    setFilteredProducts(productsWithStoreName);
  }, []);

  useEffect(() => {
    let updatedProducts = [...products];

    if (selectedStore) {
      updatedProducts = updatedProducts.filter(product => product.storeId === parseInt(selectedStore));
    }

    if (searchTerm) {
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(updatedProducts);
  }, [selectedStore, searchTerm, products]);

  const handleAddProduct = () => {
    setProductToEdit(null);
    setOpenForm(true);
  };

  const handleEditProduct = (product) => {
    setProductToEdit(product);
    setOpenForm(true);
  };

  const handleDeleteProduct = (id) => {
    setProducts(prev => prev.filter(product => product.id !== id));
  };

  const handleSubmitProduct = (newProduct) => {
    const storeName = stores.find(store => store.id === newProduct.storeId)?.name || 'Unknown Store';
    if (productToEdit) {
      setProducts(prev => prev.map(product => (product.id === newProduct.id ? { ...newProduct, storeName } : product)));
    } else {
      setProducts(prev => [...prev, { ...newProduct, storeName }]);
    }
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
    setOpenDetails(true);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        py: 4,
        bgcolor: 'background.default',
        minHeight: '100vh',
        px: { xs: 2, sm: 3, md: 4 },
        [theme.breakpoints.down('sm')]: {
          padding: 2,
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 3,
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: 2, sm: 0 },
        }}
      >
        <Typography variant="h4" sx={{ color: 'primary.main', textAlign: { xs: 'center', sm: 'left' } }}>
          Product Management
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate('/login')}
          sx={{
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: '#115293' },
            color: 'white',
            [theme.breakpoints.down('sm')]: {
              width: '100%',
            },
          }}
        >
          Login
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mb: 3,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'stretch', sm: 'center' },
        }}
      >
        <StoreFilter selectedStore={selectedStore} onChange={(e) => setSelectedStore(e.target.value)} />
        <SearchBar searchTerm={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <Button
          variant="contained"
          onClick={handleAddProduct}
          sx={{
            bgcolor: 'primary.main',
            '&:hover': { bgcolor: '#115293' },
            color: 'white',
            padding: '8px 16px',
            [theme.breakpoints.down('sm')]: {
              width: '100%',
            },
          }}
        >
          Add Product
        </Button>
      </Box>
      <ProductList
        products={filteredProducts}
        onEdit={handleEditProduct}
        onDelete={handleDeleteProduct}
        onViewDetails={handleViewDetails}
      />
      <ProductForm
        open={openForm}
        onClose={() => setOpenForm(false)}
        onSubmit={handleSubmitProduct}
        productToEdit={productToEdit}
      />
      <ProductDetail
        product={selectedProduct}
        open={openDetails}
        onClose={() => setOpenDetails(false)}
      />
    </Container>
  );
}

export default ProductManagement;
