import React from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Button, Grid, Box } from "@mui/material";
import heading2 from "./images/heading2.png";

function Main() {
  let navigate = useNavigate();
  return (
    <>
      <Grid
        sx={{
          mt: 10,
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
            <Box>
              {" "}
              <img src={heading2} alt="heading2" />
              {/* <Typography variant="h4" style={{ textAlign: "center" }}>
                MATERIAL UI FUNLAB
              </Typography> */}
              <p style={{ textAlign: "center" }}>
                Experimenting with Material UI
              </p>
            </Box>
          </Grid>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              p: 0,
            }}
          >
            <Stack direction="row" spacing={2}>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    navigate("/funWithGrid");
                  }}
                >
                  Grid
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    navigate("/funWithGrid");
                  }}
                >
                  Grid
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => {
                    navigate("/funWithGrid");
                  }}
                >
                  Grid
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => {
                    navigate("/funWithGrid");
                  }}
                >
                  Grid
                </Button>
              </Grid>
            </Stack>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default Main;
