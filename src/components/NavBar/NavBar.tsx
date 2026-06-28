import { AppBar, Box, MenuItem, Toolbar, styled } from "@mui/material";
import { tokens } from "../../theme";

const GlassToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  padding: theme.spacing(1),
}));

const NavItem = styled(MenuItem)(({ theme }) => ({
  borderRadius: 8,
  fontWeight: 600,
  transition: "color 0.25s ease, background-color 0.25s ease",
  "&:hover": {
    color: theme.palette.secondary.light,
    backgroundColor: "rgba(255, 255, 255, 0.06)",
  },
}));

const sections = [
  { id: "about", label: "Sobre" },
  { id: "skills", label: "Habilidades" },
  { id: "projects", label: "Projetos" },
];

const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: "rgba(15, 15, 15, 0.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: `1px solid ${tokens.border}`,
      }}
    >
      <Box maxWidth="lg" width="100%" mx="auto">
        <GlassToolbar>
          {sections.map((section) => (
            <NavItem key={section.id} onClick={() => scrollToSection(section.id)}>
              {section.label}
            </NavItem>
          ))}
        </GlassToolbar>
      </Box>
    </AppBar>
  );
};

export default NavBar;
