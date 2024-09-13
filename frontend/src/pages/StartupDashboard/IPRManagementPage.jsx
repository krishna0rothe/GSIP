import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Avatar, Button, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, Box, Dialog,
  DialogTitle, DialogContent, DialogActions, TextField, FormControl,
  InputLabel, Select, MenuItem, Chip
} from '@mui/material';
import { Add, Notifications, Edit, Visibility } from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
  Filed: '#ffa000',
  'In Review': '#2196f3',
  Approved: '#4caf50',
  Rejected: '#f44336'
};

const IPRManagementPage = () => {
  const [iprFilings, setIprFilings] = useState([
    { id: 1, type: 'Patent', title: 'AI-Driven Analytics Engine', filingDate: '2024-09-15', status: 'In Review', description: 'An AI-based analytics engine for enhanced data insights.' },
    { id: 2, type: 'Trademark', title: 'TechInnovate', filingDate: '2024-08-01', status: 'Approved', description: 'A trademark for innovative tech solutions.' },
    { id: 3, type: 'Patent', title: 'Blockchain-based Security Protocol', filingDate: '2024-07-20', status: 'Filed', description: 'A security protocol using blockchain technology.' },
  ]);
  const [openNewFiling, setOpenNewFiling] = useState(false);
  const [openDetailView, setOpenDetailView] = useState(false);
  const [selectedFiling, setSelectedFiling] = useState(null);
  const [newFiling, setNewFiling] = useState({
    type: '',
    title: '',
    description: '',
    filingDate: null,
    attachments: null,
  });

  const handleOpenNewFiling = () => setOpenNewFiling(true);
  const handleCloseNewFiling = () => setOpenNewFiling(false);

  const handleOpenDetailView = (filing) => {
    setSelectedFiling(filing);
    setOpenDetailView(true);
  };
  const handleCloseDetailView = () => setOpenDetailView(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFiling({ ...newFiling, [name]: value });
  };

  const handleDateChange = (date) => {
    setNewFiling({ ...newFiling, filingDate: date });
  };

  const handleFileChange = (e) => {
    setNewFiling({ ...newFiling, attachments: e.target.files[0] });
  };

  const handleSubmitNewFiling = () => {
    const newId = iprFilings.length + 1;
    const newIpr = {
      ...newFiling,
      id: newId,
      status: 'Filed',
      filingDate: newFiling.filingDate.toISOString().split('T')[0],
    };
    setIprFilings([...iprFilings, newIpr]);
    handleCloseNewFiling();
    setNewFiling({
      type: '',
      title: '',
      description: '',
      filingDate: null,
      attachments: null,
    });
  };

  return (
    <ThemeProvider theme={gsipTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <img src="/api/placeholder/40/40" alt="GSIP Logo" style={{ marginRight: '16px' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              IPR Management
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
              onClick={handleOpenNewFiling}
            >
              Submit New IPR Filing
            </Button>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>IPR Type</TableCell>
                  <TableCell>Title/Name</TableCell>
                  <TableCell align="right">Filing Date</TableCell>
                  <TableCell align="center">Status</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {iprFilings.map((filing) => (
                  <TableRow key={filing.id} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                    <TableCell>{filing.type}</TableCell>
                    <TableCell>{filing.title}</TableCell>
                    <TableCell align="right">{filing.filingDate}</TableCell>
                    <TableCell align="center">
                      <Chip
                        label={filing.status}
                        sx={{
                          backgroundColor: statusColors[filing.status],
                          color: 'white',
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <IconButton color="primary" onClick={() => handleOpenDetailView(filing)}>
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

        {/* New IPR Filing Dialog */}
        <Dialog open={openNewFiling} onClose={handleCloseNewFiling}>
          <DialogTitle>Submit New IPR Filing</DialogTitle>
          <DialogContent>
            <FormControl fullWidth margin="dense">
              <InputLabel>IPR Type</InputLabel>
              <Select
                name="type"
                value={newFiling.type}
                onChange={handleInputChange}
                label="IPR Type"
              >
                <MenuItem value="Patent">Patent</MenuItem>
                <MenuItem value="Trademark">Trademark</MenuItem>
              </Select>
            </FormControl>
            <TextField
              margin="dense"
              name="title"
              label="Title/Name"
              type="text"
              fullWidth
              variant="outlined"
              value={newFiling.title}
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
              value={newFiling.description}
              onChange={handleInputChange}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Filing Date"
                value={newFiling.filingDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} fullWidth margin="dense" />}
              />
            </LocalizationProvider>
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
            {newFiling.attachments && <Typography variant="body2" sx={{ mt: 1 }}>{newFiling.attachments.name}</Typography>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseNewFiling}>Cancel</Button>
            <Button onClick={handleSubmitNewFiling} variant="contained" color="primary">Submit</Button>
          </DialogActions>
        </Dialog>

        {/* Detail View Dialog */}
        <Dialog open={openDetailView} onClose={handleCloseDetailView}>
          <DialogTitle>{selectedFiling?.title}</DialogTitle>
          <DialogContent>
            <Typography><strong>IPR Type:</strong> {selectedFiling?.type}</Typography>
            <Typography><strong>Filing Date:</strong> {selectedFiling?.filingDate}</Typography>
            <Typography><strong>Status:</strong> {selectedFiling?.status}</Typography>
            <Typography sx={{ mt: 2 }}><strong>Description:</strong></Typography>
            <Typography>{selectedFiling?.description || 'No description provided.'}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDetailView}>Close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
};

export default IPRManagementPage;
