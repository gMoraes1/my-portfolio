import { Button, Grid, styled, Typography,Container } from "@mui/material";
import JavascriptIcon from "@mui/icons-material/Code";
import TypescriptIcon from "@mui/icons-material/Code";
import React from "@mui/icons-material/Language";
import GitIcon from "@mui/icons-material/GitHub";
import CssIcon from "@mui/icons-material/Style";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode"; // Usando como substituto para Python
import SqlIcon from "@mui/icons-material/Storage";
import Node from "@mui/icons-material/Extension";
const skills = [
  { label: "Javascript", icon: <JavascriptIcon /> },
  { label: "Typescript", icon: <TypescriptIcon /> },
  { label: "React", icon: <React/> },
  { label: "Git", icon: <GitIcon /> },
  { label: "CSS", icon: <CssIcon /> },
  { label: "Python", icon: <DeveloperModeIcon /> }, // Substitua pelo ícone personalizado, se disponível
  { label: "SQL", icon: <SqlIcon /> },
  { label: "Node", icon: <Node /> },
];

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "white",
  color: theme.palette.primary.main,
  transition: "background-color 0.3s, color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
  },
}));

function Skill() {
  return (
    <div id="skills">
    <Container maxWidth="lg" sx={{marginBottom:30}}>
      <Typography color="primary" variant="h2" textAlign="center" pb={5} marginTop="150px" marginBottom="20px" >
        Habilidades
      </Typography>
      
      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        
      >
        {skills.map((skill) => (
          <Grid
            item
            key={skill.label}
            xs={5}
            sm={3}
            display="flex"
          alignItems="center"
            justifyContent="center"
            marginBottom="10px"
         

          
          >
            <StyledButton
              variant="outlined"
              startIcon={skill.icon}
              sx={{ minWidth: 100 }} // Ajuste conforme necessário
            >
              {skill.label}
            </StyledButton>
          </Grid>
        ))}
      </Grid>
    </Container>
    </div>
  );
}

export default Skill;
