import './App.css'

import { CssBaseline, ThemeProvider } from "@mui/material";

import theme from "./Theme.jsx";

import SearchAppBar from "./components/SearchAppBar.jsx";
import Footer from "./components/Footer.jsx";
import Home from './pages/home'
import Busqueda from './pages/busqueda'
import Articulo from './pages/Articulo.jsx';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar />
        {/*<Home/>*/}
        {/*<Busqueda/>*/}
        <Articulo/>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default App
