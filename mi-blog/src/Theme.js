import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#8B8B72",
      },
      secondary: {
        main: "#D7A107",
      },
      error: {
        main: "#D6063C",
      },
      background: {
        default: "#202023",
        paper: "#28282A",
      },
      success: {
        main: "#06D623",
      },
      divider: "rgba(215,161,7,0.5)",
      text: {
        primary: "#E8E5DF",
      },
    },
    components: {
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontSize: 20,
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: "#E8E5DF",
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            padding: "2rem 5rem",
          },
        },
      },
    },
  })
);

export default theme;
