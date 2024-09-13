import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Avatar, Button, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, Box, Dialog,
  DialogTitle, DialogContent, DialogActions, TextField, Chip
} from '@mui/material';
import { Add, Notifications, Edit, Visibility } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Mock GSIP theme (replace with actual theme when available)
const gsipTheme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const statusColors = {
  Pending: '#ffa000',
  Approved: '#4caf50',
  Rejected: '#f44336'
};

const FundingRequestsPage = () => {
  const [requests, setRequests] = useState([
    { id: 1, title: 'Seed Funding', amount: 500000, status: 'Pending', date: '2024-09-15' },
    { id: 2, title: 'Series A', amount: 2000000, status: 'Approved', date: '2024-08-01' },
    { id: 3, title: 'Expansion Funding', amount: 1000000, status: 'Rejected', date: '2024-07-20' },
  ]);
  const [openNewRequest, setOpenNewRequest] = useState(false);
  const [openDetailView, setOpenDetailView] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [newRequest, setNewRequest] = useState({
    title: '',
    amount: '',
    description: '',
    attachments: null,
  });

  const handleOpenNewRequest = () => setOpenNewRequest(true);
  const handleCloseNewRequest = () => setOpenNewRequest(false);

  const handleOpenDetailView = (request) => {
    setSelectedRequest(request);
    setOpenDetailView(true);
  };
  const handleCloseDetailView = () => setOpenDetailView(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewRequest({ ...newRequest, [name]: value });
  };

  const handleFileChange = (e) => {
    setNewRequest({ ...newRequest, attachments: e.target.files[0] });
  };

  const handleSubmitNewRequest = () => {
    const newId = requests.length + 1;
    const newReq = {
      ...newRequest,
      id: newId,
      status: 'Pending',
      date: new Date().toISOString().split('T')[0],
      amount: parseFloat(newRequest.amount)
    };
    setRequests([...requests, newReq]);
    handleCloseNewRequest();
    setNewRequest({ title: '', amount: '', description: '', attachments: null });
  };

  return (
    <ThemeProvider theme={gsipTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <img src="/api/placeholder/40/40" alt="GSIP Logo" style={{ marginRight: '16px' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              Funding Requests
            </Typography>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <Avatar sx={{ marginLeft: 1 }}>U</Avatar>
          </Toolbar>
        </AppBar>

        <Box sx={{ padding: 3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Add />}
              onClick={handleOpenNewRequest}
            >
              Submit New Request
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Request Title</TableCell>
                  <TableCell align="right">Amount Requested</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="right">Date Submitted</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {requests.map((request) => (
                  <TableRow key={request.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                    <TableCell component="th" scope="row">
                      {request.title}
                    </TableCell>
                    <TableCell align="right">${request.amount.toLocaleString()}</TableCell>
                    <TableCell align="center">
                      <Chip
                        label={request.status}
                        sx={{
                          backgroundColor: statusColors[request.status],
                          color: 'white',
                        }}
                      />
                    </TableCell>
                    <TableCell align="right">{request.date}</TableCell>
                    <TableCell align="center">
                      <IconButton color="primary" onClick={() => handleOpenDetailView(request)}>
                        <Visibility />
                      </IconButton>
                      <IconButton color="secondary">
                        <Edit />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {/* New Request Dialog */}
        <Dialog open={openNewRequest} onClose={handleCloseNewRequest}>
          <DialogTitle>Submit New Funding Request</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              name="title"
              label="Request Title"
              type="text"
              fullWidth
              variant="outlined"
              value={newRequest.title}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="amount"
              label="Amount Requested"
              type="number"
              fullWidth
              variant="outlined"
              value={newRequest.amount}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="description"
              label="Description"
              type="text"
              fullWidth
              variant="outlined"
              multiline
              rows={4}
              value={newRequest.description}
              onChange={handleInputChange}
            />
            <input
              accept="application/pdf"
              style={{ display: 'none' }}
              id="raised-button-file"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="raised-button-file">
              <Button variant="outlined" component="span" sx={{ mt: 2 }}>
                Upload Attachment
              </Button>
            </label>
            {newRequest.attachments && <Typography variant="body2" sx={{ mt: 1 }}>{newRequest.attachments.name}</Typography>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseNewRequest}>Cancel</Button>
            <Button onClick={handleSubmitNewRequest} variant="contained" color="primary">Submit</Button>
          </DialogActions>
        </Dialog>

        {/* Detail View Dialog */}
        <Dialog open={openDetailView} onClose={handleCloseDetailView}>
          <DialogTitle>{selectedRequest?.title}</DialogTitle>
          <DialogContent>
            <Typography><strong>Amount Requested:</strong> ${selectedRequest?.amount.toLocaleString()}</Typography>
            <Typography><strong>Status:</strong> {selectedRequest?.status}</Typography>
            <Typography><strong>Date Submitted:</strong> {selectedRequest?.date}</Typography>
            <Typography sx={{ mt: 2 }}><strong>Description:</strong></Typography>
            <Typography>{selectedRequest?.description || 'No description provided.'}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDetailView}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default FundingRequestsPage;
