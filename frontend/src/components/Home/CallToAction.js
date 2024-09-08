import { Box, Typography, Button, Container } from "@mui/material";

const CallToAction = () => {
  return (
    <Box sx={{ py: 6, textAlign: "center" }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Ready to Innovate?
        </Typography>
        <Typography variant="body1" gutterBottom>
          Join our growing community and accelerate your journey to success.
        </Typography>
        <Button variant="contained" color="primary" size="large" sx={{ m: 2 }}>
          Join as a Startup
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ m: 2 }}
        >
          Register as a Researcher
        </Button>
        <Button variant="outlined" size="large" sx={{ m: 2 }}>
          Invest in Innovation
        </Button>
      </Container>
    </Box>
  );
};

export default CallToAction;
