import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import StyledButton from "../StyledButton/StyledButton";
import { tokens } from "../../theme";
import type { Project } from "../../data/projects";

// Glassmorphism card — defined at module scope so it isn't recreated per render.
const GlassCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: 520,
  height: "100%",
  padding: theme.spacing(1),
  borderRadius: 18,
  backgroundColor: tokens.surfaceGlass,
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: `1px solid ${tokens.border}`,
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.35)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: tokens.borderHover,
    boxShadow: `0 0 0 1px ${tokens.borderHover}, 0 18px 40px rgba(0, 0, 0, 0.45)`,
  },
}));

const ProjectCard = ({ project }: { project: Project }) => (
  <GlassCard elevation={0}>
    <CardMedia
      component="img"
      image={project.image}
      alt={project.title}
      sx={{
        height: 220,
        borderRadius: "12px",
        objectFit: "cover",
      }}
    />
    <CardContent
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        px: 2,
      }}
    >
      <Typography variant="h6" fontWeight={700}>
        {project.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" fontStyle="italic">
        {project.date}
      </Typography>
      <Typography variant="body2" color="text.primary">
        {project.description}
      </Typography>
      <Typography variant="body2" color="secondary.light" sx={{ mt: "auto", pt: 1 }}>
        {project.technologies}
      </Typography>
    </CardContent>
    <Box sx={{ display: "flex", gap: 2, p: 2, pt: 0 }}>
      {project.viewProjectLink && (
        <StyledButton onClick={() => window.open(project.viewProjectLink, "_blank")}>
          Ver Projeto
        </StyledButton>
      )}
      <StyledButton onClick={() => window.open(project.viewCodeLink, "_blank")}>
        Ver Código
      </StyledButton>
    </Box>
  </GlassCard>
);

export default ProjectCard;
