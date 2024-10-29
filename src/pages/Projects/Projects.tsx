import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography, Button, styled, Container } from '@mui/material';

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
    title: "Project Blotting",
    date: "Jul 2019 - May 2019",
    description: "Blockchain + Betting game that allows users to bet on outcomes. The game algorithm ensures fair play and secure transactions.",
    technologies: "JavaScript, HTML, CSS, Blockchain",
    image: "url-da-imagem-aqui",
    viewProjectLink: "link-do-projeto",
    viewCodeLink: "link-do-codigo",
  },
  {
    title: "Project Blotting",
    date: "Jul 2019 - May 2019",
    description: "Blockchain + Betting game that allows users to bet on outcomes. The game algorithm ensures fair play and secure transactions.",
    technologies: "JavaScript, HTML, CSS, Blockchain",
    image: "url-da-imagem-aqui",
    viewProjectLink: "link-do-projeto",
    viewCodeLink: "link-do-codigo",
  },
  {
    title: "Project Blotting",
    date: "Jul 2019 - May 2019",
    description: "Blockchain + Betting game that allows users to bet on outcomes. The game algorithm ensures fair play and secure transactions.",
    technologies: "JavaScript, HTML, CSS, Blockchain",
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
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    paddingTop: "200px",
    paddingBottom: "100px",
  }));

  return <StyledHero>{children}</StyledHero>;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card sx={{ 
      borderRadius: "8px", 
      boxShadow: 3, 
      padding: "10px", 
      width: "700px",
      height: "700px",
      display: "flex", 
      flexDirection: "column", 
      justifyContent: "space-between",
    }}>
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        sx={{ 
          height: "120px", 
          width: "100%", 
          objectFit: "cover", 
          borderRadius: "4px", 
          marginBottom: "8px",
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {project.date}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "10px", overflow: "hidden", textOverflow: "ellipsis" }}>
          {project.description}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: "4px", fontStyle: "italic", color: "gray" }}>
          Technologies: {project.technologies}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: "8px" }}>
        <Button
          variant="outlined"
          href={project.viewProjectLink}
          target="_blank"
          size="small"
        >
          View Project
        </Button>
        <Button
          variant="outlined"
          href={project.viewCodeLink}
          target="_blank"
          size="small"
        >
          View Code
        </Button>
      </Box>
    </Card>
  );
};

const Projects = () => {
  return (
    <Hero>
      <Container maxWidth="lg">
        <Typography variant="h2" color="primary.contrastText" align="center" marginTop='20px' padding='10px'> Projetos </Typography>
        <Box sx={{ padding: "20px" }}>
          <Grid container spacing={4} justifyContent="center">
            {projects.map((project, index) => (
              <Grid item key={index} xs={12} sm={6} md={6}  sx={{ display: 'flex', justifyContent: 'center' }}>
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