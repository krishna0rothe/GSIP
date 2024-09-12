import React from 'react';
import { Box } from '@mui/material';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Startup A', 'Startup B', 'Startup C'],
  datasets: [
    {
      label: 'Resource Distribution',
      data: [300, 150, 50],
      backgroundColor: ['rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
      borderColor: ['rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
      borderWidth: 1,
    },
  ],
};

const options = {
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem) {
          return `${tooltipItem.label}: ${tooltipItem.raw}`;
        },
      },
    },
  },
};

export const ResourceGraph = () => (
  <Box sx={{ marginTop: 2 }}>
    <Pie data={data} options={options} />
  </Box>
);
