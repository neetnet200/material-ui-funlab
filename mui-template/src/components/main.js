import React from "react";
import { useNavigate } from "react-router-dom";
import FunWithGrid from "./funWithGrid";
import { Typography, Button } from "@mui/material";

function Main() {
  let navigate = useNavigate();
  return (
    <>
      <Typography variant="h3">MATERIAL UI LAB</Typography>
      <p>Experimenting with Material UI</p>

      <Button
        variant="contained"
        color="success"
        onClick={() => {
          navigate(<FunWithGrid />);
        }}
      >
        Grid
      </Button>
    </>
  );
}

export default Main;
