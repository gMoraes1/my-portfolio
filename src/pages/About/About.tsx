import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

// Estilo para o Card usando styled
const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white', // cor inicial branca
  color: theme.palette.primary.main, // cor do texto
  transition: 'background-color 0.3s, color 0.3s', // transição suave
  '&:hover': {
    backgroundColor: theme.palette.secondary.main, // cor ao passar o mouse (verde)
    color: 'white', // cor do texto ao passar o mouse
  },
}));

function AboutMe() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        About me
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <WorkIcon style={{ fontSize: 40 }} />
              <Typography variant="h6" component="div">
                Experience
              </Typography>
              <Typography variant="body2">
                1+ years
              </Typography>
              <Typography variant="body2">
                Frontend Development
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <SchoolIcon style={{ fontSize: 40 }} />
              <Typography variant="h6" component="div">
                Education
              </Typography>
              <Typography variant="body2">
                Bachelor's Degree
              </Typography>
              <Typography variant="body2">
                Electrical Engineer
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;
