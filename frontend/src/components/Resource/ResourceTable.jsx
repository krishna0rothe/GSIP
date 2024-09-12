import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const ResourceTable = () => {
  const rows = [
    { name: 'Startup A', type: 'Financial', amount: '$50,000', date: '2024-01-15', status: 'Completed' },
    { name: 'Startup B', type: 'Technical', amount: '10 Servers', date: '2024-02-20', status: 'Pending' },
    // More rows here
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Startup Name</TableCell>
            <TableCell>Resource Type</TableCell>
            <TableCell>Amount/Details</TableCell>
            <TableCell>Date Allocated</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ResourceTable;
