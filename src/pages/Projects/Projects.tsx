import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';
import { styled, Theme } from '@mui/system';
import StyledButton from '../../components/StyledButton/StyledButton';

const projects = [
  {
    title: "Project Craze Maze",
    date: "Jul 2019 - May 2019",
    description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game.",
    technologies: "JavaScript, HTML, CSS, Canvas Graphics",
    image: "url-da-imagem-aqui",
    viewProjectLink: "link-do-projeto",
    viewCodeLink: "link-do-codigo",
  },
  {
    title: "Project Craze Maze",
    date: "Jul 2019 - May 2019",
    description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game.",
    technologies: "JavaScript, HTML, CSS, Canvas Graphics",
    image: "url-da-imagem-aqui",
    viewProjectLink: "link-do-projeto",
    viewCodeLink: "link-do-codigo",
  },
  {
    title: "Project Craze Maze",
    date: "Jul 2019 - May 2019",
    description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game.",
    technologies: "JavaScript, HTML, CSS, Canvas Graphics",
    image: "url-da-imagem-aqui",
    viewProjectLink: "link-do-projeto",
    viewCodeLink: "link-do-codigo",
  },
  {
    title: "Project Craze Maze",
    date: "Jul 2019 - May 2019",
    description: "Game to escape the maze, but not only that. An algorithm has been created that randomly generates a new maze each time the game is started. In this game, the user can use the keyboard keys to move until they find the flag and win the game.",
    technologies: "JavaScript, HTML, CSS, Canvas Graphics",
    image: "url-da-imagem-aqui",
    viewProjectLink: "link-do-projeto",
    viewCodeLink: "link-do-codigo",
  },
  // Outros projetos podem ser adicionados aqui
];

interface Project {
  title: string;
  date: string;
  description: string;
  technologies: string;
  image: string;
  viewProjectLink: string;
  viewCodeLink: string;
}

const Hero: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const StyledHero = styled("div")(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.primary.main,
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "150px",
    paddingBottom: "100px",
  }));

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
    backgroundColor: '#f5f5f5',
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
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        sx={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
          borderRadius: "4px",
          marginBottom: "8px",
        }}
      />
      <CardContent sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '16px',
      }}>
        <Typography variant="h6" component="div" sx={{ marginBottom: '8px' }}>
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ marginBottom: '8px' }}>
          {project.date}
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: '8px', overflow: "hidden", textOverflow: "ellipsis" }}>
          {project.description}
        </Typography>
        <Typography variant="body2" sx={{ fontStyle: "italic", color: "gray" }}>
          Technologies: {project.technologies}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: "8px", background:"#808080" }}>
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
    <Hero>
      <Container maxWidth="lg">
        <Typography variant="h2" color="primary.contrastText" align="center" marginBottom='50px'> Projetos </Typography>
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
  );
};

export default Projects;
