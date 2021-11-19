import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Sidebar from '../LandingPage/Sidebar';
import Extras from '../LandingPage/Extras';

export default function Curriculo() {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ mb: 2 }}
      >
        <Grid item lg={9} sm={12} sx={{ mt: 4 }}>
          <Typography variant="h1">Curriculo</Typography>
        </Grid>
        <Grid container item lg={3} md={0} sm={0} sx={0}>
          <Sidebar />
        </Grid>
      </Grid>
      <Extras />
    </>
  );
}