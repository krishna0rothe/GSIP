import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import ResourceTable from './ResourceTable';

const HistoryTable = () => (
  <Box sx={{ marginTop: 2 }}>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
      <TextField label="Start Date" type="date" InputLabelProps={{ shrink: true }} />
      <TextField label="End Date" type="date" InputLabelProps={{ shrink: true }} />
      <TextField label="Startup Name" />
      <Button variant="contained">Filter</Button>
    </Box>
    <ResourceTable />
  </Box>
);

export default HistoryTable;
