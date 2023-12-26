import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./Theme.js";

import SearchAppBar from "./components/SearchAppBar.js";
import Portada from "./components/Portada.js";
import SeccionPrincipal from "./components/SeccionPrincipal.js";
import Seccion from "./components/Seccion.js";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar />
        <Portada />
        <SeccionPrincipal />
        <Seccion />
      </ThemeProvider>
    </>
  );
}

export default App;
