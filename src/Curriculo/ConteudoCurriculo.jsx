import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';

import Button from '@mui/material/Button';
import Portal from '@mui/material/Portal';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import ImgSugestao from '../LandingPage/image_sugestao.png'


export default function Extras() {

  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  return (
    <Grid container spacing={3} sx={{ mb: 2 }}>
      <Grid item lg={12} sm={12} sx={{ my: 2 }}>
        <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>
          Saia do Caos
        </Typography>
        <Typography variant='h6'>
          O programa EAG é uma metodologia desenvolvida por meio de experiências práticas dentro de diversos cenário, ou seja, ela é versátil o suficiente para atender as demandas da sua empresa e, ainda mais, te prepara para o crescimento. Deixando sua equipe extremamente apta para desenvolver o potencial máximo das habilidades. Conheça a estrutura do curso.
        </Typography>
        <Grid container sx={{ mt: 5 }}>
          <Grid item lg={12}>
            <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>Prepare-se para sua jornada</Typography>
          </Grid>
          <Grid container>

            <Timeline>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='success' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                    <Box>
                      <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                      <Typography>Secondary text</Typography>
                    </Box>
                    <PhotoCameraFrontIcon />
                  </Grid>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot color='success' />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                    <Box>
                      <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                      <Typography>Secondary text</Typography>
                    </Box>
                    <PhotoCameraFrontIcon />
                  </Grid>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                    <Box>
                      <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                      <Typography>Secondary text</Typography>
                    </Box>
                    <PhotoCameraFrontIcon />
                  </Grid>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                    <Box>
                      <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                      <Typography>Secondary text</Typography>
                    </Box>
                    <PhotoCameraFrontIcon />
                  </Grid>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                    <Box>
                      <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                      <Typography>Secondary text</Typography>
                    </Box>
                    <PhotoCameraFrontIcon />
                  </Grid>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>

        </Grid>
        <Divider sx={{ mt: 2 }} />

      </Grid>

      {/* COLOCAR UM MAP AQUI COM OS DADOS */}

      <Grid item lg={12} sm={12}>
        <Grid container>
          <Grid item lg={12} xs={12}>
            <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>Inicie seu estudo aqui</Typography>
          </Grid>
          <Grid item lg={0}>
            <AccessTimeIcon />
          </Grid>
          <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
            <Box>
              <Typography variant='h6'>Apresentação da Imersão</Typography>
              <Typography>Secondary text</Typography>
            </Box>
            <PhotoCameraFrontIcon />
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2 }} />
      </Grid>

      <Grid item lg={12} sm={12}>
        <Grid container>
          <Grid item lg={12} xs={12}>
            <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>Tarefas pré-imersão</Typography>
          </Grid>
          <Grid item lg={0}>
            <AccessTimeIcon />
          </Grid>
          <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
            <Box>
              <Typography variant='h6'>Vamos praticar</Typography>
              <Typography>Secondary text</Typography>
            </Box>
            <PhotoCameraFrontIcon />
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2 }} />
      </Grid>

      <Grid item lg={12} sm={12}>
        <Grid container>
          <Grid item lg={12} xs={12}>
            <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>Estude aqui os conteúdos PVE e Meta SMART</Typography>
          </Grid>
          <Grid item lg={0}>
            <AccessTimeIcon />
          </Grid>
          <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
            <Box>
              <Typography variant='h6'>PVE e Meta S.M.A.R.T.</Typography>
              <Typography>Secondary text</Typography>
            </Box>
            <PhotoCameraFrontIcon />
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2 }} />


        <Grid container sx={{ mt: 5 }}>
          <Grid item lg={12} xs={12}>
            <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>Imersão</Typography>
          </Grid>
          <Grid container>
            <Grid item lg={0}>
              <AccessTimeIcon />
            </Grid>
            <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
              <Box>
                <Typography variant='h6'>Modelo do PVE - EAG</Typography>
                <Typography>Secondary text</Typography>
              </Box>
              <PhotoCameraFrontIcon />
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2 }} />

        <Grid container sx={{ mt: 2 }}>
          <Grid container>
            <Grid item lg={0}>
              <AccessTimeIcon />
            </Grid>
            <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
              <Box>
                <Typography variant='h6'>Modelo do PVE - EAG</Typography>
                <Typography>Secondary text</Typography>
              </Box>
              <PhotoCameraFrontIcon />
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ mt: 2 }} />

        <Box sx={{ p: 1, my: 1 }}>
          {show ? (
            <Portal container={container.current}>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                    <Box>
                      <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                      <Typography>Secondary text</Typography>
                    </Box>
                    <PhotoCameraFrontIcon />
                  </Grid>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                    <Box>
                      <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                      <Typography>Secondary text</Typography>
                    </Box>
                    <PhotoCameraFrontIcon />
                  </Grid>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                    <Box>
                      <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                      <Typography>Secondary text</Typography>
                    </Box>
                    <PhotoCameraFrontIcon />
                  </Grid>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>
                  <Grid item lg={11} sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                    <Box>
                      <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                      <Typography>Secondary text</Typography>
                    </Box>
                    <PhotoCameraFrontIcon />
                  </Grid>
                </TimelineContent>
              </TimelineItem>

            </Portal>
          ) : null}
        </Box>

        <Box sx={{ p: 1, my: 1 }} ref={container} />
        <Box textAlign='center'>
          <Button onClick={handleClick} sx={{ mt: 3 }}>
            {show ?  'Voltar' : 'Ver programação completa'}
          </Button>
        </Box>
      </Grid>

      {/* <Grid item sx={{ display: 'flex', mt: 2}} xs={12} justifyContent='center'>
        <KeyboardArrowDownIcon fontSize='large'/>
        <Typography color='secondary' variant='h6'>Ver programação completa</Typography>
      </Grid> */}

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
            <Divider sx={{ pb: 2 }} />
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
            <Divider sx={{ pb: 2 }} />
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
            <Divider sx={{ pb: 2 }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid container sx={{ mt: 3, display: 'flex' }}>
        <Button>
          <ArrowBackIosIcon />
        </Button>
        <Button>
          <ArrowForwardIosIcon />
        </Button>
        <Typography variant='h6' color='primary'>Ver categoria completa</Typography>
      </Grid>
    </Grid >
  );
}