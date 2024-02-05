import { styled } from "@mui/material/styles";
import TituloSeccion from "./TituloSeccion";
import MediaCard from "./MediaCard";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Unstable_Grid2";

import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";

const CustomScrollBar = styled(Box)(({ theme }) => ({
  overflow: "auto",
  whiteSpace: "nowrap",
  overflowY: "hidden",
  "&::-webkit-scrollbar": {
    height: 10,
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: theme.palette.background.default,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function Seccion() {
  const titulo = {
    texto: "Películas",
    icono: <MovieOutlinedIcon sx={{fontSize: 60 }}/>,
    enlace: "#",
  };
  const tarjeta = {
    id: 0,
    imagen: "imagen_demo.jpg",
    titulo: "Dune",
    creador: "Frank Herbert",
    autor: "Jacobo Leyva",
    estreno: "1967",
    fecha: "31.02.2024",
    tipo: "libro",
  };

  const datos = [tarjeta, tarjeta, tarjeta, tarjeta, tarjeta, tarjeta, tarjeta];

  return (
    <Box sx={{ py: 6, overflowX: "hidden" }}>
      <Box sx={{ px: { xs: 3, sm: 6, md: 12 } }}>
        <TituloSeccion titulo={titulo.texto} link={titulo.enlace}>
          {titulo.icono}
        </TituloSeccion>
      </Box>

      <CustomScrollBar>
        <Grid
          container
          direction={"row"}
          wrap="nowrap"
          spacing={4}
          columnSpacing={{ xs: 37 }}
          sx={{ ml: { xs: -15, sm:-12, md:-7}, mb: 2 }}
        >
          {datos.map((t, i) => (
            <Grid xs={3} key={i}>
              <MediaCard tarjeta={t} />
            </Grid>
          ))}
        </Grid>
      </CustomScrollBar>
    </Box>
  );
}
