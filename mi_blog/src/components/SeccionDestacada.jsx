import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
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
    <Box justifyContent={"left"} alignItems={"left"} display={"flex"}>
      <Grid
        container
        columnSpacing={{ xs: 1 }}
        rowSpacing={1}
        sx={{ pl: 1, pb: 1 }}
      >
        {datos.map((keyWord, i) => (
          <Grid key={i}>
            <KeyWord texto={keyWord.texto} link={keyWord.enlace} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

function CardFooter() {
  const theme = useTheme();

  return (
    <Box display={"flex"} justifyContent={"space-between"}>
      <KeyWords />
      <Box justifyContent={"right"} alignItems={"right"} display={"flex"}>
        <Button
          variant="text"
          endIcon={<ArrowForwardIosIcon />}
          sx={{ color: theme.palette.background.paper }}
        >
          Leer Más
        </Button>
      </Box>
    </Box>
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
          <Grid xs={12} sm={12} md={4} sx={{ justifyItems: "center" }}>
              <Typography component="div" variant="h3">
                Libro Destacado
              </Typography>
            <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
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
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={8}>
            <CardContent sx={{ height: "90%" }}>
              <Typography component="div" variant="h2">
                Dune
              </Typography>
              <Typography variant="subtitle1" component="div">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
                eaque voluptas reprehenderit voluptatibus. Maiores enim esse
                unde voluptatem quod dicta nesciunt temporibus, illum id
                repudiandae, accusamus velit? Id repellendus ullam consequuntur
                numquam necessitatibus nostrum magni placeat officiis
                consequatur quibusdam distinctio sequi ipsa, ea nihil accusamus
                eligendi, cum totam eos vero doloribus aperiam aspernatur
                dignissimos doloremque? Praesentium neque impedit, odit amet
                architecto aliquam ut explicabo natus a pariatur necessitatibus
                error quae quibusdam beatae itaque repellat nam numquam sint
                alias rerum ad est! Eveniet facilis a nisi qui sint, unde
                deleniti? Eius architecto fugit delectus sapiente quidem, minima
                distinctio veniam molestias odit.
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
