import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';

const sections = [
  { title: 'Sobre', url: '#' },
  { title: 'Currículo', url: '#' },
  { title: 'Avaliação/ou membros', url: '#' },
  { title: 'Professores', url: '#' },
];

const mainFeaturedPost = {
  title: 'Programa EAG',
  description:
    "Gestão.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

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


const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid
            container
            spacing={3}
            sx={{ mb: 2 }}
          >
            <Grid item lg={9} sm={12}>
              <Header title="Blog" sections={sections} />
              <Grid item xs={12} md={8} sx={{ py: 4 }}>
                <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                  Auxiliamos os donos de empresa a ter uma equipe autogerenciável
                </Typography>
                <Box component="span" sx={{ mt: 1, typography: 'body1' }}>
                  O Programa EAG é focado em desenvolver habilidades e competências para que os donos de negócios consigam conduzir as equipes de maneira autogerenciável, mas para isso é preciso entender elementos fundamentais para o sucesso dessa jornada. Além, é claro, de boas doses de resiliência, persistência e muita dedicação.
                </Box>
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
                  <Typography variant="h5" gutterBottom sx={{ mb: 2 }}>
                    A grande missão do EAG é transformar donos de pequenas e médias empresas para que eles construam uma empresa sem caos.
                  </Typography>
                  <Box component="span" sx={{ mt: 1, typography: 'body1' }}>
                    E para que esses donos acabem com o caos, eles precisam assumir o Comando do negócio para construir uma equipe que funcione sem depender dele. Como a gente faz isso? Nós fazemos através de uma metodologia criada pelo Marcelo Germano. E essa metodologia nós entregamos dentro do Programa EAG. O Programa EAG é um treinamento online exclusivo para donos de empresa com no mínimo 5 funcionários, onde a gente constrói a base sólida do seu negócio. Essa base sólida é baseada em 4 pilares: Cultura, Liderança e Gestão Dominio Pessoal.
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item lg={3} sm={12}>
              <Sidebar />
            </Grid>
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}