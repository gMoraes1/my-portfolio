import { Button, Container, Grid, Typography, styled } from "@mui/material";
import {
  FaJava,
  FaReact,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiMysql,
  SiFastapi,
} from "react-icons/si";
import { MdAutorenew } from "react-icons/md";

const skills = [
  { label: "JavaScript", icon: <SiJavascript /> },
  { label: "TypeScript", icon: <SiTypescript /> },
  { label: "React", icon: <FaReact /> },
  { label: "Git", icon: <FaGitAlt /> },
  { label: "CSS", icon: <SiCss3 /> },
  { label: "Python", icon: <FaPython /> },
  { label: "SQL", icon: <SiMysql /> },
  { label: "FastAPI", icon: <SiFastapi /> },
  { label: "Docker", icon: <FaDocker /> },
  { label: "Cloud", icon: <FaAws /> },
  { label: "Java", icon: <FaJava /> },
  { label: "CI/CD", icon: <MdAutorenew /> },
];

const SkillButton = styled(Button)(({ theme }) => ({
  width: "100%",
  padding: "10px 16px",
  color: theme.palette.text.primary,
  borderColor: theme.palette.divider,
  backgroundColor: "rgba(255, 255, 255, 0.03)",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  transition: "all 0.25s ease",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    transform: "translateY(-3px)",
  },
}));

const Skill = () => (
  <Container id="skills" maxWidth="lg" sx={{ py: 12 }}>
    <Typography variant="h2" textAlign="center" mb={6}>
      Habilidades
    </Typography>
    <Grid container spacing={2} justifyContent="center">
      {skills.map((skill) => (
        <Grid item key={skill.label} xs={6} sm={4} md={3} lg={2}>
          <SkillButton variant="outlined" startIcon={skill.icon}>
            {skill.label}
          </SkillButton>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Skill;
