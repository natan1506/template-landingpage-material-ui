import * as React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Sidebar(props) {
  const { objetivo } = props
  return (
    <Grid item xs={12} sx={{ mt: 8, ml: 5, display: {xs: "none", lg: "block" }}}>
      {objetivo}
      <Box sx={{ mb: 1.5 }}>
        <Typography variant="h6" color="primary">Formato</Typography>
        <Typography variant="subtitle1">Híbrido</Typography>
      </Box>
      <Box sx={{ mb: 1.5 }}>
        <Typography variant="h6" color="primary">Data</Typography>
        <Typography variant="subtitle1">10.12.21</Typography>
      </Box>
      <Box sx={{ mb: 1.5 }}>
        <Typography variant="h6" color="primary">Carga Horária</Typography>
        <Typography variant="subtitle1">40h</Typography>
      </Box>
      {/* <Box sx={{ mb: 1.5 }}>
        <Typography variant="h6" color="primary">Número de inscritos</Typography>
        <Typography variant="subtitle1">267</Typography>
      </Box> */}
      <Box sx={{ mb: 1.5 }}>
        <Typography variant="h6" color="primary">Benefícios</Typography>
        <Typography variant="subtitle1">Por meio desse programa você terá acesso às ferramentas necessárias para você tirar a sua empresa do caos; Além de acesso exclusivo a conteúdos de cases construídos especialmente para mostrar como você pode comandar a sua empresa</Typography>
      </Box>
      <Box sx={{ mb: 1.5 }}>
        <Typography variant="h6" color="primary">Público-alvo</Typography>
        <Typography variant="subtitle1">Esse curso foi desenvolvido para donos de pequenas e médias empresas</Typography>
      </Box>
    </Grid>
  );
}