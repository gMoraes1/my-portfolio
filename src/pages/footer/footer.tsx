import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import { tokens } from "../../theme";

const StyledFooter = styled("footer")(({ theme }) => ({
  padding: theme.spacing(6, 2),
  marginTop: theme.spacing(6),
  textAlign: "center",
  borderTop: `1px solid ${tokens.border}`,
}));

const IconContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
  "& a": {
    color: theme.palette.text.secondary,
    textDecoration: "none",
    transition: "color 0.25s ease, transform 0.25s ease",
    "&:hover": {
      color: theme.palette.secondary.light,
      transform: "translateY(-3px)",
    },
  },
}));

const socials = [
  { href: "https://www.linkedin.com/in/gustavo-moraes-dev", label: "LinkedIn", Icon: LinkedInIcon },
  { href: "https://github.com/gMoraes1", label: "GitHub", Icon: GitHubIcon },
  { href: "https://www.instagram.com/g___moraes/", label: "Instagram", Icon: InstagramIcon },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <Typography variant="h4">Gustavo Moraes</Typography>
      <IconContainer>
        {socials.map(({ href, label, Icon }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon fontSize="large" />
          </a>
        ))}
      </IconContainer>
      <Typography variant="body2" color="text.secondary" mt={3}>
        Construindo soluções inovadoras para o futuro. © {currentYear}
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
