import { createTheme } from "@mui/material/styles";
import { createBreakpoints } from "@mui/system";

const breakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#686868",
    },
    secondary: {
      main: "#f44336",
    },
    slateBlue: {
      main: "#777FEB",
    },
  },

  typography: {
    h2: {
      fontFamily: "Montserrat, Roboto, sans-serif",
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.5,
      color: "#000",
    },
    body1: {
      fontFamily: "Montserrat, sans-serif",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#686868",
      [breakpoints.up("md")]: {
        fontSize: "24px",
        lineHeight: 1.5,
        fontWeight: 500,
      },
    },
  },
});

export default theme;
