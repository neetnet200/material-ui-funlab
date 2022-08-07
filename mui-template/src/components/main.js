import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Grid, Box } from "@mui/material";

function Main() {
  let navigate = useNavigate();
  return (
    <>
      <Grid container spacing={5}
        sx={{
          mt: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid item xs={12}>
            <Box>
              <Typography variant="h3">MATERIAL UI FUNLAB</Typography>
            </Box>
            <p>Experimenting with Material UI</p>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Button
                variant="contained"
                color="success"
                onClick={() => {
                  navigate("/funWithGrid");
                }}
              >
                Grid
              </Button>
            </Box>
          </Grid>
        </Box>
      </Grid>
    </>
  );
}

export default Main;
