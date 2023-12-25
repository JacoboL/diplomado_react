import "./App.css";
import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./Theme.js";

import SearchAppBar from "./components/SearchAppBar.js";
import Portada from "./components/Portada.js";
import SeccionPrincipal from "./components/SeccionPrincipal.js";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar />
        <Portada />
        <SeccionPrincipal/>
      </ThemeProvider>
    </>
  );
}

export default App;
