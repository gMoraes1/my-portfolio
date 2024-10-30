import styled from "@emotion/styled";
import { Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

    
    const StyledHero = styled("div")(({ theme }: { theme: Theme }) => ({
      backgroundColor: theme.palette.primary.main,
      height: "100vh",
      display: "flex",
      alignItems: "center",
      [theme.breakpoints.up('xs')]: { // <= mobile
        paddingTop: "100px",
      },
      [theme.breakpoints.up('md')]: { // >= mobile
        paddingTop: "0",
      }
    }));

function FooterDois() {
  const currentYear = new Date().getFullYear();

  return (
    <>
    <footer>
    <Typography marginTop="40px" color="primary" variant="h2" textAlign="center" pb={2}>Todos os direitos reservados a mim. {currentYear}</Typography>
    </footer>
    </>
  );
}


export default FooterDois;
