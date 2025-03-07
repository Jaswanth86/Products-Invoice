import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ component: Component }) {
  const isAuthenticated = !!localStorage.getItem('store');
  console.log('ProtectedRoute - isAuthenticated:', isAuthenticated, 'Path:', window.location.pathname); // Debug log
  return isAuthenticated ? <Component /> : <Navigate to="/login" replace />;
}

export default ProtectedRoute;