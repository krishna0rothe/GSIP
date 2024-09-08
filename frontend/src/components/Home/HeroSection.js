import { Container, Typography, Button, Box } from '@mui/material';
import image from './bg.png';

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundImage:
          `url(${image})`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="h2" component="h1" color="#f9f9f9" gutterBottom>
          Empowering Gujarat’s Innovators & Startups
        </Typography>
        <Typography variant="h6" component="p" color="#f9f9f9" gutterBottom>
          A unified platform to connect startups, researchers, investors, and
          mentors. Build, grow, and scale your innovation with us.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Join the Movement
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
