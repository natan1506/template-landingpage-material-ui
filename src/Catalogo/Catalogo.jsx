import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Sobre from '../Sobre/Sobre';
import Aulas from '../Aulas/Aulas';
import Avaliacao from '../Avaliacao/Avaliacao';
import Professores from '../Professores/Professores';

import MainFeaturedPost from '../LandingPage/MainFeaturedPost';

import Extras from '../LandingPage/Extras';

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

const theme = createTheme();

function Catalogo() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Header title="Blog" sections={sections} conteudo={returnAPI}/> */}
          <Box sx={{ width: '100%' }}>
            <h1>Catalogo</h1>
          </Box>
          <Extras />
        </main>
    </ThemeProvider>
  );
}

export default Catalogo;
