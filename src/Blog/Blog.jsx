import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';

import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';

import DownloadIcon from '@mui/icons-material/Download';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';

import ImgExtra from './image_extra.png'
import ImgSugestao from './image_sugestao.png'

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

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Header title="Blog" sections={sections}/>
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
          <Grid
            container
            spacing={3}
            sx={{ mb: 2 }}
          >
            <Grid item lg={12} sm={12}>
              <Typography component="h5" variant="h5" color="primary" sx={{ mb: 2 }}>
                Materiais extras
              </Typography>
              <Grid item xs={12} sm={12} sx={{ display: 'flex' }}>
                <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 0 }} >
                  <CardContent sx={{ flex: 1 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: '100%', display: { sm: 'block' } }}
                      image={ImgExtra}
                      alt="imagem extra"
                    />
                    <Grid container sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
                      <Typography component="h6" variant="h6">
                        E-book
                      </Typography>
                      <DownloadIcon size="small" sx={{ alignSelf: 'center' }} />
                    </Grid>
                    <Divider />
                  </CardContent>
                </Card>
                <Card sx={{ display: 'flex', flexDirection: 'column', boxShadow: 0 }} >
                  <CardContent sx={{ flex: 1 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: '100%', display: { sm: 'block' } }}
                      image={ImgExtra}
                      alt="imagem extra"
                    />
                    <Grid container sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
                      <Typography component="h6" variant="h6">
                        E-book
                      </Typography>
                      <DownloadIcon size="small" sx={{ alignSelf: 'center' }} />
                    </Grid>
                    <Divider />
                  </CardContent>
                </Card>
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
        </main>
      </Container>
    </ThemeProvider>
  );
}