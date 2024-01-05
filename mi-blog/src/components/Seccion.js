import { Box, Divider, Typography } from "@mui/material";
import MediaCard from "./MediaCard";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import { styled } from "@mui/material/styles";

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
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default function Seccion() {
  const tarjeta = {
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
      <Grid container columnSpacing={{ xs: 2 }} sx={{ px: 12 }}>
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

      <CustomScrollBar>
        <Grid
          container
          direction={"row"}
          wrap="nowrap"
          spacing={4}
          columnSpacing={{ xs: 35 }}
          sx={{ ml: -6, mb: 2 }}
        >
          {datos.map((t) => (
            <Grid xs={3}>
              <MediaCard tarjeta={t} />
            </Grid>
          ))}
        </Grid>
      </CustomScrollBar>
    </Box>
  );
}
