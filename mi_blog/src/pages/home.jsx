import React from 'react'
import { CssBaseline, Paper, ThemeProvider } from "@mui/material";

import theme from "../Theme.jsx";

import SearchAppBar from "../components/SearchAppBar.jsx";
import Portada from "../components/Portada.jsx";
import SeccionPrincipal from "../components/SeccionPrincipal.jsx";
import Seccion from "../components/Seccion.jsx";
import SeccionDestacada from "../components/SeccionDestacada.jsx";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SearchAppBar />
        <Portada />
        <Paper elevation={1}>
          <SeccionPrincipal />
          <Seccion />
          <SeccionDestacada />
          <Seccion />
        </Paper>
        <Footer/>
      </ThemeProvider>
    </>
  )
}

export default Home