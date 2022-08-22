import React from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Grid, Box } from "@mui/material";

function Main() {
  let navigate = useNavigate();
  return (
    <>
      <Grid
        container
        spacing={10}
        sx={{
          mt: 10,
          display: "flex",
          justifyContent: "center",
          p: 10,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid item xs={12}>
            <Box
              xs={12}
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Typography variant="h3" style={{ textAlign: "center" }}>
                MATERIAL UI FUNLAB
              </Typography>
              <p style={{ textAlign: "center" }}>
                Experimenting with Material UI
              </p>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              xs={12}
              sx={{
                mt: 10,
              }}
            >
              <Button
                variant="contained"
                color="primary"
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
