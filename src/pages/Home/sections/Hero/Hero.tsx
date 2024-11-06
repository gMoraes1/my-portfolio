import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MailOutlineIcon from '@mui/icons-material/MailOutline'; // Ícone de email genérico
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
    // Estilizando o Hero
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "100px",  // Para telas pequenas (mobile)
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0",  // Para telas maiores
        }
    }));

    // Estilo para a imagem
    const StyledImg = styled("img")(({ theme }) => ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }));

    // Função para abrir o Gmail com o email pré-preenchido
    const handleGmailClick = () => {
        const email = "gustavo.correiademoraes2006@gmail.com";
        const subject = "ola, tudo bem?";
        const body = "Olá, estou entrando em contato...";
    
        // Link para abrir o Gmail na web com os campos pré-preenchidos
        const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        // Abrir o link no navegador (nova aba)
        window.open(mailtoLink, "_blank");
    };

    // Função para baixar o currículo
    const handleDownloadClick = () => {
        window.open('/path/to/your/resume.pdf', '_blank');  // Substitua pelo caminho do seu currículo
    };

    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={5}>
                            <Box position="relative">
                                <Box position="absolute" width={"150%"} top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box position="relative" textAlign="center">
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={7}>
                            <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>
                                Gustavo Moraes
                            </Typography>
                            <Typography color="primary.contrastText" variant="h3" textAlign="center">
                                Eu sou desenvolvedor front end
                            </Typography>
                            <Grid container display="flex" justifyContent="center" spacing={4} pt={6}>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={handleDownloadClick}>
                                        <DownloadIcon />
                                        <Typography>Currículo</Typography>
                                    </StyledButton>
                                </Grid>
                                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                                    <StyledButton onClick={handleGmailClick}>
                                        <MailOutlineIcon />
                                        <Typography>Gmail</Typography>
                                    </StyledButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledHero>
        </>
    );
};

export default Hero;
