import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f9f9f9',
    },
    text: {
      primary: '#333333',
    },
    success: {
      main: '#2e7d32',
    },
    error: {
      main: '#d32f2f',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontSize: '24px',
      fontWeight: 700,
    },
    h6: {
      fontSize: '20px',
      fontWeight: 700,
    },
    body1: {
      fontSize: '16px',
    },
  },
  spacing: 8,
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: '8px 16px',
          borderRadius: '8px',
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '12px',
          borderBottom: '1px solid #ddd',
        },
        head: {
          backgroundColor: '#1976d2',
          color: 'white',
          fontWeight: 700,
        },
      },
    },
  },
});

export default theme;