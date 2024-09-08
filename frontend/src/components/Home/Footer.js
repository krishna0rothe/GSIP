import { Box, Container, Typography, Grid, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#333", py: 4, color: "white" }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Quick Links</Typography>
            <Link href="#" color="inherit">
              About Us
            </Link>
            <br />
            <Link href="#" color="inherit">
              Contact
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Social Media</Typography>
            <Link href="#" color="inherit">
              Facebook
            </Link>
            <br />
            <Link href="#" color="inherit">
              Twitter
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6">Contact Info</Typography>
            <Typography variant="body2">Email: info@gsip.com</Typography>
            <Typography variant="body2">Phone: +91 9876543210</Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
