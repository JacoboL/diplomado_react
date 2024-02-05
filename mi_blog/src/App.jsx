import "./App.css";

import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./Theme.jsx";

import SearchAppBar from "./components/SearchAppBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/home";
import Busqueda from "./pages/busqueda";
import Articulo from "./pages/Articulo.jsx";
import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar pagina={setPage} />
        {page === 1
          ? <Home/>
          : page === 2
          ? <Busqueda/>
          : <Articulo />}        
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
