import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Box, Grid, Typography, Divider } from "@mui/material";

function Footer() {
  return (
    <Grid
      container
      spacing={5}
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
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Grid item xs={3}>
          <Box>
            <a href="https://www.linkedin.com/in/anitadesanmiguel">
              <FaLinkedinIn color="#ed6b87" style={{ fontSize: "32px" }} />
            </a>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <a href="https://mobile.twitter.com/neetnet200">
              <FaTwitter color="#ed6b87" style={{ fontSize: "32px" }} />
            </a>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box>
            <a href="https://github.com/neetnet200">
              <FaGithub color="#ed6b87" style={{ fontSize: "32px" }}></FaGithub>
            </a>
          </Box>
        </Grid>
      </Box>
      <Grid
        item
        container
        xs={12}
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="caption" style={{textAlign: "center"}} color="#75b3aa">
            {" "}
            neetnet.io operates on the unceded land of the Wurundjeri peoples of
            the Kulin nation, we pay our respects to elders past present &
            emerging @ 2022 neetnet.io All rights reserved
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
