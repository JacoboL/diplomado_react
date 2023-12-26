import { Divider, Paper, Typography } from "@mui/material";
import MediaCard from "./MediaCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";

export default function Seccion() {
  const tarjeta_v = {
    imagen: "imagen_demo.jpg",
    titulo: "Dune",
    creador: "Frank Herbert",
    autor: "Jacobo Leyva",
    estreno: "1967",
    fecha: "31.02.2024",
  };

  return (
    <Paper elevation={1} sx={{ py: 6 }}>
      <Grid container columnSpacing={{ xs: 2 }} sx={{px: 12}}>
        <Grid>
          <MovieOutlinedIcon sx={{ fontSize: 60 }} />
        </Grid>
        <Grid>
          <Typography variant="h2">Películas</Typography>
        </Grid>
        <Grid xs={10}>
          <Divider sx={{ mb: 3, borderBottomWidth: 5 }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid xs={3}>
          <MediaCard tarjeta={tarjeta_v} />
        </Grid>
        <Grid xs={3}>
          <MediaCard tarjeta={tarjeta_v} />
        </Grid>
        <Grid xs={3}>
          <MediaCard tarjeta={tarjeta_v} />
        </Grid>
        <Grid xs={3}>
          <MediaCard tarjeta={tarjeta_v} />
        </Grid>
        <Grid xs={3}>
          <MediaCard tarjeta={tarjeta_v} />
        </Grid>
        <Grid xs={3}>
          <MediaCard tarjeta={tarjeta_v} />
        </Grid>
      </Grid>
    </Paper>
  );
}
