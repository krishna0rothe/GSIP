import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, Button, Box, Link } from '@mui/material';

const StartupDetailsPopup = ({ startup, open, onClose }) => {
  if (!startup) return null;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Startup Details</DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6">Name: {startup.name}</Typography>
          <Typography>Industry: {startup.industry}</Typography>
          <Typography>Stage: {startup.stage}</Typography>
          <Typography>Email: {startup.email}</Typography>
          <Typography>Mobile: {startup.mobile}</Typography>
          <Typography>Website: <Link href={startup.website} target="_blank" rel="noopener noreferrer">{startup.website}</Link></Typography>
          <Typography>App: <Link href={startup.appLink} target="_blank" rel="noopener noreferrer">{startup.appLink}</Link></Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={onClose}>Close</Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default StartupDetailsPopup;
