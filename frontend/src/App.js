import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import Routes from "./routes";
import theme from "./styles/themes";
import MainLayout from "./components/MainLayout.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainLayout />
      <Routes />
    </ThemeProvider>
    
  );
}

export default App;
