import React, { useState, useEffect } from 'react';
import apiConfig from '../../config/apiConfig.js';
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Avatar,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { CheckCircle, Pending, Cancel } from '@mui/icons-material';
import StartupDetailsPopup from '../../components/StartupDetailsPopup.jsx'; // Ensure this is your Popup component path


const statusColors = {
  Approved: 'success',
  Pending: 'warning',
  Rejected: 'error',
};

const statusIcons = {
  Approved: <CheckCircle />,
  Pending: <Pending />,
  Rejected: <Cancel />,
};

export default function StartupApprovalPage() {
  const [startups, setStartups] = useState([]);
  const [selectedStartup, setSelectedStartup] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [counts, setCounts] = useState({ approved: 0, pending: 0, rejected: 0 });

  useEffect(() => {
    fetchStartups();
  },[]);

  const fetchStartups = async () => {
    try {
      const response = await fetch(`${apiConfig.baseURL}/api/startups`);
      if (!response.ok) throw new Error('Failed to fetch startups');
      const data = await response.json();
      setStartups(data);
      updateCounts(data);
    } catch (error) {
      console.error('Error fetching startups:', error);
    }
  };

  const updateCounts = (startupData) => {
    const newCounts = startupData.reduce(
      (acc, startup) => {
        acc[startup.status.toLowerCase()]++;
        return acc;
      },
      { approved: 0, pending: 0, rejected: 0 }
    );
    setCounts(newCounts);
  };

  const handleStatusUpdate = async (startupId, newStatus) => {
    try {
      const response = await fetch(`${apiConfig.baseURL}/startups/${startupId}/status`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus, feedback: '' }),
      });

      if (!response.ok) throw new Error('Failed to update startup status');

      const updatedStartups = startups.map((startup) =>
        startup._id === startupId ? { ...startup, status: newStatus } : startup
      );
      setStartups(updatedStartups);
      updateCounts(updatedStartups);

      setSelectedStartup((prev) => prev && { ...prev, status: newStatus });
    } catch (error) {
      console.error('Error updating startup status:', error);
    }
  };

  const handleRowClick = (startup) => {
    setSelectedStartup(startup);
    setIsPopupOpen(true);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold', mb: 4 }}>
        Startup Approval
      </Typography>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {Object.entries(counts).map(([status, count]) => (
          <Grid item xs={12} sm={4} key={status}>
            <Card>
              <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                    {status}
                  </Typography>
                  <Typography variant="h4">{count}</Typography>
                </Box>
                {statusIcons[status]}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="startup approval table">
          <TableHead>
            <TableRow>
              <TableCell>Logo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Created At</TableCell>
              <TableCell>Industry</TableCell>
              <TableCell>Stage</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {startups.map((startup) => (
              <TableRow 
                key={startup._id} 
                onClick={() => handleRowClick(startup)}
                sx={{ '&:hover': { backgroundColor: 'action.hover', cursor: 'pointer' } }}
              >
                <TableCell>
                  <Avatar src={startup.logo} alt={startup.startupName} />
                </TableCell>
                <TableCell>{startup.startupName}</TableCell>
                <TableCell>{new Date(startup.createdAt).toLocaleDateString()}</TableCell>
                <TableCell>{startup.industry}</TableCell>
                <TableCell>{startup.stage}</TableCell>
                <TableCell>
                  <Chip
                    label={startup.status}
                    color={statusColors[startup.status]}
                    size="small"
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StartupDetailsPopup
        startup={selectedStartup}
        open={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        onStatusUpdate={handleStatusUpdate}
      />
    </Box>
  );
}
