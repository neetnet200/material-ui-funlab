import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import FunWithGrid from "./components/funWithGrid";
import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { yellow } from "@mui/material/colors";

const primaryColor = yellow[500];

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: "#f44336",
    },
    success: {
      main: "#ff784e",
    },
  },
  typography: {
    h4: {
      fontFamily: "Codystar",
      fontSize: "6rem",
      color: "#f73378"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/funWithGrid" element={<FunWithGrid />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
