import { createTheme, responsiveFontSizes } from "@mui/material";

/**
 * Design tokens — single source of truth for the portfolio's look & feel.
 * Tweak these and the whole UI follows.
 */
export const tokens = {
  accent: "#4f8e3e",
  accentLight: "#6cb558",
  surface: "#161616",
  surfaceGlass: "rgba(255, 255, 255, 0.04)",
  border: "rgba(255, 255, 255, 0.10)",
  borderHover: "rgba(108, 181, 88, 0.55)",
} as const;

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1a1a1a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: tokens.accent,
      light: tokens.accentLight,
    },
    background: {
      default: "#0f0f0f",
      paper: tokens.surface,
    },
    text: {
      primary: "#f5f5f5",
      secondary: "#b3b3b3",
    },
  },
  shape: {
    borderRadius: 14,
  },
  typography: {
    fontFamily: ['"Helvetica Neue"', "Arial", "sans-serif"].join(","),
    h1: { fontWeight: 800, letterSpacing: "-0.02em" },
    h2: { fontWeight: 700, letterSpacing: "-0.01em" },
    h3: { fontWeight: 600 },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: { scrollBehavior: "smooth" },
        body: {
          background:
            "radial-gradient(1200px 600px at 80% -10%, rgba(79, 142, 62, 0.18), transparent 60%)," +
            "radial-gradient(900px 500px at 0% 100%, rgba(79, 142, 62, 0.10), transparent 55%)," +
            "#0f0f0f",
          backgroundAttachment: "fixed",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
