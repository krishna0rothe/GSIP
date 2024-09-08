import { Box, Container, Typography, Grid } from "@mui/material";

const WhatIsGSIP = () => {
  return (
    <Box sx={{ py: 6 }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          What is Gujarat Startups & Innovation Platform?
        </Typography>
        <Typography variant="body1" gutterBottom>
          We are a one-stop solution for startups, researchers, investors, and
          policymakers. Our platform connects brilliant minds with the resources
          they need to grow, thrive, and succeed in Gujarat’s vibrant innovation
          ecosystem.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Startups</Typography>
            <Typography variant="body2">
              Access funding, mentorship, and market connections.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Researchers</Typography>
            <Typography variant="body2">
              Collaborate on cutting-edge projects and secure intellectual
              property.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Investors</Typography>
            <Typography variant="body2">
              Find vetted startups and research projects to invest in.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6">Policymakers</Typography>
            <Typography variant="body2">
              Gain insights and tools to support Gujarat’s innovation ecosystem.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatIsGSIP;
