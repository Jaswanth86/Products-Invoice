import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import InvoiceDashboard from './components/InvoiceDashboard';
import ProductManagement from './components/ProductManagement';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  console.log('App rendered at:', window.location.pathname);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/invoices"
            element={<ProtectedRoute component={InvoiceDashboard} />}
          />
          <Route
            path="/products"
            element={<ProductManagement />}
          />
          <Route path="/" element={<ProductManagement />} />
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;