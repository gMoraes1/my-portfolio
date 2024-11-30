import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { styled, Theme } from '@mui/system';
import StyledButton from '../../components/StyledButton/StyledButton';

// Importe as imagens diretamente do repositório
import project1Image from '../../assets/images/imagensSite/cep.png';
import project2Image from '../../assets/images/imagensSite/smart.png';
import project3Image from '../../assets/images/imagensSite/land.png';

// Definição dos projetos com as imagens locais
const projects = [
  {
    title: "Project Via-Cep",
    date: "Julho 2023 -  Agosto 2023",
    description: "Projeto desenvolvido com o objetivo de buscar informações de endereços através da API Via-Cep. O usuário pode inserir o CEP e obter informações como logradouro, bairro, cidade e estado.",
    technologies: "JavaScript, HTML, CSS",
    image: project1Image,
    viewProjectLink: "https://busca-cep-b8uz.vercel.app/",
    viewCodeLink: "https://github.com/gMoraes1/BuscaCep.git",
  },
  {
    title: "SmartBinder",
    date: "Abril 2024 - Dezembro 2024",
    description: "Site feito para o TCC da ETEC no curso de desenvolvimento de sistemas onde nossa equipe tem um cliente que esta buscando um aplicativo para ajudar a organizar suas tarefas e automatizar as funções exercidas pelos professores . O site foi feito para apresentar o aplicativo e suas funcionalidades.",
    technologies: "ReactJs,Typescript ,Material-UI",
    image: project2Image,
    viewProjectLink: "https://smartbinder.vercel.app/",
    viewCodeLink: "https://github.com/etecguarulhos/smart-binder-web.git",
  },
  {
    title: "LandPage",
    date: "Julho 2024 - Agosto 2024",
    description: "Projeto desenvolvido com ReactJS e Tailwindcss. Foi o primeiro contato com a nova tecnologia de estilização e mais aprendizado sobre React .",
    technologies: "ReactJs,Typescript , Tailwindcss",
    image: project3Image,
    viewProjectLink: "https://projeto-em-react-e-tailwind-css.vercel.app/",
    viewCodeLink: "https://github.com/gMoraes1/projeto-em-react-e-Tailwind-CSS",
  },
  {
    title: "Project Crazy Maze",
    date: "Jul 2019 - May 2019",
    description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game.",
    technologies: "JavaScript, HTML, CSS, Canvas Graphics",
    viewProjectLink: "link-do-projeto",
    viewCodeLink: "link-do-codigo",
  },
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
            height: "320px",
            width: "100%",
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
        <StyledButton onClick={() => window.open(project.viewProjectLink, "_blank")}>
          View Project
        </StyledButton>
        <StyledButton onClick={() => window.open(project.viewCodeLink, "_blank")}>
          View Code
        </StyledButton>
      </Box>
    </StyledCard>
  );
};

const Projects = () => {
  return (
    <div id="projects">
      <Hero>
        <Container maxWidth="lg">
          <Typography variant="h2" color="primary.contrastText" align="center" marginBottom='30px' sx={{ marginTop: '-100px' }}>
            Projetos
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

export default Projects;