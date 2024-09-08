import { Box, Typography, Container, Grid } from "@mui/material";

const PlatformBenefits = () => {
  return (
    <Box sx={{ py: 6, backgroundColor: "#f0f0f0" }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Why Join GSIP?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">For Startups</Typography>
            <Typography variant="body2">
              Access funding, mentorship, and market connections.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">For Researchers</Typography>
            <Typography variant="body2">
              Collaborate on cutting-edge projects and secure intellectual
              property.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6">For Investors</Typography>
            <Typography variant="body2">
              Find vetted startups and research projects to invest in.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PlatformBenefits;
