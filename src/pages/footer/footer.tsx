import React from 'react';
import styled from '@emotion/styled';
import { Theme, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

// Estilizando o footer fora do componente
const StyledFooter = styled('footer')(({ theme }: { theme: Theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '20px 0',
  marginTop: '40px',
  textAlign: 'center',
}));

function FooterDois() {
  const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter theme={theme}>
      <Typography color="primary" variant="h2" pb={2}>
        Todos os direitos reservados a mim. {currentYear}
      </Typography>
      <div>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
        <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">GitHub</a> | 
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
      <Typography variant="body1" color="textSecondary">
        Construindo soluções inovadoras para o futuro.
      </Typography>
    </StyledFooter>
  );
}

export default FooterDois;