import React, { useEffect, useRef } from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const DashboardLineChart = ({ startupData, researchData, fundingData }) => {
  const chartRef = useRef(null);

  // Data for the Line Chart
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Startups",
        data: startupData,
        borderColor: "#42a5f5",
        fill: false,
      },
      {
        label: "Research Projects",
        data: researchData,
        borderColor: "#66bb6a",
        fill: false,
      },
      {
        label: "Funding Raised",
        data: fundingData,
        borderColor: "#ffa726",
        fill: false,
      },
    ],
  };

  // Options for the Line Chart
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          color: '#333',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333',
        },
      },
    },
  };

  return (
    <Card sx={{ margin: "20px 0", width: "100%" }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Overview of Startups, Research Projects, and Funding Raised
        </Typography>
        <Box sx={{ height: '400px', width: '100%' }}>
          <Line ref={chartRef} data={data} options={options} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default DashboardLineChart;
