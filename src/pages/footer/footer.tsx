
import styled from '@emotion/styled';
import { Theme, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

// Estilizando o footer fora do componente
const StyledFooter = styled('footer')(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '20px 0',
  marginTop: '40px',
  textAlign: 'center',
}));

const IconContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '15px',
  marginTop: '10px',

'& a': {
  color: '0077b5',
  textDecoration: 'none',
  transition: 'color 0.3s',
  '&:hover': {
    color: '#f39c12', // laranja vibrante

  },
},


  });

function FooterDois() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter theme={theme}>
      <Typography color="primary" variant="h3" pb={2}>
        Todos os direitos reservados a mim. {currentYear}
      </Typography>
      <IconContainer>
        <a href="https://www.linkedin.com/in/gustavo-moraes-4001542b8/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon fontSize="large" />
        </a>
        <a href="https://github.com/gMoraes1" target="_blank" rel="noopener noreferrer">
          <GitHubIcon fontSize="large" />
        </a>
        <a href="https://www.instagram.com/g___moraes/" target="_blank" rel="noopener noreferrer">
          <InstagramIcon fontSize="large" />
        </a>
      </IconContainer>
      <Typography variant="body1" color="textSecondary">
        Construindo soluções inovadoras para o futuro.
      </Typography>
    </StyledFooter>
  );
}

export default FooterDois;