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


      ```tsx
<Typography
  variant="h6"
  color="text.secondary"
  mt={6}
  lineHeight={1.8}
  maxWidth="md"
  mx="auto"
>
  Sou desenvolvedor de software com foco em Back-end, especializado no desenvolvimento de APIs, integração de sistemas e construção de soluções escaláveis utilizando Python.

  <br />
  <br />

  Possuo mais de 1 ano de experiência profissional no desenvolvimento e manutenção de sistemas com Python e MySQL, participando da implementação de novas funcionalidades, automações, integrações entre sistemas e otimização de processos. Também tenho experiência prática com Git, Docker, Kubernetes, CI/CD e bancos de dados relacionais.

  <br />
  <br />

  Nos meus projetos pessoais, desenvolvo aplicações utilizando FastAPI, PostgreSQL e SQLAlchemy, aplicando princípios de arquitetura de software, boas práticas de desenvolvimento, autenticação, documentação de APIs, conteinerização e ambientes de desenvolvimento com Docker.

  <br />
  <br />

  Também venho explorando o uso de Inteligência Artificial Generativa por meio da integração de Large Language Models (LLMs) em aplicações reais, criando APIs capazes de consumir modelos de IA para automatizar recomendações, análises e fluxos inteligentes.

  <br />
  <br />

  Atualmente estou aprofundando meus conhecimentos em arquitetura de software, Cloud Computing e AWS, buscando desenvolver soluções cada vez mais robustas, escaláveis e preparadas para ambientes de produção.
</Typography>
```

  </Container>
);

export default About;
