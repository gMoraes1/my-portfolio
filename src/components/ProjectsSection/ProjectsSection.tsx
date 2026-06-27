import { Box, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ProjectCard from "../ProjectCard/ProjectCard";
import type { Project } from "../../data/projects";

const Section = styled("section")(({ theme }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
}));

interface ProjectsSectionProps {
  id: string;
  title: string;
  projects: Project[];
}

const ProjectsSection = ({ id, title, projects }: ProjectsSectionProps) => (
  <Box id={id} component="div">
    <Section>
      <Container maxWidth="lg">
        <Typography variant="h2" align="center" mb={6}>
          {title}
        </Typography>
        <Grid container spacing={4} justifyContent="center" alignItems="stretch">
          {projects.map((project) => (
            <Grid
              item
              key={project.title}
              xs={12}
              sm={6}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ProjectCard project={project} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Section>
  </Box>
);

export default ProjectsSection;
