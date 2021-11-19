import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';

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

function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Header title="Blog" sections={sections}/>
        </main>
    </ThemeProvider>
  );
}

export default LandingPage;
