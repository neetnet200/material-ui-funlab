import React from "react";
import { useNavigate } from "react-router-dom";
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
          navigate("/funWithGrid");
        }}
      >
        Grid
      </Button>
    </>
  );
}

export default Main;
