import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Box, Grid, Typography} from "@mui/material";

function Footer() {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={3}>
          <Box>
            <a href="https://www.linkedin.com/in/anitadesanmiguel">
              <FaLinkedinIn color="#bf360c" style={{ fontSize: "24px" }} />
            </a>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <a href="https://mobile.twitter.com/neetnet200">
              <FaTwitter color="#bf360c" style={{ fontSize: "24px" }} />
            </a>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <a href="https://github.com/neetnet200">
              <FaGithub color="#bf360c" style={{ fontSize: "24px" }}></FaGithub>
            </a>
          </Box>
        </Grid>
      </Box>
      <Grid item xs={12}>
          <Typography variant="caption" color="black" >
            @ 2022 neetnet.io 
          </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
