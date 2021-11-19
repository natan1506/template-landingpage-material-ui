import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import FeaturedPost from './FeaturedPost';
import Sidebar from '../LandingPage/Sidebar';

import Extras from '../LandingPage/Extras';


const featuredPosts = [
  {
    title: 'Cultura',
    description:
      'Nós vamos extrair de você qual a sua grande ambição, o seu grande sonho e fazer com que você documente isso através de uma ferramenta exclusiva do EAG que se chama PVE, o Ponto de Vista Educativo. Ou seja, trazer clareza para onde sua empresa quer chegar, como sua empresa tem que funcionar, como as pessoas têm que se comportar para trabalhar no seu negócio. A construção da cultura baseada naquilo que você acredita.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Liderança',
    description:
      'Uma cultura forte não vai funcionar com uma liderança fraca. Por isso vamos trabalhar o seu real papel de dono para você assumir o Comando. Vamos te entregar o passo a passo para contratar e delegar. Você vai receber todas as ferramentas para desenvolver as pessoas do seu time e engajá-las. Fazer com que elas vistam a camisa da empresa.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Gestão',
    description:
      'Cultura forte e liderança forte só vão acontecer com um método de gestão eficiente. Vamos falar sobre como definir metas, indicadores, construir processos, como desenvolver planos de ação e, principalmente, você vai montar o seu Plano de 90 Dias, ferramenta exclusiva do EAG, para você desenvolver um planejamento dentro do encontro presencial para chegar na sua empresa focado em execução e resultado.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Domínio Pessoal',
    description:
      'Se uma empresa é o reflexo do dono, um dos pilares é o dono ter domínio pessoal. Afinal, o dono de empresa enfrenta problema todo santo dia. E para lidar com tudo isso, é preciso ter domínio pessoal, porque os fatos (como pandemia, crise, imposto…)  ele não controla, mas ele controla o que pensa sobre isso. E ao fazer isso, ele vai olhar pra cada fato, entender qual a perspectiva, e irá tomar a ação apropriada e superar o fato. Ele tem vontade de resolver o problema e atingir o que ele quer como objetivo. ',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];


export default function Sobre() {
  return (
    <>
      <Grid
        container
        spacing={3}
        sx={{ mb: 2 }}
      >
        <Grid item lg={9} sm={12} sx={{ mt: 4 }}>
          <Grid item xs={12} md={8} sx={{ py: 4 }}>
            <Typography variant="h5" color="primary" align="justify" sx={{ mb: 2 }}>
              Auxiliamos os donos de empresa a ter uma equipe autogerenciável
            </Typography>
            <Typography align="justify" sx={{ mt: 1, typography: 'body1' }}>
              O Programa EAG é focado em desenvolver habilidades e competências para que os donos de negócios consigam conduzir as equipes de maneira autogerenciável, mas para isso é preciso entender elementos fundamentais para o sucesso dessa jornada. Além, é claro, de boas doses de resiliência, persistência e muita dedicação.
            </Typography>
          </Grid>
          <Grid container spacing={1}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={1} sx={{ mt: 3 }}>
            <Grid
              item
              xs={12}
              sx={{ py: 3 }}
            >
              <Typography variant="h5" color="primary" gutterBottom sx={{ mb: 2 }}>
                A grande missão do EAG é transformar donos de pequenas e médias empresas para que eles construam uma empresa sem caos.
              </Typography>
              <Box component="span" sx={{ mt: 1, typography: 'body1' }}>
                E para que esses donos acabem com o caos, eles precisam assumir o Comando do negócio para construir uma equipe que funcione sem depender dele. Como a gente faz isso? Nós fazemos através de uma metodologia criada pelo Marcelo Germano. E essa metodologia nós entregamos dentro do Programa EAG. O Programa EAG é um treinamento online exclusivo para donos de empresa com no mínimo 5 funcionários, onde a gente constrói a base sólida do seu negócio. Essa base sólida é baseada em 4 pilares: Cultura, Liderança e Gestão Dominio Pessoal.
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid container item lg={3} md={0} sm={0} sx={0}>
          <Sidebar />
        </Grid>
      </Grid>
      <Extras />
    </>
  );
}