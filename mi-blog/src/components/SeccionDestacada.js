import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, CardMedia, IconButton, Typography, Button, Chip } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function KeyWord({ texto, link }) {
  return (
    <Chip
      label={texto}
      color="info"
      component="a"
      href={link}
      clickable
      sx={{
        "& .MuiChip-label": {
          color: "#8B8B72",
          fontWeight: "700",
          fontSize: 16,
          letterSpacing: "0.1rem",
        },
      }}
    />
  );
}

function KeyWords() {
  const datos = [
    { texto: "Espacial", enlace: "#" },
    { texto: "Soft Sci-fi", enlace: "#" },
    { texto: "Saga Dune", enlace: "#" },
    { texto: "Futurista", enlace: "#" },
  ];

  return (
    <Grid container columnSpacing={{ xs: 1 }}>
      {datos.map((keyWord) => (
        <Grid>
          <KeyWord texto={keyWord.texto} link={keyWord.enlace} />
        </Grid>
      ))}
    </Grid>
  );
}

function CardFooter() {
  return (
    <Grid container spacing={2} sx={{ pb: 2 }}>
      <Grid xs={10}>
        <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
          <KeyWords />
        </Box>
      </Grid>
      <Grid xs={2}>
        <IconButton
          aria-label="Ver Mas"
          sx={{ borderRadius: "25%", marginLeft: "auto" }}
        >
          <Button
            color="info"
            endIcon={<ArrowForwardIosIcon fontSize="large" />}
          >
            Leer Más
          </Button>
        </IconButton>
      </Grid>
    </Grid>
  );
}

function SeccionDestacada() {
  const theme = useTheme();

  return (
    <>
      <Card
        elevation={3}
        sx={{
          display: "flex",
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.background.paper,
        }}
      >
          <Grid container columnSpacing={{ xs: 1 }} sx={{ p: 6 }}>
            <Grid xs={12} sm={12} md={3} sx={{ justifyItems: "center" }}>
              <Typography component="div" variant="h3">
                Libro Destacado
              </Typography>
              <CardMedia
                component="img"
                sx={{
                  maxWidth: 351,
                  aspectRatio: "0.665",
                  borderRadius: 3,
                  border: 4.5,
                }}
                image="imagen_demo.jpg"
                alt="Dune"
              />
            </Grid>
            <Grid xs={12} sm={12} md={8}>
              <CardContent sx={{ height: "94%" }}>
                <Typography component="div" variant="h2">
                  Dune
                </Typography>
                <Typography variant="subtitle1" component="div">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Saepe eaque voluptas reprehenderit voluptatibus. Maiores enim
                  esse unde voluptatem quod dicta nesciunt temporibus, illum id
                  repudiandae, accusamus velit? Id repellendus ullam
                  consequuntur numquam necessitatibus nostrum magni placeat
                  officiis consequatur quibusdam distinctio sequi ipsa, ea nihil
                  accusamus eligendi, cum totam eos vero doloribus aperiam
                  aspernatur dignissimos doloremque? Praesentium neque impedit,
                  odit amet architecto aliquam ut explicabo natus a pariatur
                  necessitatibus error quae quibusdam beatae itaque repellat nam
                  numquam sint alias rerum ad est! Eveniet facilis a nisi qui
                  sint, unde deleniti? Eius architecto fugit delectus sapiente
                  quidem, minima distinctio veniam molestias odit.
                </Typography>
              </CardContent>
              <CardFooter />
            </Grid>
          </Grid>
        
      </Card>
    </>
  );
}

export default SeccionDestacada;
