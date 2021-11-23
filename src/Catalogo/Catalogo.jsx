import * as React from 'react';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import Extras from '../LandingPage/Extras';

import MainFeaturedPost from '../LandingPage/MainFeaturedPost';

const mainFeaturedPost = {
  title: 'Programa EAG',
  description:
    "Gestão.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};


function Catalogo() {

  return (
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <CssBaseline />
      <Grid
        container
        spacing={3}
        sx={{ mb: 2 }}
      >
        <Grid container item sm={12} sx={{ mx: 2, justifyContent: 'flex-end' }}>
          <Button variant="outlined"><Link to="/catalogo" >Ver programação completa</Link></Button>
        </Grid>

        <Grid item lg={12} sm={12} sx={{ mx: 2 }}>
          <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>
            Sugestões para o seu perfil
          </Typography>
          <Extras />
        </Grid>
        <Grid item sx={{ mx: 2 }}>
          <Button variant="outlined">Ver categoria completa</Button>
        </Grid>
      </Grid>
    </>
  );
}

export default Catalogo;
