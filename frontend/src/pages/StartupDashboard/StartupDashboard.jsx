import React from 'react';
import { 
  AppBar, Toolbar, Typography, IconButton, Avatar, Card, CardContent, 
  Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, 
  Paper, Box, Grid, LinearProgress
} from '@mui/material';
import { Notifications, Add } from '@mui/icons-material'; // Changed from '@mui/icons-react' to '@mui/icons-material'
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

const StartupDashboard = () => {
  // Mock data (replace with actual data fetching logic)
  const startupData = {
    name: 'TechInnovate',
    logo: '/api/placeholder/50/50',
    stage: 'Growth',
    summary: 'AI-powered business analytics platform',
    activeInitiatives: 3,
  };

  const fundingRequests = [
    { id: 1, amount: '$500,000', status: 'Pending', date: '2024-09-15' },
    { id: 2, amount: '$250,000', status: 'Approved', date: '2024-08-01' },
  ];

  const mentors = [
    { name: 'Jane Doe', expertise: 'AI & Machine Learning', availability: 'Available' },
  ];

  const iprFilings = [
    { id: 1, name: 'Analytics Engine', type: 'Patent', status: 'Filed' },
    { id: 2, name: 'TechInnovate', type: 'Trademark', status: 'Approved' },
  ];

  const milestones = [
    { name: 'Ideation', completed: true },
    { name: 'Validation', completed: true },
    { name: 'MVP', completed: true },
    { name: 'Funding', completed: false },
    { name: 'Scaling', completed: false },
  ];

  return (
    <ThemeProvider theme={gsipTheme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <img src="/api/placeholder/40/40" alt="GSIP Logo" style={{ marginRight: '16px' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              Startup Dashboard
            </Typography>
            <IconButton color="inherit">
              <Notifications />
            </IconButton>
            <Avatar sx={{ marginLeft: 1 }}>U</Avatar>
          </Toolbar>
        </AppBar>

        <Box sx={{ padding: 3 }}>
          <Grid container spacing={3}>
            {/* Startup Profile Overview */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Grid container alignItems="center" spacing={2}>
                    <Grid item>
                      <img src={startupData.logo} alt={`${startupData.name} logo`} style={{ width: '50px', height: '50px' }} />
                    </Grid>
                    <Grid item xs>
                      <Typography variant="h5">{startupData.name}</Typography>
                      <Typography variant="body2">Stage: {startupData.stage}</Typography>
                      <Typography variant="body2">{startupData.summary}</Typography>
                      <Typography variant="body2">Active Initiatives: {startupData.activeInitiatives}</Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Funding Requests */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Funding Requests</Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Amount</TableCell>
                          <TableCell>Status</TableCell>
                          <TableCell>Date</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {fundingRequests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell>{request.amount}</TableCell>
                            <TableCell>{request.status}</TableCell>
                            <TableCell>{request.date}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Add />}
                    sx={{ marginTop: 2 }}
                  >
                    Submit New Request
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Mentorship */}
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Mentorship</Typography>
                  {mentors.map((mentor, index) => (
                    <Box key={index} sx={{ marginBottom: 2 }}>
                      <Typography variant="subtitle1">{mentor.name}</Typography>
                      <Typography variant="body2">Expertise: {mentor.expertise}</Typography>
                      <Typography variant="body2">Availability: {mentor.availability}</Typography>
                    </Box>
                  ))}
                  <Button variant="outlined" color="primary">
                    Request Additional Mentorship
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* IPR Management */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>IPR Management</Typography>
                  <TableContainer component={Paper}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Type</TableCell>
                          <TableCell>Status</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {iprFilings.map((filing) => (
                          <TableRow key={filing.id}>
                            <TableCell>{filing.name}</TableCell>
                            <TableCell>{filing.type}</TableCell>
                            <TableCell>{filing.status}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<Add />}
                    sx={{ marginTop: 2 }}
                  >
                    Submit New IPR Filing
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Progress Tracking */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>Progress Tracking</Typography>
                  <Box sx={{ width: '100%', marginBottom: 2 }}>
                    <LinearProgress 
                      variant="determinate" 
                      value={(milestones.filter(m => m.completed).length / milestones.length) * 100} 
                    />
                  </Box>
                  {milestones.map((milestone, index) => (
                    <Typography key={index} variant="body2" color={milestone.completed ? 'primary' : 'text.secondary'}>
                      {milestone.name}
                    </Typography>
                  ))}
                  <Button variant="outlined" color="primary" sx={{ marginTop: 2 }}>
                    Update Progress
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default StartupDashboard;
