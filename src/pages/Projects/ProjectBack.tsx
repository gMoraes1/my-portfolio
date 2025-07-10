
import { Box, Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { styled, Theme } from '@mui/system';
import StyledButton from '../../components/StyledButton/StyledButton';

// Importe as imagens diretamente do repositório
import project1Image from '../../assets/images/imagensBackend/redoclyEscolar.jpeg';
import project2Image from '../../assets/images/imagensBackend/terminala.jpeg';

// Definição dos projetos com as imagens locais
const projects = [
  {
    title: "API ReDocly Escolar",   
    date: "Junho 2025 -  Julho 2025",
    description: "Projeto feio junto com a imersão da Alura, onde foi desenvolvido uma API para o sistema escolar, onde o usuário pode cadastrar alunos, cursos e turmas, além de poder consultar as informações de cada um deles. A API foi feita utilizando o ReDocly para documentar a API.",    
    technologies: "FastAPI, Python, SQLAlchemy, sqlite, ReDocly, Docker e Docker Compose",     
    image: project1Image,
    viewProjectLink: "https://busca-cep-b8uz.vercel.app/",
    viewCodeLink: "https://github.com/gMoraes1/BuscaCep.git",
  },
  {
    title: "API Filmes",
    date: "Maio 2025 - Junho 2025",
    description: "Projeto desenvolvido onde foi criado uma API para gerenciar filmes, onde o usuario pode cadastrar, consultar, atualizar e deletar filmes e suas informações. A API foi feita utilizando o FastAPI e o banco de dados SQLite, além de usar ORMS para manipular as tabelas do banco de dados.",
    technologies: "FastAPI, Python, SQLAlchemy, sqlite, Docker e Docker Compose",
    image: project2Image,
    viewProjectLink: "https://smartbinder.vercel.app/",
    viewCodeLink: "https://github.com/etecguarulhos/smart-binder-web.git",
  }
];

interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string;
  image?: string;
  viewProjectLink: string;
  viewCodeLink: string;
}

const StyledHero = styled("div")(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "150px",
  paddingBottom: "100px",
}));

const Hero: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return <StyledHero>{children}</StyledHero>;
};

const ProjectCard = ({ project }: { project: Project }) => {
  const StyledCard = styled(Card)(({ theme }: { theme: Theme }) => ({
    borderRadius: "8px",
    padding: "10px",
    width: "700px",
    height: "700px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: 'transparent',
    border: '1px solid white',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: `0px 0px 15px 5px ${theme.palette.secondary.main}`,
    },
  }));

  return (
    <StyledCard>
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '16px',
      }}>
        <Typography variant="h6" color='white' component="div" sx={{ marginBottom: '8px', fontWeight: 'bold' }}>
          {project.title}
        </Typography>
        <CardMedia
          component="img"
          image={project.image}
          alt={project.title}
          sx={{
            height: "300px",
            width: "500px",
            borderRadius: "4px",
            marginBottom: "8px",
          }}
        />
        <Typography variant="body2" color='white' sx={{ marginBottom: '8px', fontStyle: 'italic' }}>
          {project.date}
        </Typography>
        <Typography variant="body2" color='white' sx={{ marginBottom: '8px', overflow: "hidden", textOverflow: "ellipsis", fontSize: '1rem' }}>
          {project.description}
        </Typography>
        <Typography variant="body2" color='#fff' >
          Technologies: {project.technologies}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: "8px", background: "#8080" }}>
        <StyledButton onClick={() => window.open(project.viewCodeLink, "_blank")}>
          View Code
        </StyledButton>
      </Box>
    </StyledCard>
  );
};

const ProjectBack = () => {
  return (
    <div id="projects">
      <Hero>
        <Container maxWidth="lg">
          <Typography variant="h2" color="primary.contrastText" align="center" marginBottom='30px' sx={{ marginTop: '-100px' }}>
            Projetos Back End
          </Typography>
          <Box sx={{ padding: "20px" }}>
            <Grid container spacing={4} justifyContent="center">
              {projects.map((project, index) => (
                <Grid item key={index} xs={12} sm={6} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <ProjectCard project={project} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Hero>
    </div>
  );
};

export default ProjectBack;