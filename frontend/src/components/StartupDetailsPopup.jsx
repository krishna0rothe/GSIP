import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Avatar,
  Box,
  Grid,
  Chip,
  Link,
} from '@mui/material';
import { Email, Phone, Language, Apps } from '@mui/icons-material';

export default function StartupDetailsPopup({ startup, open, onClose, onStatusUpdate }) {
  if (!startup) return null;

  const handleApprove = () => {
    onStatusUpdate(startup._id, 'Approved');
  };

  const handleReject = () => {
    onStatusUpdate(startup._id, 'Rejected');
  };

  const handleAskMoreInfo = () => {
    // Implement the logic to ask for more information
    console.log('Asking for more information about', startup.startupName);
  };

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="startup-details-dialog-title" maxWidth="md" fullWidth>
      <DialogTitle id="startup-details-dialog-title">
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar src={startup.logo} alt={startup.startupName} sx={{ width: 60, height: 60 }} />
          <Box>
            <Typography variant="h5">{startup.startupName}</Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {startup.industry} | {startup.sector}
            </Typography>
          </Box>
        </Box>
      </DialogTitle>
      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>Basic Information</Typography>
            <Typography><strong>Brief:</strong> {startup.brief}</Typography>
            <Typography><strong>Stage:</strong> {startup.stage}</Typography>
            <Typography><strong>Funded:</strong> {startup.funded}</Typography>
            <Typography><strong>Created At:</strong> {new Date(startup.createdAt).toLocaleDateString()}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>Contact Information</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Email fontSize="small" />
              <Link href={`mailto:${startup.email}`}>{startup.email}</Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Phone fontSize="small" />
              <Link href={`tel:${startup.mobile}`}>{startup.mobile}</Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
              <Language fontSize="small" />
              <Link href={startup.website} target="_blank" rel="noopener noreferrer">
                {startup.website}
              </Link>
            </Box>
            {startup.app && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Apps fontSize="small" />
                <Link href={startup.app} target="_blank" rel="noopener noreferrer">
                  {startup.app}
                </Link>
              </Box>
            )}
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>Location</Typography>
            <Typography>{startup.city}, {startup.state}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>Services</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {startup.services.map((service, index) => (
                <Chip key={index} label={service} size="small" />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>Legal Information</Typography>
            <Typography><strong>Udyog Aadhar:</strong> {startup.udyogAadhar}</Typography>
            <Typography><strong>Nature of Entity:</strong> {startup.natureOfEntity}</Typography>
            <Typography><strong>PAN Number:</strong> {startup.PANNumber}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>Interests</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {startup.interests.map((interest, index) => (
                <Chip key={index} label={interest} size="small" />
              ))}
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        {startup.status === 'Pending' && (
          <>
            <Button onClick={handleApprove} color="success" variant="contained">
              Approve
            </Button>
            <Button onClick={handleReject} color="error" variant="contained">
              Reject
            </Button>
          </>
        )}
        <Button onClick={handleAskMoreInfo} color="primary" variant="contained">
          Ask More Info
        </Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
