
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
                Desenvolvedor com 1 ano de experiência em desenvolvimento de sistemas utilizando Python e MySQL. Atuação prática
        com Git, CI/CD, Docker, Kubernetes e React. Atualmente, aprofundando conhecimentos em DevOps com foco em AWS e Cloud, além disso estou desenvolvendo projetos pessoais em Pyhon
        usando Flask para criar APIs RESTful, containerizando com Docker e orquestrando com Docker-compose. <br></br>

        Possuo boa comunicação, sou colaborativo e focado em resultados. Desenvolvi soluções escaláveis para atender
        necessidades reais de usuários e participei de projetos com aplicação de conceitos de Machine Learning, otimizando,
        acelerando processo e criando relatórios que ajudaram o time.
        Busco uma oportunidade para aplicar e expandir minhas habilidades técnicas em ambientes desafiadores.
      </Typography>
    </div>
    </Container>
    </div>
  );
}

export default AboutMe;
