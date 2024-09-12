import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Box } from '@mui/material';

const ResourceModal = ({ open, handleClose }) => {
  const [formData, setFormData] = useState({ name: '', type: '', amount: '', date: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    // Handle form submission
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Allocate Resources</DialogTitle>
      <DialogContent>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField name="name" label="Startup Name" value={formData.name} onChange={handleChange} />
          <TextField name="type" label="Resource Type" value={formData.type} onChange={handleChange} />
          <TextField name="amount" label="Amount/Details" value={formData.amount} onChange={handleChange} />
          <TextField name="date" label="Date Allocated" type="date" InputLabelProps={{ shrink: true }} value={formData.date} onChange={handleChange} />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">Allocate</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResourceModal;
