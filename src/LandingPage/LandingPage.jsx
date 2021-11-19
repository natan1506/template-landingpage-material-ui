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
import Curriculo from '../Curriculo/Curriculo';
import Avaliacao from '../Avaliacao/Avaliacao';
import Professores from '../Professores/Professores';

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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
         {children}
        </Box>
      )}
    </div>
  );
}

const returnAPI = {
  "id":71,
  "nome":"Curso Completo de Contratação",
  "sigla":"CON_EAG",
  "descricao":"<p>Sejam bem-vindos ao curso completo de contrata&ccedil;&atilde;o!</p>\n\n<p>Parab&eacute;ns!</p>\n\n<p>Voc&ecirc; est&aacute; dando um passo importante em sua trajet&oacute;ria como empres&aacute;rio e l&iacute;der de uma organiza&ccedil;&atilde;o.</p>\n\n<p>Porque o conhecimento que trouxe voc&ecirc; at&eacute; este momento profissional, n&atilde;o &eacute; o mesmo que levar&aacute; voc&ecirc; para o pr&oacute;ximo n&iacute;vel.</p>\n\n<p>Aproveite!</p>\n",
  "objetivo":null,
  "metodologia":null,
  "conteudo":null,
  "publicosAlvos":null,
  "nomeModalidade":null,
  "situacao":"ATIVO",
  "situacaoAtivo":null,
  "conteudoDisponivel":true,
  "barraNavegacaoConteudo":null,
  "disponibilizarMobile":false,
  "devices":null,
  "modalidade":"DISTANCIA",
  "possuiAvaliacao":null,
  "statusMatricula":null,
  "tipoCertificacao":null,
  "percentualAprovacao":100.0,
  "frequenciaRequerida":0.0,
  "pesoAproveitamentoPresencial":1.0,
  "pesoAproveitamentoDistancia":0.0,
  "cargos":[],
  "unidades":[],
  "turmas":[],
  "cargaHoraria":120,
  "horas":2,
  "minutos":0,
  "idItemConteudoCertificado":null,
  "sequenciaCertificadoOk":null,
  "mostrarReacaoHistorico":null,
  "periodoPermitidoAvaliacaoReacaoHistorico":null,
  "idAvaliacaoReacao":null,
  "mostrarDesempenhoAluno":null,
  "isIntegracao":false,
  "categoriaCurso":null,
  "categoriaDiferente":false,
  "podeManifestarInteresse":false,
  "temInteresseManisfestadoPendente":false,
  "dataVideo":{},
  "imagemFundoId":"wux9sy6okmeowrybu0wyvx31",
  "order":null,
  "sort":null,
  "idsCategoriaCurso":[],
  "camposExtra":[],
  "pontosConquistas":null,
  "etapasModular":[],
  "idTurmaModular":null,
  "filtroUnidadeConclusao":false,
  "turmaSequenceHolder":null,
  "obrigatoriedade":"OPCIONAL",
  "avaliacaoCurso":null,
  "applyAvaliacaoCurso":false,
  "idComunidade":null,
  "idBiblioteca":null,
  "showPermissaoGestao":true,
  "unidadeAutora":null,
  "hasValidadeTurma":null,
  "statusSituacaoAluno":null,
  "pontos":0,
  "campoExtraMatricula":null,
  "idTermoAceite":null,
  "pesquisaSatisfacao":null,
  "enumTipoInativacaoCurso":null,
  "dataCadastro":null,
  "dataInativacao":null,
  "mesesInativacao":0,
  "imagemId":null,
  "tags":[],
  "notasPresenciais":null,
  "termoAceite":null,
  "tentativasProva":null,
  "publicosAlvoObrigatoriedade":null,
  "responsaveisTurma":null,
  "habilitarTentativasProva":false,
  "habilitarMaterialApoio":false,
  "autores":null,
  "avaliacaoComportamento":null,
  "preRequisitosAprovacao":null,
  "preRequisitosReprovacao":null,
  "manifestarInteresseRestritoAdmin":null,
  "equivalencias":null,
  "avaliacaoReacao":null,
  "certificado":null,
  "video":null,
  "camposExtraMap":{},
  "temConteudo":false,
  "temTurmas":false,
  "temDetalhes":false,
  "habilitarQrCodeVersoCertificado":false,
  "habilitarAvaliacaoVersoCertificado":false,
  "habilitavalidacaoCertificado":false,
  "habilitarAvaliacaoReacaoDefault":null,
  "missoesAssociadas":[],
  "hasVisitante":null,
  "idCursoMarketplace":null,
  "idioma":null,
  "obrigatorio":false,
  "integracao":false
}


function LandingPage() {
  const [valueTab, setValueTab] = React.useState(0);

  const handleChangeTab = (event, newValue) => {
    setValueTab(newValue);
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Header title="Blog" sections={sections} conteudo={returnAPI}/> */}
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={valueTab} onChange={handleChangeTab} aria-label="basic tabs example">
                <Tab label="Sobre" {...a11yProps(0)} sx={{textTransform: 'none'}}/>
                <Tab label="Curriculo" {...a11yProps(1)} sx={{textTransform: 'none'}}/>
                <Tab label="Avaliação/ ou membros" {...a11yProps(2)} sx={{textTransform: 'none'}}/>
                <Tab label="Professores" {...a11yProps(3)} sx={{textTransform: 'none'}}/>
              </Tabs>
            </Box>
            <TabPanel value={valueTab} index={0}>
              <Sobre conteudo={returnAPI} />
            </TabPanel>
            <TabPanel value={valueTab} index={1}>
              <Curriculo conteudo={returnAPI} />
            </TabPanel>
            <TabPanel value={valueTab} index={2}>
              <Avaliacao conteudo={returnAPI} />
            </TabPanel>
            <TabPanel value={valueTab} index={3}>
              <Professores conteudo={returnAPI} />
            </TabPanel>
          </Box>
        </main>
    </ThemeProvider>
  );
}

export default LandingPage;
