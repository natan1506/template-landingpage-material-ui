import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';

import DownloadIcon from '@mui/icons-material/Download';

import ImgExtra from './image_extra.png'
import ImgSugestao from './image_sugestao.png'


export default function Extras() {
  return (
    <Grid
      container
      spacing={3}
      sx={{ mb: 2 }}
    >
      <Grid item lg={12} sm={12} sx={{ my: 2 }}>
        <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>
          Materiais extras
        </Typography>
        <Grid container spacing={2} item xs={12} sm={12} sx={{ display: 'flex' }}>
          <Grid item xm={12} md={6} lg={3} sx={{ display: 'flex', flexDirection: 'column' }} >
              <img
                sx={{ width: '100%', display: { sm: 'block' } }}
                src={ImgExtra}
                alt="imagem extra"
              />
              <Grid container sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
                <Typography component="h6" variant="h6">
                  E-book
                </Typography>
                <DownloadIcon size="small" sx={{ alignSelf: 'center' }} />
              </Grid>
              <Divider />
          </Grid>
          <Grid item xm={12} md={6} lg={3} sx={{ display: 'flex', flexDirection: 'column' }} >
            <img
              sx={{ width: '100%', display: { sm: 'block' } }}
              src={ImgExtra}
              alt="imagem extra"
            />
            <Grid container sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
              <Typography component="h6" variant="h6">
                E-book
              </Typography>
              <DownloadIcon size="small" sx={{ alignSelf: 'center' }} />
            </Grid>
            <Divider />
          </Grid>
        </Grid>
      </Grid>
      <Grid item lg={12} sm={12} sx={{ my: 2 }}>
        <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>
          Depoimentos
        </Typography>
        <Grid container item xs={12} sm={12} sx={{ display: 'flex' }} spacing={2} >
          <Grid item xs={12} md={6} lg={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Rating name="read-only" value="4" readOnly />
            <Box component="span" sx={{ my: 2 }}>
              “Aplicamos os princípios e ferramentas vistos no EAG e pudemos ter uma visão mais clara das pessoas que estão aqui, assim como ver uma transformação de organização e energia de todos”.
            </Box>
            <Typography variant="h6" sx={{ my: 2 }}>
              Patrícia Cândido
            </Typography>
            <Typography variant="h6">
              Ver case completo
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Rating name="read-only" value="4" readOnly />
            <Box component="span" sx={{ my: 2 }}>
              “Aplicamos os princípios e ferramentas vistos no EAG e pudemos ter uma visão mais clara das pessoas que estão aqui, assim como ver uma transformação de organização e energia de todos”.
            </Box>
            <Typography variant="h6" sx={{ my: 2 }}>
              Patrícia Cândido
            </Typography>
            <Typography variant="h6">
              Ver case completo
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} lg={3} sx={{ display: 'flex', flexDirection: 'column' }}>
            <Rating name="read-only" value="4" readOnly />
            <Box component="span" sx={{ my: 2 }}>
              “Aplicamos os princípios e ferramentas vistos no EAG e pudemos ter uma visão mais clara das pessoas que estão aqui, assim como ver uma transformação de organização e energia de todos”.
            </Box>
            <Typography variant="h6" sx={{ my: 2 }}>
              Patrícia Cândido
            </Typography>
            <Typography variant="h6">
              Ver case completo
            </Typography>
          </Grid>
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