import { Box, Divider, Paper, Typography } from "@mui/material";
import MediaCard from "./MediaCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import FiberNewTwoToneIcon from "@mui/icons-material/FiberNewTwoTone";

export default function SeccionPrincipal() {
  const tarjeta_v = {
    imagen: "imagen_demo.jpg",
    titulo: "Dune",
    creador: "Frank Herbert",
    autor: "Jacobo Leyva",
    estreno: "1967",
    fecha: "31.02.2024",
  };
  const tarjeta_h = {
    imagen: "imagen_demo_h.jpg",
    titulo: "Dune",
    creador: "Frank Herbert",
    autor: "Jacobo Leyva",
    estreno: "1967",
    fecha: "31.02.2024",
  };
  return (
    <Paper elevation={1} sx={{ px: 12, py: 6 }}>
        
      <Grid container columnSpacing={{ xs: 2}}>
        <Grid>
          <FiberNewTwoToneIcon sx={{ fontSize: 60 }} />
        </Grid>
        <Grid>
          <Typography variant="h2">Ultimas Entradas</Typography>
        </Grid>
        <Grid xs={10}>
          <Divider sx={{ mb: 3, borderBottomWidth: 5 }} />
        </Grid>
      </Grid>

      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid xs={12} sm={12} md={6} sx={{ pr: 8 }}>
          <MediaCard tarjeta={tarjeta_v} />
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <Box>
            <Grid container spacing={2} rowSpacing={4}>
              <Grid xs={12} sm={4} md={12}>
                <MediaCard tarjeta={tarjeta_h} vertical={false} />
              </Grid>
              <Grid xs={12} sm={4} md={6}>
                <MediaCard tarjeta={tarjeta_h} vertical={false} />
              </Grid>
              <Grid xs={12} sm={4} md={6}>
                <MediaCard tarjeta={tarjeta_h} vertical={false} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
