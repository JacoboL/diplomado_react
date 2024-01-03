import { Box } from "@mui/material";
import MediaCard from "./MediaCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import TituloSeccion from "./TituloSeccion";

export default function SeccionPrincipal() {
  const tarjeta = {
    imagen: "imagen_demo.jpg",
    imagenFondo: "imagen_demo_h.jpg",
    titulo: "Dune",
    creador: "Frank Herbert",
    autor: "Jacobo Leyva",
    estreno: "1967",
    fecha: "31.02.2024",
  };

  return (
    <Box sx={{ px: {xs: 3, sm: 6, md: 12}, py: 6 }}>
        
      <TituloSeccion titulo={"Ultimas Entradas"}/>

      <Grid container spacing={2} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
        <Grid xs={12} sm={12} md={6} sx={{ pr: 8 }}>
          <MediaCard tarjeta={tarjeta} />
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <Box>
            <Grid container spacing={2} rowSpacing={4}>
              <Grid xs={12} sm={4} md={12}>
                <MediaCard tarjeta={tarjeta} vertical={false} />
              </Grid>
              <Grid xs={12} sm={4} md={6}>
                <MediaCard tarjeta={tarjeta} vertical={false} />
              </Grid>
              <Grid xs={12} sm={4} md={6}>
                <MediaCard tarjeta={tarjeta} vertical={false} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
