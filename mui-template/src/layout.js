import React from "react";
import { 
    Grid,
    Box 
} from "@mui/material";

function Layout() {
  return (
    <Grid container xs={12} spacing={2}>
      <Grid item xs={4} lg={2}>
       <Box
       sx={{
        height: 200,
        width: 200,
        backgroundColor: '#ffade6'}}
       >
       </Box>
      </Grid>
      <Grid item xs={4} lg={2} sx={{}}>
      <Box
       sx={{
        height: 200,
        width: 200,
        backgroundColor: '#ffe4e1'}}
       >
       </Box>
      </Grid>
      <Grid item xs={4}lg={2} sx={{}}>
      <Box
       sx={{
        height: 200,
        width: 200,
        backgroundColor: '#b29f9d'}}
       >
       </Box>
      </Grid>
      <Grid item xs={4} lg={2} sx={{}}>
      <Box
       sx={{
        height: 200,
        width: 200,
        backgroundColor: '#f9a489'}}
       >
       </Box>
      </Grid>
      <Grid item xs={4} lg={2} sx={{}}>
      <Box
       sx={{
        height: 200,
        width: 200,
        backgroundColor: '#7e86d6'}}
       >
       </Box>
      </Grid>
      <Grid item xs={4} lg={2} sx={{}}>
      <Box
       sx={{
        height: 200,
        width: 200,
        backgroundColor: '#ea4a2a'}}
       >
       </Box>
      </Grid>
    </Grid>
  );
}

export default Layout;
