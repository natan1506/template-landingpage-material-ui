import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Sidebar(props) {
  const title = props.title;
  const description = props.description;

  const data = [
    { invesimento: 'R$ 1.200,00' },
    { formato: 'Híbrido' },
    { data: '10.12.21' },
    { cargaHoraria: '40h' },
    { inscritos: '267' },
    { beneficios: 'Por meio desse programa você terá acesso às ferramentas necessárias para você tirar a sua empresa do caos; Além de acesso exclusivo a conteúdos de cases construídos especialmente para mostrar como você pode comandar a sua empresa' },
    { publicoAlvo: 'Esse curso foi desenvolvido para donos de pequenas e médias empresas' },
  ];

  return (
    <Grid item xs={12} sx={{ mt: 5 }}>
      <Typography variant="h6">
        Invesimento
      </Typography>
      <Typography variant="h6">
        Formato
      </Typography>
      <Typography variant="h6">
        Data
      </Typography>
      <Typography variant="h6">
        Carga Horária
      </Typography>
      <Typography variant="h6">
        Número de inscritos
      </Typography>
      <Typography variant="h6">
        Benefícios
      </Typography>
      <Typography variant="h6">
        Público-alvo
      </Typography>
    </Grid>
  );
}