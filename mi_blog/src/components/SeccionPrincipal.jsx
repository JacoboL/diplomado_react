import MediaCard from "./MediaCard";
import TituloSeccion from "./TituloSeccion";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import FiberNewTwoToneIcon from '@mui/icons-material/FiberNewTwoTone';

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
        
      <TituloSeccion titulo={"Ultimas Entradas"}>
        <FiberNewTwoToneIcon sx={{fontSize: 60}}/>
      </TituloSeccion>

      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 10 }} sx={{p:0}}>
        <Grid xs={12} sm={12} md={5} >
          <MediaCard tarjeta={tarjeta} />
        </Grid>
        <Grid xs={12} sm={12} md={7}>
          <Box>
            <Grid container rowSpacing={{xs: 4, md: 8}} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
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
