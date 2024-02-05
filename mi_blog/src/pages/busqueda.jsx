import React, { useState } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import Grid from "@mui/material/Unstable_Grid2";

import { useTheme } from "@mui/material/styles";

import BusquedaMediaCard from "../components/BusquedaMediaCard";

function Filtro({ texto, filtros, borrar }) {
  const theme = useTheme();
  const handleDelete = () => {
    borrar(filtros.filter((f) => f != texto));
  };

  return (
    <Chip
      label={texto}
      color="primary"
      clickable
      sx={{
        "& .MuiChip-label": {
          color: theme.palette.info.main,
          fontWeight: "550",
          fontSize: 16,
        },
      }}
      onDelete={handleDelete}
    />
  );
}

function Encabezado({ filtros, quitar }) {
  const theme = useTheme();
  return (
    <Box sx={{ mb: 5 }}>
      <Box justifyContent={"left"} alignItems={"left"} display={"flex"}>
        <Typography gutterBottom variant="h4" component="div" align="left">
          Filtros
        </Typography>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 2 }} sx={{ ml: 2 }}>
          {filtros.map((f, i) => (
            <Grid key={i}>
              <Filtro texto={f} filtros={filtros} borrar={quitar} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Divider
        sx={{
          my: 1,
          borderBottomWidth: 4,
          backgroundColor: theme.palette.primary.main,
        }}
      />
    </Box>
  );
}

function Busqueda() {
  const tarjeta = {
    id: 1,
    imagen: "imagen_demo.jpg",
    imagenFondo: "imagen_demo_h.jpg",
    titulo: "Dune",
    creador: "Frank Herbert",
    autor: "Jacobo Leyva",
    estreno: "1967",
    fecha: "31.02.2024",
    medio: "pelicula",
    sinopsis:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus distinctio quasi voluptate dolor praesentium, incidunt rem nemo iusto at, optio id fuga cupiditate eos architecto. Incidunt, corporis natus cumque impedit in officia laborum vel?",
    keyWords: [
      { texto: "Espacial", enlace: "#" },
      { texto: "Soft Sci-fi", enlace: "#" },
      { texto: "Saga Dune", enlace: "#" },
      { texto: "Futurista", enlace: "#" },
    ],
  };
  const datos = [
    tarjeta,
    tarjeta,
    tarjeta,
    tarjeta,
    tarjeta,
    tarjeta,
    tarjeta,
    tarjeta,
  ];
  const filtros_de_busqueda = ["Espacial", "Soft Sci-fi", "Saga", "Futurista"];

  const [filtros, setFiltros] = useState(filtros_de_busqueda);

  return (
    <Paper elevation={1} sx={{ px: { xs: 3, sm: 6, md: 12 }, py: 6 }}>
      {filtros === undefined || filtros.length == 0 ? (
        <Typography gutterBottom variant="h3" component="div" align="left">
          Dune
        </Typography>
      ) : (
        <Encabezado filtros={filtros} quitar={setFiltros} />
      )}
      <Grid
        container
        rowSpacing={4}
        columnSpacing={{ xs: 1, sm: 2, md: 10 }}
        sx={{ mt: 1 }}
      >
        {datos.map((t, i) => (
          <Grid key={i} xs={12} sm={12} md={12} lg={6}>
            <BusquedaMediaCard tarjeta={t} />
          </Grid>
        ))}
      </Grid>
      <Box
        justifyContent={"center"}
        alignItems={"center"}
        display={"flex"}
        sx={{ mt: 5 }}
      >
        <Pagination count={9} color="primary" size="large" />
      </Box>
    </Paper>
  );
}

export default Busqueda;
