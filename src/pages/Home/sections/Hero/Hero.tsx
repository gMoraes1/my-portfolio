import { Box, Container, Grid, Typography, styled } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Avatar from "../../../../assets/images/avatar.jpg";
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const RESUME_FILE = "/GustavoBackEndP.pdf";
const CONTACT_EMAIL = "gustavo.correiademoraes2006@gmail.com";

const StyledHero = styled("div")(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(6),
}));

const StyledImg = styled("img")(({ theme }) => ({
  width: "78%",
  borderRadius: "50%",
  border: `2px solid ${theme.palette.secondary.main}`,
  boxShadow: `0 0 40px ${theme.palette.secondary.main}55`,
}));

const Hero = () => {
  const handleGmailClick = () => {
    const subject = "Contato pelo portfólio";
    const body = "Olá Gustavo, gostaria de saber mais sobre o seu trabalho.";
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
  };

  const handleDownloadClick = () => {
    const link = document.createElement("a");
    link.href = RESUME_FILE;
    link.download = "Gustavo-Moraes-Curriculo.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={5}>
            <Box position="relative">
              <Box position="absolute" width="150%" top={-100} right={0}>
                <AnimatedBackground />
              </Box>
              <Box position="relative" textAlign="center">
                <StyledImg src={Avatar} alt="Foto de Gustavo Moraes" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h1" textAlign="center" pb={2}>
              Gustavo Moraes
            </Typography>
            <Typography variant="h3" color="secondary.light" textAlign="center">
              Programador Back End
            </Typography>
            <Grid container justifyContent="center" spacing={3} pt={6}>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={handleDownloadClick}>
                  <DownloadIcon fontSize="small" />
                  Currículo
                </StyledButton>
              </Grid>
              <Grid item xs={12} md={4} display="flex" justifyContent="center">
                <StyledButton onClick={handleGmailClick}>
                  <MailOutlineIcon fontSize="small" />
                  Gmail
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
