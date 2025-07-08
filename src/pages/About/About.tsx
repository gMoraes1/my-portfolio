
import { Card, CardContent, Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  color: theme.palette.primary.main,
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
  },
}));

function AboutMe() {
  return (
    <div id="about">
    <Container maxWidth="lg" >
    <div style={{ padding: '10px'}}>
      <Typography variant="h2" align="center"  marginTop='200px' padding='10px'>
        Sobre mim
      </Typography>
      <Grid container spacing={3} justifyContent="center" padding='20px'>
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <WorkIcon style={{ fontSize: 40 }} />
              <Typography variant="h6" component="div">
                Experiência
              </Typography>
              <Typography variant="body2"  fontWeight="bold" fontSize= "17px">2 anos</Typography>
              <Typography variant="body1"  fontWeight="bold" fontSize= "15px">Desenvolvimento full stack/ Devops</Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <SchoolIcon style={{ fontSize: 40 }} />
              <Typography variant="h6" component="div">
                Formação
              </Typography>
              <Typography variant="body1" fontWeight="bold" fontSize= "17px">Técnico em Desenvolvimento de Sistemas</Typography>
              <Typography variant="body1" fontWeight="bold" fontSize= "17px">Programador</Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
      <Typography color="primary" variant="h5" marginTop="40px" padding="20px"
      >
               Iniciei minha trajetória como desenvolvedor focado em front-end, mas atualmente estou direcionando minha carreira para back-end e DevOps. Por isso, organizei este portfólio para refletir essa evolução, com projetos divididos por área de atuação.

      Tenho 1 ano de experiência em desenvolvimento de sistemas utilizando Python e MySQL, com atuação prática em Git, CI/CD, Docker, Kubernetes e React. Atualmente, estou aprofundando meus conhecimentos em AWS e práticas de Cloud Computing. <br></br>

      Tenho desenvolvido projetos pessoais com Flask e FastAPI para criação de APIs RESTful, aplicando Docker e Docker Compose para conteinerização e orquestração.

      Sou comunicativo, colaborativo e focado em resultados. Já participei de projetos com aplicação de Machine Learning, desenvolvendo soluções escaláveis, otimizando processos e criando relatórios que apoiaram a tomada de decisão do time.
      </Typography>
    </div>
    </Container>
    </div>
  );
}

export default AboutMe;
