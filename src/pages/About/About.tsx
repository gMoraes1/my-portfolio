
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
              <Typography variant="body2"  fontWeight="bold" fontSize= "17px">1 ano</Typography>
              <Typography variant="body1"  fontWeight="bold" fontSize= "15px">Desenvolvimento Frontend/machine learning</Typography>
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
            Meu nome é Gustavo, tenho 18 anos e sou estudante de tecnologia, focado
         em desenvolvimento front-end. Tenho habilidades em HTML, CSS e JavaScript, e estou explorando frameworks como React e linguagens back end como python para criar interfaces intuitivas e atraentes. Estou sempre em busca de inspiração nas últimas tendências de design. Meu objetivo é aprimorar minhas habilidades em front-end e contribuir para projetos desafiadores, sonhando em um dia trabalhar em uma grande empresa de tecnologia para ter mais experiência.
      </Typography>
    </div>
    </Container>
    </div>
  );
}

export default AboutMe;
