import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  color: theme.palette.primary.main, 
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: theme.palette.secondary.main, 
    color: 'white', 
  },
}));

function AboutMe() {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        Sobre mim
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <StyledCard>
            <CardContent>
              <WorkIcon style={{ fontSize: 40 }} />
              <Typography variant="h6" component="div">
              experiência
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
                Formação
              </Typography>
              <Typography variant="body2">
               Técnico em desenvolvimento de sistemas
              </Typography>
              <Typography variant="body2">
               Programador 
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;
