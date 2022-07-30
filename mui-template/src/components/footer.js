import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Box, Grid, Typography, Divider } from "@mui/material";
import { textAlign } from "@mui/system";

function Footer() {
  return (
    <Grid container xs={12}
   >
      <Grid item>
        <Box>
          <a href="https://www.linkedin.com/in/anitadesanmiguel">
            <FaLinkedinIn color="black" />
          </a>
        </Box>
        <Box>
          <a href="https://mobile.twitter.com/neetnet200">
            <FaTwitter color="black"/>
          </a>
        </Box>
        <Box>
          <a href="https://github.com/neetnet200">
            <FaGithub color="black"></FaGithub>
          </a>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <Divider />
          <Typography >
            {" "}
            neetnet.io operates on the unceded land of the Wurundjeri peoples of
            the Kulin nation, we pay our respects to elders past present &
            emerging
          </Typography>
          <Typography>2022 neetnet.io All rights reserved</Typography>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Footer;
