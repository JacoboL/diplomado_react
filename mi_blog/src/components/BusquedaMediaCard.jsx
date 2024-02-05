import React from "react";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

function KeyWord({ texto, link }) {
  const theme = useTheme();
  return (
    <Chip
      label={texto}
      color="primary"
      component="a"
      href={link}
      clickable
      sx={{
        "& .MuiChip-label": {
          color: theme.palette.info.main,
          fontWeight: "550",
          fontSize: 12,
        },
      }}
    />
  );
}

function KeyWords({ datos }) {
  return (
    <Grid
      container
      spacing={{ xs: 1 }}
      sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
    >
      {datos.map((keyWord, i) => (
        <Grid key={i}>
          <KeyWord texto={keyWord.texto} link={keyWord.enlace} />
        </Grid>
      ))}
    </Grid>
  );
}

function Encabezado({ titulo, creador, autor, estreno, fecha }) {
  const theme = useTheme();
  return (
    <>
      <Typography
        gutterBottom
        variant="h4"
        component="div"
        align="left"
        noWrap={true}
      >
        {titulo}
      </Typography>
      <Divider
        sx={{
          mb: 1,
          borderBottomWidth: 5,
          backgroundColor: theme.palette.secondary.main,
        }}
      />
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
        <Grid xs={6}>
          <Typography variant="body1" color="text.secondary" noWrap={true}>
            {creador}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="body1" color="primary" align="right">
            {autor}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="body1" color="text.secondary">
            {estreno}
          </Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="body1" color="primary" align="right">
            {fecha}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

function BusquedaMediaCard({ tarjeta }) {
  const theme = useTheme();

  return (
    <Card sx={{ borderRadius: 3, display: "flex" }} elevation={2}>
      <CardActionArea sx={{ minWidth: 250, maxWidth: 550 }}>
        <CardMedia
          sx={{
            aspectRatio: "0.665",
            borderRadius: 3,
            borderBottom: 8,
            borderTop: 0,
            borderRight: 0,
            borderLeft: 6,
            borderColor: theme.palette.secondary.main,
            objectFit: "cover",
          }}
          component="img"
          image={tarjeta.imagen}
          title={tarjeta.titulo}
          alt={tarjeta.titulo}
        />
      </CardActionArea>
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Encabezado
          titulo={tarjeta.titulo}
          creador={tarjeta.creador}
          autor={tarjeta.autor}
          estreno={tarjeta.estreno}
          fecha={tarjeta.fecha}
        />
        <Box sx={{ my: 2 }}>
          <Typography variant="body1" color="text.primary" align="left">
            {tarjeta.sinopsis}
          </Typography>
        </Box>
        <KeyWords datos={tarjeta.keyWords} />
      </CardContent>
    </Card>
  );
}

export default BusquedaMediaCard;
