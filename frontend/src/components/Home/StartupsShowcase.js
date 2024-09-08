import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const StartupsShowcase = () => {
  const startups = [
    { name: "Startup A", description: "Building innovative tech solutions." },
    { name: "Startup B", description: "Leading the future of AI." },
    { name: "Startup C", description: "Revolutionizing agriculture." },
  ];

  return (
    <Box sx={{ py: 6, backgroundColor: "#f9f9f9" }}>
      <Container>
        <Typography variant="h4" component="h2" gutterBottom>
          Featured Innovations & Startups
        </Typography>
        <Grid container spacing={4}>
          {startups.map((startup, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{startup.name}</Typography>
                  <Typography variant="body2">{startup.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StartupsShowcase;
