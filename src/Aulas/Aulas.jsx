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
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DomainVerificationIcon from '@mui/icons-material/DomainVerification';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';


import ImgSugestao from '../LandingPage/image_sugestao.png'
import Extras from '../LandingPage/Extras';

const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: 'calc(-50% + 16px)',
    right: 'calc(50% + 16px)',
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: '#784af4',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

export default function Aulas() {

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
            <Box sx={{ width: '100%' }}>
              <Stepper orientation="vertical">
                <Step active>
                  <StepLabel>
                    Assista aqui o ritual de Positive Focus
                  </StepLabel>
                  <StepContent>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                      <Box>
                        <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                        <Typography>Secondary text</Typography>
                      </Box>
                      <PhotoCameraFrontIcon />
                    </Grid>
                  </StepContent>
                </Step>
                <Step active>
                  <StepLabel>
                    Assista aqui o ritual de Positive Focus
                    
                  </StepLabel>
                  <StepContent>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                      <Box>
                        <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                        <Typography>Secondary text</Typography>
                      </Box>
                      <PhotoCameraFrontIcon />
                    </Grid>
                  </StepContent>
                </Step>
                <Step>
                  <StepLabel>
                    Assista aqui o ritual de Positive Focus
                  </StepLabel>
                  <StepContent>
                    <Grid container sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                      <Box>
                        <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                        <Typography>Secondary text</Typography>
                      </Box>
                      <PhotoCameraFrontIcon />
                    </Grid>
                  </StepContent>
                </Step>
              </Stepper>
            </Box>
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
              <Box sx={{ width: '100%' }}>
                <Stepper orientation="vertical">
                  <Step active>
                    <StepLabel>
                      Assista aqui o ritual de Positive Focus
                    </StepLabel>
                    <StepContent>
                      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                        <Box>
                          <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                          <Typography>Secondary text</Typography>
                        </Box>
                        <PhotoCameraFrontIcon />
                      </Grid>
                    </StepContent>
                  </Step>
                  <Step active>
                    <StepLabel>
                      Assista aqui o ritual de Positive Focus
                      
                    </StepLabel>
                    <StepContent>
                      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                        <Box>
                          <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                          <Typography>Secondary text</Typography>
                        </Box>
                        <PhotoCameraFrontIcon />
                      </Grid>
                    </StepContent>
                  </Step>
                  <Step>
                    <StepLabel>
                      Assista aqui o ritual de Positive Focus
                    </StepLabel>
                    <StepContent>
                      <Grid container sx={{ display: 'flex', justifyContent: 'space-between', pl: 3 }}>
                        <Box>
                          <Typography variant='h6'>Assista aqui o ritual de Positive Focus</Typography>
                          <Typography>Secondary text</Typography>
                        </Box>
                        <PhotoCameraFrontIcon />
                      </Grid>
                    </StepContent>
                  </Step>
                </Stepper>
              </Box>
            </Portal>
          ) : null}
        </Box>

        <Box sx={{ p: 1, my: 1 }} ref={container} />
        <Box textAlign='center'>
          <Button onClick={handleClick} sx={{ mt: 3 }}>
            {show ?  
              <Box sx={{ display: 'flex' }}>
                <KeyboardArrowUpIcon size="small" sx={{ alignSelf: 'flex-end' }}/> 
                <Typography component="span" variant="span" >Fechar</Typography> 
              </Box>
            : 
              <Box sx={{ display: 'flex' }}>
                <KeyboardArrowDownIcon size="small" sx={{ alignSelf: 'flex-end' }}/> 
                <Typography component="span" variant="span" >Ver programação completa</Typography> 
              </Box>
            }
          </Button>
        </Box>
      </Grid>

      <Grid container sx={{ mx: 2, justifyContent: 'flex-end' }}>
        <Button variant="outlined">Ver programação completa</Button>
      </Grid>
      <Extras />
      <Grid container sx={{ mx: 2 }}>
        <Button variant="outlined">Ver categoria completa</Button>
      </Grid>
    </Grid >
  );
}