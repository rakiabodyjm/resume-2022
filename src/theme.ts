import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = (options?: { darkMode?: boolean }) =>
  createTheme({
    typography: {
      fontFamily: ["DM Sans", '"Helvetica Neue"', "Arial", "sans-serif"].join(
        ","
      ),
      allVariants: {
        letterSpacing: -0.8,
        lineHeight: "normal",
      },
    },
    palette: {
      // mode: "dark",
      mode: options?.darkMode ? "dark" : "light",
      primary: {
        main: "#ff6c00",
      },
      secondary: {
        main: "#1C2A4A",
      },
      error: {
        main: red.A400,
      },
    },
    shape: {
      borderRadius: 24,
    },
  });

export default theme;
