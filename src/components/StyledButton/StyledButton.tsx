import { styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledButtonProps {
  children: ReactNode;
  onClick?: () => void;
}

// Defined once at module scope — not recreated on every render.
const Root = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.palette.secondary.main}`,
  borderRadius: "8px",
  padding: "8px 18px",
  width: "100%",
  color: theme.palette.primary.contrastText,
  fontSize: "0.95rem",
  fontWeight: 600,
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  transition: "background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
    transform: "translateY(-2px)",
    boxShadow: `0 6px 18px ${theme.palette.secondary.main}55`,
  },
  "&:active": {
    transform: "translateY(0)",
  },
}));

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => (
  <Root onClick={onClick}>{children}</Root>
);

export default StyledButton;
