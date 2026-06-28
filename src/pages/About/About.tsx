import { Card, CardContent, Container, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import { tokens } from "../../theme";

const GlassCard = styled(Card)(() => ({
  height: "100%",
  textAlign: "center",
  padding: "8px",
  backgroundColor: tokens.surfaceGlass,
  backdropFilter: "blur(14px)",
  WebkitBackdropFilter: "blur(14px)",
  border: `1px solid ${tokens.border}`,
  transition: "transform 0.3s ease, border-color 0.3s ease",
  "&:hover": {
    transform: "translateY(-6px)",
    borderColor: tokens.borderHover,
  },
}));

const highlights = [
  {
    Icon: WorkIcon,
    title: "Experiência",
    lines: ["2 anos", "Desenvolvimento back end"],
  },
  {
    Icon: SchoolIcon,
    title: "Formação",
    lines: ["Engenharia de Software", "Técnico em Desenvolvimento de Sistemas"],
  },
];

const About = () => (
  <Container id="about" maxWidth="lg" sx={{ py: 12 }}>
    <Typography variant="h2" align="center" mb={6}>
      Sobre mim
    </Typography>

    <Grid container spacing={4} justifyContent="center">
      {highlights.map(({ Icon, title, lines }) => (
        <Grid item xs={12} sm={6} md={4} key={title}>
          <GlassCard elevation={0}>
            <CardContent>
              <Icon sx={{ fontSize: 44, color: "secondary.light" }} />
              <Typography variant="h6" mt={1}>
                {title}
              </Typography>
              {lines.map((line) => (
                <Typography key={line} variant="body1" fontWeight={600} color="text.secondary">
                  {line}
                </Typography>
              ))}
            </CardContent>
          </GlassCard>
        </Grid>
      ))}
    </Grid>

    <Typography variant="h6" color="text.secondary" mt={6} lineHeight={1.8} maxWidth="md" mx="auto">
      Iniciei minha trajetória como desenvolvedor focado em front-end, mas atualmente estou
      direcionando minha carreira para back-end e DevOps. Por isso, organizei este portfólio para
      refletir essa evolução, com projetos divididos por área de atuação.
      <br />
      <br />
      Tenho mais de 1 ano de experiência em desenvolvimento de sistemas utilizando Python e MySQL,
      com atuação prática em Git, CI/CD, Docker, Kubernetes e React. Atualmente, estou aprofundando
      meus conhecimentos em AWS e práticas de Cloud Computing.
      <br />
      <br />
      Tenho desenvolvido projetos pessoais com FastAPI para criação de APIs RESTful e agora estou me
      aprofundando no ecossistema do Java com Spring Boot, aplicando Docker e Docker Compose para
      conteinerização e orquestração.
      <br />
      <br />
      Sou comunicativo, colaborativo e focado em resultados. Já participei de projetos com aplicação
      de Machine Learning, desenvolvendo soluções escaláveis, otimizando processos e criando
      relatórios que apoiaram a tomada de decisão do time.
    </Typography>
  </Container>
);

export default About;
