import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import ImgSugestao from './image_sugestao.png'

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';


export default function Extras() {
  return (
    <Grid item lg={12} sm={12} sx={{ my: 2 }}>
    <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>
      Sugestões para o seu perfil
    </Typography>
    <Grid container item xs={12} sm={12} sx={{ display: 'flex' }} spacing={4}>
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
          <BookmarkBorderIcon fontSize='large' />
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
        <Grid container sx={{ mt: 0, display: "flex", justifyContent: "space-between" }}>
        <DomainVerificationIcon />
          <Rating name="read-only" value="4" readOnly />
        </Grid>
        <Divider sx={{pb: 2}}/>
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
          <BookmarkBorderIcon fontSize='large' />
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
        <Grid container sx={{ mt: 0, display: "flex", justifyContent: "space-between" }}>
        <DomainVerificationIcon />
          <Rating name="read-only" value="4" readOnly />
        </Grid>
        <Divider sx={{pb: 2}}/>
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
          <BookmarkBorderIcon fontSize='large' />
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
        <Grid container sx={{ mt: 0, display: "flex", justifyContent: "space-between" }}>
          <DomainVerificationIcon />
          <Rating name="read-only" value="4" readOnly />
        </Grid>
        <Divider sx={{pb: 2}}/>
      </Grid>
    </Grid>
  </Grid>
  );
}