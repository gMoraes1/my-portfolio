import React from "react";
import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";

// Função de rolagem que lida com diferentes offsets
const NavBar = () => {
    const StyledToobar = styled(Toolbar)(() => ({
        display: "flex",
        justifyContent: "space-evenly",
        padding: "10px",
        margin: "8px"
    }));

    // Função para rolar até a seção com um offset para ajustar a posição
    const scrollToSection = (sectionId:string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            let offset = 120;  // Offset padrão para About e Skills

            // Definir um offset específico para "projects" se necessário
            if (sectionId === "projects") {
                offset = -220;  // Exemplo de valor diferente para "projects"
            }

            const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: sectionPosition - offset,  // Subtrai o offset da posição
                behavior: 'smooth'  // Rolagem suave
            });
        }
    };

    return (
        <>
            <AppBar position="absolute">
                <StyledToobar>
                    <MenuItem onClick={() => scrollToSection('about')}>About</MenuItem>
                    <MenuItem onClick={() => scrollToSection('skills')}>Skills</MenuItem>
                    <MenuItem onClick={() => scrollToSection('projects')}>Projects</MenuItem>
                </StyledToobar>
            </AppBar>
        </>
    );
};

export default NavBar;
