import React from 'react'
import Paper from "@mui/material/Paper";

import Portada from "../components/Portada.jsx";
import SeccionPrincipal from "../components/SeccionPrincipal.jsx";
import Seccion from "../components/Seccion.jsx";
import SeccionDestacada from "../components/SeccionDestacada.jsx";

function Home() {
  return (
    <>
      <Portada />
      <Paper elevation={1}>
        <SeccionPrincipal />
        <Seccion />
        <SeccionDestacada />
        <Seccion />
      </Paper>
    </>
  )
}

export default Home