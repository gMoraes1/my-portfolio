import ProjectsSection from "../../components/ProjectsSection/ProjectsSection";
import { backendProjects } from "../../data/projects";

const ProjectBack = () => (
  <ProjectsSection id="projects" title="Projetos" projects={backendProjects} />
);

export default ProjectBack;
