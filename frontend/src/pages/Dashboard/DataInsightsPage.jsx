import React from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Divider,
  Card,
  CardContent,
  CardHeader,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button
} from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { BarChart, Bar } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

// Temporary dummy data
const data = {
  startupFunding: [
    { name: 'Tech', funding: 1200 },
    { name: 'Healthcare', funding: 800 },
    { name: 'Education', funding: 500 },
    { name: 'Manufacturing', funding: 300 },
  ],
  researchProjects: [
    { name: 'AI', projects: 10 },
    { name: 'Biotech', projects: 5 },
    { name: 'Renewable Energy', projects: 8 },
    { name: 'AgriTech', projects: 7 },
  ],
  fundingTrends: [
    { month: 'Jan', amount: 1500 },
    { month: 'Feb', amount: 2000 },
    { month: 'Mar', amount: 2500 },
    { month: 'Apr', amount: 1800 },
    { month: 'May', amount: 2200 },
  ],
};

// Color palette
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

const DataInsightsPage = () => {
  return (
    <Box sx={{ padding: '24px', maxWidth: '1200px', margin: 'auto' }}>
      <Typography variant="h4" color="primary" gutterBottom>Data Insights</Typography>

      <Grid container spacing={3}>
        {/* Key Metrics Section */}
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardHeader title="Total Funding" />
            <CardContent>
              <Typography variant="h5" color="textSecondary">₹4,800,000</Typography>
              <Typography variant="body2">Total funding raised by startups</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardHeader title="Research Projects" />
            <CardContent>
              <Typography variant="h5" color="textSecondary">30</Typography>
              <Typography variant="body2">Number of active research projects</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardHeader title="New Startups" />
            <CardContent>
              <Typography variant="h5" color="textSecondary">45</Typography>
              <Typography variant="body2">Number of new startups registered</Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <Card>
            <CardHeader title="Innovation Grants" />
            <CardContent>
              <Typography variant="h5" color="textSecondary">₹1,200,000</Typography>
              <Typography variant="body2">Grants awarded for innovation</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ margin: '24px 0' }} />

      <Grid container spacing={3}>
        {/* Funding by Sector */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '24px' }}>
            <Typography variant="h6" color="secondary" gutterBottom>Funding by Sector</Typography>
            <PieChart width={400} height={300}>
              <Pie
                data={data.startupFunding}
                dataKey="funding"
                nameKey="name"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {data.startupFunding.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </Paper>
        </Grid>

        {/* Research Projects by Field */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ padding: '24px' }}>
            <Typography variant="h6" color="secondary" gutterBottom>Research Projects by Field</Typography>
            <BarChart width={500} height={300} data={data.researchProjects}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="projects" fill="#82ca9d" />
            </BarChart>
          </Paper>
        </Grid>

        {/* Funding Trends Over Time */}
        <Grid item xs={12}>
          <Paper sx={{ padding: '24px' }}>
            <Typography variant="h6" color="secondary" gutterBottom>Funding Trends Over Time</Typography>
            <LineChart width={1000} height={300} data={data.fundingTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="amount" stroke="#8884d8" />
            </LineChart>
          </Paper>
        </Grid>
      </Grid>

      {/* Filters */}
      <Box sx={{ marginTop: '24px', display: 'flex', alignItems: 'center' }}>
        <Typography variant="h6" color="secondary" sx={{ marginRight: '16px' }}>Filter Data:</Typography>
        <FormControl sx={{ marginRight: '16px', minWidth: 120 }}>
          <InputLabel>Year</InputLabel>
          <Select
            defaultValue="2024"
            label="Year"
          >
            <MenuItem value="2023">2023</MenuItem>
            <MenuItem value="2024">2024</MenuItem>
            <MenuItem value="2025">2025</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ marginRight: '16px', minWidth: 120 }}>
          <InputLabel>Sector</InputLabel>
          <Select
            defaultValue="All"
            label="Sector"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Tech">Tech</MenuItem>
            <MenuItem value="Healthcare">Healthcare</MenuItem>
            <MenuItem value="Education">Education</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" color="primary">Apply Filters</Button>
      </Box>
    </Box>
  );
};

export default DataInsightsPage;
