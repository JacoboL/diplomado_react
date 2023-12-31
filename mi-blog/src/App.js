import "./App.css";
import { CssBaseline, Paper, ThemeProvider } from "@mui/material";

import theme from "./Theme.js";

import SearchAppBar from "./components/SearchAppBar.js";
import Portada from "./components/Portada.js";
import SeccionPrincipal from "./components/SeccionPrincipal.js";
import Seccion from "./components/Seccion.js";
import SeccionDestacada from "./components/SeccionDestacada.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar />
        <Paper elevation={1}>
          <Portada />
          <SeccionPrincipal />
          <Seccion />
          <SeccionDestacada />
          <Seccion />
        </Paper>
        <Footer/>
      </ThemeProvider>
    </>
  );
}

export default App;
