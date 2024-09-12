import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { AttachMoney, BarChart, Storage } from '@mui/icons-material';

const ResourceCard = ({ title, value, icon }) => (
  <Card sx={{ maxWidth: 345, margin: 2 }}>
    <CardContent>
      <Typography variant="h6">{title}</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {icon}
        <Typography variant="h4" sx={{ marginLeft: 1 }}>{value}</Typography>
      </Box>
    </CardContent>
  </Card>
);

export const ResourceOverview = () => (
  <Box sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
    <ResourceCard title="Total Resources" value="500" icon={<AttachMoney />} />
    <ResourceCard title="Remaining Resources" value="200" icon={<Storage />} />
    <ResourceCard title="Allocated Resources" value="300" icon={<BarChart />} />
  </Box>
);
