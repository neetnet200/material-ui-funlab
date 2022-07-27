import React from "react";
import { Grid, Box } from "@mui/material";

function FunWithGrid() {
  return (
    <Grid container xs={12} spacing={4} p={1}>
      <Grid item xs={4} lg={2}>
        <Box
          sx={{
            m: 5,
            height: 200,
            width: 200,
            borderRadius: 50,
            backgroundColor: "#ffade6",
            "&:hover": {
              backgroundColor: "#b6ffbf",
            },
          }}
        ></Box>
      </Grid>
      <Grid item xs={4} lg={2} sx={{}}>
        <Box
          sx={{
            m: 5,
            height: 200,
            width: 200,
            borderRadius: 50,
            backgroundColor: "#ffe4e1",
            "&:hover": {
              backgroundColor: "#f9f39c",
            },
          }}
        ></Box>
      </Grid>
      <Grid item xs={4} lg={2} sx={{}}>
        <Box
          sx={{
            m: 5,
            height: 200,
            width: 200,
            borderRadius: 50,
            backgroundColor: "#87cefa",
            "&:hover": {
              backgroundColor: "#f9a489",
            },
          }}
        ></Box>
      </Grid>
      <Grid item xs={4} lg={2} sx={{}}>
        <Box
          sx={{
            m: 5,
            height: 200,
            width: 200,
            borderRadius: 50,
            backgroundColor: "#cccccc",
            "&:hover": {
              backgroundColor: "#fcc6c8",
            },
          }}
        ></Box>
      </Grid>
      <Grid item xs={4} lg={2} sx={{}}>
        <Box
          sx={{
            m: 5,
            height: 200,
            width: 200,
            borderRadius: 50,
            backgroundColor: "#7e86d6",
            "&:hover": {
              backgroundColor: "#d0a6f7",
            },
          }}
        ></Box>
      </Grid>
      <Grid item xs={4} lg={2} sx={{}}>
        <Box
          sx={{
            m: 5,
            height: 200,
            width: 200,
            borderRadius: 50,
            backgroundColor: "#7fffd4",
            "&:hover": {
              backgroundColor: "#ffade6",
            },
          }}
        ></Box>
      </Grid>
    </Grid>
  );
}

export default FunWithGrid;
