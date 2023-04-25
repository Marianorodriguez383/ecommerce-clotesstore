import { Box, Grid } from "@mui/material";
import React from "react";

const MaterialGrid = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={4}>
          <h5 style={{ border: "2px solid black" }}>Item 1</h5>
        </Grid>
        <Grid item xs={4}>
          <h5 style={{ border: "2px solid black" }}>Item 2</h5>
        </Grid>
        <Grid item xs={4}>
          <h5 style={{ border: "2px solid black" }}>Item 3</h5>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MaterialGrid;
