import { Divider } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MediaCard({ tarjeta, vertical = true }) {
  const ratio = vertical ? "0.665" : "1.8";

  return (
    <Card sx={{ borderRadius: 3 }} elevation={2}>
      <CardMedia
        sx={{ aspectRatio: ratio, borderRadius: 3, borderBottom: 8, borderTop: 0, borderRight: 0, borderLeft: 6, borderColor: 'secondary.dark'}}
        image={tarjeta.imagen}
        title="green iguana"
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          align="center"
          noWrap="true"
        >
          {tarjeta.titulo}
        </Typography>
        <Divider sx={{ mb: 3, borderBottomWidth: 5 }} />
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={6}>
            <Typography variant="body1" color="text.secondary">
              {tarjeta.creador}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body1" color="primary" align="end">
              {tarjeta.autor}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body1" color="text.secondary">
              {tarjeta.estreno}
            </Typography>
          </Grid>
          <Grid xs={6}>
            <Typography variant="body1" color="primary" align="end">
              {tarjeta.fecha}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
