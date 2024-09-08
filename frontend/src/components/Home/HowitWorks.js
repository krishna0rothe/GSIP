import { Box, Typography, Container, Grid } from "@mui/material";

const HowItWorks = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          How the Platform Works
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">1. Register</Typography>
            <Typography variant="body2">
              Sign up as a startup, researcher, or investor.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">2. Connect</Typography>
            <Typography variant="body2">
              Find the right resources, partners, and investors.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">3. Grow</Typography>
            <Typography variant="body2">
              Leverage funding, mentorship, and collaboration.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">4. Succeed</Typography>
            <Typography variant="body2">
              Achieve milestones, scale, and innovate.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HowItWorks;
