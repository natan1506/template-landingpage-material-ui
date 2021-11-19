import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

import Extras from '../LandingPage/Extras';

export default function Professores() {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ mb: 2 }}
      >
        <Grid item lg={12} sm={12} sx={{ mt: 4 }}>
          <Typography variant="h5">Nome do Professor</Typography>
          <Grid container sm={12} spacing={2} sx={{ my: 8 }}>
            <Grid item sm={12} md={3}>
              <Grid 
                container 
                item 
                sm={12} 
                direction="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography variant="span">Nome do usuário</Typography>
                <Typography variant="span">19/11/2021</Typography>
              </Grid>
              
            </Grid>
            <Grid item container direction="column" sm={12} md={8}>
              <Typography variant="span" sx={{ my: 2 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae mattis mi tristique tortor, viverra faucibus id. Tincidunt porttitor et semper orci. Praesent ipsum eget diam quisque senectus egestas. Quis tortor tellus quis fringilla luctus vel.
              </Typography>
              <Rating name="read-only" value="4" readOnly />
            </Grid>
          </Grid>
        </Grid>
      </Grid>    
      <Extras />
    </>
  );
}