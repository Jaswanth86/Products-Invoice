import React, { useState, useEffect, useRef } from 'react';
import {
  Table, TableBody, TableCell, TableHead, TableRow, Button, Container,
  TextField, Typography, Paper, Box
} from '@mui/material';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { useTheme } from '@mui/material/styles';
import { products } from '../data/sampleData';

function InvoiceDashboard() {
  const [invoices, setInvoices] = useState([]);
  const [filterDate, setFilterDate] = useState('');
  const [filterItem, setFilterItem] = useState('');
  const [loading, setLoading] = useState(true);
  const currentStore = JSON.parse(localStorage.getItem('store'));
  const tableRef = useRef(null);
  const isMounted = useRef(false);
  const theme = useTheme();

  useEffect(() => {
    if (isMounted.current) return;
    console.log('InvoiceDashboard useEffect triggered, currentStore:', currentStore);
    if (!currentStore) {
      console.error('No currentStore found in localStorage');
      setLoading(false);
      return;
    }

    const maxInvoices = 5;
    const storeProducts = products.filter(p => p.storeId === currentStore.id);
    const sampleInvoices = Array.from({ length: maxInvoices }, (_, index) => {
      if (!storeProducts[index % storeProducts.length]) return null;
      const product = storeProducts[index % storeProducts.length];
      return {
        orderId: `ORD${index + 1}-${Math.random().toString(36).substr(2, 5)}`,
        date: new Date(Date.now() - index * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        items: [{
          ...product,
          quantity: Math.floor(Math.random() * 5) + 1,
          itemTotal: product.dealPrice * (Math.floor(Math.random() * 5) + 1),
        }],
      };
    }).filter(invoice => invoice !== null);

    setInvoices(sampleInvoices);
    setLoading(false);
    isMounted.current = true;
  }, [currentStore]);

  const calculateItemGrandTotal = (item) => {
    const tax = item.itemTotal * item.taxRate;
    const grandTotal = item.itemTotal + tax;
    return grandTotal;
  };

  const generatePDF = async () => {
    if (!tableRef.current) {
      console.error('Table ref is null');
      return;
    }
    const element = tableRef.current;
    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgWidth = 190;
    const pageHeight = 295;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;
    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    pdf.save(`${currentStore?.name || 'invoice'}_invoice.pdf`);
  };

  const filteredInvoices = invoices
    .filter(inv => !filterDate || inv.date === filterDate)
    .map(inv => ({
      ...inv,
      items: filterItem ? inv.items.filter(item => item.name.includes(filterItem)) : inv.items,
    }))
    .filter(inv => inv.items.length > 0);

  if (loading) return <Typography>Loading...</Typography>;
  if (!currentStore) return <Typography>Please log in to view invoices.</Typography>;
  if (filteredInvoices.length === 0) return <Typography>No invoices available.</Typography>;

  console.log('Rendering invoices count:', filteredInvoices.length);

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
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: 'primary.main', mb: 3, textAlign: 'center', fontWeight: 'bold' }}
      >
        Invoice Dashboard - {currentStore.name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mb: 3,
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'stretch', sm: 'center' },
        }}
      >
        <TextField
          type="date"
          label="Filter by Date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
          sx={{ flex: 1, '& .MuiInputBase-root': { bgcolor: 'white' } }}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Filter by Item"
          value={filterItem}
          onChange={(e) => setFilterItem(e.target.value)}
          sx={{ flex: 1, '& .MuiInputBase-root': { bgcolor: 'white' } }}
        />
        <Button
          variant="contained"
          onClick={generatePDF}
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
          Generate PDF
        </Button>
      </Box>
      <Paper
        elevation={3}
        sx={{
          overflowX: 'auto',
          borderRadius: '12px',
          [theme.breakpoints.down('sm')]: {
            width: '100%',
            overflowX: 'scroll',
          },
        }}
      >
        <Table
          ref={tableRef}
          sx={{ minWidth: 800, tableLayout: 'fixed', borderCollapse: 'separate', borderSpacing: 0 }}
        >
          <TableHead>
            <TableRow sx={{ bgcolor: 'primary.main', color: 'white' }}>
              <TableCell sx={{ fontWeight: 'bold', width: '10%', color: 'white', padding: '12px', borderBottom: '2px solid #115293' }}>Order ID</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '10%', color: 'white', padding: '12px', borderBottom: '2px solid #115293' }}>Date</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '20%', color: 'white', padding: '12px', borderBottom: '2px solid #115293' }}>Item</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '10%', color: 'white', padding: '12px', borderBottom: '2px solid #115293' }}>Quantity</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '10%', color: 'white', padding: '12px', borderBottom: '2px solid #115293' }}>Regular Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '10%', color: 'white', padding: '12px', borderBottom: '2px solid #115293' }}>Deal Price</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '10%', color: 'white', padding: '12px', borderBottom: '2px solid #115293' }}>Item Total</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '10%', color: 'white', padding: '12px', borderBottom: '2px solid #115293' }}>Tax</TableCell>
              <TableCell sx={{ fontWeight: 'bold', width: '10%', color: 'white', padding: '12px', borderBottom: '2px solid #115293' }}>Grand Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredInvoices.map(invoice =>
              invoice.items.map((item, index) => {
                const itemGrandTotal = calculateItemGrandTotal(item);
                return (
                  <TableRow
                    key={`${invoice.orderId}-${item.id}-${index}`}
                    sx={{
                      '&:hover': { bgcolor: '#f0f0f0' },
                      bgcolor: index % 2 === 0 ? '#ffffff' : '#f5f5f5',
                      [theme.breakpoints.down('sm')]: {
                        '& td': { padding: '8px', fontSize: '14px' },
                      },
                    }}
                  >
                    <TableCell>{invoice.orderId}</TableCell>
                    <TableCell>{invoice.date}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>${item.regularPrice.toFixed(2)}</TableCell>
                    <TableCell>${item.dealPrice.toFixed(2)}</TableCell>
                    <TableCell>${item.itemTotal.toFixed(2)}</TableCell>
                    <TableCell>${(item.itemTotal * item.taxRate).toFixed(2)}</TableCell>
                    <TableCell>${itemGrandTotal.toFixed(2)}</TableCell>
                  </TableRow>
                );
              })
            )}
            <TableRow sx={{ bgcolor: 'success.main', fontWeight: 'bold' }}>
              <TableCell colSpan={6} sx={{ padding: '12px', borderTop: '2px solid #115293' }}>Overall Totals</TableCell>
              <TableCell sx={{ padding: '12px', borderTop: '2px solid #115293' }}>
                ${filteredInvoices.reduce((sum, inv) => sum + inv.items.reduce((itemSum, item) => itemSum + item.itemTotal, 0), 0).toFixed(2)}
              </TableCell>
              <TableCell sx={{ padding: '12px', borderTop: '2px solid #115293' }}>
                ${filteredInvoices.reduce((sum, inv) => sum + inv.items.reduce((itemSum, item) => itemSum + (item.itemTotal * item.taxRate), 0), 0).toFixed(2)}
              </TableCell>
              <TableCell sx={{ padding: '12px', borderTop: '2px solid #115293' }}>
                ${filteredInvoices.reduce((sum, inv) => sum + inv.items.reduce((itemSum, item) => itemSum + calculateItemGrandTotal(item), 0), 0).toFixed(2)}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

export default InvoiceDashboard;