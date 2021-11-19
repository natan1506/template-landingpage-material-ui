import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';

import ImgSugestao from '../LandingPage/image_sugestao.png'


export default function Extras() {
  return (
    <Grid
      container
      spacing={3}
      sx={{ mb: 2 }}
    >
      <Grid item lg={12} sm={12} sx={{ my: 2 }}>
        <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>
          Saia do Caos
        </Typography>
        <Typography>
        O programa EAG é uma metodologia desenvolvida por meio de experiências práticas dentro de diversos cenário, ou seja, ela é versátil o suficiente para atender as demandas da sua empresa e, ainda mais, te prepara para o crescimento. Deixando sua equipe extremamente apta para desenvolver o potencial máximo das habilidades. Conheça a estrutura do curso.
        </Typography>
        <Grid container spacing={2} item xs={12} sm={12} sx={{ display: 'flex' }}>
          
        </Grid>
      </Grid>
      <Grid item lg={12} sm={12} sx={{ my: 2 }}>
        <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>
          Sugestões para o seu perfil
        </Typography>
        <Grid container item xs={12} sm={12} sx={{ display: 'flex' }} spacing={2}>
          <Grid item xs={12} md={6} lg={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Paper
              sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${ImgSugestao})`,
                height: '200px'
              }}
            >
              {/* Increase the priority of the hero background image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: 'rgba(0,0,0,.3)',
                }}
              />
              <Grid container>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      position: 'relative',
                      p: { xs: 1, md: 2 },
                    }}
                  >
                    <Box component="span" sx={{ my: 2 }}>
                      Gestão
                    </Box>
                    <Typography component="h1" variant="h6" color="inherit">
                      Programa EAG
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            <Grid container sx={{ mt: 2, display: "flex", justifyContent: "end" }}>
              <Rating name="read-only" value="4" readOnly />
            </Grid>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Paper
              sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${ImgSugestao})`,
                height: '200px'
              }}
            >
              {/* Increase the priority of the hero background image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: 'rgba(0,0,0,.3)',
                }}
              />
              <Grid container>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      position: 'relative',
                      p: { xs: 1, md: 2 },
                    }}
                  >
                    <Box component="span" sx={{ my: 2 }}>
                      Gestão
                    </Box>
                    <Typography component="h1" variant="h6" color="inherit">
                      Programa EAG
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            <Grid container sx={{ mt: 2, display: "flex", justifyContent: "end" }}>
              <Rating name="read-only" value="4" readOnly />
            </Grid>
            <Divider />
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Paper
              sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${ImgSugestao})`,
                height: '200px'
              }}
            >
              {/* Increase the priority of the hero background image */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: 'rgba(0,0,0,.3)',
                }}
              />
              <Grid container>
                <Grid item xs={12}>
                  <Box
                    sx={{
                      position: 'relative',
                      p: { xs: 1, md: 2 },
                    }}
                  >
                    <Box component="span" sx={{ my: 2 }}>
                      Gestão
                    </Box>
                    <Typography component="h1" variant="h6" color="inherit">
                      Programa EAG
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
            <Grid container sx={{ mt: 2, display: "flex", justifyContent: "end" }}>
              <Rating name="read-only" value="4" readOnly />
            </Grid>
            <Divider />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}