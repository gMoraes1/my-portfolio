import { Button, Container, Grid, styled, Typography } from "@mui/material";
import foto from "../../../assets/images/foto.jpeg";
import DownloadIcon from '@mui/icons-material/Download';
import MailIcon from '@mui/icons-material/Mail';

function Hero() {
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    borderRadius: "50%",

  }));

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid
              item // Adicionando a propriedade 'item'
              xs={12}
              md={4} // Responsividade: md vai ocupar 4 colunas a partir de 960px
            >
              <StyledImg src={foto} />
            </Grid>
            <Grid
              item // Adicionando a propriedade 'item'
              xs={12}
              md={8} // Responsividade: md vai ocupar 8 colunas a partir de 960px
            >
              <Typography color="primary" variant="h1" textAlign="center">
                Gustavo Moraes
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                Eu sou desenvolvedor front-end
              </Typography>

              {/* Grid Container para os botões */}
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" startIcon={<DownloadIcon />}>
                    Download CV
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="contained" startIcon={<MailIcon />}>
                    Contato
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
