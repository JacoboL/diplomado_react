import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from "@mui/material/Unstable_Grid2";
import { useTheme } from "@mui/material/styles";

export default function MediaCard({ tarjeta, vertical = true }) {
  const theme = useTheme();

  const ratio = vertical ? "0.665" : "1.8";
  const imagen = vertical ? tarjeta.imagen : tarjeta.imagenFondo;

  return (
    <Card sx={{ borderRadius: 3, minWidth: "250px" }} elevation={2}>
      <CardMedia
        sx={{
          aspectRatio: ratio,
          borderRadius: 3,
          borderBottom: 8,
          borderTop: 0,
          borderRight: 0,
          borderLeft: 6,
          borderColor: theme.palette.secondary.main,
          objectFit: "cover",
        }}
        component="img"
        image={imagen}
        title={tarjeta.titulo}
        alt={tarjeta.titulo}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          align="center"
          noWrap={true}
        >
          {tarjeta.titulo}
        </Typography>
        <Divider
          sx={{
            mb: 3,
            borderBottomWidth: 5,
            backgroundColor: theme.palette.secondary.main,
          }}
        />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
          <Grid xs={6}>
            <Typography variant="body1" color="text.secondary" noWrap={true}>
              {tarjeta.creador}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body1" color="primary" align="right">
              {tarjeta.autor}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body1" color="text.secondary">
              {tarjeta.estreno}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body1" color="primary" align="right">
              {tarjeta.fecha}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
