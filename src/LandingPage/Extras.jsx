import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';

import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import ImgSugestao from './image_sugestao.png'

export default function Extras() {
  const items = [
    {
      id: 1,
      favorite: true
    },
    {
      id: 2,
      favorite: false
    },
    {
      id: 3,
      favorite: false
    },
    {
      id: 4,
      favorite: false
    },
    {
      id: 5,
      favorite: false
    },
    {
      id: 6,
      favorite: false
    }
  ]

  const handleChangeFavorite = (favorite, button) => {
    console.log(favorite, button)
  }

  return (
    <Grid item lg={12} sm={12} sx={{ my: 2 }}>
      <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>
        Sugestões para o seu perfil
      </Typography>
      <Grid container item xs={12} sm={12} sx={{ display: 'flex', flexWrap: 'wrap' }} spacing={2}>
        {items.map((item) => (
          <Grid key={item.id} item xs={12} md={6} lg={3} sx={{ display: 'flex', flexDirection: 'column' }}>
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
                height: { lg: '200px', md: '230px', xs: '180px' },
                width: { lg: '280px', md: '330px', xs: '220px' }
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  bottom: 0,
                  right: 0,
                  left: 0,
                  backgroundColor: 'rgba(0,0,0,.3)',
                }}> 
                <Grid item xs={12}>
                  <Box
                    sx={{
                      position: 'relative',
                      p: { xs: 1, md: 2 },
                    }}
                  >
                    <Grid container>
                      <Grid item xs={10}>
                        <Box component="span" sx={{ my: 2 }}>
                          Gestão
                        </Box>
                        <Typography component="h1" variant="h6" color="inherit">
                          Programa EAG
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <IconButton color="primary" aria-label="upload picture" component="span" onClick={() => {handleChangeFavorite(item.favorite)}}>
                          { item.favorite === true ? <BookmarkIcon /> : <BookmarkBorderIcon /> }
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                <Box
                  sx={{
                    border: 2,
                    position: 'absolute', 
                    bottom: '-30px', 
                    left: '5px',
                    color: '#5C4200',
                    borderColor: '#fff',
                    backgroundColor: '#FFECBB',
                    borderRadius: '50%',
                    height: '60px',
                    width: '60px',
                    p: 2
                  }}
                >
                  <AccountBalanceIcon size="small" />
                </Box>
              </Box>
            </Paper>
            <Grid container sx={{ mt: 2, display: "flex", justifyContent: "end" }}>
              {/* <Rating name="read-only" value="4" readOnly /> */}
            </Grid>
            {/* <Divider /> */}
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}