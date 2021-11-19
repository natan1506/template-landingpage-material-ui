import * as React from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import Rating from '@mui/material/Rating';

import Extras from '../LandingPage/Extras';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width: '100%',
  alignSelf: 'center',
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

export default function Avaliacao () {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ mb: 2 }}
      >
        <Grid item lg={12} sm={12} sx={{ mt: 4 }}>
          <Typography variant="h5">Nome do Curso</Typography>
          <Grid container sm={12} justifyContent="center" sx={{ my: 8 }}>
            <Grid container xs={12} sm={12} md={6} lg={6} spacing={4}>
              <Grid container item sm={6} spacing={2} direction="column" >
                <Grid
                  item sx={{ display: 'flex' }}
                >
                  <Typography variant="span" align="center" sx={{ mr: 2 }}>5</Typography>
                  <BorderLinearProgress variant="determinate" value={100} />
                </Grid>
                <Grid
                  item sx={{ display: 'flex' }}
                >
                  <Typography variant="span" align="center" sx={{ mr: 2 }}>4</Typography>
                  <BorderLinearProgress variant="determinate" value={50} />
                </Grid>
                <Grid
                  item sx={{ display: 'flex' }}
                >
                  <Typography variant="span" align="center" sx={{ mr: 2 }}>3</Typography>
                  <BorderLinearProgress variant="determinate" value={0} />
                </Grid>
                <Grid
                  item sx={{ display: 'flex' }}
                >
                  <Typography variant="span" align="center" sx={{ mr: 2 }}>2</Typography>
                  <BorderLinearProgress variant="determinate" value={0} />
                </Grid>
                <Grid
                  item sx={{ display: 'flex' }}
                >
                  <Typography variant="span" align="center" sx={{ mr: 2 }}>1</Typography>
                  <BorderLinearProgress variant="determinate" value={0} />
                </Grid>
              </Grid>
              <Grid 
                item 
                container 
                sm={6} 
                display="row" 
                justifyContent="center" 
                alignItems="center"
              >
                <Box 
                  sx={{ 
                    border: 1, 
                    display: "flex", 
                    flexDirection: "column",
                    borderColor: "#A07300", 
                    borderRadius: "16px",
                    maxWidth: 188,
                    p: 3
                    }}
                  >
                  <Typography variant="h3" align="center">4.8</Typography>
                  <Rating name="read-only" value="4" readOnly />
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sm={12} justifyContent="center" sx={{ my: 8 }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <form>
                <TextField
                  id="outlined-textarea"
                  label="Multiline Placeholder"
                  placeholder="Placeholder"
                  multiline
                  rows={4}
                  sx={{ my: 2 }}
                  fullWidth
                />
                <Button variant="contained">Adicionar</Button>
              </form>
            </Grid>
          </Grid>
          <Grid container sm={12} justifyContent="center" sx={{ my: 8 }}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Box
                sx={{ 
                  backgroundColor: "#EFEFEF", 
                  borderRadius: "16px",
                  p: 3
                }}
              >
                <Grid container spacing={2} sm={12}>
                  <Grid 
                    container 
                    item 
                    sm={12} 
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography variant="span">Nome do usuário</Typography>
                    <Typography variant="span">19/11/2021</Typography>
                  </Grid>
                  <Grid item sm={12}>
                    <Typography variant="span">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae mattis mi tristique tortor, viverra faucibus id. Tincidunt porttitor et semper orci. Praesent ipsum eget diam quisque senectus egestas. Quis tortor tellus quis fringilla luctus vel.
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          
          
        </Grid>
        
      </Grid>    
      <Extras />
    </>
  );
}