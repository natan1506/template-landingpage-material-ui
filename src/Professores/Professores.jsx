import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Extras from '../LandingPage/Extras';

export default function Professores() {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ mb: 2 }}
      >
        <Grid item lg={9} sm={12} sx={{ mt: 4 }}>
          <Typography variant="h1">Professores </Typography>
        </Grid>
        
      </Grid>
      <Extras />
    </>
  );
}