import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import { frontendProjects } from "../../data/projects";

const Projects = () => (
  <ProjectsSection id="projects-frontend" title="Projetos Front End" projects={frontendProjects} />
);

export default Projects;
