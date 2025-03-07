import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { stores } from '../data/sampleData';

function Login() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const store = stores.find(
      s => s.username === credentials.username && s.password === credentials.password
    );
    if (store) {
      localStorage.setItem('store', JSON.stringify(store));
      console.log('Login successful, redirecting to /invoices', store);
      navigate('/invoices');
    } else {
      setError('Invalid credentials');
    }
  };

  console.log('Login rendered'); // Debug log
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          bgcolor: '#f5f5f5',
          p: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: '#1976d2' }}>
          Store Login
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <TextField
          label="Username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          fullWidth
          margin="normal"
          sx={{ maxWidth: 400 }}
        />
        <TextField
          label="Password"
          type="password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          fullWidth
          margin="normal"
          sx={{ maxWidth: 400 }}
        />
        <Button
          variant="contained"
          onClick={handleLogin}
          sx={{ mt: 2, bgcolor: '#1976d2', '&:hover': { bgcolor: '#115293' } }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default Login;